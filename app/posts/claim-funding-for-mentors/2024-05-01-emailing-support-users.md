---
title: Emailing support users
description: We email support users when they have been added or removed from the service
date: 2024-05-01T12:00:00+00:00
tags:
  - emails
---

<!-- markdownlint-disable MD001 MD025 -->
{% from "email/macro.njk" import appEmail %}

We email support users when they have been added or removed from the service by another support user.

## Support user added

{{ appEmail({
subject: "Invitation to join Claim funding for mentor training",
content: "
Dear ((firstname)),

You have been invited to join the Claim funding for mentor training service.

# Sign in to the support site

If you have a DfE Sign-in account, you can use it to sign in:

https://claim-funding-for-mentor-training.education.gov.uk/sign-in

If you need to create a DfE Sign-in account, you can do this after clicking ‘Sign in using DfE Sign-in’.

After creating a DfE Sign-in account, must to return to this email and [sign in to access the service](https://claim-funding-for-mentor-training.education.gov.uk/sign-in).

# Give feedback or report a problem

If you have any questions or feedback, please [contact the service team on Slack](https://ukgovernmentdfe.slack.com/archives/C0657JE64HX).

Regards
Claim funding for mentor training team
"
}) }}

## Support user removed

{{ appEmail({
subject: "You have been removed from Claim funding for mentor training",
content: "
Dear ((firstname)),

You have been removed from the Claim funding for mentor training service.

If you think this was a mistake, [contact the service team on Slack](https://ukgovernmentdfe.slack.com/archives/C0657JE64HX).

Regards
Claim funding for mentor training team
"
}) }}

<!-- markdownlint-enable MD001 MD025 -->
