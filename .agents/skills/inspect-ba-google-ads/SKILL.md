---
name: inspect-ba-google-ads
description: Inspect Bright Alliance Google Ads configuration and performance through the project read-only MCP. Use for BA campaign metrics, conversion-action diagnostics, tag reconciliation, account metadata, or evidence-backed Google Ads reporting. Do not use for writes or any other customer.
---

# Inspect BA Google Ads

Inspect only the documented Bright Alliance account through `ba_google_ads`. Preserve account isolation, metric definitions, finite date ranges, and read-only operation.

## Required preflight

1. Read [references/account-contract.md](references/account-contract.md) and `docs/google-ads-operations.md` before calling the MCP.
2. Confirm that the BA Customer ID is registered in both files. If it is pending or inconsistent, stop and request the verified ID.
3. Call `list_accessible_customers` first.
4. Continue only if it returns exactly one customer and it exactly matches the registered BA Customer ID. Stop on zero, multiple, or mismatched accounts.
5. Never set or infer a manager login customer. This contract uses direct account access.

## Query workflow

1. Use `get_resource_metadata` before selecting an unfamiliar resource or field.
2. Use only `search`, `get_resource_metadata`, and `list_accessible_customers` from `ba_google_ads`.
3. Use the exact customer resource returned by the preflight. Do not enumerate or probe another customer.
4. Add an explicit finite date range to every metrics query.
5. Prefer the approved GAQL templates in the account contract. Extend them only with documented selectable fields.
6. Keep queries bounded and request only fields needed for the user's question.

## Hard stops

- Do not mutate campaigns, ads, keywords, audiences, bids, budgets, users, links, goals, or conversion actions.
- Do not use another API, MCP, CLI, or browser session to bypass the read-only surface.
- Do not access another customer, shared MCC, or cross-client report.
- Do not expose service-account JSON, developer tokens, PII, search-user identifiers, or lead content.
- Do not submit a real form or deploy the site without separate explicit authorization.
- Stop if the conversion destination returned by `tag_snippets` differs from `AW-18330419853/n9BUCPz82-EcEI2F0KRE`.
- Stop if the requested work requires a write. Describe the required change without applying it.

## Reporting contract

Report:

- the verified Customer ID and descriptive name;
- the account timezone and currency;
- the inclusive date range and queried fields;
- observed facts separately from inference and recommendations;
- `metrics.conversions` and `metrics.all_conversions` as distinct metrics;
- cost converted from `cost_micros`, with the formula stated;
- API errors, unavailable fields, reporting lag, and any remaining uncertainty.

For conversion diagnostics, report action name, ID, status, category, counting type, `primary_for_goal`, and `tag_snippets`. Treat a browser hit and later Google Ads reporting as separate evidence.
