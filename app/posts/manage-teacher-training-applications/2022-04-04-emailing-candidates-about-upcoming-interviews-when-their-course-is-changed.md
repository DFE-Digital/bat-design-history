---
title: Emailing candidates about upcoming interviews when their course is changed
description: We’ll send candidates an email with updated interview details if a user changes the subject or training provider for their course.
date: 2022-04-04
---

{% from "email/macro.njk" import appEmail %}

When a user changes the details of the course a candidate has applied for, we send an email to the candidate with the new course details.

We also automatically update the details of any upcoming interviews if the course has been changed to:

- a different course run by the same training provider
- a course run by another training provider which the user belongs to

We do not update interview details if the change is only to:

- the training location
- whether the course is full time or part time

We already designed [warning text telling users which emails will be sent to the candidate](/manage-teacher-training-applications/changing-course-when-there-are-upcoming-interviews-or-when-the-training-provider-is-changed/).

We’ve now designed a template for the emails which will be sent to candidates when an interview is automatically updated.

## What we changed

We already send an email to users when an interview is updated but it is not suitable for use when a course is changed. For example it does not mention both the old and new course.

We decided to revise the existing interview change email so that it works in all situations, rather than creating a separate email to use when the course has changed.

## How it works

We do not mention which organisation changed the course details. This is because it may have been the accredited body and the candidate may not recognise the name.

We do not mention the training location or whether it’s full or part time. This is because those details are not essential to the interview.

Giving the training location could also be confusing because it may not be the same as the address where the interview will take place.

We tell the candidate to contact the training provider if they have any questions. We think that the training provider will be a better point of contact than the accredited body.

<!-- markdownlint-disable MD001 MD025 -->

{{ appEmail({
  subject: "Interview details updated for ((old_course_and_code))",
  content: "

Dear ((first_name))

The details of your interview for ((old_course_and_code)) have been updated.

The new details are:

> Training provider: ((new_provider))
> Course: ((new_course_and_code))
> Date: ((date))
> Time: ((time))
> Address or online meeting details: ((address_or_online_meeting_details))
> Additional details: ((additional_details))

Contact ((new_provider)) if you have any questions. Let them know if you cannot attend the interview.

# Get help

Call 0800 389 2500 or chat online:

https://getintoteaching.education.gov.uk/#talk-to-us

Monday to Friday, 8:30am to 5:30pm (except public holidays).
  "
}) }}

<!-- markdownlint-enable MD001 MD025 -->
