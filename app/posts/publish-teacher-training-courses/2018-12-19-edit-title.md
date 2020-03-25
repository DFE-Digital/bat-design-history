---
title: New course wizard – Confirming course title
description: Moving the course title fields into the wizard.
date: 2018-12-19
---

An iteration on [the initial design](/publish-teacher-training-courses/new-course-2#customise-title) which:

* tries out moving the title change to the end of the wizard
* adds guidance on titles that are/aren’t allowed

## User research

We tested this with the last user in our ‘New course wizard’ round of research.

[University of East London](https://lookback.io/watch/8X5QYCPob8XmSAtbw)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Course title is ok" },
    { text: "Course title needs changes" }
  ]
}) }}
