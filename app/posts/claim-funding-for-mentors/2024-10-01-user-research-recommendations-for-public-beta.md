---
title: User research recommendations for public beta
description: Recommendations for the public beta team as a result of the user research undertaken during the private beta
date: 2024-10-01
tags:
  - research
  - private beta
  - public beta
related:
  items:
    - text: User research with private beta ITT providers
      href: /claim-funding-for-mentors/user-research-with-private-beta-itt-providers/
    - text: Sampling claims in Support
      href: /claim-funding-for-mentors/sampling-claims-in-support/
---

## Introduction

Overall, user research during the private beta was a success.

Users found the service easy to use, and any feedback we received was minor and not a significant pain point or blocker to using the service.

However, we identified four gaps in the private beta research that we should address in the public beta to validate and solidify our understanding of user needs.

## 1. Research with Multi Academy Trusts (MATs)

When talking to MATs, an emerging theme was that some of the participants, particularly those who were part of a large trust, said they would expect to be able to complete claims centrally on behalf of all schools within their trust.

Participants who said this told us that their MAT centrally deals with administrative tasks such as finance and HR, and therefore, it would make sense for claims to be centrally dealt with, too.

### User need

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a multi-academy trust,
  I need to be able to submit claims on behalf of other schools within our trust,
  So that I can reduce the burden on schools to submit claims individually."
}) }}

### Next steps

Recruitment of MATs, ensuring a demographic spread of:

- Small and large MATs (we suspect this need may differ depending on the size of the MAT)
- Different role types, particularly those within strategic/administrative roles and therefore likely to make or encourage claims, such as:

  - Headteachers
  - Lead ITT/ITT Coordinators
  - Business administrators

## 2. Research with general mentors

During qualitative and quantitative research, participants reported that those in strategic and administrative roles would submit claims on the school's behalf.

However, when we went live with private beta, we found that general mentors also submitted claims.

While we tried to recruit general mentors and include them in our research for the private beta, we didn’t get any sign-ups.

Therefore, we were unable to include them in our research.

### User need

{{ appUserNeed({
  description: "As a mentor,
  I need to know what is required of me before I start a claim,
  So that I can prepare all the required information before I start our claim."
}) }}

### Next steps

Conduct a small round of research with general mentors to validate that the service meets their needs.

One round of research will likely be sufficient as the findings didn’t differ across user types during our research.

Therefore, we assume there will unlikely be any new findings or pain points.

## 3. Research with providers

Due to strict timelines within the private beta, we could only conduct research with the 2 providers (NIoT and BPN) that are part of it.

Our research found that providers' needs will differ depending on their size and level of ‘digital maturity’ (for example, how streamlined and efficient their digital processes for tracking and managing mentors are).

We must understand how informed providers should be regarding school claims and whether the sampling process works for them.

### User needs

{{ appUserNeed({
  description: "As a provider,
  I need data related to a claim to match the data that we collect,
  So that we can easily and correctly check the claims against our records when sampling."
}) }}

{{ appUserNeed({
  description: "As a provider,
  I need the process for sampling to be quick and easy,
  So that it does not create too much of an administrative burden for us."
}) }}

{{ appUserNeed({
  description: "As a provider,
  I need to know what the timelines are for claiming funding,
  So that we can ensure our processes fit, such as checking for errors."
}) }}

{{ appUserNeed({
  description: "As a provider,
  I need enough time to be able to complete sampling,
  So that we have enough time to check the claims against our records and liaise with schools regarding incorrect claims."
}) }}

{{ appUserNeed({
  description: "As a provider,
  I need schools to be submitting claims accurately,
  So that we do not have too many incorrect claims to contact schools regarding sampling."
}) }}

### Next steps

Conduct research with providers, ensuring the following demographics:

- Different sized providers
- Time established/time they have been an accredited provider
- Ensure a geographical spread

## 4. Research of the sampling process

The sampling process is complex and involves 4 user types:

Primary users:

- Support team – conductors or sampling
- Providers – responsible for ‘approving’ claims that we are sampling

Secondary users:

- Schools – if we need to query them regarding an incorrect claim
- Education and Skills Funding Agency (ESFA) – they carry out the payments

### User needs

{{ appUserNeed({
  description: "As a support user,
  I need guidance on how to use the support console for payments, sampling and clawbacks,
  So that I can complete the required tasks successfully."
}) }}

{{ appUserNeed({
  description: "As a support user,
  I need to know how to action claims,
  So that I can complete payments, sampling, and clawback tasks relating to claims."
}) }}

 {{ appUserNeed({
  description: "As a provider,
  I need the process for sampling to be quick and easy,
  So that it does not create too much of an administrative burden for us."
 }) }}

 {{ appUserNeed({
  description: "As a provider,
  I need enough time to be able to complete sampling,
  So that we have enough time to check the claims against our records and liaise with schools regarding incorrect claims."
 }) }}

### Next steps

During the public beta, there needs to be necessary research undertaken to validate that:

- the support team are easily able to sample claims and submit them to the ESFA for payment
- the ‘approval’ process for sampling works for providers
- we are providing sufficient data regarding claims to enable providers to check whether claims are correct
