---
title: Compare and process applications across partner organisations and training locations (iteration 2)
description: We now break applications down by training location and show additional statuses.
date: 2022-04-11
screenshots:
  items:
    - text: User who belongs to a training provider
      src: training-provider.png
    - text: User who belongs to an accredited body
      src: accredited-body.png
    - text: User who belongs to an accredited body with locations showing
      src: accredited-body--locations.png
    - text: User who belongs to a training provider and accredited body
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

We found out how many locations an individual provider has. This may influence the way we help users view applications by location.

### All providers

- The median number of locations a provider has is 1
- The mean number of locations a provider has is 4.8
- The maximum number of locations a provider has is 65
- 162 providers have more than 10 locations
- 103 providers have more than 15 locations
- 69 providers have more than 20 locations

### Accredited bodies who run their own courses

- The median number of locations an accredited body has is 1
- The mean number of locations an accredited body has is 4.4
- The max number of locations an accredited bodies has is 54
- 21 accredited bodies have more than 10 locations
- 15 accredited bodies have more than 15 locations
- 11 accredited bodies have more than 20 locations

### Training providers who are not accredited bodies

- The median number of locations a training provider has is 1
- The mean number of locations a training provider has 4.9
- The maximum number of locations a training provider has is 65
- 141 training providers have more than 10 locations
- 88 training providers have more than 15 locations
- 58 training providers have more than 20 locations

## What we changed

We decided to:

- give the name of each organisation a user belongs to in a heading rather than a caption
- show different tables for training providers and accredited bodies
- have columns for more statuses in the tables
- have a column heading saying what type of organisation’s data is in the table, and no longer mark self-ratified courses

### Changing the heading format for each organisation the user belongs to

The overview page has a section for each organisation that the user belongs to.

The heading of each section is now ‘Applications to [organisation the user belongs to]’.

This means that each heading is unique. Previously we had a generic heading and relied on the caption to indicate which organisation the data was for.

### Deciding to show a break down by location

We now show different tables in each section depending on whether the user belongs to a training provider or an accredited body.

Training providers have separate tables breaking down applications by:

- location
- accredited body partners

Locations for a course belong to the training provider not the accredited body. Therefore showing the training provider’s locations underneath each accredited body partner could [make it look like they are locations for courses that the accredited body runs].

It would also mean that the same locations could appear under more than one accredited body. This is because a training provider may offer courses at a single location ratified by different accredited bodies.

Accredited bodies have a single table breaking down applications by training provider. The table has a toggle to break down each training provider’s applications by location.

This means that users can see which locations belong to each of their training provider partners.

We decided not to show all locations for an accredited body in a separate table because:

- the list of locations would be the same with the training provider and location tables
- it would be impossible to distinguish between locations if multiple training providers use the same location name
- accredited bodies which only run their own courses would see exactly the same list in the training provider and location tables

### Deciding how to show zero applications

x

### Addding more status columns to the table

We added columns showing the number of applications with received, interviewing, offered, conditions pending and recruited statuses.

This will help give users more of an overview of their work, rather than focusing only on applications which need a decision.

We decided not to show applications with deferred status, as they are not important to providers until the next recruitment cycle.

### Changing the reference to organisation types

Each table previously had a column heading for ‘Organisation’. We’ve replaced this with the column heading ‘Accredited body’ or ‘Training provider’ as appropriate.

### Changing how we indicate self ratified courses

This change means that we can remove ‘self-ratified’ from next to the name of an organisation which is both the provider and accredited body for courses. It will be clear that the organisation is in the table as a training provider, so there’s no need to say ‘self-ratified’.

## How it works

There’s a section on the overview page for each organisation that the user belongs to. These sections appear in alphabetical order.

The heading for each section is ‘Applications to [organisation]’.

If the organisation the user belongs to is a training provider, the section includes tables for:

- applications by location - if the training provider has courses at more than one location
- applications by accredited body

Locations and accredited bodies are ordered alphabetically.

If the organisation the user belongs to is an accredited body, the section includes a table for applications by training provider. This can be toggled to show locations if at least one training provider in the table has more than one location.

If an accredited body ratifies its own courses, we show it at the top of the table of training providers.

Training providers and their locations are ordered alphabetically.

Each table only shows data for the current recruitment cycle. If there are no applications, the table is still displayed but shows zeroes.

We link from each number in the table to the application list with filters applied. We do not link from zeroes.

On small screens the table is displayed within a horizontal scrollable pane.

## Further considerations

There is now an overlap between this page and the [status of active applications report](/manage-teacher-training-applications/helping-users-check-how-quickly-courses-are-filling-up/). The only difference is that in the report we break down applications by course.

We want to find out how useful it is to show the data for each course. We can then remove the ‘status of active applications’ report and either:

- add the course breakdown to the overview page
- omit the course breakdown
