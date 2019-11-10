---
title: Highlighting the multiple organisations feature
description: Call out how to get access to more organisations.
tags: publish-teacher-training-courses
---
Providers can already [manage multiple organisations from a single account](/publish-teacher-training-courses/multiple-organisations). But only providers who have this set up will know about this feature. There are users who don’t know they can do this who are using multiple logins to manage organisations.

We discovered this while researching with accredited bodies: [Research video](https://lookback.io/watch/xG4kWc75pZTTj5pgb?t=3m37.92s)

## Suggested changes

* All users see the organisations page, rather than just multiple organisation users
* At the bottom of the list we call out how to get access to more organisations

This should also simplify the logic for the current systems.

{% from "figure/macro.njk" import appFigure %}
{{ appFigure({
  image: {
    path: page.filePathStem | replace("/posts", "/images"),
    file: "organisations.png"
  },
  caption: "Organisations page"
}) }}
