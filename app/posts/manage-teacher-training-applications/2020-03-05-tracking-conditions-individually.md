---
title: Tracking conditions individually
description: Let providers track and update the status of offer conditions individually.
date: 2020-03-05
tags:
- MN012
---

{% from "screenshots/macro.njk" import appScreenshots with context %}

{{description}}

## Hypothesis

Providers track and update the status of conditions using spreadsheets because we don't allow for this in the UI. But spreadsheets are laborious and onerous.

If we let providers update the status of conditions individually
Then they'll be able to process applications more quickly and accurately

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## An alternative route we ruled out

We explored the following design:

![Screenshot of ‘Has Eloise Wells met condition ‘Fitness to teach check’?’ form.](update-status-alternative.png)

But we ruled it out because:

* the options are inconsistent with the language we use everywhere else (‘Pending’, ‘Met’ and ‘Not met’)
* the heading doesn't match the link that the user clicks to get here (‘Update status’)
* the heading can be very long and hard to read because of the length of the condition text

## Further research

Further research is needed to see if providers need to update multiple conditions at the same time.

{{ appScreenshots({
  items: [ {
    text: "Application details"
  }, {
    text: "Update status"
  }, {
    text: "Confirm met"
  }, {
    text: "Confirm met when last condition"
  }, {
    text: "Met success message"
  }, {
    text: "Confirm not met"
  }, {
    text: "Not met success message"
  }]
}) }}
