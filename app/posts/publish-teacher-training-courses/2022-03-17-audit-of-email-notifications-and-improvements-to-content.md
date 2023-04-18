---
title: Audit of email notifications and improvements to content
description: We documented which emails are sent and when. We also improved the content to make the notifications clearer and more concise
date: 2022-03-16
tags:
  - PN003
related:
  items:
    - text: Notifications iteration
      href: /publish-teacher-training-courses/notifications-iteration/
    - text: Notifications MVP
      href: /publish-teacher-training-courses/notifications-mvp/
---

{% from "email/macro.njk" import appEmail %}

<!-- markdownlint-disable MD001 MD025 -->

We conducted a content audit of Publish notification emails. This involved:

- documenting which emails are sent and when
- improving the content of the emails
- future considerations for notification emails

### User need

The user need that email notifications aim to address is:

{% set need = collections['user-need'] | slugs(tags) | first %}

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  title: need.data.title,
  description: need.templateContent,
  url: need.url,
  status: need.data.status
}) }}

As the need to keep records in sync with UCAS is no longer applicable, we will reassess the user need and conduct more user research.

We will look at how the notifications are currently being used and assess their value and effectiveness.

## Documenting which emails are sent and when

We started this work by listing all email notification templates in a spreadsheet. This helped us to organise the folders in GOV.UK Notify and remove templates that are no longer in use.

We documented when each notification is sent in our Publish user journey maps and included screenshots.

We currently only send notification emails to accredited bodies. There are eight active notification email templates.

## Improving the content of the emails

Some of the notification emails had not been updated following changes to the service. We wanted to make sure the content was consistent and look at other improvements that could be made.

### What we changed

We updated the emails so that:

-	all terminology is consistent with the service
-	the email contains a single message and is as short as possible
-	users can quickly see which provider the notification is referring to

We also:

-	moved the link to change notifications settings to below the sign-off
-	removed the ‘updated at time/date’ information as we felt it was unnecessary - the email is sent around the same time any change is made

### Course subject change

We send this email notification when a user changes the course subject.

When a user changes the subject, the title of the course also changes.

Saving the change updates the course on Find postgraduate teacher training (Find) without the need to re-publish the course.

As we are notifying users about this in the ‘Course updated’ email we will remove the ‘Course subject change’ notification.

{{ appEmail({
  subject: "((previous_course_name)) (((course_code))) subject has been updated",
  content: "

Dear colleague,

((provider_name)) made changes to ((previous_course_name)) (((course_code))) - your organisation is the accredited body for this course.

The subject has been changed from “((previous_subjects))” to “((updated_subjects))”. As a result, the title has also changed from “((previous_course_name))” to “((updated_course_name))”.

View the course at ((course_url)).

If you have any questions, contact ((provider_name)).

Regards,
The Becoming a Teacher team

---

To change your notification settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.
  "
}) }}

### Course updated

We send this email notification when a user changes the course:

- subject
- age range
- outcome
- study mode – full-time or part-time

Saving the change updates the course on Find without the need to re-publish the course.

{{ appEmail({
  subject: "((course_name)) (((course_code))) has been updated",
  content: "

Dear colleague,

((course_name)) (((course_code))) has been updated - your organisation is the accredited body for this course.

((provider_name)) changed the ((attribute_changed)) from “((original_value))” to “((updated_value))“.

View the course at ((course_url)).

If you have any questions, contact ((provider_name)).

Regards,

The Becoming a Teacher team

---

To change your notification settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.
  "
}) }}

### Course withdrawn

We send this notification when a user withdraws a course. The course will no longer be viewable on Find and it cannot be republished until the next recruitment cycle.

If a user withdraws a course, they are not able to reinstate it themselves - they need to contact the Publish support team.

{{ appEmail({
  subject: "((course_name)) (((course_code))) has been withdrawn",
  content: "

Dear colleague,

((provider_name)) withdrew ((course_name)) (((course_code))) - your organisation is the accredited body.

This course is no longer visible on Find and candidates cannot apply to it. It also cannot be republished or reopened to applicants in the current cycle.

If you have any questions, contact ((provider_name)).

Regards,

The Becoming a Teacher team

---

To change your notification settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.
  "
}) }}

### Course published

We send this email notification when a user:

- publishes a course for the first time on Find
- updates a course after making changes to any of the fields in the ‘Course description’ tab, for example, ‘About this course’

When a user makes a change to a course description field, the status of the course changes to ‘Published *with unpublished changes’. The user must publish the changes to update the course on Find.

{{ appEmail({
  subject: "((course_name)) (((course_code))) has been published",
  content: "

Dear colleague,

((provider_name)) published ((course_name)) (((course_code))) - your organisation is the accredited body for this course.

View the course at ((course_url)).

If you have any questions, contact ((provider_name)).

Regards,

The Becoming a Teacher team

---

To change your notification settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.
  "
}) }}

### Sites updated

We send this email notification when a user changes which locations are assigned to a course.

Users can change which locations are assigned to a course in the ‘Basic details’ section of the course details.

Saving the change updates the course on Find without the need to re-publish the course.

We do not send a notification when:

- a new location is added to the organisation
- details of an existing location are changed - for example, the location address

{{ appEmail({
  subject: "Location changed for ((course_name)) (((course_code)))",
  content: "

Dear colleague,

((provider_name)) changed the location of ((course_name)) (((course_code))) - your organisation is the accredited body for this course.

The location has been changed from “((previous_site_names))” to “((updated_site_names))”.

View the course at ((course_url)).

If you have any questions, contact ((provider_name)).

Regards,

The Becoming a Teacher team

---

To change your notification settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.
  "
}) }}

### Vacancies partially updated

We send this email when a user changes the locations on the ‘Edit vacancies’ page.

Saving the change updates the course on Find without the need to re-publish the course.

{{ appEmail({
  subject: "Vacancy status updated for ((course_name)) (((course_code)))",
  content: "

Dear colleague,

((provider_name)) changed the vacancy status of ((course_name)) (((course _code))) - your organisation is the accredited body for this course.

Applications were opened at: ((vacancies_opened)).

Applications were closed at: ((vacancies_closed)).

View the course at ((course_url)).

If you have any questions, contact ((provider_name)).

Regards,

The Becoming a Teacher team

---

To change your notification settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.
  "
}) }}

### Vacancies updated

We send this email when a user selects ‘there are no vacancies’ on the ‘Edit vacancies’ page.

Saving the change updates the course on Find without the need to re-publish the course.

{{ appEmail({
  subject: "Vacancies ((vacancies_filled??filled))((vacancies_open??open)) for ((course_name)) (((course_code)))",
  content: "

Dear colleague,

((vacancies_filled??A course in Find postgraduate teacher training, which your organisation is the accredited body for, no longer has vacancies.))((vacancies_opened??A course in Find postgraduate teacher training, which your organisation is the accredited body for, has been updated to show that it now has vacancies.))

((provider_name)) ((vacancies_filled??closed))((vacancies_opened??opened)) applications to ((course_name)) (((course _code))). ((vacancies_filled??This course will not be visible in Find unless users specifically search for courses without vacancies.))((vacancies_opened??This course is now visible in Find.))

View the course at ((course_url)).

If you have any questions, contact ((provider_name)).

Regards,

The Becoming a Teacher team

---

To change your notification settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.
  "
}) }}

### Welcome email

We send this email notification the first time a user signs in to the service.

We have included this email in the audit and user maps, but have not changed the content of this email yet as more discussion is needed.

## Further considerations

In future we may consider:

- switching on notifications by default
- adding new notifications when we add permissions to the service
- updating notification content when the status of a course changes

### Switching on notifications by default

Notifications are currently switched off by default. We will explore why this decision was made and look at changing the default to ‘on’.

We will also conduct a workshop to understand the value of the current notifications and if any other notifications are needed.

### Adding new notifications when we add permissions to the service

We are introducing user permissions to the service to give providers more control over who can manage their organisation’s data.

This work is likely to affect notifications because:

- we may need more notifications as new functionality is added - for example, the ability for a user to ‘review’ a course before it is published
- we currently only send notifications to accredited bodies - we may want to expand this to lead schools

### Updating notification content when the status of a course changes

We are considering how to improve the course publishing workflow and the different statuses a course can be in.

This work may affect notifications because:

- we may find ways to simplify and reduce the number of notifications needed
- the user actions that trigger notifications may change

<!-- markdownlint-enable MD001 MD025 -->

*[UCAS]: Universities and colleges admissions service
