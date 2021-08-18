---
title: Managing notifications – feedback from universities
description: Changes to notifications following research with HEIs.
date: 2020-05-04
related:
  items:
    - text: Research playback
      href: https://docs.google.com/presentation/d/1uefvdokUVYdg0vRGKdAz1pq3bS8t78DUcUZ-hQ4dhY4/
tags:
  - PN003
---
As a follow up to the [notifications diary study](/publish-teacher-training-courses/managing-notifications/) we iterated the notifications email templates and asked 3 universities to give feedback.

We hoped to validate the current [notification templates](https://docs.google.com/document/d/1_f9sqKJ8TQt2L9mSngnLqSEDjJZ6PXC__EZCnm0fgCA/edit?ts=5e997869) and discover new user needs.

Accredited bodies were asked to provide feedback on notifications initiated by the following events:

1. A course has a basic detail change
2. A course is created
3. A course is published
4. A course is withdrawn
5. There are no more vacancies in a course (different from withdrawing)
6. A course’s accredited body has changed

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs('PN003')}) }}

## Who we tested with

* UCL
* Middlesex University
* University of Bedfordshire

## What we learned

### General feedback

In general the templates were received well with participants.

> I had a look at the template emails and it looked fine and simple enough. The wording seems to flow all across the different topics and is tailored to its specific need or requirement.

One participant queried the way we address recipients.

> Dear colleague could be more personalised but this is very insignificant.

### Notification for when a course is withdrawn

Some participants queried the amount of content we included in the templates and suggested that identifying the topic of the notification was not obvious.

> Break up the second paragraph - lots of information in it. No point saying 'contact the school' if the course has been withdrawn cos there's not much you can do about it!

> These are really important, it would be useful to have something in bold that alerts you straight away to what the email is about.

### Notification for when a course is created

Some accredited bodies need to verify a course before it is Published. This need was first identified in [previous research](/publish-teacher-training-courses/accredited-bodies-research-round-3/#access-roles-and-permissions) conducted with accredited bodies.

> Ok. I think that this is very clear as to the new course that has been created but not yet published - which partner it relates to etc. If I received this email I would check a list of agreed places with that specific partner just to make sure it is on our list of agreed subjects.

### Notification for when the accredited body for a course changes

The notification for when a course’s accredited body has changed has been descoped for now. The task can currently only happen via a support request and as part of this process we ensure both the previous and new accredited body are aware of the change.

The notification will be enabled once providers have the ability to perform this task themselves.

> This is also a very clear and useful update. We need to know when our partner schools have decided to remove something from Find and if I did have a query, it is clear which partner we are talking about.

> This is also very clear but I would be a bit concerned to receive it unless one of our partners had made a mistake on their profile and we wanted them to make that change. If a Lead School is working with several university partners they may make a mistake on their profile regarding which subject is linked to which partner.  If we spotted a mistake at UCL we would ask the partner to check their profile and it would then be useful to see this email to confirm that the correction has been made.
