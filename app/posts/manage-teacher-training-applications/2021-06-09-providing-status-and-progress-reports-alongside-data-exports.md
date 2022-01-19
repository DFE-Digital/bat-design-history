---
title: Providing status and progress reports alongside data exports
description: We created 2 reports to meet some of our users’ most common needs and put links to them in a section with data exports
date: 2021-06-09
---

This follows on from work we did to [provide a single configurable report](/manage-teacher-training-applications/providing-a-configurable-course-report-and-showing-important-data-in-one-place/).

The configurable report was flexible but complex. User research suggested that it would be difficult to make it easy for users to understand and use.

We may return to configurable reports but we wanted to try something we could release quickly, rather than requiring a lot of design, research and development work.

## What we did

We decided to return to offering separate reports, focusing on just 2 initially rather than the large number we had previously considered.

We also improved the way users find and access the reports.

## How it works

We combined the reports and data exports into one section, where users can find the 2 new reports covering:

- status of applications
- progress of applications

All users can view these reports for the organisations they belong to. No permissions are required.

The reports are broken down by course. We include every course, even if it currently has no applications. We show the partner organisation for each course if there is one. 

An export button for each report allows users to download a CSV file.

### New ‘Reports’ section

Previously we had separated the existing ‘Export data’ section from the newer ‘Statistics’.

We have now combined them into one section called ‘Reports’, containing links to:

- status of applications
- progress of applications
- export data for Higher Education Statistics Agency (HESA)
- export application data

We combined these into one section because:

- it’s possible to export data for all of them, so it doesn’t make sense to put only some of them in a section with ‘export’ in the name
- the distinction between ‘data’ and ‘reports’ may not be clear to users

![Reports landing page – single organisation](reports-landing-page--single-organisation.png)

Users who belong to multiple organisations see a set of links for each organisation. For example, each organisation they belong to has its own report for progress of applications. 

![Reports landing page – multiple organisations](reports-landing-page--multiple-organisations.png)

### Status of applications report

This report shows the status of all applications to each course in the current recruitment cycle. 

![Figure 2: Status of applications report](status-of-applications-report.png)

### Progress of applications report

This report shows how many applications have moved between certain statuses. These are:

- applications which led to interviews
- interviews which led to offers
- applications which led to offers
- offers which led to the candidate accepting
- accepted offers which led to the candidate being ready to enroll
- applications which led to the candidate being ready to enroll

The report includes both the number of applications and a percentage for each status change. 

The percentage is not always calculated based on total applications. For example, ‘interviews which led to offers’ shows a percentage based on the number of applications which reached the interviewing status.

![Progress of applications report](progress-of-applications-report.png)

We also tested an alternative version of this report, with an additional heading row describeing the data. For example, one column has:

- ‘Offer rate‘ on the first heading row
- ‘% applications received that are made an offer‘ on the second heading row

![Progress of applications report with 2 heading rows](progress-report--long-headings.png)

### Data exports

Previously, the ‘Export data’ link went directly to the application data export. From there users could choose what data to download or click through to the HESA export.

Now that there’s a ‘Reports’ landing page, users can reach the HESA data export directly.

In addition, there are now separate application data and HESA export pages for each organisation. 

We therefore made content changes, including: 

- adding a caption with the organisation name to both data export pages
- removing the link to the HESA export from the application data export page
- removing the checkboxes to select an organisation from the application data export page

![Export application data](application-data-download.png)

![Export data for Higher Education Statistics Agency (HESA)](hesa-data-download.png)
