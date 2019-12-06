---
title: New course wizard – Training locations
description: Choosing training locations from the new course wizard.
tags: publish-teacher-training-courses
---
For providers with multiple training locations we need to ask them which of those locations the course will be running at. Otherwise we can default to their only location.

Providers might want to add locations at this stage, if this need arises we’ll accommodate it.

## Full time and part time

UCAS models full time and part time on the training location. If a course is full time, all training locations can be marked as full time. Similarly with part time. But if ‘full time or part time’ is selected, then we don’t know which training locations offer the full time places and which offer the part time ones.

On the training locations list, if ‘full time or part time’ is chosen, then for each selected location we ask for more detail.

## Screenshots

{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "Training locations"},
    {text: "For a full or part time course"},
    {text: "Show locations in summary"}
  ]
}) }}
