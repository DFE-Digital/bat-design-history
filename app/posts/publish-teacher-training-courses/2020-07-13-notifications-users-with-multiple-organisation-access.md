---
title: Notifications for users with access to multiple organisations
description: Allowing accredited body users to choose which organisations they receive notifications about
date: 2020-07-13
tags:
  - notifications
  - organisations
  - accredited providers
  - training partners
screenshots:
  items:
    - Opt in with one partner school
    - Opt in with multiple partner schools
    - Confirmation of opt-in
---

In [previous research](/publish-teacher-training-courses/users-with-multiple-organisation-access/) into users with access to multiple organisations we identified that users who belong to an accredited body with multiple training providers needed more flexibility in their notifications settings.

## User need

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a user who belongs to an accredited provider with multiple training providers
  I need the ability to choose which organisations I receive notifications about
  So that I only get notified about specific events"
}) }}

### The ratio of accredited bodies with multiple training providers

| Number of accredited bodies | Number of training providers they accredited |
| --- | --- |
| 68 | 1 |
| 37 | 2 |
| 17 | 3 |
| 11 | 4 |
| 10 | 5 |
| 8 | 6 |
| 5 | 7 |
| 5 | 8 |
| 6 | 9 |
| 5 | 10 |
| 2 | 11 |
| 7 | 12 |
| 1 | 13 |
| 4 | 14 |
| 7 | 15 |
| 2 | 16 |
| 1 | 17 |
| 3 | 18 |
| 4 | 19 |
| 3 | 20 |
| 2 | 21 |
| 1 | 22 |
| 3 | 23 |
| 1 | 24 |
| 1 | 25 |
| 2 | 26 |
| 2 | 27 |
| 1 | 35 |
| 1 | 36 |

(Data from early August 2020)

## Design notes

This update includes:

- simplifying the language used in the page title [(View the original)](/publish-teacher-training-courses/accredited-bodies-new-features/#notifications-opt-in)
- updating content to list all available notifications
- the ability for multi-organisation users to specify which training providers they want to receive notifications about

When a training provider has multiple accredited bodies, the accredited body user who enables notifications should only receive notifications for the courses they are the accredited body for. They must not receive notifications for courses they are not attached to.

For example: Mary belongs to Suffolk and Norfolk Primary SCITT, who is the accredited body for some of Thorpe St Andrew School and Sixth Forms courses. The University of East Anglia is also an accredited body for some of Thorpe St Andrew School and Sixth Forms courses. Mary should not receive notifications about changes to courses from the University of East Anglia.

### Potential roadmap

- Consider in-app notifications
- Allow users to specify which particular notifications they receive
