---
title: Updating the messaging on the claims list page
description: We updated the claims list page to make it clearer that users need to add at least one mentor before creating a claim
date: 2024-04-22
tags:
  - claims
  - mentors
related:
  items:
    - text: Round 3 research findings
      href: /claim-funding-for-mentors/round-3-research-findings/
---

After we decided to split the journey to make a claim into two: adding a mentor and submitting a claim, we wanted to continue to test this with users and to iterate the content as appropriate. This post details the changes we made to the claim list page to provide additional clarity and reassurance to users when they submit their claims.

## User need addressed by this change

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As someone in an administrative or mentor role,
  I need reassurance that the Department for Education (DfE) have the correct details for our organisation,
 So that, I feel confident that our claim has been submitted correctly."
}) }}

## User research

After [round 3 of user research](/claim-funding-for-mentors/round-3-research-findings/), we updated the claims list page to clarify that users must add at least one mentor before creating a claim.

We made this change because [users continue to get confused as to where they go to claim after adding a mentor](/claim-funding-for-mentors/round-3-research-findings/#users-continue-to-get-confused-as-to-where-they-go-to-claim-after-adding-a-mentor).

## Context

After adding mentors, no specific call to action directs users to make a claim. They must navigate to the ‘Claims’ section.

The primary navigation is ordered with ‘Claims’ first and ‘Mentors’ second. This is because ‘Claims’ are the most important and common action, but is the opposite of what we initially asked them to do: add mentors and then create a claim.

## Change to the service

To address this user need, we added the inset text “Before you can start a claim, you will need to add a mentor” below the page heading and link to the ‘Mentors’ section.

[![Claims list ‘Add a mentor’ message](claims-list.png "Claims list ‘Add a mentor’ message")](claims-list.png)

## Next steps

In subsequent rounds of research, we will test whether this has reduced users’ confusion when they first log into the service.
