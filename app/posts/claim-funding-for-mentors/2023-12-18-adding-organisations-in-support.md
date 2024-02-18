---
title: Adding organisations in Support
description: Giving the support team the ability to add schools to the service
date: 2023-12-18T12:00:00+00:00
tags:
  - schools
  - onboarding
related:
  items:
    - text: Adding a school when JavaScript is unavailable
      href: /claim-funding-for-mentors/adding-a-school-when-javascript-is-unavailable/
    - text: Adding and editing organisations in Support for Publish teacher training courses
      href: /support-for-publish/adding-and-editing-organisations/
    - text: Updating organisation details in Publish teacher training courses
      href: /publish-teacher-training-courses/updating-organisation-details/
screenshots:
  items:
    - text: Organisation list
      src: add-organisation--organisation-list.png
    - text: Add organisation - Find a school
      src: add-organisation--find-school.png
    - text: Add organisation - Find a school autocomplete
      src: add-organisation--find-school-autocomplete.png
    - text: Add organisation - Find a school with an error message
      src: add-organisation--find-school-error-empty.png
    - text: Add organisation - Find a school with a duplicate school error message
      src: add-organisation--find-school-error-duplicate.png
    - text: Add organisation - Check your answers
      src: add-organisation--check-your-answers-school.png
    - text: Add organisation - Organisation list success message
      src: add-organisation--organisation-list-success.png
eleventyComputed:
  eleventyNavigation:
    key: claim-funding-support-adding-organisations
---

We added a way for the support team to onboard new organisations to Claim funding for mentors.

## How it works

![Add organisation flow](add-organisation--flow.png "Add organisation flow")

Adding an organisation has two steps:

1. Find an organisation by name, reference number or postcode
2. Check your answers

### Organisation list

On the organisation list page, we show:

- an ‘Add organisation’ button
- an alphabetical list of organisations - ordered by name
- a search
- filter
- pagination

### Finding an organisation

The first step in the ‘Add organisation’ flow is to find the organisation.

Users can search for schools by entering the school name, unique reference number (URN) or postcode.

We use [Get information about schools (GIAS)](https://www.get-information-schools.service.gov.uk/) data and display it in an autocomplete.

We display the school name, town and postcode for each school in the list. This information allows users to choose from similarly named schools correctly.

#### Data validation rules

If the user does not enter a school name, URN or postcode before submitting the page, we show the error message:

> Enter a school name, URN or postcode

If the user selects a school from the autocomplete that the support team has already added to the service, we show the error message:

> School has already been added

In both cases, the user cannot continue adding the school.

### Check your answers

The final step is to check your answers.

For each school, we show:

- basic organisation details
- additional details - also known as ‘contrast factors’
- special educational needs and disabilities (SEND) information
- Ofsted information
- contact details

Basic organisation details include:

- organisation name
- UK provider reference number (UKPRN) - if the organisation is an ITT provider
- unique reference number (URN)

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

Contact details include:

- email address
- telephone number
- website
- address

#### Not entered versus unknown information

We show ' Not entered ' if data derived from GIAS is missing.

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

We do not allow users to manually add schools as we need assurance that the school exists and the data is valid.

*[GIAS]: Get information about schools
*[URN]: unique reference number
*[UKPRN]: UK provider reference number
*[SEND]: special educational needs and disabilities
