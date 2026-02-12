---
title: Handling incomplete addresses from the postcode address finder
description: We added a way to capture missing address details when the Ordnance Survey postcode address finder returns incomplete data
date: 2026-02-12
tags:
  - addresses
  - locations
  - postcodes
related:
  items:
    - text: Adding an address using a postcode address finder
      href: /register-of-training-providers/adding-an-address-using-a-postcode-address-finder/
    - text: Managing provider addresses
      href: /register-of-training-providers/managing-provider-addresses/
    - text: Geocoding addresses
      href: /register-of-training-providers/geocoding-addresses/
screenshots:
  items:
    - text: Prepopulated manual address form
      src: manual-address-form.png
    - text: Prepopulated manual address form with errors
      src: manual-address-form--with-errors.png
---

When a user searches for an address using the Ordnance Survey (OS) postcode address finder, we display a list of addresses. Users must select an address from this list or choose to enter an address manually.

## The problem

The addresses returned by the OS Places API are formatted for display. They look complete to users because we present them in a readable format. However, the underlying data may not contain all the fields we need to store a valid address.

For example, an address returned by the API might be missing:

- address line 1
- town or city
- postcode

These are required fields in our address data model. Without them, we cannot save a valid address.

Previously, if a user selected an address from the list, we took them directly to the 'Check your answers' page. If required fields were missing, the user had no way to add them before saving.

## What we changed

We made this change in two places:

- the 'Add provider' flow, which includes a step asking for the provider's address
- the 'Add address' flow within an existing provider record

In both flows, we now check the selected address for missing required fields before showing the 'Check your answers' page.

If the selected address is missing address line 1, town or city, or postcode, we redirect the user to the manual entry form. We pre-populate the form with the data we do have from the API, and ask the user to fill in the missing details.

This means both flows now have two possible routes after selecting an address:

1. If the address has all required fields, the user goes to the 'Check your answers' page as before.
2. If the address is missing required fields, the user goes to the manual entry form to complete the missing details before continuing to the 'Check your answers' page.

## How it works

The flow works as follows:

1. The user searches for an address by postcode.
2. We display a list of addresses returned by the API.
3. The user selects an address.
4. We check whether the selected address contains all required fields (address line 1, town or city, and postcode).
5. If all required fields are present, the user continues to the 'Check your answers' page.
6. If any required fields are missing, the user is taken to the manual entry form with the available data pre-populated.
7. The user enters the missing details and continues to the 'Check your answers' page.

We show a message in an inset text component below the page heading and above the address form that says:

> The selected address does not include all required fields. Enter the address manually.

The manual entry form uses the same [data validation rules](/register-of-training-providers/adding-an-address-using-a-postcode-address-finder/#enter-address-form) as the existing address form. Users must provide address line 1, town or city, and a valid postcode before they can continue.

## Why we did this

We did this because:

- users could unknowingly save incomplete addresses, causing data quality issues
- the formatted display of addresses gave users confidence that the data was complete when it was not
- incomplete addresses affect downstream processes that rely on accurate location data, such as geocoding and publishing provider details

*[API]: application programming interface
*[OS]: Ordnance Survey
