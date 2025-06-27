---
title: Adding a school in Support when JavaScript is unavailable
description: We added a no-JavaScript version of the add school flow
date: 2023-06-10
tags:
  - support
  - locations
  - schools
  - javascript
related:
  items:
    - text: Improving how users add schools in Support
      href: /publish-teacher-training-courses/improving-how-providers-add-schools/
    - text: Improving how providers add schools
      href: /publish-teacher-training-courses/improving-how-providers-add-schools/
screenshots:
  items:
    - text: Finding a school - without autocomplete
      src: schools--find.png
    - text: List of schools - many results
      src: schools--list-01.png
    - text: List of schools - less than 15 results
      src: schools--list-02.png
    - text: List of schools - one result
      src: schools--list-03.png
    - text: No results
      src: schools--list-04.png
    - text: Error message
      src: schools--list-error.png
eleventyComputed:
  eleventyNavigation:
    key: publish-support-adding-schools-no-javascript
---

When the Support team adds a school in Support for Publish teacher training courses (Support), we use an autocomplete to help users search for schools.

The autocomplete works well for quickly selecting a school, but it requires JavaScript. Not everyone has JavaScript, and it does not always run successfully.

We added a no-JavaScript version of the ‘Add school’ flow, which we can progressively enhance.

## How it works

Selecting ‘Add school’ on the schools list page takes the user to a form where they can search for a school, university or college. They do this by entering the school name, unique reference number (URN) or postcode.

Without JavaScript, when the user continues, we show:

- the number of results and the search term in the heading - for example, “7 results found for ‘challoner’”
- a way to change the search if the school they are looking for is not listed, or if there are too many results
- a list of radio options matching their search query - we limit this list to 15 items

We use data provided by [Get information about schools (GIAS)](https://www.get-information-schools.service.gov.uk/).

We display the name, town and postcode for each school, university or college in the list. This allows users to choose from similarly named locations correctly.

Selecting a school from the list allows the user to continue and add the school.

We show an error message if the user tries to continue without selecting a school:

> Select a school

If the school the user is looking for is not listed or there are no results listed, they can change their search, which takes them back to the initial search form.

*[GIAS]: Get Information about Schools
