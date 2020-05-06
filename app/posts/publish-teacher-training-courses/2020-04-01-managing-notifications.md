---
title: Managing notifications
description: Initial ideas for managing notifications.
date: 2020-04-01
---
As a follow up to establishing a [notifications MVP](/publish-teacher-training-courses/notifications-mvp), we designed and conducted research on our initial ideas for managing email notifications within Publish.

## User needs

**As an accredited body**
I need to be notified of changes by providers in Publish to courses I accredit
So that I can keep my student record system up to date and in sync with UCAS.

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