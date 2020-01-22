---
title: Picking courses to apply to
description: Providing a route to Find, or selecting the course you want.
date: 2019-08-16
---
Candidates using Apply need to choose a course to apply to.

If a candidate doesn’t know what course to apply to, give them a route to Find to begin or resume their search.

Otherwise provide autocomplete features for picking the provider and course. The autocomplete shouldn’t depend on course and provider codes, but if a candidate enters them they should work too.

We’ll need to amend this design to include training locations too – some courses offer multiple locations that a candidate can choose between. For example national SCITTs or school direct providers working with many schools.

Users coming directly from Find could have a course pre-populated or added using a different flow, this hasn’t been designed yet.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Your application" },
    { text: "Have you chosen a course to apply to?" },
    { text: "Which training provider?" },
    { text: "Which course?" },
    { text: "Find a course (when course isn’t known)" }
  ]
}) }}
