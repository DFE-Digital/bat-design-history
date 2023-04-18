---
title: Managing accredited providers on behalf of training partners
description: Giving the support team the ability to manage accredited providers on behalf of training providers
date: 2023-03-30
tags:
  - accredited providers
related:
  items:
    - text: Managing accredited bodies if you’re a lead school
      href: /publish-teacher-training-courses/managing-accredited-bodies-if-youre-a-lead-school/
    - text: Updating how training partners manage their accredited providers
      href: /publish-teacher-training-courses/updating-how-training-partners-manage-their-accredited-providers/
screenshots:
  items:
    - text: Accredited provider list
      src: accredited-providers--list.png
    - text: Accredited provider list - empty
      src: accredited-providers--list-empty.png
    - text: Find an accredited provider
      src: accredited-providers--find.png
    - text: Find an accredited provider - error
      src: accredited-providers--find-error.png
    - text: Enter details about the accredited provider
      src: accredited-providers--add-details.png
    - text: Enter details about the accredited provider - error
      src: accredited-providers--add-details-error.png
    - text: Check your answers
      src: accredited-providers--check-your-answers.png
    - text: Accredited provider added
      src: accredited-providers--added.png
    - text: Update details about the accredited provider
      src: accredited-providers--update-details.png
    - text: Update details about the accredited provider - error
      src: accredited-providers--update-details-error.png
    - text: Accredited provider updated
      src: accredited-providers--updated.png
    - text: Remove accredited provider
      src: accredited-providers--remove.png
    - text: Accredited provider removed
      src: accredited-providers--removed.png
    - text: Accredited provider cannot be removed
      src: accredited-providers--cannot-remove.png
---

Support users cannot easily see the relationship between training partners and their accredited providers. They also cannot manage these relationships on behalf of the training partner.

WHY IS THIS A PROBLEM

## What we changed

We added a way for support users to manage accredited provider relationships for schools.

## How it works

### Adding an accredited provider

![Add accredited provider flow](add-accredited-provider--flow.png "Add accredited provider flow")

Adding an accredited provider has 3 steps:

1. Find an accredited provider by name UKPRN or postcode
2. Enter details about the accredited provider
3. Check your answers

#### Enter a provider name, UKPRN or postcode

Selecting ‘Add accredited provider’ on the ‘Accredited providers’ list page takes the user to a form where they can search for an accredited provider. They do this by entering the provider name, UK provider reference number (UKPRN) or postcode.

We display the list of providers in an autocomplete.

We display the name and provider code for each provider in the list. This allows users to choose from similarly named providers correctly.

We display an error message if the user submits the form before selecting an item from the autocomplete.

#### About the accredited provider

The second step requires users to enter details about the accredited provider.

This information is used on Find postgraduate teacher training and can include:

- SOMETHING
- SOMETHING
- SOMETHING

Users must enter 100 words or fewer.

### Check your answers

The final step is to check your answers. The user can change both the provider and description of the accredited provider.

Once they submit the page, we notified users of the accredited provider that their organisation has been added to the training partner as an accredited provider.

### Editing ‘About an accredited provider’

When a user clicks the change link next to the ‘About the accredited provider’, they’re taken to a page where they change the accredited provider's description.

Users must enter 100 words or fewer.

### Removing an accredited provider

When a user clicks the remove link next to the accredited provider’s name on the ‘Accredited providers’ list, they’re taken to a page to confirm the removal of the accredited provider.

If the accredited provider does not ratify any courses the training partner runs, the user can remove them.

If the accredited provider does ratify courses run by the training partner, we show a page explaining why the user cannot remove the accredited provider.

### Validation rules

#### Enter a provider name, UKPRN or postcode

If the user does not enter a provider name, UKPRN or postcode before submitting the page, we show the error message:

> Enter a provider name, UKPRN or postcode

If the user selects a provider from the autocomplete that has already been added to the training partner, we show the error message:

> [Provider name] has already been added

#### About the accredited provider

If the user does not enter details about the accredited provider, we show the error message:

> Enter details about the accredited provider

The details about the accredited provider should be 100 words or fewer. If the user enters a description that is longer than 100 words, we show the error message:

> Description about the accredited provider must be 100 words or fewer
