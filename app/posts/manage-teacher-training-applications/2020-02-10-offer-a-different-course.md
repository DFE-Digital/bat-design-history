---
title: Offer a different course
description: First iteration of making an offer to a different course.
date: 2020-02-10
tags:
  - awaiting-validation
screenshots:
  items:
    - Details page
    - Edit response
    - Make a different offer
    - Change provider
    - Change course
    - Change location
    - Change conditions
    - Confirm new offer
    - Flash message
---

First iteration for letting providers make an offer to a different course as part of making sure the provider interface has parity with the API.

This option to make an offer to a different course would be available when the application is in the ‘New’ and ‘Offered’ states.

## User needs

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a provider
I need to be able to change the course
So that I can give candidates a place on a different course that’s not full"
}) }}
