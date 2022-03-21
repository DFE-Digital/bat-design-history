---
title: Only showing filters that return useful results
description: We set rules for when individual filters, categories of filters and the filter panel should appear.
date: 2022-03-15
---

At the moment, we show filters in the application list even if they return no results.

For example, we show:

- the ‘deferred’ filter even if there are no deferred offers
- partner organisations from the previous recruitment cycle even if they are not partners in the current recruitment cycle

We also show filters in the application list which do not affect the results.

For example, if the user has already filtered by ‘received’ then we currently still show the ‘interviewing’ filter even if there are no applications in the ‘interviewing’ status.

Showing all the filters at all times means that:

- users can waste time by choosing a filter which is not useful
- the list of filters is very long - we’ve heard users complain about this in research

## What we changed

To stop users seeing filters which are not useful, we’ll:

- only show a filter if it changes the results and does not return zero results
- only show a category if it contains at least one filter
- only show the filter panel if it contains at least one category

### Example scenarios that hide any filter that does not return results

> Given there are no deferred offers ready to confirm
> Then I do not see the ‘deferred offers ready to confirm’ filter

> Given I have filtered by the received status
> And there are no applications in the received status for biology
> Then I do not see the ‘biology’ filter

> Given I have filtered by the received status
> And there are deferred offers ready to confirm
> Then I do not see the ‘deferred offers ready to confirm’ filter
> Because applications cannot be both in received status and a deferred offer which is ready to confirm

> Given I have filtered by the received status
> And I have filtered by the deferred status
> And there are deferred offers ready to confirm
> Then I do see the ‘deferred offers ready to confirm’ filter

> Given I have filtered by 5 days or fewer to make a decision
> And there’s an application with 5 days or fewer to make a decision in the received state
> And there’s an application with 5 days or fewer to make a decision in the interviewing state
> And there’s an application for each possible status
> Then I do not see the ‘offered’, ‘conditions pending’, ‘recruited’, ‘deferred’, ‘conditions not met’, ‘declined’, > ‘rejected’, ‘application withdrawn’ or ‘offer withdrawn’ filters
> And I do see the ‘received’ and ‘interviewing’ filters
> Because a decision is only required for applications in the received and interviewing statuses

> Given I work for a training provider
> And I ran courses with an accredited body in the previous recruitment cycle
> And I do not run courses with them in the current recruitment cycle
> And I have filtered by the current recruitment cycle
> Then I do not see the accredited body as a filter
> And I do not see any locations for that accredited body

### Example scenarios that hide any filter that does not change the results

> Given there are applications that exist in every status
> And I have filtered by the received status
> And all applications in the received status have 5 days or fewer to make a decision
> Then I cannot see the ‘5 days or fewer to make a decision’ filter
> And I can see the filter for every status

> Given I have filtered by 5 days or fewer to make a decision
> And I have filtered by the interviewing status
> And there are applications that exist in every status
> Then can see the received filter
> And I can see the interviewing filter
> And I cannot see the ‘offered’, ‘conditions pending’, ‘recruited’, ‘deferred’, ‘conditions not met’, ‘declined’, > ‘rejected’, ‘application withdrawn’ or ‘offered withdrawn’ filters

> Given I have filtered by the rejected status
> And all the rejected applications are to a certain location
> Then I cannot see the filter for that location

### Example scenarios that hide any category which does not contain a filter

> Given I have filtered by the offered status
> Then I cannot see the important category
> Because none of the filters in the important category can apply to an application in the offered status

> Given that no application has an assigned user
> Then I cannot see the assigned user category
> Because filtering by a user name would give zero results and the ‘unassigned’ filter would not change the results

> Given I have filtered by a training provider
> And all the applications to that provider are full time
> Then I cannot see the full time or part time category

> Given I have filtered by feedback needed
> Then I cannot see the status category
> Because only applications in the rejected status can need feedback

> Given I have filtered by the received status
> And I have filtered by applications assigned to Mary Jane
> And there are no received applications assigned to Mary Jane
> Then I can see the assigned user category with all the possible users
> And the Mary Jane filter is ticked
> And I can see the status category with all the possible statuses
> And I cannot see all other categories

## Further considerations

We may require significant technical changes to make the filters work as proposed without slowing down the service.

We also want to consider showing the number of results next to each filter.
