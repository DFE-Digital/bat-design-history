---
title: Helping users check how candidates drop out of the application process
description: We created a report showing how candidates leave the application process, when the choice is theirs rather than the provider’s
date: 2021-07-21
user_needs:
  - MN028
tags:
  - reports
screenshots:
  items:
    - text: Reports landing page
      src: reports-landing-page--single-organisation.png
    - text: Reports landing page when the user belongs to multiple organisations
      src: reports-landing-page--multiple-organisations.png
    - text: Candidate drop out rates report
      src: candidate-drop-out-report.png
---

This work follows on from our design of a report showing the [progress of applications](/manage-teacher-training-applications/providing-status-and-progress-reports-alongside-data-exports).

We found that some research participants had trouble understanding the progress report because it:

- included a lot of different status changes and therefore a lot of columns
- had some headings which were hard to understand
- could not be laid out in a way which reflected the progress of applications from left to right
- did not include total applications for comparison

This caused us to look again at the user needs and refine the wording of the need we were trying to meet.

{% set need = collections['user-need'] | slugs(tags) | first %}

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  title: need.data.title,
  description: need.templateContent,
  url: need.url,
  status: need.data.status
}) }}

The progress report only met this need indirectly, as it focused on successful progress through the application process.

We decided to address the need more directly, by creating a report showing how candidates leave the application process.

This can happen because of things under the control of the provider or things which are not under their control. Ways to leave the application process which are under the provider’s control include:

- rejecting applications before interview
- rejecting applications after interview
- withdrawing offers

Ways to leave the process which are not under the provider’s control include:

- withdrawing offers - either directly or by asking the provider to do it
- declining offers
- failing to meet an offer condition - this could be because the candidate has decided not to continue or because they cannot meet the condition

## What we did

We created a ‘candidate drop out rate’ report. It includes data about candidates leaving the application process in ways which are not under the provider’s control.

## How it works

We made changes to the reports page, removed the progress report and added the drop out rates report.

### Reports page

This page now provides links for:

- application data export
- HESA export
- status of active applications report
- candidate drop out rates report

If the user belongs to multiple organisations, there’s a ‘status of active applications’ and ‘candidate drop out rates’ report for each organisation.

### Candidate drop out rates report

Users can view this report for any organisation they belong to. Access is not restricted by a user or organisation permission.

The caption for the h1 is the name of the organisation whose data is in the report.

The report lists all the organisation’s courses alphabetically by course name, with the course  code also displayed. If there’s a partner organisation, it’s listed under the course in grey text.

For each course, the report gives the number and percentage of:

- applications withdrawn
- offers declined
- accepted offers where conditions were not met

There’s an ‘Export data (CSV)’ link which generates a CSV of the data in the report.

## Other considerations

We considered splitting application withdrawn data into different parts, such as:

- ‘withdrawn by candidate’ and ‘withdrawn at the candidate’s request’
- ‘withdrawn before offer’ and ‘withdrawn after offer’

We decided to see how a single column for withdrawn applications was understood by users in research.

We also discussed creating a course details page for each of an organisation’s courses. These pages could contain a variety of information and data about the course, including some of the data in the drop out report.

We decided to concentrate on the drop out report and explore course details pages later.
