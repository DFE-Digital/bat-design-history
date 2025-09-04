---
title: The principles underpinning the Register of placement schools
description: Addressing common data challenges faced by the DfE and the Becoming a teacher service line
date: 2025-07-28
tags:
  - principles
  - register
related:
  items:
    - text: The principles underpinning the Register of training providers
      href: /register-of-training-providers/the-principles-underpinning-the-register-of-training-providers/
    - text: The characteristics of a register
      href: /register-of-training-providers/the-characteristics-of-a-register/
    - text: Get information about schools
      href: https://get-information-schools.service.gov.uk/
---

The Register of placement schools addresses common data issues faced by the Department for Education (DfE) and the Becoming a teacher (BAT) service line.

This register will provide a single, reliable view of which schools host ITT placements, their partners, and the corresponding academic years. It focuses on structured, relationship data that other services can trust and reuse.

## The data problems we need to solve

DfE services need clear and timely information about placement activity. Today, they often encounter issues such as:

- separate spreadsheets and local databases that are hard to combine
- uncertainty about which schools hosted trainees in a given academic year
- duplicate lists of schools that use different identifiers or names
- inconsistent attributes, such as region or education phase
- delays between activity in the sector and what downstream services can see

## Centralised and structured relationship data

The register brings together structured, reliable data about relationships between accredited providers, their training partners and schools. It treats the academic year as a first-class part of that relationship.

This centralisation lets service teams search and compare placement participation quickly. It also ensures everyone works from the same source of truth.

The register will let users browse and query by key attributes, for example:

- provider
- academic year
- region
- education phase

The register will not duplicate school records that already exist in [Get information about schools (GIAS)](https://get-information-schools.service.gov.uk/). Instead, it will reference schools by their unique reference number (URN) and pull labels from GIAS, so teams see familiar names, statuses, and attributes.

## Up-to-date and accessible data

We will keep relationship data current and easy to consume. For example:

- users of the register will be able to download data on demand in comma-separated values (CSV) and OpenDocument Spreadsheet (ODS) formats, with clear data dictionaries
- a standard application programming interface (API) will expose relationships as they change, so integrated services receive updates automatically
- a public-facing service will enable people to search by location, provider, or school. It will use the same API and datasets, provide clear scope and signposting, and make participation visible without needing a data export

## Clean, high-quality data

The register will maintain completeness, accuracy and standardisation. We will:

- use authoritative identifiers: for example, URN for schools, UK provider reference number (UKPRN) for providers
- reconcile names and statuses against GIAS
- prevent duplicates and enforce one record per provider–school–academic year
- follow government data formatting standards and use controlled vocabularies for fields like region and education phase
- keep an audit trail so teams can see who changed what and when

By maintaining the line on quality, the register reduces the effort required for downstream services. Teams can focus on building features rather than cleaning and checking data.

## What this unlocks

With a single, trusted view of placement participation, teams can:

- understand placement school coverage
- spot gaps and overlaps without merging multiple spreadsheets
- design user journeys that rely on stable, consistent data
- evaluate changes across academic years, regions and other contrast factors with confidence
