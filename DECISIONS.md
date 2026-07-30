# Decisiones de Bright Alliance

## 2026-07-27 — Formulario estático con runtime PHP privado

### Contexto

El formulario de `bachile.cl` usaba un `mailto:`. El navegador intentaba abrir el cliente de correo del visitante y no existía confirmación verificable de entrega.

### Decisión

- Astro continúa generando un sitio estático.
- `POST /api/contact.php` será el único punto público con ejecución PHP.
- La validación, el rate limiting y PHPMailer se desplegarán fuera de `public_html`, en `.local/share/ba-contact` dentro de la cuenta Hostinger.
- Los mensajes se enviarán autenticados mediante Google Workspace SMTP desde `contacto@bachile.cl`.
- La contraseña de aplicación vivirá únicamente en `.config/ba-contact.php` dentro de la cuenta Hostinger.
- Los formularios español e inglés compartirán el mismo contrato y componente.

### Consecuencias

- El deploy necesita Composer en el servidor y una configuración SMTP privada válida antes de publicar.
- Un fallo SMTP se informa al visitante; nunca se presenta como envío exitoso.
- No se usará `mail()` de PHP como fallback porque el SPF de `bachile.cl` autoriza a Google y ese fallback tendría una entrega menos confiable.
- El formulario incluye honeypot y rate limit local. CAPTCHA queda fuera hasta que exista evidencia de abuso.
