---
title: Email announcing UCAS transition
description: Sent on Monday 20 February.
date: 2019-02-21
---

{% set emailContent %}
Dear colleague,

We’d like to tell you about some new features that we’re introducing to [Publish teacher training courses](https://publish-teacher-training-courses.education.gov.uk) from April, that will apply to courses in the current recruitment cycle (2019/20) onwards.

The new features will mean you’ll no longer need to add or edit course information in [UCAS web-link](https://www.ucas.com/sign-web-link). Instead you’ll be able to use Publish teacher training courses to upload and manage all your content for [Find postgraduate teacher training](https://find-postgraduate-teacher-training.education.gov.uk). This includes:

- creating new courses
- adding and changing locations
- updating the vacancy status of courses
- changing course details (eg names, outcomes, and fee or salary status)

Your existing content in web-link will be transferred automatically to Publish teacher training courses - you won’t need to take any action yourself. You’ll only need to use web-link to receive and process UCAS Teacher Training applications (note that any changes you make in Publish teacher training courses will be updated automatically in the UCAS application system).

At first, in early April, the new publishing features will be available to a small group of providers. Later in the month, we’ll roll them out to everyone.

If you’d like to be part of this first group of users, or have any questions, please let us know at [becomingateacher@digital.education.gov.uk](mailto:becomingateacher@digital.education.gov.uk). The feedback we receive from early users will help us to make improvements to the service before the full launch.

We’ll be in contact later this month with more information about the changes we’re making to Publish teacher training courses, along with clear guidance on any steps you need to take.

Regards,
Becoming a Teacher team
{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Important changes to Publish teacher training courses – a chance to take part in research",
  content: emailContent
}) }}
