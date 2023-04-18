---
title: Helping users decide whether to contact us about a sign in from a new device
description: We improved the email we send to users when they appear to have used a new device to sign into the service.
date: 2022-04-04
tags:
  - security
  - sign in
---

{% from "email/macro.njk" import appEmail %}

We send an email to users if they appear to have used a new device to sign into the service. It gives details of the IP address and browser which were used to sign in.

Users sometimes contact the support team to ask about this email. They are concerned that someone else has signed in to their account.

The support team often finds that there is no problem. We want to make the email clearer to help users decide whether to contact us.

## What we did

The new email gives the date and time when the sign in occurred. This will help users work out whether it was them who signed in. If it was them then they do not need to contact us.

We've removed the mention of the IP address and browser, as most users will not be able to interpret those details. For example, they’re unlikely to know their usual IP address.

We also give reasons why the sign in could have been incorrectly assessed as being from a new device. This will help users understand what has happened.

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
  subject: "Sign in from new device detected - manage teacher training applications",
  content: "

Dear ((first_name))

Your account details were used to sign in to manage teacher training applications on ((date)) at ((time)).

You can ignore this email if you signed in. Contact us immediately if you did not sign in.

You've received this email because it looks like you signed in from a new device. It could also be because you used the same device as usual but:

- you’ve recently changed your internet browser
- you’ve cleared the cookies on your device
- the cookies for the service have expired on your device - this happens automatically every 6 months and you do not need to take any action

# Get help

Get help, report a problem or give feedback at [becomingateacher@digital.education.gov.uk](mailto:becomingateacher@digital.education.gov.uk).
  "
}) }}

## Future considerations

We think that the support team will be able to respond to queries based on the user’s account details. If they find that they need additional information, we’ll consider adding:

- IP address
- browser
- device type
- location
