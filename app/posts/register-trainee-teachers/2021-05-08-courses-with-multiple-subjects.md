---
title: Courses with multiple subjects
description: Adding support for a second and third subject on a course
date: 2021-05-08
---
{% from "screenshots/macro.njk" import appScreenshots with context %}
{% from "figure/macro.njk" import appFigure with context %}

When providers add trainees to the DTTP, they can record up to 3 course subjects. These indicate which subjects the trainee was trained to teach in. Register previously only had a single subject field, so we’ve added the ability to add a second and third subject.


{{ appFigure({
  title: "Previous subject field",
  image: {
    file: "subject-existing.png",
    alt: "Our previous subject field."
  }
}) }}

{{ appFigure({
  title: "Revised subject fields",
  image: {
    file: "subject-multiple.png",
    alt: "Our revised subject input - a details component reveals an autocomplete for second and third subject"
  }
}) }}

## Implementation details

The first subject is the most important one. Providers use it to help determine bursary eligibility and course allocations. The others are optional and give more detail about what the trainee’s course covered.

The second and third subjects are collapsed by default because the majority of trainees only have a single subject.

The DfE Publish service supports courses with up to two subjects. When we import trainees who are on a Publish course we’ll now be able to populate both subjects.
