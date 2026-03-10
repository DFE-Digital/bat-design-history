---
title: Linking schools together using GIAS relationship data
description: We use Get Information About Schools relationship data to link schools that are successors or predecessors of each other, helping users find the correct open school
date: 2026-03-06
tags:
  - schools
  - gias
  - data
related:
  items:
    - text: Viewing individual placement schools
      href: /register-of-placement-schools/viewing-individual-placement-schools/
    - text: Updating the provider and school autocompletes
      href: /register-of-placement-schools/updating-the-provider-and-school-autocompletes/
---

Schools change status over time.

When a school closes and a new one opens in its place, both records exist in the Get Information About Schools (GIAS) data with different unique reference numbers (URNs). Without linking these records together, users searching for a school might find only the closed version and miss information about the current open school.

We use GIAS relationship data to link predecessor and successor schools and show these connections on the school detail page.

## Why we did this

### The problem with school data over time

Schools do not always stay the same. A school might:

- convert to an academy, closing the maintained school and opening a new academy in its place
- merge with another school
- change phase or type

Each of these changes can result in a new GIAS record with a new URN. The previous school record remains in the data, marked as closed.

This creates a challenge for users. A provider looking for a school where they have placed trainees in previous years might search for the school by name, find the closed record, and miss the current open school. Alternatively, they might find the open school but have no way of knowing it has a history under a different name or URN.

### How GIAS relationships work

GIAS records successor and predecessor relationships between schools. When a school closes, and another opens in its place, GIAS links the two records:

- the closed school record has a successor (the new school)
- the new school record has a predecessor (the closed school)

We use this relationship data to connect related school records in the register.

## How it works

On the school details page, we display related schools after the school details summary. This section lists any schools linked to the current school as a predecessor or successor.

For each related school, we show:

- the school name
- the nature of the relationship (predecessor or successor)

This helps users understand the school's history and navigate between related records.

## Design decisions

### Showing related schools after the summary

We placed the related schools section after the main school details rather than within the summary list. This keeps the primary information about the current school clear and uncluttered. Related schools are supplementary context rather than primary data.

### Linking to the related school record

Each related school links to its own detail page. This lets users move between related records to compare information and check placement history across the school's history.

## Further considerations

A school may have multiple predecessors or successors over time. We may need to consider how to handle longer chains of relationships, particularly for schools that have changed status multiple times. We will review this as we see how users interact with the related schools section.
