<?php

declare(strict_types=1);

use BrightAlliance\Contact\ContactApplication;
use BrightAlliance\Contact\ContactResponse;
use BrightAlliance\Contact\FileRateLimiter;
use BrightAlliance\Contact\GoogleSmtpMailer;

return static function (string $homeDirectory, string $requestId): never {
    $configPath = $homeDirectory . '/.config/ba-contact.php';
    if (!is_file($configPath)) {
        throw new RuntimeException('Contact configuration is unavailable.');
    }

    $config = require $configPath;
    if (
        !is_array($config)
        || !isset($config['smtp'], $config['mail_to'], $config['allowed_origins'])
        || !is_array($config['smtp'])
        || !is_string($config['mail_to'])
        || !is_array($config['allowed_origins'])
    ) {
        throw new RuntimeException('Contact configuration is invalid.');
    }

    $logger = static function (string $event, array $context): void {
        $pairs = [];
        foreach ($context as $key => $value) {
            $sanitized = str_replace(["\r", "\n", ' '], ['', '', '_'], (string) $value);
            $pairs[] = $key . '=' . substr($sanitized, 0, 200);
        }
        error_log('[ba-contact] event=' . $event . ' ' . implode(' ', $pairs));
    };

    $application = new ContactApplication(
        new GoogleSmtpMailer($config['smtp'], $config['mail_to']),
        new FileRateLimiter($homeDirectory . '/.local/state/ba-contact/rate-limit.json'),
        array_values(array_filter($config['allowed_origins'], 'is_string')),
        $logger,
    );
    $response = $application->handle($_SERVER, $_POST, $requestId);

    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    header('X-Request-ID: ' . $requestId);
    if ($response->status === 405) {
        header('Allow: POST');
    }
    if ($response->status === 429) {
        header('Retry-After: 900');
    }

    $accept = strtolower((string) ($_SERVER['HTTP_ACCEPT'] ?? ''));
    if (str_contains($accept, 'application/json')) {
        http_response_code($response->status);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode([
            'ok' => $response->succeeded(),
            'code' => $response->code,
            'requestId' => $requestId,
            'errors' => $response->errors === [] ? null : $response->errors,
        ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        exit;
    }

    $status = match ($response->code) {
        'sent' => 'sent',
        'validation_error', 'invalid_origin', 'payload_too_large' => 'invalid',
        'rate_limited' => 'rate-limited',
        default => 'failed',
    };
    $path = $response->locale === 'en' ? '/en/contact/' : '/contacto/';
    header('Location: ' . $path . '?contact=' . $status . '#contact-status-' . $status, true, 303);
    exit;
};
