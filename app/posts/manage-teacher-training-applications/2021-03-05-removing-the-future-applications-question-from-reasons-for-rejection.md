---
title: Removing the ‘future applications’ question from reasons for rejection
description: We decided to stop asking users whether or not they want to receive future applications from the candidate
date: 2021-03-05
screenshots:
  items:
    - text: ‘Other reasons for rejection’ page when a reason has not been selected on the previous page
      src: other-reasons--01.png
    - text: ‘Other reasons for rejection’ page when a reason has been selected on the previous page
      src: other-reasons--02.png
tags:
  - AN029
---

When a user rejects an application, they have to say whether or not they want to receive future applications from the candidate.

We ask this question so that:

- training providers do not receive further applications from candidates they’re never going to give a place to
- candidates do not waste time applying again to a provider which is not interested in them

Users say no to future applications in 45% of rejections. The candidate receives feedback that says, for example, ‘Wren Academy would not be interested in future applications from you.’

This message can be demoralising and confusing to candidates.  For example, some candidates feel that:

- other training providers may not want to receive applications from them either, making it less likely they’ll apply again
- the time scales are vague - for example, they wonder whether the provider would be interested in applications in the next academic year
- the statement is confusing if the rest of the feedback does not back it up

Even when the training provider says they would be interested in future applications, some candidates feel that the statement is disingenuous or an empty platitude.

For now, we’ve decided it’s best to just remove the question. We’ll better address these needs in the future.

## Effect of removing the ‘future applications’ question

Removing the question can cause the ‘other advice’ question to appear on its own which makes the h1 redundant. We’ve changed the design so that the legend and the h1 are combined if this happens when:

- rejecting an application manually
- giving feedback after an application is rejected automatically
- withdrawing an offer

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}
