---
title: "Sign-in: Invite a user"
description: This is the approach we attempted first. Because of limitations with the invite email and users ending up at a dead-end, we switched to self-registration
---
The full journey from admin screens to a user completing sign up.

The invite email and the subsequent sign-in complete page provided by DfE Sign-in do not set up context and they leave users at a dead end. There is no easy route from DfE Sign in to ‘Publish teacher training courses’. Users reaching a dead end has been observed during onboarding of the first users.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Admin adds new user",
      img: { src: "admin-adds-new-user.png" }
    },
    {
      text: "Admin sets organisation",
      img: { src: "admin-sets-organisation.png" }
    },
    {
      text: "Admin chooses organisation",
      img: { src: "admin-chooses-organisation.png" }
    },
    {
      text: "Admin sets permission for user",
      img: { src: "admin-sets-permission-for-user.png" }
    },
    {
      text: "We send an email to set context",
      img: { src: "we-send-email.png" },
      caption: '
[Google Doc with email and comments](https://docs.google.com/document/d/1J2p5luXQOpQjfuM1qN130sqDxOBpIZaM-5t4fPhuqWY/edit?usp=sharing)
      '
    },
    {
      text: "User receives invite email",
      img: { src: "user-receives-invite-email.png" },
      caption: '
This email provides no context for the service this account relates to. eg It does not say "for publishing teacher training courses".
      '
    },
    {
      text: "User goes to link and verifies",
      img: { src: "user-goes-to-link-and-verifies.png" }
    },
    {
      text: "User chooses password",
      img: { src: "user-chooses-password.png" }
    },
    {
      text: "User success and return",
      img: { src: "user-success-and-return.png" },
      caption: '
There is no link back to our service, instead the user returns to DFE Sign-in.

Combining this with the lack of context in the email, there is a disjointed user journey which will see users either not sign up because they don’t know why, or they don’t know how to get to our service because there is no onward link.
      '
    },
    {
      text: "User receives success email",
      img: { src: "user-receives-success-email.png" }
    }
  ]
}) }}
