---
title: Special educational needs (SEN) filter
description: SEN is a subject, but also not a subject. Any subject could have an SEN focus.
date: 2018-11-02
tags:
  - filters
  - SEND
  - special educational needs and disabilities
screenshots:
  items:
    - text: Subject filter with SEN option
      src: 01-subject-filter-with-sen.png
    - text: Results with SEN filter enabled
      src: 02-results-with-sen-filter.png
---

Users have struggled to find special educational needs (SEN) courses because SEN is not listed as a subject anywhere.

> I’m really looking at SEN teaching, however there is no way through this search tool to specify this ([Zendesk](https://becomingateacher.zendesk.com/agent/tickets/1436))

SEN is a subject, but also not a subject. Any course (for any given subject) could have an SEN focus. SEN is modelled as a subject by UCAS and courses are tagged with it, but it does not sit neatly within primary, secondary or further education. It’s also not a taught subject.

Instead we need to treat SEN like a filter, if a user wants to see SEN courses we can show them all the SEN courses for the subjects they’ve selected (eg Primary or Secondary Biology).

## When SEN is selected

It should be listed as ‘Only SEN courses’ at the top of the subjects filter. It does not have its own filter page because it’d be wrong to edit it in two different places.

Only SEN courses should display.

If a user selects only SEN and no other subject we should show all SEN courses across all subjects.

[Trello](https://trello.com/c/aLZpgfHA/439-design-surface-special-education-needs-sen-in-subject-search)
