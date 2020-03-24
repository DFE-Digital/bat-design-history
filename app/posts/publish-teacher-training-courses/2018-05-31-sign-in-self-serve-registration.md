---
title: "Sign-in: User registers themself"
description: We send users a sign-up link so they can register and then be forwarded on to our service.
date: 2018-05-31
---

We send users a sign-up link so they can register and then be forwarded on to our service.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Register",
    img: { src: "register.png" }
  }, {
    text: "Verify",
    img: { src: "verify.png" }
  }, {
    text: "Receive verify email",
    img: { src: "receive-verify-email.png" }
  }, {
    text: "Choose password",
    img: { src: "choose-password.png" }
  }, {
    text: "Success and return",
    img: { src: "success-and-return.png" },
    caption: "Unlike in this screenshot, we can tailor this success button to take users to the publish courses service, avoiding users getting stuck within DfE Sign in."
  }, {
    text: "Receive success email",
    img: { src: "user-receives-success-email.png" },
    caption: "When users are registered they receive this welcome email. We’ve found that users would refer to this email when they want to return to our service. By using this email to click through to DfE Sign-in the user has no easy route out to our service.

To solve this we will send our own welcome email and request that this version of the email be suppressed.

Suppress DfE sign-in email:
[BATSA-441](https://dfedigital.atlassian.net/browse/BATSA-441)

Create our own welcome email:
[BATSA-442](https://dfedigital.atlassian.net/browse/BATSA-442)"
  }]
}) }}
