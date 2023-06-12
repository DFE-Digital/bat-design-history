---
title: Emailing accredited bodies when they have been added to a lead school or their permissions have changed
description: We created three notification emails to let accredited bodies know about changes to permissions
date: 2022-05-19
tags:
  - accredited providers
  - emails
  - permissions
related:
  items:
    - text: Giving lead schools the ability to manage permissions for their accredited bodies
      href: /publish-teacher-training-courses/giving-lead-schools-the-ability-to-manage-permissions-for-their-accredited-bodies/
    - text: Giving accredited bodies the ability to manage courses they ratify
      href: /publish-teacher-training-courses/giving-accredited-bodies-the-ability-to-manage-courses-they-ratify/
---

{% from "email/macro.njk" import appEmail %}

<!-- markdownlint-disable MD001 MD025 -->

We recently introduced a way for lead schools to [manage permissions for their accredited bodies](/publish-teacher-training-courses/giving-lead-schools-the-ability-to-manage-permissions-for-their-accredited-bodies/).

As part of this work, we need to notify the accredited body when:

- they are added to a lead school as an accredited body
- the lead school changes the accredited body’s permissions
- the lead school removes the accredited body relationship

## What we changed

We have added three new notification emails in Notify that will be sent automatically depending on the action taken by the lead school.

### Accredited body added

When a lead school user adds an accredited body to their account, all users of the accredited body will receive a notification email.

{{ appEmail({
  subject: "((provider_name)) has added your organisation as an accredited body",
  content: "

Dear colleague,

((provider_name)) has added your organisation as an accredited body in Publish teacher training courses.

When the training partner adds you as the accredited body for their courses, you’ll be able to view courses in ‘Training partners’ in your account.

Sign in at https://www.publish-teacher-training-courses.service.gov.uk.

If you have any questions, contact ((provider_name)).

# Get help

Get help, report a problem or give feedback at becomingateacher@digital.education.gov.uk

The Becoming a Teacher team

  "
}) }}

### Permissions changed

When a lead school user adds or removes any permissions for an accredited body, all users at the accredited body will receive a notification email.

{{ appEmail({
  subject: "((provider_name)) has changed your permissions",
  content: "

Dear colleague,

((provider_name)) has changed your permissions for their courses.

To see which permissions have been added, updated or removed, sign in at https://www.publish-teacher-training-courses.service.gov.uk and go to ‘Training partners’.

If you have any questions, contact ((provider_name)).

# Get help

Get help, report a problem or give feedback at becomingateacher@digital.education.gov.uk

The Becoming a Teacher team

  "
}) }}

### Accredited body removed

When a lead school user removes an accredited body from their account, all users at the accredited body will receive a notification email.

A lead school user can only remove an accredited body that has not been added to a published course.

{{ appEmail({
  subject: "((provider_name)) has removed your organisation as an accredited body",
  content: "

Dear colleague,

((provider_name)) has removed your organisation from their account in Publish teacher training courses.

This means you will no longer have access to their courses from ‘Training partners’ in your account.

If you have any questions, contact ((provider_name)).

# Get help

Get help, report a problem or give feedback at becomingateacher@digital.education.gov.uk

The Becoming a Teacher team

  "
}) }}


## Further considerations

We need to investigate if there is a need to allow users of the accredited body to turn off permissions notifications.

<!-- markdownlint-enable MD001 MD025 -->
