---
title: Removing ‘rejected by default’ from the email users receive when they do not make a decision in time
description: We removed the term ‘rejected by default’ and made other improvements to the email about automatic rejection
date: 2021-09-20
tags:
  - emails
  - automatic rejection
---

{% from "email/macro.njk" import appEmail %}

The email that users receive when they have not made a decision in time uses the phrase ‘rejected by default’.

In the rest of the service we say that an application is ‘automatically rejected’. To fix this, we removed the term ‘rejected by default’ from the email.

Since they were unnecessary, we also removed:

- the reference number from the subject line
- information about when the candidate submitted the application

We added ‘You need to tell ((candidate)) why their application was unsuccessful’ to encourage users to give feedback.

Users will only see this if they have the permission to make offers and reject applications.

<!-- markdownlint-disable MD025 -->

{{ appEmail({
  subject: "((candidate))’s application was automatically rejected - manage teacher training applications",
  content: "Dear ((name))

((candidate))’s application to study ((course_and_code)) was automatically rejected.

This is because you did not respond within ((days_to_respond)) working days.

((if user_can_give_feedback??))

You need to tell ((candidate)) why their application was unsuccessful:

((link_to_application_details_page_with_prompt))

((endif))

# Get help, give feedback or report a problem

For an overview of Manage teacher training applications, see our [Service guidance](https://www.apply-for-teacher-training.service.gov.uk/provider/service-guidance).

You can also contact us at <becomingateacher@digital.education.gov.uk>."
}) }}

<!-- markdownlint-enable MD025 -->
