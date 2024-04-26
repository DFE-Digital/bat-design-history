---
title: Submitting draft claims
description: We added a way for school users to submit draft claims
date: 2024-04-12
tags:
  - claims
related:
  items:
    - text: Submitting claims for funding
      href: /claim-funding-for-mentors/submitting-claims-for-funding/
    - text: Adding claims in Support on behalf of schools
      href: /claim-funding-for-mentors/adding-claims-in-support-on-behalf-of-schools/
screenshots:
  items:
    - text: Claims list
      src: claims--list.png
    - text: Claim details - submitted status
      src: claim--details-submitted.png
    - text: Claim details - draft status
      src: claim--details-draft.png
    - text: Submit claim - check your answers
      src: submit-claim--check-your-answers.png
    - text: Submit claim - confirmation
      src: submit-claim--confirmation.png
---

In a previous piece of work, we added a way for support users to [add claims on behalf of schools](/claim-funding-for-mentors/adding-claims-in-support-on-behalf-of-schools/).

Support users cannot submit claims as school users must agree to a declaration before submitting the claim. This constraint means that claims created by support users are in a ‘draft’ state.

## What we changed

We added a way for school users to submit draft claims.

## How it works

[![Submit draft claim flow](submit-draft-claim--flow.png 'Submit draft claim flow')](submit-draft-claim--flow.png)

From the claim details page, the ‘Submit claim’ flow has two steps:

1. Check your answers
2. Confirmation

### Check your answers

On the check your answers, we show:

- school
- accredited provider
- mentors
- hours of training - for each mentor
- claim amount

Users can change:

- accredited provider
- mentors
- hours of training - for each mentor

Users must agree to a declaration when submitting the claim.

### Confirmation

When the draft claim is submitted, we show a confirmation page that includes a:

- reference number
- description of what happens next

## Further considerations

We considered showing the check your answers page from the claims list for all draft claims.

We did not implement this approach. When a school user selects to view a claim from the claims list, we show the claim details regardless of the claim’s status (draft or submitted).

This approach means:

- we always show the same claim details page to the user
- we follow a familiar pattern used in all lists used in Becoming a Teacher (BAT) services
- users don’t need to know why one claim details page looks different from another
- users can decide what to do next - we do not assume intent (submit claim or view claim)
The downside of this approach is that we will have partly duplicated functionality, such as the summary lists with change links.

We will review this decision in the future. For example, we may want to introduce a draft claims list to optimise the user’s tasks.
