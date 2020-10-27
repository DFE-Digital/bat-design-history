---
title: Tracking conditions iteration
description: Improving the way we let users update the status of conditions
date: 2020-10-27
---

At the moment, providers have to update the status of all conditions at the same time.

This means providers have to track conditions outside of the system in a spreadsheet which is longwinded and onerous.

We previously [designed a solution for this](/manage-teacher-training-applications/tracking-conditions-individually/) but there was no way to update multiple conditions at the same time.

In this iteration we’re letting users update conditions individually but with the ability to update multiple at the same time too.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Offer page",
    img: {
      src: "offer-page.png"
    }
  }, {
    text: "Update status of conditions page",
    img: {
      src: "status-page.png"
    }
  }, {
    text: "Check: when a condition has been marked as ‘not met’",
    img: {
      src: "check--not-met.png"
    }
  }, {
    text: "Check: when a condition has been marked as ‘met’",
    img: {
      src: "check--met.png"
    }
  }, {
    text: "Check: when all conditions have been marked as ‘met’",
    img: {
      src: "check--all-met.png"
    }
  }, {
    text: "Success message",
    img: {
      src: "success-message.png"
    }
  }]
}) }}
