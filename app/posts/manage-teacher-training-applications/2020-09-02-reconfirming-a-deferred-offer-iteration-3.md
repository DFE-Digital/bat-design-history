---
title: Reconfirming a deferred offer (iteration 3)
description: Prompt providers to reconfirm a deferred offer from the previous cycle
date: 2020-09-02
---

{% from "figure/macro.njk" import appFigure with context %}

Getting deferral ready for release and addressing issues found in research with the [previous iteration](/manage-teacher-training-applications/reconfirming-a-deferred-offer-iteration/).

## A clearer prompt

In the previous iteration some participants found the option to reconfirm an offer hard to spot.

For this iteration we’ve made the prompt far clearer by:

* using the inset text component
* adding a heading
* explaining the situation of the deferred offer. For example, that the course is available in the new cycle.
* using a clearer call to action

{{ appFigure({
  image: {
    file: "prompt--course-available.png"
  },
  caption: "Prompt when the course is available"
}) }}

{{ appFigure({
  image: {
    file: "prompt--location-unavailable.png"
  },
  caption: "Prompt when the location is unavailable"
}) }}

{{ appFigure({
  image: {
    file: "prompt--course-unavailable.png"
  },
  caption: "Prompt when the course is unavailable"
}) }}

## Welcome screen

In the previous iteration, when the course is still available in the new cycle, the user is taken straight to the review page.

But providers may need to change the status of the conditions from met to pending.

So we send users to a welcome screen just like we do when the course or location is unavailable.

{{ appFigure({
  image: {
    file: "welcome--course-available.png"
  },
  caption: "Welcome screen when the course is available"
}) }}

We also changed the layout and content of these screens to be clearer and to put the details of the deferred above inside a Details component.

{{ appFigure({
  image: {
    file: "welcome--location-unavailable.png"
  },
  caption: "Welcome screen when the location is unavailable"
}) }}

{{ appFigure({
  image: {
    file: "welcome--course-unavailable.png"
  },
  caption: "Welcome screen when the course is unavailable"
}) }}

## What the user sees when the course or location is unavailable

For first release, if the course or location is unavaible, the user will be prompted to contact support to reconfirm the candidate’s offer.

{{ appFigure({
  image: {
    file: "welcome--support.png"
  },
  caption: "Welcome screen when the course or location is unavailable and Support has to reconfirm the offer on behalf of the provider"
}) }}

## Confirming the status of conditions

After the welcome screen users have to confirm the status of the conditions.

For example, a DBS check was valid a few months ago but the candidate now needs to get a new one.

{{ appFigure({
  image: {
    file: "confirm-statuses--combined.png"
  },
  caption: "Confirm statuses when the conditions are tracked together and they’re met"
}) }}

{{ appFigure({
  image: {
    file: "confirm-statuses--combined-pending.png"
  },
  caption: "Confirm statuses when the conditions are tracked together and they’re pending"
}) }}

{{ appFigure({
  image: {
    file: "confirm-statuses--individual.png"
  },
  caption: "Confirm statuses when the conditions are tracked individually"
}) }}

## Improving the review offer screen

The last screen in the flow lets users review their new offer.

{{ appFigure({
  image: {
    file: "review--combined.png"
  },
  caption: "Review page when the conditions are tracked together"
}) }}

{{ appFigure({
  image: {
    file: "review--individual.png"
  },
  caption: "Review page when the conditions are tracked individually"
}) }}

## Updating the timeline when reconfirming a deferred offer

After an offer has been reconfirmed to the new cycle, an event appears at the top of the timeline.

{{ appFigure({
  image: {
    file: "timeline.png"
  },
  caption: "Timeline with ‘Offer reconfirmed’ event"
}) }}
