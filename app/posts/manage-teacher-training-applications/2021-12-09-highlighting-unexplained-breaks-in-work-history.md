---
title: Highlighting unexplained breaks in work history
description: Instead of highlighting all breaks, we’ll now just highlight unexplained breaks.
date: 2021-12-09
tags:
  - work history
screenshots:
  items:
    - text: Application details
      src: application-details.png
---

We currently [highlight all breaks in a candidate’s work history](/manage-teacher-training-applications/application-page-improvements/#making-it-easier-to-spot-gaps-in-work). This includes breaks that have and have not been explained.

But users are specifically looking for unexplained breaks.

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a provider
I need to be able to spot any unexplained breaks in a candidate’s work and academic history
So that I can ask candidates about them and check for any safeguarding issues"
}) }}

## What we changed

We’ll no longer use inset text for breaks that candidates have explained.

We changed the description of an unexplained break from "Break" to "Unexplained break" so that:

- users do not have to rely on the inset border to understand the meaning
- screen reader users can distinguish between breaks with and without explanations
