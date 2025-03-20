---
title: Managing provider accreditations
description: We added a way for users to manage training providers’ accreditations
date: 2025-02-07
tags:
  - training providers
  - accredited providers
  - accreditation
related:
  items:
    - text: The attributes of a training provider
      href: /register-of-training-providers/the-attributes-of-a-training-provider/
    - text: Adding providers to the register
      href: /register-of-training-providers/adding-providers-to-the-register/
    - text: Changing provider details
      href: /register-of-training-providers/changing-provider-details/
    - text: Managing provider addresses
      href: /register-of-training-providers/managing-provider-addresses/
    - text: Managing provider contacts
      href: /register-of-training-providers/managing-provider-contacts/
    - text: Managing provider partnerships
      href: /register-of-training-providers/managing-provider-partnerships/
    - text: Understanding the relationships between organisations delivering initial teacher training
      href: /becoming-a-teacher/understanding-the-relationships-between-organisations-delivering-initial-teacher-training/
screenshots:
  items:
    - text: Add accreditation - question page
      src: new-accreditation--form.png
    - text: Add accreditation - question page with error
      src: new-accreditation--form-error.png
    - text: Add accreditation - check your answers
      src: new-accreditation--check-your-answers.png
    - text: Accreditation added success message
      src: new-accreditation--success.png
    - text: Edit accreditation - question page
      src: edit-accreditation--form.png
    - text: Edit accreditation - question with errors
      src: edit-accreditation--form-error.png
    - text: Edit accreditation - check your answers
      src: edit-accreditation--check-your-answers.png
    - text: Accreditation updated success message
      src: edit-accreditation--success.png
    - text: Confirm remove accreditation
      src: remove-accreditation--confirm.png
    - text: Accreditation removed success message
      src: remove-accreditation--success.png
---

An accredited initial teacher training (ITT) provider is a legal entity accredited by the Department for Education (DfE) to deliver teacher training that leads to qualified teacher status (QTS).

The accredited ITT provider has been awarded accreditation and has full and final accountability for all aspects of training design, delivery, and quality across the partnership. It is liable for the quality of provision, governance, and internal controls. It will be accountable and responsible for public funds spent on the purposes intended across its ITT partnership.

## What we did

We added a way for users to manage training providers’ accreditations, including:

- viewing a list of the provider’s accreditations
- adding an accreditation
- editing an accreditation
- removing an accreditation

## How it works

### Viewing a list of provider’s accreditations

We show a list of the provider’s accreditations, with each accreditation shown in a summary card. This allows us to show ‘Remove’ and ‘Change’ links alongside an individual accreditation rather than next to each attribute of the accreditation details.

![Accreditation details summary card](accreditation-details--summary-card.png "Accreditation details summary card")

Accreditation details include:

- accredited provider number
- date accreditation starts
- date accreditations ends

Each accreditation in the list has a link to change or remove the accreditation.

### Adding an accreditation

Adding an accreditation is a 2 step process:

- Enter accreditation details
- Check your answers

#### Enter accreditation details

When users select ‘Add accreditation’ from the provider details page, we show them an accreditation details form.

The accreditation details form includes fields for:

- accredited provider number
- date accreditation starts
- date accreditations ends - optional

Users must select ‘Continue’ to review and save the accreditation details.

We have specific [data validation rules](#data-validation-rules) users must meet before continuing to the ‘Check your answers’ page.

Users can return to the provider details page by selecting the ‘Back’ or ‘Cancel’ links. If they do this, we do not save any changes.

#### Check your answers

The final step is the ‘Check your answers’ page. We show a summary list containing the following:

- accredited provider number
- date accreditation starts
- date accreditations ends

Users can change any of the accreditation details.

Users can return to the accreditation details form by selecting the ‘Back’ or ‘Change’ links.

If the user has not entered information, for example, the date accreditation ends, we show ‘Not entered’.

Once users select ‘Save accreditation’, they return to the provider details page, and we display an ‘Accreditation added’ success message.

Users can also return to the provider details page by selecting the ‘Cancel’ link. If they do this, we do not save any changes.

### Editing an accreditation

The ‘Edit accreditation’ flow is the same as the ‘Add accreditation’ flow, except we pre-populate the form fields with the accreditation information.

### Removing an accreditation

When users select the remove link on the accreditation summary card, we show them a page to confirm they want to remove the accreditation. This confirmation step ensures they do not remove the accreditation by mistake.

We show a summary of the accreditation details on the confirmation page.

Selecting the red ‘Remove accreditation’ button will complete removing the accreditation from the provider.

We show a success message on the provider details page saying, ‘Accreditation removed’.

Users can add the accreditation again at any time.

### Data validation rules

Accredited provider number and date accreditation starts are required fields.

#### Accredited provider number

An accredited provider number is required. If the user does not enter an accredited provider number, we show the error message:

> Enter accredited provider number

Accredited provider numbers have a specific format:

- 4 digit number
- starts with 1 - if a higher education institution (HEI)
- starts with 5 - if school-centred initial teacher training (SCITT)

If the user does not enter a valid format, we show the error message:

> Enter a valid accredited provider number - it must be 4 digits starting with a 1 or a 5

We show a more specific error message if we know the provider type and the user does not enter a valid format. For example, if the provider is an HEI, we show:

> Enter a valid accredited provider number - it must be 4 digits starting with a 1, like 1234

We do not validate if the accredited provider number corresponds to the operating and legal names of the provider.

#### Date accreditation starts

The date accreditation starts is required. If the user does not enter a date the accreditation starts, we show the error message:

> Enter a date the accreditation starts

If the user enters an incomplete or incorrect date on which accreditation starts, we follow the [GOV.UK design system guidance on validating dates](https://design-system.service.gov.uk/components/date-input/#error-messages).

#### Date accreditation ends

If the user enters an incomplete or incorrect date on which accreditation ends, we follow the [GOV.UK design system guidance on validating dates](https://design-system.service.gov.uk/components/date-input/#error-messages).

## Further considerations

We considered some changes that we did not implement. These included:

- adding a category to the accreditation
- automatically ending an accreditation - if a new accreditation is added with dates that cross over

### Adding a category to the accreditation

While this service is focused on ITT providers, we may need to consider whether it is appropriate to capture information about other accreditations they may have - for example, early years initial teacher training (EYITT) and the early careers framework (EFC).

This information will help us understand how the provider works across different teacher training and retention areas. However, we have not yet established a need for this categorisation.

### Automatically ending an accreditation

Users can add any number of accreditations, and the accreditation dates can overlap. This means that a second accreditation can start before the first has finished.

We must consider whether we should allow this or automatically end the first accreditation based on the start date of the second accreditation.

*[DfE]: Department for Education
*[ECF]: early careers framework
*[EYITT]: early years initial teacher training
*[HEI]: higher education institution
*[ITT]: initial teacher training
*[QTS]: qualified teacher status
*[SCITT]: school-centred initial teacher training
