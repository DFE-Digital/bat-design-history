---
title: Offer panel
description: New offer panel design to better accomodate various states and content.
date: 2020-02-11
---

{{data.description}}

## Hypotheses

The [previous iteration](/manage-teacher-training-applications/august-2019#application) has a small grey status box in the right hand column of the application details view. And it uses all encompassing buttons to perform actions which make them difficult to label and harder to understand. The small width makes it hard to fit the various content such as conditions inside it.

If we put the panel at the top of the main column
Then the panel will be able to fit the content nicely
We'll know this works when:
- users spot the status box
- users are able to perform the available actions

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Offer panel new"
    },
    {
      text: "Offer panel offered"
    },
    {
      text: "Offer panel accepted"
    },
    {
      text: "Offer panel conditions met"
    },
    {
      text: "Offer panel enrolled"
    },
    {
      text: "Offer panel declined"
    },
    {
      text: "Offer panel rejected"
    },
    {
      text: "Offer panel offer withdrawn"
    },
    {
      text: "Offer panel application withdrawn"
    }
  ]
}) }}
