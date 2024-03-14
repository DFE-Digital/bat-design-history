---
title: Adding claims in Support on behalf of schools
description: We added a way for the Support team to draft claims on behalf of schools
date: 2024-03-03
tags:
  - claims
related:
  items:
    - text: Submitting claims for funding
      href: /claim-funding-for-mentors/submitting-claims-for-funding/
    - text: Adding mentors in Support
      href: /claim-funding-for-mentors/adding-mentors-in-support/
screenshots:
  items:
    - text: Claims list
      src: claims--list.png
    - text: Claim list - empty
      src: claims--list-empty.png
    - text: Claim list - no mentors
      src: claims--list-no-mentors.png
    - text: Add claim - select a provider
      src: add-claim--select-provider.png
    - text: Add claim - select a provider - error
      src: add-claim--select-provider-error.png
    - text: Add claim - select a mentor
      src: add-claim--select-mentors.png
    - text: Add claim - select a mentor - error
      src: add-claim--select-mentors-error.png
    - text: Add claim - hours of training
      src: add-claim--enter-hours-of-training.png
    - text: Add claim - hours of training - error
      src: add-claim--enter-hours-of-training-error.png
    - text: Add claim - hours of training - enter another amount
      src: add-claim--enter-hours-of-training-other-error.png
    - text: Add claim - hours of training - enter an amount between 1 and 20
      src: add-claim--enter-hours-of-training-other-error-range.png
    - text: Add claim - check your answers
      src: add-claim--check-your-answers.png
    - text: Claim added
      src: add-claim--success.png
    - text: Claim details
      src: claims--details.png
---

We added a way for support users to add claims on behalf of schools.

Support users cannot submit claims as the school user needs to agree to a declaration before submitting the claim. This constraint means that claims created by support users are in a ‘draft’ state.

## How it works

### Claim list

On the claim list page, we show:

- an ‘Add claim’ button
- a list of claims in reverse chronological order

For each claim in the list, we show:

- reference number
- accredited provider
- submission date
- status

We paginate the list if the claim list contains more than 25 claims.

When a user adds a claim, we show a success message above the page heading.

Before adding a claim, users must add at least one mentor to the services. If they have not added any mentors, we hide the ‘Add claim’ button and show a message:

> You need to add a mentor before creating a claim.

### Claim details

On the claim details page, we show:

- claim reference number
- accredited provider
- list of mentors
- submitted date
- claim status

We also show a summary list outlining the hours of training for each mentor:

- mentor name
- mentor’s training hours

Change links are included in the summary list if the claim is in a draft state.

Users cannot change any claim details if they or a colleague has submitted the claim.

### Adding a claim

[![Add claim flow](add-claim--flow.png)](add-claim--flow.png)

Selecting ‘Add claim’ starts the add claim flow.

The ‘Add claim’ flow has five steps:

1. Select a provider
2. Select mentors to add to the claim
3. Select the hours of training completed by each mentor
4. Check your answers
5. Confirmation

#### Select a provider

The first step in the ‘Add claim’ flow is to select the provider.

The provider form has two options:

- Best Practice Network (BPN)
- National Institute of Teaching (NIoT)

##### Validation rules

If the user does not select an option, we show an error message:

> Select a provider

#### Select mentors to add to the claim

The next step is to add mentors to the claim.

Users can select as many mentors as they want.

We display mentors in a list of checkboxes.

For each mentor, we show:

- full name
- TRN - as a hint

##### Validation rules

If the user does not select an option, we show an error message:

> Select a mentor

#### Select the hours of training completed by each mentor

The next step is to select the hours of training completed by each mentor.

The hours form has three options:

- 20 hours
- 6 hours
- Other amount

Selecting ‘Other amount’ reveals an input for the user to add the number of hours manually.

##### Validation rules

If the user does not select an option, we show an error message:

> Select the number of hours

If the user selects ‘Other amount’ but does not input an amount, we show an error message:

> Enter the number of hours

If the user selects ‘Other amount’ and enters an amount that is not a number, is not a whole number or is greater than 20 hours, we show an error message:

> Enter the number of hours between 1 and 20

<!-- If the user selects an amount for a mentor and their total hours of training with the provider exceeds 20 hours, we show an error message:

> The maximum amount of hours allowed to claim for is 20 -->

#### Check your answers

The final step is to check your answers.

We show:

- accredited provider
- mentors
- hours of training - for each mentor

If a user returns to a previous answer using the change link, their entered information is pre-populated.

When finished, the user sees the ‘Continue’ button, which should return them to the check answers page.

If a user changes their response on the ‘Mentors’ page by:

- adding a mentor or mentors to the claim, they will need to enter in the hours of training for each new mentor before returning to the check your answers page
- removing a mentor from the claim, they will return to the check your answers page, with the mentor’s details and hours of training removed

When the user adds a claim, we show a success message on the organisation’s claims list.

## Further considerations

Since we will allow support users to create draft claims, we must consider how school users will review and submit these claims.
