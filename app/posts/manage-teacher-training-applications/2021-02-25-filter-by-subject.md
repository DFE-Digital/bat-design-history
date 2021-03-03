---
title: Filtering applications by subject
description: Let users filter the applications list by the course’s subject
date: 2021-02-25
---

Users need to be able to filter their applications by subject.

## Course data analysis

Analysing the course data for providers using the Manage service, there are approximately 40 subjects across primary and secondary levels.

The number of subjects offered by providers in the form of a course varies between providers.

- The average number of subjects offered: 10
- The maximum number of subjects offered: 28
- The minimum number of subjects offered: 1

Some courses are made up of multiple subjects. For example,

- Biology and Physical Education
- Business Studies and Economics
- English and Drama
- Maths and Physics

Some courses are made up of multiple subjects and are also labelled differently. For example;

- Biology, Chemistry and Physics together is commonly labelled ‘Combined science’
- French, German and Spanish together is commonly labelled ‘Modern languages’

Renaming subjects can be problematic. For example, ‘Primary’ (code: 00) is often renamed to ‘Primary (5-11)’ or ‘Primary (7-11)’. But there are also instances where ‘Primary’ is renamed to a subject that already exists, such as ‘Primary with mathematics’ (code: 03).

## What we changed and why

This change included:

- introducing a new filter pattern to display a long list of subjects. There may be as many as 40 subjects displayed in the list, so showing them as standard list of checkboxes, similar to other filters, would have extended the filter panel to an unmanageable length.
- providing a means to search through the list of subjects so that a user does not need to scroll through the list of items. For example, they can type ‘primary’ and will be presented with all the primary subjects.
- repeating the selected subject tags in the context of the filter, providing an immediate and obvious confirmation of the subjects that have been applied and an additional way to remove the filters.

## How it works

The subject filter only shows subjects for the courses offered by the provider.

If there are more than 15 subjects, JavaScript is used to add a search box. Typing in the search box will update the subject list below with subjects that match the search term. If there are no matches, the list will be empty.

If JavaScript is unavailable, the subjects are still contained within the scrollable region, but the search box is no longer shown.

If there are 15 subjects or fewer offered by a provider, the subject filter will be displayed as a list of checkboxes.

When a subject has been selected and the filters have been applied, the remove filter ‘tags’ are displayed under ‘selected filters’ at the top of the filter panel. They’re also displayed at the top of the subject filter to tell users what subjects have been selected as they may be hidden in the scrollable region.

## Other considerations

- reordering the subject list to show all checked subjects in alphabetical order at the top of the list of subjects, followed by an alphabetical list of unchecked subjects. This was not implemented as reordering applied filters to the top of the list increases error rates and misinterpretations.
- providing a ‘selected’ count below the filter’s heading similar to that found in the GOV.UK finder frontend components called ‘[option select](https://finder-frontend.herokuapp.com/component-guide/option-select)’. This was not implemented in this iteration as we could not establish a need for it.

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
