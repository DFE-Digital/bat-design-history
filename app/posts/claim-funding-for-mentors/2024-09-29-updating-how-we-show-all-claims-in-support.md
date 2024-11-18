---
title: Updating how we show all claims in support
description: We added secondary navigation and updated the claim filters
date: 2024-09-29
tags:
  - support
  - claims
related:
  items:
    - text: Showing all claims in support
      href: /claim-funding-for-mentors/showing-all-claims-in-support/
    - text: Managing payments in Support
      href: /claim-funding-for-mentors/managing-payments-in-support/
    - text: Auditing claims in support
      href: /claim-funding-for-mentors/auditing-claims-in-support/
    - text: Clawing back claims via Support after they have been paid
      href: /claim-funding-for-mentors/clawing-back-claims-via-support-after-they-have-been-paid/
    - text: Logging payment, sampling and clawback activity
      href: /claim-funding-for-mentors/logging-payment-sampling-and-clawback-activity/
screenshots:
  items:
    - text: Claims list
      src: claims--list.png
    - text: Filtered claims list
      src: claims--list-filtered.png
    - text: Empty claims list
      src: claims--list-empty.png
    - text: Claim details
      src: claims--details.png
---

In previous work, we added a way to [show all submitted claims in Support](/claim-funding-for-mentors/showing-submitted-claims-in-support/).

## What we changed

We have:

- added secondary navigation
- added all claim statuses to the status filter
- reorganised the order of the filters

### Secondary navigation

![Secondary navigation](claims--secondary-navigation.png)

We added secondary navigation to the claims section. The navigation includes items for:

- all claims
- payments
- sampling
- clawbacks
- activity log

The ‘All claims’ list includes all claims created in the service. Support users can download the claims based on the filtered criteria.

The payments, sampling and clawbacks sections contain actions related to each workflow.

The activity log section shows an audit log of all actions support users carry out via the payments, sampling and clawbacks sections. It does not show actions carried out by school users, such as amending a draft claim.

### Claim status filter

![Status filter](claims--status-filter.png)

As part of the payments, sampling and clawback work, we updated the status filter on the ‘All claims’ list to include all claim statuses:

- draft
- submitted
- payment in progress
- information requested
- information sent
- paid
- payment not approved
- sampling in progress
- provider not approved
- claim not approved
- clawback requested
- clawback in progress
- clawback complete

### Order of filters

We moved the ‘Accredited provider’ filter above the ‘Schools’ filter.

## Payment, sampling and clawback actions

We do not include payment, sampling and clawback actions in the ‘All claims’ section. This is because:

- the 'All claims' section is a general overview of the state of the service and each claim is ‘view only’
- the three sections (payments, sampling and clawbacks) contain discrete workflows that help users manage each process
- we do not want to duplicate actions or overload the ‘All claims’ section with actions related to other sections
- we show actions in their appropriate sections and use them as a way to make what’s possible obvious - for example, we do not hide buttons, and when users cannot do an action, we show reasons why
- we do not want to introduce a new, non-standard component, like the Ministry of Justice’s [button menu component](https://design-patterns.service.justice.gov.uk/components/button-menu/), that hides actions by default and would require extensive research and testing
