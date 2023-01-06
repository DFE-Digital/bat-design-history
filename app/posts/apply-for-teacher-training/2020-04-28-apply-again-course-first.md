---
title: "Apply again: Choose a course first"
description: Reduce risk of candidates completing a second application for a course that is only available through UCAS.
date: 2020-04-28
tags:
  - apply again
screenshots:
  items:
    - text: Do you want to apply again?
      src: 01-do-you-want-to-apply-again.png
    - text: We suggest you choose a course first
      src: 02-we-suggest-you-choose-a-course-first.png
related:
  items:
    - text: Prototype PR
      href: https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training-prototype/pull/385
    - text: Trello
      href: https://trello.com/c/fiQBqrbp/1404-apply-2-initial-flow-choosing-a-course
---

There’s a gap in [the current design for applying again](/apply-for-teacher-training/applying-again-iteration). Users make a copy of their course and start amending bits of their application before they choose which course they want to apply to. This could lead to significant effort being spent on an application only to realise that they must apply to their chosen course via UCAS.

When making their first application we [advise candidates to choose a course first](/apply-for-teacher-training/dual-running#we-suggest-you-choose-a-course-first). We can do the same when applying again.

The “Do you want to apply again?” page now takes users to the “We suggest you choose a course first” page, before showing them their application.

If a candidate chooses a course first, and goes on to choose a course in a different phase or subject, then we could highlight to these users that they will need to update their subject knowledge and personal statement sections.

## Design notes

The interstitial has also been updated so that:

* we avoid using “copying” and present the journey more as a continuation
* it is more aspirational, giving hope that they can still get a place this year
