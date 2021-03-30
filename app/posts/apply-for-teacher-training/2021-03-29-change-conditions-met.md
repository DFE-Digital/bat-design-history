---
title: Changing “Conditions met”
description: Why we changed the status tag for confirmed offers.
date: 2021-03-29
---

When a provider offers a candidate a place on a course, usually there are some conditions attached, such as completing an enhanced Disclosure and Barring Service check, and a Fitness to Teach check. Once these have been met, the provider can update the status of the offer, and this then shown as "Conditions met" to the candidate.

However, some courses don’t have any conditions at all, or at least any conditions specified on the service (there might be some administrative conditions off-service). In these scenarios, the status doesn’t make sense.

Whilst we could have a different status label for those who have accepted unconditional offers only, it is simpler if there is a single label which applies in all scenarios.

For this reason, we changed the label to "Offer confirmed".

This is consistent with the language used on the service when the candidate has not yet met the conditions, which states:

> You’ve accepted the offer from [provider name]
>
> Before your offer is confirmed, there are some final conditions to meet.

It is also potentially a more positive-sounding label.

{% from "screenshots/macro.njk" import appScreenshots with context %}

{{ appScreenshots({
  items: [{
    text: "Previous status label",
    img: {
      src: "conditions-met.png"
    }
  }, {
    text: "New status label",
    img: {
    src: "offer-confirmed.png"
    }
  }]
}) }}
