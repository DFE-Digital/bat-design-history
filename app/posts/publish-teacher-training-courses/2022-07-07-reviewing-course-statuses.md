---
title: Reviewing course statuses
description: We reviewed the course statuses and found ways to improve them
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

[![Current course status flow](course-statuses--current.png "Current course status flow")](/publish-teacher-training-courses/reviewing-course-statuses/course-statuses--current.png)

### Empty

An ‘Empty’ status occurs when the user creates a new course through the ‘Add course’ flow, but the user has not added information to the description fields.

Users cannot publish courses with the empty status until they complete all required fields.

### Draft

A ‘Draft’ status occurs when the user has completed the mandatory description fields but they have not yet published the course.

Draft courses can be published and deleted. During the rollover period, users can manually rollover draft courses for publishing in the next recruitment cycle.

### Published

A ‘Published’ status occurs when the user has published the course to Find. This status could be at any time in the recruitment cycle.

A course can have a ‘Published’ status but not be live on Find if a user has published it before the start of the next recruitment cycle. It can also have this status if it’s live on Find but not yet open to applications.

When a course is published, we prevent some changes from being made. For example, users cannot change the fee type or accredited body on published courses.

Every July, we roll over published courses into the next recruitment cycle, where they can be deleted or published.

Published courses can be withdrawn and closed. Withdrawing a course removes it from Find. Closing a course stops candidates from applying, for example, if the course is full.

#### Published with unpublished changes

A ‘Published with unpublished changes’ status occurs when the user has saved changes to a published course. The changes remain unpublished until the user publishes the course again.

This status is problematic as users may not realise they must publish the course again before we show their changes on Find.

We do not show users' changes to the descriptions in Publish. This could confuse users if they cannot remember what they changed or if other users of the same account cannot view the changes.

### Withdrawn

A ‘Withdrawn’ status occurs when the user has decided that they will no longer be running the course in the next academic cycle and want to remove it from Find.

Withdrawing a course impacts its availability on other services.

Withdrawn courses cannot be changed or republished during the current recruitment cycle.

Every July, we roll over withdrawn courses into the next recruitment cycle. Rolled over courses can be deleted or published.

### Rolled over

A ‘Rolled over’ status occurs when:

- published and withdrawn courses have been automatically rolled over
- a user has decided that an empty, draft or rolled over course in the current cycle needs rolling over

This status is identical to ‘Draft’, but we use it to distinguish courses from a previous recruitment cycle with new ‘Draft’ courses in the current recruitment.

‘Rolled over’ shows users that we copied the course from one recruitment cycle to the next.

Rolled over courses can be published and deleted.

## Improving the course statuses

We looked at the 6 course statuses in Publish and found that some:

- are named ambiguously
- are not required or overly complicated
- have unclear functionality and are used incorrectly

To improve the way course status work, we need to remove, change and add to some of the statuses.

[![Proposed course status flow](course-statuses--proposed.png "Proposed course status flow")](/publish-teacher-training-courses/reviewing-course-statuses/course-statuses--proposed.png)

### Empty

The ‘Empty’ course status serves a limited purpose, and we will remove it.

Courses created by users will be in the ‘Draft’ status instead.

### Scheduled

We will add ‘Scheduled’ as a new status for when a course has been published but is not yet live on Find.

### Published with unpublished changes

We will remove ‘Published with unpublished changes’. All changes will be saved and published immediately, simplifying the editing workflow.

### Closed

We will add a ‘Closed’ status for published courses that are no longer open to applications. Users can reopen these courses in the same academic year.

### Withdrawn

We will improve the ‘Withdrawn’ status so that it’s clear to users that this status means that we will remove courses from Find, and users cannot republish them.

## Further considerations

In future, we’ll also consider introducing 2 new statuses:

- in review
- scheduled

### In review

With the removal of the ‘Published with unpublished changes’ status, we could add an ‘In review’ status. This would allow users in the same organisation to request that another user review saved course content before publishing. This process may become important if we implement organisational and user permissions.

### Scheduled

We may want to introduce a ‘Scheduled’ status to distinguish between courses published but not yet live on Find and courses published and live on Find.

As we introduce a new ‘Closed’ status, we may want to improve the ‘Withdraw’ interaction to clarify to the user that this status is for courses that are no longer running in that academic year.
