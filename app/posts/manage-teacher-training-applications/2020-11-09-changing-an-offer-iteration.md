---
title: Changing an offer iteration
description: Improvements to the way users edit an offer
date: 2020-11-09
---

This is an iteration of the [current flow](/manage-teacher-training-applications/changing-an-offer-november-2020).

## Only showing the new offer on the ‘check answers’ page

Currently, the previous offer and new offer are shown next to each other on the ‘check answers’ page.

This is inconsistent with the ‘check answers’ page when making an initial offer and editing conditions and gives the user more content to read.

We think on balance that it’s okay to just show the details of the new offer.

## Let users change all aspects of the offer

Currently, on the ‘check answers’ page, users can only change the attributes of the offer that they triggered originally.

For example, if the user choses to change the location, they can only change the location. They cannot change the training provider or course.

This means the user is forced to perform multiple actions, each of which triggers an email to the candidate.

So we decided to let users change any details of the offer regardless of which action the user originally chose.

This way, users get the most flexible experience and candidates receive as few emails as possible.

## Clarifying what happens when an offer is changed

Currently:

- the h1 says ‘Check and confirm changes to offer’ which is ambiguous
- the button’s label is ‘Change offer’ which could also be clearer
- there’s nothing to explain to users the implications of sending the offer like there is when making an initial offer

We’ve addressed this by changing the content as follows:

- the h1 says ‘Check and send new offer’
- the button’s label says ‘Send new offer’
- there’s warning text which says ‘When you send this offer, you guarantee a place on this course as long as the candidate meets the conditions.’

## How it works

No matter what the user is changing (training provider, course, location, conditions), they can change other details about the offer from the ‘check answers’ page.

Whatever the user selects to change is what the user sees before arriving at the ‘check answers’ page. For example, if the user chooses to change the location, they see the location page first.

If the user keeps all the attributes the same, then an email will not be sent to the candidate as nothing has  changed.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Offer page",
    img: {
      src: "offer-page.png"
    }
  }, {
    text: "Select course",
    img: {
      src: "select-course.png"
    }
  }, {
    text: "Select location",
    img: {
      src: "select-location.png"
    }
  }, {
    text: "Check answers",
    img: {
      src: "check.png"
    }
  }, {
    text: "Success",
    img: {
      src: "flash.png"
    }
  }]
}) }}
