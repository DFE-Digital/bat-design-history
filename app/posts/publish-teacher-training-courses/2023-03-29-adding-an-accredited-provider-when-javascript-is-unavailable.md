---
title: Adding an accredited provider when JavaScript is unavailable
description: We added a no-JavaScript version of the add accredited provider flow
date: 2023-03-29
tags:
  - accredited providers
related:
  items:
    - text: Updating how training partners manage their accredited providers
      href: /publish-teacher-training-courses/updating-how-training-partners-manage-their-accredited-providers/
screenshots:
  items:
    - text: Finding an accredited provider - without autocomplete
      src: accredited-providers--find.png
    - text: List of accredited providers - many results
      src: accredited-providers--list-01.png
    - text: List of accredited providers - less than 15 results
      src: accredited-providers--list-02.png
    - text: List of accredited providers - one result
      src: accredited-providers--list-03.png
    - text: No results
      src: accredited-providers--list-04.png
    - text: Error message
      src: accredited-providers--list-error.png
eleventyComputed:
  eleventyNavigation:
    key: publish-adding-accredited-provider-no-javascript
---

When users add an accredited provider in Publish teacher training courses (Publish), we use autocomplete to help them search for the accredited provider.

The autocomplete works well for quickly selecting an accredited provider, but it requires JavaScript. Not everyone has JavaScript, and it does not always run successfully.

We added a no-JavaScript version of the ‘Add accredited provider’ flow, which we can progressively enhance.

## How it works

Selecting ‘Add accredited provider’ on the ‘Accredited providers’ list page takes the user to a form where they can search for an accredited provider. They do this by entering a provider name, UK provider reference number (UKPRN) or postcode.

When the user continues without JavaScript, we show:

- the number of results and the search term in the heading - for example, “7 results found for ‘manchester’”
- a way to change the search if the accredited provider they are looking for is not listed or if there are too many results
- a list of radio options matching their search query - we limit this list to 15 items

We display the name and provider code for each accredited provider in the list. This allows users to choose from similarly named accredited providers correctly.

Selecting an accredited provider from the list allows the user to continue and add the accredited provider.

We show an error message if the user tries to continue without selecting an accredited provider.

If the accredited provider the user is looking for is not listed, or the list has no results, they can change their search, which takes them back to the search form.
