---
title: How will candidates apply for this course?
description: Making allowances for providers with bespoke application processes
date: 2020-05-27
related:
  items:
    - text: Trello card
      href: https://trello.com/c/ksa6MOhH/3424-where-do-candidates-apply-for-a-course
tags:
  - PN009
---

Two organisations have recently indicated their preference for candidates to apply in a specific way other than through UCAS.

1. Bolton University would only like to be on Apply teacher training, and not on UCAS.
2. University of Central Lancashire has indicated on their [course page](https://www.find-postgraduate-teacher-training.service.gov.uk/course/C30/AC21) that “Applications should be made DIRECTLY TO THE COLLEGE OF YOUR CHOICE and NOT THROUGH UCAS.”

## User need

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs('PN009')}) }}

## Notes on a proposed process

Our preference is for candidates to apply for courses on UCAS and ultimately solely on Apply for teacher training. We do not want to encourage providers to introduce bespoke application processes.

At this stage we will not be introducing features to Publish that let providers determine how candidates can apply for courses.

![Flowchart diagram](flowchart.png)

If a provider requires an alternative application process, details will be provided to candidates on the [Apply for this course](https://www.apply-for-teacher-training.education.gov.uk/candidate/apply?providerCode=C30&courseCode=AC21) page. The Find API will need to be able to exclude the course from UCAS.

## Technical requirements

When support deals with a request from a provider to be omitted from UCAS we must:

- set some kind of internal flag so that the course is not sent to UCAS via v1 of the API
- collect and store bespoke text from the provider on how to apply (probably hardcoded while cases are very small), which must include an onward link
- show this text on the page that shows after clicking the “Apply for this course” button

*[UCAS]: Universities and colleges admissions service
