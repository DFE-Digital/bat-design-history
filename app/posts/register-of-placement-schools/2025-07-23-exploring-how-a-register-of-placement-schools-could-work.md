---
title: Exploring how a Register of placement schools could work
description: We wanted to understand what people might want to ask of the placement schools data
date: 2025-07-23
tags:
  - placement schools
  - register
  - ideation
related:
  items:
    - text: Exploring the scope of a register of placement schools
      href: /exploring-the-scope-of-a-register-of-placement-schools/
---

## What we set out to learn

We are exploring how a Register of placement schools could work in conjunction with the Register of training providers.

Our aim is to help the DfE, accredited providers, and their training partners keep track of which schools are used for placements and how those placements are organised.

To do this, we need to understand what people might want to ask of the data.

These questions tell us:

- what information matters most to users
- how users might want to filter, group or compare data
- what relationships between providers, schools and time periods we need to model

## What we did

We started by writing down questions that someone might ask when using a Register of placement schools.

We based these on:

- existing knowledge from the Becoming a teacher (BAT) service line
- conversations with stakeholders about how placement schools are tracked now
- early assumptions about what users might need to check or report on

We wrote as many questions as we could think of without worrying about interface details.

Once we had a long list, we grouped them into functional areas to spot patterns and gaps.

## What we found

### Finding and filtering placement schools

The most common need is to find placement schools that match specific criteria. Users might start with a broad search and then filter down.

Examples include:

- show all placement schools in a given academic year
- show all placement schools linked to a specific provider
- filter by education phase, for example, primary, secondary or all‑through
- filter by religious character, gender intake or admissions policy
- filter by region, local authority or distance from a postcode

Users might also combine several filters. For example:

> “Show me all placement schools for the 2024 to 2025 academic year in the East Midlands that are primary phase and linked to provider X.”

This shows that the interface will need to support multiple filters working together.

### Tracking change over time

Users want to see how placement school usage changes across academic years. This could be to monitor supply, track expansion or investigate why a school is no longer used.

Examples include:

- which schools were first used in a given year
- which schools stopped being used after a given year
- which schools have been used across several years
- which schools changed education phase or provider between years

Some users may also want to see trends, such as:

> “How has the number of placement schools for provider Y changed over the past five years?”

This means we need to store historical data, not just a snapshot of the current year.

### Understanding provider relationships

Placement schools often collaborate with multiple providers. Users may need to see these relationships to plan partnerships, avoid duplication or check compliance.

Examples include:

- which providers use a particular school
- which schools are shared by multiple providers
- which schools are exclusive to one provider
- where a provider has stopped placing trainees, but another still does

For example:

> “Show me all placement schools where provider A and provider B both placed trainees.”

This means we need to show relationships in both directions: from provider to school and from school to provider.

### Exploring geography and regional coverage

Users often work within a region or need to understand coverage across England. Geography is important for planning and balancing placements.

Examples include:

- show all placement schools in a region or local authority
- show all placement schools within 20 miles of a postcode
- compare urban and rural placement school coverage
- combine location with other filters, such as education phase

For example:

> “Show me all secondary placement schools within 10 miles of Leeds.”

This suggests we may need mapping tools or distance‑based searches in addition to simple filters.

### Checking operational status and capacity

Users want to know which schools are available for placements now, and which ones have been withdrawn or have limited capacity.

Examples include:

- which schools are currently active
- which schools have been marked inactive in the last academic year
- which schools are rated as high quality or outstanding
- which schools have capacity for more trainees
- which schools have been withdrawn from a partnership

For example:

> “Show me all active placement schools that have capacity for additional trainees.”

This means we need to capture and display status and capacity data alongside basic details.

### Data quality and completeness

Some users will focus on checking the quality of the data itself. They need to spot missing or inconsistent details so that records can be corrected.

Examples include:

- which schools are missing a UKPRN or URN
- which schools have no address details recorded
- which schools have no linked provider

For example:

> “Show me all placement schools with missing identifiers.”

This suggests we should provide simple ways to flag data issues and possibly export lists for follow‑up.

## What this means for design

These findings indicate that a Register of placement schools will require flexible search and filtering capabilities.

It will also need to show change over time and relationships between providers and schools.

Key design implications are:

- provide clear filters for academic year, provider, location and school characteristics
- allow filters to be combined so users can narrow results in one view
- support views that show change over time
- include ways to explore relationships, for example, by clicking through from a school to see all its providers
- surface data quality issues directly in the interface

These groupings will help us shape early prototypes of search, filter and reporting features.

Our next step is to prototype user journeys and interface patterns that meet these needs.
