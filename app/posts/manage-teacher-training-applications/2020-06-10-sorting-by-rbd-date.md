---
title: Sorting by reject by default date
description: Notify users when certain things happen and let users configure what notifications they receive
date: 2020-06-03
tags:
- MN014
---

{% from "figure/macro.njk" import appFigure with context %}

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Notification bubble",
    img: {
      src: "notification-bubble.png"
    }
  }]
}) }}
