---
title: Prompting users to give feedback on automatically rejected applications
description: Let candidates know why their application was automatically rejected so they don’t lose confidence unnecessarily
date: 2020-08-13
screenshots:
  items:
    - Feedback prompt
related:
  items:
    - text: Prompting providers to provide feedback on application list page
      href: /manage-teacher-training-applications/help-users-know-what-needs-doing-and-whats-changed/#application-list-ordered-by-priority
tags:
  - AN029
---

Currently, if providers fail to respond to applications before the ‘reject by default’ date, candidates won’t get any feedback and providers have a way of not giving feedback.

This may result in candidates losing confidence and choosing not to apply again.

If we prompt providers to give feedback to candidates then candidates will be able to make an informed decision on whether to apply again or not.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}
