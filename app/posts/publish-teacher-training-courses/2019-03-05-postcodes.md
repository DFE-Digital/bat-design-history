---
title: Postcodes
description: Asking for, validating and storing postcodes
date: 2019-03-05
tags:
  - locations
  - postcodes
  - UCAS
---

We have not been validating postcodes in our contact addresses. This raises a few issues:

- the UCAS API requires postcodes to be a certain length
- our geocoding of the address will not be accurate

There is not specific guidance in the design system for validating postcodes, but [there’s a discussion in the backlog](https://github.com/alphagov/govuk-design-system-backlog/issues/82).

For our case all postcodes will be in England, which avoids many of [the special cases](https://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom#Special_cases).

Postcodes have an outward section, eg SW1 in SW1 1AA (maximum 4 characters), and an inward one eg 1AA in SW1 1AA (maximum 3 characters).

## Validating postcodes

Our validation should:

- have a maximum length of 7 characters after whitespace is removed
- only allow values that contain spaces, A-Z and 0-9

We should not use a complex regular expression (eg ordering of letters and numbers), we do not need to use an API to check postcodes yet.

## Storing postcodes

UCAS restricts us to a maximum of 8 characters.

When storing postcodes:

- strip leading and trailing whitespace
- compress any whitespace between outward and inward sections to 1 space
- if there’s more than one space after compression, strip out all spaces (consider a user entering B N1 1AA or BN1 1 AA)
- all letters should be uppercase (bn1 1aa becomes BN1 1AA)

## Displaying errors

We need an error message that helps a user recover.

{% from "dist/govuk/components/input/macro.njk" import govukInput %}
{{ govukInput({
  label: {
    text: "Postcode"
  },
  classes: "govuk-input--width-10",
  id: "address-postcode",
  name: "address-postcode",
  value: "Somerset, UK",
  errorMessage: {
    text: "Enter a postcode in the format ‘SW10 1AA’"
  }
}) }}

{{ govukInput({
  label: {
    text: "Postcode"
  },
  classes: "govuk-input--width-10",
  id: "address-postcode",
  name: "address-postcode",
  value: "BN11 13SN",
  errorMessage: {
    text: "Postcode is too long. Enter a postcode in the format ‘SW10 1AA’"
  }
}) }}

{{ govukInput({
  label: {
    text: "Postcode"
  },
  classes: "govuk-input--width-10",
  id: "address-postcode",
  name: "address-postcode",
  value: "BN",
  errorMessage: {
    text: "Postcode is too short. Enter a postcode in the format ‘SW10 1AA’"
  }
}) }}

*[API]: Application programming interface
*[UCAS]: Universities and colleges admissions service
