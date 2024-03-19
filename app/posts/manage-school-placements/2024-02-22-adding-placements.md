---
title: Adding placements
description: We added a way for schools to add placements to the service
date: 2024-02-22
tags:
  - placements
related:
  items:
    - text: The anatomy of a school placement
      href: /manage-school-placements/the-anatomy-of-a-school-placement/
screenshots:
  items:
    - text: Placements list
      src: placements--list.png
    - text: Placements list - empty
      src: placements--list-empty.png
    - text: Placements list - no mentors
      src: placements--list-no-mentors.png
    - text: Add placement - select subject level
      src: add-placement--subject-level.png
    - text: Add placement - select subject level error
      src: add-placement--subject-level-error.png
    - text: Add placement - select primary subject
      src: add-placement--subject-primary.png
    - text: Add placement - select primary subject error
      src: add-placement--subject-primary-error.png
    - text: Add placement - select secondary subject
      src: add-placement--subject-secondary.png
    - text: Add placement - select select subject error
      src: add-placement--subject-secondary-error.png
    - text: Add placement - select mentor
      src: add-placement--mentor.png
    - text: Add placement - select mentor error
      src: add-placement--mentor-error.png
    - text: Add placement - select mentor or ‘Not known yet’ error
      src: add-placement--mentor-not-known-error.png
    - text: Add placement - select window
      src: add-placement--window.png
    - text: Add placement - select window error
      src: add-placement--window-error.png
    - text: Add placement - check your answers
      src: add-placement--check-your-answers.png
    - text: Add placement - success
      src: add-placement--success.png
    - text: Placement details
      src: placements--details.png
    - text: Remove placement
      src: placements--remove-placement.png
    - text: Placement removed success message
      src: placements--remove-placement-success.png
---

We added a way for schools to add their placements to Manage school placements (Placements).

We collect a list of the details of a school’s placements that are essential to creating school placements.

## How it works

### Placement list

On the placements list page, we show:

- an ‘Add placement’ button
- a list of placements in alphabetical order - ordered by subject

For each placement in the list, we show:

- subject(s) - including a link to the placement details page
- mentor name
- window
- status

We paginate the list if the placements list contains more than 25 placements.

When users add or remove placements, we show a success message above the page heading.

### Placement details

On the placement details page, we show a summary list of the placement details, including:

- subject level
- subject
- mentor
- window

This page also includes a ‘Remove placement’ link, which allows users to delete the placement.

Users cannot change the subject level.

### Adding a placement

Selecting ‘Add placement’ starts the add placement flow.

[![Add placement flow](add-placement--flow.png 'Add placement flow')](add-placement--flow.png)

The ‘Add placement’ flow has five steps:

1. Subject level - if the school’s education phase is not primary or secondary
2. Subject
3. Mentor
4. Window
5. Check your answers

#### Subject level

The first step in the ‘Add placement’ flow is to select the subject level.

This question is not asked if the school’s education phase is primary or secondary. In this case, we default the answer to the school’s education phase and move the user straight to the appropriate list of subjects.

##### Validation rules

If a user does not select a subject level, we show an error message:

> Select a subject level

#### Subject

We show different subject options if the user has previously chosen the ‘Primary’ or ‘Secondary’ subject levels or if we have defaulted the subject level based on the school’s education phase.

If the subject level is ‘Primary’, we show:

- Primary
- Primary with English
- Primary with geography and history
- Primary with mathematics
- Primary with modern languages
- Primary with physical education
- Primary with science

If the subject level is ‘Secondary’, we show:

- Ancient Greek
- Ancient Hebrew
- Art and design
- Biology
- Business studies
- Chemistry
- Citizenship
- Classics
- Communication and media studies
- Computing
- Dance
- Design and technology
- Drama
- Economics
- English
- English as a second or other language
- French
- Geography
- German
- Health and social care
- History
- Italian
- Japanese
- Latin
- Mandarin
- Mathematics
- Music
- Philosophy
- Physical education
- Physics
- Psychology
- Religious education
- Russian
- Science
- Social sciences
- Spanish

We use the list of subjects from Publish teacher training courses (Publish).

##### Validation rules

If a user does not select a subject, we show an error message:

> Select a subject

#### Mentor

The next step is to add mentors to the placement.

Users can select one or more mentors for a placement or select ‘Not known yet’ if they do not know.

We display mentors in a list of checkboxes. For each mentor in the list we show their full name.

The ‘Not known yet’ option is exclusive, which means if the user has selected a mentor and then selects this option, the mentor selection is cleared.

##### Validation rules

If the user does not select an option, we show an error message:

> Select a mentor

If JavaScript is unavailable – for example, it has been blocked – and the user selects both a mentor and ‘Not known yet’, we show an error message:

> Select a mentor or ‘Not known yet’

#### Window

The next step is to select the placement window.

We show 3 options for the placement window, which correspond to terms in the academic year:

- Autumn term
- Spring term
- Summer term

##### Validation rules

If the user does not select an option, we show an error message:

> Select a window

#### Check your answers

The final step is the ‘Check your answers’ page. The user can change:

- subject level
- subject
- mentor
- window

Users cannot change the subject level if the school’s education phase is primary or secondary.

If users change the subject level, they must also change the subject before returning to the ‘Check your answers’ page.

If a user returns to a previous answer using the change link, their entered information is pre-populated.

When the ‘Publish placement’ button is selected, the placement is saved and published.
