---
layout: page
title: In what order should we build the Edit screens?
description: List edit screens with their complexity and priority
date: 2019-04-19
screenshots:
  items:
    - Level and SEND
    - Subject
    - Languages
    - Age range
    - Outcome
    - Fee or salary
    - Apprenticeship
    - Full time or part time
    - Locations
    - Accredited body
    - Applications open
    - UCAS GCSEs pending
    - UCAS Equivalency tests
    - Course start date
    - Title
    - Confirm your changes
---
<!-- markdownlint-disable MD051 -->

[Edit screen workflows in a Google Drawing](https://docs.google.com/drawings/d/1OrJYSTmRSJD2GEAWFnr2lXLNo7A9J9GDsPMQUm0Pi0M/edit) and the [new course flow](https://docs.google.com/drawings/d/1DAhz464j1XDyQPoOH0adIwAceUwuGU1rqsWkVn8ZQ8I/edit) for context.

Edits to one field can affect another. Changes should always lead to a ‘Confirm your changes’ screen, and only after confirming will they be persisted. If a course is already published the changes will go live straight away. We need this mechanism first.

Then we should focus on fields providers edit in-cycle:

- Locations
- Full or part time
- UCAS pending GCSEs and eligibility

We might also want to make the following editable to improve data, and for languages to improve how findable some courses are:

- Outcome
- Age range
- Languages

Further education screens are probably out of scope for MVP.

## Summary

| Screen | Notes | Priority | Complexity | Always editable |
|-|-|-|-|-|
| [Level and SEND](#level-and-send) | Level has a significant effect, rarely changed | Low | High | No |
| [Subject](#subject) | Also affects languages and title | High | High | No |
| [Languages](#languages) | Only used by secondary languages courses but can be set badly. Might effect title. | Low | Medium | Maybe |
| [Age range](#age-range) | Missing for all courses, we need to capture this | High | Low | Maybe |
| [Outcome](#outcome) | Inferred from UCAS, this has often been wrong | High | Low | Maybe |
| [Fee or salary](#fee-or-salary) | Changes the enrichment fields shown (eg fee fields vs salary fields) | Low | High | No |
| [Apprenticeship](#apprenticeship) | This will also affect fee and salary enrichment fields (apprenticeships are salaried). Some existing apprenticeships might not use the right route. | Low | High | No |
| [Full time or part&nbsp;time](#full-time-or-part-time) | Changes can affect locations (eg some locations may not offer part time)  | Medium | Medium | Yes |
| [Locations](#locations) | Schools are added and removed in cycle. For courses which are both full or part time, each location must indicate which type of vacancies it offers (full, part, both). | High | Medium | Yes |
| [Accredited body](#accredited-body) | Only affects school direct providers | Low | Low | No |
| [Applications open](#applications-open) | Most relevant when creating a course. Shows different values depending on current cycle vs next cycle | Low | Medium | No |
| [UCAS GCSEs&nbsp;pending](#ucas-gcses-pending) | Change in cycle in response to application numbers | Medium | [High](/publish-teacher-training-courses/minimum-course-requirements-logic) | Yes |
| [UCAS Equivalency&nbsp;tests](#ucas-equivalency-tests) | Change in cycle in response to application numbers | Medium | [High](/publish-teacher-training-courses/minimum-course-requirements-logic) | Yes |
| [Start date](#course-start-date) | Rarely edited | Low | Low | No |
| [Title](#title) | Changes to titles need to be approved | Medium | High | No |
| [Confirm changes](#confirm-your-change) | All edits must be summarised before confirming | High | High | -- |

<!-- markdownlint-enable MD051 -->

*[GCSE]: General certificate of secondary education
*[GCSEs]: General Certificate of Secondary Education
*[UCAS]: Universities and colleges admissions service
*[SEND]: Special Educational Needs and Disabilities
