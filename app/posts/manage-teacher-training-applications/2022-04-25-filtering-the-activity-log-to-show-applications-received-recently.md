---
title: Filtering the activity log to show applications which were received recently
description: We added the ability to filter the activity log to help users find recently received applications.
date: 2022-04-25
tags:
  - MN030
screenshots:
  items:
    - text: Overview
      src: overview.png
    - text: Activity log
      src: activity-log.png
---

We’ve already tried some approaches to helping users [find applications which have not been looked at yet]. They did not work well in research, so we’ve decided instead to try letting users:

- filter the activity log to show applications received between certain dates
- [filter the application list to show applications received on certain dates](/manage-teacher-training-applications/filtering-the-application-list-to-show-applications-received-recently/)
- [shortlist applications](/manage-teacher-training-applications/shortisting-an-application/)

## User need

The user need we’re trying to meet is:

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Why we’re trying this approach

We know that users want to be able to view all the applications which are new to them.

We’re going to try adding filters to the application list. But this may not be the best approach because we’ll need to:

- add to the already long list of filters
- make sure the date received is always shown for each application

The activity log is already organised by the date and time when events happened. It may be more suited to filtering by date than the application list.

## What we changed

We added the ability to filter the activity log. There are filter categories for:

- Date from
- Date to
- Event

The event category contains options for:

- Application received
- Application shortlisted
- Application withdrawn
- Interview set up
- Interview updated
- Interview cancelled
- Course updated
- Offer made
- Offer updated
- Offer withdrawn
- Offer declined
- Conditions marked as met
- Conditions marked as not met
- Note added
- Note updated
- Note deleted
- User assigned
- Assigned users updated

We also included a box on the overview page which shows the number of applications received today. This links to the activity log filtered by:

- applications received in the ‘event’ filter category
- today’s date in the ‘date from’ filter category

## How it works

[Filtering works the same way as it does on the application list](#).

Users can filter by date and event and click ‘Apply filters’.

If the user leaves the ‘date from’ empty, the results should start from the beginning of the previous recruitment cycle.

If the user leaves the ‘date from’ empty, the results should end with the most recent applications.

## What we want to find out

We want to find out:

- how well the date range input works - entering dates manually requires extra thought and takes longer, so we could make it easier to enter particular ranges
- if users would filter the activity log to find something other than recently received applications

## Further considerations

Since the list of events is long, we would consider showing only part of it. Users would be able to search it or scroll through the filters in the category.

We’ve used this design for the [subject filter](/manage-teacher-training-applications/filter-by-subject/).
