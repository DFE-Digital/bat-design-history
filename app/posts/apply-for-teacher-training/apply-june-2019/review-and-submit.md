---
title: Review and submit
description: See what you’ve entered, interview preferences and submission.
---

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Review application" },
    { text: "Interview preferences" },
    { text: "Anything else and submission" },
    { text: "Application submitted" }
  ]
}) }}
