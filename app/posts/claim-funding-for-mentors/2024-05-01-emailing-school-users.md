---
title: Emailing school users
description: We email school users when support or another school user adds or removes them from the service
date: 2024-05-01T13:00:00+00:00
tags:
  - emails
  - users
related:
  items:
    - text: Emailing support users
      href: /claim-funding-for-mentors/emailing-support-users/
---

<!-- markdownlint-disable MD001 MD025 -->
{% from "email/macro.njk" import appEmail %}

We email school users when support or another school user adds or removes them from the service.

## School user added

{{ appEmail({
subject: "Invitation to join Claim funding for mentor training",
content: "
Dear ((firstname)),

You have been invited to join the Claim funding mentor training service for ((organisation_name)).

# Sign in to submit claims

If you have a DfE Sign-in account, you can use it to sign in:

https://claim-funding-for-mentor-training.education.gov.uk/sign-in

If you need to create a DfE Sign-in account, you can do this after clicking ‘Sign in using DfE Sign-in’.

After creating a DfE Sign-in account, you must return to this email and [sign in to access the service](https://claim-funding-for-mentor-training.education.gov.uk/sign-in).

# Give feedback or report a problem

If you have any questions or feedback, please contact the team at ittmentor.funding@digital.education.gov.uk.

Regards
Claim funding for mentor training team
"
}) }}

## School user removed

{{ appEmail({
subject: "You have been removed from Claim funding for mentor training",
content: "
Dear ((firstname)),

You have been removed from the Claim funding for mentor training service for ((organisation_name)).

# Give feedback or report a problem

If you have any questions or feedback, please contact the team at ittmentor.funding@digital.education.gov.uk.

Regards
Claim funding for mentor training team
"
}) }}

<!-- markdownlint-enable MD001 MD025 -->
