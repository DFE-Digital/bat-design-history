---
title: Declaring any safeguarding issues
description: Starting a conversation between providers and candidates about safeguarding issues.
date: 2020-02-20
tags:
  - safeguarding
related:
  items:
    - text: 'Provider research playback'
      href: https://docs.google.com/presentation/d/1Im8T9MkiuyvPnkHa4tOeZU9M-Sl_E10Zkv2mrn6lEJY/edit#slide=id.p
---

Teacher training providers need to recruit candidates who are safe to work with children and young people. Providers use various sources of evidence to make a judgement on this.

Despite carrying out checks, providers want candidates to be open about any potential safeguarding issues (such as criminal convictions) early on in their application.

Encouraging candidates to disclose potential issues in the application form is essential so that providers can:

* tell the candidate whether they should continue with their application
* build trust with candidates who do have something to declare but can still teach
* save time and money
* reduce safeguarding risks prior to doing official checks
* reduce the chance of reputational damage

Our [initial design for the safeguarding section of the application form](/apply-for-teacher-training/suitability-to-work-with-children#your-suitability-to-work-with-children) aimed to meet these provider needs.

However, we also need to consider how candidates respond to this section of the application form.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Hypothesis

### Context

We carried out user research with candidates on the [initial design of the safeguarding section of the applcation form](/apply-for-teacher-training/suitability-to-work-with-children#your-suitability-to-work-with-children).

Our research was limited due to the difficulty of recruiting candidates who have convictions or cautions, who have been banned from working with children or who have been removed from teacher training in the past due to unprofessional behaviour.

However, we were able to observe a few pain points for candidates. The content caused candidates to be uncertain about:

* what sort of information to declare (someone mentioned depression, which isn't the sort of thing we were looking for)
* why we're asking about this
* whether they should be open or not

### Our hypotheses

1. If we list the checks providers carry out
Then candidates will know what sort of information to declare
Because they'll understand what information providers are looking for

2. If we use more precise language (such as safeguarding)
Then candidates will know why we're asking about this
Because there will be less potential for misinterpretation

3. If we emphasise that declaring something is about starting a conversation
Then candidates will be more likely to be open
Because they'll be reassured that it doesn't necessarily mean an automatic rejection

![Screenshot of new design for declaring any safeguarding issues.](new-design-for-declaring-any-safeguarding-issues.png "New design for declaring any safeguarding issues")

### How will we know this works?

We’ll know this works when candidates start sharing relevant information in the live service.
