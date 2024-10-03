---
title: Enabling providers to publish teacher degree apprenticeship courses
description: Adding new questions and logic to enable providers to create and publish undergraduate courses.
date: 2024-10-03
tags:
  - entry requirements
  - salary
  - salaried courses
  - apprenticeships
  - applications
  - filtering
  - undergraduate
  - tda
screenshots:
  items:
    - text: Add course - Qualification question page
      src: 1-tda-publish-qualifications.png
    - text: Course - Basic details tab
      src: 2-tda-publish-basic-details.png
    - text: Course - Description tab
      src: 3-tda-publish-description.png
    - text: Course - Preview
      src: 4-tda-publish-preview.png
    - text: Course page on Find
      src: 5-tda-publish-course-detail.png
    - text: A levels - Add a new A level requirement
      src: 6-tda-publish-a-levels-1.png
    - text: A levels - List of A level requirements
      src: 7-tda-publish-a-levels-2.png
    - text: A level - Remove A level warning page
      src: 8-tda-publish-a-levels-3.png
---

## Background

### The problem we were trying to solve

Teacher degree apprenticeships (TDAs) are a new teacher training programme where trainees work in a school and earn a salary while getting a bachelor’s degree and qualified teacher status (QTS).

This new undergraduate route offers a way into teaching for those who do not have a degree, and may benefit user groups such as teaching assistants, school leavers or people looking to change careers.

We needed to make changes to the service to enable candidates to find and apply for TDAs, and providers to publish courses and manage applications.

## What we changed

### Added a new qualification type

When adding a course, providers could choose from the following qualifications: “PGCE with QTS”, PGDE with QTS”, and “QTS”.

We needed to add TDA as a new qualification type.

![Screenshot of the qualifcation page when adding a course after the design changes](1-tda-publish-qualifications.png)

### Skipping questions

We needed to enable providers to add TDA courses without having the burden or confusion of unnecessary questions.

TDAs are always salaried, full time and 4 years in length. TDAs never have the option to sponsor visas, and do not have degree eligibility requirements.

So we skipped questions, and added default answers to the course page on Publish and the preview of Find.

When TDA is selected, the pages skipped in the journey of adding a course are:

- Funding type (default “Salaried”)
- Part time or full time (default “Full time”)
- Skilled Worker visas (default “No” to if sponsorship is available)
- Course length (default “4 years”)
- Do you require a minimum degree classification (the ability to access setting degree requirements is hidden in Publish for TDA courses)

![Screenshot of the basic details tab of the course page after the design changes](2-tda-publish-basic-details.png)
![Screenshot of the description tab of the course page after the design changes](3-tda-publish-description.png)
![Screenshot of the course preview after the design changes](4-tda-publish-preview.png)
![Screenshot of the course page on Find after the design changes](5-tda-publish-course-detail.png)

### Adding A levels

TDA courses require candidates to have A levels or equivalent qualifications.

We didn’t have a section in Publish for providers to add A level eligibility requirements, as they are not required for postgraduate courses.

We needed to add the ability for providers to set A level requirements for their TDA courses.

To do this, we added a new row in the “Requirements and eligibility” section on Publish. This takes providers through a user journey, which allow them to add, change and remove A levels for each course.

![Screenshot of adding a new A level requirement after the design changes](6-tda-publish-a-levels-1.png)
![Screenshot of the list of A level requirements after the design changes](7-tda-publish-a-levels-2.png)
![Screenshot of the remove an A level warning page after the design changes](8-tda-publish-a-levels-3.png)

## Further considerations

Once TDA courses are published on Find using Publish next cycle, further testing with providers is recommended. Testing could look at whether providers can easily complete the journey of adding a TDA course including A levels and make changes to the course, as well as identifying further pain points that could be addressed.

## Status of this work

We prototyped changes to the service and tested with users in July 2024.

We found that the proposed changes tested well with users and decided to put the changes live.

The changes were built in July 2024, to go live for the start of the next recruitment cycle which starts October 2024.
