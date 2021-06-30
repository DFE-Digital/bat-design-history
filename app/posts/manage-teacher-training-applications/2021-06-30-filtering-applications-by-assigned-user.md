---
title: Filtering applications by assigned user
description: Let users filter the applications list by the assigned user
date: 2021-06-30
---

Users need to be able to filter their applications by the assigned user.

## What we changed and why

We added a new filter to the filter panel called ‘assigned user’.

We reused the checkbox filter pattern introduced in the [filter by subject](https://bat-design-history.netlify.app/manage-teacher-training-applications/filter-by-subject/) piece of work, allowing the interface to adapt to large or small numbers of users in a provider.

## How it works

The assigned user filter shows an alphabetical list of the names of users in the same organisation as the signed-in user.

The signed-in user’s name is always second in the list, below the unassigned option, so that it is easier for the user to find the applications they need to work on.

The filter includes an unassigned option so that users can find all unassigned applications.

If the filter contains duplicate names, we include an email address hint to make it easier to choose the right name.

If there are more than 15 users in the organisation, a scrollable region is created and JavaScript is used to add a search box. Typing in the search box updates the list below it with names matching the search term. If there are no matches, the list is empty.

If JavaScript is unavailable, the names are still contained within the scrollable region but the search box is no longer shown.

The scrollable region is indicated by a cut-off mid-way through a checkbox, a bottom border and custom styles to display a scrollbar.

The scroll area shows 4 and a half names to help users realise there are other names in the list. This smaller height lets users move to a filter below.

If there are 15 names or fewer, the assigned user filter will be displayed as a simple list of checkboxes.

When a name has been selected and the filters have been applied, the remove filter tags are displayed under ‘selected filters’ at the top of the filter panel. They’re also displayed at the top of the assigned user filter since they may be hidden outside the visible scrollable region.

## Other considerations

We considered some changes which were not implemented.

- Reordering the list of names to show all checked names in alphabetical order at the top of the list of names, followed by an alphabetical list of unchecked names. This was not implemented as it is known to increase error rates and misinterpretations.
- Providing a ‘selected’ count below the filter’s heading similar to that found in the GOV.UK finder frontend component called [option select](https://finder-frontend.herokuapp.com/component-guide/option-select). This was not implemented in this iteration as we could not establish a need for it.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "No filters",
    img: {
      src: "filter-by-assigned-user-no-filters.png"
    }
  }, {
    text: "Filtered assigned applications - one user",
    img: {
      src: "filter-by-assigned-user-one-user.png"
    }
  }, {
    text: "Filtered assigned applications - multiple users",
    img: {
      src: "filter-by-assigned-user-multiple-users.png"
    }
  }, {
    text: "Filter unassigned applications",
    img: {
      src: "filter-by-assigned-user-unassigned-applications.png"
    }
  }, {
    text: "Filter assigned and unassigned applications",
    img: {
      src: "filter-by-assigned-user-assigned-and-unassigned-applications.png"
    }
  }, {
    text: "Duplicate names",
    img: {
      src: "filter-by-assigned-user-duplicate-names.png"
    }
  }, {
    text: "Inline filter",
    img: {
      src: "filter-by-assigned-user-inline-filter.png"
    }
  }, {
    text: "Inline filter - selected users",
    img: {
      src: "filter-by-assigned-user-inline-filter-selected-users.png"
    }
  }, {
    text: "Inline filter - duplicate names",
    img: {
      src: "filter-by-assigned-user-inline-filter-duplicate-names.png"
    }
  }, {
    text: "Filter by assigned user with JavaScript disabled",
    img: {
      src: "filter-by-assigned-user-inline-filter-no-javascript.png"
    }
  }]
}) }}
