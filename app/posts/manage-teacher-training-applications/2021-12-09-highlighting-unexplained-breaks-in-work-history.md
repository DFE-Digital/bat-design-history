---
title: Highlighting unexplained breaks in work history
description: Instead of highlighting all breaks, we’ll now just highlight unexplained breaks.
date: 2021-12-09
tags:
  - MN025
screenshots:
  items:
    - text: Application details
      src: application-details.png
---

We currently [highlight all breaks in a candidate’s work history](/manage-teacher-training-applications/application-page-improvements/#making-it-easier-to-spot-gaps-in-work). This includes breaks that have and have not been explained.

But users are specifically looking for unexplained breaks.

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## What we changed

We’ll no longer use inset text for breaks that candidates have explained.

We changed the description of an unexplained break from "Break" to "Unexplained break" so that:

- users do not have to rely on the inset border to understand the meaning
- screen reader users can distinguish between breaks with and without explanations
