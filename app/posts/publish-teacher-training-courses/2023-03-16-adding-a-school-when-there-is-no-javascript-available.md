---
title: Adding a school when there is no JavaScript available
description: We added a no-JavaScript version of the add school flow
date: 2023-03-16
tags:
  - locations
  - schools
related:
  items:
    - text: Improving how providers add schools
    - href: /publish-teacher-training-courses/improving-how-providers-add-schools/
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
---

When a provider adds a school in Publish teacher training courses (Publish), we use an autocomplete to help users search for schools.

The autocomplete works well for quickly selecting a school, but it requires JavaScript to be working. Not everyone has JavaScript, and it doesn’t always run successfully.

We added a no-JavaScript version of the ‘Add school’ flow, which we can progressively enhance.

## How it works

Selecting ‘Add school’ on the schools list page takes the user to a form where they can search for a school, university or college. They do this by entering the school name, unique reference number (URN) or postcode.

Without JavaScript, when the user continues, we show:

- the number of results and the search term in the heading - for example, “7 results found for ‘challoner’”
- a way to change the search if the school they are looking for is not listed or if there are too many results
- a list of radio options matching their search query - we limit this list to 15 items

We use data provided by [Get information about schools (GIAS)](https://www.get-information-schools.service.gov.uk/).

For each school, university or college in the list, we display the name, town and postcode. This allows users to correctly choose from similarly named locations.

Selecting a school from the list allows the user to continue and add the school.

If the user tries to continue without selecting a school, we show an error message.

If the school the user is looking for isn’t listed or there aren’t any results, the user can change their search, which takes them back to the initial search form.

*[GIAS]: Get Information about Schools
