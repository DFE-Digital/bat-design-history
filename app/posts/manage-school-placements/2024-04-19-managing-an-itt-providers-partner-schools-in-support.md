---
title: Managing an ITT provider’s partner schools in Support
description: We added a way for support users to manage partner schools on behalf of ITT providers
date: 2024-04-19
tags:
  - partner schools
related:
  items:
    - text: Managing partner schools if you’re an ITT provider
      href: /manage-school-placements/managing-partner-schools-if-youre-an-itt-provider/
    - text: Managing partner providers if you’re a school
      href: /manage-school-placements/managing-partner-providers-if-youre-a-school/
    - text: Managing a school’s partner providers in Support
      href: /manage-school-placements/managing-a-schools-partner-providers-in-support/
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

We added a way for Support users to manage partner schools on behalf of initial teacher training (ITT) providers.

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

The partner school details page contains five sections:

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

- establishment group
- establishment type
- education phase
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

- establishment group
- establishment type
- education phase
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

- uploading schools in bulk
- importing schools from Register trainee teachers

### Uploading schools in bulk

Some providers find entering large numbers of schools in the service challenging.

To support our providers, we could introduce a way for support users to quickly and easily upload partner school information in bulk using a CSV.

We added a similar function to Publish teacher training courses to [add multiple locations to an organisation](/support-for-publish/adding-multiple-locations-to-an-organisation/).

### Importing schools from Register trainee teachers

Providers already send placement school information to the Register trainee teachers service. If the provider is a higher education institution (HEI), they send this information via the Higher Education Statistics Agency (HESA). If the provider is a SCITT, they input the information directly into the service.

We could use this information to prepopulate the partner schools list and ask providers to confirm they are still working with each school.

*[CSV]: comma-separated values
*[HESA]: Higher Education Statistics Agency
