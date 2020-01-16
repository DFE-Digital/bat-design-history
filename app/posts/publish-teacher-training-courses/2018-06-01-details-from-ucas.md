---
title: Show details from UCAS
description: Indicate the raw information we’ve received from UCAS, begin to explain where this must be edited and how we are handling that information.
tags:
---

Indicate the raw information we’ve received from UCAS, begin to explain where this must be edited and how we are handling that information.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Course with UCAS details section",
      img: { src: "course.png" }
    },
    {
      text: "Details from UCAS",
      img: { src: "details-from-ucas.png" },
      caption: 'Present each UCAS course with fields and names as close as possible to UCAS, for familiarity and consistency.'
    }
  ]
}) }}
