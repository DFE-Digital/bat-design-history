---
title: Improvements to the service performance dashboard
description: We added data and improved the content in the service performance dashboard.
date: 2022-01-25
screenshots:
  items:
    - text: Service performance report - all years
      src: service-performance--all-cycles.png
    - text: Service performance report - specific year
      src: service-performance--individual-cycle.png
---

The service performance dashboard consists of:

- the most important data displayed in boxes, known as glance metrics
- more detailed data in tables, in a section called ‘application form breakdown’

The dashboard includes a report covering all years and separate reports for each year that the service has been running.

We improved the dashboard to:

- provide additional data
- make the data easier to understand

## How it works

We added a breadcrumb to the dashboard to show where it is in the structure of the support service.

We changed the colours of the glance metric boxes. We now use the [colour tints specified for tags in the GOV.UK design system](https://design-system.service.gov.uk/components/tag/).

We added commas to numbers on the page to indicate thousands. This makes the numbers easier to read.

We changed the yearly reports to show:

- the dates covered by the report
- a breakdown of the number of candidates included in the report
- a breakdown of the number of applications included in the report

We also clarified wording in the glance metrics and the application form breakdown.

### Dates covered by yearly reports

We often refer to recruitment cycles, which start when candidates can apply for courses and end when any applications still awaiting decisions are automatically rejected.

This does not cover the whole of a calendar year, as there is a period in which candidates cannot apply yet but can still access the Apply service.

A yearly performance report instead covers the period from when candidates can no longer apply for courses until the same point in the next year.

We’ve indicated these dates in each yearly report.

### Breakdown of the number of candidates included in a yearly report

Previously we showed a total number of candidates, which combined candidates who:

- created an account this year
- were carried over from the previous year

We have separated these figures as well as showing the total.

### Breakdown of the number of applications included in a yearly report

Previously we showed a total number of applications, which combined applications which were:

- started this year
- carried over from the previous year

We have separated these figures as well as showing the total.

### Changes to glance metric wording

We’ve made changes to wording in the glance metrics so that they’re easier to understand.

In the report covering all years we changed:

- “unique candidates” to “candidates have created accounts”
- “application forms” to “application forms have been created”

In all reports we changed:

- “forms not started” to “unsubmitted forms not started”
- “forms started” to “unsubmitted forms started”
- “still being processed” to “active applications” - this matches how we refer to these applications within Manage
- “ended w/o success” to “unsuccessful applications”
- “accepted an offer” to “successful applications”
- “courses applied to” to “courses applied for”
- “School Direct courses” “to School Direct (SD) courses”
- “Ratified by SCITTs” to “SD courses ratified by SCITTs”
- “Ratified by HEIs” to “SD courses ratified by HEIs”
- “SCITT courses” to “School Centred Initial Teacher Training (SCITT) courses”
- “HEI courses” to “Higher Education Institution (HEI) courses”

### Changes to application form breakdown wording

We made changes to the application form breakdown so that it fits with the wording used in the glance metrics. In all reports we changed:

- “Have not started form to “Unsubmitted forms not started”
- “Form started but unsubmitted” to “Unsubmitted forms started”
- “Applications being processed” to “Active applications”
- “Offer deferred” to “Deferred” - this matches the status label in Manage
- “Accepted offer, pending conditions” to “Conditions pending” - this matches the status label in Manage
- “Rejected by default” to “Automatically rejected”
- “Withdrawn by the candidate” to “Withdrawn by candidate”

We swapped the order of the “Successful applications” and “Unsuccessful applications” sections, to reflect their order in the glance metrics.

We also removed “Ended without success” from the “Unsuccessful applications” section. Other sections do not include a total which is already in the glance metrics.

## Future considerations

We made only limited changes to the application form breakdown. We could consider:

- improving the descriptions of the terms used
- adding or removing data

We could also consider splitting the service performance data into different parts, for example to:

- separate the data for candidates, applications and courses applied for
- show the numbers of candidates, applications and courses applied for each month within a year
