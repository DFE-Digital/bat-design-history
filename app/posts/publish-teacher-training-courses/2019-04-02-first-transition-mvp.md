---
title: An MVP for the first cohort transition from UCAS
description: A projected cut of the service and how it will look around the time we transition the first and second cohorts from UCAS.
tags: publish-teacher-training-courses
---
A projected cut of the service and how it will look around the time we transition the first and second cohorts from UCAS.

## What’s been descoped?

In this MVP version we’ve descoped:

* adding courses (use a Google form instead)
* editing courses (request through support)
* adding training locations (use a Google form instead)
* editing training locations (request through support)
* UCAS Apply settings
* withdrawing and deleting (request through support)
* migrating publish statuses and dropping the UCAS status column

The course tabs shown below are also illustrative and may not be ready.

## Screenshots

{% from "gallery/macro.njk" import appGallery with context %}
{{ appGallery({
  items: [
    {text: "Transition screen"},
    {text: "Organisation page with locations"},
    {text: "Locations – read only with Google form for adding"},
    {text: "Courses with UCAS status column for now"},
    {text: "Course – description tab"},
    {text: "Course – basic detail tab"},
    {text: "Withdrawing a course via support"},
    {text: "Deleting a course via support"},
    {text: "Edit vacancies for a course with one location"}
  ]
}) }}
