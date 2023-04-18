---
title: Updating the emails sent when users create an account or sign in
description: We’ve changed the account creation and sign in emails, to make it easier for users to understand the processes.
date: 2022-08-19
tags:
  - emails
  - accounts
related:
  items:
    - text: Github pull request for sign in email
      href: https://github.com/DFE-Digital/apply-for-teacher-training/pull/7292
    - text: Github pull request for create account email
      href: https://github.com/DFE-Digital/apply-for-teacher-training/pull/7295
    - text: Github pull request for email sent when a candidate tries to sign into an account which does not exist
      href: https://github.com/DFE-Digital/apply-for-teacher-training/pull/7268
---

We reviewed the content of the emails we send when candidates:

- create an account
- sign into an account
- try to sign into an account which does not exist

These changes went live on the service on 16 August 2022.

## Creating an account

Previously the email which candidates received when creating an account did not use the word “account”. We added this to make it clearer what candidates are doing.

The email is now consistent with other parts of the service. For example, we refer to the candidate’s account:

- on the page they reach after they click the link in the email
- when they return to the service and need to sign in

We removed content saying that candidates will be able to save and return to their application. We did this because we say the same thing on the page which candidates reach when they click the link.

The priority in the email is for candidates to click the link, not for us to explain how the account will work.

![Screenshot with the text 'Confirm that you want to create an account to apply for teacher training:' followed by a link](updated-create-account-email.png "Updated email sent when creating an account")

## Signing in

The sign in email now starts with the candidate’s name if they’ve entered it in the service. This helps reassure candidates that the email is aimed at them.

We also changed the lead-in line so that it mentions continuing an application.

![Screenshot with the text 'Dear Frankie, Sign in to continue your application for teacher training:' followed by a link](updated-sign-in-email.png "Updated email sent when signing in")

## Trying to sign into an account which does not exist

Over 1,200 candidates have created duplicate accounts. These use different email addresses but have the same date of birth, postcode and surname.

We think that most of these duplicate accounts have been created accidentally.

It’s possible that some candidates were confused by the previous content of the email we send if they try to sign into an account which does not exist.

The content encouraged these users to create an account but it’s possible that they had just used the wrong email address.

![Screenshot with the text 'You tried to sign in to apply for teacher training. It looks like you do not have an account yet. Create an account:' followed by a link](sign-in-no-account-before.png "Previous email sent when signing into an account that does not exist")

The new email content says that the candidate should either:

- sign in with the email they used previously, if they’ve already started an application
- create a new account, if they have not started an application

![Screenshot with the text 'Confirm that you want to create an account to apply for teacher training:' followed by a link](sign-in-no-account-after.png  "New email sent when signing in with an account that doesn’t exist")

## Next steps

We plan to review the pages within the service which candidates see when creating an account or signing in.

We’ll continue to monitor how many duplicate accounts are created. We want to see see whether the numbers drop.
