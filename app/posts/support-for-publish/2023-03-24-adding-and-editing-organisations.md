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

We updated the ‘Add organisation’ and the edit organisation flows to improve how the support team manages organisations.



## What we changed

We have:

- updated the ‘Add organisation’ flow
- updated the edit organisation flow

## How it works

### Adding an organisation

![Add organisation flow](add-organisation--flow.png "Add organisation flow")

#### Organisation details

The organisation details form includes:

- provider name
- provider code
- UK provider reference number (UKPRN)
- is the organisation an accredited provider?
- accredited provider ID - if the organisation is an accredited provider
- provider type
- unique reference number (URN) - if the provider is a school

##### Is the organisation an accredited provider?

The ‘Is the organisation an accredited provider?’ question has two options:

- Yes
- No

If the user selects ‘Yes’, we show an additional field for ‘Accredited provider ID’.

The accredited provider ID is determined by the market regulations team within DfE.

If the provider is a higher education institution (HEI), the number must start with a ‘1’. If the provider is a school centred initial teacher training (SCITT), the number must start with a ‘5’.

Register trainee teachers (Register) use the accredited provider ID to ensure that providers are accredited to register teacher trainees for that academic year and award them Qualified teacher status (QTS) or Early years teacher status (EYTS).

##### Provider type

The ‘Provider type’ question has three options:

- Higher education institution (HEI)
- School centred initial teacher training (SCITT)
- School

If the user selects ‘school’, we show an additional field for ‘unique reference number (URN)’

We use the URN to look up the school’s contact information from data provided by the Get information about schools (GIAS) service.

#### Contact details

The contact details form includes:

- email address
- telephone number
- website
- address - address lines 1 to 3, town or city, county and postcode

If the provider is a school, we use the URN to look up the contact details in the Get information about schools (GIAS) data to prepopulate the form. We also show a message at the top of the page to tell the user where the data has come from.

### Editing an organisation

A user can edit:

- provider name
- UK provider reference number (UKPRN)
- is the organisation an accredited provider?
- accredited provider ID - if the organisation is an accredited provider
- provider type
- unique reference number (URN) - if the provider is a school
- email address
- telephone number
- website
- address - address lines 1 to 3, town or city, county and postcode

Users cannot edit the provider code as this affects other services, for example, Apply for teacher training (Apply).

### Data validation rules

#### Provider name

> Enter a provider name

We do not test for special characters

#### Provider code

Required

> Enter a provider code

Unique

> UNIQUE MESSAGE

Valid format

- 3 characters
- Alphanumeric

> Enter a valid provider code

#### UKPRN

Required

> Enter a UK provider reference number (UKPRN)

Valid format

- 8 digits starting with 1

> Enter a valid UK provider reference number (UKPRN)

We do not test for uniqueness because multiple providers can have the same number. For example, if there is one registered organisation with two marketing names - WLTTA has primary and secondary providers in our system

#### Accredited provider

Required

> Select if the organisation is an accredited provider

##### Accredited provider ID

Required, if the organisation is an accredited provider

> Enter an accredited provider ID

Valid format

- 4 digits number
- Starts with 1 - if a higher education institution (HEI)
- Starts with 5 - if school-centred initial teacher training (SCITT)

> Enter a valid accredited provider ID

We do not validate if the name is correct for a given provider as the provider name is a marketing name

#### Provider type

Required

> Select a provider type

Schools can’t be accredited providers

> Accredited provider cannot be a school

##### URN

If the user has chosen ‘School’ as a provider type, they must enter a URN for the school. If they don’t enter a URN, we show an error message:

> Enter a unique reference number (URN)

The URN must be 5 or 6 digits long.

> Enter a valid unique reference number (URN)

#### Email address

Required

> Enter an email address

Correct format

> Enter an email address in the correct format, like name@example.com

#### Telephone number

Required

> Enter a telephone number

Correct format

> Enter a real telephone number

#### Website address

Required

> Enter a website address

Correct format

> Enter a website address in the correct format, like https://www.example.com

#### Contact address

Address line 1, Town or city and postcode are required.

> Enter address line 1

> Enter a town or city

> Enter a postcode

Postcode correct format

> Enter a real postcode

## Further considerations

We considered some changes which were not implemented.

### Auto-generating the provider code

### Implementing an accredited provider ID search

Looking up accredited provider IDs in service rather than the support user having to go to find a spreadsheet

### Creating provider-facing registration forms
