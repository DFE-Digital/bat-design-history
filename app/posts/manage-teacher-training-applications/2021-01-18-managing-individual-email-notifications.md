---
title: Managing individual email notifications
description: Let users choose which emails they receive
date: 2021-01-18
screenshots:
  items:
    - Account page
    - Email notifications settings page
    - Success banner
related:
  items:
    - text: Content for the end of each email
      href: https://docs.google.com/document/d/1FOT_jBRlMRLjcbyw_sz6IygwCNZkaBp__oRBRBEkn-Y/edit#heading=h.7yben527pu0m
      description: A document showing the content that will appear at the bottom of each email notification
---

Currently users can [turn off all email notifications](/manage-teacher-training-applications/turn-email-notifications-on-off/). But we know users want to specify which emails they receive.

Without this ability, users have to filter out the emails they don’t want to read. Or worse, it results in the email notifications being ignored.

If we let users manage individual email notifications, then their inbox will only contain useful emails.

## What we did and why

We combined ‘offer declined’ and ‘offer declined automatically’ into one option as we think people who are interested in these emails are interested regardless of what led to an offer being declined.

Only ‘application withdrawn’ has ‘by candidate’ in the label. This is because an application can be withdrawn by providers as well. And when a provider withdraws an application, they don’t need to be notified.

We used radio buttons instead of checkboxes because the labels explicitly state what the user is doing. Extra effort is needed to understand what ticking a checkbox means.

## How it works

All notifications are on by default.

Users will receive any notifications they switch on for all organisations they belong to.

Users are given a link to the settings page at the bottom of every email that can be turned off.

## Further work

Future work may include:

- being able to configure notifications separately based on the organisation or the relationship between the organisation and partner organisations.
- changing the content of the email notifications to match the permissions - for example, if the user cannot make decisions then there should not be a call to action in the email
