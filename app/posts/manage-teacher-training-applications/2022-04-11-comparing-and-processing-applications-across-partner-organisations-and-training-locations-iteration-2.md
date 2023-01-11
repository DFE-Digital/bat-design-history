---
title: Comparing and processing applications across partner organisations and training locations iteration 2
date: 2022-04-11
description: We added a breakdown of applications by location and additional statuses.
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
user_needs:
  - MN021
tags:
  - applications overview
---

We recently gave users [a way to compare and process applications across partner organisations](/manage-teacher-training-applications/comparing-and-processing-applications-across-partner-organisations/).

But we did not give users a breakdown by training location. So we addressed this and made some additional changes.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Data analysis

We found out how many locations a provider has. This may influence the way we break down applications by location.

### All providers

- The median number of locations a provider has is 1
- The mean number of locations a provider has is 4.8
- The maximum number of locations a provider has is 65
- 162 providers have more than 10 locations
- 103 providers have more than 15 locations
- 69 providers have more than 20 locations

### Accredited bodies which run their own courses

- The median number of locations an accredited body has is 1
- The mean number of locations an accredited body has is 4.4
- The max number of locations an accredited bodies has is 54
- 21 accredited bodies have more than 10 locations
- 15 accredited bodies have more than 15 locations
- 11 accredited bodies have more than 20 locations

### Training providers which are not accredited bodies

- The median number of locations a training provider has is 1
- The mean number of locations a training provider has 4.9
- The maximum number of locations a training provider has is 65
- 141 training providers have more than 10 locations
- 88 training providers have more than 15 locations
- 58 training providers have more than 20 locations

## What we changed

We decided to:

- change the heading for each organisation the user belongs to
- break applications down by location
- refer to organisation types in table headings and no longer mark self-ratified courses
- show data for all organisations a user belongs to, even if it has no applications
- show columns for more statuses in the tables

### Changing the heading for each organisation the user belongs to

The overview page has a section for each organisation that the user belongs to.

Previously the heading for each section was ‘Applications waiting for you to make a decision’. The name of the organisation the user belonged to was in a caption.

We’ve changed the heading of each section to ‘Applications to [organisation the user belongs to]’.

Now that we show more statuses in the tables, it’s not accurate to say that the applications are all waiting for decisions.

This change also means that each heading is unique and we do not need to use a caption to indicate which organisation’s data is in the table.

### Breaking applications down by location

The overview page has a section for each organisation that the user belongs to. Each organisation is either a training provider or an accredited body.

We previously only provided a breakdown by partner organisations. But we’ve since added a breakdown by location.

Since locations are operated by training providers, locations are shown differently depending on whether the section is for a training provider or an accredited body.

Training providers have separate tables breaking down applications by:

- location
- accredited body partners

We decided not to break down the accredited body partners table by location because:

- the same location could appear under more than one accredited body, since training providers may offer courses ratified by different accredited bodies at a single location
- it might look like the locations are operated by accredited bodies rather than training providers

Accredited bodies have a single table breaking down applications by training provider partner. The table has a toggle to break down each training provider’s applications by location.

We decided not to show all locations for an accredited body in a separate table because:

- the locations in the separate table would be the same as those in the training provider table, just organised differently
- it would be impossible to distinguish between locations in the separate table if multiple training providers use the same location name - for example, ‘Main Site’ is commonly used
- accredited bodies which only run their own courses would see exactly the same list in the training provider and location tables

### Changing how we refer to organisation types

Each table previously had a column heading for ‘Organisation’. We’ve replaced this with the column heading ‘Accredited body’ or ‘Training provider’ as appropriate.

This change means that we can remove ‘self-ratified’ from next to the name of an organisation which is both the provider and accredited body for courses.

It’ll be clear that the organisation is in the table because of its role as a training provider, so there’s no need to say ‘self-ratified’.

### Showing organisations with zero applications

We decided not to hide organisations which have zero applications. Instead we show zeroes, even if that means that a table contains only zeroes.

### Showing columns for more statuses

We previously had columns to show the number of applications which have received and interviewing statuses.

We added further columns which have offered, conditions pending and recruited statuses. This will give users more of an overview of their work, rather than focusing only on applications which need a decision.

We decided not to show applications with deferred status, as they’re not important to providers until the next recruitment cycle.

## How it works

There’s a section on the overview page for each organisation that the user belongs to. These sections appear in alphabetical order.

The heading for each section is ‘Applications to [organisation]’.

In each section, different tables are shown depending on whether the organisation is a training provider or an accredited body.

If the organisation is a training provider, the section includes tables for:

- applications by location - if the training provider has courses at more than one location
- applications by accredited body

Locations and accredited bodies are ordered alphabetically.

If the organisation is an accredited body, the section includes a table for applications by training provider. This can be toggled to show locations if at least one training provider in the table has more than one location.

If none of the training provider partners have more than one location, the toggle link should not be displayed.

Training providers and their locations are ordered alphabetically.

If the organisation is both an accredited body and a training provider, we consider it to be an accredited body when deciding what table to show. We list the organisation at the top of the table of training providers.

Each table only shows data for the current recruitment cycle. If there are no applications, the table is still displayed but shows zeroes.

We link from each number in the table to the application list with filters applied. We do not link from zeroes.

On small screens the table is displayed within a horizontal scrollable pane.

## Further considerations

There’s now an overlap between this page and the [status of active applications report](/manage-teacher-training-applications/helping-users-check-how-quickly-courses-are-filling-up/). The only difference is that in the report we break down applications by course.

We want to find out how useful users find this breakdown of applications by course. We can then remove the ‘status of active applications’ report and either:

- add the course breakdown to the overview page
- omit the course breakdown
