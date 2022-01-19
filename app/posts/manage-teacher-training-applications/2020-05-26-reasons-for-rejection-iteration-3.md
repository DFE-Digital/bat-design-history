---
title: Reasons for rejection iteration 3
description: Combined some questions onto one page, added an additional question and improved content
date: 2020-05-26
screenshots:
  items:
    - text: Step 1
      src: respond.png
    - text: Step 2
      src: questions-1.png
    - text: Step 3
      src: questions-2.png
    - text: Step 4
      src: preview.png
    - text: Step 5 (not interested in future applications)
      src: preview-not-interested.png
tags:
  - AN029
---

## Hypotheses

### Combine questions onto one page

In the previous iteration, we put [uncommon questions on a separate page](/manage-teacher-training-applications/reasons-for-rejection-iteration-2/#step-3). But users were confused – they thought some categories were missing.

If we combine the questions onto the first page
Then users won't be confused and they'll be able to scan through all the categories more easily

### Move some safeguarding options into a new question about honesty and professionalism

In the previous iteration, the [safeguarding question contained unrelated options](/manage-teacher-training-applications/reasons-for-rejection-iteration-2/#step-3). This confused some users.

If we put these options in a separate question
Then users will be able to find them more easily

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}
