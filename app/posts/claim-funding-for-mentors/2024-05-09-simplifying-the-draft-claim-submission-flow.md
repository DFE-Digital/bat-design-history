---
title: Simplifying the draft claim submission flow
description: We updated the draft claim flow, replacing the check your answers page with a declaration page
date: 2024-05-09
tags:
  - claims
  - draft
related:
  items:
    - text: Submitting draft claims
      href: /claim-funding-for-mentors/submitting-draft-claims/
    - text: Adding claims in Support on behalf of schools in Support
      href: /claim-funding-for-mentors/adding-claims-in-support-on-behalf-of-schools/
    - text: Submitting claims for funding
      href: /claim-funding-for-mentors/submitting-claims-for-funding/
screenshots:
  items:
    - text: Claims list
      src: claims--list.png
    - text: Claim details - submitted status
      src: claim--details-submitted.png
    - text: Claim details - draft status
      src: claim--details-draft.png
    - text: Submit claim - declaration
      src: submit-claim--declaration.png
    - text: Submit claim - confirmation
      src: submit-claim--confirmation.png
---

Previously, we added a way for users to [submit draft claims](/claim-funding-for-mentors/submitting-draft-claims/).

The process for submitting a draft claim included a ‘Check your answers’ page, which included change links. In research, users found this confusing since the previous ‘Claim details’ page also had change links. The duplication of change links was unnecessary.

## What we changed

We updated the process for school users to submit draft claims, removing the check your answers page and replacing it with a declaration page.

## How it works

[![Submit draft claim flow](submit-draft-claim--flow.png 'Submit draft claim flow')](submit-draft-claim--flow.png)

From the claim details page, the ‘Submit claim’ flow has two steps:

1. Declaration
2. Confirmation

### Declaration

On the declaration page, we show three summary lists containing the claim details:

- school
- accredited provider
- mentors
- hours of training - for each mentor
- total hours claimed
- hourly rate
- claim amount

Users cannot change any details of the claim at this stage.

Below the summary lists, we include a declaration:

> By submitting this claim, I confirm that:
>
> - I am authorised to claim on behalf of the school
> - I have read and accepted the grant terms and conditions
> - the information detailed above is accurate, and the total I am claiming back has been used to support the cost of the mentor training
> - I will provide evidence to support this claim if requested by the Department for Education

We also include a warning message:

{% from "dist/govuk/components/warning-text/macro.njk" import govukWarningText %}
{{ govukWarningText({
  text: "You will not be able to change any of the claim details once you have submitted it.",
  iconFallbackText: "Warning"
}) }}

Users must agree to the declaration when submitting the claim.

### Confirmation

When the draft claim is submitted, we show a confirmation page that includes a:

- reference number
- description of what happens next
