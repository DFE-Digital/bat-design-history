---
title: Search by candidate name or reference
description: Let users search the applications list by candidate name or reference
date: 2020-12-18
---

We updated the search to allow users to find applications by candidate reference in addition to candidate name.

The search works independently from the filters, allowing users to filter or search in whatever way suits their needs.

This change included:

- moving the search form to above the applications list to accept terms that are compared to a candidate’s full name or application reference
- removing the candidate name search from the filters side bar
- adding the application reference number to each application listing
- retaining the search term in the search field
- providing a way to clear the search term once a search has been carried out, allowing users to get back to the original list state
- updating the text and position of the clear filter action, which also resolved one of the issues highlighted in the recent accessibility review

Other considerations included:

- highlighting the search term in the applications that match
- introducing a sorting mechanism (eg by relevance, alphabetical ascending/descending, etc) to allow users to sort the list beyond the default priority

Neither considerations were implemented in this iteration as we could not establish a need for either.

## How it works

When a user carries out a search or filters the applications list, a list of applications matching the search or filters is returned. If no applications are found, users are presented with an empty state.

Searching and filtering are independent of one another. This means, if someone first searches for an application and then applies one or more filters, the filters act upon the sub-set of applications returned by the initial search. Similarly, if someone first filters the applications list, a subsequent search is across the applications in the filtered list, not the full list.

The search term is retained in the search field. Once a search has been carried out, a ‘Clear search’ link is provided below the search field, allowing users to reset the search back to the initial state. The initial state may be a full applications list or a sub-set if the list has previously been filtered.

Navigating to an application, or away from the applications list page clears the search term, but not the filters.


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Applications list – No search or filters"
  }, {
    text: "Applications list – Search by name"
  }, {
    text: "Applications list – Search by reference"
  }, {
    text: "Applications list – Search by partial string"
  }, {
    text: "Applications list – No search results"
  }, {
    text: "Applications list – Filtered search"
  }]
}) }}
