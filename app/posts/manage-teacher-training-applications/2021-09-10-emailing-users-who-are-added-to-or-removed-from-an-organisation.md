---
title: Emailing users who are added to or removed from an organisation 
description: We improved the email sent to users when they’re added to an organisation and created one to send when users are removed
date: 2021-09-10
---

{% from "email/macro.njk" import appEmail %}

We wanted to:

- improve the email we currently send to users who are added to an organisation
- create an email to send to users who are removed from an organisation

We did this work alongside the [renaming in the service](/manage-teacher-training-applications/2021-09-10-changing-the-terms-for-adding-a-user-and-removing-a-user-from-an-organisation/) of:

- ‘invite user’ to ‘add user’
- ‘delete user’ to ‘remove user’

## What we did

When a user is added to an organisation, they’ll receive an email telling them:

- who added them
- which organisation they’ve been added to
- what additional permissions they’ve been given
- how to sign in if they have a DfE Sign-in account
- that they should have received an email if they do not have a DfE Sign-in account

We’ve removed content from the current email which welcomes the user to the service. They may already be using the service for a different organisation.

The current email does not tell the user who added them. We think this is useful information so that:

- they know who to talk to within their organisation if they have questions
- they’re reassured that this is a legitimate email rather than spam

The current email also does not list the user’s additional permissions. Doing so will help the user to understand what they’ll be able to do once they sign in.

<!-- markdownlint-disable MD025 -->

{{ appEmail({
  subject: "((user_who_invited)) has added you to ((organisation)) – manage teacher training applications",
  content: "Dear ((name))

((user_who_invited)) has added you to ((organisation)). You can now manage their teacher training applications.

You have permission to:

- manage users
- manage organisation permissions
- manage interviews
- make offers and reject applications
- view criminal record and professional misconduct information
- view sex, disability and ethnicity information

# Sign in to manage applications

If you have a DfE Sign-in account, you can use it to sign in: 

((link))

If you do not have a DfE Sign-in account, check your inbox for an email telling you how to create one.

# Get help, give feedback or report a problem

For an overview of Manage teacher training applications, see our [Service guidance](https://www.apply-for-teacher-training.service.gov.uk/provider/service-guidance).

You can also contact us at <becomingateacher@digital.education.gov.uk>."
}) }}

<!-- markdownlint-enable MD025 -->

When a user is removed from an organisation, they’ll receive an email telling them:

- who removed them
- which organisation they’ve been removed from

<!-- markdownlint-disable MD025 -->

{{ appEmail({
  subject: "((user_who_deleted)) has removed you from ((organisation)) – manage teacher training applications",
  content: "Dear ((name))

((user_who_deleted)) has removed you from ((organisation)). You can no longer manage their teacher training applications.

# Get help, give feedback or report a problem

For an overview of Manage teacher training applications, see our [Service guidance](https://www.apply-for-teacher-training.service.gov.uk/provider/service-guidance).

You can also contact us at <becomingateacher@digital.education.gov.uk>."
}) }}

<!-- markdownlint-enable MD025 -->

## Further considerations

We considered:

- listing permissions which the user has not been given
- tailoring the information about DfE Sign-in depending on the user’s circumstances

### Listing permissions which the user has not been given

We decided only to list the permissions which the user has been given.

Listing permissions which a user has not been given would:

- make the email longer, pushing the information about DfE Sign-in further down
- possibly confuse the user, since they should not need to know about permissions which they have not been given

### Tailoring the information about DfE Sign-in

We cannot tell whether the user already has a DfE Sign-in account, but we could assume that they do if they already belong to another organisation. We could choose not to show them the content about looking for an email from DfE Sign-in.

Making this assumption would create issues if a user was invited to more than one organisation in a short period of time. The email for the second organisation would not show the content about the DfE Sign-in email.

We would therefore need to check if the user had already signed in to manage the organisation they already belong to. If they had done so then we could hide the content about the DfE Sign-in email.

Since most users only belong to one organisation, we decided that it is not necessary to add this complexity to the service.
