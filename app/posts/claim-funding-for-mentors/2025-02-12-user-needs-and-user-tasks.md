---
title: Private beta user needs and tasks
description: Claim funding for mentor training user needs and tasks
date: 2025-02-12
tags:
  - research
  - user needs
  - user tasks
related:
  items:
    - text: Changes to the service’s start page
      href: /claim-funding-for-mentors/changes-to-the-services-start-page/
    - text: Round 9 multi-academy trust research findings
      href: /claim-funding-for-mentors/round-9-multi-academy-trust-research-findings/
    - text: Initial teacher training reform funding guidance
      href: https://www.gov.uk/government/publications/initial-teacher-training-reform-funding-guidance
    - text: Round 10 support console research findings
      href: /claim-funding-for-mentors/round-10-support-console-research-findings/
    - text: Round 12 support console research findings
      href: /claim-funding-for-mentors/round-12-support-console-research-findings/
    - text: Discovery phase user needs
      href: /claim-funding-for-mentors/mentoring-discovery-phase-user-needs/
    - text: Private beta user tasks
      href: /claim-funding-for-mentors/private-beta-user-tasks/
---

## User needs

During the Discovery phase, the team identified high-level user needs related to mentoring. These are detailed in the post on [discovery user needs](/claim-funding-for-mentors/mentoring-discovery-phase-user-needs/).

By referencing these user needs, the private beta team added six high-level user needs that address the problem that the Claim funding for mentor training (Claim) service solves.

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As an ITT placement school,
We need teachers to sign up to become mentors,
So that our trainee teachers are supported throughout their placements to become successful teachers."
}) }}

{{ appUserNeed({
  description: "As an ITT placement school,
We need support with mentoring,
So that we can reduce the burden of becoming a mentor on our teachers and lesson time."
}) }}

{{ appUserNeed({
  description: "As an ITT placement school,
We need support with mentoring,
So that our teachers find becoming a mentor beneficial rather than a burden."
}) }}

{{ appUserNeed({
  description: "As an ITT placement school,
I need to know if any funding is available to support mentoring,
So that I can reduce the burden on schools to submit claims individually."
}) }}

{{ appUserNeed({
  description: "As an ITT placement school,
I need to be able to submit claims on behalf of other schools within our trust,
So that any costs due to time taken out for mentor training is covered."
}) }}

{{ appUserNeed({
  description: "As an ITT provider,
We need schools to understand the benefits of mentoring,
So that their staff are encouraged to become mentors and participate in the training we provide."
}) }}

## User tasks

Throughout the private beta, we created a list of user tasks.

A user task is a specific activity or set of activities that a user needs to perform to achieve a particular goal or complete a process, such as submitting a claim or sending claims for payment.

Working with user tasks enabled the design and development team to create user journeys and features specific to our users’ tasks while keeping the service’s overarching user needs in mind.

### User types

When breaking down the journey into user tasks, we first identified all the users who would interact with the Claim service, including:

- school users who would submit a claim
- multi-academy trust users who submit claims on behalf of multiple schools within their trust
- accredited provider users who would need to support school users and be responsible for auditing claims
- internal support colleagues responsible for administering the service, undertaking the payment, auditing and clawback processes, as well as communicating with both school and provider users

### Associated user tasks

We identified every task they would need to undertake for each user type and why.

The complete list of user tasks is outlined this [design history](/claim-funding-for-mentors/private-beta-user-tasks/).

Below is an example of a user task for each user type and why we needed to know this information.

#### Example school user task

“As someone in an administrative or mentor role at a school,
I need to know what is required of me before I start a claim,
So that I can prepare all the required information before I start our claim.”

#### How we used this user task

This user task underpinned our work on producing and iterating the service’s start page, which is detailed in this [design history](/claim-funding-for-mentors/changes-to-the-services-start-page/). It also informed our private beta and public beta communication plans.

#### Example multi-academy school user task

“As someone in an administrative or mentor role at a multi-academy trust,
We need to be able to submit claims on behalf of other schools within our trust,
So that we can reduce the burden on schools to submit claims individually.”

#### How we used this user task

In our user research plan for the private beta, we ensured that we would undertake a [round of research](/claim-funding-for-mentors/round-9-multi-academy-trust-research-findings/) specifically with multi-academy trust users to ensure that their user needs were met.

#### Example accredited provider user task

“As an accredited provider,
We need schools to understand the benefits of claiming funding and how it will support with mentoring and the training they are required to do,
So that they are encouraged to claim all the funding that they are entitled to and not miss out despite having busy schedules.”

#### How we used this user task

We worked closely with accredited providers to ensure that the [guidance]( https://www.gov.uk/government/publications/initial-teacher-training-reform-funding-guidance) we produced for placement schools included all the relevant information required to submit timely and accurate claims.

#### Example accredited provider user task

“As a support user at the Department for Education (DfE),
I need to know what steps I need to take to send claims to the Education and Skills Funding Agency (ESFA) for payment,
So that I can quickly, confidently and accurately complete the task.”

#### How we used this user task

We used this task to inform the creation of a playbook which details all the user tasks support users need to undertake.

In addition, we conducted two rounds of user research with the support team, which informed iterations of the service:

- [First round](/claim-funding-for-mentors/round-10-support-console-research-findings/)
- [Second round](/claim-funding-for-mentors/round-11-support-console-research-findings/)
