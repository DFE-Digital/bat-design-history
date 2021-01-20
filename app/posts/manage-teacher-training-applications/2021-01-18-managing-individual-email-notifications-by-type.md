---
title: Managing individual email notifications
description: Let users choose which emails they receive
date: 2021-01-18
related:
  items:
  - text: Email content changes to turn off notifications
    href: https://docs.google.com/document/d/1FOT_jBRlMRLjcbyw_sz6IygwCNZkaBp__oRBRBEkn-Y/edit#heading=h.7yben527pu0m
    description: A document showing the content that will appear at the bottom of each email notification
---

Currently users can [turn off all email notifications](/manage-teacher-training-applications/turn-email-notifications-on-off/). But we know users want to specify which emails they receive.

Without this ability, users have to filter out the emails they don’t want to read. Or worse, it results in the email notifications being ignored.

If we let users manage individual email notifications, then their inbox will only contain useful emails.

## What we did and why

We combined ‘offer declined’ and ‘offer declined automatically’ into one option as we think people who are interested in these emails are interested regardless of what led to an offer being declined.

Only ‘application withdrawn’ has ‘by candidate’ in the label. This is because an application can be withdrawn by providers as well. And when a provider withdraws an application, they don’t need to be notified.

We used radio buttons instead of checkboxes because the labels explicitly state what the user is doing. Checkbox labels are described as the type of email which means extra effort is needed to understand what ticking means.

## How it works

All notifications are on by default.

Users will receive any notifications they switch on for all organisations they belong to.

Users are given a link to the settings page at the bottom of every email that can be turned off.

## Further work

Future work may include:

- being able to configure notifications separately based on the organisation or the relationship between the organisation and partner organisations.
- changing the content of the email notifications to match the permissions. For example, if the user cannot make decisions, then there should not be a call to action in the email.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Account page",
    img: {
      src: "account-page.png"
    }
  }, {
    text: "Email notification settings page",
    img: {
      src: "email-notifications-page.png"
    }
  }, {
    text: "Success banner",
    img: {
      src: "success-banner.png"
    }
  }]
}) }}

