---
title: Improving activity log and timeline again
description: Various improvements to the activity log and timeline driven by the work we’re doing to make it clear to users why they can no longer see an application that’s been transferred to a new training provider or accredited body.
date: 2021-03-22
---

Before now, the design of the activity log did not show all of the event details.

For example, the make offer or change offer event did not show the conditons of the offer. This means that if a condition is removed, you cannot tell who removed it.

## What we did

We added an event for:

- making an offer
- adding, removing or changing the conditions of an offer
- updating the status of conditions
- deferring an offer
- reconfirming an offer

We also changed all the offer events to show the conditions of the offer.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Description",
    img: {
      src: "image.png"
    }
  }]
}) }}
