---
title: Adding ‘Safeguarding concerns’ as a reason for trainee withdrawal
description: We added a way to capture safeguarding concerns to the ‘withdraw trainee’ user journey
date: 2025-09-19
tags:
  - withdrawals
  - trainees
  - safeguarding
related:
  items:
    - text: Improving the withdrawals journey
      href: /register-trainee-teachers/improving-the-withdrawals-journey/
    - text: Understanding trainee withdrawals
      href: /register-trainee-teachers/understanding-trainee-withdrawals/
    - text: Analysing the updated withdrawal journey
      href: /register-trainee-teachers/analysing-the-updated-withdrawal-journey/
screenshots:
  items:
    - text: Start the withdrawals journey
      src: trainee-withdrawals--start.png
    - text: Question page - When did the trainee withdraw?
      src: trainee-withdrawals--when.png
    - text: Question page with error - When did the trainee withdraw?
      src: trainee-withdrawals--when-with-error.png
    - text: Question page with date error - When did the trainee withdraw?
      src: trainee-withdrawals--when-with-date-error.png
    - text: Question page - Who chose to withdraw the trainee?
      src: trainee-withdrawals--who.png
    - text: Question page with error - Who chose to withdraw the trainee?
      src: trainee-withdrawals--who-with-error.png
    - text: Question page - Why did you [the provider] withdraw the trainee?
      src: trainee-withdrawals--provider-why.png
    - text: Question page with error - Why did you [the provider] withdraw the trainee?
      src: trainee-withdrawals--provider-why-with-error.png
    - text: Question page with conditional reveal error - Why did you [the provider] withdraw the trainee?
      src: trainee-withdrawals--provider-why-with-safeguarding-concerns-error.png
    - text: Question page - Why did the trainee withdraw?
      src: trainee-withdrawals--trainee-why.png
    - text: Question page with error - Why did the trainee withdraw?
      src: trainee-withdrawals--trainee-why-with-error.png
    - text: Question page with conditional reveal error - Why did the trainee withdraw?
      src: trainee-withdrawals--trainee-why-with-safeguarding-concerns-error.png
    - text: Question page - Would the trainee be interested in becoming a teacher in the future?
      src: trainee-withdrawals--interested.png
    - text: Question page with error - Would the trainee be interested in becoming a teacher in the future?
      src: trainee-withdrawals--interested-with-error.png
    - text: Check your answers page - provider view
      src: trainee-withdrawals--provider-check-your-answers.png
    - text: Check your answers page - trainee view
      src: trainee-withdrawals--trainee-check-your-answers.png
---

We added a way to capture safeguarding concerns to the ‘withdraw trainee’ user journey.

ADD BACKGROUND TO THE WORK

## What we changed

We have:

- added ‘Safeguarding concerns’ as a withdrawal reason
- updated the check your answers page to include the text of the questions, not derivatives
- changed the wording of the question asking who initiated the withdrawal
- updated content on the start page
- updated the page heading captions to include the name of the flow: ‘Withdraw trainee’

## How it works

The ‘Withdraw trainee’ flow has 6 steps:

- Starting the withdrawals journey
- Stating when the trainee withdrew
- Choosing who initiated the withdrawal
- Giving reasons why the trainee withdrew
- Asking if the trainee would be interested in applying again
- Checking your answers

### Starting the withdrawals journey

The first step in the ‘Withdraw trainee’ flow gives the user information about the withdrawal process.

### When the trainee withdrew

The second step in the ‘Withdraw trainee’ flow asks “When did the trainee withdraw?”. We show 3 options:

- Today
- Yesterday
- Another date

If users select ‘Another date’, we show a date input in a conditional.

The question is required. If users do not answer the question, we show an error message:

> Select when the trainee withdrew

If users select ‘Another date’ but do not enter a date, we show an error message:

> Enter the date the trainee withdrew

If the user enters an incomplete or incorrect date, we follow the [GOV.UK design system guidance on validating dates](https://design-system.service.gov.uk/components/date-input/#error-messages).

### Who chose to withdraw the trainee

The third step in the ‘Withdraw trainee’ flow asks, “Who chose to withdraw the trainee?”. We show 2 options:

- we chose to withdraw the trainee
- the trainee chose to withdraw

The question is required. If users do not answer the question, we show an error message:

> Select who chose to withdraw the trainee

This question is a gate question, which changes the content and options on the subsequent question page, asking why the trainee withdrew.

### Why the trainee withdrew

The fourth step in the ‘Withdraw trainee’ flow depends on the previous question asking who chose to withdraw the trainee. There are 2 versions of the page: a provider view and a trainee view.

#### The provider withdrew the trainee

This question asks, “Why did you withdraw the trainee?” We show 9 options:

- this training record was added in error
- trainee removed for mandatory reasons
- they stopped attending/communicating
- trainee behaviour or attitude
- lack of progress during placements
- lack of academic progress
- not meeting QTS standards
- safeguarding concerns - including a conditional reveal to give details
- another reason - including a conditional reveal to give details

The question is required. If users do not answer the question, we show an error message:

> Select why you withdrew the trainee

If users select ‘Safeguarding concerns’ but do not enter details of the concerns, we show an error message:

> Enter the concerns

#### The trainee chose to withdraw

This question asks, “Why did the trainee choose to withdraw?” We show 11 options:

- trainee behaviour or attitude
- lack of academic progress
- lack of progress during placements
- trainee workload issues
- not meeting QTS standards
- change in their personal or health situation
- no longer want to pursue a teaching career
- they never intended to obtain QTS
- they moved to a different ITT course
- safeguarding concerns - including a conditional reveal to give details
- another reason - including a conditional reveal to give details

The question is required. If users do not answer the question, we show an error message:

> Select why the trainee chose to withdraw

If users select ‘Safeguarding concerns’ but do not enter details of the concerns, we show an error message:

> Enter the concerns

### Asking if the trainee would be interested in applying again

The fifth step in the ‘Withdraw trainee’ flow asks, “Would the trainee be interested in becoming a teacher in the future?”. We show 3 options:

- yes
- no
- I don’t know

The question is required. If users do not answer the question, we show an error message:

> Select if the trainee would be interested in becoming a teacher in the future

### Checking your answers

The sixth and final step in the ‘Withdraw trainee’ flow is to check your answers.

We show a summary list containing answers to the questions:

- when did the trainee withdraw?
- who chose to withdraw the trainee?
- why did you withdraw the trainee? - if it is the provider withdrawing
- why did the trainee choose to withdraw? - if the provider is withdrawing on behalf of the trainee
- would the trainee be interested in becoming a teacher in the future?

For each question, we show the answer adjacent to the label.

All answers can be changed.

#### When the trainee withdrew

If users enter a date the trainee withdrew, we show the full date, for example, “1 April 2025”. Otherwise we show the option “Today” or “Yesterday”.

### Withdrawal reasons

We show the withdrawal reasons as a bulleted list. The list is spaced out to make it easier to read.

If users choose ‘Safeguarding concerns’ and enter their concerns, we show them directly below the bullet point.

If users choose ‘Another reason’ and enter their reason, we show the reason directly below the bullet point.

*[ITT]: initial teacher training
*[QTS]: qualified teacher status
