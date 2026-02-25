---
title: Updating provider partnerships to align with academic years
description: We updated how we display and collect academic years in the provider partnerships section to be consistent with how we handle them elsewhere in the service
date: 2026-02-26
tags:
  - partnerships
  - academic years
  - providers
related:
  items:
    - text: Iterating on how we set up partnerships between providers
      href: /register-of-training-providers/iterating-on-how-we-set-up-partnerships-between-providers/
    - text: Iterating on the change provider partnership flow
      href: /register-of-training-providers/iterating-on-the-change-provider-partnership-flow/
    - text: Adding academic years to the add provider flow
      href: /register-of-training-providers/adding-academic-years-to-the-add-provider-flow/
    - text: Adding academic years to the provider details page
      href: /register-of-training-providers/adding-academic-years-to-the-provider-details-page/
    - text: Updating the activity log to include academic years
      href: /register-of-training-providers/updating-the-activity-log-to-include-academic-years/
screenshots:
  items:
    - text: Provider partnerships
      src: provider-partnerships.png
    - text: Change partnership academic years
      src: provider-partnerships--academic-years.png
    - text: Change partnership academic years - form with error
      src: provider-partnerships--academic-years-with-error.png
    - text: Change partnership - check your answers
      src: provider-partnerships--academic-years-check-your-answers.png
---

We introduced academic years across the provider list and provider details pages. This revealed inconsistencies in how academic years were displayed and collected in the provider partnerships section.

We updated the partnerships section to align with the patterns we established elsewhere in the service.

## What we changed

We made the following changes to the provider partnerships section:

- displayed academic years in reverse chronological order throughout
- added 'next', 'current' and 'last' suffixes to the relevant academic years
- included hint text next to each checkbox in the academic years form, showing the start and end dates for that year

### Ordering academic years

Previously, academic years in the partnerships section were displayed in chronological order, with the oldest year first. We changed this to reverse chronological order, with the newest year first, in all places:

- the partnership summary card on the partnerships list page
- the check your answers page when adding or changing a partnership
- the academic years form

This matches the ordering we use for academic years on the provider details page and in the provider list.

### Academic year suffixes

We added suffixes to the three most relevant academic years:

- next: the upcoming academic year
- current: the year in progress
- last: the year just ended

These suffixes now appear wherever academic years are shown in the partnerships section. Each year, when the new academic year begins, the suffixes move forward automatically.

This matches how we label academic years in the provider list filter, the add provider flow and the provider details page.

### Hint text in the academic years form

When adding or changing a partnership, users select academic years from a checkbox list. We added hint text beneath each checkbox label that shows the start and end dates for that year.

For example:

- 2025 to 2026 - current
  1 August 2025 to 31 July 2026

This matches the design of the academic years question in the add provider flow and the change academic years flow on the provider details page. It gives users the same level of supporting information regardless of where they encounter the question.

## Design decisions

### Consistency across the service

The academic year's question appears in three places:

1. the add provider flow
2. the change academic years flow on the provider details page
3. the add and change partnership flows

Users who perform multiple tasks in the service will encounter this question in various contexts. Keeping the design consistent, with the same ordering, same suffixes and same hint text, reduces the cognitive load of switching between tasks.

### Why suffixes help

Users working in the service often need to quickly identify the current or upcoming academic year. The 'next', 'current' and 'last' labels make this possible without requiring users to calculate which year they are in. This is particularly useful when displaying long lists of academic years spanning multiple cycles.
