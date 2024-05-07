---
title: Managing partner providers if you’re a school
description: We added a way for placement schools to add their partner ITT providers
date: 2024-04-15
tags:
  - partner providers
related:
  items:
    - text: Adding partner schools
      href: /manage-school-placements/adding-partner-schools/
    - text: Viewing partner schools
      href: /manage-school-placements/viewing-partner-schools/
screenshots:
  items:
    - text: Partner providers list
      src: partner-providers--list.png
    - text: Partner providers list - empty
      src: partner-providers--list-empty.png
    - text: Add partner provider - Find a provider autocomplete
      src: add-partner-provider--find-provider-autocomplete.png
    - text: Add partner provider - Find a provider with an error message
      src: add-partner-provider--find-provider-error-empty.png
    - text: Add partner provider - Find a provider with a duplicate provider error message
      src: add-partner-provider--find-provider-error-duplicate.png
    - text: Add partner provider - Check your answers
      src: add-partner-provider--check-your-answers.png
    - text: Add partner provider - Partner provider list success message
      src: partner-providers--list-success.png
    - text: Partner provider details
      src: partner-provider--details.png
    - text: Remove partner provider
      src: partner-providers--remove-provider.png
    - text: Partner provider removed success message
      src: partner-providers--remove-provider-success.png
---

We added a way for placement schools to add their partner ITT providers.

This information allows schools to:

- select who can view their placement opportunities
- assign placements to their partner providers

## How it works

### Partner provider list

On the partner providers list page, we show:

- an ‘Add partner provider’ button
- an alphabetical list of partner providers - ordered by name
- pagination

The list of partner providers includes the:

- provider name - including a link to the provider details page
- provider UK provider reference number (UKPRN)

We paginate the list if there are more than 25 partner providers.

### Partner provider details

We use provider data from Publish teacher training courses.

The partner provider details page contains two sections:

- provider details
- contact details

The provider details include:

- provider name
- UK provider reference number
- unique reference number (URN) - if known

The contact details include:

- email address
- telephone number
- website
- address

Users can also remove a partner provider if they do not recognise them or no longer work with them to deliver ITT.

### Adding a partner provider

![Add partner provider flow](add-partner-provider--flow.png "Add partner provider flow")

Adding a partner provider has two steps:

1. Find a provider by name, reference number or postcode
2. Check your answers

#### Finding a partner provider

The first step in the ‘Add partner provider’ flow is to find the ITT provider.

Users can search for ITT providers by entering the provider name, UK provider reference number (UKPRN), unique reference number (URN) or postcode.

We use provider data from Publish teacher training courses and display it in an autocomplete.

We display the provider name, town, and postcode for each provider in the list. This information allows users to choose correctly from similarly named providers.

##### Data validation rules

If the user does not enter a provider name, UKPRN, URN or postcode before submitting the page, we show the error message:

> Enter a provider name, UKPRN, URN or postcode

If the user selects a provider from the autocomplete that the school has already added to the service, we show the error message:

> Provider has already been added

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


## Further considerations

We considered some changes that we did not implement. These included:

- emailing providers when a school adds them as a partner
- including warning text to ensure the school has an agreement with the provider
- setting up provider partnerships during onboarding
- creating a no-JavaScript version of the ‘Add partner provider’ flow
- using Register trainee teachers’ data to pre-populate partner provider data
- viewing partner providers’ placement windows

### Emailing providers when a school adds them as a partner

### Including warning text to ensure the school has an agreement with the provider

### Setting up provider partnerships during onboarding

### Creating a no-JavaScript version of the ‘Add partner provider’ flow

### Using Register trainee teachers’ data to pre-populate partner provider data

### Viewing partner providers’ placement windows
