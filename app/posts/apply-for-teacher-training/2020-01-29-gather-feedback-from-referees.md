---
title: Gather feedback from referees
description: Include a feedback form immediately after submitting a reference
date: 2020-01-29
related:
  items:
    - text: Trello
      href: https://trello.com/c/aaKMc14Y/800-design-questionnaire-to-get-feedback-from-referees
    - text: Original Google form
      href: https://docs.google.com/forms/d/e/1FAIpQLSdRMPAtm9oHAA2HFMlXK9mAQQNvkIKf8lD2aQMI7o_fuwqohA/formResponse
    - text: Prototype PR
      href: https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training-prototype/pull/328
---
We need a way to ask referees for their feedback so we know if the guidance is useful and the process is working.

We've had a low response rate from the few referees who said we could contact them.

## Hypothesis

If we include a feedback form immediately after submitting a reference then referees are more likely to participate in research.

If we include some more detailed questions in the form, then referees will describe their answers without needing to participate in user research, meaning we will have some data points if we continue to struggle to find participants.

Linking to a separate Google Form would limit responses.

## Design notes

There is no validation on this form, submitting something incorrectly will have no cost to the referee, and little cost to us. We'd prefer quick and easy submission.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Form as presented",
      img: { src: "01-form-as-presented.png" }
    }, {
      text: "Form with all fields showing",
      img: { src: "02-form-with-all-fields-showing.png" }
    }]
}) }}
