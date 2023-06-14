---
title: Improving how users add schools
description: We added a way for support users to add ‘Schools’ to providers using Get information about schools (GIAS) data
date: 2023-06-09
tags:
  - locations
  - schools
related:
  items:
    - text: Improving how providers add schools
      href: /publish-teacher-training-courses/improving-how-providers-add-schools/
    - text: Adding multiple locations to an organisation
      href: /support-for-publish/adding-multiple-locations-to-an-organisation/
    - text: Adding ‘Study sites’
      href: /publish-teacher-training-courses/adding-study-sites/
    - text: Select a school pattern
      href: https://design.education.gov.uk/design-system/patterns/select-a-school
screenshots:
  items:
    - text: Adding a school
      src: schools--find.png
    - text: Adding a school - autocomplete
      src: schools--find-autocomplete.png
    - text: Adding a school - error
      src: schools--find-error.png
    - text: Editing school details
      src: schools--edit.png
    - text: Editing school details - error
      src: schools--edit-error.png
    - text: Check your answers
      src: schools--check-your-answers.png
---

We recently did some work to [improve how providers add schools](/publish-teacher-training-courses/improving-how-providers-add-schools/) in Publish teacher training courses (Publish). This work added a way for providers to find and add them using [Get information about schools (GIAS)](https://www.get-information-schools.service.gov.uk/) data.

To make it easier for the Support team to add schools, we copied the same approach to Support for Publish teacher training courses (Support).

## What we changed

We added a school look-up to the ‘Add school’ flow, which uses GIAS data, to make it easier for the Support team to find and enter information about the schools providers partner with.

## How it works

![Adding a school](adding-schools-flow.png "Adding a school flow")

Adding a school has 3 steps:

1. Find a school by name, URN or postcode
2. Review details about the school
3. Check your answers

### Find a school by name, URN or postcode

Selecting ‘Add school’ on the schools list page takes the user to a form where they can search for a school, university or college. They do this by entering the school name, unique reference number (URN) or postcode.

We use [Get information about schools (GIAS)](https://www.get-information-schools.service.gov.uk/) data and display it in an autocomplete.

We display the name, town and postcode for each location in the list. This allows users to choose from similarly named locations correctly.

We display an error message if the user submits the form before selecting an item from the autocomplete.

If the user cannot find the school in the list, they can skip the form and enter the details manually.

### Review details about the school

Selecting a location name from the autocomplete and continuing takes the user to an edit form where they can review:

- school name
- unique reference number (URN)
- address

If any required information is missing, we display an error message.

### Check your answers

The final step is to check your answers before adding the school.

Users can only add the same school once. If they try to add the location again, we display an error message when submitting the ‘Check your answers’ page.


## Data validation rules

### School name

‘School name’ is required. If the user does not enter a name, we show the error message:

> Enter a school name

If the user selects a school from the autocomplete that has already been added to the organisation, we show the error message:

> [School name] has already been added

### Unique reference number (URN)

URNs are optional. If the user enters a URN, it must be 5 or 6 digits long. If they do not enter a valid URN, we show an error message:

> Enter a valid unique reference number (URN) - it must be 5 or 6 digits long

### Address

Address line 1, town or city, and postcode are required address fields.

If the user does not enter an address line 1, we show the error message:

> Enter address line 1

If the user does not enter a town or city, we show the error message:

> Enter a town or city

If the user does not enter a postcode, we show the error message:

> Enter a postcode

If the user does not enter a valid postcode format, we show the error message:

> Enter a real postcode


*[GIAS]: Get Information about Schools
*[URN]: Unique reference number
