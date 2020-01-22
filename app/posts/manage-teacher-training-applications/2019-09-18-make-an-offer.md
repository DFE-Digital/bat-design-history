---
title: Make an offer
description: First pass at making a conditional or unconditional offer.
date: 2019-09-18
---
A simple flow to allow providers to change status and make an offer to a candidate.

The statuses have been updated to be active, and now match the new states.

When selecting a conditional offer, a provider needs to list conditions. On UCAS a single text box is provided.

This design presents a list of boxes to prompt conversation about what might go in them, lists of conditions, reuse of conditions and number of conditions. It’s not the final design.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Change status" },
    { text: "Make an offer" }
  ]
}) }}
