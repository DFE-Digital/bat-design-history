---
title: Success messaging
description: Messages we show after a successful save or publish
date: 2018-08-07
tags:
  - PN001
  - PN002
  - messaging
  - success messages
screenshots:
  items:
    - Course saved
    - Course published
---

Designs for success messages shown after a successful save or publish.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

Use links in messages to nudge users towards checking what they’ve just done. After saving, link to a preview to check. After publishing link to the live website to check that the course was published as expected.
