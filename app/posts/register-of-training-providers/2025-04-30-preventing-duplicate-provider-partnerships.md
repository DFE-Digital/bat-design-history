---
title: Preventing duplicate provider partnerships
description: We added a way to prevent users from adding duplicate provider partnerships
date: 2025-04-30
tags:
  - training providers
  - training partners
  - partnerships
  - duplication
related:
  items:
    - text: Managing provider partnerships
      href: /register-of-training-providers/managing-provider-partnerships/
    - text: Reorganising the layout of the provider pages
      href: /register-of-training-providers/reorganising-the-layout-of-the-provider-pages/
screenshots:
  items:
    - text: Find a training partner autocomplete
      src: duplicate-partners--find-training-partner.png
    - text: Cannot add training partner, stop screen
      src: duplicate-partners--cannot-add-training-partner.png
    - text: Find an accredited provider autocomplete
      src: duplicate-partners--find-accredited-provider.png
    - text: Cannot add accredited provider, stop screen
      src: duplicate-partners--cannot-add-accredited-provider.png
---

We recently improved the way users add partnerships between training providers. This helps prevent users from adding a partnership that already exists.

## Why we made this change

A review of the service highlighted a risk that users could add duplicate partnerships. This could lead to confusion, inconsistent data, and problems elsewhere in the service, particularly when reviewing or reporting on partner relationships.

We aimed to minimise the risk of duplication while ensuring users could still recover easily if they made an error.

## What we changed

We have:

- added a check for duplicate partnerships
- updated the page headings in the add partnership flow

### Checking for duplicate partnerships

When a user adds a new provider partnership, they search for a provider using an autocomplete field. As they type, a list of matching providers appears. When they select one and continue:

- if the selected provider is already in a partnership with the provider they are managing, we show a stop page. This tells them the partnership already exists. From here, they can:

  - go back and search for a different provider
  - cancel and return to the partnerships list

- if the selected provider is not already partnered, we show a ‘Check your answers’ page. This summarises the new partnership they are about to create. From here, users can:

  - change the selected provider
  - confirm and add the partnership
  - cancel and return to the partnerships list

### Updated page headings

We also changed the headings for the provider autocomplete.

If the current provider is an accredited provider, we show the heading:

> Enter training provider name, UKPRN or URN

If the current provider is not an accredited provider, we show the heading:

> Enter accredited provider name, UKPRN or URN

We include the current provider name in the caption for clarity.

## What this improves

This change:

- prevents users from creating duplicate partnerships
- supports cleaner and more reliable data
- helps users recover quickly from errors

It also supports a smoother experience when managing partnerships across the service.

## What’s next

We will continue to review how partnership data is added and maintained. This will help us identify any future improvements and maintain a straightforward process.
