---
title: Filters for prioritising important work (iteration 2)
description: We removed the ‘important’ filter category and made changes to the filters which were in it.
date: 2022-04-11
tags:
  - AN029
  - MN021
screenshots:
  items:
    - text: Days to make decision filter
      src: filter--days-to-make-decision.png
    - text: Rejection feedback filter
      src: filter--rejection-feedback.png
    - text: Deferred offers that are ready to be confirmed filters
      src: filter--deferred-offers-ready-to-be-confirmed.png
---

We recently [added an ‘important’ filter category](/manage-teacher-training-applications/adding-an-overview-page-and-filters-to-help-users-prioritise-their-work/#application-list-filtered-to-show-application-which-needs-feedback-marked-with-feedback-needed) with options for:

- 5 days or fewer to make decision
- feedback needed
- deferred offers ready to confirm

We added these filters so that we can provide lists of applications when users click on boxes in the [new overview page](/manage-teacher-training-applications/adding-an-overview-page-and-filters-to-help-users-prioritise-their-work/#overview-page).

But we do not think that grouping the filters works well because:

- the things we call important may not always be important to the user
- there are other things which are important which are not in the category
- it only allows users to choose applications which have a particular characteristic, rather than ones which do not - for example, users cannot filter for applications that have feedback

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## What we changed

We removed the important category, which contained 3 filters.

We turned 2 of the filters into their own categories. We removed the other filter as we can achieve the same effect with other filters.

### Adding a filter category for ‘days to make decision’

We added a ‘days to make decision’ filter category with options for:

- 5 days or fewer
- More than 5 days

### Adding a filter category for ‘rejection feedback’

We added a ‘rejection feedback’ filter category with options for:

- Needs feedback
- Does not need feedback

We’re calling it ‘rejection feedback’ rather than just ‘feedback’ to make it clear what the filter will show.

In the application list we changed “Feedback needed” to “Needs feedback” to match the name of the filter.

### Using existing filters to find deferred offers that can be confirmed

We realised that users could find deferred offers that are ready to be confirmed by filtering by:

- the previous recruitment cycle
- the deferred status

This means that we do not need a separate filter to achieve the same result.
