---
title: Tabs on locations
description: Show courses at each location and location history.
tags: publish-teacher-training-courses
---
As part of work looking into how a location might be deleted or removed, it became clear that it was difficult to see which courses a location was assigned to.

This design adds tabs, [like on courses](/publish-teacher-training-courses/course-tabs), for editing, courses using the location and the location’s history. It also adds a courses count to the main locations table, which deep link to the courses tab.

## Screenshots

{% from "gallery/macro.njk" import appGallery with context %}
{{ appGallery({
  items: [
    {text: "Courses at each location"},
    {text: "Edit location"},
    {text: "Courses using this location"},
    {text: "Location history"}
  ]
}) }}
