---
title: Reasons for rejection
description: Helping providers give useful feedback to candidates who have been rejected
date: 2020-03-27
screenshots:
  items:
    - Respond
    - Reasons
    - Check answers
    - Flash message
tags:
  - AN029
---

## Hypothesis

If a candidate’s application is rejected, they have a chance to apply again using [Apply 2](/apply-for-teacher-training/apply-again).

Currently the provider is just given a [free text field to provide feedback](/manage-teacher-training-applications/as-launched-26-nov-2019#reject-application).

This is problematic because:

* providers may only give candidates a small amount of unstructured feedback
* different users are likely to provide varying levels of feedback to candidates
* it puts the onus on providers to type everything out manually on a repeated basis
* it puts the onus on providers to remember all the reasons they are being rejected

This means a candidate might not know why they were rejected and won’t know how to improve their chances if they apply again. It might also discourage them from applying again. It doesn't empower candidates to appeal decisions if providers make a mistake.

If providers can answer simple, structured questions
Then providers will find it far easier to provide consistent, useful feedback

We'll know this works when:

* providers answer the relevant questions
* more candidates reapply
* candidates avoiding applying to same provider if the provider says they won't accept future applications from them

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}
