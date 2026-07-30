<?php

declare(strict_types=1);

use BrightAlliance\Contact\ContactApplication;
use BrightAlliance\Contact\ContactMailer;
use BrightAlliance\Contact\ContactSubmission;
use BrightAlliance\Contact\FileRateLimiter;
use BrightAlliance\Contact\GoogleSmtpMailer;
use BrightAlliance\Contact\RateLimiter;

require dirname(__DIR__) . '/vendor/autoload.php';

final class RecordingMailer implements ContactMailer
{
    /** @var list<ContactSubmission> */
    public array $submissions = [];
    public bool $shouldFail = false;

    public function send(ContactSubmission $submission): void
    {
        if ($this->shouldFail) {
            throw new RuntimeException('Simulated SMTP failure.');
        }
        $this->submissions[] = $submission;
    }
}

final class ConfigurableRateLimiter implements RateLimiter
{
    public bool $allowed = true;
    public bool $shouldFail = false;
    public int $consumeCalls = 0;

    public function consume(string $identifier, int $limit, int $windowSeconds): bool
    {
        $this->consumeCalls++;
        if ($this->shouldFail) {
            throw new RuntimeException('Simulated rate limiter failure.');
        }
        return $this->allowed;
    }
}

/**
 * @param mixed $actual
 * @param mixed $expected
 */
function assertSameValue(mixed $expected, mixed $actual, string $message): void
{
    if ($actual !== $expected) {
        throw new RuntimeException(
            $message . PHP_EOL
            . 'Expected: ' . var_export($expected, true) . PHP_EOL
            . 'Actual: ' . var_export($actual, true),
        );
    }
}

function assertTrueValue(bool $condition, string $message): void
{
    if (!$condition) {
        throw new RuntimeException($message);
    }
}

/**
 * @return array<string, mixed>
 */
function validServer(): array
{
    return [
        'REQUEST_METHOD' => 'POST',
        'HTTP_ORIGIN' => 'https://bachile.cl',
        'CONTENT_LENGTH' => '100',
        'REMOTE_ADDR' => '203.0.113.10',
    ];
}

/**
 * @return array<string, mixed>
 */
function validInput(): array
{
    return [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'message' => 'Necesito asesoría.',
        'locale' => 'es',
        'website' => '',
    ];
}

/**
 * @return array{ContactApplication, RecordingMailer, ConfigurableRateLimiter}
 */
function createApplication(): array
{
    $mailer = new RecordingMailer();
    $rateLimiter = new ConfigurableRateLimiter();
    $application = new ContactApplication(
        $mailer,
        $rateLimiter,
        ['https://bachile.cl', 'https://www.bachile.cl'],
    );

    return [$application, $mailer, $rateLimiter];
}

$tests = [];

$tests['accepts a valid Spanish submission'] = static function (): void {
    [$application, $mailer] = createApplication();
    $response = $application->handle(validServer(), validInput(), 'request-valid');

    assertSameValue(200, $response->status, 'Valid submission should return 200.');
    assertSameValue('sent', $response->code, 'Valid submission should report sent.');
    assertSameValue(1, count($mailer->submissions), 'Valid submission should invoke the mailer once.');
    assertSameValue('https://bachile.cl/contacto/', $mailer->submissions[0]->source, 'Spanish source should be included.');
};

$tests['accepts English and derives the English source page'] = static function (): void {
    [$application, $mailer] = createApplication();
    $input = validInput();
    $input['locale'] = 'en';
    $response = $application->handle(validServer(), $input, 'request-en');

    assertSameValue(200, $response->status, 'English submission should return 200.');
    assertSameValue('https://bachile.cl/en/contact/', $mailer->submissions[0]->source, 'English source should be included.');
};

$tests['rejects missing fields'] = static function (): void {
    [$application, $mailer] = createApplication();
    $response = $application->handle(validServer(), ['locale' => 'es'], 'request-missing');

    assertSameValue(400, $response->status, 'Missing fields should return 400.');
    assertSameValue('validation_error', $response->code, 'Missing fields should report validation_error.');
    assertSameValue(['name', 'email', 'message'], array_keys($response->errors), 'All missing fields should be identified.');
    assertSameValue(0, count($mailer->submissions), 'Invalid submission must not invoke mailer.');
};

$tests['rejects header injection in name and email values'] = static function (): void {
    [$application] = createApplication();
    $input = validInput();
    $input['name'] = "Victim\r\nBcc: attacker@example.com";
    $input['email'] = "victim@example.com\r\nBcc: attacker@example.com";
    $response = $application->handle(validServer(), $input, 'request-injection');

    assertSameValue(400, $response->status, 'Header injection should return 400.');
    assertSameValue('invalid', $response->errors['name'] ?? null, 'Header injection should invalidate name.');
    assertSameValue('invalid', $response->errors['email'] ?? null, 'Header injection should invalidate email.');
};

$tests['enforces field length limits'] = static function (): void {
    [$application] = createApplication();
    $input = validInput();
    $input['name'] = str_repeat('a', 121);
    $input['message'] = str_repeat('b', 5001);
    $response = $application->handle(validServer(), $input, 'request-lengths');

    assertSameValue(400, $response->status, 'Oversized fields should return 400.');
    assertSameValue(['name', 'message'], array_keys($response->errors), 'Oversized fields should be identified.');
};

$tests['returns generic success for honeypot submissions without sending'] = static function (): void {
    [$application, $mailer] = createApplication();
    $input = validInput();
    $input['website'] = 'https://spam.example';
    $response = $application->handle(validServer(), $input, 'request-honeypot');

    assertSameValue(200, $response->status, 'Honeypot should return generic success.');
    assertSameValue('sent', $response->code, 'Honeypot should not reveal bot detection.');
    assertSameValue(0, count($mailer->submissions), 'Honeypot must not invoke mailer.');
};

$tests['rate limits honeypot requests before logging them'] = static function (): void {
    [$application, $mailer, $rateLimiter] = createApplication();
    $rateLimiter->allowed = false;
    $input = validInput();
    $input['website'] = 'https://spam.example';
    $response = $application->handle(validServer(), $input, 'request-honeypot-limited');

    assertSameValue(429, $response->status, 'Rate-limited honeypot traffic should return 429.');
    assertSameValue(1, $rateLimiter->consumeCalls, 'Honeypot traffic must consume the rate limit.');
    assertSameValue(0, count($mailer->submissions), 'Rate-limited honeypot traffic must not invoke mailer.');
};

$tests['rate limits requests before rejecting their origin'] = static function (): void {
    [$application, $mailer, $rateLimiter] = createApplication();
    $server = validServer();
    $server['HTTP_ORIGIN'] = 'https://attacker.example';
    $response = $application->handle($server, validInput(), 'request-origin-limited');

    assertSameValue(400, $response->status, 'Invalid origin should still return 400 below the limit.');
    assertSameValue(1, $rateLimiter->consumeCalls, 'Invalid-origin traffic must consume the rate limit.');
    assertSameValue(0, count($mailer->submissions), 'Invalid-origin traffic must not invoke mailer.');
};

$tests['normalizes the locale before logging honeypot traffic'] = static function (): void {
    $mailer = new RecordingMailer();
    $rateLimiter = new ConfigurableRateLimiter();
    $events = [];
    $application = new ContactApplication(
        $mailer,
        $rateLimiter,
        ['https://bachile.cl'],
        static function (string $event, array $context) use (&$events): void {
            $events[] = [$event, $context];
        },
    );
    $input = validInput();
    $input['website'] = 'spam';
    $input['locale'] = str_repeat('x', 10_000);
    $response = $application->handle(validServer(), $input, 'request-honeypot-locale');

    assertSameValue(200, $response->status, 'Honeypot response should remain generic.');
    assertSameValue('es', $events[0][1]['locale'] ?? null, 'Logged locale must be normalized and bounded.');
};

$tests['rejects invalid origins and accepts a same-origin referer fallback'] = static function (): void {
    [$application, $mailer] = createApplication();
    $server = validServer();
    $server['HTTP_ORIGIN'] = 'https://attacker.example';
    $rejected = $application->handle($server, validInput(), 'request-origin');
    assertSameValue(400, $rejected->status, 'Cross-origin submission should return 400.');
    assertSameValue('invalid_origin', $rejected->code, 'Cross-origin submission should report invalid_origin.');

    unset($server['HTTP_ORIGIN']);
    $server['HTTP_REFERER'] = 'https://bachile.cl/contacto/';
    $accepted = $application->handle($server, validInput(), 'request-referer');
    assertSameValue(200, $accepted->status, 'Same-origin referer should be accepted.');
    assertSameValue(1, count($mailer->submissions), 'Accepted referer fallback should invoke mailer.');
};

$tests['rejects oversized payloads and non-POST methods'] = static function (): void {
    [$application] = createApplication();
    $server = validServer();
    $server['CONTENT_LENGTH'] = '16385';
    $oversized = $application->handle($server, validInput(), 'request-payload');
    assertSameValue(400, $oversized->status, 'Oversized payload should return 400.');
    assertSameValue('payload_too_large', $oversized->code, 'Oversized payload should report payload_too_large.');

    $server = validServer();
    $server['REQUEST_METHOD'] = 'GET';
    $wrongMethod = $application->handle($server, validInput(), 'request-method');
    assertSameValue(405, $wrongMethod->status, 'GET should return 405.');
};

$tests['returns 429 when the rate limit is exhausted'] = static function (): void {
    [$application, $mailer, $rateLimiter] = createApplication();
    $rateLimiter->allowed = false;
    $response = $application->handle(validServer(), validInput(), 'request-rate');

    assertSameValue(429, $response->status, 'Exhausted rate limit should return 429.');
    assertSameValue('rate_limited', $response->code, 'Exhausted rate limit should report rate_limited.');
    assertSameValue(0, count($mailer->submissions), 'Rate-limited submission must not invoke mailer.');
};

$tests['fails open when rate-limit storage is unavailable'] = static function (): void {
    [$application, $mailer, $rateLimiter] = createApplication();
    $rateLimiter->shouldFail = true;
    $response = $application->handle(validServer(), validInput(), 'request-rate-storage');

    assertSameValue(200, $response->status, 'Rate storage failure should not discard a legitimate lead.');
    assertSameValue(1, count($mailer->submissions), 'Rate storage failure should still invoke mailer.');
};

$tests['returns 502 when SMTP delivery fails'] = static function (): void {
    [$application, $mailer] = createApplication();
    $mailer->shouldFail = true;
    $response = $application->handle(validServer(), validInput(), 'request-smtp');

    assertSameValue(502, $response->status, 'SMTP failure should return 502.');
    assertSameValue('delivery_failed', $response->code, 'SMTP failure should report delivery_failed.');
};

$tests['escapes HTML in the generated email body'] = static function (): void {
    $mailer = new GoogleSmtpMailer(
        [
            'host' => 'smtp.gmail.com',
            'port' => 587,
            'username' => 'contacto@bachile.cl',
            'app_password' => 'test-app-password',
        ],
        'contacto@bachile.cl',
    );
    $submission = new ContactSubmission(
        '<script>alert(1)</script>',
        'test@example.com',
        '<img src=x onerror=alert(1)>',
        'es',
        'https://bachile.cl/contacto/',
        new DateTimeImmutable('2026-07-27 12:00:00', new DateTimeZone('America/Santiago')),
        'request-html',
    );
    $method = new ReflectionMethod($mailer, 'htmlBody');
    $body = $method->invoke($mailer, $submission);

    assertTrueValue(!str_contains($body, '<script>'), 'Email body must not contain raw script markup.');
    assertTrueValue(str_contains($body, '&lt;script&gt;'), 'Email body should contain escaped user markup.');
    assertTrueValue(!str_contains($body, '<img src=x'), 'Email body must not contain raw image markup.');
};

$tests['file rate limiter allows five attempts and blocks the sixth'] = static function (): void {
    $directory = sys_get_temp_dir() . '/ba-contact-test-' . bin2hex(random_bytes(4));
    $stateFile = $directory . '/rate-limit.json';
    $limiter = new FileRateLimiter($stateFile);

    try {
        for ($attempt = 1; $attempt <= 5; $attempt++) {
            assertTrueValue($limiter->consume('203.0.113.10', 5, 900), "Attempt {$attempt} should be allowed.");
        }
        assertTrueValue(!$limiter->consume('203.0.113.10', 5, 900), 'Sixth attempt should be blocked.');
    } finally {
        if (is_file($stateFile)) {
            unlink($stateFile);
        }
        if (is_dir($directory)) {
            rmdir($directory);
        }
    }
};

$failures = [];
foreach ($tests as $name => $test) {
    try {
        $test();
        fwrite(STDOUT, "PASS {$name}\n");
    } catch (Throwable $exception) {
        $failures[] = $name . ': ' . $exception->getMessage();
        fwrite(STDERR, "FAIL {$name}\n");
    }
}

if ($failures !== []) {
    fwrite(STDERR, "\n" . implode("\n\n", $failures) . "\n");
    exit(1);
}

fwrite(STDOUT, "\n" . count($tests) . " tests passed.\n");
