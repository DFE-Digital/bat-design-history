---
title: Adding date of birth to the ‘Add mentor’ flow
description: We updated the ‘Add mentor’ flow to include the date of birth when searching for a teacher to improve information security
date: 2024-04-29
tags:
  - mentors
related:
  items:
    - text: Adding mentors
      href: /claim-funding-for-mentors/adding-mentors/
screenshots:
  items:
    - text: Find teacher by TRN and date of birth
      src: mentors--add-mentor-find-teacher.png
    - text: Find teacher by TRN and date of birth - with errors
      src: mentors--add-mentor-find-teacher-errors.png
    - text: Check your answers
      src: mentors--add-mentor-check-your-answers.png
    - text: No results found
      src: mentors--add-mentor-no-results-found.png
    - text: Support - Find teacher by TRN and date of birth
      src: mentors--support-add-mentor-find-teacher.png
    - text: Support - Find teacher by TRN and date of birth - with errors
      src: mentors--support-add-mentor-find-teacher-errors.png
    - text: Support - Check your answers
      src: mentors--support-add-mentor-check-your-answers.png
    - text: Support - No results found
      src: mentors--support-add-mentor-no-results-found.png
eleventyComputed:
  eleventyNavigation:
    key: school-placements-adding-mentors-date-of-birth
    title: Adding date of birth to the ‘Add mentor’ flow
---

Previously, when users wanted to add a mentor to the service, they simply needed to enter a teacher reference number (TRN) to find the teacher in the database of qualified teachers (DQT). This look-up then returned the teacher’s first and last name.

We updated the ‘Add mentor’ flow for school and support users to include the date of birth when searching for a teacher to improve information security. The new approach, using two pieces of information to perform the look-up, was approved by the Office of the Data Protection Officer (ODPO) and the Teaching Regulation Agency (TRA), which are responsible for the DQT.

## What we changed

We have:

- added date of birth to the ‘Find teacher’ page
- updated hint and help text for the teacher reference number (TRN)
- added a message to the check your answers page asking users to inform mentors they’ve added them

## How it works

![Add mentor flow](add-mentor--flow.png "Add mentor flow - including date of birth")

The add mentor flow remains unchanged. It has two steps:

1. Find a teacher by TRN and date of birth
2. Check your answers

### Find a teacher by TRN and date of birth

The first step in the ‘Add mentor’ flow is to enter the mentor’s teacher reference number (TRN) and date of birth.

Users can find a lost TRN or apply for a TRN by reading the [Teacher reference number (TRN) guidance](https://www.gov.uk/guidance/teacher-reference-number-trn).

#### Validation rules

If users do not enter a valid TRN, we show an error message:

> Enter a valid teacher reference number (TRN)

A valid TRN is seven digits.

If users do not enter a date of birth, we show an error message:

> Enter a date of birth

If users enter an incomplete or incorrect date, we follow the [GOV.UK design system guidance on validating dates](https://design-system.service.gov.uk/components/date-input/#error-messages).

### No results found

If the user enters a valid TRN and date of birth but it does not return a result, we show a page with the heading:

> No results found for ‘{trn}’

We also include a description:

> Check that you typed in the teacher reference number (TRN) and date of birth correctly.

Users can change their search. We pre-populate the previously entered TRN and date of birth so they can change.

### Check your answers

The final step is to check your answers.

We show:

- first name
- last name
- teacher reference number (TRN)
- date of birth

We do not store the teacher’s date of birth. We only use it to access the teacher’s details.

<!-- We also include a message highlighting users must notify their mentors that they have added them to the service:

> I confirm that {mentor name} has been informed that the Department for Education will store their information in line with the [privacy notice (opens in new tab)](https://www.gov.uk/government/publications/privacy-information-education-providers-workforce-including-teachers/privacy-information-education-providers-workforce-including-teachers#using-your-data-to-maintain-a-list-of-teachers). They have been provided with a copy of this notice for reference. -->
