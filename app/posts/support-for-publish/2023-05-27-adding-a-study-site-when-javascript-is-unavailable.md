---
title: Adding a study site when JavaScript is unavailable
description: We added a no-JavaScript version of the add study site flow
date: 2023-05-27
tags:
  - locations
  - study sites
related:
  items:
    - text: Managing 'Study sites' on behalf of providers
      href: /support-for-publish/managing-study-sites-on-behalf-of-providers/
screenshots:
  items:
    - text: Finding a study site - without autocomplete
      src: study-sites--find.png
    - text: List of study sites - many results
      src: study-sites--list-01.png
    - text: List of accredited providers - less than 15 results
      src: study-sites--list-02.png
    - text: List of accredited providers - one result
      src: study-sites--list-03.png
    - text: No results
      src: study-sites--list-04.png
    - text: Error message
      src: study-sites--list-error.png
eleventyComputed:
  eleventyNavigation:
    key: support-adding-study-site-no-javascript
---

When the support team adds a study site to a provider in Support, we use an autocomplete to help users search for study sites.

The autocomplete works well for quickly selecting a study site, but it requires JavaScript. Not everyone has JavaScript, and it doesn’t always run successfully.

We added a no-JavaScript version of the ‘Add study site’ flow, which we can progressively enhance.

## How it works

Selecting ‘Add study site’ on the study sites list page takes the user to a form where they can search for a school, university or college. They do this by entering the study site name, unique reference number (URN) or postcode.

Without JavaScript, when the user continues, we show:

- the number of results and the search term in the heading - for example, “9 results found for ‘bath’”
- a way to change the search if the study site they are looking for is not listed or if there are too many results
- a list of radio options matching their search query - we limit this list to 15 items

We use data provided by [Get information about schools (GIAS)](https://www.get-information-schools.service.gov.uk/).

We display the name, town and postcode for each school, university or college in the list. This allows users to choose from similarly named locations correctly.

Selecting a study site from the list allows the user to continue and add the study site.

We show an error message if the user tries to continue without selecting a study site.

If the study site the user is looking for isn’t listed or there aren’t any results, the user can change their search, which takes them back to the initial search form.

*[GIAS]: Get information about schools
