---
title: Filter applications by subject
description: Let users filter the applications list by the course’s subject
date: 2021-02-25
---

We introduced a subject filter to allow users to filter by the course’s subject in the applications list.

## Why we are doing this

Providers need to be able to filter their applications by subject.

When providers share applications with people who do the shortlisting (for example, subject leads in a school or a subject tutor at an HEI), those users only need to see specific subjects and not the entire list.

## An analysis of the course data

From the course data for ‘synced’ providers, there are approximately 40 subjects across primary and secondary levels.

The number of subjects offered by providers in the form of a course varies between providers.

- The average number of subjects offered: 10
- The maximum number of subjects offered: 28
- The minimum number of subjects offered: 1

Providers are able to rename subjects when creating a course, whilst retaining the underlying subject code. For example, ‘Primary’ (code: 00) is often renamed to ‘Primary (5-11)’ or ‘Primary (7-11)’. There are also instances where ‘Primary’ is renamed to a subject that already exists, such as ‘Primary with mathematics’ (code: 03).

Some courses are compound subjects—they are made up of several subjects. For example, Biology, Chemistry and Physics together form a course called commonly labelled ‘Combined science’. French, German and Spanish together may form a course labelled ‘Modern languages’.

Other compound courses include:

- Maths and Physics
- Biology and Physical Education
- Business Studies and Economics
- English and Drama

## What we changed and why

This change included:

- introducing a new filter mechanism to display a long list of subjects. There are approximately 40 subjects that can be displayed in the list, so displaying them as standard list of checkboxes similar to other filters, would have extended the filter panel to a difficult to use length.
- providing a means to search through the list of subjects so that a user does not need to scroll through the list of items. For example, they can type ‘primary’ and will be presented with all the primary subjects.
- repeating the selected subject tags in the context of the filter, providing an immediate and obvious confirmation of the subjects that have been applied and an additional way to remove the filters.


## How it works

If there are 15 subjects or fewer offered by a provider, the subject filter will be displayed as a list of checkboxes.

If there are more than 15 subjects offered by a provider, the subject filter is enhanced with JavaScript. In this situation, the filter includes a search box and the list of subject checkboxes is encapsulated in a scrollable region.


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

## Other considerations

- reordering the subject list to show all checked subjects in alphabetical order at the top of the list of subjects, followed by an alphabetical list of unchecked subjects. This was not implemented as reordering applied filters to the top of the list increases error rates and misinterpretations.
- providing a ‘selected’ count below the filter’s heading similar to that found in the GOV.UK finder frontend components called ‘[option select](https://finder-frontend.herokuapp.com/component-guide/option-select)’. This was not implemented in this iteration as we could not establish a need for it.
