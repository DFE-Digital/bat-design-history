---
title: Banner prompt iteration
description: Helping users better spot prompts to take action
date: 2020-08-14
---

We’ve been using blue ‘status’ banners to prompt users to:

- [respond to applications](/manage-teacher-training-applications/application-layout-changes/#box-panel-for-respond-to-application)
- [reconfirm a deferred offers](/manage-teacher-training-applications/reconfirming-a-deferred-application/)
- [give feedback on applications that were automatically rejected](/manage-teacher-training-applications/prompting-users-to-give-feedback-on-automatically-rejected-applications)

But over several rounds of testing, we’ve consistently seen users miss these banners.

This suggests users were drawn to the h1 and below, thinking the page started from there.

If we put these banners underneath the h1 then users will be able to find the prompts easily

## Design notes

We thought about moving the banner below the h1 but were concerned the styling of the banner would still cause the same problem.

Instead we decided to put the paragraph and button underneath the h1.

So far research has shown a marked improvement.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Respond to application",
    img: {
      src: "respond-to-application.png"
    }
  }, {
    text: "Reconfirm a deferred offer",
    img: {
      src: "reconfirm-deferred-offer.png"
    }
  }, {
    text: "Give feedback",
    img: {
      src: "give-feedback.png"
    }
  }]
}) }}
