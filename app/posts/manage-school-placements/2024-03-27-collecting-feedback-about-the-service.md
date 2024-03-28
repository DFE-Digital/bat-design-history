---
title: Collecting feedback about the service
description: We added a feedback page to the service
date: 2024-03-27
tags:
  - feedback
related:
  items:
    - text: Get a GOV.UK feedback page
      href: https://www.gov.uk/service-manual/service-assessments/get-feedback-page
    - text: Measuring user satisfaction
      href: https://www.gov.uk/service-manual/measuring-success/measuring-user-satisfaction
screenshots:
  items:
    - text: Feedback form
      src: feedback--form.png
    - text: feedback form with errors
      src: feedback--form-errors.png
    - text: Feedback confirmation page
      src: feedback--confirmation.png
eleventyComputed:
  eleventyNavigation:
    key: school-placements-collecting-feedback
---

> Update: We will collect feedback via a Microsoft form instead of building a form within the service.

We added a way for users to tell us what they think of the service.

## How it works

Users can access the feedback page from the ‘feedback’ link in the phase banner.

### Feedback form

The feedback form has two mandatory questions:

1. Overall, how do you feel about this service?
2. How could we improve this service?

#### Overall, how do you feel about this service?

The ‘Overall, how do you feel about this service?’ question has 5 options:

- Very satisfied
- Satisfied
- Neither satisfied nor dissatisfied
- Dissatisfied
- Very dissatisfied

Users can rate their experience by choosing 1 option.

Users must answer the question. If they do not select an option, we show an error message:

> Select how you feel about this service

#### How could we improve this service?

The ‘How could we improve this service?’ is a free text box.

Users can give up to 200 words of feedback.

Users must answer the question. If they do not enter any details, we show an error message:

> Enter details about how we could improve this service

#### Optional name and email questions

We allow users to give us their name and email address if they would like a reply to the feedback.

If users enter their email address, but it is not the correct format, we show an error message:

> Enter an email address in the correct format, like name@example.com

### Feedback confirmation page

When a user submits their feedback, we show a confirmation page.

The confirmation page explains that if they provide their name and email address, we will respond within 5 working days.
