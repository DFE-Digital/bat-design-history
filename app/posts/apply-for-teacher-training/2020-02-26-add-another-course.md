---
title: Add another course
description: Encourage candidates to add more courses at the start.
date: 2020-02-26
tags:
  - selecting courses
screenshots:
  items:
    - text: Add another course
      src: 01-add-another-course.png
    - text: Add another course one left
      src: 02-add-another-course-one-left.png
    - text: Course choices review
      src: 03-course-choices-review.png
related:
  items:
    - text: Prototype pull request
      href: https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training-prototype/pull/351
---

We don’t do a good job of informing candidates that they can apply for up to 3 courses on one application, and what will happen after making an application with fewer than 3 courses isn’t clear.

Part of this was intended – when Apply was launched most users couldn’t apply to 3 choices on the service – for a while there weren’t 3 courses. Now there are more providers and courses, and in certain regions we have good coverage, this can be encouraged.

## Hypotheses

If we give candidates a clear call to action to add another course after they’ve added one, then they'll add more of their choices earlier on, and the cost of needing to apply on UCAS will be smaller.

If we give candidates a clear indication of the number of courses they can add in their application, then they’ll apply to more, and won’t look to apply again after submitting their first application.

If we tell candidates they can’t add new choices after submitting their application, then they’ll put all of their choices in their first application.

## Design notes

* After adding first and second choices, we show them a prompt (this includes after adding from Find)
* After adding a third choice, we take them straight to the review screen
* Selecting "Add another course" takes users to the "Have you found a course" screen
* Selecting "No" takes users to the review page
* The no text includes "not at the moment" as this action is not final, users can add more later (before they submit)
* Guidance on 3 courses has been removed from the review screen in favour of the prompt
