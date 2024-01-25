---
title: Adding organisations in Support
description: Giving the support team the ability to add schools and ITT providers to the service
date: 2023-12-18T12:00:00+00:00
tags:
  - schools
  - providers
  - onboarding
related:
  items:
    - text: Adding and editing organisations in Support for Publish teacher training courses
      href: /support-for-publish/adding-and-editing-organisations/
    - text: Updating organisation details in Publish teacher training courses
      href: /publish-teacher-training-courses/updating-organisation-details/
screenshots:
  items:
    - text: Organisation list
      src: add-organisation--organisation-list.png
    - text: Add organisation - Organisation type
      src: add-organisation--organisation-type.png
    - text: Add organisation - Organisation type error
      src: add-organisation--organisation-type-error.png
    - text: Add organisation - Find a provider
      src: add-organisation--find-provider.png
    - text: Add organisation - Find a provider autocomplete
      src: add-organisation--find-provider-autocomplete.png
    - text: Add organisation - Find a provider with an error message
      src: add-organisation--find-provider-error-empty.png
    - text: Add organisation - Find a provider with a duplicate provider error message
      src: add-organisation--find-provider-error-duplicate.png
    - text: Add organisation - Find a school
      src: add-organisation--find-school.png
    - text: Add organisation - Find a school autocomplete
      src: add-organisation--find-school-autocomplete.png
    - text: Add organisation - Find a school with an error message
      src: add-organisation--find-school-error-empty.png
    - text: Add organisation - Find a school with a duplicate school error message
      src: add-organisation--find-school-error-duplicate.png
    - text: Add organisation - Check your answers (provider)
      src: add-organisation--check-your-answers-provider.png
    - text: Add organisation - Check your answers (school)
      src: add-organisation--check-your-answers-school.png
    - text: Add organisation - Organisation list success message
      src: add-organisation--organisation-list-success.png
---

We added a way for the support team to onboard new organisations to the service.

## How it works

![Add organisation flow](add-organisation--flow.png "Add organisation flow")

Adding an organisation has three steps:

1. Selecting an organisation type
2. Find an organisation by name, reference number or postcode
3. Check your answers

### Organisation list

On the organisation list page, we show:

- an ‘Add organisation’ button
- an alphabetical list of organisations - ordered by name
- a search
- filter
- pagination

### Organisation type

The first step in the ‘Add organisation’ flow is to choose the organisation type.

The organisation type form has two options:

- ITT provider
- School

If the user selects ‘ITT provider’, we show a form they can use to search for the ITT provider.

If the user selects ‘School’, we show a form they can use to search for the school.

#### Data validation rules

If the user does not select an option, we show an error message:

> Select an organisation type

### Finding an organisation

The next step is to find the organisation. We show a different find page if the user wants to add an ITT provider or a school.

#### ITT providers

Users can search for ITT providers by entering the provider name, UK provider reference number (UKPRN), unique reference number (URN) or postcode.

We display the list of providers in an autocomplete.

We use provider data from Publish teacher training courses and display it in an autocomplete.

We display the provider name, town and postcode for each provider in the list. This information allows users to choose from similarly named providers correctly.

##### Data validation rules

If the user does not enter a provider name, UKPRN, URN or postcode before submitting the page, we show the error message:

> Enter a provider name, UKPRN, URN or postcode

If the user selects a provider from the autocomplete that the support team has already added to the service, we show the error message:

> Provider has already been added

In both cases, the user cannot continue adding the ITT provider.

#### Schools

Users can search for schools by entering the school name, unique reference number (URN) or postcode.

We use [Get information about schools (GIAS)](https://www.get-information-schools.service.gov.uk/) data and display it in an autocomplete.

We display the school name, town and postcode for each school in the list. This information allows users to choose from similarly named schools correctly.

##### Data validation rules

If the user does not enter a school name, URN or postcode before submitting the page, we show the error message:

> Enter a school name, URN or postcode

If the user selects a school from the autocomplete that the support team has already added to the service, we show the error message:

> School has already been added

In both cases, the user cannot continue adding the school.

### Check your answers

The final step is to check your answers. We show a different check your answers page if the user adds an ITT provider or a school.

For all organisation types, we show:

- basic organisation details
- contact details

Basic organisation details include:

- organisation name
- UK provider reference number (UKPRN) - if the organisation is an ITT provider
- unique reference number (URN)

Contact details include:

- email address
- telephone number
- website
- address

#### Schools

For schools, we also show:

- additional details - also known as ‘contrast factors’
- special educational needs and disabilities (SEND) information
- Ofsted information

Additional details include:

- group
- type
- phase
- gender
- minimum age
- maximum age
- nursery provision
- religious character
- admissions policy
- urban or rural
- school capacity
- total pupils
- total boys
- total girls
- percentage free school meals

Special educational needs and disabilities (SEND) information include:

- special classes
- SEND provision
- training with disabilities

Oftsed information includes:

- rating
- last inspection date

##### Not entered versus unknown information

If data derived from Publish or GIAS is missing, we show ‘Not entered’.

In some cases, for example, Ofsted inspection data, the data will exist but be ‘Unknown’.

## Further considerations

We considered some changes that we did not implement. These included:

- adding the first user as part of the onboarding flow
- allowing users to add organisations manually if they cannot find them

### Adding users during the onboarding flow

We do not add users as part of the onboarding flow because we:

- wanted to keep the onboarding flow as simple as possible
- need to carry out research with our support team to understand the optimal onboarding flow

### Manually adding organisation details

We do not allow the manual addition of ITT providers and schools as we need assurance that the provider or school exists and the data is valid.

For schools, we must also capture all the additional attributes (also known as ‘contrast factors’) so that the placement search is accurate. It would significantly burden the support team if we asked them to find and input all the school’s attributes.
