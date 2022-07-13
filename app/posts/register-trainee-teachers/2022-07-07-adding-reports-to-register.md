---
title: Adding reports to Register to help users check their data
description:
date: 2022-07-07
---
{% from "screenshots/macro.njk" import appScreenshots with context %}

Our users have asked for more ways to help them check their data. This happens in three main scenarios:

* checking data from HESA as it gets imported
* checking data prior to sign off of the ITT Census
* checking data prior to sign off of the ITT Performance profiles

## Needs for HESA scenario

Four times each year, HEIs use HESA to tell the DfE about their trainees. They prepare the data in their student record system, then upload those records to HESA. Those records then appear in Register. They’d like to then be able to locate those same records in Register to compare them ‘side by side’.

As an example, a provider might upload 346 trainees to HESA. They’d like to be able to get to a view or report in Register that contains those same 346 trainees. Right now this is not so easy - as Register will include historic trainees or trainees not added via HESA.

## Needs for ITT Census scenario

During the census period, providers are asked to make sure their data in Register is up to date. Between mid October and the end of October a senior person at the accredited provider is asked to ‘sign-off’ that they are happy with their ‘census’ data. 

Providers would like to be able to see just their census trainees - not including historic trainees no longer in training. They’ll use this to look for missing data or anomalies, and to compare with their own systems.

## Needs for ITT Performance profiles scenario

We’ve not looked carefully at this yet as it’s needed later in the year than the ITT Census one. We expect the needs will be similar to ITT Census.

## The existing ways users can check data

Our primary way of reviewing data in Register is to use the filters on the registered trainees page to filter to a set of trainees. From here, users can either look at trainees individually, or download a CSV export of the filtered trainees.

The filters are designed to help providers find and identify trainees, or to select trainees who meet a certain criteria (for example, to look at all secondary mathematics trainees). They’re not well suited to the need of checking data - which might need several filters to be set.

## Adding a reports section

We’ve added a reports section to Register, modelled on the reports section of Manage teacher training applications. Each report will have its own page.


Having a page per report has several advantages over filtering:

* can have guidance specific to the report on the page
* a report can combine several filters together
* we can process the data using filters we might not want on the registered trainees page
* we can tailor the report to only include relevant fields
* the page can offer settings to produce different reports


### Reports shown in header

![Reports section shown in our primary navigation bar.](1.reports-in-nav.png)

### Reports index

![An index page that lists available reports.](2.reports-index.png)

### HESA report

![A page to download recent HESA data as a report.](3.hesa-report.png)

For the HESA report, we’re currently limited in what we can offer because the metadata we receive from HESA doesn’t allow us to fully identify the trainees we’d like.

We get a field ‘hesa_updated_at’ with each record - this is a timestamp of the last time this record was updated. Importantly, if a provider uploads a record to HESA but it contains no changes, then the updated date doesn’t change. This means we are not able to offer a report with exactly the trainees the provider just uploaded - we can offer all trainees from the current year, or those that have recently changed. In practice we expect the report of all trainees from the current year will be very close.

We’ve put in a change request to HESA to add additional metadata fields to capture the last time a record was uploaded. This would allow us to provide a report of trainees just uploaded, and to add prompts within our interface such as ‘View the 346 trainees you just uploaded’

### Census report

![A page to download trainees included in the ITT Census as a report.](4.census-report.png)

The ITT census does not include all trainees in ITT - there are a number of criteria used to select trainees that are included. We can produce a report that closely mirrors these filters - though one criteria around self funded trainees may not be possible.

## Signing off data

We’re still deciding whether to offer this census report - whether it’s relevant depends on what we ask users to ‘sign off’.

Previously, they've been asked to only sign off their census data. This means data for new trainees and trainees not included in the ITT census (EYTS trainees and self funded trainees) do not get signed off at all and therefore could lead to inaccuracies if it's not checked.

We would like to explore broadening the sign off to include all new trainees in an academic year.
