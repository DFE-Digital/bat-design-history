---
title: Giving accredited bodies the ability to manage courses they ratify
description: We added a way for accredited bodies to manage their training partners’ courses
date: 2022-05-04
tags:
  - PN014
  - PN016
screenshots:
  items:
    - text: Training partner course list with permissions
      src: training-partner--course-list-with-permissions.png
    - text: Training partner course list without any permissions
      src: training-partner--course-list-no-permissions.png
    - text: Training partner - published course with permissions
      src: training-partner--published-course-with-permissions.png
    - text: Training partner - published course without permissions
      src: training-partner--published-course-no-permissions.png
    - text: Training partner - draft course with permissions
      src: training-partner--draft-course-with-permissions.png
    - text: Training partner - draft course without permissions
      src: training-partner--draft-course-no-permissions.png
---

This work builds upon the changes we introduced to:

- allow [lead schools to manage their accredited body relationships](/publish-teacher-training-courses/managing-accredited-bodies-if-youre-a-lead-school/)
- give [lead schools the ability to manage permissions for their accredited bodies](/publish-teacher-training-courses/giving-lead-schools-the-ability-to-manage-permissions-for-their-accredited-bodies).

## User needs

The user needs this work aims to address are:

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## What we changed

We have updated the ‘Training partner’ section to show the actions permitted by the training partner.

Permitted actions include:

- Adding courses - this also includes deleting courses
- Changing courses
- Publishing courses
- Updating course vacancies
- Withdrawing courses

We made these changes so that users of the accredited body:

- do not also need to be members of their training partners to be able to manage courses they ratify
- can clearly see which permissions have been given to them

## How it works

By default, users of an accredited body can only view their training partner’s courses in the service.

If their training partner has given the accredited body permission, they may also be able to manage the training partner’s courses.

### Add courses permission

If they have the ‘Add course’ permission, we display an ‘Add course’ button on the course list and a ‘Delete course’ link on the course details page.

### Change courses permission

If they have the ‘Change course’ permission, we show change links on the course details pages.

Change links are also dependent on the status of the course. If the course is in ‘draft’, we show all change links. If the course is ‘published’, we show a subset of change links.

### Publish courses permission

If they have the ‘Publish course’ permission, we show a ‘Publish course’ button on the course details pages below the page heading.

### Withdraw courses permission

If they have the ‘Withdraw course’ permission, we show a ‘Withdraw course’ link on the course details pages below the page heading. The link sits next to the ‘Publish course’ button if present.

### Change course vacancies permission

If they have the ‘Change course vacancies’ permission, we show:

- the ‘Edit’ link in the vacancies column on the course list
- an ‘Edit vacancies’ link on the course details page
