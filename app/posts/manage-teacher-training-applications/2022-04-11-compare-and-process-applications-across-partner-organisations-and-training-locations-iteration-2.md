---
title: Compare and process applications across partner organisations and training locations (iteration 2)
description: We now break applications down by training location and show additional statuses.
date: 2022-04-11
screenshots:
  items:
    - text: User belongs to a training provider
      src: training-provider.png
    - text: User belongs to an accredited body
      src: accredited-body.png
    - text: User belongs to an accredited body with locations showing
      src: accredited-body--locations.png
    - text: User belongs to a training provider and accredited body
      src: multi-org.png
tags:
  - MN021
---

We recently gave users [a way to compare and process applications across partner organisations](/manage-teacher-training-applications/helping-users-compare-and-process-applications-across-partner-organisations/).

We’ve improved the design by:

- showing applications with various statuses, rather than only those waiting for a decision
- showing different tables depending on whether the user belongs to a training provider or an accredited body
- allowing users to compare and process applications by training location
- changing the way we indicate self ratified courses

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Data analysis

We checked to see how many locations organisations typically have. This could affect the way we show a breakdown by location.

Accredited bodies who run their own courses:

- Max is 65
- Average is 2
- Mode is 1
- Mean is 1
- 20 out of 200 providers have only 1 location
- 90 out 200 providers have less than 15 locations
- 110 out 200 providers have more than 15 locations

Training providers who are not accredited bodies:

- Max is 65
- Average is 2
- Mode is 1
- Mean is 1

All organisations:

- Max is 65
- Average is 2
- Mode is 1
- Mean is 1

## What we changed

We now:

- give the name of each organisation a user belongs to in a heading rather than a caption
- show different tables for training providers and accredited bodies
- have columns for more statuses in the tables
- have a column heading saying what type of organisation’s data is in the table, and no longer mark self-ratified courses

### Names of organisations in headings

The overview page has a section for each organisation that the user belongs to.

The heading of each section is now ‘Applications to [organisation the user belongs to]’.

This means that each heading is unique. Previously we had a generic heading and relied on the caption to indicate which organisation the data was for.

### Different tables for training providers and accredited bodies

We now show different tables in each section depending on whether the user belongs to a training provider or an accredited body.

If the user belongs to a training provider, we show tables breaking down applications by:

- location
- accredited body partners

If the user belongs to an accredited body, we show a table breaking down applications by training provider partners. The table has a toggle to break down each training provider’s applications by location.

We show different tables because locations are always connected to a training provider rather than an accredited body.

### Columns for more statuses

We added columns showing the number of applications with received, interviewing, offered, conditions pending and recruited statuses.

This will help give users more of an overview of their work, rather than focusing only on applications which need a decision.

We decided not to show applications with deferred status, as they are not important to providers until the next recruitment cycle.

### Referring to organisation types and self-ratified courses

Each table previously had a column heading for ‘Organisation’. We’ve replaced this with the column heading ‘Accredited body’ or ‘Training provider’ as appropriate.

This change means that we can remove ‘self-ratified’ from next to the name of an organisation which is both the provider and accredited body for courses. It will be clear that the organisation is in the table as a training provider, so there’s no need to say ‘self-ratified’.

## How it works

There’s a section on the overview page for each organisation that the user belongs to. These sections appear in alphabetical order.

The heading for each section is ‘Applications to [organisation]’.

If the organisation the user belogns to is a training provider, the section includes tables for:

- applications by location - if the training provider has courses at more than one location
- applications by accredited body

If the organisation the user belogns to is an accredited body, the section includes a table for applications by training provider. This can be toggled to show locations if at least one training provider in the table has more than one location.

If an accredited body ratifies its own courses, we show it at the top of the table of training providers.

Each table only shows data for the current recruitment cycle. If there are no applications, the table is still displayed but shows zeroes.

We link from each number in the table to the application list with filters applied. We do not link from zeroes as there would be no results in the application list.

On small screens the table is displayed within a horizontal scrollable pane.

## Further considerations

There is now an overlap between this page and the ‘status of active applications’ report. The only difference is that in the report we break down applications by course.

We want to find out how useful it is to show the data for each course. We can then remove the ‘status of active applications’ report and either:

- add the course breakdown to the overview page
- omit the course breakdown
