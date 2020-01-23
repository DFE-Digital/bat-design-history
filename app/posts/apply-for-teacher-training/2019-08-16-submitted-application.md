---
title: Submitted application
description: Applications page and read only view.
date: 2019-08-16
---
Once a user has submitted at least one application, when they return to Apply the first thing they should see is their application status.

Candidates may also need to start a new application, or see what they originally submitted.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Applications" },
    { text: "Submitted application" }
  ]
}) }}
