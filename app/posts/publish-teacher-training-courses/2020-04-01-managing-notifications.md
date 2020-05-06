---
title: Managing notifications
description: Initial ideas for managing notifications.
date: 2020-04-01
related:
  items:
  - text: UR Playback
    href: https://docs.google.com/presentation/d/1dzCle8W2MrZoUmbOQ72BboRn9v-6tZ3SaprhNIREAQE/
---
As a follow up to establishing a [notifications MVP](/publish-teacher-training-courses/notifications-mvp), we designed and conducted research on our initial ideas for managing email notifications within Publish.

## User needs

**As an accredited body**
I need to be notified of changes by providers in Publish to courses I accredit
So that I can keep my student record system up to date and in sync with UCAS.

## Who we tested with

* UCL
* The University of Warwick
* The University of Winchester

## What we learned

Participants saw notifications as an opportunity to help track activity across their partnership schools.

> “We have to keep a close eye on the information that our partners are putting on their own Publish profiles and ensure that it matches to the master list of places we agreed at the request stage.  In that respect the email alerts are an easy update to keep track of.  It would be especially useful to know when our partners have changed the status of a program to anything other than “running” because that will help us track live recruitment activity across the whole partnership.”

Participants mentioned they might share notifications with the following groups within their organisation:

* members of same team
* admission team to update their  student information system
* a manager to update their student information system
* student administration
* program lead and program administration within academic departments

## Prototype feedback

When asked to select notification frequency, all participants selected ‘Each time a change is made’.

> “The key thing for me is being able to react to changes that the school partners make as quickly as possible. The vast majority won’t need any further action by me as they are within the prior agreements that we have made with our partners, but in the few cases where there may be errors or inaccuracies then I would want to contact the school as soon as possible.”

Participants acknowledged the benefit of a daily/weekly/monthly digest and mentioned it could be suitable for some members of their organisation.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Notifications"
    },
    {
      text: "Manage your notifications"
    }, 
    {
      text: "Subscribed to notifications"
    }
  ]
}) }}