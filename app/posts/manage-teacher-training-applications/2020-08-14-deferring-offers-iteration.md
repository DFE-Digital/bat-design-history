---
title: Deferring offers to the next cycle (iteration 2)
description: Let providers defer offers to the next cycle
date: 2020-08-14
tags:
  - deferrals
screenshots:
  items:
    - Offer page with defer link
    - Defer offer page
    - Flash message
---

The [previous iteration](/manage-teacher-training-applications/deferring-applications-to-the-next-cycle) let users change the cycle for an application on the application page.

But research showed that providers think and talk about this process as deferring an offer.

When we asked users to defer an offer, a lot of users went straight to the offer page and skipped the ‘change’ link next to the cycle on the application page.

If we put a ‘Defer’ link on the offer page it’ll match users’ mental model and will therefore be easier to find.

## User needs

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a provider
I need to be able to defer an offer to the next recruitment cycle
So that I can tie in a good candidate who cannot accept a place in this recruitment cycle"
}) }}

## How it works

Only applications in the ‘accepted’ or ‘conditions met’ state can be deferred to the next cycle.

Deferral can only happen if the candidate requests it.

Providers can defer an offer at any point in the current cycle.

If a candidate has met all of their conditions when the offer is deferred, then the provider should not edit the conditions or the statuses of those conditions. There are exceptions (like DBS checks) which is why the UI does not enforce this.

It’s up to providers to accept the request for deferral.

At the beginning of the new cycle, providers will have to [reconfirm the deferred offer](/manage-teacher-training-applications/reconfirming-a-deferred-offer-iteration).
