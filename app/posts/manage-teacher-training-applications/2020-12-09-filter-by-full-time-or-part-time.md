---
title: Filter applications by full time or part time (study mode)
description: Let users filter the application list by full time or part time courses
date: 2020-12-09
---

We introduced a 'study mode' filter to allow users to filter full time or part time courses in the applications list.

We labelled the new filter 'Full time or part time' to avoid jargon.

We added the study mode to the course title in the application card to indicate to the user the mode of the course.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Index page"
    },
    {
      text: "Index page – filtered full time"
    },
    {
      text: "Index page – filtered part time"
    }
  ]
}) }}
