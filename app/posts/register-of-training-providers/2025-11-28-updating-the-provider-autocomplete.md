---
title: Updating the provider autocomplete
description: We updated the provider autocomplete to improve the information hierarchy and interaction design
date: 2025-11-28
tags:
  - accredited providers
  - training partners
  - autocomplete
related:
  items:
    - text: Iterating on how we set up partnerships between providers
      href: /register-of-training-providers/iterating-on-how-we-set-up-partnerships-between-providers/
    - text: Accessible autocomplete component
      href: https://alphagov.github.io/accessible-autocomplete/
screenshots:
  items:
    - text: Enter training partner
      src: enter-training-partner.png
    - text: Enter training partner autocomplete
      src: enter-training-partner--autocomplete.png
    - text: Enter training partner autocomplete (highlighted state)
      src: enter-training-partner--autocomplete-highlighted-state.png
    - text: Enter training partner - provider selected
      src: enter-training-partner--provider-selected.png
    - text: Enter accredited provider
      src: enter-accredited-provider.png
    - text: Enter accredited provider autocomplete
      src: enter-accredited-provider--autocomplete.png
    - text: Enter accredited provider autocomplete (highlighted state)
      src: enter-accredited-provider--autocomplete-highlighted-state.png
    - text: Enter accredited provider - provider selected
      src: enter-accredited-provider--provider-selected.png
---

We updated the provider autocomplete to improve the information hierarchy and interaction design.

## What we changed

We have:

- added provider code to the search terms and updated the form heading to indicate the addition
- added a template to the autocomplete to separate provider name from provider code, UKPRN and URN
- updated the selected state for the provider name to remove the UKPRN in parentheses

## How it works

When users add partnerships, we use an autocomplete to help users find and select the correct provider.

Users can search for providers by entering the provider’s name, provider code, UK provider reference number (UKPRN), unique reference number (URN) or postcode.

If the current provider is accredited, autocomplete only includes training partners.

The autocomplete only includes accredited providers if the current provider is not accredited.

For each provider, we show:

- provider name
- provider code, UKPRN and URN - below the provider name

This information enables users to select the correct provider from among similarly named options.

When the user selects a provider from the list, we display the provider’s name in the text input.
