---
title: Emails
description: Registering for UCAS Teacher Training.
---

With an application started in March 2019, the following emails were sent over the course of the next three weeks, encouraging the applicant to complete and submit their application.

## 1 day after starting an application

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "[First name], here’s what you need to do now",
  content: "![Now you’ve started your UCAS Teacher Training application, you’re one step closer to becoming a teacher.](/images/apply-for-teacher-training/ucas/emails/day1.png)"
}) }}

## 1 week after starting an application

{{ appEmail({
  subject: "[First name], make your application stand out",
  content: "![It’s been just over a week since you started your UCAS Teacher Training application…](/images/apply-for-teacher-training/ucas/emails/day7.png)"
}) }}

## 3 weeks after starting an application

{{ appEmail({
  subject: "[First name], it’s time to apply",
  content: "![We’ve got loads of support to help you with your application](/images/apply-for-teacher-training/ucas/emails/day21.png)"
}) }}
