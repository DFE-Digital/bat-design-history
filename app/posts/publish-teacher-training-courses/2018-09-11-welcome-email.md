---
title: Welcome email
description: The email we send when users first log in.
date: 2018-09-11
---
This is the email we send to users when they log in for the first time.

We send our own welcome email so that users have an easy way back to our service, and to encourage them to bookmark the right URL.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Welcome email",
    img: { src: "01-welcome-email.png" }
  }]
}) }}
