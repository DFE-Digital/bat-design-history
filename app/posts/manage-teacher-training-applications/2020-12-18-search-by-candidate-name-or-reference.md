---
title: Search by candidate name or reference
description: Let users search the applications list by candidate name or reference
date: 2020-12-18
screenshots:
  items:
    - text: No search or filters
      caption: The default applications list with no search or filters
      src: applications-list-no-search-or-filters.png
    - text: Search by name
      caption: The applications list showing a candidate name search with the search term retained in the search field
      src: applications-list-search-by-name.png
    - text: Search by reference
      caption: The applications list showing a candidate reference search with the search term retained in the search field
      src: applications-list-search-by-reference.png
    - text: Search by partial string
      caption: The applications list showing the search accepts a full or partial string
      src: applications-list-search-by-partial-string.png
    - text: No search results
      src: applications-list-no-search-results.png
    - text: Filtered search
      caption: The applications list showing both search and filters used
      src: applications-list-filtered-search.png
---

We updated the search to allow users to find applications by reference in addition to candidate name.

## Why we are doing this

Providers need to be able to search for an application by reference in addition to searching by candidate name.

Searching by reference is more accurate compared to searching by name since many candidates can have the same name, but a single candidate has a single reference number.

Searching by reference is available in the UCAS system and we are reflecting the functionality in the manage teacher training applications service.

## What we changed and why

This change included:

- moving the search form out of the filters sidebar to above the applications list giving more space for search and solving the lack of a search button next to the field in the filters sidebar
- comparing search terms to both a candidate’s name and reference
- adding the reference number to each application listing to help users find the item they are searching for
- retaining the search term in the search field after a search has been carried out, so that users can easily recall and modify their search if needed
- providing a way to clear the search term once a search has been carried out, allowing users to get back to the original list state without having to submit an empty search
- updating the text of the clear filter action from ‘Clear’ to ‘Clear filters’ to make the action less ambiguous

## How it works

When a user carries out a search or filters the applications list, a list of applications matching the search and filters is returned.

Searching and filtering are independent of one another. This means that if someone first searches for an application and then applies one or more filters, the filters act upon the sub-set of applications returned by the initial search. Similarly, if someone first filters the applications list, a subsequent search is across the applications in the filtered list, not the full list. In addition clearing a search will not clear the filters and clearing the filters will not clear the search.

The search term is retained in the search field. Once a search has been carried out, a ‘Clear search’ link is provided below the search field, allowing users to reset the search back to the initial state. The initial state may be a full applications list or a sub-set if the list has previously been filtered.

Navigating to an application, or away from the applications list page, clears the search term but not the filters. The search is considered to be complete.

If a single application is found via the search, filters or a combination of both, the user is presented with an applications list containing the single application. They are not automatically taken to the detail of the application. This allows users to orientate themselves or correct mistakes before making a decision to view the application.

If no applications are found, we show a message depending on the search and filter terms:

- There are no results for ‘search term’.
- There are no results for ‘search term’ and the selected filter.
- There are no results for ‘search term’ and the selected filters.
- There are no results for the selected filter.
- There are no results for the selected filters.

If no search term is provided when submitting a search, the user is presented with the list of applications.

## Other considerations

- highlighting the search term in the applications that match
- introducing a sorting mechanism (eg by relevance, alphabetical ascending/descending, etc) to allow users to sort the list beyond the default priority

Neither consideration was implemented in this iteration as we could not establish a need for them.
