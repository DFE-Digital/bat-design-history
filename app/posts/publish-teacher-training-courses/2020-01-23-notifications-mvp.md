---
title: Notifications MVP
description: Identifying an initial set of notifications and the critical user flows required to manage notifications in Publish teacher training courses
date: 2020-01-23
tags:
 - PN003
 - notifications
 - emails
---
UCAS provided email notifications to it's users. This functionality is yet be introduced to Publish teacher training courses (Publish). To address this, we established an introductory set of notifications to satisfy our user’s critical needs.

We learned through the [accredited bodies research](/publish-teacher-training-courses/accredited-bodies-research-round-2#a-need-for-notifications) that there was a need for notifications to be sent to accredited bodies about changes made in Publish.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

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

- opt in and opt out of notifications
- update notifications settings (change email address etc)

These tasks were deemed outside of our MVP and would be managed manually, with users contacting support, [becomingateacher@digital.education.gov.uk](mailto:becomingateacher@digital.education.gov.uk).

## Email template: A course has a basic detail change

[Trello card](https://trello.com/c/Xnoghg3q/2006-s-notify-accredited-body-users-that-something-has-changed-on-a-course)

{% set template1 %}
Dear colleague,

A change has been made in Find postgraduate teacher training to a course that you’re listed as the accredited body for.

((provider_name)) changed the ((attribute_changed)) of ((course_name)) (((course_code))) from “((original_value))” to “((updated_value))”. The change was made at ((attribute_change_datetime)).

View the course at ((course_url)).

If you have any questions about this, please notify your contact at ((provider_name)).

To stop receiving these notifications, or to update your settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.

Regards,
The Becoming a Teacher team

{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Course ((course_name)) (((course_code))) has been updated",
  content: template1
}) }}

## Email template: A course has been published

[Trello card](https://trello.com/c/KbHLq4Pq/3076-m-send-notification-when-a-course-has-been-created)

{% set template2 %}
Dear colleague,

A new course, which you’re listed as the accredited body for, has been published to Find postgraduate teacher training.

((provider_name)) created ((course_name)) (((course_code))) in Publish teacher training courses. It was published to Find at ((create_course_datetime)).

View the course at ((course_url)).

If you have any questions about this, please notify your contact at ((provider_name)).

To stop receiving these notifications, or to update your settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.

Regards,
The Becoming a Teacher team
{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Course ((course_name)) (((course_code))) has been published",
  content: template2
}) }}

## Email template: A course has been created

{% set template6 %}
Dear colleague,

A new course has been created in Publish teacher training courses, and your organisation has been added as the accredited body for it.

((provider_name)) created ((course_name)) (((course_code))) at ((create_course_datetime)). The course has not yet been published on Find postgraduate teacher training. You’ll receive a notification if it is published.

View the course at ((publish_url)).

If you have any questions about this, please notify your contact at ((provider_name)).

To stop receiving these notifications, or to update your settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.

Regards,
The Becoming a Teacher team
{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Course ((course_name)) (((course_code))) has been created",
  content: template6
}) }}

## Email template: A course has been withdrawn

{% set template3 %}
Dear colleague,

A course, which your organisation is the accredited body for, has been withdrawn from Find postgraduate teacher training.

((provider_name)) withdrew ((course name)) (((course_code))) in Publish teacher training courses, at ((attribute_change_datetime)).

This course is no longer visible on Find and candidates cannot apply to it. It also cannot be republished or reopened to applicants in the current cycle.

You can view the withdrawn course in Publish at ((course url)).

If you have any questions about this change, please notify your contact at ((provider_name)).

To stop receiving these notifications, or to update your settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.

Regards,
The Becoming a Teacher team
{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Course ((course_name)) (((course_code))) has been withdrawn",
  content: template3
}) }}

## Email template: Your organisation has been added as the accredited body

{% set template4 %}
Dear colleague,

Your organisation has been added as the accredited body for a course in Find postgraduate teacher training.

The accredited body for ((course_name)) (((course_code))) was previously ((old accredited body)). This was changed in Publish teacher training courses by ((provider_name)) at ((attribute_change_datetime)).

View the course at ((course_url)).

If you have any questions about this, please notify your contact at ((provider_name)).

To stop receiving these notifications, or to update your settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.

Regards,
The Becoming a Teacher team
{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "You are now listed as the accredited body for ((course_name)) (((course_code)))",
  content: template4
}) }}

## Email template: Your organisation has been removed as the accredited body

{% set template5 %}
Dear colleague,

Your organisation has been removed as the accredited body for a course in Find postgraduate teacher training.

The accredited body for ((course_name)) (((course_code))) is now ((new accredited body)). The change was made by (provider_name) in Publish teacher training courses at ((attribute_change_datetime)).

View the course at ((course_url)).

If you have any questions about this, please notify your contact at ((provider_name)).

To stop receiving these notifications, or to update your settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.

Regards,
The Becoming a Teacher team
{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Course ((course_name)) (((course_code))) has a new accredited body",
  content: template5
}) }}

## Roadmap

Next steps will include:

- A notifications pilot with a small number of providers who have expressed a key interest in receiving notifications.
- A diary study conducted with the pilot participants.
- Design and research of "manage notifications" functionality for Publish.

*[UCAS]: Universities and colleges admissions service
