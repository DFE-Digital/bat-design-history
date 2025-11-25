---
title: Preventing duplicate partnerships based on partnership dates
description: We prevent users from adding duplicate partnerships if the partnership dates overlap
date: 2025-11-20
tags:
  - partnerships
  - providers
  - partnership dates
related:
  items:
    - text: Iterating on how we set up partnerships between providers
      href: /register-of-training-providers/iterating-on-how-we-set-up-partnerships-between-providers/
    - text: Iterating on the change provider partnership flow
      href: /register-of-training-providers/iterating-on-the-change-provider-partnership-flow/
    - text: Improving the delete partnership confirmation page
      href: /register-of-training-providers/improving-the-delete-partnership-confirmation-page/
    - text: Logging provider partnerships linked to academic years
      href: /register-of-training-providers/logging-provider-partnerships-linked-to-academic-years/
screenshots:
  items:
    - text: Accredited provider - prevent duplicate training partner
      src: accredited-provider--prevent-duplicate-training-partner.png
    - text: Training partner - prevent duplicate accredited provider
      src: training-partner--prevent-duplicate-accredited-provider.png
---

We prevent users from adding duplicate partnerships if the partnership dates overlap.

Previously, the duplication check applied only to cases where there was already a provider partnership, but partners can work together during two distinct periods.

## What we changed

We have:

- added a check for duplicate partnerships after the user has entered partnership dates
- updated the page headings in the add partnership flow

### Checking for duplicate partnerships

When a user adds a new partnership, they first select the provider, and then enter the partnership start and end dates.

If the selected partner is already in a partnership with the provider during the specified dates, we show a stop page. This page tells them the partnership already exists. From here, they can:

- go back and enter different partnership dates
- cancel and return to the partnerships list

If the selected partner is not already partnered during the period defined by the partnership dates, the user can continue to complete the flow.

### Updated page headings

We also changed the headings for the provider autocomplete.

If the current provider is an accredited provider, we show the heading:

> Enter training provider name, UKPRN or URN

If the current provider is not an accredited provider, we show the heading:

> Enter accredited provider name, UKPRN or URN

We include the current provider name in the caption for clarity.

## What this improves

This change:

- prevents users from creating duplicate partnerships
- supports cleaner and more reliable data
- helps users recover quickly from errors

It also supports a smoother experience when managing partnerships across the service.

## What’s next

We will continue to review how partnership data is added and maintained. This will help us identify any future improvements and maintain a straightforward process.
