---
title: Reconfirming a deferred offer (iteration 3)
description: Prompt providers to reconfirm a deferred offer from the previous cycle
date: 2020-09-02
---

{% from "figure/macro.njk" import appFigure with context %}

Getting deferral ready for release and addressing issues found in research with the [previous iteration](/manage-teacher-training-applications/reconfirming-a-deferred-offer-iteration/).

## A clearer prompt

In the previous iteration some participants didn’t notice the prompt to reconfirm an offer at the top of the application details pages.

S we’ve made the prompt clearer by:

* using the inset text component
* adding a heading
* explaining the situation of the deferred offer – for example, that the course is available in the new cycle
* using more explicit button text

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

So we now send users to a welcome screen to set the scene (like we do when the course or location is unavailable).

{{ appFigure({
  image: {
    file: "welcome--course-available.png"
  },
  caption: "Welcome screen when the course is available"
}) }}

We also:

* improved the content
* moved the deferred offer details up
* collapsed the deferred offer within a Details component

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

## First release: reconfirming an offer with assistance from support

To reduce development effort the first release will ask users to contact support to reconfirm an offer if the course or location is no longer available in the new cycle.

{{ appFigure({
  image: {
    file: "welcome--support-1.png"
  },
  caption: "Welcome screen when the location is unavailable and a support agent has to reconfirm the offer on behalf of the provider"
}) }}

{{ appFigure({
  image: {
    file: "welcome--support-2.png"
  },
  caption: "Welcome screen when the course is unavailable and a support agent has to reconfirm the offer on behalf of the provider"
}) }}

## Confirming the status of conditions

In the previous iteration, users could update the status of conditions from the review screen at the end.

But this puts the onus on the user to find the action and remember to do it.

So now we send users directly to a check the status of the conditions as part of the flow.

{{ appFigure({
  image: {
    file: "confirm-statuses--combined.png"
  },
  caption: "Confirming statuses when the conditions are already met and tracked together"
}) }}

{{ appFigure({
  image: {
    file: "confirm-statuses--combined-pending.png"
  },
  caption: "Confirming statuses when the conditions are still pending and tracked together"
}) }}

{{ appFigure({
  image: {
    file: "confirm-statuses--individual.png"
  },
  caption: "Confirming statuses when the conditions are tracked individually"
}) }}

## Improving the review offer screen

We improved the review screen as follows:

* the link to change conditions now says ‘Add or change conditions’ which is more explicit
* the ‘Change’ links now say ‘Update status’ which is more explicit
* the content explaining what will happen is clearer and more concise
* we have a design for when the conditions are tracked together by including an ‘Update status of conditions’ link above the conditions
* the status tags are aligned right

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

In the previous iteration we forgot to update the timeline to reflect the action.

Now the act of reconfirming a deferred offer, shows at the top of the timeline.

{{ appFigure({
  image: {
    file: "timeline.png"
  },
  caption: "Timeline with ‘Offer reconfirmed’ event"
}) }}
