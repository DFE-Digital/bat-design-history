---
title: Iterating on the change provider partnership flow
description: We updated the change partnership flow to include the partnership’s start and end dates, as well as the academic years to which it relates
date: 2025-11-18
tags:
  - partnerships
  - providers
  - academic years
related:
  items:
    - text: Iterating on how we set up partnerships between providers
      href: /register-of-training-providers/iterating-on-how-we-set-up-partnerships-between-providers/
    - text: Improving the delete partnership confirmation page
      href: /register-of-training-providers/improving-the-delete-partnership-confirmation-page/
    - text: Preventing duplicate partnerships based on partnership dates
      href: /register-of-training-providers/preventing-duplicate-partnerships-based-on-partnership-dates/
    - text: Logging provider partnerships linked to academic years
      href: /register-of-training-providers/logging-provider-partnerships-linked-to-academic-years/
screenshots:
  items:
    - text: Accredited provider partnership list
      src: accredited-provider--partnership-list.png
    - text: Accredited provider - enter partnership dates
      src: accredited-provider--enter-partnership-dates.png
    - text: Accredited provider - enter partnership dates with error
      src: accredited-provider--enter-partnership-dates-with-error.png
    - text: Accredited provider - select academic year
      src: accredited-provider--select-academic-year.png
    - text: Accredited provider - select academic year with error
      src: accredited-provider--select-academic-year-with-error.png
    - text: Accredited provider - check your answers
      src: accredited-provider--check-your-answers.png
    - text: Accredited provider - partnership updated success message
      src: accredited-provider--update-partnership-success.png
    - text: Training partner partnership list
      src: training-partner--partnership-list.png
    - text: Training partner- enter partnership dates
      src: training-partner--enter-partnership-dates.png
    - text: Training partner- enter partnership dates with error
      src: training-partner--enter-partnership-dates-with-error.png
    - text: Training partner - select academic year
      src: training-partner--select-academic-year.png
    - text: Training partner - select academic year with error
      src: training-partner--select-academic-year-with-error.png
    - text: Training partner - check your answers
      src: training-partner--check-your-answers.png
    - text: Training partner - partnership updated success message
      src: training-partner--update-partnership-success.png
---

We updated the change partnership flow to include the partnership’s start and end dates, as well as the academic years to which it relates.

## How it works

![Screenshot showing the partnership summary card](partnership-summary-card.png "Screenshot showing the partnership summary card")

The change partnership flow is a 3-step process which starts when the user selects ‘Change’ on the summary card in the list of partnerships.

[![Change partnership flow](change-partnership--flow.png 'Change partnership flow (select image to see a larger version)')](change-partnership--flow.png)

The 3 steps are:

1. Enter partnership start and end dates
2. Select one or more academic years
3. Check your answers

### Enter partnership start and end dates

The first step in the flow is to update the partnership’s start and end dates.

We collect 2 dates:

- partnership start date
- partnership end date

We prepopulate the form with the previously entered dates.

The partnership's start date is required. If the user does not enter a date, we show the error message:

> Enter date the partnership started

If the user enters an incomplete or incorrect date on which the partnership started, we follow the [GOV.UK design system guidance on validating dates](https://design-system.service.gov.uk/components/date-input/#error-messages).

We include a details component below the partnership start date field that explains which date to enter for users who do not know the partnership’s start date.

The partnership’s end date is optional.

If the user enters a date and it is incomplete or incorrect, we follow the [GOV.UK design system guidance on validating dates](https://design-system.service.gov.uk/components/date-input/#error-messages).

### Select one or more academic years

The second step in the flow is to select one or more academic years.

We display a list of academic years based on the partnership’s start and end dates. This allows users to configure past, present and future academic years.

We prepopulate the form with the previously entered academic years.

This question is required. If the user does not select at least one academic year, we show an error message:

> Select academic year

If the page does not contain a list of academic years, because the partnership dates are out of range, we show the heading:

> No academic years match your partnership dates

We also show a message:

> You cannot add the partnership because no academic years match your partnership dates.

And a ‘Change partnership dates’ link.

### Check your answers

The final set is the ‘Check your answers’ page. We show a summary list containing the following:

- accredited provider name
- training partner name
- partnership dates
- academic years

If the user has not entered information, for example, the partnership end date, we show ‘Not entered’.

Users can change:

- partnership start and end dates
- academic years

If the user selects any of the change links, they must complete the remaining flow before returning to the ‘Check your answers’ page.

For example, if the user selects to change the partnership dates, they continue to update the academic years before returning to the ‘Check your answers’ page.

Once users select ‘Save partnership’, they return to the provider partnerships list page, and we display a ‘Partnership updated’ success message.
