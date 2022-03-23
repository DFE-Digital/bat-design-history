---
title: Sorting the application list in different ways
description: We made the default sort order more straightforward and added 2 new options to sort by.
date: 2022-03-21
screenshots:
  items:
    - text: Application list sorted by status
      src: application-list--status-sort.png
    - text: Application list sorted by most recently updated
      src: application-list--most-recently-updated-sort.png
    - text: Application list sorted by least recently updated
      src: application-list--least-recently-updated-sort.png
tags:
  - MN021
---

At the moment [the application list is sorted by priority](/manage-teacher-training-applications/help-users-know-what-needs-doing-and-whats-changed/). We gather applications under headings such as:

- Confirm deferred offers
- Give feedback: you did not make a decision in time
- Ready for review

These headings always appear in a specific order. They remain after searching or filtering results, as long as there’s at least one result under the heading.

This allows us to highlight types of applications which we think should be prioritised. For example we want to improve candidates’ experience by encouraging providers to give feedback.

This priority order is problematic because:

- users often want to process applications in other ways such as by most or least recently updated
- the grouping makes it harder to process applications in other ways - for example, it isn't easy to view all received applications at a particular location because received applications appear in 2 different priority groups

## User need

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## What we changed

We removed the priority headings, changed the default sort order and added two more options to sort the list.

We also now show the last updated date for each application.

### Removing the priority headings and changing the default sort order

To give users more control over the application list, we removed the priority headings.

The default order is now by status so that, for example, users can look at all received applications together. We've made this the default order as it’ll be useful even without applying filters.

### Adding the ability to sort by most and least recently updated

Some users need to know which applications have been updated least recently. For example, they want to stay in contact with candidates once they’ve made an offer.

Some users need to know which applications have been updated most recently. For example, they want to know if a colleague has added a note to an application.

These sort orders are likely to be most useful when used with filters.

### Showing the last updated date

We always show any detail that can be filtered or sorted in the application list.

Since we added the ability to sort by most or least recently updated, we now show this detail for each application in the list.

## How it works

The default sort order is by status, in the same order as they are shown in the filter panel. The order is:

- received
- interviewing
- offered
- conditions pending
- recruited
- deferred
- conditions not met
- declined
- rejected
- application withdrawn
- offer withdrawn

Applications with received and interviewing status are ordered with the closest to automatic rejection at the top.

Applications with offered status are ordered by the fewest days left for the candidate to respond. If the candidate has not received all their decisions yet, we assume that it’ll take the maximum amount of time and add 10 working days for the candidate to make their decision.

Applications with all other statuses are ordered by most recently updated.

### Sorting by most recently changed or least recently changed

When a user sorts by most recently changed:

- the status option will be a link
- the updated least recently option will be a link
- the updated most recently link will be standard text

When a user sorts by least recently changed:

- the status option will be a link
- the updated most recently option will be a link
- the updated last recently link will be standard text

An update includes:

- adding a note
- assigning a user
- changing a course
- making an offer
- rejecting an application
- withdrawing an offer
- marking a condition as met or not met
- having an offer accepted

### Remembering the sort options

The currently selected sort order will be remembered even if the user signs out and signs back in.
