---
title: Helping users understand and improve the application process
description: First release to help users check how quickly their courses are filling up
date: 2021-07-26
tags:
- MN027
---

We’ve made some changes to the existing ‘Export data’ area to help users make the application process better.

The user need this work aims to address is:

{% set needs = collections['user-need'] | slugs(tags) | first %}

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  title: needs.data.title,
  description: needs.templateContent,
  url: needs.url,
  status: needs.data.status
}) }}

A user might do this by, for example:

- closing a course
- moving the candidate to a different course
- being more or less stringent about the quality of candidates
- increasing or reducing marketing efforts for a particular course

## What we changed

### Changed ‘Export data’ link to ‘Reports’

We renamed the ‘Export data’ section to ‘Reports’ to better reflect that this section includes the new status of active applications report.

### Removed the link to the HESA export from the application data export page

Currently, the application data export page has a link to the HESA export.

But now the HESA export is accessible from the reports page, so we’ve:

- removed the link from the application data export page
- changed the breadcrumb on the HESA export page

### Changed the name of the status report

The report was previously called ‘Status of applications’.

Research showed that the title meant that some users expected all statuses to be included, not just those that help users know how quickly their courses are filling up.

By changing the name of the status report to ‘Status of active applications’, users are less likely to expect the report to include statuses like ‘rejected’ and ‘application withdrawn’.

## How it works

### Reports landing page

This page provides links to the:

- existing application data export
- existing HESA export
- new status of active applications report

If the user belongs to multiple organisations, the status of active applications report will be listed under an h2 heading for each organisation.

### Status of active applications report

The caption for the h1 is the name of the organisation which the user accessed on the previous page. This page will show all courses which that organisation works on.

There’s an ‘Export data (CSV)’ link which generates a CSV.

The courses are listed alphabetically by course name. The course name and code will both be displayed.

If a course has a partner organisation, it’s shown under the course name as grey hint text.

## Future considerations

At the moment the application data export and HESA export works across multiple organisations.

In future these pages will be scoped to a single organisation like the status of active applications report.

## Screenshots

Data export page without link to HESA
Status of active applications report (maybe with and without partner hint text)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Reports landing page",
    img: {
      src: "reports.png"
    }
  }, {
    text: "Reports landing page when the user belongs to multiple organisations",
    img: {
      src: "reports--multi-org.png"
    }
  }, {
    text: "Data export page now without a link to the HESA export",
    img: {
      src: "export-application-data.png"
    }
  }, {
    text: "HESA export now with a new breadcrumb",
    img: {
      src: "export-hesa-data.png"
    }
  }]
}) }}
