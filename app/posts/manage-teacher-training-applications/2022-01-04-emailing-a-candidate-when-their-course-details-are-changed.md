---
title: Emailing a candidate when their course details are changed
description: We created an email for candidates when course details are changed before an offer is made. We also updated the email sent when course details are changed at the same time as or after an offer is made.
date: 2022-01-04
---

{% from "email/macro.njk" import appEmail %}

We recently made changes to [let providers change course details before they make an offer](/manage-teacher-training-applications/letting-providers-change-course-before-making-an-offer/).

We needed to create an email to tell a candidate that the course details have changed.

We’ve also updated the email sent when a provider makes changes at the same time as making an offer or after they’ve made an offer.

## How it works

We send different emails depending on whether the provider changes the course details:

- before making an offer
- at the same time as making an offer or after they’ve made an offer

The provider cannot change the course details after a candidate has accepted an offer.

### Changing the course details before making an offer

We’ve created a new email since providers could not previously change the course details before making an offer.

We decided not to say which organisation made the change because:

- in the subject line we usually say what has happened and who or what it has happened to, rather than who carried out the action
- there’s a risk that if the accredited body made the change we’ll confuse candidates, as the accredited body is not mentioned in Apply or other candidate emails

We do not give the name of the accredited body in the course details because:

- it does not appear in Apply or other candidate emails
- users cannot currently change the course to one offered by a different accredited body

If in future we make it possible for users to change the course to one offered by a different accredited body, we will need to show the name of the accredited body.

We do not show funding type in the course details as it does not appear in Apply. We do show qualification type as it appears in Apply.

We tell candidates to contact the training provider with any questions, even if the user who changed the course details belongs to the accredited body. This is because the training provider is more likely to be able to answer the candidate’s questions.

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

### Changing the course details at the same time as making an offer or after making an offer

We've updated this email to reflect the decisions we made when creating the new email. It now:

- does not mention which organisation made the change
- shows the qualification
- tells users to contact the training provider even if the change was made by a user at the accredited body

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
