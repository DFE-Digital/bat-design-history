---
title: Adding providers to the register
description: We added a way for users to onboard new training providers into the register
date: 2025-02-04
tags:
  - accredited providers
  - training providers
  - training partners
related:
  items:
    - text: Defining the attributes of teacher training providers
      href: /register-of-training-providers/defining-the-attributes-of-teacher-training-providers/
    - text: Changing provider details
      href: /register-of-training-providers/changing-provider-details/
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
    - text: Provider list
      src: provider-list.png
    - text: ‘Is the provider accredited’ - question page
      src: add-provider--is-accredited.png
    - text: ‘Is the provider accredited’ - question page with errors
      src: add-provider--is-accredited-error.png
    - text: Accredited provider type - question page
      src: add-provider--provider-type-accredited.png
    - text: Accredited provider type - question page with errors
      src: add-provider--provider-type-accredited-error.png
    - text: Non-accredited provider type - question page
      src: add-provider--provider-type-non-accredited.png
    - text: Non-accredited provider type - question page with errors
      src: add-provider--provider-type-non-accredited-error.png
    - text: Accredited provider details - question page
      src: add-provider--provider-details-accredited.png
    - text: Accredited provider details - question page with errors
      src: add-provider--provider-details-accredited-error.png
    - text: Non-accredited provider details - question page
      src: add-provider--provider-details-non-accredited.png
    - text: Non-accredited provider details - question page with errors
      src: add-provider--provider-details-non-accredited-error.png
    - text: Provider accreditation details - question page
      src: add-provider--accreditation-details.png
    - text: Provider accreditation details - question page with errors
      src: add-provider--accreditation-details-error.png
    - text: Provider address details - question page
      src: add-provider--address-details.png
    - text: Provider address details - question page with errors
      src: add-provider--address-details-error.png
    - text: Accredited provider, check your answers page
      src: add-provider--check-answers-accredited.png
    - text: Non-accredited provider, check your answers page
      src: add-provider--check-answers-non-accredited.png
    - text: Provider list with success message
      src: add-provider--provider-list-success.png
---

We added a way for users to onboard new training providers into the register.

## How it works

[![Add provider flow](add-provider--flow.png "Add provider flow (select image to see a larger version)")](add-provider--flow.png)

The ‘Add provider’ flow has six steps:

1. Select if the provider is accredited
2. Select the provider type
3. Enter provider details - for example, name and unique identifiers
4. Enter accreditation details - if the provider is accredited
5. Enter address details
6. Check your answers

### Provider list

On the provider list page, we show:

- an ‘Add provider’ button
- an alphabetical list of training providers - ordered by name
- a search
- filter
- pagination

### Select if the provider is accredited

The first step in the ‘Add provider’ flow is to select if the provider is accredited.

This gate question determines what we show users in subsequent steps.

The form has two radio options:

- yes
- no

#### Validation rules

If the user does not select an option, we show an error message:

> Select if the provider is accredited

### Select the provider type

The next step is to select the provider type.

If the user has said the provider is accredited in the previous step, we show two radio options:

- higher education institution (HEI)
- school-centred initial teacher training (SCITT)

If the user has said the provider is not accredited, we show two radio options:

- higher education institution (HEI)
- school

#### Validation rules

If the user does not select an option, we show an error message:

> Select the provider type

### Enter provider details

The provider details form includes fields for:

- operating name
- legal name - optional if the provider type is ‘school’
- UK provider reference number (UKPRN)
- unique reference number (URN) - if the provider type is ‘school’
- provider code

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

### Enter accreditation details

The accreditation details form includes fields for:

- accredited provider number
- date accreditation starts
- date accreditation ends - optional

#### Validation rules

Accredited provider number and date accreditation starts are required fields.

##### Accredited provider number

An accredited provider number is required. If the user does not enter an accredited provider number, we show the error message:

> Enter accredited provider number

Accredited provider numbers have a specific format:

- 4 digit number
- starts with 1 - if a higher education institution (HEI)
- starts with 5 - if school-centred initial teacher training (SCITT)

If the user does not enter a valid format, we show the error message:

> Enter a valid accredited provider number - it must be 4 digits starting with a 1 or a 5

We show a more specific error message if we know the provider type and the user does not enter a valid format. For example, if the provider is an HEI, we show:

> Enter a valid accredited provider number - it must be 4 digits starting with a 1, like 1234

We do not validate if the accredited provider number corresponds to the operating and legal names of the provider.

##### Date accreditation starts

The date accreditation starts is required. If the user does not enter a date the accreditation starts, we show the error message:

> Enter a date the accreditation starts

If the user enters an incomplete or incorrect date on which accreditation starts, we follow the [GOV.UK design system guidance on validating dates](https://design-system.service.gov.uk/components/date-input/#error-messages).

##### Date accreditation ends

If the user enters an incomplete or incorrect date on which accreditation ends, we follow the [GOV.UK design system guidance on validating dates](https://design-system.service.gov.uk/components/date-input/#error-messages).

### Enter address details

The address details form includes fields for:

- address line 1
- address line 2 - optional
- address line 3 - optional
- town or city
- county - optional
- postcode

We include a third address line because provider and school data analysis show that a small percentage of providers and schools have a third line in their addresses.

#### Validation rules

Address line 1, town or city, and postcode are required address fields.

If the user does not enter an address line 1, we show the error message:

> Enter address line 1, typically the building and street

If the user does not enter a town or city, we show the error message:

> Enter town or city

If the user does not enter a postcode, we show the error message:

> Enter postcode

If the user does not enter a valid postcode format, we show the error message:

> Enter a full UK postcode

### Check your answers

The final step is to check your answers.

We show three summary lists:

1. Provider details - including provider type
2. Accreditation details - if the provider is accredited
3. Address details

Provider details include:

- provider type
- operating name
- legal name
- UK provider reference number (UKPRN)
- unique reference number (URN) - if the provider type is ‘school’
- provider code

If the user has not entered information, for example, the provider’s legal name, we show ‘Not entered’.

Accreditation details include:

- accredited provider number
- date accreditation starts
- date accreditations ends

If the user has not entered the date the accreditation ends, we show ‘Not entered’.

Address details include:

- address line 1
- address line 2
- address line 3
- town or city
- county
- postcode

If the user has not entered information, for example, address lines 2 and 3 and county, we leave the field blank to avoid confusion.

Once users select ‘Save provider’, they return to the list of providers, and we display a ‘Provider added’ success message.

## Further considerations

We considered some changes that we did not implement. These included:

- validating the uniqueness of UKPRN and URN
- generating the provider code
- skipping questions
- using a postcode address finder
- using Get information about schools (GIAS) data

### Validating the uniqueness of UKPRN and URN

[Key characteristics of a register](/register-of-training-providers/the-characteristics-of-a-register/) include authoritative and accurate data containing stable unique identifiers.

Currently, training providers can have duplicate UKPRN and URN data. However, we must consider whether this is appropriate and how we might engage with providers to garner unique identifiers. For example, in the instance of UKPRNs, providers will need to register with the [UK register of learning providers (UKRLP)](https://www.ukrlp.co.uk/).

### Generating the provider code

The provider code is created by support when they onboard a provider to the service. Support must ensure this code is unique and satisfies the code format - a 3 digit alphanumeric.

We could automatically generate this code, removing the burden of someone manually creating it.

We will consider automating the code generation in a future piece of work.

### Skipping questions

Not all information, such as accreditation and address details, is required when adding a provider to the service. We ask for these details to ensure we immediately capture a good amount of information about the provider.

However, if the user onboarding the provider does not know all the necessary details, they cannot complete the onboarding flow. In this situation, we could consider allowing users to skip questions, allowing them to complete the provider’s basic details - for example, names and unique references.

### Using a postcode address finder

The onboarding flow contains a simple address form for users to enter the provider’s address details. However, this is inefficient and could lead to users inputting incorrect information.

We will consider replacing the address form with an address look-up, with the option to add an address manually if the address is not found.

### Using Get information about schools (GIAS) data

Suppose users select the ‘school’ provider type. In that case, we asked for a lot of information that we could populate using information from GIAS, such as the provider’s name, address, and contact details.

To improve the onboarding flow for schools, we will consider replacing parts of the flow with a GIAS look-up, with the option to add information manually if needed.
