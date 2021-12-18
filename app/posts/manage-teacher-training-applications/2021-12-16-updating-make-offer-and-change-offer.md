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
---

Currently providers can offer a different course to the one that a candidate applied for.

We recently did some work to [let providers change course before making an offer](/manage-teacher-training-applications/letting-providers-change-course-before-making-an-offer/). Doing so has led us to make changes to the make offer and change offer flows.

## What we changed

We added qualifications and funding type to the summary lists in the:

- offer section of the application
- make decision page
- check answers page for make offer
- check answers page for change offer
- offer made event
- offer changed event
- application submitted event

We also made changes to:

- make offer
- change course details and make an offer
- change offer

### Make offer

We changed the make offer flow to be consistent with changing courses. To do this we:

- removed ‘select’ from page headings, for example changing ‘Select training provider’ to ‘Training provider’
- added ‘Make offer’ to the caption
- changed the flow which users enter if they click a change link on the check answers page

If the user changes an offer at this point, we will not change the ‘course applied for’ section in the application details.

### Change course details and make an offer

If the user chooses to change course details at the same time as making an offer, they start the journey at the first attribute which can be changed.

For example, if they only belong to one training provider then they will not be asked to choose one. They will go straight to choose a course.

The journey will match the change course journey, except that the user will need to choose conditions as they do in the make offer journey.

The ‘course applied for’ in the application details will not be changed.

### Change offer

We updated the change offer journey to be consistent with changing courses and making offers.

We show change links on an offer if:

- the user has permission to make offers and reject applications
- the application has a status of ‘offered’

If the user clicks one of these links, they’ll follow the same journey as if they’d changed the course. The ‘course applied for’ in the application details will not change.

We also added ‘change offer’ to the caption.
