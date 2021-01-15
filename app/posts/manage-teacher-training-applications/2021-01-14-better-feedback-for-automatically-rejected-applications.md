---
title: Better feedback for automatically rejected applications
description: Give candidates better feedback when their application was automatically rejected
date: 2021-01-14
---

At the moment, candidates are penalised in two ways when their application is automatically rejected.

Firstly, they don’t get feedback straight away. Secondly, the feedback they eventually receive is free text and inconsistent with the structured feedback they would receive for an application rejected in the normal way.

If we give candidates the same type of feedback as normally rejected applications, they’ll be able to compare feedback more easily with other rejected applications. This will help to give them a better chance of applying again successfully.

We also moved the record of the feedback from the top of the application details page to a separate ‘feedback’ page. It doesn’t make sense for it to be on the application details page, which contains information submitted by the candidate. And it’s harder to find and pushes the application details further down the page.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Prompt",
    img: {
      src: "application-details.png"
    }
  }, {
    text: "Feedback step 1",
    img: {
      src: "feedback--01.png"
    }
  }, {
    text: "Feedback step 2",
    img: {
      src: "feedback--02.png"
    }
  }, {
    text: "Feedback step 3",
    img: {
      src: "feedback--03.png"
    }
  }, {
    text: "Feedback sent",
    img: {
      src: "feedback--04.png"
    }
  }, {
    text: "Timeline updated",
    img: {
      src: "timeline.png"
    }
  }, {
    text: "Feedback page",
    img: {
      src: "feedback-page.png"
    }
  }]
}) }}

