---
title: Managing multiple organisations
description: Some users will be responsible for courses from multiple organisations. eg SCITT-schools
date: 2018-07-02
tags:
  - organisations
screenshots:
  items:
    - text: Organisations
      caption: |
        A list of organisations the user can manage. Sometimes these organisations will have very similar names, eg Chepping View Primary Academy and Chepping View Primary Academy SCITT.

        Include course count as an additional differentiator.
    - text: Courses for an organisation
      caption: This page is the same as for a single user organisation, with the exception of the breadcrumb.
    - text: Course
      caption: See breadcrumb again
---

The way DfE models organisations is different to the way they’ve been modelled in UCAS. Some users will have access to multiple UCAS institutions.

We are still tightly coupled with UCAS’s course model. To avoid creating mental load between our tool and UCAS’s we are not merging organisations and their courses. Users will instead see a list of organisations that they have access to when they log in.

Examples of ‘SCITT schools’:

- 2Schools Consortium / Oakthorpe Primary School
- Astra SCITT / Dr Challoner’s Grammar School
- Bishop Ramsey Church of England School / Hillingdon SCITT
- Bradford Birth to 19 SCITT / St Edmund’s Nursery School and Children’s Centre
- Buckingham Partnership / Royal Latin School
- Chepping View Primary Academy / Chepping View Primary Academy SCITT
- Cheshire East SCITT / Holmes Chapel Comprehensive School

## Differences from a single org user

The first page a user sees is the organisations view. This is not part of the journey for a user belonging to a single organisation.

The breadcrumb trail on the courses and course page needs to include ‘Organisations’ as the first crumb.

The top-level school and organisation links in the header have been removed as it’d be ambiguous which organisation they’d link to. The ‘Publish teacher training courses’ (Publish) link goes to the organisations page.

## Requesting access for someone

Access requests need a design update for multiple organisations. As a user with access to multiple organisations I need to request access for other people so that they can either have the same access as me, or have access to a specific organisation.

[BATSA-451](https://dfedigital.atlassian.net/browse/BATSA-451)

## Organisations without courses

Some organisations will have no courses because:

- they are new
- they are set up in UCAS so they can be listed as an accrediting provider

This needs design work.

[BATSA-476](https://dfedigital.atlassian.net/browse/BATSA-476)

## Updated header

The name against the sign out link should be the DfE user, not the organisation – this is for all users.

## User research

We tested multiple organisations with Bromley Schools Collegiate who manage 5 different organisations: [User research session](https://lookback.io/watch/sRRB74G75vSczMrY7)

The design worked without any supporting copy. The separation of organisations was understood by the user.

> “Oh lovely, that’s really good”
>
> “It’s nice that you do not have to log in somewhere else”

* * *

Original story: [BATSA-401](https://dfedigital.atlassian.net/browse/BATSA-401)

When running the prototype, set \`multi-organisation\` to true in [prototype\_data.json](https://github.com/DFE-Digital/publish-teacher-training-prototype/blob/main/app/data/prototype-data.json#L4)

*[SCITT]: School centred initial teacher training
*[SCITTs]: School centred initial teacher training
*[UCAS]: Universities and colleges admissions service
