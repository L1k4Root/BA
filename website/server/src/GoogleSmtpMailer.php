<?php

declare(strict_types=1);

namespace BrightAlliance\Contact;

use PHPMailer\PHPMailer\PHPMailer;
use RuntimeException;

final class GoogleSmtpMailer implements ContactMailer
{
    /**
     * @param array{host: string, port: int, username: string, app_password: string} $smtp
     */
    public function __construct(
        private readonly array $smtp,
        private readonly string $mailTo,
    ) {
        if (
            $smtp['host'] === ''
            || $smtp['port'] < 1
            || filter_var($smtp['username'], FILTER_VALIDATE_EMAIL) === false
            || str_replace(' ', '', $smtp['app_password']) === ''
            || $smtp['app_password'] === 'REPLACE_WITH_GOOGLE_APP_PASSWORD'
            || filter_var($mailTo, FILTER_VALIDATE_EMAIL) === false
        ) {
            throw new RuntimeException('Contact SMTP configuration is incomplete.');
        }
    }

    public function send(ContactSubmission $submission): void
    {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = $this->smtp['host'];
        $mail->Port = $this->smtp['port'];
        $mail->SMTPAuth = true;
        $mail->Username = $this->smtp['username'];
        $mail->Password = str_replace(' ', '', $this->smtp['app_password']);
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Timeout = 15;
        $mail->CharSet = PHPMailer::CHARSET_UTF8;

        $mail->setFrom($this->smtp['username'], 'Sitio web BA Chile');
        $mail->addAddress($this->mailTo);
        $mail->addReplyTo($submission->email, $submission->name);
        $mail->addCustomHeader('X-BA-Contact-Request-ID', $submission->requestId);
        $mail->Subject = '[Web BA] Nuevo mensaje de contacto';
        $mail->isHTML(true);
        $mail->Body = $this->htmlBody($submission);
        $mail->AltBody = $this->textBody($submission);
        $mail->send();
    }

    private function htmlBody(ContactSubmission $submission): string
    {
        $name = $this->escape($submission->name);
        $email = $this->escape($submission->email);
        $message = nl2br($this->escape($submission->message));
        $locale = $this->escape($submission->locale);
        $source = $this->escape($submission->source);
        $submittedAt = $this->escape($submission->submittedAt->format('Y-m-d H:i:s T'));
        $requestId = $this->escape($submission->requestId);

        return <<<HTML
        <h1>Nuevo mensaje desde bachile.cl</h1>
        <p><strong>Nombre:</strong> {$name}</p>
        <p><strong>Correo:</strong> {$email}</p>
        <p><strong>Mensaje:</strong><br>{$message}</p>
        <hr>
        <p><strong>Idioma:</strong> {$locale}</p>
        <p><strong>Página:</strong> {$source}</p>
        <p><strong>Fecha:</strong> {$submittedAt}</p>
        <p><strong>ID de solicitud:</strong> {$requestId}</p>
        HTML;
    }

    private function textBody(ContactSubmission $submission): string
    {
        return implode("\n", [
            'Nuevo mensaje desde bachile.cl',
            '',
            'Nombre: ' . $submission->name,
            'Correo: ' . $submission->email,
            'Mensaje:',
            $submission->message,
            '',
            'Idioma: ' . $submission->locale,
            'Página: ' . $submission->source,
            'Fecha: ' . $submission->submittedAt->format('Y-m-d H:i:s T'),
            'ID de solicitud: ' . $submission->requestId,
        ]);
    }

    private function escape(string $value): string
    {
        return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    }
}
