---
title: Adding a submit button to the ‘sort by’ form to improve accessibility
description: We have removed the automatic form submission and added a submit button
date: 2022-11-10
tags:
  - accessibility
screenshots:
  items:
    - text: Course results
      src: course-results.png
---

We use a select drop down on Find postgraduate teacher training courses (Find), which allows users to sort the course results list by ‘Training provider’, ascending and descending.

Previously, the select drop-down automatically submitted the user’s choice when the selection changed.

Keyboard-only users, including screen reader users, find selecting an option in the sort by drop-down confusing because they:

- do not expect the content to update automatically or to not continue from where they were before
- need to renavigate the page's content to return to their position
- have difficulty selecting the second option in the drop-down, as moving through the list of options causes a change of context

## What we changed

We have removed the automatic form submission and added a submit button labelled ‘Sort’, allowing users to submit their selected option.

## Further considerations

We considered changing the drop-down list to links. However, this would be impractical as we plan to add more options to the list.
