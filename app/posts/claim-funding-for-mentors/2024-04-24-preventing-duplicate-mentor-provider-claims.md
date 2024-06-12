---
title: Preventing duplicate mentor-provider claims
description: We added a way to prevent schools from submitting duplicate claims for funding their mentors’ training
date: 2024-04-24
tags:
  - duplication
  - mentors
  - providers
  - claims
related:
  items:
    - text: Submitting claims for funding
      href: /claim-funding-for-mentors/submitting-claims-for-funding/
    - text: Adding claims in Support on behalf of schools
      href: /claim-funding-for-mentors/adding-claims-in-support-on-behalf-of-schools/
screenshots:
  items:
    - text: List of mentors that can be claimed
      src: mentor-list.png
    - text: Remaining list of mentors that can be claimed
      src: mentor-list--remaining.png
    - text: Remaining list of mentors that can be claimed - error
      src: mentor-list--remaining-error.png
    - text: No mentors remaining that can be claimed
      src: mentor-list--no-mentors-remaining.png
    - text: Mentor’s hours that can be claimed
      src: mentor-hours.png
    - text: Remaining mentor’s hours that can be claimed
      src: mentor-hours--remaining.png
    - text: Remaining mentor’s hours that can be claimed - error
      src: mentor-hours--remaining-error.png
    - text: Remaining mentor’s hours that can be claimed - enter another amount
      src: mentor-hours--remaining-other-error.png
    - text: Remaining mentor’s hours that can be claimed - enter an amount between 1 and X
      src: mentor-hours--remaining-other-error-range.png
---

Previously, we created a way for schools to [submit claims for funding mentor training](/claim-funding-for-mentors/submitting-claims-for-funding/). However, there are restrictions on what they can claim.

Schools can claim up to 20 hours of funding per mentor per provider.

## What we changed

We have added a way to:

- prevent users from selecting mentors who have already had their full 20 hours claimed for
- show the remaining hours a school can claim for each mentor

## How it works

### Selecting a mentor

If a school has claimed the full 20 hours of funding for a mentor for a given accredited provider, they cannot select the mentor in a new claim. To prevent duplicate claim errors, we remove the mentor from the list.

We show a message on the page to explain to users why we are not showing all their mentors:

> This list includes all mentors who can be included in a claim. If a mentor you have added is not showing in this list, that is because they have already had 20 hours of training claimed for with [PROVIDER NAME]
>
> Contact <ittmentor.funding@education.gov.uk> if you think there is a problem

If the school has claimed funding for all their mentors for a given accredited provider, they can no longer create a new claim. In this situation, we show a message:

> There are no mentors you can include in a claim because they have already had 20 hours of training claimed for with [PROVIDER NAME].

We also show a link to change the accredited provider.

### Selecting the number of hours

If a school has not claimed the full 20 hours of funding for a mentor for a given accredited provider, it can claim the remaining hours in another claim.

In this situation, we show a message with the number of hours remaining:

> There are **[NUMBER] hours left to claim** for [MENTOR NAME] for [PROVIDER NAME]
>
> Contact <ittmentor.funding@education.gov.uk> if you think there is a problem

We also adapt the radio options to include the remaining hours. For example, if the remaining hours are seven, we show:

- “7 hours” for the radio option label
- “The remaining amount of hours for standard training” for the radio option hint text.

If the user chooses the ‘Another amount’ option, we show the hint text “Enter whole numbers up to a maximum of 7 hours”.

We also adapt the validation messages to match the remaining hours. For example, “Enter the number of hours between 1 and 7”.
