---
title: Banner prompt iteration 3
description: Further improvements to the design of banners that prompt users to take action
date: 2020-11-05
---

Our research shows that some users miss the prompts at the top of the application pages.

You can see our last iteration where we [moved the ‘banner’ below the page heading](/manage-teacher-training-applications/banner-prompt-iteration/).

This reduced the amount of users who missed it but it still happened sometimes.

So we decided to uses the [Inset text](https://design-system.service.gov.uk/components/inset-text/) component and add a heading inside the banner.

We’ve settled on this because we haven’t seen a user miss it during the last few months.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Make decision",
    img: {
      src: "make-decision.png"
    }
  }, {
    text: "Give feedback",
    img: {
      src: "give-feedback.png"
    }
  }, {
    text: "Reconfirm deferred offer",
    img: {
      src: "reconfirm-offer.png"
    }
  }]
}) }}
