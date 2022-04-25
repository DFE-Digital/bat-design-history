---
title: Filtering the application list to show applications which were received recently
description: We added a ‘date received’ filter category to help users find new applications.
date: 2022-04-25
tags:
  - MN030
screenshots:
  items:
    - text: Overview
      src: overview.png
    - text: Application list
      src: application-list.png
---

We’ve already tried some approaches to helping users [find applications which have not been looked at yet]. They did not work well in research, so we’ve decided instead to try letting users:

- filter the application list to show applications received on certain dates
- [shortlist applications]
- [filter the activity log to show applications received between certain dates]

## User need

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Why we’re trying this approach

We know that users want to be able to view all the applications which are new to them.

We want to offer users a way to choose to view only applications which were received on certain dates. Since users can already use filters in the application list, we want to try adding additional filters to it.

## What we changed

We added a ‘date received’ filter category which includes:

- today
- yesterday
- 2 days ago
- 3 days ago

These cover the situations which we think are most important, which are for users to know what applications came in:

- during the current day
- since yesterday, including applications which arrived after the end of the user’s work hours
- over the weekend, including on Friday after the end of the user’s work hours

We also added a box to the overview showing the number of applications which have been received today. If the user clicks on the box, they’ll be taken to the application list filtered by ‘today’.

## What we want to find out

We want to find out:

- if users need to find applications received longer than 3 days ago
- if users understand the difference between date received and date updated

## Further considerations

If we find that users require a wider range of filter options, we could consider adding a way to enter a date range.
