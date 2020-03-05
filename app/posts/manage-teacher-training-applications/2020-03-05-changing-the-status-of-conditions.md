---
title: Tracking and updating the status of offer conditions
description: Let providers track and update the status of offer conditions.
date: 2020-03-05
tags:
 - MN010
---

{{description}}

## Hypothesis

Providers track and update the status of conditions using spreadsheets because we don't allow for this in the UI. But spreadsheets are laborious and onerous.

If we let providers update the status of conditions individually
Then they'll be able to process applications more quickly and accurately

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Further research

Further research is needed to see if providers need to update multiple conditions at the same time.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Application details"
    },
    {
      text: "Update status"
    },
    {
      text: "Confirm met"
    },
    {
      text: "Confirm met when last condition"
    },
    {
      text: "Met success message"
    },
    {
      text: "Confirm not met"
    },
    {
      text: "Not met success message"
    }
  ]
}) }}
