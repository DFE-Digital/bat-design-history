---
title: Teacher success service data sources
description: Explaining where the Teacher Success service will get its data from at different times of the academic year
date: 2025-07-01
tags:
  -withdrawals  
  - training
  - training outcomes
---

## Crossing service boundaries

Teacher Success aims to encourage candidates to:

- begin initial teacher training (ITT)
- successfully complete ITT
- gain Qualified teacher status (QTS)
- progress into rewarding teaching careers in state schools

The service will cross boundaries from Get Into Teaching, Find and Apply, into a new trainee support service, and then into Teaching Vacancies and others.  

Each of these services have their own data repositories with different parties responsible for keeping them current.

Teacher Success is the first service to attempt to connect engagement with aspiring teachers at all stages of their journey. In order to fulfil our objective of giving people the right information at the right time, we must know the status and contact details of the trainee at every stage.  

We therefore need to understand which data source is the best single source of truth at each stage and how to unify these over time to avoid confusion.  

## Candidate data

The Get Into Teaching service is the first point of contact with aspiring teachers and has its own dedicated customer relationship management (CRM) system. A CRM is the perfect mechanism for measuring and monitoring engagement over time, but this service is only concerned with candidate data up until the point that they apply for and accept places on an ITT course.

The Apply service is therefore the most useful source of truth immediately upstream of Teacher Success and we will use its Candidates API to extract the details of a sample of around 7,000 trainees that will comprise our minimum viable product (MVP) cohort.

In order to maximise the chances of successful engagement, we will only include candidates who have accepted a place (marked as “recruited”) and who have no pending conditions. However, there will inevitably be some who do not start their course.  

## Trainee data

Most ITT courses begin in September (though some also offer a January start). Between September and the end of October, there is an ambiguous period where DfE does not have visibility over whether a trainee has started a course, never started the course, or started and left.

Apply data (potentially supplemented with Funding Team data) remains an imperfect but best source of truth until providers submit their candidates to DfE via the Register of Trainee Teachers during late October for the ITT census.  

From October until the completion of their ITT course, Register becomes the most reliable source of truth on trainees, including an incremental picture of placements, deferrals, withdrawals and achievement of QTS.

However, this data originates from providers. So whilst we considered offering trainees access to Register to maintain their own personal data, this is likely to create ambiguity and contradiction in data maintenance and ownership.  

## Regulated data

Once a trainee is submitted to the Register system, an API call to the Teacher Regulation System (TRS) within the Teacher Regulation Authority (TRA) is made. This generated the trainees teacher reference number, which is sent by return to their provider and is a unique identifier that the trainee will have for their whole teaching career. However, TRS does not contain operational data so does not have utility for more broadly supporting our service.  

## Teacher Success Service data

The reliance on different datasets as the single source of truth at different times in the academic year leaves gaps and periods of uncertainty on trainee status.

At no point does DfE capture data direct from trainees. They may be best placed to tell us about their ongoing experience and could potentially inform the department of material changes to their career path or experience ahead of providers.

Given that a key aim of Teacher Success is to provide personalised access to DfE digital services, it seems inevitable that an additional operational dataset is required, which can be maintained by trainees and teachers through Teacher Success.  

Our long-term aim is that this becomes the connect all relevant data into a lifetime teacher record. This will deliver extensive opportunities not only for us to better target services and have a digital place for the teacher voice, but for the department and generative technologies that it may employ in future to learn about teachers and offer workload and career support tailored to them.
