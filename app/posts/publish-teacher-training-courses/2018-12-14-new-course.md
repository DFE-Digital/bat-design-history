---
title: New course wizard
description: Create a new course in Publish rather than UCAS.
date: 2018-12-14
---

As part of the [UCAS Transition work](https://docs.google.com/document/d/1H8ecdKnrJ2nJbc87Lgx5t-gx2_jnt0NLYLKf1Y_G9zg/edit#) ([Trello story map](https://trello.com/b/O0RjGYkw/ucas-transition-story-map)) we need to bring course creation into Publish. We [looked at this briefly in May](/publish-teacher-training-courses/new-course-wizard) before we knew we’d have UCAS data.

This is a best guess first pass at the process which we expect users to question substantially. It recreates the fields UCAS asks for using the ‘[page-per-thing](https://design-system.service.gov.uk/patterns/question-pages/)’ pattern and ending with a ‘[check your answers](https://design-system.service.gov.uk/patterns/check-answers/)’ page.

The current UCAS process puts all fields on one page, asks users for a course title and uses string matching and manual checks to assign subjects. This wizard flips that around, asking for details about a course to generate a standardised and comparable title.

## Proposed logic for generating titles

These titles are largely inline with existing course titles.

For most courses the title will be the subject:

* Mathematics
* Primary with mathematics
* Biology

For modern languages the languages are appended to the title:

* Modern languages (French and German)
* Modern languages (French, German, Spanish)
* Modern languages (French)

If the course is marked as a special educational needs one, it’s appended to the title:

* Mathematics (Special educational needs)
* Primary with mathematics (Special educational needs)
* Biology (Special educational needs)

## Missing from this design

* Training location assignment
* Course start month
* Applications open date
* Apply eligibility settings

## User research

[We tested the next iteration](/publish-teacher-training-courses/new-course-2#user-research)

## New course workflow

![New course workflow](/images/publish-teacher-training-courses/new-course/workflow.png)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Type of course" },
    { text: "Pick a subject" },
    { text: "Pick languages" },
    { text: "Pick outcome" },
    { text: "Full time or part time" },
    { text: "Accredited provider" },
    { text: "Confirm" },
    { text: "Customise title" }
  ]
}) }}
