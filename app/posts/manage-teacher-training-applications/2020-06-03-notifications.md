---
title: Notifications
description: Notify users when certain things happen and let users configure what notifications they receive
date: 2020-06-03
screenshots:
  items:
    - Notification bubble
    - Notifications page
    - Notification settings
    - Change notification setting
---

## Hypotheses

Currently all users get the following notifications by email:

- Application submitted
- Chaser to respond to the application after X days
- Application rejected by default
- Application gets withdrawn
- Offer accepted
- Offer declined
- Offer declined by default

Users cannot configure notifications and they do not get notified online within the application.

This means users have to check their email in order to know what's going on. And there's a risk that these notifications will be ignored because the more notifications you get, the less useful they are.

If we give users the option to be notified online
Then users who regularly spend time within the service don't have to leave the service to check their email

If we let users configure what notifications they get
Then users will only get the notifications they need in the way that suits them

## How online notifications should work

A notification bubble appears next to the notifications link in the header at the top.

Clicking on that takes the user to the notification page.

Notifications stay unread until the user reads the notification. To do that they have to visit the page which relates to the notification.

For example, when an application is submitted the user needs to visit that application for the notification to be marked as read.

When there are no notifications, there is no notification bubble in the header.

If the user only belongs to one organisation, there should be no `h2` on the settings page.

## Default notification settings

When a user is set up, it would be helpful to set up notifications based on their permissions:

If the user has view-only permissions then all notifications relating to applications should be turned off by default.

If the user can make decisions, then all notifications relating to applications should be turned on by default. This means getting immediate notifications by email. Daily and weekly digest emails should be turned off.
