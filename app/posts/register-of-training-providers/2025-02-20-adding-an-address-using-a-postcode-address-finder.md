---
title: Adding an address using a postcode address finder
description: We updated the new address flow to use a postcode address finder
date: 2025-02-20
tags:
  - addresses
  - locations
  - postcodes
related:
  items:
    - text: Using a postcode address finder in the new provider flow
      href: /register-of-training-providers/using-a-postcode-address-finder-in-the-new-provider-flow/
    - text: Geocoding addresses
      href: /register-of-training-providers/geocoding-addresses/
screenshots:
  items:
    - text: Find address
      src: add-address--find-address.png
    - text: Find address - showing an error
      src: add-address--find-address-error.png
    - text: One address found
      src: add-address--one-address-found.png
    - text: One address found - showing an error
      src: add-address--one-address-found-error.png
    - text: Many addresses found
      src: add-address--many-addresses-found.png
    - text: Many addresses found - showing an error
      src: add-address--many-addresses-found-error.png
    - text: No addresses found
      src: add-address--no-addresses-found.png
    - text: Enter address
      src: add-address--enter-address.png
    - text: Enter address - showing errors
      src: add-address--enter-address-error.png
    - text: Check your answers
      src: add-address--check-your-answers.png
---

We updated the new address flow to use a postcode address finder using the [Ordnance Survey (OS) Places API](https://docs.os.uk/os-apis/accessing-os-apis/os-places-api). We use the Ordnance Survey because the Department for Education (DfE) has access via the Public Sector Geospatial Agreement (PSGA).

We decided to use a postcode address finder because it:

- provides authoritative, validated address data, reducing errors from manual entry
- ensures uniform address formatting and data consistency, aiding effective data management and interoperability
- minimises time spent by users to correct and verify addresses manually
- enables quicker, more straightforward, and more intuitive address input for users, improving overall usability and reducing frustration
- simplifies address lookup for users who might find manual data entry challenging, supporting inclusive service design

## How it works

### Finding an address

We use a ‘search and select’ journey to help users quickly find an address.

[![Find address flow](add-address--find-address-flow.png "Find address flow (select image to see a larger version)")](add-address--find-address-flow.png)

The add address flow has three steps:

1. Find address
2. Select address
3. Check your answers

There is an additional step if the API does not return any addresses or, the addresses shown do not include the address the user is trying to find. This step allows users to enter an address manually.

#### Find address

[![Find address form showing two inputs, one for postcode and another for building number or name](add-address--find-address.png "Find address form (select image to see a larger version)")](add-address--find-address.png)

The find address form includes two fields:

- postcode
- building number or name - optional

We have specific [data validation rules](#find-address-form) that users must meet before continuing to the ‘Select address’ page.

#### Select address

[![Select address form showing a list of radios, one for each address returned by the API](add-address--select-address.png "Select address form (select image to see a larger version)")](add-address--select-address.png)

If the API returns one or more addresses, we show a list of radio inputs, one radio for each address returned.

The page heading shows how many addresses were returned and the search terms used, for example:

- 1 address found for ‘[postcode]’
- 1 address found for ‘[postcode]’ and ‘[building number or name]’
- 25 addresses found for ‘[postcode]’
- 25 addresses found for ‘[postcode]’ and ‘[building number or name]’

If the address they're looking for is not listed, users can change their search by selecting the ‘Change your search’ or ‘Back’ links.

We limit the number of addresses shown to the user to 25 rather than paginate the results. Pagination introduces additional cognitive and interaction steps (clicking back and forth through pages), complicating a task that should ideally be simple and immediate.

We have specific [data validation rules](#select-address-form) that users must meet before continuing to the ‘Check your answers’ page.

Users can also return to the provider details page by selecting the ‘Cancel’ link. If they do this, we do not save any changes.

##### One address found

We do not send users automatically to the check your answers page if only one address is found.

If a user’s search finds a single address, we show the user the list containing the single address. This interaction allows users to orient themselves or correct mistakes before continuing.

##### No addresses found

[![No addresses found page showing links to change the search or enter the address manually](add-address--no-addresses-found.png "No addresses found (select image to see a larger version)")](add-address--no-addresses-found.png)

If the API does not return any addresses, we show:

- “No addresses found” in the page heading
- a link to ‘Change your search’
- a link to ‘Enter address manually’

#### Enter address manually

We allow users to enter an address manually if:

- no addresses are found in their search
- none of the addresses shown match the address they want to add

The address form includes fields for:

- address line 1
- address line 2
- address line 3
- town or city
- county
- postcode

We include a third address line because provider and school data analysis show that several providers and schools have a third line in their addresses.

We have specific [data validation rules](#enter-address-form) that users must meet before continuing to the ‘Check your answers’ page.

Users can return to the ‘Select address’ page by selecting the ‘Back’ link.

Users can also return to the provider details page by selecting the ‘Cancel’ link. If they do this, we do not save any changes.

#### Check your answers

The final step is the ‘Check your answers’ page. We show a summary list containing the following:

- address line 1
- address line 2
- address line 3
- town or city
- county
- postcode

Users can change the address details depending on their route to this page.

If users come to this page from the ‘Select address’ page, selecting a ‘Change’ or ‘Back’ link will take them to the ‘Select address’ page.

If users come to this page from the ‘Enter address’ page, selecting a ‘Change’ or ‘Back’ link will take them to the ‘Enter address’ page.

If some address fields do not have any information, or the user has not entered information, for example, address lines 2 and 3 and county, we leave the field blank rather than remove them to avoid confusion.

Once users select ‘Save address’, they return to the provider details page, and we display an ‘Address added’ success message.

Users can also return to the provider details page by selecting the ‘Cancel’ link. If they do this, we do not save any changes.

### Editing an address

Users can edit addresses.

The edit address form is the same as the manual entry route in the ‘Add address’ flow. We prepopulate the form with the existing address details and use the same [data validation rules](#enter-address-form).

We allow users to edit addresses because this gives them control, especially if the initial automated results do not fully match reality - for example, missing flat numbers, unusual properties, or rural addresses.

### Data validation rules

#### Find address form

If the user does not enter a postcode, we show the error message:

> Enter postcode

If the user does not enter a valid postcode format, we show the error message:

> Enter a full UK postcode

We follow the [GOV.UK guidance on allowing different postcode formats](https://design-system.service.gov.uk/patterns/addresses/#allow-different-postcode-formats).

#### Select address form

If the user does not select an address from the list, we show the error message:

> Select an address

#### Enter address form

Address line 1, town or city, and postcode are required address fields.

If the user does not enter an address line 1, we show the error message:

> Enter address line 1, typically the building and street

If the user does not enter a town or city, we show the error message:

> Enter town or city

If the user does not enter a postcode, we show the error message:

> Enter postcode

If the user does not enter a valid postcode format, we show the error message:

> Enter a full UK postcode

*[API]: application programming interface
*[DfE]: Department for Education
*[OS]: Ordnance Survey
*[PSGA]: Public Sector Geospatial Agreement
