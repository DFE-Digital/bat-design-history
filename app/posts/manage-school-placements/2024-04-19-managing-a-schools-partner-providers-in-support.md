---
title: Managing a school’s partner providers in Support
description: We added a way for support users to manage partner ITT providers on behalf of placement schools
date: 2024-04-19
tags:
  - partner providers
related:
  items:
    - text: Managing partner providers if you’re a school
      href: /manage-school-placements/managing-partner-providers-if-youre-a-school/
    - text: Managing partner schools if you’re an ITT provider
      href: /manage-school-placements/managing-partner-schools-if-youre-an-itt-provider/
    - text: Managing an ITT provider’s partner schools in Support
      href: /manage-school-placements/managing-an-itt-providers-partner-schools-in-support/
screenshots:
  items:
    - text: Partner providers list
      src: partner-providers--list.png
    - text: Partner providers list - empty
      src: partner-providers--list-empty.png
    - text: Add partner provider - Find a provider
      src: add-partner-provider--find-provider.png
    - text: Add partner provider - Find a provider autocomplete
      src: add-partner-provider--find-provider-autocomplete.png
    - text: Add partner provider - Find a provider with an error message
      src: add-partner-provider--find-provider-error-empty.png
    - text: Add partner provider - Find a provider with a duplicate provider error message
      src: add-partner-provider--find-provider-error-duplicate.png
    - text: Add partner provider - Check your answers
      src: add-partner-provider--check-your-answers.png
    - text: Partner provider added success message
      src: partner-providers--list-success.png
    - text: Partner provider details
      src: partner-provider--details.png
    - text: Remove partner provider
      src: partner-providers--remove-provider.png
    - text: Partner provider removed success message
      src: partner-providers--remove-provider-success.png
---

We added a way for Support users to manage partner providers on behalf of placement schools.

Partner providers include:

- higher education institutions (HEIs)
- school-centred initial teacher training (SCITTs)
- lead partners - including schools and HEIs

## How it works

### Partner provider list

On the partner providers list page, we show:

- an ‘Add partner provider’ button
- an alphabetical list of partner providers - ordered by name
- pagination

The list of partner providers includes the following:

- provider name - including a link to the provider details page
- UK provider reference number (UKPRN)

We paginate the list if there are more than 25 partner providers.

### Partner provider details

We use provider data from Publish teacher training courses.

The partner provider details page contains two sections:

- provider details
- contact details

The provider details include:

- provider name
- UK provider reference number (UKPRN)
- unique reference number (URN) - if known

The contact details include:

- email address
- telephone number
- website
- address

Users can also remove a partner provider if they do not recognise them or no longer work with them to deliver ITT.

#### Not entered versus unknown information

We show ‘Not entered’ if data derived from Publish is missing.

### Adding a partner provider

![Add partner provider flow](add-partner-provider--flow.png "Add partner provider flow")

Adding a partner provider has two steps:

1. Find a provider by name, reference number or postcode
2. Check your answers

#### Finding a partner provider

The first step in the ‘Add partner provider’ flow is to find the ITT provider.

Users can search for ITT providers by entering the provider name, UK provider reference number (UKPRN), unique reference number (URN) or postcode.

We use provider data from Publish teacher training courses and display it in an autocomplete.

We display the provider name and code for each provider in the list. This information allows users to choose correctly from similarly named providers.

##### Data validation rules

If the user does not enter a provider name, UKPRN, URN or postcode before submitting the page, we show the error message:

> Enter a provider name, UKPRN, URN or postcode

If the user selects a provider from the autocomplete that the school has already added to the service, we show the error message:

> Partner provider has already been added

In both cases, the user cannot continue adding the ITT provider.

#### Check your answers

The final step is to check your answers.

Users cannot change any of the provider’s details except to change the provider they’re adding.

We show:

- organisation details
- contact details

Organisation details include:

- organisation name - including a change link
- UK provider reference number (UKPRN)
- unique reference number (URN)

Contact details include:

- email address
- telephone number
- website
- address

##### Not entered versus unknown information

We show ‘Not entered’ if data derived from Publish is missing.

### Removing partner providers

Users can remove a partner provider via the partner provider details page.

Users must confirm the partner provider’s removal when they select ‘Remove partner provider’.

Users cannot remove the partner provider if the school has assigned the provider to an active placement.
