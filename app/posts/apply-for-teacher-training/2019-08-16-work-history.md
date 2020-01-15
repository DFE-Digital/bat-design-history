---
title: Work history (August iteration)
description: Move guidance into a question.
---
Following on from [the original design](/apply-june-2019/work-history), rather than using multiple details elements and two submit button we’ve shaped the guidance as a question and used routing based on their answer to send users to the right place.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {text: "Work history"},
    {text: "Job"},
    {text: "Out of the workplace"},
    {text: "Review work history"}
  ]
}) }}
