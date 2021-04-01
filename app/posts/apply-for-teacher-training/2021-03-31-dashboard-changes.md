---
title: Dashboard changes
description: How we changed what candidates see after they have submitted their application
date: 2021-03-31
related:
  items:
  - text: Application dashboard states
    href: /apply-for-teacher-training/application-dashboard-states/
    description: Previous post about dashboard states
---

The ‘dashboard’ is the name we use internally for the page a candidate sees after they have submitted their application.

It lists the applications a candidate has made and the stage they are at in the application process. They can complete tasks there too, such as accepting an offer, or withdrawing an application.

We do not use the term ‘dashboard’ externally.

### Why change the dashboard?

Research from 2020 told us that candidates didn’t realise that their application was something they could (or needed to) return to. To them, applying for teacher training was a one off form submitted into the ether. This has been called the ‘Elephant Problem’.

The objective of our work has been to:

* Help candidates realise that they can return to the dashboard, and that it’s the ‘home’ of their applications.
* Make sure the dashboard gives the right information at the right stage. For example, pointing to teacher training advisers for help with interviews, or getting candidates who have been unsuccessful to apply again.

## What’s changed

We made changes to:

* The flow for how candidates get to the dashboard after submitting an application
* The layout of the dashboard
* The content presented on the dashboard


### Post-submission flow

To familiarise candidates with the dashboard, we wanted to take them to it immediately after they submitted their application.

Previously they were taken to confirmation page. This page was only seen once. We felt the candidate might leave the service at this point and not see their dashboard. Our hypothesis was that candidates would realise they could return to their application if they saw the dashboard immediately after submitting their application.

We now take candidates straight to the dashboard, via an optional feedback survey. A green confirmation banner gives reassurance that the application was submitted, and lets candidates know that they can expect an email update when anything changes.

## Layout of the dashboard

TBD

### Dashboard at different stages

Part of the dashboard work has been to define the different states an application could be in after it’s been submitted. There are many. Below is a summary of the stages and the candidate behaviour we would ideally like to drive.

We added each state to the prototype to make it easier to iterate the design and content.

#### Applications to a single course

| Application status | Candidate next steps |
|-------------------------------|---|
| Awaiting decision from provider | Wait for a decision |
| Interview scheduled in future | Attend interview / contact teacher training adviser to help prepare.
| After interview, still awaiting decision | Wait for decision |
| Received an offer with conditions | Respond to offer |
| Received an offer for a different course | Respond to offer |
| Received an offer from a course from a different provider | Respond to offer |
| Unsuccessful - provider has given feedback | Apply again |
| Unsuccessful - course was full | Apply again |
| Unsuccessful - provider did not respond in time | Apply again |
| Candidate withdrew application | Apply again |
| Offer withdrawn by provider | Apply again |
| Accepted (pending conditions) | Meet conditions |
| Declined | Apply again |
| Deferred | Meet conditions before deferral start date |
| Candidate did not respond to offer in time | Apply again |
| Candidate did not meet offer conditions | Apply again |
| Candidate recruited | No nudges given |


#### Applications for multiple courses

| Status of application | Candidate next steps |
|-----------------------|----------------------|
| Awaiting decisions from all providers | Wait for a decision
| Interviewing | Attend interview / contact teacher training adviser to help prepare.
| One offer received, still awaiting one more provider decision | Wait for all decisions to be made
| Two rejections received, still awaiting third provider decision | Wait for all decisions to be made
| Received one offer | Respond to offer
| Received two offers | Respond to offer
| Ended without success | Apply again
| Accepted offer, pending conditions | Meet conditions
| Offer deferred | Meet conditions before deferral start date
| Recruited | No nudges given


{% from "screenshots/macro.njk" import appScreenshots with context %}

{{ appScreenshots({
  items: [
    {
      text: "Initial view, showing confirmation banner",
      img: {
        src: "confirmation-banner.png"
      }
    },
    {
      text: "Having interviews scheduled",
      img: {
        src: "interviews.png"
      }
    },
    {
      text: "Being unsuccessful, and getting feedback from providers",
      img: {
        src: "received-feedback.png"
      }
    },
    {
      text: "Receiving two different offers",
      img: {
        src: "received-two-offers.png"
      }
    },
    {
      text: "Accepting an offer",
      img: {
        src: "offer-accepted.png"
      }
    },
    {
      text: "Deferring an offer",
      img: {
        src: "offer-deferred.png"
      }
    },
    {
      text: "Having a confirmed offer (after conditions met)",
      img: {
        src: "offer-confirmed.png"
      }
    },
    {
      text: "Applying again (showing the status of previous applications)",
      img: {
        src: "applying-again.png"
      }
    }
  ]
}) }}
