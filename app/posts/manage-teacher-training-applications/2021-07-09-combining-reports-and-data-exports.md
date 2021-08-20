---
title: Combining reports with export data and simplifying the reports
description:
date: 2021-07-09
---

This builds on work we did to [allow users to configure reports and show important data in one place](/manage-teacher-training-applications/allowing-users-to-configure-reports-and-showing-important-data-in-one-place/)

## What we did

### Removed the link to the HESA export from the application data export page

Currently, the application data export page has a link to the Higher Education Statistics Agency (HESA) export.

But now the HESA export is accessible directly from the reports page, so we’ve:

- removed the link from the application data export page
- changed the breadcrumb on the HESA export page

### Combined the reports and export data sections into one

Previously we had separated the existing ‘export data’ section from the newer ‘reports’.

We have now combined them into one section called ‘Reports’. It contains:

- status of applications
- progress of applications
- export application data
- export data for Higher Education Statistics Agency (HESA)

We combined these into one section because:

- it’s possible to export data for all of them, so it doesn’t make sense to put only some of them in a section with ‘export’ in the name
- the distinction between ‘data’ and ‘reports’ may not be clear to users

![Figure 1: Reports landing page – single organisation](reports-landing-page--single-organisation.png "Figure 1: Reports landing page – single organisation")

### Simplified the reports

We simplified the reports into:

- Status of applications - providing an overview of the raw numbers of applications for a given course at each stage of the process
- Progress of applications - providing an overview of the conversion rates for a given course
- Export data for Higher Education Statistics Agency (HESA)
- Export application data

We show the partner organisation for each course if there is one.

![Figure 2: Status of applications report](status-of-applications-report.png "Figure 2: Status of applications report")

![Figure 3: Progress of applications report](progress-of-applications-report.png "Figure 3: Progress of applications report")

#### Users with multiple organisations

We know that 76% of users are only linked to one provider. However, for the remaining 24% who are linked to more than one provider, we display the reports grouped by provider name.

![Figure 4: Reports landing page – multiple organisations](reports-landing-page--multiple-organisations.png "Figure 4: Reports landing page – multiple organisations")

This will mean changes to the two ‘export’ reports. They will no longer cover multiple organisations.

We think this will be better for users, as currently they would need to export for all organisations they belong to and then cut up the report to get data for just one organisation.

![Figure 5: Export application data](application-data-download.png "Figure 5: Export application data")

![Figure 6: Export data for Higher Education Statistics Agency (HESA)](hesa-data-download.png "Figure 5: Export data for Higher Education Statistics Agency (HESA)")
