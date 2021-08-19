---
title: Allowing users to configure reports and showing important data in one place
description: We let users choose the rows and columns of a course report and also created a page showing important data
date: 2021-05-20
---

This builds on work we did to [show users data about applications and candidates](/manage-teacher-training-applications/showing-users-data-about-applications-and-candidates/).

## What we did

Rather than continuing to develop several separate reports we decided to try:

- displaying application statuses as ‘glance metrics’ (a simplified display with a few large numbers) including comparisons against a previous time period
- offering a single course report which providers could configure and filter based upon their needs

### Glance metrics

On the ‘Statistics’ page we showed users a series of boxes indicating:

- total applications received in the current recruitment cycle
- percentage of applications currently ready to enrol
- number of applications currently in various statuses
- number of applications in the same statuses one month and one year ago
- average processing times - the time taken to move from one status to another

![Figure 1: Statistics landing page showing glance metrics](glance-metrics.png "Figure 1: Statistics landing page showing glance metrics")

### Configurable report

Users would start with a basic report showing the total number of applications which had been made to each course they offered.

For the data in this prototype, we assumed that the user only worked on each subject with one partner. For example they only offered one biology course, rather than several where each is in partnership with a different organisation.

![Figure 2: The default courses report showing the number of applications per course](configurable-course-report-01.png "Figure 2: The default courses report showing the number of applications per course")

Users could then click ‘change report settings’ to enter the configuration flow.

Here they could choose a dimension of data to form the columns of the report. The options were:

- year received
- status
- training provider
- accredited body
- training location
- subject
- subject level (primary, secondary and further education)
- full time or part time
- funding type (fee paying, salaried and apprenticeship)

After choosing, they could either view the report, or add another dimension (‘split data further’).

![Figure 3: Changing the content displayed in the report](configurable-course-report-02.png "Figure 3: Changing the content displayed in the report")

If users did not split data further, they would see a report with the data they selected in the columns.

![Figure 4: The configured report showing a section containing filters and the content broken down by the user’s chosen dimension, in this example, training provider](configurable-course-report-03.png "Figure 4: The configured report showing a section containing filters and the content broken down by the user’s chosen dimension, in this example, training provider")

If users decided to split data further, they could choose up to 2 more dimensions.

![Figure 5: Adding a second dimension to the report](configurable-course-report-06.png "Figure 5: Adding a second dimension to the report, which adds a sub column to the previously chosen training provider column")

![Figure 6: Adding a third dimension to the report](configurable-course-report-07.png "Figure 6: Adding a third dimension to the report, which adds a sub row to the course row")

These additional dimensions would be displayed in the report by:

- first splitting the columns
- then splitting the rows

If a dimension had already been chosen then it could not be chosen again. For example, it was not possible to put year received in the columns and then also split the columns by year received.

Adding additional dimensions allowed users to create reports meeting needs such as seeing:

- courses split by training provider and year received
- courses split by training provider, year received and application status

![Figure 7: Courses split by training provider and year received](configurable-course-report-09.png "Figure 7: Courses split by training provider and year received")

![Figure 8: Courses split by training provider, year received and application status](configurable-course-report-08.png "Figure 8: Courses split by training provider, year received and application status")

When the user generated a report, it would be displayed along with filters. Using the filters, the user could:

- remove the dimensions which they had chosen
- filter within the dimensions being displayed

For example, if one of the dimensions was ‘status’ then the user could filter to only see certain statuses.

![Figure 9: Courses filtered by training provider](configurable-course-report-04.png " Figure 9: Courses filtered by training provider")

## Other considerations

We considered some changes which were not implemented, including allowing users to:

- specify whether the dimension should be in a row or a column
- download the data displayed in the report

We could consider these for a future iteration.
