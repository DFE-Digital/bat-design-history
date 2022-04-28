---
title: Publish welcome email changes
description: We updated the Publish welcome email to make it consistent and concise
date: 2022-04-28
related:
  items:
    - text: Audit of email notifications and improvements to content
      href: /publish-teacher-training-courses/audit-of-email-notifications-and-improvements-to-content/
---

{% from "email/macro.njk" import appEmail %}

<!-- markdownlint-disable MD001 MD025 -->

Once a user has been onboarded to an organisation in Publish, they receive a welcome email the first time they sign in.

As part of our notification email audit, we found that our welcome email had some content that was out of date and a link that didn't work.

It also contained detailed instructions that are unnecessary. For example, the ‘Add course’ flow is designed to guide the user through the process of adding a course so instructions in an email for how to add a course is not required.

## What we changed

We made the email more concise and consistent by:

- removing the detailed instructions
- removing the names of buttons, for example, ‘Add a course’ - the wording in Publish is now ‘Add course’
- removing the broken link to a PDF titled, ‘Tips for writing effectively’
- changing the footer so it’s the same as our other notification emails

We kept the subject line the same.

### New welcome email

{{ appEmail({
  subject: "Welcome to Publish teaching training courses",
  content: "

Dear (( first_name)),

You now have access to Publish teacher training courses. Use Publish to upload content to Find postgraduate teacher training, DfE’s search service for future teachers.

We recommend that you bookmark the sign-in page at https://www.publish-teacher-training-courses.service.gov.uk, so you can easily return to it.

When you’re signed in you can:

- create, edit and publish courses
- add information about your organisation
- add locations

When you’ve finished adding information, you’ll be able to publish your courses.

# Get help

Get help, report a problem or give feedback at becomingateacher@digital.education.gov.uk

The Becoming a Teacher team

---

To change your notification settings, go to https://www.publish-teacher-training-courses.service.gov.uk/notifications.
  "
}) }}


## Future considerations

We plan to update the How to publish teacher training courses https://qa2.publish-teacher-training-courses.service.gov.uk/guidance page in the future, which we currently link to from the footer in Publish. Once this is done, it may be useful to link to the new page from the welcome email.


<!-- markdownlint-enable MD001 MD025 -->
