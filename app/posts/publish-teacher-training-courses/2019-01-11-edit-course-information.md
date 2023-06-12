---
title: Course page – 11 January iteration
description: Edit course information, update the status column
date: 2019-01-11
tags:
  - courses
screenshots:
  items:
    - Published course
    - Published with unpublished changes
    - Draft course
    - New course
    - Course with publish errors
    - Change course information
    - Confirm answers (for comparison)
    - Organisation
---

<!-- markdownlint-disable MD051 -->

An iteration on the [current course page](/publish-teacher-training-courses/enrichment-sept-6#course) which:

- replaces UCAS course information with a new course information section
- updates the status column to match the [latest course table](/publish-teacher-training-courses/publish-states)
- condenses the display of information to show more on the page
- aligns more closely with the ‘[check your answers](https://design-system.service.gov.uk/patterns/check-answers/)’ pattern, used by the [confirm page](#confirm-answers-for-comparison)
- removes the training locations section in favour of a shorter list at the to

## Changing course information

At the moment courses can only be enriched in Publish teacher training courses (Publish). Course facts/details/features/information (we’re not sure what to call it) are set and managed in UCAS web-link. As part of the UCAS transition we’ve designed a [new course wizard](/publish-teacher-training-courses/new-course), which ends in a [confirmation page](#confirm-answers-for-comparison).

Our current hypothesis is that editing course information should follow the same pattern as the wizard, which has tested well. Sometimes a new answer will mean other parts of the course must be changed – eg changing level from secondary to primary would mean a change to the subject.

### Should all course information be editable?

Fundamentally changing an already published course, which people have applied to, means people will have applied to something different to what’s advertised. Consider a course that changes subject, or accredited body.

The integrity of the course needs to be maintained, while at the same time it must be easy for providers to fix genuine mistakes – consider a course setup with the wrong accredited body.

Options include:

- edit anything, but put the onus on providers to do the right thing (eg a checkbox confirming that providers will contact anyone who has applied to this course)
- edit anything, but when changes are fundamental, create a new course that supercedes the old one (this is the process providers follow on UCAS – they create a new course that’s correct and suspend the old one)
- only allow editing up until the course has been published
- only allow editing of certain aspects after the course has been published

## Status column changes

An iteration on the [original design](/publish-teacher-training-courses/publish-changes/iteration-aug-15) to bring it inline with [new publish workflow changes](/publish-teacher-training-courses/publish-states).

The new design:

- changes the second draft status to ‘Published *’, with ‘* unpublished changes’. The previous draft state was universally misunderstood – it’s live but has unpublished changes, people thought it was not live.
- adds ‘Is it on Find?’, ‘Applications’ and ‘Vacancies’ labels to provide the same information as the course table
- removes the ‘View on website’ section, replaced with ‘Is it on Find?’
- moves the audit trail (eg when published, when saved) details to the bottom

<!-- markdownlint-enable MD051 -->

*[UCAS]: Universities and colleges admissions service
