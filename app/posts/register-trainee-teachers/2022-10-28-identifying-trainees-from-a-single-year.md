---
title: Helping HEIs find trainees from a single year
description: Improving ways providers can find everyone who was in training in an academic year
date: 2022-10-28
related:
  items:
  - text: Revisiting how we identify current and past trainees
    href: /register-trainee-teachers/revisiting-how-we-identify-current-and-past-trainees/

---

Earlier this year we did some work to change how we [identified past and current trainees](/register-trainee-teachers/revisiting-how-we-identify-current-and-past-trainees/). Whilst these changes largely improved working with current trainees, research with higher education institutions (HEIs) found we weren’t meeting all of their needs.

School centred ITT providers (SCITTs) mostly have a new cohort of trainees each year, mostly on one year courses, and tend to have fewer trainees than HEIs each year. They often group their cohorts by start year. This means they can work using our start year filter or by searching for individual trainees by name.

HEIs have many more trainees, and that span multiple years. They tend not to group their cohorts by year of intake, but instead think of those in training in a given year, which will have trainees with multiple start years.

Providers have asked for help:

* identifying ‘this year’s’ trainees
* iIdentifying ‘last year’s’ trainees

Their common task is to find ‘this year’s’ trainees so they can export them and check their data. ‘This year’ would include all trainees added this year, as well as any trainees from prior years still in training or who withdrew or were awarded this year. This isn’t currently possible to filter to in Register. 

The data they will have sent to HESA in a collection will be similar to this group - it’s all trainees who have been in training in a given collection’s year.

We’ve observed that without a filter to help them, providers are likely to export all their trainees to find the ones they want – this isn’t ideal as they may get far more data than necessary. Even once exported, it’s tricky to narrow down to those that were in training in a given year. A provider would need to exclude all trainees with a start year after the year they were interested in, and exclude all trainees with an end year before the year they’re interested in.

## How DTTP handled this

DTTP (the service that Register replaced) had a data model that was inherently based around academic years – which meant this need was supported by default. Each new academic year, a new collection was made to contain all trainees added that year. Any prior trainees who were still in training or deferred got copied over to this new collection. This meant that by default DTTP only showed the current year’s trainees - ones who had completed training in prior years were in different collections. Register is fundamentally different in that we don’t have this concept of separate collections each year.

## Existing year options

We currently have two ‘year’ attributes on trainees that providers can filter on and see in the CSV export.

### Start academic year

This is the academic year the trainee started in. It’s calculated using the trainee’s start date or else the ITT start date. It’s used to determine which year’s funding rules apply to the trainee.

### End academic year

This is the academic year the trainee is expected to finish in, or did finish in. Initially it will be the academic year of the ITT end date. Later it will get updated if the trainee withdraws or is awarded QTS or EYTS.

These two attributes can be used to find all trainees who started or finished in a particular year - but cannot easily be used to find everyone who was in training in a given year.

## What we’ve tried

We need to be able to identify trainees that were involved in training in a given year. We’ve realised that now that we have start and end years calculated, the years a trainee was in training (or will be in training) are all the years between the start and end academic year.

For example, for a trainee with an academic start year of 2019 to 2020 ending in 2021 to 2022, their years of training will be 2019 to 2020, 2020 to 2021 and 2021 to 2022.

A trainee starting and finishing in the same year would just have a single training year.

With these years of training calculated, a provider could filter on a single year to get all trainees that were in training that year.

If a trainee unexpectedly withdraws early, we’ll recalculate their end year. That will mean that our calculation of years in training would also automatically update.

## What we’re calling this

For our first round of user research we called this new field ‘training years’ - all the years a trainee was or will be in training. However we now plan to change this to ‘academic years’. Providers we tested with felt they basically meant the same thing. As academic year is already a common term in other contexts, it feels like the better term for now.

## New designs

Using this new data, we’ve added a new tile to the homepage to show all trainees from the current year:

![A set of tiles on our homepage. A new tiles has been added showing total trainees in a single year.](1.homepage-tiles.png)

The existing tiles except the incomplete one are implicitly subsets of this - as by definition you must be in the current year to be in training, awarded, or deferred. Just after the transition to a new academic year we can consider adding a tile for the previous year for a short period.

We’ve also added a new filter to let providers pick the academic year they’re interested in:

![Checkbox filters for selecting academic year.](2.record-filters.png)

We’re starting by just showing the current and previous academic year - as we think these are the most common ones HEIs will be interested in.

### Guiding exports to academic years

We’re still worried that providers might export all their trainees by default, when in most cases they will be interested in a subset of trainees only.

We’ve updated our export link so that when no filters are applied, the link changes to ‘Choose trainee records to export’, which then takes the user through a flow to choose a subset of trainees. We hope that this will help providers export the set of records they need, whilst discouraging exporting all their records.

![Alternate export link shown when no filters are applied. The link text is ‘Choose trainee records to export’.](3.export-link.png)

The new flow will be a report available in our reports section.

#### Choose year to export

![Checkbox filters for selecting academic year.](4.report-choose-year.png)

#### Current year

![Checkbox filters for selecting academic year.](5.report-current-year.png)

#### Previous year

![Checkbox filters for selecting academic year.](6.report-previous-year.png)

#### Statuses and record sources

![Checkbox filters for selecting academic year.](7.report-statuses-and-sources.png)

In user research users were able to easily use this flow to export the year’s trainees they were interested in.
