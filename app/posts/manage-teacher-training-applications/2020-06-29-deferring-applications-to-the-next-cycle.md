---
title: Deferring applications to the next cycle
description: Let providers defer applications to the next cycle
date: 2020-06-29
tags:
  - MN016
screenshots:
  items:
    - text: Application page with change cycle link
      src: application-page.png
    - text: Change cycle page
      src: change-cycle.png
    - text: Check answers
      src: check-answers.png
    - text: Flash message
      src: flash-message.png
---

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## How it works

Only applications in the ‘accepted’ or ‘conditions met’ state can be deferred to the next cycle.

Deferral can only happen if the candidate requests it.

Providers can defer an application at any point in the current cycle.

If a candidate has met all of their conditions when the offer is deferred, then the provider should not edit the conditions or the statuses of those conditions. There are exceptions which is why the UI doesn’t enforce this.

It’s up to providers to accept the request for deferral.
