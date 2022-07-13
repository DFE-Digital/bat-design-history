---
title: Revisiting how we identify current and past trainees
description:
date: 2022-06-15
---
{% from "screenshots/macro.njk" import appScreenshots with context %}

We’ve revised our designs for how we’ll identify current and past trainees. This affects what we show on the Register homepage and how our filters work for registered trainees.

## The problem we’re trying to solve

As more and more trainees are added to Register, a greater proportion will be historic trainees - those who have been awarded teacher status or have withdrawn from previous years. The counts shown on the homepage are of all trainees - but providers are more interested in the current year rather than all time. When viewing their registered trainees, they’re similarly more interested in who they’re actively training than historic records.

We’ve started to hear this as an issue from our users - that the counts on the homepage do not match the counts they expect to see (because they think about the current year’s counts), and they would like to know how to export or get to a view of their current trainees.

Identifying ‘current’ trainees

## Our previous cohorts designs

Our first attempt to solve this was with cohorts - we grouped all trainees into buckets:

* current
* past
* next year’s trainees

In our cohorts, ‘current’ included any trainee who started in the current academic year, or any from previous years who had yet to complete their course. We felt that in most cases this is the slice of trainees that a provider would be most interested in.

On the homepage our status badges counted ‘current’ trainees only, whilst we included links to view all trainees or just next year’s.

![The Register homepage with status boxes for the ‘current’ cohort.](1-homepage-status-boxes-cohorts.png)

On the records list page, we added filters for the three cohorts:

![Filters for the three cohorts.](2-records-filters-cohorts.png)

The ‘current’ cohort was pre-selected as the majority of the time we think users will be interested in their current trainees and not historic or upcoming ones.

## How these tested

The homepage with cohorts did not test well. We observed that the three links for ‘all registered trainees’, ‘next year’s trainees’, and ‘current trainees’ were confusing to users and they weren’t sure which they should pick to see their trainees. They were overloaded with too much choice.

Providers expressed confusion over which status box they should want - TRN received? Pending? They asked how to see their current trainees - even though there was a link exactly for this.

## Other considerations

### Empty statuses that are not helpful

We have done recent work with the Teaching Regulation Agency to improve the speed that records move between the various states. In most cases, a trainee will be ‘Pending TRN’ or ‘Qualification recommended’ for minutes only. This means in practice that the cards shown on the homepage would have 0 trainees in these statuses most of the time. This does not hurt our users, but also isn’t very useful.

![Homepage status boxes with zero trainees in ‘Pending TRN’ and ‘Qualification recommended’ statuses](3-homepage-status-boxes-empty.png)

We also had development challenges building the cohorts. Some trainee records imported from HESA are incomplete and this made calculating the cohorts impossible for these trainees. We’d know the trainee had finished, but not when - this meant we couldn't know if they should be in current or past. This is because our definition of current included any trainee who started or finished this year. Without knowing their end date we couldn’t know if they finished this year.

## What we’ve changed

The core need of identifying past and current trainees remains - and we believe it makes most sense to focus on current trainees rather than showing historic ones.

As the cohorts were tricky to calculate with incomplete data we’ve taken a simpler approach of grouping trainees by:

* course not started yet (registered trainees, but course yet to start)
* in training (all active trainees, excluding those on courses yet to start)
* deferred
* awarded (all trainees awarded QTS or EYTS)
* withdrawn

Each of these should always be possible to calculate. Unlike with our cohorts work we’d make no attempt to have a slice of the “current year” - providers will get trainees they’re currently training or else ever awarded or ever withdrawn.

These are similar to our existing status filter - except to combine several into ‘in training’. Because of this, we’re replacing our status filter with these, and moving to the top with ‘in training’ pre-selected.

![New filters for training status](4-records-filters-training-status.png)

Whereas our previous homepage had a fixed status box for every status - we’ll now have a box only for things that we think are useful numbers to show or filter by:

![New status boxes on our homepage for training status.](5-homepage-status-boxes-training-status.png)

We’ve removed the extra links that confused users - we think in most cases providers will want ‘in training’.

We also hope that by breaking the link between these boxes and statuses, we can be free to explore adding different boxes in the future as needs arise. In the future we might explore a box to show trainees recently imported from HESA, or where providers need to take a specific action.

## Adding a new filter for end year

We already have a filter for ‘Start year’ - this shows all trainees who started in a given academic year. We’ll now add a companion filter ‘End year’ which shows all trainees due to finish or that did finish in a given academic year.

When we’ve done previous research with providers (primarily SCITTs), some thought of their trainees in terms of start year, whilst some in terms of end year - this will give us flexibility to support more use cases.

This could be useful for providers who are looking for all trainees who ended in 2018 to 2019 - the year they ‘graduated’. It also is used to support the new status card on the homepage for ‘Awarded this year’ - that will take the user to a filtered view of ‘awarded’ and end year matching the current year.

Calculating end year will require further development work - we will use the following fields in order:
Award date or withdrawal date
Course ITT end date
Course duration and ITT start date (Current HESA records do not always have end dates)

We should be able to do this for all current trainees. However for trainees that have deferred and reinstated we believe we should ask providers to confirm the revised end date on the course.

