---
title: Preparing for more features
description: Updating the organisation and courses pages to accommodate new features being added as part of UCAS transition.
date: 2019-01-30
---

A redesign of the organisation page to accommodate new things that providers can do.

With all the courses being listed on the organisation page, the page was growing too long, and adding more features to it felt cluttered, with a likelihood those features would be missed.

Tidy up the organisation page by:

* moving courses to its own page
* removing steps from titles, the order of completion is less important now
* make the titles links, following the course page pattern

We’re also testing a space for guidance in the right hand column

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Organisation" },
    { text: "Courses" },
    { text: "Course" },
    { text: "Training locations" }
  ]
}) }}
