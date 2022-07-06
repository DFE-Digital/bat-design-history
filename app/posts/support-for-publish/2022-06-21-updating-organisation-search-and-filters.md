---
title: Updating organisation search and filters
description: We updated the search and filters to make it easier for users to find organisations
date: 2022-06-21
screenshots:
  items:
    - text: List of organisations
      src: search-filters--organisations-list.png
    - text: List of organisations with filters applied
      src: search-filters--organisations-list-with-filter.png
    - text: List of organisations with search applied
      src: search-filters--organisations-list-with-search-term.png
    - text: List of organisations with both search and filters applied
      src: search-filters--organisations-list-with-filter-and-search-term.png
    - text: No results for search
      src: search-filters--organisations-list-no-results-search-term.png
    - text: No results for search and filters
      src: search-filters--organisations-list-no-results-search-term-and-filter.png
---

We updated the search and filters to make it easier for users to find organisations.

## What we changed and why

We moved the search form out of the filters sidebar to above the list of organisations. This allows more space for search and solves the lack of a search button next to the field in the filters sidebar.

The change also included:

- comparing search terms to both an organisation’s name and code
- adding the provider type to each organisation listing
- retaining the search term in the search field so that users can recall and modify their search if needed
- providing a way to clear the search term, allowing users to get back to the original list state without having to submit an empty search
- updating the text of the clear filter action from ‘Clear’ to ‘Clear filters’ to make the action less ambiguous
- including a filter for ‘Provider type’ in the filters sidebar
- adding the number of organisations displayed in the list to the page heading

## How it works

When a user searches or filters the list of organisations, we return a list of organisations matching the search and filters.

### Searching and filtering

Searching and filtering are independent of one another. If someone first searches for an organisation and then applies filters, the filters act upon the sub-set of organisations returned by the initial search. Similarly, if someone filters the list of organisations, a subsequent search is across the organisations in the filtered list, not the complete list. Clearing a search will not clear the filters, and clearing the filters will not clear the search.

### Retaining and clearing the search term

Once a user has searched, a ‘Clear search’ link is provided below the search field, allowing users to reset the search back to the initial state. The initial state may be an entire list of organisations or a sub-set if the user has previously filtered the list.

Navigating to an organisation or away from the list of organisations clears the search term but not the filters. We consider the search to be complete.

### Single results

We do not send users automatically to the organisation's details page. If a user’s search finds a single organisation, we show the user the list of organisations containing the single organisation. This allows users to orient themselves or correct mistakes before viewing the organisation.

### No results

If the search doesn’t return a result, we show a message depending on the search and filter terms:

- There are no results for ‘search term’.
- There are no results for ‘search term’ and the selected filter.
- There are no results for ‘search term’ and the selected filters.
- There are no results for the selected filter.
- There are no results for the selected filters.


### Empty searches

If a user doesn’t enter a search term when submitting a search, we show a list of organisations that match any filter criteria.

## Further considerations

We considered:

- highlighting the search term in the organisations that match
- introducing a sorting mechanism (e.g. by relevance, alphabetical ascending/descending, etc.) to allow users to sort the list beyond the default priority

Neither consideration was implemented in this iteration as we could not establish a need for them.
