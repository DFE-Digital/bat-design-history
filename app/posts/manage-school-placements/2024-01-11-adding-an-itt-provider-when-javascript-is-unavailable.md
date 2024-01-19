---
title: Adding an ITT provider when JavaScript is unavailable
description: We added a no-JavaScript version of the add ITT provider flow
date: 2024-01-11T12:01:00+00:00
tags:
  - providers
related:
  items:
    - text: Adding organisations in Support
    - href: /manage-school-placements/adding-organisations-in-support/
    - text: Adding an accredited provider in Publish when JavaScript is unavailable
      href: /publish-teacher-training-courses/adding-an-accredited-provider-when-javascript-is-unavailable/
screenshots:
  items:
    - text: Finding a provider - without autocomplete
      src: providers--find.png
    - text: List of providers - many results
      src: providers--list-01.png
    - text: List of providers - less than 15 results
      src: providers--list-02.png
    - text: List of providers - one result
      src: providers--list-03.png
    - text: No results
      src: providers--list-04.png
    - text: Error message
      src: providers--list-error.png
eleventyComputed:
  eleventyNavigation:
    key: school-placements-support-add-provider-no-js
---

When support users add an ITT provider in Manage school placements, we use an autocomplete to help them search for the provider.

The autocomplete works well for quickly selecting a provider, but it requires JavaScript. Not everyone has JavaScript, and it does not always run successfully.

We added a no-JavaScript version of the ‘Add organisation’ flow, which we can progressively enhance.

## How it works

Selecting ‘ITT provider’ on the organisation type page takes the user to a form where they can search for a provider. They do this by entering a provider name, UK provider reference number (UKPRN), unique reference number (URN) or postcode.

When the user continues without JavaScript, we show:

- the number of results and the search term in the heading - for example, “7 results found for ‘manchester’”
- a way to change the search if the provider they are looking for is not listed or if there are too many results
- a list of radio options matching their search query - we limit this list to 15 items

We display the name, town and postcode for each provider in the list. This allows users to choose from similarly named providers correctly.

Selecting a provider from the list allows the user to continue and add the provider.

We show an error message if the user tries to continue without selecting a provider.  We also show an error message if the user tries to add the provider a second time.

If the provider the user is looking for is not listed, or the list has no results, they can change their search, which takes them back to the search form.
