---
title: Providing a configurable course report and showing important data in one place
description: We let users choose the rows and columns of a course report and also created a page showing important data
date: 2021-05-20
tags:
  - reports
---

This builds on work we did to [show data about applications and candidates](/manage-teacher-training-applications/showing-users-data-about-applications-and-candidates/).

We found that some research participants had trouble working out which data report they needed. For this iteration we’ve made that decision easier but still give users access to a wide range of data.

## What we did

Rather than continuing to develop several separate reports we decided to try:

- displaying some data as ‘glance metrics’, a simplified display with just a few important numbers
- offering a single course report which providers could configure and then filter

## How it works

Both the glance metrics and the configurable report are found in the ‘Statistics’ section.

### Glance metrics

We show users a series of boxes indicating:

- total applications received in the current recruitment cycle
- percentage of applications currently ready to enroll
- number of applications currently in various statuses
- number of applications in the same statuses one month and one year ago
- average processing times - the time taken to move from one status to another

![Statistics page showing glance metrics](glance-metrics.png)

### Configurable report

Users start with a basic report showing the total number of applications made to each course they offer.

We’ve assumed that the user’s organisation only works with one partner on each subject. For example they only offer one biology course, rather than offering several where each is in partnership with a different organisation.

If we develop this design further, we’ll need to address how to display courses if the same subject is offered with multiple partners.

![Default courses report showing the number of applications per course](configurable-course-report-01.png)

Users can click ‘change report settings’ to enter the configuration flow. Here they can choose a dimension of data to form the columns of the report.

The options are:

- year received
- status
- training provider
- accredited body
- location
- full time or part time
- primary or secondary
- fee paying or salaried

After choosing, the user can either view the report or ‘split data further’ to add another dimension.

![Choosing what should be in the columns in the report](configurable-course-report-02.png)

If the user does not split the data further, they see a report with the data they selected in the columns.

In the example shown here, the user has chosen to have training provider in the columns. This is indicated in the ‘Settings’ section of the filter.

![Configured report showing a section containing filters and the content broken down by the user’s chosen dimension - in this case, training provider](configurable-course-report-03.png)

If the user does split the data further, they can choose up to 2 more dimensions.

These additional dimensions will be displayed in the report by:

- splitting the columns
- splitting the rows

![Adding a second dimension to the report](configurable-course-report-06.png)

![Adding a third dimension to the report](configurable-course-report-07.png)

If a dimension has already been chosen then it cannot be chosen again. For example, it’s not possible to put year received in the columns and then also split the columns or rows by year received.

Adding additional dimensions allows users to create reports meeting needs such as seeing:

- courses split by training provider and year received
- courses split by training provider, year received and application status

![Courses split by training provider and year received](configurable-course-report-09.png)

![Courses split by training provider, year received and application status](configurable-course-report-08.png)

Using the filter displayed alongside the report, the user can:

- remove the dimensions which they chose
- apply filters to the dimensions being shown

For example, if one of the dimensions is status then the user can filter to only see certain statuses.

![Courses filtered by training provider](configurable-course-report-04.png)

## Other considerations

In the current design, dimensions must be added in a specific order:

1. Columns
2. Split columns
3. Split rows

We considered allowing users to choose a dimension and at the same time decide how it should be displayed. We did not include this in the design but could consider it again in future.
