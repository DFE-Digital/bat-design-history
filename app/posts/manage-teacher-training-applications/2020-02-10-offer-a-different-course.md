---
title: Offer a different course
description: First iteration of making an offer to a different course.
date: 2020-02-10
tags:
  - awaiting-validation
  - MN003
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

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}
