---
title: Email about Publish changes in April
description: Sent on Wednesday 13 March.
date: 2019-03-13
---

{% set emailContent %}
Dear colleague,

We wrote to you last month about new features we’re adding to [Publish teacher training courses](https://publish-teacher-training-courses.education.gov.uk) from April. These will mean you’ll no longer use [UCAS web-link](https://www.ucas.com/sign-web-link) to add or edit course information (though you’ll still need to use UCAS to manage teacher training applications).

### What will happen in April

In April, we’ll transfer all your existing information - everything that currently appears in [Find postgraduate teacher training](https://find-postgraduate-teacher-training.education.gov.uk) - to the expanded version of Publish teacher training courses.

There will be 3 stages to the process:

1) We’ll be in touch in advance to confirm the exact date we’ll begin transferring your courses. (If you asked to take part in the pilot of the new service, we’ve already started doing this).

2) You’ll lose access to course management in Web-link the day before we start transferring your courses. UCAS will email you to confirm this.

3) The morning after we’ve transferred your courses, we’ll send you a confirmation email. You’ll now be able to access the new features of Publish teacher training courses (we’ll send you guidance on how to use these).

Note that if you lose Web-link access on a Friday, you’ll gain access to the new features the following Monday.

### What you need to do now

You don’t need to do anything to prepare for these changes. For now, you can continue to use Web-link to manage your course information. Any changes you make will be transferred to the expanded Publish teacher training courses.

If anyone else in your organisation needs to be aware of this email, please let them know. If you have any questions, contact <becomingateacher@digital.education.gov.uk>

Many thanks
Becoming a Teacher team
{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Changes to Publish teacher training courses – process for April",
  content: emailContent
}) }}
