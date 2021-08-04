---
title: Deferring offers to the next cycle (iteration 3)
description: Let providers defer offers to the next cycle
date: 2020-09-02
tags:
  - MN016
---

Getting deferral ready for release and addressing issues found in research with the [previous iteration](/manage-teacher-training-applications/deferring-offers-iteration/).

## Using an offer panel

The details of the offer are played back in various flows such as changing an offer and reconfirming a deferred offer.

To differentiate the offer from other details on the page we put a border around it – and to be consistent we’ve put a border around it on the offer page too.

![Offer page when we track conditions individually.](offer-page.png "Offer page when we track conditions individually")

![Offer page when we track conditions together.](offer-page--combined-conditions.png "Offer page when we track conditions together")

## Putting offer actions at the top of the panel

The [previous iteration](/manage-teacher-training-applications/deferring-offers-iteration/#offer-page-with-defer-link) placed the offer actions at the bottom of the page.

Research shows that this makes them harder to find as they’re more likely to be missed or off screen.

If we put the actions at the top of the panel then users will be able to find and use them more easily.

![Offer page with actions at the top of the panel.](offer-page.png)

## Improving content when deferring an offer

The [previous iteration](/manage-teacher-training-applications/deferring-offers-iteration/#defer-offer-page) was a little long winded and unclear. Here we’ve tightened up the content.

![Screenshot of ‘Check and confirm offer deferral’ page.](defer.png)

## Updating the timeline when deferring an offer

When an offer has been deferred, we show it as an event in the timeline.

![Screenshot of timeline page for a deferred candidate.](timeline.png)

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}
