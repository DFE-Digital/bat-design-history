---
title: Adding academic year information to the provider list
description: We added an academic years filter and updated the provider summary cards to show which academic years a provider has delivered initial teacher training
date: 2026-02-24
tags:
  - providers
  - academic years
  - provider list
  - filters
related:
  items:
    - text: Searching and filtering the list of training providers
      href: /register-of-training-providers/searching-and-filtering-the-list-of-training-providers/
    - text: Adding academic years to the add provider flow
      href: /register-of-training-providers/adding-academic-years-to-the-add-provider-flow/
    - text: Adding academic years to the provider details page
      href: /register-of-training-providers/adding-academic-years-to-the-provider-details-page/
---

Services such as Publish teacher training courses and Find teacher training courses work with providers for specific academic years and recruitment cycles. To support these services, we need the provider list to surface academic year information so users can quickly find providers that are active for a given year.

We updated the provider list in two ways. We added an academic years filter and updated the provider summary cards to show academic year information.

## What we changed

### Academic years filter

We added an 'Academic years' filter below the existing 'Accreditation status' filter.

The filter shows all academic years from 2019 to 2020 through to 2026 to 2027, in reverse chronological order. We display them in this order because users are more likely to need providers for recent academic years.

We add suffixes to the three most relevant years so users can quickly identify where they are in the cycle:

- 2026 to 2027 - next
- 2025 to 2026 - current
- 2024 to 2025 - last

Each year, when the new academic year begins, these suffixes move forward automatically.

### Provider summary card

We updated each provider summary card in the list to include additional information.

#### Provider identifiers

We moved the provider code, UK provider reference number (UKPRN) and unique reference number (URN) from the summary list into the summary card title area, directly below the provider's operating name.

We only show an identifier if it exists for that provider. For example, if a provider only has a provider code, we show that alone. If a provider has a provider code and a UKPRN, we show both. If a provider has a provider code, UKPRN and URN, we show all three.

We display the identifier label in bold, followed by the value. For example:

> **Provider code:** H3I &nbsp;&nbsp; **UKPRN:** 12345678

#### Academic years

We added an 'Academic years' item to the end of the summary list in each provider card.

This shows all the academic years to which the provider belongs, displayed in reverse chronological order. We include the 'next', 'current' and 'last' suffixes where relevant.

The summary card now contains:

- provider type
- accreditation status
- operating name (the summary card title, which links to the provider details page)
- legal name
- academic years

## Design decisions

### Reverse chronological order

We display academic years from newest to oldest throughout the service. Users need to identify current and recent providers quickly. Listing the most recent year first reduces the scanning effort required.

### Showing identifiers in the card title

Provider codes, UKPRNs and URNs are used by other services to reference providers. Moving these identifiers to a prominent position near the provider name makes it easier for users to confirm they have found the right provider, particularly when multiple providers share similar names.

### Conditional display of identifiers

Not all providers have all three identifiers. Showing a label with no value would be misleading or confusing. We only render an identifier when a value exists, keeping the interface clean and accurate.

*[ITT]: initial teacher training
*[UKPRN]: UK provider reference number
*[URN]: unique reference number
