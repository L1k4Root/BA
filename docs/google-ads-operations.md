# Google Ads: medición y acceso operativo de sólo lectura

## Alcance

Este runbook cubre exclusivamente la cuenta Google Ads de Bright Alliance (BA) y el sitio `bachile.cl`.

Identificadores públicos vigentes:

- Google tag: `AW-18330419853`.
- Acción: `Enviar formulario de clientes potenciales`.
- Destino esperado: `AW-18330419853/n9BUCPz82-EcEI2F0KRE`.
- Customer ID de BA: **pendiente de registrar y verificar**.

El sitio usa `gtag.js` directamente desde `BaseLayout.astro`. No instalar Google Tag Manager, otro `gtag('config', ...)` ni una segunda etiqueta base. El formulario emite la conversión sólo después de una respuesta HTTP exitosa con `code: "sent"` y `requestId`; ese ID se usa como `transaction_id`. El evento no incluye nombre, correo, mensaje, valor ni moneda.

Enhanced Conversions y Consent Mode no forman parte de este contrato. Requieren una revisión separada de privacidad, consentimiento y retención.

## Separación de acceso del cliente

1. Crear un proyecto Google Cloud de Automize dedicado a BA.
2. Habilitar Google Ads API en ese proyecto.
3. Crear una service account exclusiva para BA.
4. Pedir al cliente que invite el correo de la service account directamente a su cuenta Google Ads con nivel **Read-only**.
5. No agregar esa identidad a un MCC compartido ni delegarle acceso a otras cuentas.
6. Obtener desde el MCC de Automize un developer token con acceso Explorer o superior para consultar producción.
7. Registrar el Customer ID confirmado, sin guiones, en este documento y en `.agents/skills/inspect-ba-google-ads/references/account-contract.md`.

La API usa el scope de Google Ads, que no es técnicamente read-only. La protección efectiva debe existir en dos capas: el usuario de Google Ads con rol Read-only y la superficie MCP reducida a herramientas de consulta.

## Instalación fijada

La versión revisada del MCP oficial se fija al commit `ba47210245f2925a130a2770a4d272d5dd0c91cd`:

```sh
/opt/homebrew/bin/pipx install \
  --python /opt/homebrew/bin/python3.11 \
  'git+https://github.com/googleads/google-ads-mcp.git@ba47210245f2925a130a2770a4d272d5dd0c91cd'
```

No reemplazar el commit por `main`. Para actualizarlo: revisar el diff del upstream, confirmar que no aparecieron herramientas de escritura, instalar el nuevo commit explícito y repetir la verificación de acceso.

`.codex/config.toml` es configuración de proyecto y no contiene secretos. Sólo habilita `search`, `get_resource_metadata` y `list_accessible_customers`; `required = false` permite trabajar en el repo cuando las credenciales aún no están disponibles.

## Credenciales locales

Guardar el JSON fuera del repositorio y restringirlo al usuario local:

```sh
chmod 600 /ruta/privada/ba-google-ads-service-account.json
export GOOGLE_APPLICATION_CREDENTIALS=/ruta/privada/ba-google-ads-service-account.json
export GOOGLE_PROJECT_ID=proyecto-cloud-dedicado-ba
export GOOGLE_ADS_DEVELOPER_TOKEN="$(security find-generic-password -a "$USER" -s ba-google-ads-developer-token -w)"
```

No guardar el developer token ni el JSON en Git, `.env`, documentación, logs, prompts o capturas. Iniciar Codex desde un proceso que herede esas variables y reiniciar la aplicación o CLI después de modificarlas. Comprobar el servidor con `/mcp` o:

```sh
codex mcp list
```

No configurar `GOOGLE_ADS_LOGIN_CUSTOMER_ID`: esta identidad accede directamente a BA y no mediante un manager account.

## Protocolo de primera conexión

1. Ejecutar `list_accessible_customers` antes de cualquier consulta.
2. Detenerse si devuelve cero cuentas, más de una cuenta o un Customer ID distinto al registrado para BA.
3. Consultar identidad, zona horaria y moneda:

```sql
SELECT
  customer.id,
  customer.descriptive_name,
  customer.currency_code,
  customer.time_zone
FROM customer
LIMIT 1
```

4. Consultar y reconciliar la acción de conversión antes de desplegar:

```sql
SELECT
  conversion_action.id,
  conversion_action.name,
  conversion_action.status,
  conversion_action.category,
  conversion_action.counting_type,
  conversion_action.primary_for_goal,
  conversion_action.tag_snippets
FROM conversion_action
WHERE conversion_action.name = 'Enviar formulario de clientes potenciales'
```

Detener el despliegue si `tag_snippets` no contiene exactamente `AW-18330419853/n9BUCPz82-EcEI2F0KRE`, si hay más de una acción candidata o si `status` no es `ENABLED`. Reconciliarlo con el administrador de la cuenta; no modificar la acción mediante el agente.

## Consultas GAQL permitidas

Antes de usar un campo desconocido, consultar `get_resource_metadata`. Toda consulta de métricas debe declarar un rango finito y reportar Customer ID, zona horaria, moneda y fechas.

Ejemplo de desempeño por campaña:

```sql
SELECT
  segments.date,
  campaign.id,
  campaign.name,
  campaign.status,
  metrics.impressions,
  metrics.clicks,
  metrics.cost_micros,
  metrics.conversions,
  metrics.all_conversions
FROM campaign
WHERE segments.date BETWEEN 'YYYY-MM-DD' AND 'YYYY-MM-DD'
ORDER BY segments.date DESC
```

`metrics.conversions` cuenta las acciones incluidas en la columna Conversions según la configuración de objetivos. `metrics.all_conversions` puede incluir acciones secundarias u otras fuentes. Nunca sustituir una por otra sin indicarlo.

Consultas permitidas:

- identidad, zona horaria y moneda de BA;
- configuración y estado de conversion actions;
- campañas, grupos, anuncios y términos de búsqueda en modo lectura;
- impresiones, clics, costo, conversiones y tasas derivadas con rango de fechas explícito;
- diagnóstico de etiquetas mediante `tag_snippets`.

No consultar datos de usuarios ni exportar PII. No hacer consultas abiertas sin límite temporal cuando existan métricas segmentadas por fecha.

## Diagnóstico del formulario

Verificación local sin correo real:

```sh
cd website
npm run build
npm run check:site
```

La prueba de navegador debe interceptar `POST /api/contact.php` y cubrir ES y EN:

- `200` + `code: "sent"` + `requestId`: una conversión con ese `transaction_id`;
- `400`, `429`, `502`, error de red, JSON inesperado o `requestId` ausente: cero conversiones;
- honeypot `website` con contenido, incluso si responde `sent`: cero conversiones;
- `gtag` ausente o lanzando error: el formulario conserva su estado de éxito.

Tag Assistant confirma inmediatamente el hit del navegador. El estado y las métricas de Google Ads pueden tardar; reportar esas dos observaciones por separado. No enviar un formulario productivo sin autorización explícita y coordinación para evitar un lead falso.

## Rotación y baja

Rotación:

1. Crear una clave nueva para la misma service account.
2. Cambiar el archivo privado y verificar permisos `0600`.
3. Reiniciar Codex y confirmar que sólo BA es accesible.
4. Eliminar la clave anterior.

Baja del cliente:

1. Revocar el usuario de la service account en Google Ads.
2. Eliminar la service account del proyecto Cloud dedicado.
3. Destruir todas sus claves locales y remotas.
4. Retirar el developer token del entorno local si no se reutiliza en otro flujo autorizado.
5. Confirmar que `list_accessible_customers` ya no expone BA.

No borrar ni desactivar conversion actions, campañas o historial como parte de la baja.

## Referencias

- [Google Ads: configurar conversiones web](https://support.google.com/google-ads/answer/7548399)
- [Google Ads API: service accounts](https://developers.google.com/google-ads/api/docs/oauth/service-accounts)
- [Google Ads API: developer token](https://developers.google.com/google-ads/api/docs/api-policy/developer-token)
- [Google Ads API: campos de conversion actions](https://developers.google.com/google-ads/api/fields/v23/conversion_action)
- [MCP oficial de Google Ads](https://github.com/googleads/google-ads-mcp)
- [OpenAI: configuración MCP por proyecto y allowlists](https://learn.chatgpt.com/docs/extend/mcp)
- [Patrón comunitario: Google Ads API Developer Assistant](https://github.com/googleads/google-ads-api-developer-assistant)
