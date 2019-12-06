---
title: Give a teacher training reference
description: Replacing the Google form with an integrated form.
tags: apply-for-teacher-training
---
One of the first aspects of [the MVP service](/apply-for-teacher-training/apply-launch) we wanted to improve was how we accept references.

Initially this was achieved using a Google form. However, this approach required a lot of manual intervention, preventing automation of reminders and status updates. Also, Google Forms are not very accessible.

While maintaing the reduced question set, we devised a flow that would enable us to collect a reference and have its content be submitted directly to the service. With the limitation of Google Forms removed, we could also give referees the opportunity to correct any errors, and ask them to give a reason for declining to provide a reference.

## Linking to the reference form

We’ll email a link to the form to each referee once a candidate submits their application.

The link must be unique, the URL must contain enough information for us to know which referee and candidate the form relates to, while at the same time being obfuscated to avoid manipulation (for example an ID which could be incremented).

It’ll probably use a token and behave similarly to the magic link we send for sign in.

## Screenshots

{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "Start page"},
    {text: "Decline to give a reference"},
    {text: "Confirm details"},
    {text: "Comments"},
    {text: "Confirmation"},
    {text: "Finish (with user research opt-in)"},
    {text: "Finish"}
  ]
}) }}
