---
title: Showing submitted claims in Support
description: Giving the support team the ability to see claims submitted by schools
date: 2024-04-02
tags:
  - support
  - claims
related:
  items:
    - text: How we pay claims
      href: /claim-funding-for-mentors/how-we-pay-claims/
    - text: How we audit claims
      href: /claim-funding-for-mentors/how-we-audit-claims/
    - text: Submitting claims for funding
      href: /claim-funding-for-mentors/submitting-claims-for-funding/
screenshots:
  items:
    - text: Claims list
      src: claims--list.png
    - text: Claims list - filtered
      src: claims--list-filtered.png
    - text: Claim details
      src: claim--details.png
---

When a school user submits a claim, support users need to be able to see the claim information.

Support users can already view claims on a per-school basis. However, we needed a way to show all submitted claims so that the support user could perform additional tasks, such as downloading the claim details to send to the accredited provider for review or the Education and Skills Funding Agency (ESFA) for payment.

## What we changed

We have added:

- a section called claims, which lists all submitted claims
- a way to filter the claims by status, school, accredited provider and submitted date
- a way to search the claims by claim reference

## How it works

The claims page includes:

- a list of claims
- filters in a sidebar
- a search
- pagination

### List of claims

Each item on the claims list includes:

- claim reference
- school name
- accredited provider name
- submitted date
- total value of the claim
- claim status - displayed as a tag

The claim reference and school name include a link to the individual claim details, allowing support users to view the claim details.

#### Searching and filtering

When a user searches or filters the list of claims, we return a list of claims matching the search and filters.

Searching and filtering are independent of one another. If someone first searches for a claim and then applies filters, the filters act upon the subset of claims returned by the initial search.

Similarly, if someone filters the list of claims, a subsequent search will only include the claims in the filtered list, not the complete list.

Clearing a search will not clear the filters, and clearing the filters will not clear the search.

### Filter sidebar

The filter sidebar includes filters for:

- claim status
- schools
- accredited providers
- submitted after
- submitted before

#### Claim status

We show a list of checkboxes containing the available claim statuses.

To avoid errors, we do not include claims with the ‘Draft’ status.

#### Schools filter

The schools’ filter only shows schools that have submitted claims.

If there are more than 15 schools, a scrollable region is created, and JavaScript is used to add a search box. Typing in the search box updates the list below it with schools matching the search term. If there are no matches, the list is empty.

If JavaScript is unavailable, the schools remain within the scrollable region, but the search box is no longer shown.

The scrollable region is indicated by a cut-off mid-way through a checkbox, a bottom border and custom styles to display a scrollbar.

The scroll area shows 4 and half schools to help users realise there are other schools in the list. This smaller height lets users move to a filter below.

If there are 15 schools or fewer, the subject filter will be displayed as a simple list of checkboxes.

When a school has been selected and the filters have been applied, the remove filter tags are displayed under ‘selected filters’ at the top of the filter panel.

#### Accredited providers filter

The accredited providers' filter only shows accredited providers included in the claims submitted by the schools.

If there are more than 15 accredited providers, a scrollable region is created, and JavaScript is used to add a search box. Typing in the search box updates the list below with accredited providers matching the search term. If there are no matches, the list is empty.

If JavaScript is unavailable, the accredited providers are still within the scrollable region, but the search box is no longer shown.

The scrollable region is indicated by a cut-off mid-way through a checkbox, a bottom border and custom styles to display a scrollbar.

The scroll area shows 4 and half accredited providers to help users realise there are other schools in the list. This smaller height lets users move to a filter below.

If there are 15 accredited providers or fewer, the subject filter will be displayed as a simple list of checkboxes.

When a school has been selected and the filters have been applied, the remove filter tags are displayed under ‘selected filters’ at the top of the filter panel.

#### Submitted before and after filters

We show a standard date input for the submitted before and after date filters.

### Claim search

We include a search box above the list of claims. This search allows users to search for a specific claim by its reference number.

Once a user has searched, a ‘Clear search’ link is provided below the search field, allowing users to reset the search back to the initial state. The initial state may be an entire list of claims or a sub-set if the user has previously filtered the list.

Navigating to a claim or away from the list of claims clears the search term but not the filters. We consider the search to be complete.

#### Single results

We do not automatically send users to the claim details page after completing a search. If a user’s search finds a single claim, we show the user the list of claims containing it. This allows users to orient themselves or correct mistakes before viewing the claim.

#### No results

If the search doesn’t return a result, we show a message depending on the search and filter terms:

- There are no results for ‘search term’.
- There are no results for ‘search term’ and the selected filter.
- There are no results for ‘search term’ and the selected filters.
- There are no results for the selected filter.
- There are no results for the selected filters.

#### Empty searches

If a user doesn’t enter a search term when submitting a search, we show a list of claims that match any filter criteria.

### Pagination

We include pagination below the list of claims. If the list contains more than 25 items, we show the standard [GOV.UK pagination component](https://design-system.service.gov.uk/components/pagination/).

## Further considerations

We considered:

- highlighting the search term in the claims that match
- introducing a sorting mechanism (e.g. by relevance, alphabetical ascending/descending, etc.) to allow users to sort the list beyond the default priority

Neither consideration was implemented in this iteration as we could not establish a need for them.
