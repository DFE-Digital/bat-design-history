---
title: Emailing a candidate when the course is updated
description: Telling a candidate when the provider changes the course they applied for
date: 2022-01-04
---

{% from "email/macro.njk" import appEmail %}

We recently made some changes to [let providers change a course the candidate applied for](/manage-teacher-training-applications/letting-providers-change-course-before-making-an-offer/) before an offer is made.

Notifying the candidate when a course is changed will keep them more informed. They will be less likely to need to contact the training provider.

## How it works

A user can change the course:

- the candidate applied for before an offer is made
- the candidate was offered before the offer is accepted

### Changing the course applied for

<!-- markdownlint-disable MD025 -->

{{ appEmail({
  subject: "Course details changed for ((old_course_and_code))",
  content: "

Dear ((candidate))

The details of your application to study ((old_course_and_code)) have been changed.

The new details are:

> Training provider: ((new_provider))
> Course: ((new_course_and_code))
> Full time or part time: ((new_mode))
> Location: ((new_location))
> Qualification: ((new_qualification))

If you were not expecting this change, contact ((new_provider)) to find out more.

# Get support

You can chat to a Get Into Teaching adviser online for help and advice:

https://getintoteaching.education.gov.uk/#talk-to-us

You can also call for free on 0800 389 2500, Monday to Friday, 8.30am to 5pm (except public holidays).
  "
}) }}

<!-- markdownlint-enable MD025 -->

### Changing the course offered

<!-- markdownlint-disable MD025 -->

{{ appEmail({
  subject: "Offer changed for ((old_course_and_code))",
  content: "

Dear ((candidate))

The offer from ((old_provider)) to study ((old_course_and_code)) have been changed.

The new offer is:

> Training provider: ((new_provider))
> Course: ((new_course_and_code))
> Full time or part time: ((new_mode))
> Location: ((new_location))
> Qualification: ((new_qualification))
>
> Conditions:
>
> - ((first_new_condition))

If you were not expecting this change, contact ((new_provider)) to find out more.

# Make a decision by ((decide_by_date))

If you do not reply by ((decide_by_date)), your application will be withdrawn.

Sign into your account to respond:

((link_to_account))

Contact ((new_provider)) directly if you have any questions about this.

# Get support

You can chat to a Get Into Teaching adviser online for help and advice:

https://getintoteaching.education.gov.uk/#talk-to-us

You can also call for free on 0800 389 2500, Monday to Friday, 8.30am to 5pm (except public holidays).
  "
}) }}

<!-- markdownlint-enable MD025 -->
