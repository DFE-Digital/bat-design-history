---
title: Course sorting
description: Adding functionality to allow providers to sort their courses
date: 2024-06-25
tags:
  - courses, sorting
---

Taken from the ‘Introduction to Publish’ recording - where it is mentioned that Drafts can get lost in the list, especially where there are a lot of courses

Problem: Providers need to easily update and publish multiple draft courses during rollover and update live courses during the year however they are loosing track of courses within the list on Publish.

### What we changed

Having looked back at previous research and current analytics it was difficult to determine whether this was a problem for providers. We could not see research where this commentary had been pulled out specifically, and anayltics didn't show large number of drafts - though this could be because of the time in the Rollover.

To help gather more information about this problem, we decided on implemeting the [MoJ Sortable Table](https://design-patterns.service.justice.gov.uk/components/sortable-table) component, which would allow users to sort courses alphatically (as it is now), as well as being able to sort by status

![Screenshot of course listing page](course-sorting.png "Course listing page")

### Next Steps

- Once this is live, we can see if the filters are being used and how
- We can also ask Providers more about how they keep track of their drafts in future rounds of testing