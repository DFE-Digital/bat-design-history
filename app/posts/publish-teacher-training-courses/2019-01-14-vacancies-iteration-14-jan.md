---
title: Vacancies – 14 January iteration
description: Updates to button styles, messaging and validation.
---
An iteration on [an earlier design](/publish-teacher-training-courses/vacancies).

In this design we:

* highlight a destructive action with a red button (eg closing a course)
* add validation to closing or opening a course – some users left the page using the button
* made it explicit that a course was closed because there were no vacancies
* use ‘Close applications’ and ‘Re-open applications’ button text for clarity
* move the Find and Apply messaging above the button to prevent it being missed

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {text: "Close course (one training location)"},
    {text: "Open course (one training location)"},
    {text: "Close course validation"},
    {text: "Open course validation"},
    {text: "Edit vacancies (multiple locations)"},
    {text: "Edit vacancies (one location, full time or part time)"},
    {text: "Edit vacancies (multiple locations, full time or part time)"},
    {text: "Organisation"}
  ]
}) }}
