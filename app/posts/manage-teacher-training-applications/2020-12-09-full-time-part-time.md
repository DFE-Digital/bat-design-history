---
title: Filter applications by full time or part time (study mode)
description: Let users filter the application list by full time or part time courses
date: 2020-12-09
---

This post documents the introduction of the full time or part time filter alongside existing filters on the applications list.

## How it works

When a user selects ‘full time’ or ‘part time’ in the filter side bar, they will be presented with corresponding courses in the list.

The course title includes ‘full time’ or ‘part time’ to indicate to the user the nature of the course.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Index page"
    },
    {
      text: "Index page filtered – full time"
    },
    {
      text: "Index page filtered – part time"
    }
  ]
}) }}
