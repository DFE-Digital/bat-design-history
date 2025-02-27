---
title: Private beta user tasks
description: The discrete tasks users need to undertake for claims to be paid and assured
date: 2023-12-04
tags:
  - user tasks
  - user research
  - user needs
related:
  items:
    - text: Mentoring discovery phase user needs
      href: /claim-funding-for-mentors/mentoring-discovery-phase-user-needs/
    - text: User needs and user tasks
      href: /claim-funding-for-mentors/user-needs-and-user-tasks/
---

As part of the handover from the discovery and alpha team, the private beta team reviewed the high-level [user needs](/claim-funding-for-mentors/mentoring-discovery-phase-user-needs/).

These user needs were broad and related to mentoring across both initial teacher training (ITT) and the early careers framework (ECF).

By referencing these user needs, the private beta team added five high level user needs that address the problem that the Claim Funding for Mentor Training service (Claim) solves which are detailed in [user needs and user tasks](/claim-funding-for-mentors/user-needs-and-user-tasks).

## User tasks

Throughout private beta, we created a list of user tasks. Working with user tasks enabled the design and development team to create user journeys and features specific to the tasks or that our users need to complete, whilst keeping the overarching user needs of the service in mind.

### User types

When breaking down the journey into user tasks, we first identified all the users who would interact with the Claim service:

- School user who would submit a claim
- Multi-academy trust user who submit claims on behalf of multiple schools within their trust
- Accredited ITT provider user who would need to support school users and be responsible for auditing claims
- Internal support colleagues, responsible for administering the service, undertaking the payment, auditing and clawback processes, as well as communicating with both school and provider users

Below is the full list of user tasks for each user type.

#### School user tasks

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As someone in an administrative or mentor role at a school,
I need to know what is required of me before I start a claim,
so that I can prepare all the information required information ready before I start our claim."
}) }}

{{ appUserNeed({
  description: "As someone in an administrative or mentor role at a school,
I need to know how many hours of training we can claim for,
so that I can make sure our mentors are completing enough training hours to get the full benefits of funding, and we are submitting or claims correctly."
}) }}

{{ appUserNeed({
  description: "As someone in an administrative or mentor role at a school,
I need to know what the timelines for claiming funding are,
so that I can submit my claim on time."
}) }}

{{ appUserNeed({
  description: "As someone in an administrative or mentor role at a school,
I need reassurance that the DfE have the correct details for our organisation,
so that I feel confident that our claim has been submitted correctly."
}) }}

{{ appUserNeed({
  description: "As someone in an administrative or mentor role at a school,
I need to know what the next steps are after my claim has been submitted,
so that I feel informed of the process and know what to expect and when."
}) }}

{{ appUserNeed({
  description: "As someone in an administrative or mentor role at a school,
I need to know what the service is and how to use it,
so that I can submit my claim on time and accurately."
}) }}

{{ appUserNeed({
  description: "As someone in an administrative or mentor role at a school,
I need to know the status of my claim after it has been submitted,
so that I can track the progress of my claim."
}) }}

{{ appUserNeed({
  description: "As someone in an administrative or mentor role at a school,
I need reassurance that the process for submitting evidence regarding our claim is safe and secure,
so that I feel confident that our information is protected from fraud and scams."
}) }}

{{ appUserNeed({
  description: "As someone in a leadership role at a school,
I need to know the amount of funding received will cover the cost of training our mentors,
so that the funding benefits us."

}) }}

#### Multi-academy school user tasks

{{ appUserNeed({
  description: "As someone in an administrative or mentor role at a multi-academy trust,
we need to be able to submit claims on behalf of other schools within our trust,
so that we can reduce the burden on schools having to submit claims individually."
}) }}

{{ appUserNeed({
  description: "As someone in an administrative or mentor role at a multi-academy trust,
we need to be able to view claims across the different schools within our trust,
so that we can manage the number of claims and funding across our trust."
}) }}
}) }}

#### Accredited ITT provider user tasks

{{ appUserNeed({
  description: "As an accredited provider,
we need schools to understand the benefits of claiming funding and how it will support with mentoring and the training they are required to do,  
so that they are encouraged to claim all the funding that they are entitled to and don't miss out, despite having busy schedules."
}) }}

{{ appUserNeed({
  description: "As an accredited provider,
we need schools to understand the benefits of mentoring,
so we get more buy-in from schools, who agree to become placement partners."
}) }}

{{ appUserNeed({
  description: "As an accredited provider,
we need schools to understand the benefits of mentoring,
so we get more buy-in from school staff to become mentors and attend training."
}) }}

{{ appUserNeed({
  description: "As an accredited provider,
we need to understand to know how the new service works and what the rules are,
so that we can communicate with educational institutions on how to correctly use the service."
}) }}

{{ appUserNeed({
  description: "As an accredited provider,
we need data related to a claim to match the data that we collect,  
so we can easily and accurately assure the claims against our own records during the audit process."
}) }}

{{ appUserNeed({
  description: "As an accredited provider,
we need to know what the timelines are for claiming funding,  
so that we can ensure our processes fit, such as checking for errors."
}) }}

{{ appUserNeed({
  description: "As an accredited provider,
we need enough time to be able to complete the audit process (sampling),  
so that we can accurately check the claims against our own records and liaise with schools regarding potentially incorrect claims."
}) }}

{{ appUserNeed({
  description: "As an accredited provider,
we need schools to be submitting claims accurately,  
so that we don’t have too many incorrect claims to contact schools during the audit process."
}) }}

#### Internal support colleagues user tasks

{{ appUserNeed({
  description: "As a support user at the Department for Education (DfE),
I need to know what steps I need to take to send claims to the Education and Skills Funding Agency (ESFA) for payments,  
so that I can quickly, confidently and accurately complete the task."
}) }}

{{ appUserNeed({
  description: "As a support user at the Department for Education (DfE),
I need an easy way of accessing claims,  
so that when we receive a support request, I'm able to quickly look up the claim and take action."
}) }}

{{ appUserNeed({
  description: "As a support user at the Department for Education (DfE),
To know if another member of staff has made changes or actioned a claim,  
so that I don't risk duplicating the changes or actions."
}) }}

{{ appUserNeed({
  description: "As a support user at the Department for Education (DfE),
I need the ability to contact a school,  
so that I can discuss their claim or support request with, as and when needed."
}) }}

{{ appUserNeed({
  description: "As a support user at the Department for Education (DfE),
I need an easy way of sorting through claims,  
so that I can quickly, confidently and accurately complete any associated task required."
}) }}

{{ appUserNeed({
  description: "As a support user at the Department for Education (DfE),
I need an easy way of requesting further information from schools regarding an incorrect claim,  
so that I am to complete the sampling and clawback processes as quickly as possible."
}) }}

## Next steps

These user tasks will inform the design and build of the claim service so that schools can receive all the funding that they are entitled to for their ITT mentor training.
