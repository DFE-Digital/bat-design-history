---
title: Adding an academic years filter to the search results
description: We added a way to filter location and provider search results by academic year, and reorganised the information shown in each result
date: 2026-03-03
tags:
  - search
  - filters
  - academic years
related:
  items:
    - text: Finding placement schools by location
      href: /register-of-placement-schools/finding-placement-schools-by-location/
    - text: Finding placement schools by provider
      href: /register-of-placement-schools/finding-placement-schools-by-provider/
---

Users searching for placement schools often need to find schools that have hosted placements in a specific academic year.

Without a filter, they have to scroll through all results to identify relevant schools. We added an academic year filter and reorganised the information shown in each result to make the page shorter and easier to scan.

## Why we did this

Users told us they needed to check which schools had hosted placements in particular academic years. This matters for:

- providers reviewing recent placement activity
- DfE teams analysing trends over time
- users who need to confirm a school's history before approaching them

Without a filter, users had no way to narrow results by year. They had to check each school individually, which was time-consuming.

## How it works

### The academic years filter

The filter uses the checkbox pattern, consistent with the other filters on the search results pages.

It lists academic years from 2019 to 2020 through to 2025 to 2026, in reverse chronological order. We display them this way because users are more likely to need information about recent academic years than older ones.

Users can select one or more academic years. The results update to show only schools that hosted placements in the selected years.

### Reorganising the search result summary

We also reorganised the information shown in each search result card. Each card now shows:

- address
- school type
- education phase
- academic years

For location searches, we show distance in miles above the address. This means users who searched by location can see, at a glance, how far each school is.

### Moving status, UKPRN and URN into the card title

Previously, status, UK provider reference number (UKPRN) and unique reference number (URN) appeared in the summary list. This made the summary cards longer and harder to scan.

We moved these details into the card title area. This is the same approach we took on the Register of training providers. It frees up space in the summary cards and reduces the overall length of the page.

## Design decisions

### Reverse chronological order for academic years

We ordered the years with the most recent first. Users are typically looking for current or recent placements, so the years they need most appear at the top of the filter list without scrolling.

### Checkbox filter pattern

We used checkboxes rather than a dropdown or radio buttons because users may need to filter by more than one academic year at once. The checkbox pattern is also consistent with how other filters work on the search results pages.

## Further considerations

As we add more academic years, the filter list will grow. We may need to consider collapsing older years or limiting the list to a set number of the most recent years.
