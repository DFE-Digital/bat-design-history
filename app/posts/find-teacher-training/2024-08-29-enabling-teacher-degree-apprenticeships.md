---
title: Enabling candidates to find teacher degree apprenticeship courses
description: Adding new questions and logic to direct relevant candidates to undergraduate courses.
date: 2024-08-29
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
    - text: Service name
      src: tda-find-new-service-name.png
    - text: Degree question
      src: tda-university-degree-question.png
    - text: Exit page
      src: tda-degree-sponsorship-exit-page.png
    - text: Search result filters for TDA courses
      src: tda-filters.png
    - text: Course page support section for TDA courses
      src: tda-course-page-support.png
---

## Background

### The problem we were trying to solve

Teacher degree apprenticeships (TDAs) are a new teacher training programme where trainees work in a school and earn a salary while getting a bachelor’s degree and qualified teacher status (QTS).

This new undergraduate route offers a way into teaching for those who do not have a degree, and may benefit user groups such as teaching assistants, school leavers or people looking to change careers.

We needed to make changes to the service to enable candidates to find and apply for TDAs, and providers to publish courses and manage applications.

## What we changed

### Service name

The name of the service was “Find postgraduate teacher training”. This name would no longer be appropriate once we included TDAs.

We needed a service name that would cater for both undergraduate and postgraduate courses.

To do this, we changed the service name to “Find teacher training courses”, including changing the URL.

![Screenshot of the start page with the new service name after the design changes](tda-find-new-service-name.png)

### Qualifications required

TDAs do not require a degree. Those with a degree can apply if they wish, however there are more suitable postgraduate routes into teaching.

We needed a way of displaying TDA courses to those who do not have a degree, while continuing to show postgraduate courses to those who have a degree or are studying for one.

To do this, we added a new question page in Find, asking candidates if they have a university degree.

![Screenshot of the new degree question page on find after the design changes](tda-university-degree-question.png)

### Visa sponsorship

TDAs do not offer visa sponsorship.

Therefore, if candidates do not have a university degree and require visa sponsorship, they are not eligible for teacher training courses on Find, including TDAs and postgraduate courses.

We needed a way for candidates who are not eligible to exit the service and look at other routes into teaching.

To do this, we added a new exit page in Find, and logic to display this page when candidates stated they did not have degree and required visa sponsorship.

![Screenshot of the new exit page on find after the design changes](tda-degree-sponsorship-exit-page.png)

### Search results filters

Many of the existing search results filters were not applicable for TDA courses. For example, TDA courses are always salaried, always full time, and no degree is required.

We needed a way for candidates to view TDA courses and only the relevant filters for those courses.

To do this, we used the logic of the additional question page to only display TDA relevant filters when candidates state they do not have a degree.

![Screenshot of the search result filters when showing TDA courses after the design changes](tda-filters.png)

### Teacher training advisers

Teacher training advisers (TTAs) are only available for postgraduate courses and are not available for TDA courses.

We needed to update the content on the course pages to ensure we did not provide candidates with the wrong information.

To do this, we added logic to the support box at the bottom of the course page, so that the content did not mention TTAs for TDA courses.

![Screenshot of the course page support section for TDA courses after the design changes](tda-course-page-support.png)

## Further considerations

We are continuing to make improvements to Find which may require revisiting these design changes. For example, we are looking to improve the initial pre-filtering questions that come before the search results page.

## Status of this work

We prototyped changes to the service and tested with users in July 2024.

We found that the proposed changes tested well with users and decided to put the changes live.

The change to the service name, including the URL, name in the black banner, and all hyperlinks went live in July 2024.

The changes were built in August 2024, to go live for the start of the next recruitment cycle which started October 2024.
