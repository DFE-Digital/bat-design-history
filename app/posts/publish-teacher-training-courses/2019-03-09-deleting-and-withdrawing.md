---
title: Deleting and withdrawing courses
description: And why there are both
date: 2019-03-09
screenshots:
  items:
    - Course that can be deleted
    - Delete this course
    - Course that can be withdrawn
    - Withdraw this course
    - A withdrawn course
---

Deleting a course entirely removes it, it will not be in the courses table. Providers can only delete courses that haven’t been published in this cycle. Deletions are soft – a developer should be able to restore a course that a provider deletes by mistake.

Withdrawing is for courses that have already been published. Withdrawing a course removes it from Find and closes applications. Providers cannot published it again in this cycle, they might need to reuse the course in a subsequent one. A developer should be able to re-publish a course withdrawn by mistake.

## Why both?

We hypothesise that the two actions meet different needs.

Deleting is for cleaning up your list of courses, usually around the time of rollover. The impact is relatively minor.

Withdrawing is for taking down a course that should not be applied to. It should remain in the courses table so that it’s clear what has been published this cycle and what people might have applied to. The course might run again in the future. Or it can be deleted in the next cycle.

We need to test these assumptions with users.
