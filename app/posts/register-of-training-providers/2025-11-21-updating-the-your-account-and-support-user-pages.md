---
title: Updating the ‘Your account’ and ‘Support user’ pages
description: We updated how users are managed in the service
date: 2025-11-21
tags:
  - your account
  - support users
  - authentication
related:
  items:
    - text: Managing support users
      href: /register-of-training-providers/managing-support-users/
    - text: Viewing ‘Your account’
      href: /register-of-training-providers/viewing-your-account/
screenshots:
  items:
    - text: Your account
      src: your-account.png
    - text: Support user details
      src: support-user-details.png
    - text: Support user details - with no change links
      src: support-user-details--no-change-links.png
    - text: Support user details - with partial change links
      src: support-user-details--partial-change-links.png
    - text: Change support user details
      src: change-support-user-details.png
    - text: Change support user details - check your answers
      src: change-support-user-details--check-your-answers.png
    - text: Support user details successfully changed
      src: change-support-user-details--success.png
---

We updated how users are managed in the service. We did this to make it more obvious what user details can be changed and when.

## What we changed

We have added:

- metadata showing when the user last signed in
- a way to administer a user’s details depending on whether they have previously signed into the service

## How it works

We use DfE Sign-in to manage access to the Register of training providers service. This means that, at different points in time, a support user may not have full access to editing other support users’ details.

### Last signed in metadata

We added the last signed-in metadata to the ‘Your account’ and support user’s details page to make it clear when the user last signed in to the service.

This is important because, if the user has never signed in, we can amend their details. If the support user has previously signed in, it means their account has been successfully connected to DfE Sign-in, and we cannot edit their details except to determine whether the account is active.

If the support user has never signed in, we show the message:

> User has never signed in

Otherwise, we show when they last signed in, for example:

> Last signed in on 11 December 2025 at 2:13pm

### Administering user details

If the current user is the same as the support user they’re viewing, they cannot change their account details or delete their account. In this scenario, we remove all ‘change’ and ‘delete’ links.

If the current user is viewing a user who has previously signed in, they can only change whether the account is active.

If the current user is viewing a user who has never signed in, they can change all the user’s details: first name, last name, email address and whether the account is active.
