---
title: Updating make offer and change offer
description: We’ve made some improvements to make offer and change offer flows to be more consistent
date: 2021-12-16
screenshots:
  items:
    - text: Make a decision
      src: make-decision.png
    - text: Make offer - conditions of offer
      src: make-offer--conditions-of-offer.png
    - text: Make offer - change training provider
      src: make-offer--change-training-provider.png
    - text: Make offer - change course
      src: make-offer--change-course.png
    - text: Make offer - change full time or part time
      src: make-offer--change-full-time-or-part-time.png
    - text: Make offer - change location
      src: make-offer--change-location.png
    - text: Make offer - check and send offer
      src: make-offer--check-and-send-offer.png
    - text: Timeline - offer made
      src: timeline--offer-made.png
    - text: Activity log - offer made
      src: activity-log--offer-made.png
    - text: Offer
      src: offer.png
    - text: Change offer - conditions of offer
      src: change-offer--conditions-of-offer.png
    - text: Change offer - change training provider
      src: change-offer--change-training-provider.png
    - text: Change offer - change course
      src: change-offer--change-course.png
    - text: Change offer - change full time or part time
      src: change-offer--change-full-time-or-part-time.png
    - text: Change offer - change location
      src: change-offer--change-location.png
    - text: Change offer - check and send offer
      src: change-offer--check-and-send-offer.png
    - text: Timeline - offer changed
      src: timeline--offer-changed.png
    - text: Activity log - offer changed
      src: activity-log--offer-changed.png
tags:
  - making an offer
---

Currently providers can offer a different course to the one that a candidate applied for.

We recently did some work to [let providers change course before making an offer](/manage-teacher-training-applications/letting-providers-change-course-before-making-an-offer/). Doing so has led us to make changes to the make offer and change offer flows.

## The new change course flow

In the new change course flow, attributes can be changed in this order:

- training provider
- course
- full time or part time
- location

When the user clicks a change link on the application details page, they’re taken to a page to change the appropriate course attribute.

They will then continue to the next attribute which has multiple options, based on the choice they just made.

For example, if the user clicked the change link next to ‘course’ then they will be taken to a page where they can change course. They will not be asked to change training provider.

When they continue, they will be taken to:

- choose full time or part time, if both options are available for the course they chose
- choose location, if the course they chose is only part time or only full time and the course has multiple locations
- the check answers page, if the course they chose is only part time or only full time and has only one location

## What we changed

We added qualifications and funding type to the summary lists which appear in the:

- offer section of the application details page
- make decision page
- check answers page for making an offer
- check answers page for changing an offer
- offer made event in the timeline and activity log
- offer changed event in the timeline and activity log
- application submitted event in the timeline and activity log

We also made further changes to the:

- make an offer flow
- change course details and make an offer flow
- change offer flow

### Make offer flow

In the make offer flow we:

- removed ‘select’ from page headings, for example changing ‘Select training provider’ to ‘Training provider’
- added ‘Make offer’ to the caption
- changed the flow reached by clicking a change link on the check answers page, to match the change course flow

### Change course details and make an offer flow

If the user chooses to change course details at the same time as making an offer, the pages they see are the same as in the change course flow. They start the flow with the first attribute they can change.

After the user has chosen the new course attributes, they’ll also need to choose conditions. This has not changed and is the same as in the make offer journey.

### Change offer flow

We added ‘change offer’ to the caption used in this flow.

We also updated the change offer flow to be consistent with changing courses. We show change links on an offer if:

- the user has permission to make offers and reject applications
- the application has a status of ‘offered’

If the user clicks one of these change links, they follow the same flow as they would if they’d changed the course before they made an offer.
