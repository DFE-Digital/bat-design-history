---
title: Updating the provider and school autocompletes
description: We improved the information hierarchy in the provider and school autocompletes, and added the ability to search for a school by postcode
date: 2026-03-04
tags:
  - autocomplete
  - search
  - schools
  - providers
related:
  items:
    - text: Finding placement schools by location
      href: /register-of-placement-schools/finding-placement-schools-by-location/
    - text: Finding placement schools by provider
      href: /register-of-placement-schools/finding-placement-schools-by-provider/
screenshots:
  items:
    - text: School autocomplete
      src: school-autocomplete.png
    - text: School autocomplete with search term
      src: school-autocomplete--search.png
    - text: School autocomplete with highlight state
      src: school-autocomplete--search-highlight.png
    - text: Provider autocomplete
      src: provider-autocomplete.png
    - text: Provider autocomplete with search term
      src: provider-autocomplete--search.png
    - text: Provider autocomplete with highlight state
      src: provider-autocomplete--search-highlight.png
---

We use the GOV.UK Design System team maintained [accessible autocomplete](https://github.com/alphagov/accessible-autocomplete) to help users search the register of placement schools.

The autocompletes for searching by school or provider showed limited information, making it difficult to distinguish between results with similar names.

We updated both autocompletes to show more detail and improved the order in which results appear.

## Where we started

### School autocomplete

The school autocomplete showed the school name with the unique reference number (URN) in brackets:

> Bishop Challoner's Boys School (URN: 133289)

This had two problems:

- users could not easily distinguish between schools with the same or similar names
- the URN alone was not enough context to confirm the right school

### Provider autocomplete

The provider autocomplete showed the provider name with the UK provider reference number (UKPRN) in brackets:

> Bath Spa University (UKPRN: 10000571)

This had the same issue: limited context to confirm the right provider, especially when names are similar.

## What we changed

### School autocomplete

We reorganised the information so the school name appears in bold on the first line. On the line below, we show the town, postcode, UKPRN and URN:

> **Bishop Challoner's Boys School**
> London, E1 0LB · UKPRN: 10000723 · URN: 133289

This additional detail helps users identify the correct school, particularly when searching for schools with common names.

We also added the ability to search by postcode. Previously, users could only search by school name. Adding a postcode search helps users who know a school's location but are unsure of its exact name.

#### Ordering results

We order schools by name and then by URN in descending order. This ensures that open schools appear before closed ones.

This is necessary because of a nuance in the Get Information About Schools (GIAS) data. When a school closes, and a new one opens with the same name, for example, when a school becomes an academy, both records exist in the data with different URNs. The newer, open school has the higher URN and so appears first in the results.

### Provider autocomplete

We applied the same approach to the provider autocomplete. The provider name appears in bold on the first line. On the line below, we show the UKPRN and URN where they exist:

> **Bath Spa University**
> UKPRN: 10000571 · URN: 133790

Not all providers have both a UKPRN and a URN. We only show the identifiers that exist for each provider.

## Further considerations

We may look at adding further search capabilities, such as searching providers by subject or phase, as we learn more about how users search for placement schools.
