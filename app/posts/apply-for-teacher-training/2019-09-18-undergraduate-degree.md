---
title: Asking for an undergraduate degree
description: Get the most important degree details first.
date: 2019-09-18
related:
  items:
  - text: Pull request
    href: https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training-prototype/pull/167
---
A candidate’s undergraudate degree is the most important one. It’s what determines eligibity for postgraduate teacher training.

In research users have entered their most recent degree, not their first one. They have also not entered all of their degrees.

This design iteration asks for the undergraduate degree first, and includes a prompt to show its importance.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Add undergraduate degree" },
    { text: "Add another degree" },
    { text: "Edit undergraduate degree" }
  ]
}) }}
