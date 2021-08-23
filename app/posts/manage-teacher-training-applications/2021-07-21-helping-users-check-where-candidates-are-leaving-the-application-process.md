---
title: Helping users check where candidates are leaving the application process
description: We created a report showing how candidates choose to drop out of applying
date: 2021-07-21
tags:
  - MN028
screenshots:
  items:
    - text: Reports landing page
      src: reports-landing-page--single-organisation.png
    - text: Reports landing page when the user belongs to multiple organisations
      src: reports-landing-page--multiple-organisations.png
    - text: Candidate drop out rates report
      src: candidate-drop-out-report.png
---

This work follows on from a report showing the [progress of applications](/providing-status-and-progress-reports-alongside-data-exports).

We found that some research participants had trouble understanding that report because it:

- included a lot of different status changes and therefore a lot of columns
- had some headings which were hard to understand
- could not be laid out in a way which reflected the progression of applications from left to right

This caused us to look again at the user need we wanted to meet.

{% set need = collections['user-need'] | slugs(tags) | first %}

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  title: need.data.title,
  description: need.templateContent,
  url: need.url,
  status: need.data.status
}) }}

Providers track and report on candidate progress to understand:

- the quality of applications they receive
- the desirability of their training offer
- if there are any problems in their sifting process
- if there are any issues with the conditions they set
- whether there is any bias in their processes
- the overall conversion of a course

From research, we’ve found that knowing where candidates drop out of the application process is necessary to improve the process.

## What we did

We decided to concentrate on how candidates leave the application process. This can happen because of a decision made by the provider or the candidate.

Provider decisions include:

- applications that led to a rejection
- interviews that led to a rejection
- offers that were withdrawn

Candidate decisions include:

- applications that led to being withdrawn
- offers that were declined
- accepted offers that led to candidates not meeting one or more conditions

When a provider rejects a an application the candidate didn’t drop out.

We consider a drop out to occur when a candidate:

- chooses to withdraw their application
- chooses to decline an offer
- couldn’t meet one or more conditions of the offer

Candidate drop outs are outside the control of a provider.

## How it works

### Reports landing page

This page now provides links to the:

- application data export
- HESA export
- status of active applications report
- candidate drop out rates report

If the user belongs to multiple organisations, the ‘status of active applications’ and ‘candidate drop out rates’ reports are under an h2 heading for each organisation.

In the previous iteration, there were separate exports for each organisation. In the prototype we’ve gone back to having the exports cover all organisations, since we do not expect to make that change immediately.

### Candidate drop out rates report

Users can view this report for any organisation they belong to. Access is not restricted by a user or organisation permission.

The caption for the h1 is the name of the organisation whose data is in the report.

The report lists all the organisation’s courses alphabetically by course name, with the course  code also displayed. If there’s a partner organisation, it’s listed under the course in grey text.

For each course, the table gives the number and percentage of:

- applications withdrawn
- offers declined
- accepted offers with conditions not met

There’s an ‘Export data (CSV)’ link which generates a CSV of the data in the report.

## Other considerations

We considered splitting application withdrawn data into different parts, such as:

- ‘withdrawn by candidate’ and ‘withdrawn at the candidate’s request’
- ‘withdrawn before offer’ and ‘withdrawn after offer’

We decided to see how a single ‘application withdrawn’ column was understood by users in research.

We also discussed creating a course details page for each of an organisation’s courses. These pages could contain a variety of information and data about the course, including some of the data in the drop out report.

We decided not to explore this idea initially.
