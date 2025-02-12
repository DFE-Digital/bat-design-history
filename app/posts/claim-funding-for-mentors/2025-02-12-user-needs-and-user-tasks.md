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
    - text: Round 11 support console research findings
      href: /claim-funding-for-mentors/round-11-support-console-research-findings/

---

## User needs

During the Discovery phase, the team identified high level user needs related to mentoring. These are shared in the Product – Mentoring Disco folder in TWD-mentoring SharePoint.

Of these, there are 5 high level user needs that address the problem that the Claim Funding for Mentor Training service (Claim) solves.

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As an ITT placement school,
we need teachers to sign up to become mentors,  
so that our trainee teachers are supported throughout their placements in becoming successful teachers .”
}) }}

{{ appUserNeed({
  description: "As an ITT placement school,
we need support with mentoring,
so that we can reduce the burden becoming a mentor has on our teachers and lesson time.”
}) }}

{{ appUserNeed({
  description: "As an ITT placement school,
we need support with mentoring,
so that our teachers find becoming a mentor beneficial rather than a burden.”
}) }}

{{ appUserNeed({
  description: "As an ITT placement school,
I need to know if any funding is available to support mentoring,
So that I am able to reduce the burden on schools having to submit claims individually."
}) }}

{{ appUserNeed({
  description: "As an ITT placement school,
  I need to be able to submit claims on behalf of other schools within our trust,
so that any costs due to time taken out for mentor training is covered.”
}) }}

{{ appUserNeed({
  description: " As an ITT provider,
we need schools to understand the benefits of mentoring,
so that their staff are encouraged to become a mentor and take part in the training we provide.”
}) }}

## User tasks

Throughout private beta, we created a list of user tasks.

Working with user tasks enabled the design and development team to create user journeys and features specific to the tasks or that our users need to complete, whilst keeping the overarching user needs of the service in mind.

### User types

When breaking down the journey into user tasks, we first identified all the users who would interact with the Claim service:

- School user who would submit a claim
- Multi-academy trust user who submit claims on behalf of multiple schools within their trust
- Accredited provider user who would need to support school users and be responsible for auditing claims
- Internal support colleagues, responsible for administering the service, undertaking the payment, auditing and clawback processes, as well as communicating with both school and provider users

### Associated user tasks

For each user type we then identified every task through the journey they would need to undertake and why.
The full list of user types is stored in the new Claim funding SharePoint.
Below is an example of a user task for each user type and why we needed to know this information.

#### Example school user task

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As someone in an administrative or mentor role at a school,
I need to know what is required of me before I start a claim,
so that I can prepare all the information required information ready before I start our claim.”
}) }}

#### How we used this user task

This user task underpinned our work on producing and iterating the service’s start page [Changes to the service’s start page](/claim-funding-for-mentors/changes-to-the-services-start-page/) as well informing our private beta and public beta communication plans.

#### Example multi-academy school user task

{{ appUserNeed({
  description: "As someone in an administrative or mentor role at a multi-academy trust,
we need to be able to submit claims on behalf of other schools within our trust,
so that we can reduce the burden on schools having to submit claims individually.”
}) }}

#### How we used this user task

We ensured in our user research plan for the private beta that we would undertake a [round](/claim-funding-for-mentors/round-9-multi-academy-trust-research-findings/) specifically with multi-academy trust users, to ensure that their user needs were met.

#### Example accredited provider user task

{{ appUserNeed({
  description: " As an accredited provider,
we need schools to understand the benefits of claiming funding and how it will support with mentoring and the training they are required to do,  
so that they are encouraged to claim all the funding that they are entitled to and don't miss out, despite having busy schedules.”
}) }}

#### How we used this user task

We worked closely with accredited providers to ensure that the [guidance]( https://www.gov.uk/government/publications/initial-teacher-training-reform-funding-guidance) we produced for placement schools included all the relevant information required to submit timely and accurate claims.

#### Example accredited provider user task

{{ appUserNeed({
  description: " As a support user at the Department for Education (DfE),
I need to know what steps I need to take to send claims to the Education and Skills Funding Agency (ESFA) for payment,  
so that I can quickly, confidently and accurately complete the task.”
}) }}

#### How we used this user task

We used this task to inform the creation of a playbook which details all the user tasks support users need to undertake.

In addition, we conducted two rounds of user research with the support team, which informed iterations of the service. [First round](/claim-funding-for-mentors/round-10-support-console-research-findings/) and [second round](/claim-funding-for-mentors/round-11-support-console-research-findings/).
