---
title: Audit of email notifications and improvements to content
description: We documented which emails are sent and when. We also improved the content to make the notifications clearer and more concise.
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

The user need email notifications aims to address is:

{% set need = collections['user-need'] | slugs(tags) | first %}

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  title: need.data.title,
  description: need.templateContent,
  url: need.url,
  status: need.data.status
}) }}

As the need to keep records in sync with UCAS is no longer applicable, we will reassess the user need and conduct more user research. We will look at how the notifications are currently being used and assess their value and effectiveness.

## Documenting which emails are sent and when

We started this work by listing all email notification templates in a spreadsheet. This helped us to organise the folders in Notify and remove templates that are no longer in use.

We documented when each notification is sent in our Publish user journey maps and included screenshots.

We currently only send notification emails to accredited bodies. There are eight active notification email templates.

## Improving the content of the emails

Some of the notification emails hadn’t been updated following changes to the service. We wanted to make sure the content was consistent and look at other improvements that could be made.

### What we changed

We updated the emails so that:

-	all terminology is consistent with the UI
-	the email contains a single message and is as short as possible
-	users can quickly see which provider the notification is referring to

We also:

-	moved the link to change notifications settings to below the sign-off
-	removed the ‘updated at time/date’ dynamic field as we felt it was unnecessary - the email is sent around the same time any change is made

### 1. Course subject change

We send this email notification when a user changes the course subject.

When a user changes the subject, the title of the course also changes.

Saving the change updates the course on Find without the need to re-publish the course.

As we are notifying users about this in the ‘Course updated’ email (see below) we will remove the ‘Course subject change’ notification.

{{ appEmail({
  subject: "((previous_course_name)) (((course_code))) subject has been updated",
  content: "

Dear colleague,

Regards,
The Becoming a Teacher team

---

To change your notification settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.
  "
}) }}

### 2. Course updated

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

Regards,
The Becoming a Teacher team

---

To change your notification settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.
  "
}) }}

### 3. Course withdrawn

We send this notification when a user withdraws a course. The course will no longer be viewable on Find and it cannot be republished until the next recruitment cycle.

If a user withdraws a course, they are not able to reinstate it themselves - they need to contact the Publish support team.

{{ appEmail({
  subject: "((course_name)) (((course_code))) has been withdrawn",
  content: "

Dear colleague,

Regards,
The Becoming a Teacher team

---

To change your notification settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.
  "
}) }}

### 4. Course published

We send this email notification when a user:

- publishes a course for the first time on Find
- updates a course after making changes to any of the fields in the ‘Course description’ tab, for example, ‘About this course’

When a user makes a change to a course description field, the status of the course changes to ‘Published *with unpublished changes’. The user must publish the changes to update the course on Find.

{{ appEmail({
  subject: "((course_name)) (((course_code))) has been published",
  content: "

Dear colleague,

Regards,
The Becoming a Teacher team

---

To change your notification settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.
  "
}) }}

### 5. Sites updated

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

Regards,
The Becoming a Teacher team

---

To change your notification settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.
  "
}) }}

### 6. Vacancies partially updated

We send this email when a user changes the locations on the ‘Edit vacancies’ page.

Saving the change updates the course on Find without the need to re-publish the course.

{{ appEmail({
  subject: "Vacancy status updated for ((course_name)) (((course_code)))",
  content: "

Dear colleague,

Regards,
The Becoming a Teacher team

---

To change your notification settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.
  "
}) }}

### 7. Vacancies updated

We send this email when a user selects ‘there are no vacancies’ on the ‘Edit vacancies’ page.

Saving the change updates the course on Find without the need to re-publish the course.

{{ appEmail({
  subject: "Vacancies ((vacancies_filled??filled))((vacancies_open??open)) for ((course_name)) (((course_code)))",
  content: "

Dear colleague,

Regards,
The Becoming a Teacher team

---

To change your notification settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.
  "
}) }}

### 8. Welcome email

We send this email notification the first time a user signs in to the service.

We have included this email in the audit and user maps, but have not changed the content of this email yet as more discussion is needed.

## Future considerations

### Notifications, permissions and course statuses

Notifications are currently switched off by default. We will explore why this decision was made and look at changing the default to ‘on’.

We are in the process of scoping out the possible user permissions for Publish. This work is likely to affect notifications because:

-	we may need more notifications as new functionality is added - for example, the ability for a user to ‘review’ a course before it is published
-	we currently only send notifications to accredited bodies - we may want to expand this to lead schools

We are also documenting the different status types of a course. This work may affect notifications because:

-	we may find ways to streamline and reduce the number of notifications needed
-	the user actions that trigger notifications may change

### Content updates

Following more work on notifications, we expect that content updates will be needed. Additionally, we need to ensure that any changes made to the wording in the UI are replicated in the emails. For example, ‘Add a new course’ will become ‘Add course’ when the wording on the button changes.

We will look at other services’ notifications to align format and terminology.

<!-- markdownlint-enable MD001 MD025 -->
