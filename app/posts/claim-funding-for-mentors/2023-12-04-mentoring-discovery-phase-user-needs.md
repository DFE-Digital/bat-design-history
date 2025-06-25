---
title: Mentoring discovery phase user needs
description: User needs identified during the mentoring discovery phase
date: 2023-12-04
tags:
  - discovery phase
  - user groups
  - user needs
related:
  items:
   - text: How the discovery phase works
     href: https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works/
   - text: User research in discovery
     href: https://www.gov.uk/service-manual/user-research/user-research-in-discovery/
---

## Why we did this

One of the key goals of a [discovery phase]( https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) is to “start learning about your users and their context.”

In particular, the guidance detailed in [user research in discovery]( https://www.gov.uk/service-manual/user-research/user-research-in-discovery) states that discovery user research should find out:

- who your likely users are and what they’re trying to do
- how they do it currently (for example, what services or channels they use)
- the problems or frustrations they experience
- what users need from your service to achieve their goal

## Users

During the discovery phase, the team identified three distinct user groups involved in initial teacher training (ITT) mentoring:

- mentors who undertake the training and support the trainees during their placement
- schools that take trainee teachers on placements (placement schools)
- accredited providers who are the legal entity accredited by the Department for Education (DfE) to deliver teacher training leading to qualified teacher status (QTS) and are responsible for developing the mentor training curriculum

## ITT mentor user needs

The below user needs for ITT mentors were identified:

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As an ITT mentor,
I need to secure time away from the timetable,
So that I can complete the appropriate training for my needs and have the time to work with my trainee regularly."
}) }}

{{ appUserNeed({
  description: "As an ITT mentor,
I need to begin my training before my mentor starts their placement,
So that I can spread my mentor training over a longer period and thus alleviate pressure on timetable, as well as ensure I feel prepared to mentor."
}) }}

{{ appUserNeed({
  description: "As an ITT mentor,
I need to have access to training from any place at any time,
So that I can complete 20 hours of training around my schedule and revisit training when I desire."
}) }}

{{ appUserNeed({
  description: "As an ITT mentor,
I need to ensure my mentoring is not detrimental to my other duties,
So that I can continue to support my school in many ways beyond classroom teaching."
}) }}

{{ appUserNeed({
  description: "As an ITT mentor,
I need to work with trainees within my subject area/learning phase,
So that I can offer trainees the best possible specialist guidance."
}) }}

{{ appUserNeed({
  description: "As an ITT mentor,
I need to understand the expectations set on mentors,
So that I can assess whether I can deliver mentoring."
}) }}

{{ appUserNeed({
  description: "As an ITT mentor,
I need to understand what training I need to do and when,
So that I can complete all the necessary training at the appropriate time."
}) }}

## ITT placement school user needs

The below user needs for ITT placement schools were identified:

{{ appUserNeed({
  description: "As an ITT placement school,
I need to have trainee teachers within my school regularly,
So that I can create a pipeline of future teachers for my school, increase overall teaching capacity, promote a sense of whole school learning and increase teacher capability(CPD)."
}) }}

{{ appUserNeed({
  description: "As an ITT placement school,
I need to find time for my teachers off timetable,
So that staff can complete their mentor training and duties within their working hours."
}) }}

{{ appUserNeed({
  description: "As an ITT placement school,
I need to find appropriate mentors from within my workforce,
So that I can ensure mentors can develop long-term relationships with trainees, thus improving capability."
}) }}

{{ appUserNeed({
  description: "As an ITT placement school,
I need to evaluate trainee candidates before them starting,
So that I can ensure they understand the school’s expectations, are committed to teaching, and are the right fit for the school."
}) }}

{{ appUserNeed({
  description: "As an ITT placement school,
I need to have access to funding,
so I can fill the immediate budget deficit caused by releasing funds to cover mentor training time."
}) }}

{{ appUserNeed({
  description: "As an ITT placement school,
I need to be updated by the provider as to training schedules and placement logistics,
So that I can effectively plan future staffing resources and timetables."
}) }}

{{ appUserNeed({
  description: "As an ITT placement school,
I need to get support from providers when trainees are underperforming,
So that my staff do not have additional workload."
}) }}

{{ appUserNeed({
  description: "As an ITT placement school,
I need to have access to a healthy supply teachers market,
So that I can use DfE funds to cover mentor training time."
}) }}

{{ appUserNeed({
  description: "As an ITT placement school,
I need to have the resources and processes in place to release teachers from the timetable,
So that they can attend mentor training and deliver mentoring time."
}) }}

## Accredited ITT provider user needs

The below user needs for accredited ITT providers were identified:

{{ appUserNeed({
  description: "As an accredited ITT provider,
I need to have a clear understanding of the training (content & format) that we must produce/deliver,
So we can meet the reform requirements and maintain accreditation and plan the necessary resources to deliver the changes."
}) }}

{{ appUserNeed({
  description: "As an accredited ITT provider,
I need to maintain a supply of placement schools to send trainees,
So that we can maintain or grow our ITT provision."
}) }}

{{ appUserNeed({
  description: "As an accredited ITT provider,
I need to have the resources and processes in place to release teachers from the timetable,
So that they can attend mentor training and deliver mentoring time."
}) }}

{{ appUserNeed({
  description: "As an accredited ITT provider,
I need to ensure our training is to the highest standard possible,
So that we can ensure all of our trainees are fully prepared to transition into teaching."
}) }}

{{ appUserNeed({
  description: "As an accredited ITT provider,
I need to have the opportunity to evaluate ITT candidates before acceptance fully,
So that they can attend mentor training and deliver mentoring time."
}) }}

{{ appUserNeed({
  description: "As an accredited ITT provider,
I need to have the resources and processes in place to release teachers from the timetable,
So that our trainees are ‘good,’ which ensures our schools continue to want to receive trainees from us."
}) }}

{{ appUserNeed({
  description: "As an accredited ITT provider,
I need to make sure our mentor training reflects our ITT curriculum,
So that we ensure our mentors introduce trainees to concepts at the correct time that align with our trainee content and that they deliver our beliefs regarding what constitutes good mentoring."
}) }}

## Next steps

Using these user groups and associated needs, the private beta team can understand what the users of Claim funding for mentor training want to achieve from the service.

However, to help design and build the service, the team needs to identify the user tasks that the users would undertake so that schools can successfully claim funding for their mentor training and ensure that all relevant assurance checks are completed.
