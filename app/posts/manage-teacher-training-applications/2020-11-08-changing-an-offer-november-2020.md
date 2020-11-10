---
title: Changing an offer as of November 2020
description: A snapshot of how editing an offer looks as of November 2020
date: 2020-11-09
---

This is how the edit offer journeys look as of November 2020.

## How it works

The way it works currently is that the previous offer and new offer are shown next to each other on the ‘check answers’ page.

On the ‘check answers’ page, users can only change attributes of the offer that they triggered originally.

So in the screenshots below, the user can only change the course and the location because they chose to change the course in the first place. They cannot, however, change the training provider.

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
  }]
}) }}
