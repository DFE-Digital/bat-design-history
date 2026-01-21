---
title: Making contact phone number optional
description: We updated the provider contacts section to make collecting phone numbers optional
date: 2025-11-14
tags:
  - contacts
  - providers
related:
  items:
    - text: Managing provider contacts
      href: /register-of-training-providers/managing-provider-contacts/
screenshots:
  items:
    - text: Provider contact list item
      src: provider-contacts--list-item.png
    - text: Contact edit form
      src: provider-contacts--edit-form.png
    - text: Contact edit form with errors
      src: provider-contacts--edit-form-with-error.png
    - text: Check your answers
      src: provider-contacts--check-your-answers.png
---

We updated the provider contacts section to make collecting phone numbers optional.

## Why we did this

We made the phone number field optional because:

- we need to explore whether collecting phone numbers is necessary
- related services such as Register trainee teachers and Publish teacher training courses do not require this information
- requiring phone numbers creates friction for users who may not have this information to hand

By making it optional, we can still collect phone numbers when users choose to provide them, while not blocking progress for those who do not have the information.

## How it works

### Form changes

The provider contact form still includes the phone number field. However, we now mark it as optional using the standard GOV.UK pattern of adding '(optional)' to the label.

We have also updated the form label to be 'Phone number' rather than 'Telephone'. This follows the [GOV.UK Design System guidance on phone numbers](https://design-system.service.gov.uk/patterns/phone-numbers/).

### Displaying contacts without a phone number

If users do not enter a phone number, we show 'Not entered' in the contact summary. This makes it clear that the field was left blank rather than being missing from the system.

### Data validation rules

Phone number validation only applies if someone enters a value. If the field is left blank, we accept the form without error.

If someone enters a phone number, we follow the [GOV.UK guidance on validating phone numbers](https://design-system.service.gov.uk/patterns/phone-numbers/#error-messages).

For example, if the phone number is not in the correct format, we show the message:

> Enter a phone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192

## Further considerations

We considered some changes that we did not implement. These included:

- removing the phone number field entirely
- adding guidance about when a phone number might be useful

We will monitor usage to understand whether users provide phone numbers voluntarily and whether this information is used by other services.

*[DfE]: Department for Education
