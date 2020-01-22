---
title: Experimental new course wizard
description: Breaking down data required for each course into a page-per-thing wizard.
date: 2018-05-10
---
First attempts at a ‘one thing per page’ approach to creating a course.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Title" },
    { text: "Qualifications" },
    { text: "Start date" },
    { text: "Duration" },
    { text: "Applications open" },
    { text: "Application codes" }
  ]
}) }}
