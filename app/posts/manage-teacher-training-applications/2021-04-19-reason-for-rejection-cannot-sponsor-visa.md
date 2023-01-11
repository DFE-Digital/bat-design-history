---
title: Adding a ‘cannot sponsor visa’ reason for rejection
description: Let providers reject an application because they cannot sponsor a candidate’s visa
date: 2021-04-19
screenshots:
  items:
    - text: Reasons for rejecting the candidate’s application
      src: reason-for-rejection-cannot-sponsor-visa-01a.png
    - text: Reasons for rejecting the candidate’s application - cannot sponsor visa
      src: reason-for-rejection-cannot-sponsor-visa-01b.png
    - text: Check your feedback and reject the application
      src: reason-for-rejection-cannot-sponsor-visa-02.png
    - text: Application feedback
      src: reason-for-rejection-cannot-sponsor-visa-03.png
user_needs:
  - AN029
tags:
  - rejections
---

We have added ‘cannot sponsor visa’ as a reason for rejection.

This will make it easier for providers to give the right reason and improve our data about why providers reject applications.

## Types of visa available to candidates

Candidates can apply for a Student visa but it cannot be sponsored by a state-funded school.

Depending on their circumstances and the course they’re applying for, candidates may also be eligible for:

- Skilled Worker visa
- Youth Mobility Scheme visa
- Graduate visa - available from 1 July 2021

The Skilled Worker visa:

- is available only for salaried courses (17% of all applications are to salaried courses)
- can be sponsored by the school where the candidate would be working, or by the local authority or multi-academy trust that the school operates under

The Youth Mobility Scheme visa:

- is available for candidates aged 18 to 30 who are from [certain countries](https://www.gov.uk/youth-mobility/eligibility)
- does not require sponsorship

A new Graduate visa is being introduced for people who have already studied in the UK on a Student visa.

## Candidate data analysis

Looking at the candidate data, we can see who is likely to receive the ‘cannot sponsor visa’ reason for rejection.

12% of candidates do not have British or Irish nationality, so they are considered ‘international’.

15% of these international candidates answer ‘not yet, or not sure’ when asked about their right to work or study in the UK.

Looking at provider data, we found that less than 1% of application feedback mentions visa as a reason for rejection.

## What we did and why

We added the question “Was it because you cannot sponsor the candidate’s visa?” to the reasons for rejection. This will help providers to give consistent and useful feedback to candidates.

The question is only shown when the candidate is not a British or Irish citizen.

We ask the provider to give details about why they chose the option. This is because we know that the visa situation is complicated and the provider may be able to give useful information to the candidate.

## Future work

We found 32 items of feedback which mention visas. Of these:

- only 3 explain why they can’t sponsor a visa (“we’re a SCITT”, “not a licensed visa sponsor”, “not enough face to face teaching”)
- most do not mention a specific visa type
- there are several uses of “tier 4” which is the old name for the Student visa
- very few give the candidate advice about what they could do next (for example try a salaried course)

We plan to keep track of the reasons for rejection and test them with the following hypothesis:

We believe that adding a dedicated reason for rejection will result in providers giving more useful feedback because they are prompted to add a reason rather than filling in the ‘other’ reasons.

If we find that the feedback has not improved, we will consider changing the design. For example, we could:

- include hint text with the ‘give details’ field
- give more specific structured reasons within the ‘cannot sponsor visa’ response
- include fixed content in the feedback sent to candidates
- reduce the range of candidates we show the option to

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}
