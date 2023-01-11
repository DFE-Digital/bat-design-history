---
title: Filtering applications by assigned user
description: Let users filter the applications list by the assigned user
date: 2021-06-30
screenshots:
  items:
    - text: Standard filter after the user has applied filters
      src: filter-by-assigned-user-assigned-and-unassigned-applications.png
    - text: Email addresses shown for duplicate names
      src: filter-by-assigned-user-duplicate-names.png
    - text: Filter for long lists after filters have been applied
      src: filter-by-assigned-user-inline-filter-selected-users.png
    - text: Filter for long with JavaScript unavailable
      src: filter-by-assigned-user-inline-filter-no-javascript.png
tags:
  - assigning applications
  - filtering
---

This is part of our work to [allow users to assign applications to themselves or other users](/manage-teacher-training-applications/assigning-applications-to-users).

Users need to be able to filter applications by the user they’ve been assigned to. They also need to be able to see which applications have not been assigned to anyone.

## What we changed

We added a new filter called ‘assigned user’ to the filter panel.

We reused the new filter pattern introduced in the [filter by subject](/manage-teacher-training-applications/filter-by-subject/) work. This allows the interface to adapt if the list of users is long.

## How it works

The assigned user filter shows an alphabetical list of all users in organisations which the signed in user belongs to.

The list starts with an ‘unassigned’ option so that users can easily find all unassigned applications.

The signed in user’s name is always second in the list, to make it easier for them to find applications they need to work on.

If the filter contains duplicate names, we include an email address hint to make it easier to choose the right user.

### Long lists of users

The filter changes if there are more than 15 entries in the list, including the unassigned option.

A scrollable region is created and indicated by:

- a bottom border
- a scrollbar
- cutting off midway through a checkbox

The scrollable region shows 4 and a half names to help users realise there are other names in the list. Restricting the height of the filter makes it easier to find and use other filters underneath it.

If JavaScript is available then it’s used to add a search box. Typing in this box updates the list with options matching the search term. If there are no matches, the list is empty.

The unassigned option will appear in the list if appropriate letters are typed (for example, ‘un’).

If JavaScript is unavailable, the names are still contained within the scrollable region but the search box is no longer shown.

### After filters are applied

After the user applies the filter, they will see all applications which include any of the selected options.

For example, if the user selected ‘Barbara Shade’ and ‘Unassigned‘ they will see all applications with are either assigned to Barbara or not assigned to anyone.

For each option the user selected, a ‘remove filter’ tag will be displayed under ‘selected filters’ at the top of the filter panel.

The tags are also displayed at the top of the assigned user filter since they may be hidden outside the visible scrollable region.
