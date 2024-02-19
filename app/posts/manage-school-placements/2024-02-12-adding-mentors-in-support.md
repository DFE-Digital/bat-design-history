---
title: Adding mentors in Support
description: We added a way for Support users to add mentors to a school
date: 2024-02-12
tags:
  - mentors
related:
  items:
    - text: Adding mentors in Manage school placements
      href: /manage-school-placements/adding-mentors/
    - text: Adding mentors in Support for claim funding for mentors
      href: /claim-funding-for-mentors/adding-mentors-in-support/
screenshots:
  items:
    - text: Mentors list
      src: mentors--list.png
    - text: Mentors list - empty
      src: mentors--list-empty.png
    - text: Add mentor - finding a teacher using DQT/Teacher Record
      src: mentors--add-mentor.png
    - text: Add mentor - error message - enter a TRN
      src: mentors--add-mentor-error-message-no-trn.png
    - text: Add mentor - error message - enter a valid TRN
      src: mentors--add-mentor-error-message-invalid-trn.png
    - text: Add mentor - error message - mentor already added
      src: mentors--add-mentor-error-message-duplicate.png
    - text: Add mentor - no results found
      src: mentors--add-mentor-no-results-found.png
    - text: Add mentor - check your answers
      src: mentors--add-mentor-check-your-answers.png
    - text: Mentor added success message
      src: mentors--add-mentor-success.png
    - text: Mentor details
      src: mentors--mentor-details.png
    - text: Remove mentor
      src: mentors--remove-mentor.png
    - text: Mentor removed success message
      src: mentors--remove-mentor-success.png
eleventyComputed:
  eleventyNavigation:
    key: school-placements-support-adding-organisation-mentors
---

We added a way for Support users to manage mentors belonging to a school.

## How it works

### Mentor list

On the mentor list page, we show:

- an ‘Add mentor’ button
- a list of mentors in alphabetical order - ordered by their first name, then last name

For each mentor in the list, we show:

- full name - including a link to the mentor details page
- teacher reference number (TRN)

We paginate the list if the mentor list contains more than 25 mentors.

We show a success message above the page heading when a mentor is added or removed.

### Mentor details

On the mentor details page, we show a summary list of the mentor’s details, including:

- first name
- last name
- teacher reference number (TRN)

This page also includes a ‘Remove mentor’ link, which allows mentors to remove the mentor.

Users cannot change the mentor's first name, last name and TRN.

### Adding a mentor

![Add mentor flow](add-mentor--flow.png)

Selecting ‘Add mentor’ starts the add mentor flow.

The ‘Add mentor’ flow has two steps:

1. Find a teacher by TRN
2. Check your answers

#### Find a teacher by TRN

The first step in the ‘Add mentor’ flow is to enter the mentor’s teacher reference number (TRN).

Users can find a lost TRN or apply for a TRN by reading the [Teacher reference number (TRN) guidance](https://www.gov.uk/guidance/teacher-reference-number-trn).

##### Validation rules

If the user does not enter anything, we show an error message:

> Enter a teacher reference number (TRN)

If the user does not enter a valid TRN, we show an error message:

> Enter a valid teacher reference number (TRN)

A valid TRN is seven digits.

#### No results found

If the user enters a valid TRN but it does not return a result, we show a page with the heading:

> No results found for ‘{trn}’

Users can change their search. We pre-populate the previously entered TRN for them to change.

#### Check your answers

The final step is to check your answers.

We use [Get information about schools (GIAS)](https://get-information-schools.service.gov.uk/) data and display it in a summary list.

We show:

- first name
- last name
- teacher reference number (TRN)

When a user adds a mentor to Placements, and they or another user adds the same mentor to Claim funding for mentors (Claims), we match the records so that there is only one instance of a mentor in our provider. This allows us to share information between services more accurately.

### Removing a mentor

Users must confirm the mentor’s removal when they select' Remove mentor'.

When users remove a mentor from the organisation, we retain their data. We must keep a historical record of mentors allocated to placements and trainees.

*[DQT]: Database of Qualified Teachers
*[TRN]: Teacher Reference Number
*[GIAS]: Get Information about Schools
