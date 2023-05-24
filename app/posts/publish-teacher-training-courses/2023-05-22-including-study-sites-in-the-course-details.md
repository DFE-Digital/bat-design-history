---
title: Including ‘Study sites’ in the course details
description: We updated the ‘Add course’, and the edit course flows to include ‘Study sites’
date: 2023-05-22
tags:
  - locations
  - study sites
related:
  items:
    - text: Adding ‘Study sites’
      href: /publish-teacher-training-courses/adding-study-sites
    - text: Adding a study site when JavaScript is unavailable
      href: /publish-teacher-training-courses/adding-a-study-site-when-javascript-is-unavailable/
screenshots:
  items:
    - text: Add course study sites
      src: add-course--study-sites.png
    - text: Add course study sites - error
      src: add-course--study-sites-error.png
    - text: Add course study sites
      src: add-course--check-your-answers.png
    - text: Edit course study sites
      src: edit-course--study-sites.png
    - text: Edit course study sites - error
      src: edit-course--study-sites-error.png
    - text: Edit course study sites - success
      src: edit-course--study-sites-success.png
    - text: Course details
      src: course-details--study-sites.png
    - text: Adding a study site when the provider doesn’t have any
      src: course-details--add-study-site.png
    - text: Selecting a study site when the course doesn’t have any
      src: course-details--select-study-site.png
    - text: Course details study sites not entered
      src: course-details--study-sites-not-entered.png
    - text: Course preview
      src: course-preview--study-sites.png
---

When users add a course in Publish teacher training courses (Publish), they see a question asking them to select all possible placement schools for that course.

We recently gave users the ability to [add ‘Study sites’](/publish-teacher-training-courses/adding-study-sites) in Publish teacher training courses (Publish).

Study sites work like placement schools in that the user can select all study sites available for a course. Therefore, we updated the ‘Add course’ and the edit course flows to include ‘Study sites’.

## What we changed

We have:

- updated the ‘Add course’ flow
- updated the edit course flow

## How it works

### Adding a course

We show the ‘Add course’ button if the provider has added:

- schools
- study sites
- accredited providers - if they are a ‘training partner’

If any of the information is missing, users must first add it before being able to add a course.

#### ‘Study sites’ question page

Selecting ‘Add course’ takes the user to the normal add course flow.

We have added a ‘Study sites’ question after the ‘School placements’ question.

If the provider only has one study site, the question is skipped, and we automatically select the study site.

We show the ‘Study sites’ question if the provider has multiple study sites. The user must answer the question before continuing.

We display an error message if the user does not select a study site:

> Select at least one study site

#### Check your answers page

At the end of the ‘Add course’ flow, we show the selected study sites on the check your answers page.

If the provider has only one study site, the study site line does not include a change link.

### Editing course ‘Study sites’

If the provider has more than one study site, they can change them.

Selecting ‘Change’ next to the study site details takes the user to the edit study sites form, where they can choose from a list of study sites.

We display an error message if the user does not select a study site:

> Select at least one study site

### Course details

We list study sites on the course details page, ordered alphabetically. We include a change link if the:

- provider has added more than one study site to their organisation
- course status is in ‘draft’, ‘rolled over’, ‘open’ or ‘closed’ states

#### Existing courses

Since ‘Study sites’ is a new attribute for a course, they will be missing for pre-existing courses.

If the course does not have a study site, we show a message and link to:

> Select a study site

If the provider does not have any study sites for their organisation, we show a message and link to:

> Add a study site

After adding a study site to the organisation, the user must return to the course and select a study site.

#### Withdrawn courses

The user cannot edit the course details if the course is in the ‘withdrawn’ state. In this situation, if no study site has been previously added to the course, we show the message:

> Not entered

### Course preview

We have renamed the ‘School placements’ section in the course preview to ‘Training locations’.

The section includes:

- information from Get Into Teaching (GIT)
- details information from the provider
- a list of study sites
- a list of school placements

We only show study sites in the course preview if they have been added.

## Further considerations

We considered some changes that we did not implement. These included:

- selecting other types of ‘Study site’
- including accredited provider study sites in the list of options

### Selecting other types of ‘Study site’

Some providers offer online training as part of a trainee's theoretical studies. We have not included this in the current iteration as we need to:

- understand the different online or remote training offered by providers
- explore what information candidates need

### Including accredited provider study sites in the list of options

The study sites for training providers will often include the accredited provider location.

We could improve how training providers select study sites if we show the study sites of their accredited providers in the list of options.

Until we know how providers will use the study site section, we will not show study sites from accredited providers in a training provider’s account.
