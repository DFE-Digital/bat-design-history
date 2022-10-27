---
title: Filterable Find postgraduate training courses (Find) concept
description: We created a prototype to test a more filterable version of Find
date: 2022-10-07
related:
  items:
    - text: Making the service more browseable
      href: /find-teacher-training/making-the-service-more-browseable/
    - text: Enhancing the browse concept prototype
      href: /find-teacher-training/enhancing-the-browse-concept-prototype/
screenshots:
  items:
    - text: Results list - unfiltered
      src: filter-concept--results-list-unfiltered.png
    - text: Results list - filtered
      src: filter-concept--results-list-filtered.png
    - text: Results list - filtered and with a search term
      src: filter-concept--results-list-filtered-with-search-term.png
---

In the current Find postgraduate teacher training (Find) service, users are given a series of questions to answer before getting to the search results page. In the [browse concept](/find-teacher-training/enhancing-the-browse-concept-prototype/) we have been developing, users reach the search results page by clicking links.

To help test the validity of these two journeys, we built a concept that removed the need for the question and link pages, and focused the user on a complete list of courses they can search and filter.

## What we changed

We have:

- added a subject filter
- added a provider search above the results list
- added additional sorting options to the sort by list
- moved the ‘Apply filters’ button to the top of the filter panel
- made the qualifications section conditionally show options based on subject level

## How it works

### Subject filter

The subject filter shows individual subjects for the courses offered on Find.

Since there are more than 15 subjects, we create a scrollable region and use JavaScript to add a search box. Typing in the search box updates the list below it with subjects matching the search term. If there are no matches, the list is empty.

If JavaScript is unavailable, we show the subjects within the scrollable region but do not display the search.

We indicate the scrollable region by a cut-off mid-way through a checkbox, a bottom border and custom styles to display a scrollbar.

To save space on the page, the scroll area just shows 4 subjects, as well as half a subject to help users realise more subjects are on the list. This smaller height lets users move to a filter below.

If there are fewer than 15 subjects in the list, we display the subject filter as a simple list of checkboxes.

When a user selects one or more subjects, and clicks ‘Apply filters’, we show the selected subjects as tags at the top of the subject filter. This is because they may be hidden outside the visible scrollable region.

### Provider search

We introduced a provider search at the top of the course list. When a user searches or filters the list, we show a list of courses matching the search and filters.

Searching and filtering are independent of one another. If someone first searches for a provider’s courses and then applies filters, the filters act upon the sub-set of courses returned by that initial search. Similarly, if someone first filters the course list, a subsequent search is across the courses in the filtered list. Clearing a search will not remove the filters, and clearing the filters will not clear the search.

We retain the search term in the search field. Once a user searches, a ‘Clear search’ link is provided below the search field, allowing users to reset the search back to the initial state. The initial state may be a complete list of courses or a sub-set if the user has previously filtered the list.

Viewing a course does not clear the search term or the filters.

If a user finds a single course via the search, filters or a combination of both, we show the course list containing the single course. We do not automatically show the user the details of the course. This allows users to orient themselves or correct mistakes before viewing the course.

If the course list is empty, we show a message depending on the search and filter terms:

- There are no results for ‘search term’.
- There are no results for ‘search term’ and the selected filter.
- There are no results for ‘search term’ and the selected filters.
- There are no results for the selected filter.
- There are no results for the selected filters.

If the user submits an empty search, we show them the same list as if they had not submitted a search.

### ‘Apply filters’ button

The ‘Apply filters’ button is at the top so that it has the best chance of being seen, especially if there are many filters.

### Sort options

Currently, the courses list can be sorted by:

- ‘Training provider (A-Z)’
- ‘Training provider (Z-A)’

We added sorting by course name from A to Z and Z to A.

### Conditionally showing filters and filter options

We conditionally show filters and filter options depending on what filters the user has previously chosen.

For example, if the user has chosen ‘Physics’ in the subject filter, we show the ‘Engineers teach physics’ filter.

Similarly, we filter the qualifications options depending on the subject.

We show:

- ‘PGCE with QTS’, ‘PGDE with QTS’ and ‘QTS only’ - if the user has chosen a primary or secondary level subject
- ‘PGCE without QTS’ and ‘PGDE without QTS’ - if the user has chosen the ‘Further education’ subject

## Other considerations

We considered some changes which we did not implement.

- Including location search next to the provider search. This was not implemented in this concept so that we could see how user research participants might react to it not being available.
- Showing chosen filters as tags at the top of the filter section. This was not implemented as we could not establish a need for it from previous research.
- Reordering the subject list to show all checked subjects in alphabetical order at the top of the list of subjects, followed by an alphabetical list of unchecked subjects. This was not implemented as it is known to increase error rates and misinterpretations.
- Providing a ‘selected’ count below the filter’s heading similar to that found in the GOV.UK finder frontend component called [option select](https://finder-frontend.herokuapp.com/component-guide/option-select). This was not implemented in this iteration as we could not establish a need for it.
- Putting each filter section into an expandable region, but hiding the content. This was not implemented as it would mean the user has to work harder to reveal the content.
- Highlighting the search term in the courses that match.
