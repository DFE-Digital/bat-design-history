---
title: Course with parts
description: Experimental designs looking at breaking course fields onto different pages, based on a theme.
---
Experimental designs looking at breaking course fields onto different pages, based on a theme.

Try listing courses like search.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Courses" },
    { text: "Course" },
    { text: "Course subject and description" },
    { text: "About this course" },
    { text: "Requirements and qualifications" },
    { text: "School placements" },
    { text: "Application codes" }
  ]
}) }}
