---
title: From Find to Apply
description: User journey and screenshots for a new user.
related:
  items:
  - text: Trello ticket
    href: https://trello.com/c/h6HhGrR6
---
An iteration following [an early 2019 design of the journey](/find-teacher-training/choose-how-to-apply-2).

This design includes:

* an interstitial showing the choice between GOV.UK Apply and UCAS Apply
* a page adding the selected course as a choice in a new application

It doesn’t cover the journey from Find for a user with an existing account or application.

The journey intentionally skips the Apply start page, going straight from the interstitial to the eligibility questions. A ‘Start now’ button doesn’t fit well in the middle of a journey. With the start page being hosted on GOV.UK, this would create a technical challenge: how would we maintain a choice from Find to GOV.UK and onwards to Apply.

To skip the start page, the content on the Apply and Find start pages must be consistent.

## User journey

![User journey diagram](/images/apply-for-teacher-training/find-to-apply/find-to-apply-journey.svg)

[Google drawing](https://docs.google.com/drawings/d/1d30V3qtVYQNL_gWIMuGjgjm2doWMIDyIyYWchIKnPe8)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Choose how to apply" },
    { text: "Check you can use GOV.UK Apply" },
    { text: "Give us your email" },
    { text: "Check your email" },
    { text: "Confirm email address" },
    { text: "Account created" },
    { text: "You selected a course" },
    { text: "Pick a course location" },
    { text: "Course choices" }
  ]
}) }}
