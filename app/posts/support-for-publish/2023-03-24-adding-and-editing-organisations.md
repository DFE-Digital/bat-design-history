---
title: Adding and editing organisations
description: Improving how the support team adds and edits organisation details
date: 2023-03-24
tags:
  - providers
screenshots:
  items:
    - text: Add organisation details
      src: add-organisation--details.png
    - text: Add organisation details - errors
      src: add-organisation--details-errors.png
    - text: Add organisation contact details
      src: add-organisation--contact-details.png
    - text: Add organisation contact details (school)
      src: add-organisation--contact-details-school.png
    - text: Add organisation contact details - errors
      src: add-organisation--contact-details-errors.png
    - text: Add organisation - check your answers
      src: add-organisation--check-your-answers.png
    - text: Add organisation - check your answers (school)
      src: add-organisation--check-your-answers-school.png
    - text: Add organisation - success
      src: add-organisation--success.png
    - text: Organisation details
      src: organisation--details.png
    - text: Edit organisation details
      src: edit-organisation--details.png
    - text: Edit organisation details - errors
      src: edit-organisation--details-errors.png
    - text: Edit organisation details - success
      src: edit-organisation--details-success.png
    - text: Edit organisation contact details
      src: edit-organisation--contact-details.png
    - text: Edit organisation contact details - errors
      src: edit-organisation--contact-details-errors.png
    - text: Edit organisation contact details - success
      src: edit-organisation--contact-details-success.png
    - text: Remove organisation
      src: edit-organisation--remove.png
    - text: Organisation removed
      src: edit-organisation--removed.png
    - text: Cannot remove the organisation
      src: edit-organisation--cannot-remove.png
---

We updated the ‘Add organisation’ and the edit organisation flows to improve how the support team manages organisations. The improved order and labelling of the fields in the flows help the support agent to enter the information more quickly and accurately.

## What we changed

We have:

- updated the ‘Add organisation’ flow
- updated the edit organisation flow

## How it works

### Adding an organisation

![Add organisation flow](add-organisation--flow.png "Add organisation flow")

Adding an organisation has 3 steps:

1. Enter organisation details - provider name, provider type and UKPRN
2. Enter contact details - email address, telephone number, website address and postal address
3. Check your answers

#### Organisation details

The organisation details form includes:

- provider name
- provider code
- UK provider reference number (UKPRN)
- ‘Is the organisation an accredited provider?’
- accredited provider ID - if the organisation is an accredited provider
- provider type
- unique reference number (URN) - if the provider is a school

##### Provider code

The provider code is an identifier used in Find postgraduate teacher training (Find) and Publish teacher training courses (Publish). It is a unique, 3-character alphanumeric code created by the Support team.

##### ‘Is the organisation an accredited provider?’

The ‘Is the organisation an accredited provider?’ question has two options:

- Yes
- No

If the user selects ‘Yes’, we show an additional field for ‘Accredited provider ID’.

The market regulations team in DfE defines the accredited provider ID.

If the provider is a higher education institution (HEI), the number must start with a ‘1’. If the provider is a school centred initial teacher training (SCITT), the number must start with a ‘5’.

Register trainee teachers (Register) use the accredited provider ID to ensure that providers are accredited to register teacher trainees for that academic year and award them Qualified teacher status (QTS) or Early years teacher status (EYTS).

##### Provider type

The ‘Provider type’ question has three options:

- Higher education institution (HEI)
- School centred initial teacher training (SCITT)
- School

If the user selects ‘school’, we show an additional field for ‘Unique reference number (URN)’.

We use the URN to look up the school’s contact information from data provided by the [Get information about schools (GIAS)](https://www.get-information-schools.service.gov.uk/) service.

#### Contact details

Previously, the address entered in ‘Contact details’ would be the contact address shown on the course page on Find and the first location (‘School placement’ on Find). We now use the information entered here for ‘Contact details’ only. Adding a school placement is a separate task.

The contact details form includes:

- email address
- telephone number
- website
- address - lines 1 to 3, town or city, county and postcode

If the provider is a school, we use the URN to look up the contact details in the [Get information about schools (GIAS)](https://www.get-information-schools.service.gov.uk/) data to prepopulate the form. We also show a message telling the user where the data originated.

### Editing an organisation

A user can edit:

- provider name
- UK provider reference number (UKPRN)
- ’Is the organisation an accredited provider?’
- accredited provider ID - if the organisation is an accredited provider
- provider type
- unique reference number (URN) - if the provider is a school
- email address
- telephone number
- website
- address - lines 1 to 3, town or city, county and postcode

Users cannot edit the provider code as this affects other services, for example, Apply for teacher training (Apply).

### Data validation rules

#### Provider name

Provider name is required. If the user does not enter a provider name, we show the error message:

> Enter a provider name

We do not prevent special characters.

#### Provider code

Provider code is required. If the user does not enter a provider code, we show the error message:

> Enter a provider code

Provider codes must be unique. If the user does not enter a unique provider code, we show the error message:

> Provider code must be unique

Provider codes must be:

- 3 characters
- alphanumeric

If the user does not enter a valid format, we show the error message:

> Enter a valid provider code

#### UKPRN

UKPRN is required. If the user does not enter a UKPRN, we show the error message:

> Enter a UK provider reference number (UKPRN)

A UKPRN is eight digits starting with 1. If the user does not enter a valid format, we show the error message:

> Enter a valid UK provider reference number (UKPRN)

We do not test for uniqueness because multiple providers can have the same number.

For example, one organisation may be registered in Publish twice, once for primary courses and once for secondary courses. Whilst we prefer that providers do not do this, we cannot ensure the UKPRN is unique until we have reconciled the duplicate organisations.

#### Accredited provider

‘Is the organisation an accredited provider?’ is a required question. If the user does not answer the question, we show the error message:

> Select if the organisation is an accredited provider

##### Accredited provider ID

Users must enter an ‘Accredited provider ID’ if the organisation is an accredited provider. If the user does not enter an accredited provider ID, we show the error message:

> Enter an accredited provider ID

Accredited provider IDs have a specific format:

- 4 digit number
- starts with 1 - if a higher education institution (HEI)
- starts with 5 - if school-centred initial teacher training (SCITT)

If the user does not enter a valid format, we show the error message:

> Enter a valid accredited provider ID

We do not validate if the name is correct for a given provider as we allow the provider to use a marketing name in Find postgraduate teacher training (Find).

#### Provider type

Provider type is required. If the user does not answer the question, we show the error message:

> Select a provider type

If the user has answered ‘yes’ to ‘Is the organisation an accredited body?’, the provider type cannot be a school. If the user chooses ‘School’, we show the error message:

> Accredited provider cannot be a school

##### URN

If the user has chosen ‘School’ as a provider type, they must enter a URN for the school. If they do not enter a URN, we show an error message:

> Enter a unique reference number (URN)

The URN must be 5 or 6 digits long.

> Enter a valid unique reference number (URN)

#### Email address

Email address is required. If the user does not enter an email address, we show the error message:

> Enter an email address

If the user does not enter a valid email address format, we show the error message:

> Enter an email address in the correct format, like name@example.com

#### Telephone number

Telephone number is required. If the user does not enter a telephone number, we show the error message:

> Enter a telephone number

If the user does not enter a valid telephone number format, we show the error message:

> Enter a real telephone number

#### Website address

Website address is required. If the user does not enter a website address, we show the error message:

> Enter a website address

If the user does not enter a valid website address format, we show the error message:

> Enter a website address in the correct format, like https://www.example.com

#### Contact address

Address line 1, town or city, and postcode are required address fields.

If the user does not enter an address line 1, we show the error message:

> Enter address line 1

If the user does not enter a town or city, we show the error message:

> Enter a town or city

If the user does not enter a postcode, we show the error message:

> Enter a postcode

If the user does not enter a valid postcode format, we show the error message:

> Enter a real postcode

## Further considerations

We considered some changes which we did not implement:

- Auto-generating the provider code
- Accredited provider ID search
- Provider-facing registration forms

### Auto-generating the provider code

The support team manually creates provider codes. We could remove the need to do this by auto-generating the code. We already know the format and can determine if the code is unique.

We will consider making this change in a future piece of work.

### Accredited provider ID search

The market regulations team in DfE defines the accredited provider ID. They share this information with Becoming a Teacher (BAT) in a spreadsheet.

Since this information only changes occasionally and the support team do not regularly add or edit organisation IDs, we decided not to provide an accredited provider ID search. The support team can use the spreadsheet to find the ID.

### Provider-facing registration forms

When we onboard a new provider, we send them a Microsoft form to collect information about their organisation. The support team then uses this information to add the provider to the service.

Instead of using the Microsoft form, we could build an onboarding flow, which the provider completes, reducing the need for the support team to copy-type information.

We did not implement this as onboarding new organisations is infrequent and only occurs in cycles, not throughout the year.
