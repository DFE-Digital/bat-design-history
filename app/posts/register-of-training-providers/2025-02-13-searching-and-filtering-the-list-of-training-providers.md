---
title: Searching and filtering the list of training providers
description: We added a way for users to search and filter the list of training providers
date: 2025-02-13
tags:
  - search
  - filters
  - accredited providers
  - training providers
  - training partners
related:
  items:
    - text: Updating organisation search and filters in Publish teacher training courses support console
      href: /support-for-publish/updating-organisation-search-and-filters/
    - text: Exploring selected filter tags in Find teacher training courses
      href: /find-teacher-training/exploring-selected-filter-tags/
screenshots:
  items:
    - text: Provider list
      src: provider-list.png
    - text: Provider list with filters applied
      src: provider-list--with-filters.png
    - text: Provider list with search applied
      src: provider-list--with-search.png
    - text: Provider list with both filters and search applied
      src: provider-list--with-filters-and-search.png
    - text: Provider list showing no results
      src: provider-list--no-results.png
    - text: Provider details
      src: provider-details.png
    - text: Provider details only showing partially complete information
      src: provider-details--partially-complete.png
---

We added a way for users to search and filter the list of training providers to help them find the one they need.

## What we did

We added:

- a list of providers - displayed as summary cards
- filters in a sidebar
- a search
- pagination

## How it works

When a user searches or filters the list of providers, we return a list of providers matching the search and filters.

### List of providers

We show each provider in the list as a [summary card](https://design-system.service.gov.uk/components/summary-list/#summary-cards).

![Provider list item](provider-list-item--summary-card.png)

The summary card title is the provider’s operating name. We link the name to the provider details page.

The summary card contains:

- provider type
- accreditation type
- operating name
- legal name
- UK provider reference number (UKPRN)
- unique reference number (URN) - if the provider type is ‘school’
- provider code

For information missing in the summary list, for example, the provider’s legal name, we show ‘Not entered’ and use the secondary text colour (mid-grey).

### Filter sidebar

![Provider list filter sidebar](provider-list--filter-sidebar.png)

The filter sidebar includes filters for:

- provider type
- accreditation type

#### Provider type

We show a list of checkboxes containing the provider types:

- higher education institution (HEI)
- school-centred initial teacher training (SCITT)
- school

#### Accreditation type

We show a list of checkboxes containing the accreditation types:

- accredited
- not accredited

### Search

![Provider list search](provider-list--search.png)

We include a search box above the list of providers. This search allows users to search for a specific provider by its operating or legal name, UK provider reference number (UKPRN) or unique reference number (URN).

In the future, users can search by provider code and postcode.

### Searching and filtering

Searching and filtering are independent of one another. If someone first searches for a provider and then applies filters, the filters act upon the subset of providers returned by the initial search.

Similarly, if someone filters the list of providers, a subsequent search is across the providers in the filtered list, not the complete list.

Clearing a search will not clear the filters, and removing the filters will not clear the search.

### Retaining and clearing the search term

Once a user has searched, a ‘Clear search’ link is provided below the search field, allowing users to reset the search back to the initial state. The initial state may be an entire list of providers or a subset if the user has previously filtered the list.

Navigating to a provider or away from the list of providers clears the search term but not the filters. We consider the search to be complete.

### Single results

We do not send users automatically to the provider’s details page. If a user’s search finds a single provider, we show the user the list of providers containing the single provider. This allows users to orient themselves or correct mistakes before viewing the provider.

### No results

If the search does not return a result, we show a message depending on the search and filter terms:

- There are no results for ‘search term’.
- There are no results for ‘search term’ and the selected filter.
- There are no results for ‘search term’ and the selected filters.
- There are no results for the selected filter.
- There are no results for the selected filters.

### Empty searches

If a user does not enter a search term when submitting a search, we show a list of providers that match any filter criteria.

### Pagination

![Provider list pagination](provider-list--pagination.png)

We include pagination below the list of providers. If the list contains more than 25 items, we show the standard [GOV.UK pagination component](https://design-system.service.gov.uk/components/pagination/).

## Further considerations

We considered:

- highlighting the search term in the providers that match
- introducing a sorting mechanism (for example, by relevance, alphabetical order ascending/descending, etc.) to allow users to sort the list beyond the default priority

Neither consideration was implemented in this iteration as we could not establish their need.
