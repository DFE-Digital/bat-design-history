---
title: Search by candidate name or reference
description: Let users search the applications list by candidate name or reference
date: 2020-12-18
---

We introduced a search to allow users to search the applications list by candidate name or number.

This change included:

- creating a search field above the applications list to accept terms that are compared to a candidate’s full name or application reference
- removing the candidate name search from the filters side bar
- adding the application reference number to each application listing
- retaining the search term in the search field
- providing a way to clear the search term once a search has been carried out, allowing users to get back to the original list state

The search works independently from the filters, allowing users to filter or search in whatever way suits their needs.

Future considerations include:

- highlighting the search term in the applications that match
- a sorting mechanism (eg by relevance, alphabetical ascending/descending, etc)

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
