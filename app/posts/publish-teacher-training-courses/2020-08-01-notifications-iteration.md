---
title: Notifications iteration
description: Iterating the notifications we send to accredited bodies
date: 2020-08-01
---

{% from "email/macro.njk" import appEmail %}

Publish sends notifications to accredited bodies so that they can keep student record systems up to date and in sync with UCAS.

Our [first round of notification templates](/publish-teacher-training-courses/notifications-mvp/) did not address all of their needs.

The [generic notification template](/publish-teacher-training-courses/notifications-iteration/#course-updated) was not flexible enough to address many of the changes made in Publish. In particular, it could not accommodate a scenario when more than one thing changed, or when part of a thing changed.

## Next steps

We need to understand more about the implications of switching off our sync with UCAS. How does this affect accredited bodies’ needs for notifications?

## Email templates

### Course updated

{{ appEmail({
  subject: "((course_name)) (((course_code))) has been updated",
  content: "Dear ((candidate))

Your references did not come back in time
Your referees did not respond in time for courses starting in the 2020 to 2021 academic year.

You can update your referees and apply again for courses starting in the 2021 to 2022 academic year.

((dashboard_url))

Get support
We’re here to help you get a place on a course. Call Get Into Teaching for free on 0800 389 2500 or chat to an adviser online:

https://getintoteaching.education.gov.uk/contacts

For any technical issues using Apply for teacher training, contact us at becomingateacher@digital.education.gov.uk"
}) }}

### Course published

{{ appEmail({
  subject: "Course ((course_name)) (((course_code))) has been published",
  content: "Dear colleague,

A new course, which your organisation is the accredited body for, has been added to Find postgraduate teacher training.

((provider_name)) created the course ((course_name)) (((course_code))) in Publish teacher training courses. It was added to Find at ((create_course_datetime)).

View the course at ((course_url)).

If you have any questions about this, please notify your contact at ((provider_name)).

To stop receiving these notifications, or to update your settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.

Regards,
The Becoming a Teacher team"
}) }}

### Course withdrawn

{{ appEmail({
  subject: "((course_name)) (((course_code))) has been withdrawn",
  content: "Dear colleague,

A course, which your organisation is the accredited body for, has been withdrawn from Find postgraduate teacher training.

((provider_name)) withdrew ((course_name)) (((course_code))) in Publish teacher training courses, at ((withdraw_course_datetime)).

This course is no longer visible on Find and candidates cannot apply to it. It also cannot be republished or reopened to applicants in the current cycle.

If you have any questions about this change, please notify your contact at ((provider_name)).

To stop receiving these notifications, or to update your settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.

Regards,
The Becoming a Teacher team"
}) }}

### Course location updated

{{ appEmail({
  subject: "((course_name)) (((course_code))) has been updated",
  content: "Dear colleague,

A course in Find postgraduate teacher training, which your organisation is the accredited body for, has been updated.

((provider_name)) changed the location of ((course_name)) (((course_code))) at ((sites_updated_datetime)).

Location has been changed from “((previous_site_names))” to “((updated_site_names))”.

View the course at ((course_url)).

If you have any questions about the change, please notify your contact at ((provider_name)).

To stop receiving these notifications, or to update your settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.

Regards,
The Becoming a Teacher team"
}) }}

### Course subject change

{{ appEmail({
  subject: "((previous_course_name)) (((course_code))) has been updated",
  content: "Dear colleague,

A course in Find postgraduate teacher training, which your organisation is the accredited body for, has been updated.

((provider_name)) made changes to ((previous_course_name)) (((course_code))) in Publish teacher training courses at ((subject_change_datetime)).

The subject has been changed from “((previous_subjects))” to “((updated_subjects))”. As a result, the title of the course has also changed, from “((previous_course_name))” to “((updated_course_name))”.

View the course at ((course_url)).

If you have any questions about the change, please notify your contact at ((provider_name)).

To stop receiving these notifications, or to update your settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.

Regards,
The Becoming a Teacher team"
}) }}

### Course vacancies all opened or closed

{{ appEmail({
  subject: "Vacancies ((vacancies_filled??filled))((vacancies_opened??open)) for ((course_name)) (((course_code)))",
  content: "Dear colleague,

((vacancies_filled??A course in Find postgraduate teacher training, which your organisation is the accredited body for, no longer has vacancies.))((vacancies_opened??A course in Find postgraduate teacher training, which your organisation is the accredited body for, has been updated to show that it now has vacancies.))

((provider_name)) ((vacancies_filled??closed))((vacancies_opened??opened)) applications to ((course_name)) (((course _code))) in Publish teacher training courses at ((vacancies_updated_datetime)). ((vacancies_filled??This course will not be visible in Find unless users specifically search for courses without vacancies.))((vacancies_opened??This course is now visible in Find.))

View the course at ((course_url)).

If you have any questions about this, please notify your contact at ((provider_name)).

To stop receiving these notifications, or to update your settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.

Regards,
The Becoming a Teacher team"
}) }}

### Some course vacancies opened or closed

{{ appEmail({
  subject: "Vacancy status updated for ((course_name)) (((course_code)))",
  content: "Dear colleague,

A course in Find postgraduate teacher training, which your organisation is the accredited body for, has had its vacancy status updated.

((provider_name)) made the changes to ((course_name)) (((course _code))) in Publish teacher training courses at ((vacancies_updated_datetime)).

Applications were opened at: ((vacancies_opened)).

Applications were closed at: ((vacancies_closed)).

View the course at ((course_url)).

If you have any questions about this, please notify your contact at ((provider_name)).

To stop receiving these notifications, or to update your settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.

Regards,
The Becoming a Teacher team"
}) }}

*[UCAS]: Universities and colleges admissions service
