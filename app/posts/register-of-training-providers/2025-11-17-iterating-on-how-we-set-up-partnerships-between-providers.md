---
title: Iterating on how we set up partnerships between providers
description: We collect when the partnership starts and ends, and the academic years to which the partnership relates
date: 2025-11-17
tags:
  - partnerships
  - providers
  - academic years
related:
  items:
    - text: Iterating on the change provider partnership flow
      href: /register-of-training-providers/iterating-on-the-change-provider-partnership-flow/
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
    - text: Accredited provider - find training partner
      src: accredited-provider--find-training-partner.png
    - text: Accredited provider - find training partner with error
      src: accredited-provider--find-training-partner-with-error.png
    - text: Accredited provider - enter partnership dates
      src: accredited-provider--enter-partnership-dates.png
    - text: Accredited provider - enter partnership dates with error
      src: accredited-provider--enter-partnership-dates-with-error.png
    - text: Accredited provider - select academic year
      src: accredited-provider--select-academic-year.png
    - text: Accredited provider - select academic year with error
      src: accredited-provider--select-academic-year-with-error.png
    - text: Accredited provider - select academic year - no years
      src: accredited-provider--select-academic-year-no-years.png
    - text: Accredited provider - check your answers
      src: accredited-provider--check-your-answers.png
    - text: Accredited provider - partnership added success message
      src: accredited-provider--add-partnership-success.png
    - text: Training partner partnership list
      src: training-partner--partnership-list.png
    - text: Training partner - find accredited provider
      src: training-partner--find-accredited-provider.png
    - text: Training partner - find accredited provider with error
      src: training-partner--find-accredited-provider-with-error.png
    - text: Training partner- enter partnership dates
      src: training-partner--enter-partnership-dates.png
    - text: Training partner- enter partnership dates with error
      src: training-partner--enter-partnership-dates-with-error.png
    - text: Training partner - select academic year
      src: training-partner--select-academic-year.png
    - text: Training partner - select academic year with error
      src: training-partner--select-academic-year-with-error.png
    - text: Training partner - select academic year - no years
      src: training-partner--select-academic-year-no-years.png
    - text: Training partner - check your answers
      src: training-partner--check-your-answers.png
    - text: Training partner - partnership added success message
      src: training-partner--add-partnership-success.png
---

Currently, partnerships only record the accredited partner and the training partner. They do not show when the partnership existed or what years they worked to deliver initial teacher training (ITT).

Linking partnerships to dates and academic years helps us to:

- show the partnership exists to deliver ITT during a period of time
- explain historical changes, for example, when a partnership starts, ends or is replaced
- support funding and quality assurance

## How it works

### Viewing a list of partnerships

We show a list of the provider’s partnerships. For each partnership, we show a summary card containing:

- accredited provider name
- training partner name
- partnership dates
- academic years

The summary card title links to the relevant provider.

If the user is viewing the partnership from the accredited provider’s perspective, the summary card title shows the training partner’s name.

If the user is viewing the partnership from the training partner’s perspective, the summary card title shows the accredited provider’s name.

We link the name to the associated provider’s partnerships page in the register.

The summary card also includes ‘Change’ and ‘Delete’ links.

### Adding a partnership

[![Add partnership flow](add-partnership--flow.png 'Add partnership flow (select image to see a larger version)')](add-partnership--flow.png)

Adding a partnership is a 4-step process:

1. Select a training partner or accredited provider
2. Enter partnership start and end dates
3. Select one or more academic years
4. Check your answers

Users can add a partnership via the accredited provider or the training partner. There are minor differences in wording across the flows, but the overall flow remains the same.

#### Select a training partner or accredited provider

The first step in the ‘Add partnership’ flow is to select the provider.

We use an autocomplete to help users find and select the correct provider.

Users can search for providers by entering the provider’s name, UK provider reference number (UKPRN), unique reference number (URN) or postcode.

If the current provider is accredited, autocomplete only includes training providers.

The autocomplete only includes accredited providers if the current provider is not accredited.

You cannot create a partnership between accredited providers or between training providers. A single accredited ITT provider must lead all ITT partnerships and can involve both training partners and placement schools.

We display each provider’s name and UKPRN or URN in the list. This information enables users to select the correct provider from among similarly named options.

The question is required. If users do not select a training provider, we show an error message:

> Select a training partner

If users are adding the partnership via a training partner, the error message is:

> Select an accredited provider

Users must select ‘Continue’ to enter the partnership’s start and end dates.

#### Enter partnership start and end dates

The second step in the flow is to enter the partnership’s start and end dates.

This information serves two purposes. It allows us to:

- show only relevant academic years to the user in the next step
- automatically add academic years to the partnership each year, if the user does not specify an end date

We collect 2 dates:

- partnership start date
- partnership end date

The partnership's start date is required. If the user does not enter a date, we show the error message:

> Enter date the partnership started

If the user enters an incomplete or incorrect date on which the partnership started, we follow the [GOV.UK design system guidance on validating dates](https://design-system.service.gov.uk/components/date-input/#error-messages).

The partnership’s end date is optional.

If the user enters a date and it is incomplete or incorrect, we follow the [GOV.UK design system guidance on validating dates](https://design-system.service.gov.uk/components/date-input/#error-messages).

#### Select one or more academic years

The third step in the flow is to select one or more academic years.

We display a list of academic years based on the partnership’s start and end dates. This allows users to configure past, present and future academic years.

This question is required. If the user does not select at least one academic year, we show an error message:

> Select academic year

If the page does not contain a list of academic years, because the partnership dates are out of range, we show the heading:

> No academic years match your partnership dates

We also show a message:

> You cannot add the partnership because no academic years match your partnership dates.

And a ‘Change partnership dates’ link.

#### Check your answers

The final set is the ‘Check your answers’ page. We show a summary list containing the following:

- accredited provider name
- training partner name
- partnership dates
- academic years

Users can change:

- selected provider
- partnership start and end dates
- academic years

Once users select ‘Save partnership’, they return to the provider partnerships list page, and we display a ‘Partnership added’ success message.

## Further considerations

We considered some changes that we did not implement. These included:

- only collecting partnership dates, not academic years
- capturing training routes delivered by the partnership

### Only collecting partnership dates, not academic years

Since we know the partnership's start and end dates, we can derive the academic years rather than asking users to select them.

However, this does not allow us to capture gaps in delivery. Furthermore, having academic years as concrete data rather than derived data makes it tangible, measurable, and directly verifiable.

### Capturing training routes delivered by the partnership

Training providers can deliver any number of [routes that lead to qualified teacher status (QTS)](/becoming-a-teacher/routes-into-teaching/). In future, we will consider whether it is necessary to capture the routes that training providers deliver.
