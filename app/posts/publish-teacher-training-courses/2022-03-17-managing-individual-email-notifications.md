---
title: Managing individual email notifications
description: Let users choose which emails they receive.
date: 2022-03-18
related:
  items:
    - text: Notifications for users with access to multiple organisations
      href: /publish-teacher-training-courses/notifications-users-with-multiple-organisation-access/
screenshots:
  items:
    - text: Your account
      src: your-account.png
    - text: Your personal details
      src: your-personal-details.png
    - text: Your email notifications - single organisation (lead school)
      src: your-email-notifications--single-organisation-lead-school.png
    - text: Your email notifications - single organisation (accredited body)
      src: your-email-notifications--single-organisation-accredited-body.png
    - text: Your email notifications - multiple organisations
      src: your-email-notifications--multiple-organisations.png
    - text: Change your email notifications - single organisation (lead school)
      src: change-email-notifications--single-organisation-lead-school.png
    - text: Change your email notifications - single organisation (accredited body)
      src: change-email-notifications--single-organisation-accredited-body.png
    - text: Change your email notifications - multiple organisations (lead school)
      src: change-email-notifications--multiple-organisations-lead-school.png
    - text: Change your email notifications - multiple organisations (accredited body)
      src: change-email-notifications--multiple-organisations-accredited-body.png
---

Currently, only users in accredited bodies receive email notifications for courses run by their training providers.

Users can turn off all email notifications. But we know users want to specify which emails they receive.

Without this ability, users have to filter out the emails they don’t want to read. Or worse, it results in the email notifications being ignored.

If we let users manage individual email notifications, then their inbox will only contain useful emails.

Email notifications are useful to all users to help them manage their workload.

## What we changed

Previously, clicking on a user’s name in the black header took the user to DfE Sign In.

If the user was a member of an accredited body, the black header also included a menu option called ‘Notifications’.

We have now replaced these and added a new section called ‘Your account’ that includes links to:

- your personal details
- your email notifications

### Your personal details

The ‘Your personal details’ page includes a summary list displaying the user’s first name, last name and email address.

Users cannot change their personal details in our service, they have to change them via DfE Sign In.

### Your email notifications

The ‘Your email notifications’ page includes a summary list showing all available notifications for the type of organisation.

All organisations have the following notifications:

- course published by your organisation
- course changed by your organisation
- course withdrawn by your organisation
- course vacancies changed by your organisation

If the organisation is an accredited body, they also have notifications for their partner organisations, including:

- course published by partner organisations
- course changed by partner organisations
- course withdrawn by partner organisations
- course vacancies changed by partner organisations

We group similar notifications. For example, ‘Course published by your organisation’ is followed by ‘Course published by partner organisations.’

If the user is a member of multiple organisations, we display the organisation name, a summary list and a change link for each organisation.

### Changing email notifications

All email notifications are on by default.

We used radio buttons instead of checkboxes because the labels explicitly state what the user is doing. Extra effort is needed to understand what ticking a checkbox means.

Users will receive any notifications they switch on for each organisation they belong to.

Users are given a link to the settings page at the bottom of every email that can be turned off.

## Further considerations

In future we may consider:

- adding a notifications section or activity log to the service to display changes made
- adding email frequency options - for example, daily or weekly digest
- adding email notifications when changes to organisation settings, locations and users are made
- changing the content of the email notifications to match the users’ permissions
