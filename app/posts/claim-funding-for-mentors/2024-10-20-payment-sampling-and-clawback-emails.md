---
title: Payment, sampling and clawback emails
description: Emails we send to schools, accredited providers and the ESFA
date: 2024-10-20
tags:
  - payments
  - sampling
  - clawbacks
  - emails
related:
  items:
    - text: Managing payments in support
      href: /claim-funding-for-mentors/managing-payments-in-support/
    - text: Auditing claims in support
      href: /claim-funding-for-mentors/auditing-claims-in-support/
    - text: Clawing back claims via Support after they have been paid
      href: /claim-funding-for-mentors/clawing-back-claims-via-support-after-they-have-been-paid/
---

<!-- markdownlint-disable MD001 MD025 -->
{% from "email/macro.njk" import appEmail %}

## Payments

### Sending claims to the ESFA for payment

{{ appEmail({
subject: "Claims ready for payment - Claim funding for mentor training",
content: "
To ESFA,

These claims from the Claim funding for mentor training service (Claim) are ready for payment — the link to the latest CSV file is valid for 7 days:

((CSV file link))

What you need to do:

1. Check and validate the claims in the CSV file by marking them as ‘paid’ or ‘unpaid’ in the ‘claim_status’ column.

2. If you mark a claim as ‘unpaid’, add the reason in the ‘claim_unpaid_reason’ column.

3. Reply to this email and attach the updated CSV file.

The Claim Support team will follow up on the reasons for unpaid claims and email back an updated version.

If you have a problem opening the link or it has expired, reply to this email and request that it be sent again.

# Give feedback or report a problem

If you have any questions or feedback, please contact the team at <ittmentor.funding@digital.education.gov.uk>.

Regards
Claim funding for mentor training team
"
}) }}

## Sampling

### Sending claims to the accredited provider for approval

{{ appEmail({
subject: "ITT mentor claims need to be assured",
content: "
Dear ((firstname)),

These claims from the Claim funding for mentor training service (Claim) are ready for post-payment assurance. The link to the latest CSV file is valid for 7 days.

((CSV file link))

What you need to do:

1. Check the information detailed in the claims matches your information, specifically the mentor names and the hours of training. If it does, mark them as ‘yes’ in the ‘claim_assured’ column.

2. If you disagree with the information, please contact the placement school to discuss it. They may have additional evidence.

3. If they cannot provide any additional information or cannot provide information that you are not content with, mark the claim as ‘no’ in the ‘claim_assured’ column. In the ‘claim_not_assured_reason’ column, indicate why the claim has not been assured. For example, the mentor’s name is wrong, or the number of hours exceeds the evidence that you have.

4. If the placement school provides any additional information you are content with, mark the claim as ‘yes’ in the ‘claim_assured’ column.

5. Reply to this email and attach the updated CSV.

The Claim Support team will follow up with the placement schools on the claims that have not been assured. You will not need to take further action.

If you have a problem opening the link or it has expired, reply to this email and request that it be sent again.

# Give feedback or report a problem

If you have any questions or feedback, please contact the team at <ittmentor.funding@digital.education.gov.uk>.

Regards
Claim funding for mentor training team
"
}) }}

## Clawbacks

### Sending claims to the ESFA for clawback

{{ appEmail({
subject: "Claims requiring clawback - Claim funding for mentor training",
content: "
To ESFA,

The claims in the CSV file link are ready for clawback— the link to the latest CSV file is valid for 7 days:

((CSV file link))

What you need to do:

1. Check and validate the claims in the CSV file by marking them as ‘clawback_in_progress’ or ‘clawback_complete’ in the ‘claim_status’ column.

2. If you mark a claim as ‘clawback_in_progress’, add the reason to the ‘clawback_unsuccessful_reason’ column.

3. Reply to this email and attach the updated CSV file.

The Claim Support team will follow up on the reasons for the claims that you could not claw back and email you an updated version.

If you have a problem opening the link or it has expired, reply to this email and request that it be sent again.

# Give feedback or report a problem

If you have any questions or feedback, please contact the team at <ittmentor.funding@digital.education.gov.uk>.

Regards
Claim funding for mentor training team
"
}) }}

### Sending clawback details to the school

{{ appEmail({
subject: "ITT mentor claim requires a clawback",
content: "
Dear ((firstname)),

We have amended your claim to reflect the amount being clawed back by the Education and Skills Funding Agency (ESFA). They will contact you to discuss how they will claim this money from you.

The affected claim reference is: ((claim reference))

You can view the updated claim on Claim funding for mentor training:

((link to service))

# Give feedback or report a problem

If you have any questions or feedback, please contact the team at <ittmentor.funding@digital.education.gov.uk>.

Regards
Claim funding for mentor training team
"
}) }}

<!-- markdownlint-enable MD001 MD025 -->
