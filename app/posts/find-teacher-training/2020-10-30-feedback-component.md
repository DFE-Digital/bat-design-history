---
title: Prompting for feedback
description: Gathering feedback on Find in a way that is consistent with Apply.
date: 2020-10-30
related:
  items:
  - text: Surveying users holistically
    href: https://docs.google.com/presentation/d/1x8TB_b0D_7crZ_gYo_e1eJXu_U2tp5z6y3f7tOaHD-A/
    description: Our approach to gathering feedback across Find and Apply services.
---

We currently ask users for feedback, or to report any problems, in the final two paragraphs of a course detail page:

{% from "figure/macro.njk" import appFigure with context %}
{{ appFigure({
  image: {
    file: "/find-teacher-training/feedback-component/existing-content.png",
    alt: "Existing content shown on course pages."
  }
}) }}

To ensure we gather feedback consistently, we will use [the same feedback component](/apply-for-teacher-training/feedback-component/) used on the Apply service instead. Using this component means we can also ask for feedback on search result pages, too.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    id: "prompt",
    text: "Prompt",
    caption: "The feedback prompt sits just above the footer. Unlike the component used on GOV.​UK, the background is grey to lessen its prominence."
  }, {
    id: "form-feedback",
    text: "Feedback form",
    caption: "If a user selects ‘No’, a feedback form is revealed. This asks for a free text response, and allows users to provide an email address to contact them with, too."
  }, {
    id: "form-problem",
    text: "Report a problem form",
    caption: "If a user selects ‘There is something wrong with this page’, a separate form is revealed that allows them to send us a message."
  }, {
    id: "form-problem-validation",
    text: "Report a problem form (with validation)"
  }, {
    id: "success",
    text: "Success message",
    caption: "If a user selects ‘Yes’, or submits either form, we replace the prompt with a success message."
  }, {
    id: "forms-no-js",
    text: "Forms (no JavaScript)",
    caption: "If the user does not have JavaScript enabled, or the script fails to run, show both forms instead."
  }, {
    id: "success-no-js",
    text: "Success message (no JavaScript)",
    caption: "Upon submitting either form, the user is taken to a thank-you page, which includes a link back to the page they came from."
  }]
}) }}
