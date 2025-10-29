---
title: Managing provider partnerships
description: We added a way for users to manage training providers’ partnerships
date: 2025-02-12
tags:
  - training providers
  - training partners
  - partnerships
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
    - text: Managing provider contacts
      href: /register-of-training-providers/managing-provider-contacts/
screenshots:
  items:
    - text: Provider details
      src: provider-details.png
    - text: Add partnership - question page
      src: add-partnership--form.png
    - text: Add partnership - question page autocomplete
      src: add-partnership--form-autocomplete.png
    - text: Add partnership - question page with errors
      src: add-partnership--form-error.png
    - text: Add partnership - check your answers
      src: add-partnership--check-your-answers.png
    - text: Add partnership success message
      src: add-partnership--success.png
    - text: View partnership details
      src: view-partnership--details.png
    - text: Confirm removing training partnership
      src: remove-training-partnership--confirm.png
    - text: Confirm removing accredited partnership
      src: remove-accredited-partnership--confirm.png
    - text: Partnership removed success message
      src: remove-partnership--success.png
---

The Register of training providers collects partnership information for several reasons, including:

- to identify roles, responsibilities, and delivery arrangements between accredited providers and their partners
- to understand regional partnership coverage, gaps, and opportunities to inform strategic decision-making and policy development
- to enable easier identification of expertise, resources, and opportunities for further collaboration between providers
- to give clear information on provider partnerships, helping candidates make informed decisions about training opportunities
- analysing partnership structures, arrangements, and outcomes to identify best practices and inform improvements in initial teacher training (ITT) provision

## What we did

We added a way for users to manage training providers’ partnerships, including:

- viewing a list of the provider’s partnerships
- adding a partnership
- removing a partnership

Currently, users cannot edit partnerships since no additional information is related to the partnership.

## How it works

### Viewing a list of the provider’s partnerships

We show a list of the provider’s partners. For each partner, we show:

- operating name - including a link to a page showing more provider details
- legal name
- UK provider reference number (UKPRN)

### Adding a partnership

Adding a partnership is a 2-step process:

- Select a provider
- Check your answers

#### Select a provider

The first step in the ‘Add partnership’ flow is to select the provider.

In this service and other services in Becoming a teacher (BAT), we use autocompletes to help users find and select organisations, including providers. We decided to do the same in the add partnership flow.

Users can search for providers by entering the provider’s name, UK provider reference number (UKPRN), unique reference number (URN) or postcode.

If the current provider is accredited, autocomplete only includes training providers.

The autocomplete only includes accredited providers if the current provider is not accredited.

You cannot create a partnership between accredited providers or between training providers. All ITT partnerships must be led by a single accredited ITT provider and can involve both training partners and placement schools.

We display the provider name and UKPRN or URN for each provider in the list. This information allows users to choose correctly from similarly named providers.

Users must select ‘Continue’ to review and save the partnership details.

We have specific [data validation rules](#data-validation-rules) users must meet before continuing to the ‘Check your answers’ page.

Users can return to the provider details page by selecting the ‘Back’ or ‘Cancel’ links. If they do this, we do not save any changes.

#### Check your answers

The final step is the ‘Check your answers’ page. We show a summary list containing the following:

- provider type
- operating name
- legal name
- UK provider reference number (UKPRN)
- unique reference number (URN) - if the provider type is ‘school’
- provider code

Users can change the selected provider but not the specific provider details.

Users can return to the ‘Select provider’ form by selecting the ‘Back’ or ‘Change’ links.

Once users select ‘Save partnership’, they return to the provider details page, and we display a ‘Partnership added’ success message.

Users can also return to the provider details page by selecting the ‘Cancel’ link. If they do this, we do not save any changes.

### Removing a partnership

Users can remove the partnership from the partnership details page by selecting the ‘Remove partnership’ link below the page heading.

Users must confirm they want to remove the partnership. This confirmation step ensures they do not remove the partnership by mistake.

Selecting the red ‘Remove partnership’ button will complete removing the partnership from the provider.

We show a success message on the provider details page saying, ‘Partnership removed’.

Users can add the partnership again at any time.

### Data validation rules

If the user does not enter a provider name, UKPRN, URN or postcode before submitting the page, we show the error message:

> Enter a provider name, UKPRN, URN or postcode

## Further considerations

We considered some changes that we did not implement. These included:

- Selecting a provider when JavaScript is unavailable
- Preventing duplicate provider partnerships
- Assigning a partnership to a specific accreditation

### Selecting a provider when JavaScript is unavailable

When users select a provider in the ‘Add partnership’ flow, we use an autocomplete to help them find providers.

The autocomplete works well for quickly selecting a provider, but it requires JavaScript, which not everyone has, and it does not always run successfully.

Users might not have JavaScript enabled or available because they:

- disable JavaScript in their browsers to avoid potential security risks, such as cross-site scripting (XSS) attacks
- rely on screen readers or other assistive technologies and might disable JavaScript if it interferes with their tools
- are using older or less powerful devices where JavaScript can slow down performance
- work in an organisation that enforces strict browsing policies that disable JavaScript to maintain security and control over their network

We will add a no-JavaScript version of the find provider flow, which we can progressively enhance.

### Preventing duplicate provider partnerships

When users add provider partnerships, we do not check whether the partnership exists. This means they could create duplicate partnerships.

We will add validation to ensure users cannot create duplicate provider partnerships.

### Assigning a partnership to a specific accreditation

Over time, a provider can be accredited, lose accreditation to become a training partner, and then become accredited again. Throughout these changes, a provider could have different partnerships and roles within those partnerships.

We need to consider how partnerships change over time and whether these partnerships need to be tied to a specific accreditation.

*[BAT]: Becoming a teacher
*[ITT]: initial teacher training
*[UKPRN]: UK provider reference number
*[URN]: unique reference number
*[XSS]: cross-site scripting
