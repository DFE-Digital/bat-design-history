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

We did this because we need to explore the need to collect phone numbers, and services such as Register trainee teachers and Publish teacher training courses do not require this information.

## How it works

The provider contact form still includes the phone number field. However, we now mark it as optional.

If someone enters a phone number, we follow the [GOV.UK guidance on validating phone numbers](https://design-system.service.gov.uk/patterns/phone-numbers/#error-messages).

For example, if the phone number is not in the correct format and there is no example, we show the message:

> Enter a phone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192

We have also updated the form label to be ‘Phone number’ rather than ‘Telephone’. If users do not enter a phone number, we show ‘Not entered’.
