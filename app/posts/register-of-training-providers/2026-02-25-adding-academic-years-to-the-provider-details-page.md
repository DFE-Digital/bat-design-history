---
title: Adding academic years to the provider details page
description: We added academic years to the provider details summary and a way for users to view and update them
date: 2026-02-25
tags:
  - providers
  - academic years
  - provider details
related:
  items:
    - text: Adding academic years to the add provider flow
      href: /register-of-training-providers/adding-academic-years-to-the-add-provider-flow/
    - text: Adding academic year information to the provider list
      href: /register-of-training-providers/adding-academic-year-information-to-the-provider-list/
    - text: Updating provider partnerships to align with academic years
      href: /register-of-training-providers/updating-provider-partnerships-to-align-with-academic-years/
    - text: Updating the activity log to include academic years
      href: /register-of-training-providers/updating-the-activity-log-to-include-academic-years/
screenshots:
  items:
    - text: Provider details
      src: provider-details.png
    - text: Change academic years
      src: provider-details--change-academic-years.png
    - text: Change academic years - form with error
      src: provider-details--change-academic-years-with-error.png
    - text: Change academic years - check your answers
      src: provider-details--change-academic-years-check-your-answers.png
    - text: Academic years successfully changed
      src: provider-details--change-academic-years-success.png
---

We capture academic years when a provider is onboarded. We need to show this information on the provider details page. Users also need a way to update it when a provider's circumstances change.

We added academic years to the provider details summary list and created a two-step flow for changing them.

## What we changed

### Provider details page

We added an 'Academic years' row to the end of the provider details summary list. The row shows all the academic years the provider belongs to, displayed in reverse-chronological order.

We include a 'Change' link in the summary row so users can update the academic years from the provider details page.

### Changing academic years

Changing academic years is a two-step process:

1. Select academic years
2. Check your answers

#### Select academic years

The form uses the same design as the academic years question in the add provider flow. We show a list of checkboxes, one for each academic year from 2019 to 2020 through to 2026 to 2027, in reverse chronological order.

Each checkbox includes hint text showing the start and end dates of that year. We add suffixes to the three most relevant years:

- next: the upcoming academic year
- current: the year in progress
- last: the year just ended

We pre-select the academic years already assigned to the provider.

This question is required. If a user does not select at least one academic year, we show an error message:

> Select academic year

#### Check your answers

The check your answers page shows the updated selection of academic years.

Users can change the academic years before saving. The change link returns them to the academic years question.

When users save the change, they return to the provider details page, and we show a success message:

> Academic years updated

## Further considerations

We considered some changes that we did not implement. These included:

- automating how providers are rolled onto the next academic year
- adding a provider-level start and end date

### Automating how providers are rolled onto the next academic year

For provider partnerships, we collect a start date and an optional end date. This allows us to automatically assign a new academic year to a partnership each year while the partnership remains open-ended.

At the provider level, we do not collect a start and end date for when the provider can deliver ITT. Without this information, it is harder to automate adding a new academic year. Instead, a user must manually update the provider's academic years each cycle.

We identified several options to address this:

**Option 1: Manual update by support users.** Support users in reviewing and updating provider academic years at the start of each cycle. This keeps the process simple but requires ongoing manual effort and risks providers being missed.

**Option 2: Infer academic years from partnership data.** If a provider has at least one active partnership in a given year, we could automatically assign that year to the provider. This would work for most providers, but would not capture providers without partnerships, such as SCITTs that ratify their own courses.

**Option 3: Ask providers to confirm active years.** At the start of each cycle, we could prompt support users or providers to confirm whether the provider will deliver ITT that year. This shifts the burden of accuracy to the data owner but requires a notification or workflow to trigger the review.

**Option 4: Add a provider-level start and end date.** Adding a start date and optional end date to the provider record (similar to how we handle partnerships) would allow us to automate academic year assignments in the same way. This would require changes to the 'Add provider' flow and the provider details page.

We have not implemented any of these options yet. We will continue to monitor the manual effort required and revisit automation once we have a clearer picture of how academic year data is used.

### Adding a provider-level start and end date

Adding start and end dates for when a provider can deliver ITT would give us a more complete picture of the provider's history and allow for greater automation.

We did not pursue this in the current iteration because it would add complexity to the onboarding flow, and we do not yet know whether the data would be consistently available or accurate at the point of onboarding.

*[ITT]: initial teacher training
*[SCITT]: school-centred initial teacher training
