---
title: Changing provider type
description: DESCRIPTION
date: 2025-03-07
tags:
  - providers
  - provider types
related:
  items:
    - text: Adding providers to the register
      href: /register-of-training-providers/adding-providers-to-the-register/
    - text: Changing provider details
      href: /register-of-training-providers/changing-provider-details/
    - text: Managing provider accreditations
      href: /register-of-training-providers/managing-provider-accreditations/
    - text: Searching and filtering the list of training providers
      href: /register-of-training-providers/searching-and-filtering-the-list-of-training-providers/
screenshots:
  items:
    - text: Add provider flow - accredited provider types
      src: add-provider--provider-type-accredited.png
    - text: Add provider flow - Non-accredited provider types
      src: add-provider--provider-type-not-accredited.png
    - text: Provider list
      src: provider-list.png
    - text: Provider list - filtered by school and accredited
      src: provider-list--filter-school-accredited.png
    - text: Provider list - filtered by school and not accredited
      src: provider-list--filter-school-not-accredited.png
    - text: Provider details - school-centred initial teacher training (SCITT) - accredited
      src: provider-details--provider-type-school-accredited.png
    - text: Provider details - school - not accredited
      src: provider-details--provider-type-school-not-accredited.png
    - text: Provider details - higher education institution (HEI) - accredited
      src: provider-details--provider-type-hei-accredited.png
    - text: Provider details - higher education institution (HEI) - not accredited
      src: provider-details--provider-type-hei-not-accredited.png
    - text: Provider details - ‘other’ provider type
      src: provider-details--provider-type-other.png
---

We update the provider type data

## What we changed

We have:

- updated the provider type question in the ‘Add provider’ flow
- added the ‘other’ provider type to the filter on the list of providers page
- amended how we display provider type on the ‘Check your answers’ and provider details pages

## How it works

The provider type ‘school-centred initial teacher training (SCITT)’ is derived from two attributes:

- accreditation type ‘accredited’
- provider type ‘school’

Accreditation is date-based. Therefore, we calculate if a provider is ‘accredited’ depending upon whether the current date falls within the accreditation dates we have stored for each provider.

In the ‘Add provider’ flow, we cannot calculate whether the provider is accredited since we do not know yet, so we ask, ‘Is the provider accredited?’ Once the user has added the provider to the service, we can calculate the accreditation status using the available information.

### Provider type question

![Screenshot showing accredited provider type question](provider-type-question--accredited.png "Provider type question - accredited")

![Screenshot showing non-accredited provider type question](provider-type-question--non-accredited.png "Provider type question - non-accredited")

The second step in the ‘Add provider’ flow is to select the provider type. The options we display to users depend on the answer to the first question, whether the provider is accredited.

If the user has said the provider is accredited in the first step, we show three radio options:

- higher education institution (HEI)
- school-centred initial teacher training (SCITT)
- other

If the user has said the provider is not accredited, we show three radio options:

- higher education institution (HEI)
- school
- other

The school and SCITT provider types have the same underlying value in the data, for example, ‘school’. If the school is accredited, we simply change the ‘School’ label to ‘School-centred initial teacher training (SCITT).’

We do not show a conditional reveal for the ‘other’ provider type, but we will consider adding one in the future.

### Provider type filter

![Provider type filter](provider-type-filter.png "Provider type filter")

We removed ‘school-centred initial teacher training (SCITT)’ from the provider type filter as it is a derived type.

If users search by provider type ‘school’ and accreditation type ‘accredited’, we show providers with the derived type ‘school-centred initial teacher training (SCITT)’.

We added ‘other’ to the options.

You can read more about how the filters work in the post [searching and filtering the list of training providers](/register-of-training-providers/searching-and-filtering-the-list-of-training-providers/)

### Provider details summary list

![Screenshot showing example provider details](provider-details.png "Example provider details")

We show the provider details summary card in several places:

- ‘Add provider’ check your answers
- provider list summary card
- provider details page
- partnership list summary card

As with the provider type question, the school and SCITT provider types have the same underlying value in the data, for example, ‘school’. If the school is accredited, we simply change the ‘School’ label to ‘School-centred initial teacher training (SCITT).’

*[SCITT]: school-centred initial teacher training
