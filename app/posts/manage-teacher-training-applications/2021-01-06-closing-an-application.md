---
title: Closing an application (withdrawal versus rejection)
description: Attempting to improve the way to close an application at any time
date: 2021-01-06
related:
  items:
  - text: Reasons for closing an application
    href: https://docs.google.com/spreadsheets/d/1lKDA7E7PLvp6pC2lUWqSOK4AycfpLV0TOpkp_o-R4nY/edit#gid=0
    description: Map of what reasons are available at what stage of the application process
---

## Background

Candidates and providers can close applications for a number of reasons, leading to several different final application statuses.

Candidates can close their application by:

- withdrawing their application (application withdrawn)
- declining an offer (declined)

They might also request for their application to be withdrawn which would currently have to be done by the support team.

Providers can close an application by:

- rejecting an application (rejected)
- not responding to an application before the deadline (rejected)
- withdrawing an offer (offer withdrawn)
- marking a condition as not met (conditions not met)

Providers give candidates different types of feedback depending on what they’re doing. For example, providers fill out structured reasons for rejection when rejecting a candidate. They get a free text box instead when withdrawing an offer.

It’s not always clear to providers what the difference is between rejection and withdrawal.

There are also some situations in which an application cannot be closed. For example, if a candidate stops responding after they accept an offer then the only way to close the application is to mark a condition as not met.

## Why are we doing this?

We’re doing this work to:

- make it easier for providers to choose the right action without getting hung up on terminology
- let providers close an application at any time throughout the application process
- allow providers to process applications where candidates have disappeared or stopped responding
- give providers confidence that they won’t get punished for rejecting an application
- give candidates useful feedback about why they were unsuccessful
- allow candidates to be withdrawn at their request
- make sure DfE can accurately differentiate between withdrawals and rejections

## What outcomes are we looking for

- less or no support requests to close applications
- less or no applications being incorrectly marked as automatically rejected or automatically declined
- more candidates applying again and being successful when they do

## What we did and why

- Replaced the words ‘reject application’ and ‘withdraw offer’ to ‘Close application’ so that users do not get hung up on terminology
- Replace ‘Declined’, ‘Rejected’, ‘Offer withdrawn’ and ‘Application withdrawn’ statuses with ‘Closed’
- Always let users close an application (unless it’s already been closed) so that there’s a consistent way to close an application regardless of the status
- Kept all questions on the first screen for closing an application as it’s more work to split them up for this round of research
- We put questions that are not a reflection of the candidate toward the bottom of the form
- Once an offer has been made, irrelevant questions like safeguarding and performance at interview are removed
- Let providers give additional feedback when the course is full because if the candidate was poor, then the course being full is not the main reason for closing the application
- Let users navigate easily to change the status of a condition if they choose ‘Close application’ when in the ‘Accepted’ state
- Kept the ‘performance at interview’ question in the ‘Received’ state because a provider may not use the interview feature

## Giving a choice back to candidates under certain circumstances

We think that candidates should be given a choice back if their application is closed through no fault of their own. For example, when the course is full.

## Other options we discarded for now

We originally put ‘Close application’ in a sidebar on the application page.

But from previous research and on the basis that we currently have ‘Withdraw offer’ on the offer page, we think that users will need to close an application from the offer page (and potentially other pages).

We also tried to only show ‘Close application’ under the candidate’s name when in the offered, accepted and conditions met states. This seemed sensible on the basis that the prompts let users close the application - like when making a decision.

But that meant an application couldn’t be closed when in the deferred state. So we decided to put ‘Close application’ under the name at all times.

## What we want to know from research

- Do users understand what ‘Close application’ means?
- Can users figure out how to close an application when their mental model is to withdraw an application?
- Do some users go to close an application when they want to mark a condition as not met?
- Do users need to distinguish between applications that were closed for different reasons on the application list?
- Do users mistake ‘Close application’ for going back to the application list?

## Other things to explore later

- Maybe the reason about qualifications overlaps with why a condition was not met. For example, they could not provide evidence of a qualification
- The ‘offered a place elsewhere’ reason could a dedicated flow once UCAS is gone because Manage knows that a place was offered elsewhere. Peraps it could even be automated.
- We currently skip the ‘other advice’ question when safeguarding and honesty is given as a reason. Maybe this is wrong?
- We currently skip the ‘Future applications’ question when safeguarding, honesty and other offer is given as a reason. Maybe this is wrong?

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Application list",
    img: {
      src: "application-list.png"
    }
  }, {
    text: "Application details (when in ‘Interviewing’ state)",
    img: {
      src: "application-details.png"
    }
  }, {
    text: "Offer page (when in ‘Offered’ state)",
    img: {
      src: "offer-page.png"
    }
  }, {
    text: "Make decision page",
    img: {
      src: "make-decision.png"
    }
  }, {
    text: "Close application step 1 (pre offer)",
    img: {
      src: "close-application-01--pre-offer.png"
    }
  }, {
    text: "Close application step 1 (post offer)",
    img: {
      src: "close-application-01--post-offer.png"
    }
  }, {
    text: "Close application step 1 (post accepted)",
    img: {
      src: "close-application-01--post-accepted.png"
    }
  }, {
    text: "Close application step 2 (pre offer)",
    img: {
      src: "close-application-02--pre-offer.png"
    }
  }, {
    text: "Close application step 3 (pre offer)",
    img: {
      src: "close-application-03--pre-offer.png"
    }
  }, {
    text: "Close application step 4 (pre offer)",
    img: {
      src: "close-application-03--pre-offer.png"
    }
  }, {
    text: "Interstitial page when marking a condition as not met",
    img: {
      src: "interstitial.png"
    }
  }]
}) }}
