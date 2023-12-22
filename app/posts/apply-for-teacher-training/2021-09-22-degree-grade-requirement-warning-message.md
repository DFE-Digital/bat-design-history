---
title: Degree grade requirement warning message
description: Warning candidates when they do not meet the degree grade requirement.
date: 2021-09-22
tags:
  - qualifications
related:
  items:
    - text: Standardising entry requirement content
      href: /find-teacher-training/standardised-entry-requirement-descriptions/
      description: Post about adding standard text for entry requirements on Find.
    - text: Degree requirements filter
      href: /find-teacher-training/degree-requirement-filter/
      description: Post about adding a degree requirements filter to Find.
    - text: Degree entry requirements
      href: /publish-teacher-training-courses/degree-entry-requirements/
      description: Post about collecting degree entry requirements on Publish.
---

{% from "../../../node_modules/govuk-frontend/dist/govuk/components/table/macro.njk" import govukTable with context %}

One of the reasons why providers reject candidates is because they do not have the right degree grade (for example 2:1 or above).

Each course has a different minimum degree requirement. While some courses accept any honours degree, most ask for a minimum grade.

This is particularly challenging for candidates with a third-class degree.

We realised that we could help candidates by:

* showing the minimum degree requirement for each course (on Find)
* warning them if they’ve chosen a course that may not accept their degree grade

## Showing minimum degree requirements on Find

We added a line to the course summary in the Find search results.

![Course summary on Find with a line about the minimum degree requirement.](course-summary-find.png)

## Warning candidates if they do not meet the degree requirement

We added a row on the course summary card for the minimum degree requirement for that course.

If a candidate’s degree grade does not meet the minimum requirement for a course, they’ll see a warning message in the Course choices section of their application.

The warning message explains that they do not have the right degree grade, but that they could contact the provider to ask if they'll still consider their application.

![Warning message candidate sees if they have a third-class degree and choose a course that requires a 2:1 or above.](degree-requirement-warning-message.png)

### Candidates with a non-UK degree

If a candidate has a non-UK degree, they do not see a warning message. Instead they just see the minimum degree requirement for that course.

### When candidates will see the warning message

Candidates usually choose their courses before they add their qualifications. This is because the Course choices section comes before Qualifications in the application.

As a result, candidates may not see the warning message until they review their application.

We're currently exploring how to warn them sooner.
