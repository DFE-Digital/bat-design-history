---
title: Success messaging
description: Messages we show after a successful save or publish.
date: 2018-08-07
---
Designs for success messages shown after a successful save or publish.

## User needs

Preview: As a user editing content I need to see how it will look when published so that I can check my content works before I publish.

Publish: As a user publishing content I need to see that the content has successfully published on the live website so that I know applicants can see it.

Use links in messages to nudge users towards checking what they’ve just done. After saving, link to a preview to check. After publishing link to the live website to check that the course was published as expected.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Course saved",
    img: { src: "course-saved.png" }
  }, {
    text: "Course published",
    img: { src: "course-published.png" }
  }]
}) }}
