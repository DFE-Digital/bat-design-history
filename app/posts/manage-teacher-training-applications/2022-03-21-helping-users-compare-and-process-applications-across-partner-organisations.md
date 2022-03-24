---
title: Helping users compare and process applications across partner organisations
description: We added a table to the overview page showing the number of applications waiting for a decision, broken down by partner organisation.
date: 2022-03-21
screenshots:
  items:
    - text: Overview with a table showing the number of applications waiting for a decision, broken down by partner organisation
      src: overview--applications-waiting-decisions.png
    - text: Application list filtered to show applications to courses run with a partner organisation which have the received or interviewing status
      src: application-list--filtered-received-interviewing-partner-organisation.png
tags:
  - MN021
---

Research shows that some users want to group applications by partner organisation when they process them.

This means that for each partner organisation users may want to see:

- how many applications need decisions
- a list of the applications which need decisions

This helps users decide which applications to work on or which partner organisation to contact next.

Users can currently filter the application list by partner organisation but they cannot easily compare the number of applications across different organisations.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## What we changed

We added a table to the [overview page](/manage-teacher-training-applications/2022-03-21-adding-an-overview-page-and-filters-to-help-users-prioritise-their-work). It shows the number of applications waiting for a decision, broken down by partner organisation.

## How it works

A table is shown for each organisation the user belongs to, with a row for each partner organisation.

If the organisation the user belongs to runs self ratified courses, the first row in the table repeats the name of the organisation and says “(self ratified)”. This is because there’s no partner organisation for these courses.

Clicking on the name of a partner organisation takes the user to the application list filtered by applications:

- worked on with the partner organisation
- in the received or interviewing status

## Further considerations

We want to consider:

- whether we should also break down the number of applications by training location
- a better way to indicate self ratified courses
- what the overview page looks like when the provider has not received any applications
- adding additional columns for applications in the other active statuses - this would cross over with what’s shown in the ‘status of active applications’ report
- how to let users filter by self ratified courses in the application list
