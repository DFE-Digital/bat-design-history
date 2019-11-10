---
title: Minimum course requirements – iterations
description: A view of how the minimum requirements design has been iterated since December.
tags: publish-teacher-training-courses
---
Progression of the minimum requirements page design:

* Started with a subject choice and a sensible default
* Added the ability to change the choice
* Remove subject choice, instead defaulting to legal minimums. Page only asks for preference
* Make it clearer that this affects UCAS Apply
* Simplify preference choice using a table
* Remove table and switch to two questions
* Split questions over two pages

## Screenshots

{% from "figure/macro.njk" import appFigure %}
{{ appFigure({
  image: {
    path: "/images/publish-teacher-training-courses/new-course-wizard-iteration",
    file: "candidates-with-pending-gcses.png"
  },
  caption: "Question 1: Candidates with pending GCSEs"
}) }}

{{ appFigure({
  image: {
    path: "/images/publish-teacher-training-courses/new-course-wizard-iteration",
    file: "tests-for-candidates-without-gcse-requirements.png"
  },
  caption: "Question 2: Tests for candidates without GCSE requirements"
}) }}

{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "Two questions"},
    {text: "Options in a table"},
    {text: "Explicitly reference UCAS"},
    {text: "Pick an option, remove subject choice"}
  ]
}) }}

{{ appFigure({
  image: {
    path: "/images/publish-teacher-training-courses/new-course-iteration",
    file: "minimum-gcse-requirements.png"
  },
  caption: "Introduce options"
}) }}

{{ appFigure({
  image: {
    path: "/images/publish-teacher-training-courses/minimum-requirements",
    file: "minimum-course-requirements.png"
  },
  caption: "Original design"
}) }}
