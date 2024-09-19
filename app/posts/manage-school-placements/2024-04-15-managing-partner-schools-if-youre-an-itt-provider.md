---
title: Managing partner schools if you’re an ITT provider
description: We added a way for ITT providers to manage their partner schools
date: 2024-04-15
tags:
  - partner schools
related:
  items:
    - text: Managing partner providers if you’re a school
      href: /manage-school-placements/managing-partner-providers-if-youre-a-school/
screenshots:
  items:
    - text: Partner schools list
      src: partner-schools--list.png
    - text: Partner schools list - empty
      src: partner-schools--list-empty.png
    - text: Add partner school - Find a school
      src: add-partner-school--find-school.png
    - text: Add partner school - Find a school autocomplete
      src: add-partner-school--find-school-autocomplete.png
    - text: Add partner school - Find a school with an error message
      src: add-partner-school--find-school-error-empty.png
    - text: Add partner school - Find a school with a duplicate school error message
      src: add-partner-school--find-school-error-duplicate.png
    - text: Add partner school - Check your answers
      src: add-partner-school--check-your-answers.png
    - text: Partner school added success message
      src: partner-schools--list-success.png
    - text: Partner school details
      src: partner-school--details.png
    - text: Remove partner school
      src: partner-schools--remove-school.png
    - text: Partner school removed success message
      src: partner-schools--remove-school-success.png
---

We added a way for ITT providers to add their partner schools.

This information allows ITT providers to:

- easily find placements within their school partners
- share information with their partner schools, such as placement windows and trainee information

Provider-school relationships also help DfE understand how the market is connected.

## How it works

### Partner schools list

On the partner schools list page, we show:

- an ‘Add partner school’ button
- an alphabetical list of partner schools - ordered by name
- pagination

The list of partner schools includes the following:

- school name - including a link to the school details page
- unique reference number (URN)

We paginate the list if there are more than 25 partner schools.

### Partner school details

We use [Get information about schools (GIAS)](https://www.get-information-schools.service.gov.uk/) data to populate school information.

The partner schools details page contains five sections:

- organisation details
- additional details
- special educational needs and disabilities (SEND) information
- Ofsted information
- contact details

Organisation details include:

- organisation name
- UK provider reference number (UKPRN) - if available
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
- percentage of free school meals

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

Users can also remove a partner school if they do not recognise them or no longer work with them to deliver ITT.

#### Not entered versus unknown information

We show ‘Not entered’ if data derived from GIAS is missing.

In some cases, for example, Ofsted inspection data, the data will exist but be ‘Unknown’.

### Adding a partner school

![Add partner school flow](add-partner-school--flow.png "Add partner school flow")

Adding a partner school has two steps:

1. Find a school by name, reference number or postcode
2. Check your answers

#### Finding a partner school

The first step in the ‘Add partner provider’ flow is to find the ITT provider.

Users can search for schools by entering the school name, unique reference number (URN) or postcode.

We use [Get information about schools (GIAS)](https://www.get-information-schools.service.gov.uk/) data and display it in an autocomplete.

We display the school name, town, and postcode for each school in the list. This information allows users to choose correctly from similarly named schools.

##### Data validation rules

If the user does not enter a school name, URN or postcode before submitting the page, we show the error message:

> Enter a school name, URN or postcode

If the user selects a school from the autocomplete that the provider has already added to the service, we show the error message:

> Partner school has already been added

In both cases, the user cannot continue adding the school.

#### Check your answers

The final step is to check your answers.

Users cannot change any of the school’s details except to change the school they’re adding.

We show:

- organisation details
- additional details - also known as ‘contrast factors’
- special educational needs and disabilities (SEND) information
- Ofsted information
- contact details

Organisation details include:

- organisation name - including a change link
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
- percentage of free school meals

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

##### Not entered versus unknown information

We show ‘Not entered’ if data derived from GIAS is missing.

In some cases, for example, Ofsted inspection data, the data will exist but be ‘Unknown’.

### Removing partner schools

Users can remove a partner school via the partner school details page.

Users must confirm the partner school’s removal when they select ‘Remove partner school’.

Users cannot remove the partner school if the school has assigned the provider to an active placement. In this instance, the provider will need to contact the school to be able to make the change.

## Further considerations

We considered some changes that we did not implement. These included:

- emailing schools when a provider adds them as a partner
- including warning text to ensure the provider has an agreement with the school
- setting up school partnerships during onboarding
- creating a no-JavaScript version of the ‘Add partner school’ flow
- using Register trainee teachers’ data to pre-populate partner school data

### Emailing schools when a provider adds them as a partner

Providers can add schools without the school’s agreement. While schools can see the partner provider in their part of the service, we will also email all school users to ensure they know the new relationship. However, emailing school users is only possible if the school uses the service.

Since schools can remove provider partnerships, notifying schools will allow them to regulate their partnerships.

### Including warning text to ensure the provider has an agreement with the school

Typically, providers and schools enter into a contractual agreement when partnering for initial teacher training (ITT). To ensure this is the case, we will consider adding warning text to the ‘Add partner school’ flow to highlight the need for an official relationship.

### Creating a no-JavaScript version of the ‘Add partner school’ flow

The ‘Add partner school’ flow uses an accessible autocomplete, allowing users to search for partner schools.

The autocomplete works well for quickly selecting a school, but it requires JavaScript, which not everyone has, and it does not always run successfully.

We will add a no-JavaScript version of the ‘Add partner school’ flow, which we can progressively enhance.

We already have a [way to add schools when JavaScript is unavailable](/manage-school-placements/addding-a-school-when-ther-is-no-javascript-available/) that can inform this work.

### Setting up school partnerships during onboarding

If a provider wants to use the service, the support team must onboard them. During this onboarding process, the support team adds the provider and first user.

The support team can also add the provider’s partner schools if they are known. However, we prefer that provider users set up their school partners to reduce the support burden.

We should consider introducing an onboarding flow for provider users to improve the initial service setup.

This onboarding flow could include the following:

- agreeing to the service’s terms and conditions
- adding users
- adding partner schools

#### Using Register trainee teachers’ data to pre-populate partner school data

We could simplify onboarding by using Register trainee teachers’ data to determine the relationships between providers and schools. This approach would reduce the administrative burden on providers.
