---
title: Selecting an accredited provider in the claim flow when JavaScript is unavailable
description: We added a no-JavaScript version for selecting an accredited provider in the claim flow
date: 2024-07-03T12:01:00+00:00
tags:
  - accredited providers
related:
  items:
    - text: Selecting an accredited provider in the claim flow using an autocomplete
      href: /claim-funding-for-mentors/selecting-an-accredited-provider-in-the-claim-flow-using-an-autocomplete/
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
---

When users select an accredited provider in the claim flow, we use an autocomplete to help them find accredited providers.

The autocomplete works well for quickly selecting an accredited provider, but it requires JavaScript, which not everyone has, and it does not always run successfully.

We added a no-JavaScript version of the find accredited provider flow, which we can progressively enhance.

## How it works

Selecting ‘Add claim’ on the claims list page takes the user to a form where they can search for an accredited provider. They do this by entering the accredited provider name, UK provider reference number (UKPRN), unique reference number (URN) or postcode.

Without JavaScript, when the user continues, we show:

- the number of results and the search term in the heading - for example, “7 results found for ‘challoner’”
- a way to change the search if the provider they are looking for is not listed or if there are too many results
- a list of radio options matching their search query - we limit this list to 15 items

We use data provided by Publish teacher training courses.

We display the name UKPRN for each accredited provider in the list. This information allows users to choose correctly from similarly named accredited providers.

Selecting an accredited provider from the list allows the user to continue and add the provider to the claim.

We show an error message if the user tries to continue without selecting an accredited provider:

> Select an accredited provider

If the accredited provider the user is looking for is not listed or there are no results listed, they can change their search, which will return them to the initial search form.
