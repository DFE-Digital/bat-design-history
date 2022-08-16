---
title: Updating the emails sent when creating an account and signing in
description: We’ve revised the content of the emails to help explain how the account works.
date: 2022-08-16
related:
  items:
    - text: Pull request changing sign in email
      href: https://github.com/DFE-Digital/apply-for-teacher-training/pull/7292
    - text: Pull request changing create account email
      href: https://github.com/DFE-Digital/apply-for-teacher-training/pull/7295
    - text: Pull request changing email sent when trying to sign in without having an accounr
      href: https://github.com/DFE-Digital/apply-for-teacher-training/pull/7268
---

We’ve reviewed and updated the content of the emails we sent when candidates create an account, sign in, and if they try to sign in with an email address not associated with an account.

These changes went live on the service on 16 August 2022.

## Creating an account

We’ve updated this to include the phrase "an account", in order to remind candidates that that’s what they're doing, and to make it easer it to sign in next time, when we ask if they’ve got an account or not.

![TODO](updated-create-account-email.png "Updated email sent when creating an account")

## Signing in

We’ve updated this to include start with the candidate’s name (if they’ve given it to us) and to change the lead-in line to make it more applicable to continuing an application rather than starting it.

![TODO](updated-sign-in-email.png "Updated email sent when signing in")

## Attempting to sign in with an email not associated with an account

Over 1200 candidates have created duplicate accounts, using different email addresses but with the same date of birth, postcode and surname. We suspect that the majority of these are accidental.

This may partially have been caused by the previous content of the email we send when candidates try to sign in with an email address not associated with an account, as the previous email content encouraged users to create an account:

![TODO](sign-in-no-account-before.png "Previous email sent when signing in with an account that doesn’t exist")

The updated email content suggests either signing in with the email they used previously, if the candidate already started an application, or creating a new account.

![TODO](sign-in-no-account-after.png  "New email sent when signing in with an account that doesn’t exist")

## Next steps

We plan to also review the content and flow of the web interface when creating an account and signing in.

We will continue to monitor the level of duplicate account creation to see if the numbers reduce.
