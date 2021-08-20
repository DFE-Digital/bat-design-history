---
title: Withdrawing an offer
description: Flow for withdrawing an offer.
date: 2020-01-31
tags:
  - awaiting-validation
  - MN002
screenshots:
  items:
    - Application in offered state
    - Edit response
    - Withdraw offer
    - Confirm withdrawal
    - Application in withdrawn state
---

This flow shows how a provider can withdraw their offer.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Research findings

1 participant said to change from ‘Withdrawn by us’ to ‘Offer withdrawn’ because a candidate cannot withdraw an offer, only their application. We'll change the states for the next round of research to:

* Offer withdrawn
* Application withdrawn
