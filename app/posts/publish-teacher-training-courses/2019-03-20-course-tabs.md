---
title: Tabs on course pages
description: Splitting course details and enrichments.
date: 2019-03-20
---
An iteration on [the previous design](#old-course-design) where course details and enrichments were shown together.

When updating course details, if the course has been published, the changes will be immediate. Showing this information alongside content that needs to be re-published if it changes creates a conflict.

By splitting the page into tabs we:

* replace the often missed ‘Edit course information’ link with many change links
* more clearly indicate what can and can’t be changed after publishing
* create a space to try and explain this
* separate fields that need publishing and those that publish immediately
* reduce the length of the page

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "An unpublished course" },
    { text: "An unpublished course – Edit course details" },
    { text: "After editing – check your answers (not yet published)" },
    { text: "A published course" },
    { text: "A published course – Edit course details" },
    { text: "After editing – check your answers (published)" }
  ]
}) }}

## Old course design

{% from "figure/macro.njk" import appFigure with context %}
{{ appFigure({
  image: {
    path: "/images/publish-teacher-training-courses/deleting-and-withdrawing",
    file: "course-that-can-be-deleted.png"
  },
  caption: "Delete link has been added to the bottom of the status column."
}) }}
