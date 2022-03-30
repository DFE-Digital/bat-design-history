---
title: Helping users decide whether to contact us about a sign in from a new device
description: We improved the email we send to users when they appear to have used a new device to sign into the service.
date: 2022-03-31
---

{% from "email/macro.njk" import appEmail %}

We send an email to users if they appear to have used a new device to sign into the service. It gives details of the IP address and browser which were used to sign in.

Users sometimes contact the support team to ask about this email. They are concerned that someone else has signed in to their account.

The support team often finds that there is no problem. We want to make the email clearer so that users

## What we did

The new email gives the date and time when the sign in occurred. The most important thing is for the user to decide whether that was them or someone else.

We've removed the mention of the IP address and device, as most users will not be able to interpret those details. For example, they are unlikely to know their own IP address.

We explain that users may have received the email because:

- they’ve recently changed your internet browser
- they’ve cleared the cookies on your device
- the cookies for the service have expired on their device - this happens automatically every 6 months

This is because users do not need

{{ appEmail({
  subject: "Sign in from new device detected - manage teacher training applications",
  content: "

Dear ((first_name))

Your account details were used to sign in to manage teacher training applications on ((date)) at ((time)).

You've received this email because it looks like you signed in from a new device. This could also be because you used the same device as usual but:

- you’ve recently changed your internet browser
- you’ve cleared the cookies on your device
- the cookies for the service have expired on your device - this happens automatically every 6 months and you do not need to take any action

You can ignore this email if you signed in. Contact us immediately if you did not sign in.

# Get help

Get help, report a problem or give feedback at [becomingateacher@digital.education.gov.uk](mailto:becomingateacher@digital.education.gov.uk).
  "
}) }}

## Future considerations

We should monitor the level of contact the support team receives regarding this query to measure if the new changes have been successful.
