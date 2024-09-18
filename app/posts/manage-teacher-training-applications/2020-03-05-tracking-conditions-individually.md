---
title: Tracking conditions individually
description: Let providers track and update the status of offer conditions individually.
date: 2020-03-05
tags:
  - off conditions
  - statuses
screenshots:
  items:
    - Application details
    - Update status
    - Confirm met
    - Confirm met when last condition
    - Met success message
    - Confirm not met
    - Not met success message
---

{{ description }}

## Hypothesis

Providers track and update the status of conditions using spreadsheets because we do not allow for this in the UI. But spreadsheets are laborious and onerous.

If we let providers update the status of conditions individually
Then they’ll be able to process applications more quickly and accurately

## User needs

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a provider
I need to track the status of conditions
So that I enrol candidates when all conditions are met and progress pending conditions"
}) }}

## An alternative route we ruled out

We explored the following design:

![Screenshot of ‘Has Eloise Wells met condition ‘Fitness to teach check’?’ form.](update-status-alternative.png)

But we ruled it out because:

- the options are inconsistent with the language we use everywhere else (‘Pending’, ‘Met’ and ‘Not met’)
- the heading does not match the link that the user clicks to get here (‘Update status’)
- the heading can be very long and hard to read because of the length of the condition text

## Further research

Further research is needed to see if providers need to update multiple conditions at the same time.
