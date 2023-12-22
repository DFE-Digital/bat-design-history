---
title: Give a teacher training reference
description: Replacing the Google form with an integrated form.
date: 2019-12-05
tags:
  - references
screenshots:
  items:
    - text: Start page
      caption: We ask referees if they are happy to give a reference. If they select no, a free text area allows them to provide a reason.
    - text: Decline to give a reference
      caption: Should the referee have selected this option in error, we provide contact details to rectify. If this happens a lot, we can think about adding a self-serve way to recover.
    - text: Confirm details
      caption: Give the referee the opportunity to correct any details. If they select no, a free text area is shown where they can tell us what needs correcting.
    - text: Comments
      caption: The actual reference content. We provide guidance here about the sort of content that would be helpful here.
    - text: Confirmation
      caption: Confirm that their reference has been submitted. At this point, we then ask if they would like to opt-in to user research.
    - text: Finish (with user research opt-in)
      caption: If they opt in, we include a message to say researchers will be in touch (this may need revising based on how we choose to engage with referees)
    - text: Finish
      caption: If they decide not to opt-in, we don’t include that message.
---

{% from "dist/govuk/components/warning-text/macro.njk" import govukWarningText %}
{{ govukWarningText({ html: 'We built a <a href="/apply-for-teacher-training/give-a-reference-iteration">simpler version of this design</a>.', iconFallbackText: "Warning" }) }}

One of the first aspects of [the MVP service](/apply-for-teacher-training/apply-launch) we wanted to improve was how we accept references.

Initially this was achieved using a Google form. However, this approach required a lot of manual intervention, preventing automation of reminders and status updates. Also, Google Forms are not very accessible.

While maintaing the reduced question set, we devised a flow that would enable us to collect a reference and have its content be submitted directly to the service. With the limitation of Google Forms removed, we could also give referees the opportunity to correct any errors, and ask them to give a reason for declining to provide a reference.

## Linking to the reference form

We’ll email a link to the form to each referee once a candidate submits their application.

The link must be unique, the URL must contain enough information for us to know which referee and candidate the form relates to, while at the same time being obfuscated to avoid manipulation (for example an ID which could be incremented).

It’ll probably use a token and behave similarly to the magic link we send for sign in.
