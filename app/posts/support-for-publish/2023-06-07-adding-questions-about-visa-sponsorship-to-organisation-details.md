---
title: Adding questions about visa sponsorship to organisation details
description: We added questions about visa sponsorship to the edit organisation flow
date: 2023-06-07
tags:
  - visa sponsorship
related:
  items:
    - text: Adding questions about visa sponsorship to courses
      href: /publish-teacher-training-courses/adding-questions-about-visa-sponsorship-to-courses/
    - text: Adding and editing organisations
      href: /support-for-publish/adding-and-editing-organisations/
screenshots:
  items:
    - text: Organisation details
      src: organisation-details.png
    - text: Organisation details - visa sponsorship answers not entered
      src: organisation-details--visa-sponsorship-not-entered.png
    - text: Student visas - answers not entered
      src: student-visas--not-entered.png
    - text: Student visas - error message
      src: student-visas--error.png
    - text: Student visas
      src: student-visas.png
    - text: Student visas - updated
      src: student-visas--updated.png
    - text: Skilled Worker visas - answers not entered
      src: skilled-worker-visas--not-entered.png
    - text: Skilled Worker visas - error message
      src: skilled-worker-visas--error.png
    - text: Skilled Worker visas
      src: skilled-worker-visas.png
    - text: Skilled Worker visas - updated
      src: skilled-worker-visas--updated.png
---

Previously, we did some work to [add questions about visa sponsorship to courses](/publish-teacher-training-courses/adding-questions-about-visa-sponsorship-to-courses/) to Publish teacher training courses (Publish).

We added the same questions to the Support for Publish teacher training courses (Support) so that support agents can change visa sponsorship information on behalf of providers.

## Types of visa available to candidates

Depending on a candidate’s circumstances and the course they are applying for, organisations may be able to sponsor a:

- Student visa
- Skilled Worker visa

The Student visa:

- is available only for fee-paying courses
- can only be sponsored by the accredited provider ratifying the course

The Skilled Worker visa:

- is available only for salaried courses
- can be sponsored by the school where the candidate would be working or by the local authority or multi-academy trust that the school operates under

## What we changed

We added visa sponsorship questions to the organisation details page in Support.

## How it works

### Organisation details page

On the organisation details page, we show a section called ‘Visa sponsorship’. Within this section, we show a summary list containing two items:

- Student visas
- Skilled worker visas

If the support team or organisation has answered the questions, we show the answer and include a change link. There are 2 possible answers:

- Yes - can sponsor
- No - cannot sponsor

Answers to these questions are used in the organisation’s or their training partners’ courses in Publish. This makes it easier for them to give the right answer on whether they can sponsor a Student or Skilled Worker visa for a course.

If the Support team or organisation has not answered the Student visas question, we show a message and link to:

> Select if this organisation can sponsor Student visas

If the Support team or organisation has not answered the Skilled Worker visas question, we show a message and link to:

> Select if this organisation can sponsor Skilled Worker visas

### Student visas question page

On the Student visas question page, we ask, ‘Can this organisation sponsor Student visas they or their training partners run?’.

The question has 2 options:

- Yes
- No

When a user updates the answer, the change does not impact the courses the organisation or their training partners have already created. For clarity, we show the message:

> Changing the answer will not change visa information for courses this organisation or their training partners have already created.

We do not default the question to a specific answer.

If the user has not answered the question, we show an error message:

> Select if this organisation can sponsor Student visas they or their training partners run

### Skilled Worker visas question page

On the Skilled Worker visas question page, we ask, ‘Can this organisation sponsor Skilled Worker visas for courses they run?’.

The question has 2 options:

- Yes
- No

When a user updates the answer, the change does not impact the courses the organisation has already created. For clarity, we show the message:

> Changing the answer will not change visa information for courses this organisation has already created.

We do not default the question to a specific answer.

If the user has not answered the question, we show an error message:

> Select if this organisation can sponsor Skilled Worker visas for courses they run

## Further considerations

We considered some changes that we did not implement. These included:

- creating an onboarding process for Publish users
- changing visa sponsorship in bulk for courses

### Creating an onboarding process for Publish users

Currently, we have a [support process to onboard organisations](/support-for-publish/adding-and-editing-organisations/) onto Publish. However, we do not have a process for users to complete their setup.

Users are shown an empty course list when they first enter Publish. We do not tell them what information to add before creating and publishing courses.

For example, to successfully create and publish a course, a provider must have previously set up:

- schools
- study sites
- an accredited provider - if the organisation is a training partner
- visa sponsorship details

In future, we will consider creating an onboarding process for Publish users to ensure their account is correctly set up.

### Changing visa sponsorship in bulk for courses

When a user changes their answer to the visa sponsorship questions, the changes are not reflected in the courses they or their training partners run. This means they need to amend each course individually.

We will consider improving the ‘Change’ flow by including the option to update courses.
