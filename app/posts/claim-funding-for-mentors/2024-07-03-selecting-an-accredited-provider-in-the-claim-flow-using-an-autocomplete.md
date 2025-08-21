---
title: Selecting an accredited provider in the claim flow using an autocomplete
description: We added a way for users to find their accredited provider using an autocomplete when they create a claim
date: 2024-07-03T12:00:00+00:00
tags:
  - claims
  - accredited providers
  - autocomplete
related:
  items:
    - text: Selecting an accredited provider in the claim flow when JavaScript is unavailable
      href: /claim-funding-for-mentors/selecting-an-accredited-provider-in-the-claim-flow-when-javascript-is-unavailable/
    - text: Submitting claims for funding
      href: /claim-funding-for-mentors/submitting-claims-for-funding/
    - text: Preventing duplicate mentor-provider claims
      href: /claim-funding-for-mentors/preventing-duplicate-mentor-provider-claims/
screenshots:
  items:
    - text: Find an accredited provider
      src: add-claim--find-accredited-provider.png
    - text: Find an accredited provider autocomplete
      src: add-claim--find-accredited-provider-autocomplete.png
    - text: Find an accredited provider with an error message
      src: add-claim--find-accredited-provider-error.png
---

In private beta, we only have two accredited providers:

- Best Practice Network
- NIoT: National Institute of Teaching, founded by the School-Led Development Trust

Since we only have two providers, we show users the two as radio buttons. However, when the service moves to public beta, users will have access to 170 accredited providers, which is too many to show in a list of radio buttons.

In our service and other services in Becoming a teacher (BAT), we use autocompletes to help users find and select organisations, including accredited providers. We decided to do the same in the claim flow.

## How it works

The first step in the ‘Add claim’ flow is to select the accredited provider.

Users can search for accredited providers by entering the accredited provider’s name, UK provider reference number (UKPRN), unique reference number (URN) or postcode.

We display the list of providers in an autocomplete.

We use accredited provider data from Publish teacher training courses and display it in an autocomplete.

We display the accredited provider name and UKPRN or URN for each provider in the list. This information allows users to choose correctly from similarly named providers.

If the user does not enter an accredited provider name, UKPRN, URN or postcode before submitting the page, we show the error message:

> Enter an accredited provider name, UKPRN, URN or postcode

Once the user has selected the accredited provider, they can continue on to the next step in the claim flow as normal.

## Public beta

When we moved to public beta, we accidentally included all providers in the autocomplete, not just the accredited ones. At first, we didn’t realise this, so users could see both accredited and non-accredited providers in the list.

After spotting the issue, we added a filter so only accredited providers would appear. Before this fix, users could create claims for providers that weren’t eligible for funding, so we introduced a new claim status of “invalid provider” to flag these cases.

Some users also noticed their provider was missing from the autocomplete. After investigating, we found that we we were using the latest data set, not the one for the current academic year. Updating our API endpoint fixed this and we've received no further reports of missing providers.

The main take away from this work is that it’s important to document external data sources, as this knowledge can easily get lost. We also reflected on the importance of surfacing design histories and key artefacts as part of handover between teams, and recognised that this was in part due to the the prototype breaking just before handover and key information getting lost.
