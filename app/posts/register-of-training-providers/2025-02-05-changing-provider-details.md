---
title: Changing provider details
description: We added a way for users to amend a training provider’s details
date: 2025-02-05
tags:
  - accredited providers
  - training providers
  - training partners
related:
  items:
    - text: The attributes of a training provider
      href: /register-of-training-providers/the-attributes-of-a-training-provider/
    - text: Adding providers to the register
      href: /register-of-training-providers/adding-providers-to-the-register/
    - text: Managing provider accreditations
      href: /register-of-training-providers/managing-provider-accreditations/
    - text: Managing provider addresses
      href: /register-of-training-providers/managing-provider-addresses/
    - text: Managing provider contacts
      href: /register-of-training-providers/managing-provider-contacts/
    - text: Managing provider partnerships
      href: /register-of-training-providers/managing-provider-partnerships/
screenshots:
  items:
    - text: Provider details
      src: provider-details.png
    - text: Provider details - showing partially complete information
      src: provider-details--partially-complete.png
    - text: Edit accredited provider details - question page
      src: edit-provider--accredited-provider-details.png
    - text: Edit accredited provider details - question page with errors
      src: edit-provider--accredited-provider-details-error.png
    - text: Edit non-accredited provider details - question page
      src: edit-provider--non-accredited-provider-details.png
    - text: Edit non-accredited provider details - question page with errors
      src: edit-provider--non-accredited-provider-details-error.png
    - text: Accredited provider - check your answers page
      src: edit-provider--check-answers-accredited.png
    - text: Non-accredited provider - check your answers page
      src: edit-provider--check-answers-non-accredited.png
    - text: Provider details with success message
      src: edit-provider--provider-details-success.png
---

We added a way for users to amend a training provider’s details, including:

- operating name
- legal name
- UK provider reference number (UKPRN)
- unique reference number (URN)
- provider code

## How it works

### Provider details

![Summary of provider details](provider-details--summary-list.png "Summary of provider details")

The provider details summary list includes the following:

- provider type
- accreditation type
- operating name
- legal name
- UK provider reference number (UKPRN)
- unique reference number (URN) - if the provider type is ‘school’
- provider code

Each item on the summary list includes a change link, except for provider and accreditation types.

We do not expect users to need to change the provider type since there are only two types: higher education institutions (HEI) and schools. If they do, they will need to contact support.

The provider type of ‘school-centred initial teacher training (SCITT)’ is derived from the ‘school’ provider type and the provider being accredited.

The accreditation type is derived from the provider’s accreditation details and is only summarised here for convenience.

#### Change provider details flow

From the provider details page, the change provider details flow has two steps:

1. Provider details form
2. Check your answers

Users enter the flow by selecting one of the change links in the summary list. All the change links take the user to the same provider details form.

### Provider details form

The provider details form includes fields for:

- operating name
- legal name - marked as optional if the provider type is ‘school’
- UK provider reference number (UKPRN)
- unique reference number (URN) - if the provider type is ‘school’
- provider code

Users can return to the provider details page by selecting the ‘Back’ or ‘Cancel’ links. If they do this, we do not save any changes.

#### Validation rules

##### Operating name

An operating name is required. If the user does not enter an operating name, we show the error message:

> Enter an operating name

##### Legal name

A legal name is required if the provider is accredited. If the user does not enter a legal name, we show the error message:

> Enter a legal name

##### UK provider reference number (UKPRN)

UKPRN is required. If the user does not enter a UKPRN, we show the error message:

> Enter a UK provider reference number (UKPRN)

A UKPRN is eight digits starting with 1. If the user does not enter a valid format, we show the error message:

> Enter a valid UK provider reference number (UKPRN) - it must be 8 digits starting with a 1, like 12345678

We do not test for uniqueness because multiple providers can have the same number.

##### Unique reference number (URN)

URN is required if the provider type is ‘school’.

If the user does not enter a URN, we show an error message:

> Enter a unique reference number (URN)

The URN must be 5 or 6 digits long.

> Enter a valid unique reference number (URN) - it must be 5 or 6 digits long

##### Provider code

Provider code is required. If the user does not enter a provider code, we show the error message:

> Enter a provider code

Provider codes must be unique. If the user does not enter a unique provider code, we show the error message:

> Provider code must be unique

Provider codes must be:

- 3 characters
- alphanumeric

If the user does not enter a valid format, we show the error message:

> Enter a valid provider code - it must be 3 characters and alphanumeric

### Check your answers

The final step is the ‘Check your answers’ page. The user can change:

- operating name
- legal name
- UK provider reference number (UKPRN)
- unique reference number (URN) - if the provider type is ‘school’
- provider code

Users can return to the provider details form by selecting the ‘Back’ or ‘Change’ links.

Users can return to the provider details page by selecting the ‘Cancel’ link. If they do this, we do not save any changes.

If the user has not entered information, for example, the provider’s legal name, we show ‘Not entered’.

Once users select ‘Save provider’, they return to the provider details page, and we display a ‘Provider updated’ success message.

## Further considerations

We considered some changes that we did not implement. These included:

- changing provider type

### Changing provider type

Currently, we do not allow users to change the provider type. This restriction is because:

- we assume the user selected the correct type when they onboarded the provider
- changing the provider type impacts other parts of the service, such as data validation partner relationships

Users must contact support to request the change if the provider type is wrong.

If this becomes a problem, we will consider allowing users to change the provider type.
