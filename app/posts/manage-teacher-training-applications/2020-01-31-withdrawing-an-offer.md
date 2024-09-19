---
title: Withdrawing an offer
description: Flow for withdrawing an offer.
date: 2020-01-31
tags:
  - awaiting-validation
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

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a provider
I need to be able to withdraw an offer
So that I can stop an unsuitable candidate from progressing by mistake"
}) }}

## Research findings

1 participant said to change from ‘Withdrawn by us’ to ‘Offer withdrawn’ because a candidate cannot withdraw an offer, only their application. We’ll change the states for the next round of research to:

- Offer withdrawn
- Application withdrawn
