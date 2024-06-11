---
title: Success messaging
description: Messages we show after a successful save or publish
date: 2018-08-07
tags:
  - messaging
  - success messages
screenshots:
  items:
    - Course saved
    - Course published
---

Designs for success messages shown after a successful save or publish.

## User needs

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a user editing content
  I need to see how it will look when published
  So that I can check my content works before I publish"
}) }}

{{ appUserNeed({
  description: "As a user publishing content
  I need to see that the content has successfully published on the live website
  So that I know applicants can see it"
}) }}

## What we did

Use links in messages to nudge users towards checking what they’ve just done. After saving, link to a preview to check. After publishing link to the live website to check that the course was published as expected.
