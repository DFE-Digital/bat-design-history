---
title: Managing applications across cycles (reconfirming deferred offers)
description: Let users filter by cycle instead of having to switch cycles
date: 2020-08-12
---

In the last round of research we let users [switch between cycles](/manage-teacher-training-applications/switching-between-cycles/).

In research we asked participants to find an application from the previous cycle.

Several participants went to the search box and didn’t realise the results were scoped by the currently selected cycle.

The switcher also means there’s two ways of changing what the user sees in the list: the switcher and the filter.

If we let users filter by cycle instead of switching
Then users can:

* search for applications across cycle
* modify the list in the way they’re used to
* see the most important things that need doing across cycles

## How it works

The cycle is shown next to each application just underneath the status label.

Search finds applications across both cycles.

A max of 2 cycles (current and previous) will appear in the list.

At the start of a new cycle:

* if there are deferred offers, they’ll appear at the top to prompt users to reconfirm their offers
* if there are applications pending conditions, they’ll appear at the top to prompt users to mark them as ‘met’ or ‘not met’

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Application list at start of new cycle",
    img: {
      src: "application-list.png"
    }
  }]
}) }}
