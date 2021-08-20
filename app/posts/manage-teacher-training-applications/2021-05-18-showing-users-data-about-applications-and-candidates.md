---
title: Showing users data about applications and candidates
description: We created several reports which users could then filter to see data they were interested in
date: 2021-05-18
screenshots:
  items:
    - text: Statistics landing page
      src: statistics-landing-page.png
    - text: Courses by status report
      src: courses-by-status-report.png
    - text: Courses by status report configuration
      src: courses-by-status-report-configuration.png
    - text: Courses by status report – filtered
      src: courses-by-status-report--filtered.png
    - text: Candidate nationality report
      src: candidate-nationality-report.png
---

In previous research we showed participants a [spreadsheet of data](/manage-teacher-training-applications/finding-out-what-data-our-users-need/) to find out about their needs.

This helped us to choose which reports to create in a new section of the service called ‘Statistics’. We gave users the ability to filter the data in each of these reports.

We focused on live, on-page data rather than downloads because:

- it’s easier to configure and see the results rather than downloading a fresh spreadsheet each time
- less confident users should find it easier to get information rather than using Excel
- by doing calculations ourselves, we help users to avoid making errors
- it isn’t reliant on members of staff to produce
- there’s a single source of information which all members of staff can refer to
- it’s easier to make sure you’re seeing the same information each time you need to refer to it

## What we did

We created a series of reports about applications:

- courses by year
- courses by status
- courses by training provider
- courses by training location
- courses by reasons for rejection
- course performance
- courses diversity - sex
- courses diversity - ethnicity
- courses diversity - nationality

We also created reports about candidates:

- candidate diversity - nationality
- residence
- right to work or study in the UK
- English language qualification

## How it works

When the user clicks through to the report, they see all the data available for the report type. For example, for courses by status they would see data for:

- the current and previous recruitment cycle
- all courses at both primary and secondary level
- all organisations the user belongs to
- all partner organisations working with the user’s organisations

The user could then filter this data. The way they did this depended on whether it was a report about applications or candidates.

We would not have kept this distinction if these designs had gone into production, as we would want a consistent experience.

Users could download the data they were viewing using a link underneath the table of data.

### Filtering application reports

If the user clicks to configure the report, they see a page with a list of filters which can include:

- year
- status
- courses run by
- courses ratified by
- primary or secondary

The list of filters varies depending on the report. For example, the ‘courses by year’ report cannot be filtered by year because the data is already separated by year.

The user can select as many filters as they need and then click a green button to return to the report.

### Filtering candidate reports

Since the candidate reports did not require many columns, we decided to try putting the filter on the same page as the report. This meant that users did not need to leave the page.
