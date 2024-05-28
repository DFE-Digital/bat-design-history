---
title: Emailing school users when a claim has been drafted or submitted
description: We email school users when they submit a claim or when a support user drafts a claim on their behalf
date: 2024-05-01
tags:
  - emails
---

<!-- markdownlint-disable MD001 MD025 -->
{% from "email/macro.njk" import appEmail %}

We email school users when they submit a claim or when a support user drafts a claim on their behalf.

## Claim submitted by a school

We email all school users confirming they have submitted a claim.

{{ appEmail({
subject: "Thank you for submitting your claim for mentor training",
content: "
Dear ((firstname)),

You have successfully submitted a claim for mentor training for ((organisation_name)).

Your claim reference is ((reference)).

You can view your claim on Claim funding for mentor training:

https://claim-funding-for-mentor-training.education.gov.uk/sign-in

# Give feedback or report a problem

If you have any questions or feedback, please contact the team at ittmentor.funding@digital.education.gov.uk.

Regards
Claim funding for mentor training team
"
}) }}

## Draft claim added by support

Support users cannot submit claims; they can only draft them.

We email all school users when a support user adds a claim on their behalf. School users can then submit the claim themselves.

{{ appEmail({
subject: "New draft claim for mentor training",
content: "
Dear ((firstname)),

We have added a draft claim for mentor training for ((organisation_name)).

Your claim reference is ((reference)).

You can view the claim, edit and submit it on Claim funding for mentor training:

https://claim-funding-for-mentor-training.education.gov.uk/sign-in

# Give feedback or report a problem

If you have any questions or feedback, please contact the team at ittmentor.funding@digital.education.gov.uk.

Regards
Claim funding for mentor training team
"
}) }}

<!-- markdownlint-enable MD001 MD025 -->
