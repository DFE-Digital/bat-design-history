---
title: Problems with a course
description: Exploration into highlighting problems with a course before publishing.
tags: publish-teacher-training-courses
---
Exploration into highlighting problems with a course before publishing.

We need to increase the quality of all courses on Find. For new courses providers will use the wizard and complete all required information. For existing courses we need a way of highlighting what’s wrong or what’s missing.

For the worst issues we could add validations when users try to publish the course. This would force users to fix their courses, but when a user is publishing they expect most of the work to be done – to find that they need to edit many courses at this late stage will be frustrating.

The alternative here is to flag those same validations earlier – somewhere on the course page.

Specifically we want to:

* fix the worst course titles
* confirm that imported outcomes are correct
* enter an age range for all their courses
* remind providers to publish their About your organisation section
* avoid duplicate About this course sections

## Screenshots

{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "We’ve found problems with this course"},
    {text: "Problems with this course"}
  ]
}) }}
