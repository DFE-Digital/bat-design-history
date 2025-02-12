---
title: Updating the files we send to providers to assure claims
description: Details of how we iterated the CSV (comma separated value) file for providers to match their needs
date: 2024-12-02
tags:
  - research
  - accredited providers
  - sampling
related:
  items:
  - text: Round 6 accredited provider research findings
    href: /claim-funding-for-mentors/round-6-accredited-provider-research-findings/
---

## Introduction

[Round 6 accredited provider research](/claim-funding-for-mentors/round-6-accredited-provider-research-findings/) highlighted that the information provided in the first iteration of the CSV (comma separated value) file was insufficient for them to assure their claims.

## CSV contents

The CSV that we shared with providers contained the following information:

- claim reference
- school name
- school unique reference number (URN)
- claim hours

The CSV included two additional columns so that the providers could assure each claim and add information into each column:

- claim assured (providers to indicate yes/true or no/false)
- claim not assured reason (providers to indicate a reason if they had marked the claim as not assured)

## Research findings

During round 6, we shared a CSV with the providers so that they could review whether the information matched their needs so that they could accurately assure the claims.

The users stated that the current amount of information was insufficient and recommended that the following information be shared:

- school postcode
- individual mentor names for each claim
- individual claim hours for each mentor, not the overall claim amount
  
Providing this information would enable accredited providers to assure the claims accurately.

## Updated CSV for providers

As a result of the user research, we updated the CSV to include all the following information:

- claim reference
- school name
- school unique reference number (URN)
- school postcode
- individual mentor names for each claim
- individual claim hours for each mentor, not the overall claim amount

We removed:

- the total claim hours

For each mentor, rather than the overall claim, providers could input information into the two columns:

- claim assured (providers to indicate yes/true or no/false)
- claim not assured reason (providers to indicate a reason if they had marked the claim as not assured)

## User needs

As a result of updating the CSV, we hypothesized that we were able to meet the following user need:

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
description: "As a provider,
I need data related to a claim to match the data that we collect,
So that we can easily and correctly check the claims against our records when sampling."
}) }}

## Next steps

In the next round of provider user research, we will share the CSV and validate whether the above user need has been met so that they can successfully assure their claims.
