---
title: Helping users check how quickly courses are filling up
description: Various small changes to get the design of the reports area ready for an initial release
date: 2021-08-10
tags:
  - MN027
screenshots:
  items:
    - text: Reports landing page
      src: reports-landing-page--single-organisation.png
    - text: Reports landing page when the user belongs to multiple organisations
      src: reports-landing-page--multiple-organisations.png
    - text: Status of active applications report
      src: status-of-active-applications-report.png
---

We’ve made some changes to the reports section of the service, following on from work to [provide status and progress reports alongside data exports](/manage-teacher-training-applications/providing-status-and-progress-reports-alongside-data-exports/).

The user need this work aims to address is:

{% set need = collections['user-need'] | slugs(tags) | first %}

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  title: need.data.title,
  description: need.templateContent,
  url: need.url,
  status: need.data.status
}) }}

A user might manage the flow by, for example:

- closing a course
- moving the candidate to a different course
- being more or less stringent about the quality of candidates
- increasing or reducing marketing efforts for a particular course

We had already designed and tested a report showing the statuses of applications. These changes were to get the designs ready for an initial release.

## What we changed

For the intial release we have:

- removed the progress report from the reports page
- changed the name of the status report
- made the existing exports work across all organisations

## How it works

### Removing the progress report

The reports page provides links for:

- application data export
- Higher Education Statistics Agency (HESA) export
- status of active applications report

We’ve removed the link to the application progression report. This is because we’ve decided to focus on releasing the status report first.

### Changing the name of the status report

The report was previously called ‘status of applications’.

Research showed that some users expected all statuses to be included, not just those that help users know how quickly their courses are filling up.

By changing the name of the status report to ‘status of active applications’, users are less likely to expect the report to include statuses like ‘rejected’.

### Making existing exports work across all organisations

The user can access a separate status report for each organisation they belong to. If they belong to multiple organisations, each one will have an h2 heading with the report underneath.

In the previous version of this work, we also provided separate application data and HESA exports for each organisation. 

For the intial release, we returned these exports to work across all organisations the user belongs to. We plan to change this later.
