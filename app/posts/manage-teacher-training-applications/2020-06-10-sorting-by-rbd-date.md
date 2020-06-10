---
title: Sorting by reject by default (RBD) date
description: Let users sort by RBD date
date: 2020-06-03
tags:
- MN014
---

{% from "figure/macro.njk" import appFigure with context %}

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## How it works

By default the application list is sorted by last changed, meaning the application’s status recently changed or a note was added to it.

The user can now choose to sort by RBD date (days left to respond until the application is rejected automatically).

When the user sorts by RBD date the days left to respond replaces the last changed date for each application in the list that has a state of submitted.

## Design rationale

The sort controls are left aligned so that is consistently located on small screens (where the filter toggle button appears right aligned) and also gives it the best chance of being seen by users who zoom.

The label is visually hidden but the button acts as a quasi label for sighted users.

The button is included because [submitting a form when a select box value is changed can cause accessibility issues](https://adamsilver.io/articles/select-boxes-shouldnt-submit-on-change/).

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Sorting by last changed (default)",
    img: {
      src: "last-changed.png"
    }
  }, {
    text: "Sorting by days left to respond",
    img: {
      src: "days-left.png"
    }
  }]
}) }}
