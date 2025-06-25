---
title: Managing provider contacts
description: We added a way for users to manage training providers’ contacts
date: 2025-02-08
tags:
  - training providers
  - contact details
related:
  items:
    - text: Defining the attributes of teacher training providers
      href: /register-of-training-providers/defining-the-attributes-of-teacher-training-providers/
    - text: Adding providers to the register
      href: /register-of-training-providers/adding-providers-to-the-register/
    - text: Changing provider details
      href: /register-of-training-providers/changing-provider-details/
    - text: Managing provider accreditations
      href: /register-of-training-providers/managing-provider-accreditations/
    - text: Managing provider addresses
      href: /register-of-training-providers/managing-provider-addresses/
    - text: Managing provider partnerships
      href: /register-of-training-providers/managing-provider-partnerships/
screenshots:
  items:
    - text: Add contact - question page
      src: add-contact--form.png
    - text: Add contact - question page with error
      src: add-contact--form-error.png
    - text: Add contact - check your answers
      src: add-contact--check-your-answers.png
    - text: Contact added success message
      src: add-contact--success.png
    - text: Edit contact - question page
      src: edit-contact--form.png
    - text: Edit contact - question with errors
      src: edit-contact--form-error.png
    - text: Edit contact - check your answers
      src: edit-contact--check-your-answers.png
    - text: Contact updated success message
      src: edit-contact--success.png
    - text: Confirm removing contact
      src: remove-contact--confirm.png
    - text: Contact removed success message
      src: remove-contact--success.png
---

The Register of training providers collects contact information for several reasons, including:

- to engage contacts when seeking feedback on policy changes or communicating updates impacting providers
- to discuss and verify details regarding provider accreditation status, compliance requirements, or quality assurance matters
- to facilitate prompt resolution of operational issues, technical support queries, or data discrepancies
- to communicate effectively between providers involved in partnerships, ensuring clear and accurate information sharing
- to validate provider information and ensure the accuracy of records, particularly regarding sensitive data and regulatory requirements
- to reach the right contact for audit processes, verification checks, or accountability reviews

## What we did

We added a way for users to manage training providers’ contacts, including:

- viewing a list of the provider’s contacts
- adding a contact
- editing a contact
- removing a contact

## How it works

### Viewing a list of provider’s contacts

We show a list of the provider’s contacts, with each contact shown in a summary card. This layout allows us to show ‘Remove’ and ‘Change’ links alongside an individual contact rather than next to each attribute of the contact details.

![Contact details summary card](contact-details--summary-card.png "Contact details summary card")

Contact details include:

- first name
- last name
- email address
- telephone number

Each contact in the list has a link to change or remove the contact.

### Adding a contact

Adding a contact is a 2-step process:

- Enter contact details
- Check your answers

#### Enter contact details

When users select ‘Add contact’ from the provider details page, we show them a contact details form.

The contact details form includes fields for:

- first name
- last name
- email address
- telephone number

Users must select ‘Continue’ to review and save the contact details.

We have separate fields for the contact’s name because:

- it allows us to be more personal in email communications
- in future, if we use DfE Sign-in, we will need separate first name and last name fields
- we are following the pattern used by other Becoming a teacher (BAT) services

We have specific [data validation rules](#data-validation-rules) users must meet before continuing to the ‘Check your answers’ page.

Users can return to the provider details page by selecting the ‘Back’ or ‘Cancel’ links. If they do this, we do not save any changes.

#### Check your answers

The final step is the ‘Check your answers’ page. We show a summary list containing the following:

- first name
- last name
- email address
- telephone number

Users can change any of the contact details.

Users can return to the contact details form by selecting the ‘Back’ or ‘Change’ links.

Once users select ‘Save contact’, they return to the provider details page, and we display a ‘Contact added’ success message.

Users can also return to the provider details page by selecting the ‘Cancel’ link. If they do this, we do not save any changes.

### Editing a contact

The ‘Edit contact’ flow is the same as the ‘Add contact’ flow, except we pre-populate the form fields with the contact information.

### Removing a contact

When users select the ‘Remove’ link on the contact summary card, we show them a page to confirm they want to remove the contact. This confirmation step ensures they do not remove the contact by mistake.

We show a summary of the contact details on the confirmation page.

Selecting the red ‘Remove contact’ button will complete removing the contact from the provider.

We show a success message on the provider details page saying, ‘Contact removed’.

Users can add the contact again at any time.

### Data validation rules

#### First name

A first name is required. If the user does not enter a first name, we show the error message:

> Enter a first name

#### Last name

A last name is required. If the user does not enter a last name, we show the error message:

> Enter a last name

#### Email address

An email address is required. If the user does not enter an email address, we show the error message:

> Enter an email address

The email address must be valid. If the user does not enter a valid email address, we show the error:

> Enter an email address in the correct format, like <name@example.com>

We follow the [GOV.UK design system guidance on validating email addresses](https://design-system.service.gov.uk/patterns/email-addresses/#error-messages).

The prototype uses the following regular expression to validate email addresses:

```javascript
^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$
```

#### Telephone number

A telephone is required. If the user does not enter a telephone number, we show the error message:

> Enter a telephone number

The telephone number must be valid. If the user does not enter a valid telephone, we show the error:

> Enter a phone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192

We follow the [GOV.UK design system guidance on validating phone numbers](https://design-system.service.gov.uk/patterns/phone-numbers/#error-messages).

The prototype uses the following regular expression to validate telephone numbers:

```javascript
^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$
```

## Further considerations

We considered adding a category to the contact, allowing us to use the contact information in different contexts. However, we have not yet established a strong need for this or determined the categories.

*[BAT]: Becoming a teacher
