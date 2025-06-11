---
title: Selecting a provider in the add partnership flow when JavaScript is unavailable
description: We added a no-JavaScript version for selecting an accredited provider or training partner in the add partnership flow
date: 2025-06-04
tags:
  - accredited providers
  - training partners
  - javascript
related:
  items:
    - text: Managing provider partnerships
      href: /register-of-training-providers/managing-provider-partnerships/
    - text: Preventing duplicate provider partnerships
      href: /register-of-training-providers/preventing-duplicate-provider-partnerships/
    - text: Adding an accredited provider when JavaScript is unavailable
      description: Publish teacher training courses
      href: /publish-teacher-training-courses/adding-an-accredited-provider-when-javascript-is-unavailable/
    - text: Adding a study site when JavaScript is unavailable
      description: Publish teacher training courses
      href: /publish-teacher-training-courses/adding-a-study-site-when-javascript-is-unavailable/
    - text: Adding a school when JavaScript is unavailable
      description: Claim funding for mentor training
      href: /claim-funding-for-mentors/adding-a-school-when-javascript-is-unavailable/
    - text: Selecting an accredited provider in the claim flow when JavaScript is unavailable
      description: Claim funding for mentor training
      href: /claim-funding-for-mentors/selecting-an-accredited-provider-in-the-claim-flow-when-javascript-is-unavailable/
    - text: Building a robust frontend using progressive enhancement
      description: GOV.UK service manual
      href: https://www.gov.uk/service-manual/technology/using-progressive-enhancement
screenshots:
  items:
    - text: Finding a provider
      src: add-partnership--form.png
    - text: Finding a provider - using an autocomplete
      src: add-partnership--form-autocomplete.png
    - text: Finding a provider - using a standard input
      src: add-partnership--form-input.png
    - text: Finding a provider - standard input with an error
      src: add-partnership--form-input-with-errors.png
    - text: Selecting a provider - list of providers with many results
      src: add-partnership--list-01.png
    - text: Selecting a provider - list of providers with less than 15 results
      src: add-partnership--list-02.png
    - text: Selecting a provider - list of providers with one result
      src: add-partnership--list-03.png
    - text: Selecting a provider - list of providers with no results
      src: add-partnership--list-04.png
    - text: Selecting a provider - list of providers with an error message
      src: add-partnership--list-error.png
---

When users select to add a provider in the add partnership flow, we use an autocomplete to help them find providers.

The autocomplete feature works well for quickly selecting a provider; however, it requires JavaScript, which is not available to everyone, and it does not always run successfully.

Users might not have JavaScript enabled or available because they:

- disable JavaScript in their browsers to avoid potential security risks, such as cross-site scripting (XSS) attacks
- rely on screen readers or other assistive technologies, and might disable JavaScript if it interferes with their tools
- are using older or less powerful devices, where JavaScript can slow down performance
- work in an organisation that enforces strict browsing policies that disable JavaScript to maintain security and control over their network

We added a no-JavaScript version of the find provider flow, which we can progressively enhance.

## How it works

Selecting ‘Add partnership’ on a provider’s partnerships list page takes the user to a form where they can search for a provider. They do this by entering the provider name, UK provider reference number (UKPRN) or unique reference number (URN).

If the provider is an accredited provider, users can only add training partners. If the provider is not accredited, users can only add accredited provider partnerships.

Without JavaScript, when the user continues, we show:

- the number of results and the search term in the heading - for example, “6 results found for ‘saint’”
- a way to change the search if the provider they are looking for is not listed or if there are too many results
- a list of radio options matching their search query - we limit this list to 15 items

We use data from the service itself. Therefore, if the provider does not exist, users must first add the provider to the register.

We display each provider’s name and UKPRN in the list. The UKPRN enables users to select the correct provider from those with similar names.

Selecting a provider from the list allows the user to continue and add the provider partnership.

### Accredited provider or training partner

Currently, users can add partnerships via an accredited provider or a non-accredited provider.

If users add partnerships via the accredited provider route, we use the term “training partner” to indicate the type of provider they are adding.

For example:

- “Enter a training partner name, UKPRN or URN”
- “I cannot find the training partner”
- “Try narrowing down your search if the training partner you’re looking for is not listed”

Conversely, if users add partnerships via a non-accredited provider, we use the term “accredited provider” to indicate the type of provider they are adding.

For example:

- “Enter an accredited provider name, UKPRN or URN”
- “I cannot find the accredited provider”
- “Try narrowing down your search if the accredited provider you’re looking for is not listed”

### Error messages

We show an error message if the user tries to continue without selecting a provider.

If the search is for a training partner, we show the error message:

> Select a training partner

If the search is for an accredited provider, we show the error message:

> Select an accredited provider

If the provider the user is looking for is not listed or there are no results listed, they can change their search, which will return them to the initial search form.
