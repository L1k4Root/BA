<?php

declare(strict_types=1);

$requestId = bin2hex(random_bytes(8));

try {
    $account = function_exists('posix_getpwuid') ? posix_getpwuid(posix_geteuid()) : false;
    $homeDirectory = is_array($account) && isset($account['dir'])
        ? (string) $account['dir']
        : (string) getenv('HOME');
    if ($homeDirectory === '' || $homeDirectory === '/') {
        throw new RuntimeException('Unable to resolve the account home directory.');
    }

    $runtimeDirectory = $homeDirectory . '/.local/share/ba-contact';
    $autoloadPath = $runtimeDirectory . '/vendor/autoload.php';
    $bootstrapPath = $runtimeDirectory . '/bootstrap.php';
    if (!is_file($autoloadPath) || !is_file($bootstrapPath)) {
        throw new RuntimeException('Contact runtime is unavailable.');
    }

    require $autoloadPath;
    $run = require $bootstrapPath;
    if (!is_callable($run)) {
        throw new RuntimeException('Contact bootstrap is invalid.');
    }

    $run($homeDirectory, $requestId);
} catch (Throwable $exception) {
    error_log('[ba-contact] event=bootstrap_failed request_id=' . $requestId . ' error_type=' . $exception::class);
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    header('X-Request-ID: ' . $requestId);

    $accept = strtolower((string) ($_SERVER['HTTP_ACCEPT'] ?? ''));
    if (str_contains($accept, 'application/json')) {
        http_response_code(502);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode([
            'ok' => false,
            'code' => 'service_unavailable',
            'requestId' => $requestId,
        ], JSON_UNESCAPED_SLASHES);
        exit;
    }

    $locale = isset($_POST['locale']) && $_POST['locale'] === 'en' ? 'en' : 'es';
    $path = $locale === 'en' ? '/en/contact/' : '/contacto/';
    header('Location: ' . $path . '?contact=failed#contact-status-failed', true, 303);
    exit;
}
