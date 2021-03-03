---
title: Filtering applications by subject
description: Let users filter the applications list by the course’s subject
date: 2021-02-25
---

Users need to be able to filter their applications by subject.

## Course data analysis

Providers using the Manage service offer approximately 40 subjects at primary and secondary levels.

The number of subjects offered varies between providers.

- Average number of subjects offered: 10
- Maximum number of subjects offered: 28
- Minimum number of subjects offered: 1

Some courses are made up of multiple subjects, for example:

- biology and physical education
- business studies and economics
- English and drama
- maths and physics

Some courses are made up of multiple subjects and are also labelled differently, for example:

- biology, chemistry and physics together is commonly labelled ‘combined science’
- French, German and Spanish together is commonly labelled ‘modern languages’

Renaming subjects can be problematic. For example, ‘primary’ (code 00) is often renamed to ‘primary (5-11)’ or ‘primary (7-11)’. There are also instances where ‘primary’ is renamed to a subject that already exists, such as ‘primary with mathematics’ (which is also code 03).

## What we changed and why

We introduced a new filter pattern to display a long list of subjects. There may be as many as 40 subjects displayed in the list, which would extend the filter panel to an unmanageable length if displayed as a standard list of checkboxes.

We provided a means to search the list of subjects so that a user does not need to scroll through. For example, they can type ‘primary’ and will be presented with all the primary subjects.

We repeated the selected tags at the top of the subject filter, providing an immediate and obvious confirmation of which subject filters have been applied. It also gives users an additional way to remove subject filters.

## How it works

The subject filter only shows subjects for the courses offered by the provider.

If there are more than 15 subjects, a scrollable region is created and JavaScript is used to add a search box. Typing in the search box updates the list below it with subjects matching the search term. If there are no matches, the list is empty.

If JavaScript is unavailable, the subjects are still contained within the scrollable region but the search box is no longer shown.

The scrollable region is indicated by a cut-off mid-way through a checkbox, a bottom border and custom styles to display a scrollbar.

If there are 15 subjects or fewer, the subject filter will be displayed as a simple list of checkboxes.

When a subject has been selected and the filters have been applied, the remove filter tags are displayed under ‘selected filters’ at the top of the filter panel. They’re also displayed at the top of the subject filter since they may be hidden outside the visible scrollable region.

## Other considerations

We considered some changes which were not implemented.

- Reordering the subject list to show all checked subjects in alphabetical order at the top of the list of subjects, followed by an alphabetical list of unchecked subjects. This was not implemented as it is known to increase error rates and misinterpretations.
- Providing a ‘selected’ count below the filter’s heading similar to that found in the GOV.UK finder frontend component called [option select](https://finder-frontend.herokuapp.com/component-guide/option-select). This was not implemented in this iteration as we could not establish a need for it.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "No search or filters",
    caption: "The default applications list with no search or filters.",
    img: {
      src: "applications-list-no-search-or-filters.png"
    }
  }, {
    text: "Filtered by subject",
    caption: "The applications list showing the list filtered by subject.",
    img: {
      src: "applications-list-filter-by-subject.png"
    }
  }, {
    text: "Filter by subject inline filter",
    caption: "The applications list showing the subject filter's inline filter being used to find a subject from the list of subjects.",
    img: {
      src: "applications-list-filter-by-subject-filter.png"
    }
  }, {
    text: "Filter by subject with JavaScript disabled",
    caption: "The applications list showing the subject filter with JavaScript disabled. The inline search is not present as this relies on JavaScript.",
    img: {
      src: "applications-list-filter-by-subject-no-javascript.png"
    }
  }]
}) }}
