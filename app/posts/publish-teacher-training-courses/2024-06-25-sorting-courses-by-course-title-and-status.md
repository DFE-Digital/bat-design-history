---
title: Sorting courses by course title and status
description: We added functionality to allow providers to sort their courses by course title and status
date: 2024-06-25
tags:
  - courses
  - sorting
---

This work originated from a service walkthrough where it was mentioned that drafts can get lost in the list, especially where there are a lot of courses

## The problem

Providers need to easily update and publish multiple draft courses during rollover and update live courses during the year. However, they are losing track of courses on the list.

## What we changed

Having looked back at previous research and current analytics, it was difficult to determine whether this was really a problem for providers or just anecdotal.

We could not see research where this issue had been specifically addressed, and analytics didn't show many drafts—though this could be because of the time in the recruitment cycle.

To gather more information about this problem, we decided to implement the [Ministry of Justice ‘Sortable table’ design system component](https://design-patterns.service.justice.gov.uk/components/sortable-table), which would allow users to sort courses alphabetically (as they do now) and by status.

![Screenshot of course listing page](course-sorting.png "Course listing page")

## Next Steps

- Once this is live, we can see if the filters are being used and how.
- We can also ask providers more about how they keep track of their drafts in future rounds of testing.
