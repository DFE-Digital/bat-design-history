---
title: Managing provider addresses
description: We added a way for users to manage training providers’ addresses
date: 2025-02-06
tags:
  - training providers
  - addresses
  - locations
related:
  items:
    - text: The attributes of a training provider
      href: /register-of-training-providers/the-attributes-of-a-training-provider/
    - text: Adding providers to the register
      href: /register-of-training-providers/adding-providers-to-the-register/
    - text: Changing provider details
      href: /register-of-training-providers/changing-provider-details/
    - text: Managing provider accreditations
      href: /register-of-training-providers/managing-provider-accreditations/
    - text: Managing provider contacts
      href: /register-of-training-providers/managing-provider-contacts/
    - text: Managing provider partnerships
      href: /register-of-training-providers/managing-provider-partnerships/
screenshots:
  items:
    - text: Add address - question page
      src: new-address--form.png
    - text: Add address - question page with error
      src: new-address--form-error.png
    - text: Add address - check your answers
      src: new-address--check-your-answers.png
    - text: Address added success message
      src: new-address--success.png
    - text: Edit address - question page
      src: edit-address--form.png
    - text: Edit address - question with errors
      src: edit-address--form-error.png
    - text: Edit address - check your answers
      src: edit-address--check-your-answers.png
    - text: Address updated success message
      src: edit-address--success.png
    - text: Confirm remove address
      src: remove-address--confirm.png
    - text: Address removed success message
      src: remove-address--success.png
---

The Register of training providers collects address information for several reasons, including:

- to accurately direct candidates to training locations, enabling easier discovery and application to relevant training courses
- to analyse provider coverage, identify regional gaps, support equitable service distribution, and inform strategic decisions
- to publish accurate location details, maintaining transparency about providers’ operational premises for public trust
- to clearly understand physical locations when managing partnerships or collaborative arrangements between providers

## What we did

We added a way for users to manage training providers’ addresses, including:

- viewing a list of the provider’s addresses
- adding an address
- editing an address
- removing an address

## How it works

### Viewing a list of the provider’s addresses

![Address details summary card](address-details--summary-card.png "Address details summary card")

Address details include:

- address line 1
- address line 2
- address line 3
- town or city
- county
- postcode

Each address in the list has a link to change or remove the address.

### Adding an address

Adding an address is a 2 step process:

- Enter address details
- Check your answers

#### Enter address details

When users select ‘Add address’ from the provider details page, we show them an address form.

The address form includes fields for:

- address line 1
- address line 2
- address line 3
- town or city
- county
- postcode

We include a third address line because provider and school data analysis shows that a small number of providers and schools have a third line in their addresses.

Users must select ‘Continue’ to review and then save the address.

We have specific [address data validation rules](#data-validation-rules) users must meet before continuing to the ‘Check your answers’ page.

Users can return to the provider details page by selecting the ‘Back’ or ‘Cancel’ links. If they do this, we do not save any changes.

#### Check your answers

The final step is the ‘Check your answers’ page. We show a summary list containing:

- address line 1
- address line 2
- address line 3
- town or city
- county
- postcode

Users can change any of the address details.

Users can return to the address details form by selecting the ‘Back’ or ‘Change’ links.

If the user has not entered information, for example, address lines 2 and 3 and county, we leave the field blank rather than remove them to avoid confusion.

Once users select ‘Save address’, they return to the provider details page, and we display an ‘Address added’ success message.

Users can also return to the provider details page by selecting the ‘Cancel’ link. If they do this, we do not save any changes.

### Editing an address

The ‘Edit address’ flow is the same as the ‘Add address’ flow except we pre-populate the form fields with the address information.

### Removing an address

When users select the remove link on the address summary card, we show them a page to confirm they want to remove the address. This confirmation step ensures they do not remove the address by mistake.

We show a summary of the address details on the confirmation page.

Selecting the red ‘Remove address’ button will complete removing the address from the provider.

We show a success message on the provider details page saying ‘Address removed’.

Users can add the address again at any time.

### Data validation rules

Address line 1, town or city, and postcode are required address fields.

If the user does not enter an address line 1, we show the error message:

> Enter address line 1, typically the building and street

If the user does not enter a town or city, we show the error message:

> Enter town or city

If the user does not enter a postcode, we show the error message:

> Enter postcode

If the user does not enter a valid postcode format, we show the error message:

> Enter a full UK postcode

## Further considerations

We considered some changes that we did not implement. These included:

- Using a postcode address finder
- Archiving or soft-deleting the address

### Using a postcode address finder

The ‘Add address’ flow uses a simple address form for users to enter the provider’s address details. However, this is inefficient and could lead to users inputting incorrect information.

We will consider replacing the address form with an address look-up, with the option to add an address manually if the address is not found.

### Archiving or soft-deleting the address

When users delete an address, it is removed from the service entirely. We may consider archiving, logging or soft-deleting the address for future reference.
