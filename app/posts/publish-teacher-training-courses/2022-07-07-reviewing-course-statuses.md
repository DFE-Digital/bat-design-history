---
title: Reviewing course statuses
description:
date: 2022-07-07
---

Courses in Publish postgraduate teacher training courses (Publish) are assigned a status.

Statuses are helpful to users as they allow users to see where the course is in its publishing lifecycle.

Statuses also enable DfE to analyse data to:

- understand user behaviour
- improve the service

## How course statuses work

When we created Publish, we adopted the course statuses from the service’s predecessor, UCAS.

Course statuses:

- indicate the current status of the course - for example, draft, published and withdrawn
- enable different actions to be taken at various points - for example, users can publish and delete draft courses, and they can withdraw published courses
- affect how the course behaves and appears in other services
- can be used for analysis by teams within the DfE

Each course status consists of:

- a name
- a trigger to make a course enter that status
- actions for courses in that status
- interactions with other services

### Empty

An ‘Empty’ status occurs when the user creates a new course through the ‘Add course’ flow, but the user has not added information to the description fields.

Empty courses cannot be published until all required fields are completed.

### Draft

A ‘Draft’ status occurs when the user has completed the mandatory description fields, but they have not yet published the course.

Draft courses can be published and deleted. During the rollover period, users can manually rollover draft courses for publishing in the next recruitment cycle.

### Published

A ‘Published’ status occurs when the user has published the course to Find. This status could be at any time in the recruitment cycle.

A course can have a ‘Published’ status but live on Find if it’s published before the start of the next recruitment cycle. It can also have this status if it's live on Find, but not yet open to applications.

When a course is published, we prevent some changes from being made. For example, users cannot change the fee type or accredited body on published courses.

Each year, we roll over published courses into the next recruitment cycle, where they can be deleted or published.

Published courses can be withdrawn and closed. Withdrawing a course removes it from Find. Closing a course stops candidates from applying, for example, if the course is full.

#### Published with unpublished changes

A ‘Published with unpublished changes’ status occurs when the user has saved changes to a published course. The changes remain unpublished until the user publishes the course again.

This status is problematic as users may not realise they must publish the course again before we show their changes on Find. Additionally, we do not show what changes have been made to the descriptions. This could cause confusion if the user cannot remember what they changed or if other users of the same account cannot view the changes.

### Withdrawn

A ‘Withdrawn’ status occurs when the user has decided that they will no longer be running the course in the next academic cycle and want to remove it from Find.

Withdrawing a course impacts its availability on other services.

Withdrawn courses cannot be changed or republished during the current recruitment cycle.

Every July, we roll over withdrawn courses into the next recruitment cycle. Rolled over courses can be deleted or published.

### Rolled over

A ‘Rolled over’ status occurs when:

- published and withdrawn courses have been automatically rolled over
- a user has decided that an empty, draft or rolled over course in the current cycle needs rolling over

This status is identical to ‘Draft’ but we use it to distinguish courses from a previous recruitment cycle with new ‘Draft’ courses in the current recruitment.

‘Rolled over’ shows users that we copied the course from one recruitment cycle to the next.

Rolled over courses can be published and deleted.

## Improving the course statuses

We looked at the 6 course statuses in Publish and found that some:

- are named ambiguously
- are not required or overly complicated
- have unclear functionality and risk being used incorrectly

To improve the way course status work, we need to remove, change and add to some of the statuses.

### Empty

The ‘Empty’ course status serves a limited purpose, and we will remove it.

When a course is created it will be ‘Draft’ instead.

### Scheduled

We will add ‘Scheduled’ as a new status for when a course has been published but is not yet live on Find.

### Published with unpublished changes

We will remove‘Published with unpublished changes’. All changes will be saved and published immediately, simplifying the editing workflow

### Closed

We will add a ‘Closed’ status for courses that are published but no longer open to applications. These courses may be reopened in the same academic year.

### Withdrawn

We will improve the ‘Withdrawn’ status so that it’s clear to users that this status means that courses will be removed from Find and cannot be republished.

## Further considerations

In future, we’ll also consider introducing 2 new statuses:

- in review
- scheduled

### In review

With the removal of the ‘Published with unpublished changes’ status, we could add an ‘In review’ status instead. This status would allow users of the same organisation to request that another user reviews saved course content before it is published. We would show the user reviewing the content what changes have been made. This process may become important if we implement organisational and user permissions.

### Scheduled

We may want to introduce a ‘Scheduled’ status to distinguish between courses published but not yet live on Find and courses published and live on Find.

As we introduce a new ‘Closed’ status, we may want to improve the ‘Withdraw’ interaction to clarify to the user that this status is for courses that are no longer running in that academic year.
