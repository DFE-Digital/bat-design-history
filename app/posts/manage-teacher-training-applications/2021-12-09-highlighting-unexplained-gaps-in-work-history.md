---
title: Highlighting unexplained gaps in work history
description: Instead of highlight all gaps, we’ll now just highlight unexplained gaps.
date: 2021-12-02
tags:
  - MN025
screenshots:
  items:
    - text: Application details
      src: application-details.png
---

We currently [highlight all gaps in a candidate’s work history](/manage-teacher-training-applications/application-page-improvements/#making-it-easier-to-spot-gaps-in-work). This includes breaks that have and have not been explained.

But users are looking for unexplained gaps that they can find out more about at interview.

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## What we changed

We’ll no longer use inset text for gaps that have explanations.

We changed the description of an unexplained gap from “Break” to “Unexplained break” so that users do not have to rely on a visual signifier to know which gaps have explanations.
