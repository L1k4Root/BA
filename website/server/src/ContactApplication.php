<?php

declare(strict_types=1);

namespace BrightAlliance\Contact;

use DateTimeImmutable;
use DateTimeZone;
use RuntimeException;
use Throwable;

final readonly class ContactSubmission
{
    public function __construct(
        public string $name,
        public string $email,
        public string $message,
        public string $locale,
        public string $source,
        public DateTimeImmutable $submittedAt,
        public string $requestId,
    ) {
    }
}

final readonly class ContactResponse
{
    /**
     * @param array<string, string> $errors
     */
    public function __construct(
        public int $status,
        public string $code,
        public string $locale = 'es',
        public array $errors = [],
    ) {
    }

    public function succeeded(): bool
    {
        return $this->status === 200;
    }
}

interface ContactMailer
{
    public function send(ContactSubmission $submission): void;
}

interface RateLimiter
{
    public function consume(string $identifier, int $limit, int $windowSeconds): bool;
}

final class ContactApplication
{
    private const MAX_PAYLOAD_BYTES = 16_384;
    private const RATE_LIMIT = 5;
    private const RATE_WINDOW_SECONDS = 900;

    /** @var callable(string, array<string, scalar>): void */
    private $logger;

    /**
     * @param list<string> $allowedOrigins
     * @param callable(string, array<string, scalar>): void|null $logger
     */
    public function __construct(
        private readonly ContactMailer $mailer,
        private readonly RateLimiter $rateLimiter,
        private readonly array $allowedOrigins,
        ?callable $logger = null,
    ) {
        $this->logger = $logger ?? static function (): void {
        };
    }

    /**
     * @param array<string, mixed> $server
     * @param array<string, mixed> $input
     */
    public function handle(array $server, array $input, string $requestId): ContactResponse
    {
        $method = strtoupper((string) ($server['REQUEST_METHOD'] ?? ''));
        if ($method !== 'POST') {
            return $this->respond(405, 'method_not_allowed', $requestId);
        }

        $contentLength = (int) ($server['CONTENT_LENGTH'] ?? 0);
        if ($contentLength > self::MAX_PAYLOAD_BYTES) {
            return $this->respond(400, 'payload_too_large', $requestId);
        }

        $locale = $this->stringValue($input['locale'] ?? null) ?? 'es';
        $safeLocale = $this->safeLocale($locale);
        $ipAddress = $this->stringValue($server['REMOTE_ADDR'] ?? null) ?? '';
        if ($ipAddress !== '') {
            try {
                $allowed = $this->rateLimiter->consume(
                    $ipAddress,
                    self::RATE_LIMIT,
                    self::RATE_WINDOW_SECONDS,
                );
                if (!$allowed) {
                    return $this->respond(429, 'rate_limited', $requestId, $safeLocale);
                }
            } catch (Throwable $exception) {
                ($this->logger)('rate_limiter_unavailable', [
                    'request_id' => $requestId,
                    'error_type' => $exception::class,
                ]);
            }
        }

        if (!$this->originAllowed($server)) {
            return $this->respond(400, 'invalid_origin', $requestId, $safeLocale);
        }

        $honeypot = $this->stringValue($input['website'] ?? null);
        if ($honeypot !== null && trim($honeypot) !== '') {
            ($this->logger)('honeypot', ['request_id' => $requestId, 'locale' => $safeLocale]);
            return new ContactResponse(200, 'sent', $safeLocale);
        }

        $errors = $this->validate($input);
        if ($errors !== []) {
            return $this->respond(400, 'validation_error', $requestId, $locale, $errors);
        }

        $submission = new ContactSubmission(
            trim((string) $input['name']),
            trim((string) $input['email']),
            trim((string) $input['message']),
            $safeLocale,
            $safeLocale === 'en'
                ? 'https://bachile.cl/en/contact/'
                : 'https://bachile.cl/contacto/',
            new DateTimeImmutable('now', new DateTimeZone('America/Santiago')),
            $requestId,
        );

        try {
            $this->mailer->send($submission);
        } catch (Throwable $exception) {
            ($this->logger)('delivery_failed', [
                'request_id' => $requestId,
                'locale' => $safeLocale,
                'error_type' => $exception::class,
            ]);

            return new ContactResponse(502, 'delivery_failed', $safeLocale);
        }

        ($this->logger)('sent', ['request_id' => $requestId, 'locale' => $safeLocale]);

        return new ContactResponse(200, 'sent', $safeLocale);
    }

    /**
     * @param array<string, mixed> $input
     * @return array<string, string>
     */
    private function validate(array $input): array
    {
        $errors = [];
        $name = $this->stringValue($input['name'] ?? null);
        $email = $this->stringValue($input['email'] ?? null);
        $message = $this->stringValue($input['message'] ?? null);
        $locale = $this->stringValue($input['locale'] ?? null);

        if (
            $name === null
            || trim($name) === ''
            || mb_strlen(trim($name)) > 120
            || preg_match('/[\r\n]/', $name) === 1
        ) {
            $errors['name'] = 'invalid';
        }

        if (
            $email === null
            || mb_strlen(trim($email)) > 254
            || preg_match('/[\r\n]/', $email) === 1
            || filter_var(trim($email), FILTER_VALIDATE_EMAIL) === false
        ) {
            $errors['email'] = 'invalid';
        }

        if ($message === null || trim($message) === '' || mb_strlen(trim($message)) > 5000) {
            $errors['message'] = 'invalid';
        }

        if (!in_array($locale, ['es', 'en'], true)) {
            $errors['locale'] = 'invalid';
        }

        return $errors;
    }

    /**
     * @param array<string, mixed> $server
     */
    private function originAllowed(array $server): bool
    {
        $origin = $this->stringValue($server['HTTP_ORIGIN'] ?? null);
        if ($origin !== null && $origin !== '') {
            return in_array(rtrim($origin, '/'), $this->allowedOrigins, true);
        }

        $referer = $this->stringValue($server['HTTP_REFERER'] ?? null);
        if ($referer === null || $referer === '') {
            return false;
        }

        $parts = parse_url($referer);
        if (!is_array($parts) || !isset($parts['scheme'], $parts['host'])) {
            return false;
        }

        $refererOrigin = strtolower((string) $parts['scheme']) . '://' . strtolower((string) $parts['host']);
        if (isset($parts['port'])) {
            $refererOrigin .= ':' . (int) $parts['port'];
        }

        return in_array($refererOrigin, $this->allowedOrigins, true);
    }

    private function stringValue(mixed $value): ?string
    {
        return is_string($value) ? $value : null;
    }

    private function safeLocale(string $locale): string
    {
        return $locale === 'en' ? 'en' : 'es';
    }

    /**
     * @param array<string, string> $errors
     */
    private function respond(
        int $status,
        string $code,
        string $requestId,
        string $locale = 'es',
        array $errors = [],
    ): ContactResponse {
        ($this->logger)($code, [
            'request_id' => $requestId,
            'locale' => $this->safeLocale($locale),
        ]);

        return new ContactResponse($status, $code, $this->safeLocale($locale), $errors);
    }
}

final class FileRateLimiter implements RateLimiter
{
    public function __construct(private readonly string $stateFile)
    {
    }

    public function consume(string $identifier, int $limit, int $windowSeconds): bool
    {
        $directory = dirname($this->stateFile);
        if (!is_dir($directory) && !mkdir($directory, 0700, true) && !is_dir($directory)) {
            throw new RuntimeException('Unable to create rate-limit state directory.');
        }

        $handle = fopen($this->stateFile, 'c+');
        if ($handle === false) {
            throw new RuntimeException('Unable to open rate-limit state.');
        }

        try {
            if (!flock($handle, LOCK_EX)) {
                throw new RuntimeException('Unable to lock rate-limit state.');
            }

            $contents = stream_get_contents($handle);
            $state = $contents !== false && $contents !== ''
                ? json_decode($contents, true)
                : [];
            if (!is_array($state)) {
                $state = [];
            }

            $now = time();
            $cutoff = $now - $windowSeconds;
            $key = hash('sha256', $identifier);
            $nextState = [];

            foreach ($state as $storedKey => $timestamps) {
                if (!is_string($storedKey) || !is_array($timestamps)) {
                    continue;
                }

                $active = array_values(array_filter(
                    $timestamps,
                    static fn (mixed $timestamp): bool => is_int($timestamp) && $timestamp > $cutoff,
                ));
                if ($active !== []) {
                    $nextState[$storedKey] = $active;
                }
            }

            $attempts = $nextState[$key] ?? [];
            if (count($attempts) >= $limit) {
                return false;
            }

            $attempts[] = $now;
            $nextState[$key] = $attempts;
            $encoded = json_encode($nextState, JSON_THROW_ON_ERROR);

            rewind($handle);
            if (!ftruncate($handle, 0) || fwrite($handle, $encoded) === false) {
                throw new RuntimeException('Unable to persist rate-limit state.');
            }
            fflush($handle);
            chmod($this->stateFile, 0600);

            return true;
        } finally {
            flock($handle, LOCK_UN);
            fclose($handle);
        }
    }
}
