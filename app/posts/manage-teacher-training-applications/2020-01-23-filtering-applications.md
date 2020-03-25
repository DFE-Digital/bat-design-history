---
title: Filtering applications
description: Let users find items a long list of applications by status and provider.
date: 2020-01-23
tags: awaiting-validation
---

Let users find applications quickly and easily within a very long list.

## Hypothesis

Currently, providers see 1 long list of applications. This works okay for now because there's only a few applications being submitted and users are only currently assigned to 1 provider.

But users will have to manage hundreds of applications including applications across multiple providers like those that are part of a School Direct family or universities that accredit multiple School Directs.

This makes the page slower to load and makes it harder to find applications.

### Filtering by status and provider

If we let users filter by status and provider
Then it'll be easier to find applications
We’ll know this works when:
- research shows there's a need to see applications for different providers at the same time
- users are able to select the statuses they want to see

### Pagination

If we let users paginate
Then pages will be shorter and quicker to load

## Design rationale

On large screens, the filter is positioned on the left and starts open in order to give it equal weighting with the application list. This way it's easy to spot.

If the filter was above the list, it would push the list down and potentially out of view. It also lets the user see the list at the same time as the filters. On small screens, the filter is partially overlaid for the same reason.

The filter lets users select and submit multiple filters in a batch which is more efficient than a filter that only let users select one filter at time.

The ‘Apply filters’ button is at the top so that it has the best chance of being seen, especially if there are lots of filters.

The selected filters are duplicated as a group at the top so it's obvious which filters are applied. And  they can be deselected without having to find the selected checkbox in the long list of options below which might be off screen.

Small checkboxes are used to make them less prominent so that users can focus on the page content.

The width of the page is wider to accomodate the filter.

## Research findings

1 participant so far. We found:

- filters worked really well (didn't test on mobile)
- filters for state and provider are useful
- we need interview states like ‘rejected before interview’
- suggests ‘Offer withdrawn’ instead ‘Withdrawn by us’
- they raised the need to see what had changed across all applications on a given day. So which applications had gone from one state to another (and what those states were). They also felt that the audit trail would be very useful. At a pinch, a combination of date updated, new state and audit trail would work for this, but seeing what had changed on the dashboard would be useful. They use a "movement view" as a way of staying on top of what actions they need to take. E.g. something moving from offered to accepted means lots of paperwork needs to go out to the candidate.

[Research on lookback](https://lookback.io/watch/j5Z8YfSp4g85kEYQn)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Application list"
    },
    {
      text: "Filtering by status"
    },
    {
      text: "Filtering by provider"
    },
    {
      text: "Filtering by status and provider"
    }
  ]
}) }}
