---
title: Changing “Conditions met”
description: Why we changed the status tag for confirmed offers.
date: 2021-03-29
---

When a provider offers a candidate a place on a course, they usually need to meet certain conditions before they start. These can include an enhanced Disclosure and Barring Service check and a Fitness to Teach check. Once these conditions have been met the provider can update the status of the offer. This is shown to the candidate as "Conditions met"

However some providers make unconditional offers. Others contact candidates with information about thier conditions away from our service. In these scenarios, where we do not know if conditions apply, the status "Conditions met" may cause confusion.

We could have a different status for those who have unconditional offers, but it is simpler if we have a single label that applies to both scenarios.

For this reason, we have changed the label to "Offer confirmed".

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
