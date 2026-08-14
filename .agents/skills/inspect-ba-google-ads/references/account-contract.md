# BA Google Ads account contract

## Required identity

- Client: Bright Alliance / BA Chile.
- Site: `https://bachile.cl`.
- Customer ID: **PENDING — do not query until the verified digits are registered here**.
- Access path: dedicated BA service account invited directly as Read-only.
- Manager login Customer ID: none.
- Expected accessible customer count: exactly one.

## Measurement identity

- Google tag: `AW-18330419853`.
- Conversion action name: `Enviar formulario de clientes potenciales`.
- Expected destination: `AW-18330419853/n9BUCPz82-EcEI2F0KRE`.
- Transaction ID: contact endpoint `requestId`.
- Enhanced Conversions: out of scope.
- Consent Mode: out of scope pending privacy review.

## Approved account query

```sql
SELECT
  customer.id,
  customer.descriptive_name,
  customer.currency_code,
  customer.time_zone
FROM customer
LIMIT 1
```

## Approved conversion-action query

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

## Approved campaign metrics shape

Replace both dates with a finite inclusive range.

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

Convert cost as `cost_micros / 1,000,000` in the account currency. Never label `all_conversions` as `conversions`.

## Stop conditions

Stop without further queries if the Customer ID is pending, the accessible list is not exactly the registered BA account, credentials are missing, an unknown account appears, or the user requests a mutation. Stop deployment if the conversion action is absent, ambiguous, its status is not `ENABLED`, or its tag snippet differs from the expected destination.
