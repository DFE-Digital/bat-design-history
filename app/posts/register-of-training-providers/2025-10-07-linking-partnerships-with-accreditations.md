---
title: Linking partnerships with accreditations
description: We explored linking accreditation information to a partnership relationship to see if it made it easier to see historic relationships
date: 2025-10-07
tags:
  - partnerships
  - accreditations
  - providers
related:
  items:
    - text: Managing provider partnerships
      href: /register-of-training-providers/managing-provider-partnerships/
    - text: Preventing duplicate provider partnerships
      href: /register-of-training-providers/preventing-duplicate-provider-partnerships/
    - text: Selecting a provider in the add partnership flow when JavaScript is unavailable
      href: /register-of-training-providers/selecting-a-provider-in-the-add-partnership-flow-when-javascript-is-unavailable/
    - text: Logging changes to a partnership’s linked accreditations
      href: /register-of-training-providers/logging-changes-to-a-partnerships-linked-accreditations/
    - text: Preventing accreditations from being deleted if linked to a partnership
      href: /register-of-training-providers/preventing-accreditations-from-being-deleted-if-linked-to-a-partnership/
screenshots:
  items:
    - text: Accredited provider partnership list
      src: accredited-provider--partnership-list.png
    - text: Accredited provider - find training partner
      src: accredited-provider--find-training-partner.png
    - text: Accredited provider - find training partner with error
      src: accredited-provider--find-training-partner-with-error.png
    - text: Accredited provider - select accreditation
      src: accredited-provider--select-accreditation.png
    - text: Accredited provider - select accreditation with error
      src: accredited-provider--select-accreditation-with-error.png
    - text: Accredited provider - check your answers
      src: accredited-provider--check-your-answers.png
    - text: Accredited provider - partnership added success message
      src: accredited-provider--add-partnership-success.png
    - text: Training partner partnership list
      src: training-partner--partnership-list.png
    - text: Training partner - find accredited provider
      src: training-partner--find-accredited-provider.png
    - text: Training partner - find accredited provider with error
      src: training-partner--find-accredited-provider-with-error.png
    - text: Training partner - select accreditation
      src: training-partner--select-accreditation.png
    - text: Training partner - select accreditation with error
      src: training-partner--select-accreditation-with-error.png
    - text: Training partner - check your answers
      src: training-partner--check-your-answers.png
    - text: Training partner - partnership added success message
      src: training-partner--add-partnership-success.png
---

We explored how to include accreditation information when a user sets up a provider partnership.

We chose to require an explicit link to one or more accreditations held by the accredited provider to make the history of relationships traceable over time.

## Problem we are trying to solve

Partnerships currently record the accredited provider and the training partner. They do not always show which accreditation the partnership operated under.

This approach creates gaps when we need to explain why:

- a provider could legally partner with a training provider
- how coverage has changed over time
- whether a partnership remains valid after an accreditation changes or ends

## Why we did this

Linking a partnership to its underlying accreditation helps us to:

- show that the accredited provider had the right to partner in the subject phase, route, or scope covered by that accreditation
- explain historical changes, for example, when an accreditation starts, ends, or is replaced
- support funding, quality assurance, and regulatory queries that depend on accreditation scope and dates

{# ## User needs

**Policy and data teams** need to understand whether a partnership sat within an accreditation’s scope at a given date so they can assess compliance, impact and trends.

**Support teams** need to answer, “Was this partnership valid at the time?” without having to cross-check multiple systems and spreadsheets.

**Accredited providers** need to evidence that a partner relationship operated under a specific accreditation when asked by DfE or Ofsted.

**Service teams across BAT** require reliable connections between partnership records, accreditations, and academic years to support downstream services and analytics. #}

## Options we considered

1. **Partnerships without accreditation context** ([the original design](/register-of-training-providers/managing-provider-partnerships/))
   - simple to set up
   - fails to evidence scope and validity: Hard to answer “under which accreditation?” later

2. **Partnerships with a single accreditation**
   - adds traceability
   - breaks when a partnership spans multiple accreditations or when scope splits

3. **Partnerships linked to one or more accreditations** (chosen)
   - flexible and explicit
   - supports history: a partnership can reference the accreditation(s) that applied at creation, and users can add new links as scope changes

We chose option 3.

## What we changed

We have made several changes, including:

- requiring users to select one or more accreditations held by the accredited provider when creating or editing a partnership
- allowing multiple accreditations per partnership and preserve their start and end dates
- showing the selected accreditations in the partnership view so users can see scope and timing

## How it works

### Viewing a list of the provider’s partnerships

We show a list of the provider’s partnerships. For each partnership, we show a summary card containing:

- accredited provider name
- training partner name
- linked accreditations

The summary card title links to the relevant provider. If the user is viewing the partnership from the accredited provider's perspective, the summary card title shows the training partner’s name. If the user is viewing the partnership from the training partner's perspective, the summary card title shows the accredited provider’s name. We link the name to the associated record in the register.

The summary card also includes ‘Change’ and ‘Delete’ links.

### Adding a partnership

Adding a partnership is a 3-step process:

- select a provider
- select linked accreditations
- check your answers

Users can add a partnership via the accredited provider or the training partner. There are minor differences in wording across the flows, but the overall flow remains the same.

#### Select a provider

The first step in the ‘Add partnership’ flow is to select the provider.

We use an autocomplete to help users find and select the correct provider.

Users can search for providers by entering the provider’s name, UK provider reference number (UKPRN), unique reference number (URN) or postcode.

If the current provider is accredited, autocomplete only includes training providers.

The autocomplete only includes accredited providers if the current provider is not accredited.

You cannot create a partnership between accredited providers or between training providers. A single accredited ITT provider must lead all ITT partnerships and can involve both training partners and placement schools.

We display each provider's name and UKPRN or URN in the list. This information enables users to select the correct provider from among similarly named options.

The question is required. If users do not select a training provider, we show an error message:

> Select a training partner

If users are adding the partnership via a training partner, the error message is:

> Select an accredited provider

Users must select ‘Continue’ to select the associated accreditation details.

#### Select linked accreditations

The second step in the flow is to select a linked accreditation.

We display a list of all accreditations associated with the accredited provider, regardless of whether they’re historic. This approach allows users to configure past, present and future partnerships.

The question is required. If users do not select at least one accreditation, we show an error message:

> Select an accreditation

#### Check your answers

The final step is the ‘Check your answers’ page. We show a summary list containing the following:

- accredited provider name
- training partner name
- linked accreditations

Users can change the selected provider and the linked accreditations.

Once users select ‘Save partnership’, they return to the provider partnerships list page, and we display a ‘Partnership added’ success message.

### Changing a partnership

Users can change the linked accreditations in a partnership, nothing else. This approach allows users to keep the partnership information up to date when provider accreditations change.

### Deleting a partnership

We only soft-delete data. This approach allows us to maintain a historical record whilst keeping the register free of outdated or incorrect information.

Users can delete a partnership at any time. We display a confirmation page before deleting the partnership.

## Open questions

Does this approach to partnerships confuse users?

Do we need to pin the partnership to the exact accreditation version in force on the start date, or allow links to a superseding accreditation if the scope is unchanged?

Should we also require an academic year at partnership creation to simplify time-based queries?

What is the minimum set of accreditation attributes to surface in the register to reduce cognitive load while keeping the record useful?
