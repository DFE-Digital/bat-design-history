---
title: Grouping and filtering claims by academic years in Support
description: We added grouping and filtering to the claims views to make it easier to manage claims
date: 2024-10-30T14:00:00+00:00
tags:
  - claim windows
  - academic years
  - claims
related:
  items:
    - text: Showing claims by academic year
      href: /claim-funding-for-mentors/showing-claims-by-academic-year/
    - text: Managing claim windows in Support
      href: /claim-funding-for-mentors/managing-claim-windows-in-support/
screenshots:
  items:
    - text: School claims list with no claims
      src: academic-years--support-organisation-claims-list-no-claims.png
    - text: School claims list showing last academic year’s claims
      src: academic-years--support-organisation-claims-list-last-year.png
    - text: School claims list showing this academic year’s claims
      src: academic-years--support-organisation-claims-list-this-year.png
    - text: School claims list showing claims for all academic years
      src: academic-years--support-organisation-claims-list-all-years.png
    - text: School claims list showing only the current academic year - public beta schools
      src: academic-years--support-organisation-claims-list-public-beta-school.png
    - text: Claim details showing the academic year below the school name
      src: academic-years--support-organisation-claim-details.png
    - text: Draft claim details showing the academic year cannot be changed
      src: academic-years--support-organisation-claim-details-draft.png
    - text: New claim check your answers showing the academic year below the school name
      src: academic-years--support-organisation-add-claim-check-your-answers.png
    - text: Support claims list showing academic year filter
      src: academic-years--support-claims.png
    - text: Support claims list showing academic year selected
      src: academic-years--support-claims-filtered.png
---

In a [previous piece of work](/claim-funding-for-mentors/showing-claims-by-academic-year/), we added a way for school users to see the academic year for each claim.

## What we changed

To be consistent with the school-facing side of the service, we show:

- a school’s claims grouped by academic year
- the academic year on claim details and check your answers

We also update the ‘Claims’ list support users use to manage payments. These changes included:

- adding an ‘Academic year’ filter to the ‘All claims’ list
- changing the status filter to be a scrollable list based on the [GOV.UK option select component](https://components.publishing.service.gov.uk/component-guide/option_select)
- showing the academic year in the claims list item and claim details

## How it works

### School’s claims list

We show claims grouped by academic year from when the school joined the service.

If the school joined the service in private beta, the first academic year they will see will be 2023 to 2024, followed by all subsequent academic years:

![Private beta academic years](academic-years--private-beta.png)

If the school joined the service in public beta, the first academic year they will see will be 2024 to 2025, followed by all subsequent academic years:

![Public beta academic years](academic-years--public-beta.png)

We list academic years in reverse chronological order - the most recent academic year is listed first and marked as “current”.

If the school has not claimed in the current academic year, we show a message:

> There are no claims for [school name] in academic year [academic year].

If the school did not claim in a previous academic year, we show a message:

> There were no claims for [school name] in academic year [academic year].

We do not hide academic years if the school does not claim funding for their mentors in an academic year. This gives schools an accurate record of when and what they claimed throughout the service’s lifetime.

### All claims list

#### Academic year filter

The academic year shows all available academic years. We do not show the filter if there is only one academic year.

We show the academic years in ascending order. For example:

- 2023 to 2024
- 2024 to 2025

We show the academic year for each claim in the list, allowing users to distinguish between claims belonging to different academic years:

![Claims list item showing academic year](academic-years--claims-list-item.png)

#### Status filter

The status filter shows all possible statuses a claim can be in.

The statuses are:

- draft
- submitted
- payment in progress
- information requested
- information sent
- paid
- payment not approved
- sampling in progress
- provider not approved
- claim not approved
- clawback requested
- clawback in progress
- clawback complete

Since there are more than 10 statuses, to save space, we create a scrollable region and use JavaScript to add a search box. Typing in the search box updates the list below with statuses matching the search term. If there are no matches, the list is empty.

If JavaScript is unavailable, the statuses are still within the scrollable region, but the search box is no longer shown.

The scrollable region is indicated by a cut-off mid-way through a checkbox, a bottom border and custom styles to display a scrollbar.

The scroll area shows 4 and a half statuses to help users realise other statuses are in the list. This smaller height lets users move to a filter below.

If there are 10 statuses or fewer, the status filter will be displayed as a simple list of checkboxes.

When a status has been selected and the filters have been applied, we display the remove filter tags under ‘selected filters’ at the top of the filter panel.

### Claim details and check your answers

We show the academic year below the school name in the summary lists on the:

- claim details
- check your answers - when adding a draft claim on behalf of school users

Support users cannot change the academic year; it is calculated when the claim is created.

## Further considerations

We considered some changes which were not implemented, including:

- Reordering the status list to show all checked statuses in alphabetical order at the top of the list of statuses, followed by an alphabetical list of unchecked statuses. This was not implemented as it is known to increase error rates and misinterpretations.
- Showing a ‘selected’ count below the filter’s heading similar to that found in the [GOV.UK option select component](https://components.publishing.service.gov.uk/component-guide/option_select). This was not implemented in this iteration as we could not establish a need for it.
- Putting each filter section into an expandable region but hiding the content means the user has to work harder to reveal it.
