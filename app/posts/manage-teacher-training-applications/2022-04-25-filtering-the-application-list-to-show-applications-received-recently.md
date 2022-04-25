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

We’ve already tried some approaches to helping users [find applications which have not been looked at yet](/manage-teacher-training-applications/helping-users-find-applications-which-have-not-been-looked-at-yet/). They did not work well in research, so we’ve decided instead to try letting users:

- filter the application list to show applications received on certain dates
- [shortlist applications](/manage-teacher-training-applications/shortisting-an-application/)
- [filter the activity log to show applications received between certain dates](/manage-teacher-training-applications/filtering-the-activity-log-to-show-applications-received-recently/)

## User need

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Why we’re trying this approach

We know that users want to be able to view all the applications which are new to them.

We want to offer users a way to view only applications which were received on certain dates. Since users already filter the application list, we can provide additional filters there to achieve this.

## What we changed

We added a ‘date received’ filter category which includes:

- today
- yesterday
- 2 days ago
- 3 days ago

These cover the situations which we think are most common, where users want to know what applications came in:

- during the current day
- since yesterday, including applications which arrived after the end of the user’s work hours
- over the weekend, including on Friday after the end of the user’s work hours

We always include in the application list any information which users can filter by. This means that users can always see why an application appears in results.

Previously we only showed the ‘updated’ date and time. For a new application, that would actually be the date and time it was recevied. We now show:

- received date and time for all applications
- updated date and time for applications which have been updated

We also added a box to the overview showing the number of applications which have been received today. If the user clicks on the box, they‘re taken to the application list filtered by ‘today’.

## What we want to find out

We want to find out if users:

- need to find applications received longer than 3 days ago
- realise that they need to choose multiple filters to get results for a range of dates
- understand the difference between date received and date updated

## Further considerations

If we find that users require a wider range of filter options, we could consider adding a way to enter a date range.
