---
title: Notifications MVP
description: Identifying an initial set of notifications and the critical user flows required to manage notifications in Publish.  
date: 2020-01-23
---
UCAS provided email notifications to it's users. This functionality is yet be introduced to Publish teacher training courses. To address this, we established an introductory set of notifications to satisfy our user’s critical needs.

We learned through the [accredited bodies research](https://bat-design-history.netlify.com/publish-teacher-training-courses/accredited-bodies-research-round-2#a-need-for-notifications) that there was a need for notifications to be sent to accredited bodies about changes made in Publish. 

## User needs

**As an accredited body**
I need to be notified of changes by providers in Publish to courses I accredit
So that I can keep my student record system up to date and in sync with UCAS.

## Critical notifications

Events that would initiate a notification were identified:

1. A course has a basic detail change
2. A course is created
3. A course is published
4. A course is withdrawn
5. There are no more vacancies in a course (different from withdrawing)
6. A course’s accredited body has changed

## Critical user journeys

User journeys required to facilitate notifications were identified:
The recipient needs to be able to:

* opt in and opt out of notifications
* update notifications settings (change email address etc)

These tasks were deemed outside of our MVP and would be managed manually, with users contacting support, [becomingateacher@digital.education.gov.uk](mailto:becomingateacher@digital.education.gov.uk).

## Email template: A course has a basic detail change

[Trello card](https://trello.com/c/Xnoghg3q/2006-s-notify-accredited-body-users-that-something-has-changed-on-a-course)

{% set template1 %}
Dear colleague,

A change has been made in Find postgraduate teacher training to a course that you’re listed as the accredited body for.

((provider_name)) changed the ((attribute_changed)) of ((course_name)) (((course_code))) from “((original_value))” to “((updated_value))“. The change was made at ((attribute_change_datetime)).

View the course at ((course_url)).

If you’re unhappy about this change, please notify your contact at ((provider_name)).

To stop receiving these notifications, or to update your settings, contact becomingateacher@digital.education.gov.uk, or reply to this email.

Regards,
The Becoming a Teacher team

{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Course [Course name] (code) has been updated",
  content: template1
}) }}

## Email template: A course has been created

[Trello card](https://trello.com/c/KbHLq4Pq/3076-m-send-notification-when-a-course-has-been-created)

{% set template2 %}
Dear colleague,

A new course, which you’re listed as the accredited body for, has been published to Find postgraduate teacher training.

((provider_name)) created ((course_name)) (((course_code))) in Publish teacher training courses. It was published to Find at ((create_course_datetime)).

View the course at ((course_url)).

If you’re unhappy about this, please notify your contact at ((provider_name)).

To stop receiving these notifications, or to update your settings, contact becomingateacher@digital.education.gov.uk, or reply to this email.

Regards,
The Becoming a Teacher team
{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Course [Course name] (code) has been created",
  content: template2
}) }}

## Roadmap

Next steps will include:

* A notifications pilot with a small number of providers who have expressed a key interest in receiving notifications.
* A diary study conducted with the pilot participants.
* Design and research of "manage notifications" functionality for Publish.     
