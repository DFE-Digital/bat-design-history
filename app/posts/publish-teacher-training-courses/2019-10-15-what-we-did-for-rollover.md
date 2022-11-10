---
title: Rollover – what we did in 2019
description: How we handled our first rollover period
date: 2019-10-15
screenshots:
  items:
    - Before rollover period
    - During rollover period
    - After rollover period
    - Courses for next cycle
    - Courses after old cycle closed but new cycle not yet open
    - Courses once cycle has opened
---

## What is rollover?

Rollover is the process of copying courses from the current cycle to the next.

The rollover period is the period in which a provider can edit two cycles – they are maintaining the courses that are currently live, and they are preparing new courses for the next cycle. We called these the ‘current cycle’ and the ‘next cycle’.

It began in July 2019 and ended when the UCAS application cycle ended – when no one could make a new application in Apply 2, on 25 September. From then on providers could not edit the earlier cycle, and Find was closed for a week, until the new cycle opened on Tuesday 2 October.

## What we did

Following research we ditched the [idea of a rollover wizard](/publish-teacher-training-courses/rollover-wizard). It tested poorly, and providers expressed a desire to change their answers. It was also a lot to build.

Instead we followed a model similar to UCAS, and familiar with providers: we created a new “cycle” and copied everything to it.

In a subsequent cycle, location names and addresses can change, new locations are added, provider names can change, contact details can change – pretty much everything could change.

So we copied:

- every provider
- every location for each provider
- every course for each provider
- the most recent enrichment for each course (published or draft)
- organisation details
- contact details

Each of these things could then be edited independently in each cycle. For example – a provider could be renamed only in the next cycle, courses could be added to the next cycle and vacancies could be edited in the current cycle.

In the next cycle we had to indicate that:

- courses would not go live until October
- publishing would mark them as ready
- tell them if a course would be on Find or not

[A write up of Publishing during rollover](/publish-teacher-training-courses/publishing-during-rollover)

Once the rollover period was enabled and providers could see two cycles, we notified users by email and with [a screen after logging in](https://github.com/DFE-Digital/publish-teacher-training/pull/430).

At the end of rollover we considered whether to allow read-only access to the 2019 cycle. This was a lot to build, and we were not sure of the needs. Instead we removed all access with the intention of adding a link to previous cycles if a need arose. As of mid-October, no one has requested to see last year’s courses.

## Settings for manage-courses-frontend

There are 3 settings in manage-courses-frontend:

- rollover – true or false, are we in a rollover period (ie do we show multiple cycles)
- current_cycle – a year, the current cycle
- current_cycle_open – is the current cycle open, if it’s not it’s assumed it has not opened yet

When starting rollover, once all content has been copied, the rollover flag is switched to true.

When ending rollover, ie when the current cycle ends, the next cycle is promoted to be the current one – the year is increased, rollover is false and the current_cycle_open flag is switched to false. (see this [commit](https://github.com/DFE-Digital/publish-teacher-training/pull/657/commits/c8b85d5bbd2bf27d497e431dbb12a2379bebb7c4) in a related [pull request](https://github.com/DFE-Digital/publish-teacher-training/pull/657))

When the cycle opens, the cycle is marked as open ([Pull request](https://github.com/DFE-Digital/publish-teacher-training/pull/666))

[Rollover settings on Github](https://github.com/DFE-Digital/publish-teacher-training/blob/baeaf4f28a51dea68c05f7641b03d65f831ecaf0/config/settings.yml#L46-L48)

*[UCAS]: Universities and colleges admissions service
