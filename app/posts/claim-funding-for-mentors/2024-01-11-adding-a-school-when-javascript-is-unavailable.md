---
title: Adding a school when JavaScript is unavailable
description: We added a no-JavaScript version of the add school flow
date: 2024-01-11T12:00:00+00:00
tags:
  - schools
  - onboarding
  - javascript
related:
  items:
    - text: Adding organisations in Support
      href: /claim-funding-for-mentors/adding-organisations-in-support/
    - text: Adding a school in Publish when there is no JavaScript available
      href: /publish-teacher-training-courses/adding-a-school-when-there-is-no-javascript-available/
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
    - text: Error message - Select a school
      src: schools--list-error-empty.png
    - text: Error message - Scholl has already been added
      src: schools--list-error-duplicate.png
eleventyComputed:
  eleventyNavigation:
    key: claim-funding-support-add-school-no-js
---

When a support user adds a school in Claim funding for mentors, we use an autocomplete to help users search for schools.

The autocomplete works well for quickly selecting a school, but it requires JavaScript. Not everyone has JavaScript, and it does not always run successfully.

We added a no-JavaScript version of the ‘Add organisation’ flow, which we can progressively enhance.

## How it works

Selecting ‘Add organisation’ on the organisation list page takes the user to a form where they can search for a school or college. They do this by entering the school name, unique reference number (URN) or postcode.

Without JavaScript, when the user continues, we show:

- the number of results and the search term in the heading - for example, “7 results found for ‘challoner’”
- a way to change the search if the school they are looking for is not listed or if there are too many results
- a list of radio options matching their search query - we limit this list to 15 items

We use data provided by [Get information about schools (GIAS)](https://www.get-information-schools.service.gov.uk/).

We display the name, town and postcode for each school, university or college in the list. This allows users to choose from similarly named locations correctly.

Selecting a school from the list allows the user to continue and add the school.

If the user tries to continue without selecting a school, we show an error message:

> Select a school

If the user tries to add a school a second time, we show an error message:

> School has already been added

If the school the user is looking for is not listed or there are not any results, the user can change their search, which takes them back to the initial search form.

*[GIAS]: Get Information about Schools
