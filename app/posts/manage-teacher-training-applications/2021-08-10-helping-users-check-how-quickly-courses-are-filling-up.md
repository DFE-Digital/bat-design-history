---
title: Helping users check how quickly courses are filling up
description: Various changes to get the design of the reports area ready for an initial release
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

We’ve made some changes to the existing ‘Reports’ area, as part of the work to help users make the application process better.

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

### Updated the reports landing page

This page provides links to the:

- application data export
- HESA export
- status of active applications report

If the user belongs to multiple organisations, the status of active applications report will be listed under an h2 heading for each organisation.

### Changed the name of the status report

The report was previously called ‘Status of applications’.

Research showed that some users expected all statuses to be included, not just those that help users know how quickly their courses are filling up.

By changing the name of the status report to ‘Status of active applications’, users are less likely to expect the report to include statuses like ‘rejected’.

## How it works

### Status of active applications report

The caption for the h1 is the name of the organisation which the user accessed on the previous page. This page will show all courses which that organisation works on.

There’s an ‘Export data (CSV)’ link which generates a CSV.

The courses are listed alphabetically by course name. The course name and code will both be displayed.

If a course has a partner organisation, it’s shown under the course name as grey text.

## Future considerations

At the moment the application data export and HESA export work across multiple organisations.

In future these pages will be scoped to a single organisation like the status of active applications report.
