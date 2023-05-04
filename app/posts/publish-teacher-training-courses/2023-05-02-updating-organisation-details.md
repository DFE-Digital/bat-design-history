---
title: Updating organisation details
description: We updated the organisation details section to reflect work done on adding and editing organisations in Support
date: 2023-05-02
tags:
  - providers
  - organisation details
  - locations
related:
  items:
    - text: Improving how providers add schools
      href: /publish-teacher-training-courses/improving-how-providers-add-schools/
    - text: Adding and editing organisations
      href: /support-for-publish/adding-and-editing-organisations/
screenshots:
  items:
    - text: Organisation details - school
      src: organisation--details-school.png
    - text: Organisation details - accredited provider
      src: organisation--details-accredited-provider.png
    - text: Organisation details form - school
      src: organisation--details-form-school.png
    - text: Organisation details form - accredited provider
      src: organisation--details-form-accredited-provider.png
    - text: Organisation details form with errors - school
      src: organisation--details-form-errors-school.png
    - text: Organisation details form with errors - accredited provider
      src: organisation--details-form-errors-accredited-provider.png
    - text: Organisation contact details
      src: organisation--contact-details.png
    - text: Organisation contact details with errors
      src: organisation--contact-details-errors.png
---

We recently made changes to Support for publish teacher training courses (Support) to [improve how the support team adds and edits organisation details](/support-for-publish/adding-and-editing-organisations/).

We also changed Support and Publish teacher training courses (Publish) to use [Get information about schools (GIAS)](https://www.get-information-schools.service.gov.uk/) data for addresses.

Following these changes, we needed to update the organisation details section of Publish.

## What we changed

We have updated the:

- organisation details page
- edit organisation details form
- edit organisation contact details form
- data validation rules

### Organisation details

The organisation details section includes:

- provider name
- provider code
- accredited provider ID - if the organisation is an accredited provider
- UK provider reference number (UKPRN)
- unique reference number (URN) - if the provider is a school

Users can change UKPRN and URN.

Users cannot change the provider name, provider code and accredited provider ID as this affects other services, for example, Apply for teacher training (Apply). They must contact the support team to make a change.

### Organisation contact details

Every course published on Find postgraduate teacher training (Find) shows an organisation's contact details. They must keep this information up to date.

The organisation’s contact details section includes:

- email address
- telephone number
- website
- address - lines 1 to 3, town or city, county and postcode

Users can change all contact details.

### Data validation rules

#### UKPRN

UKPRN is required. If the user does not enter a UKPRN, we show the error message:

> Enter a UK provider reference number (UKPRN)

A UKPRN is eight digits starting with 1. If the user does not enter a valid format, we show the error message:

> Enter a valid UK provider reference number (UKPRN) - it must be 8 digits starting with a 1, like 12345678

We do not test for uniqueness because multiple providers can have the same number.

For example, one organisation may be registered in Publish twice, once for primary courses and once for secondary courses. Whilst we prefer that providers do not do this, we can only ensure the UKPRN is unique once we have reconciled the duplicate organisations.

#### URN

If the provider is a school, they must enter a URN for the school. If they do not enter a URN, we show an error message:

> Enter a unique reference number (URN)

The URN must be 5 or 6 digits long.

> Enter a valid unique reference number (URN) - it must be 5 or 6 digits long

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
