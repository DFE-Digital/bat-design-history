---
title: Clarifying that pages in ‘your account’ relate only to the current user
description: Improving the page headings and link text within ‘your account’ so that users don’t think it’s about managing their colleagues’ permissions
date: 2021-06-21
---

We currently have the following sections within ‘your account’:

- Personal details
- User permissions
- Email notifications

But some users mistake their permissions to be about their colleague’s permissions.

To solve this we’ve changed the heading to ‘your user permissions’. And to be consistent we’ve changed the other pages and link text to match.

Changing ‘email notifications’ to ‘your email notifications’ meant that we could also remove the sentence explaining that the notifications are related to the current user.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Your account",
    img: {
      src: "your-account.png"
    }
  }, {
    text: "Your personal details",
    img: {
      src: "your-personal-details.png"
    }
  }, {
    text: "Your user permissions",
    img: {
      src: "your-user-permissions.png"
    }
  }, {
    text: "Your email notifications",
    img: {
      src: "your-email-notifications.png"
    }
  }]
}) }}
