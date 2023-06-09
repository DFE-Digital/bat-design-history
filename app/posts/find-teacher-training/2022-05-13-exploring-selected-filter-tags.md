---
title: Exploring selected filter tags
description: How filter tags might work on Find
date: 2022-05-13
tags:
  - filters
  - tags
ogImage:
  src: /find-teacher-training/exploring-selected-filter-tags/selected-filter-tags.png
  alt: Selected filter tags
related:
  items:
    - text: GitHub pull request with the prototype changes
      href: https://github.com/DFE-Digital/find-teacher-training-prototype/pull/63
---

![Selected filter tags](selected-filter-tags.png)

We did some design exploration to see whether selected filter tags (also known as ‘facet tags’) would work for the service.

## The problem

One potential issue with the pattern where results can be filtered is that it might not be always be clear what the currently selected filter options are.

This issue might arise more when the user:

- has followed a link to a pre-filtered set of results
- is using a mobile device, where the filters are hidden by default and only revealed in an overlay when tapping a ‘show filters’ button
- the list of filters is very long

## A potential solution

One pattern that many services adopt is to show the currently selected filters as button-like ‘tags’, where each tag also has an ‘x’ icon and can be clicked to remove that filter.

Some services show these at the top of the filters component:

![Screenshot showing the Teaching Vacancies service](teaching-vacancies.png "Teaching Vacancies")

Other services display them at the top of the search results:

![Screenshot showing the Get school experience service](get-school-experience.png "Get school experience")

This has the advantage of also being visible on mobile screens when the filters are hidden.

## Applying the pattern to the service

One issue with applying this pattern to the service is that by default, all of these checkboxes are checked by default:

- Only show courses with vacancies
- Study type (both Full time and Part time)
- Qualifications (QTS only, PGCE with QTS and Further education)

![Screenshot showing the Find postgraduate teacher training with checked checkbox filters](find-default-checkboxes.png "Current default checkbox state")

This would mean 5 selected filter tags appearing by default, which feels quite confusing.

Instead, we could change the filter checkboxes so that by default, none are selected.

This would mean that for Study type and Qualifications, candidates would have to interpret none being checked as meaning that no filters have been applied (which would be the same as if all were selected).

However, for the ‘Only show courses with vacancies’ we would have to reverse the meaning to something like ‘Include courses with no vacancies’.

Alternatively, we could decide to drop this filter, as most of the time candidates are not interested in courses with no vacancies. If we did this, we would have to provide another way to return to a specific course which may no longer have vacancies, for example by entering a course code or listing all courses from a provider.

When the selected filter tags are applied to the service, it might look like this:

![Screenshot showing the Find postgraduate teacher training with selected filter tags above the results](find-with-selected-filter-tags.png "Selected filter tags")

## Further work

If we decide to take this further, we should do some usability testing to check that candidates understand the selected filter tags.

We may also decide to combine this work with automatically updating the results whenever filters are changed, instead of having an ‘Apply filters’ button.

*[PGCE]: Postgraduate certificate in education
*[QTS]: Qualified teacher status
