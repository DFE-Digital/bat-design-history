---
title: Adding a school when there is no JavaScript available
description: We added a no-JavaScript version of the add school flow, which we can progressively enhance
date: 2023-03-16
tags:
  - locations
related:
  items:
    - text: Improving how providers add schools
    - href: /publish-teacher-training-courses/improving-how-providers-add-schools/
screenshots:
  items:
    - text: Finding a school without autocomplete
      src: schools--find.png
    - text: List of schools with too many results
      src: schools--list-01.png
    - text: List of schools with less than 15 results
      src: schools--list-02.png
    - text: List of schools with one result
      src: schools--list-03.png
    - text: No results
      src: schools--list-04.png
    - text: Error message
      src: schools--list-error.png
---

When a provider adds a school in Publish teacher training courses (Publish), we use an autocomplete to help users search for schools.

The autocomplete works well for quickly picking a school, but it requires JavaScript to be running successfully for it to be used. Not everyone has JavaScript, and it doesn’t always run successfully.

We added a no-JavaScript version of the add school flow, which we can progressively enhance.

## How it works

Selecting ‘Add school’ on the schools list page takes the user to a form where they can search for a school, university or college. They do this by entering the school name, unique reference number (URN) or postcode.

Without JavaScript, when the user continues, we show:

- the number of results and the search term in the heading - for example, “7 results found for ‘challoner’”
- a way to change the search if the school they are looking for is not listed or if there are too many results
- a list of radio options matching their search query - we limit this list to 15 items

Selecting a school from this list allows the user to continue and add the school.
