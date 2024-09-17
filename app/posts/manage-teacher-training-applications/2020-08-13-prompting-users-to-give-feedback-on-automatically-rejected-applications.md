---
title: Prompting users to give feedback on automatically rejected applications
description: Let candidates know why their application was automatically rejected so they do not lose confidence unnecessarily
date: 2020-08-13
tags:
  - rejections
screenshots:
  items:
    - Feedback prompt
related:
  items:
    - text: Prompting providers to provide feedback on application list page
      href: /manage-teacher-training-applications/help-users-know-what-needs-doing-and-whats-changed/#application-list-ordered-by-priority
---

Currently, if providers fail to respond to applications before the ‘reject by default’ date, candidates won’t get any feedback and providers have a way of not giving feedback.

This may result in candidates losing confidence and choosing not to apply again.

If we prompt providers to give feedback to candidates then candidates will be able to make an informed decision on whether to apply again or not.

## User needs

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a candidate
I need to know why my application was unsuccessful
So that I can work out if I should apply again and if so how I can improve my next application"
}) }}
