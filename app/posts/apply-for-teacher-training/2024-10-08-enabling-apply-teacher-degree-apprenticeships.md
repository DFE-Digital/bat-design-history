---
title: Enabling candidates to apply for teacher degree apprenticeship courses
description: Adding new questions and logic and updating content to allow candidates to apply for undergraduate courses.
date: 2024-10-08
tags:
  - courses
  - search results
  - entry requirements
  - visa sponsorship
  - salary
  - salaried courses
  - apprenticeships
  - funding
screenshots:
  items:
    - text: A levels and other qualifications question
      src: tda-apply-1-quals.png
    - text: A levels and other qualifications list
      src: tda-apply-2-quals.png
    - text: Degree question
      src: tda-apply-3-degree-quals.png
    - text: Degree list - no degree
      src: tda-apply-4-degree-quals.png
    - text: Degree list - degrees
      src: tda-apply-5-degree-quals.png
    - text: TDA application blocked - no A levels or equivalent
      src: tda-apply-6-block.png
    - text: TDA course flight check - degree present
      src: tda-apply-7-block.png
---

## Background

### The problem we were trying to solve

Teacher degree apprenticeships (TDAs) are a new teacher training programme where trainees work in a school and earn a salary while getting a bachelor’s degree and qualified teacher status (QTS).

This new undergraduate route offers a way into teaching for those who do not have a degree, and may benefit user groups such as teaching assistants, school leavers or people looking to change careers.

We needed to make changes to the service to enable candidates to find and apply for TDAs, and providers to publish courses and manage applications.

## What we changed in 'Your details'

### A levels and other qualifications

The form includes an existing section to add A levels and other qualifications. This section included content that was tailored to those later applying for postgraduate courses.

We needed to update the content so that it is relevant for both undergraduate and postgraduate courses.

![Screenshot of a question page asking what type of A level or other qualification to you have after the design changes](tda-apply-1-quals.png)

![Screenshot of the list of A levels and other qualifications entered, with content if someone has said they do not want to enter any A levels and other qualifications after the design changes](tda-apply-2-quals.png)

### Degree qualifications

Previously, candidates had to enter at least one degree or equivalent qualification in the degree section to apply for courses.

We needed to allow candidates to state they did not have a degree, so that the section could be completed.

To do this, we added a question to the existing initial degree page, and updated content so that it is relevant for both undergraduate and postgraduate courses.

![Screenshot of the new degree question page after the design changes](tda-apply-3-degree-quals.png)

![Screenshot of the list of entered degrees when no degree is entered after the design changes](tda-apply-4-degree-quals.png)

![Screenshot of the list of entered degrees when no degree is entered after the design changes](tda-apply-5-degree-quals.png)

## What we changed in ‘Your applications’

### Blocking submissions

Candidates can choose not to add any A levels in ‘Your details’, however A levels are required for TDA courses.

We needed to block submissions of TDA applications when candidates had chosen not to add A levels.

To do this, we added content and logic which removed the green button to review the application, and displayed content explaining that A levels is required. Candidates are encouraged to add their A levels to submit, or to delete their draft application.

![Screenshot of a blocked TDA application when no A levels is entered on your details after the design changes](tda-apply-6-block.png)

We also needed to address an issue that arose from this work, where candidates would now be able to state they do not have a degree in ‘Your details’, then apply for postgraduate courses.

To do this, we added content and logic which removed the green button to review the application, and displayed content explaining that a degree is required. Candidates are encouraged to add their degree to submit, or to delete their draft application.

### Flight check for those with a degree

TDAs do not require a degree. Those with a degree can apply if they wish, however there are more suitable postgraduate routes into teaching.

We needed to inform candidates with a degree submitting a TDA application that they may want to consider other options.

To do this, we added a ‘flight check’ or interstitial page between the application summary page and reviewing and submitting their full application, where we communicate the length of TDA courses in comparison to postgraduate routes and encouraged candidates to find out more about different ways to train to be a teacher.

![Screenshot of flight check page when someone has a degree in your details and applys for a TDA course after the design changes](tda-apply-7-block.png)

## Further considerations

 The main focus of this work was to do what was necessary to ensure that TDA as a new route to teaching would be available at the start of the cycle. The team may continue to make improvements to Apply which may require revisiting these design changes.

## Status of this work

We prototyped changes to the service and tested with users in July 2024.

We found that the proposed changes tested well with users and decided to put the changes live.

The changes were built in August 2024, to go live for the start of the next recruitment cycle which started October 2024.
