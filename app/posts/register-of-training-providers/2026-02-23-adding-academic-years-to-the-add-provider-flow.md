---
title: Adding academic years to the add provider flow
description: We added an 'Academic years' question to the add provider flow so we know which academic years a provider has delivered initial teacher training
date: 2026-02-23
tags:
  - providers
  - academic years
  - add provider
related:
  items:
    - text: Adding providers to the register
      href: /register-of-training-providers/adding-providers-to-the-register/
    - text: Adding academic year information to the provider list
      href: /register-of-training-providers/adding-academic-year-information-to-the-provider-list/
    - text: Adding academic years to the provider details page
      href: /register-of-training-providers/adding-academic-years-to-the-provider-details-page/
    - text: Iterating on how we set up partnerships between providers
      href: /register-of-training-providers/iterating-on-how-we-set-up-partnerships-between-providers/
---

When a provider is onboarded to the register, we do not know which academic years they have delivered initial teacher training (ITT), or whether they are currently active. Other services, such as Publish teacher training courses, need to retrieve provider data for a specific academic year or recruitment cycle. Without this information, they cannot identify which providers are relevant to them.

We already capture academic years for provider partnerships. However, not all providers need a partnership to deliver ITT. School-centred initial teacher training providers (SCITTs) can run and ratify courses without an accredited provider or training partner relationship. Without a partnership, there is no way to derive the academic year from existing data.

We added an 'Academic years' question to the add provider flow to address this.

## What we changed

We added a new step to the add provider flow. The flow now has seven steps:

1. Is the provider accredited?
2. Provider type
3. Provider details
4. Academic years
5. Accreditation details, if the provider is accredited
6. Address details, using a postcode address finder
7. Check your answers

## How it works

### Select academic years

The fourth step in the flow is to select one or more academic years.

We show a list of checkboxes. Each checkbox is labelled with the academic year. We include hint text showing the start and end dates of that year.

We add a suffix to the most recent academic years so users can identify where they are in the cycle at a glance:

- next: the upcoming academic year
- current: the year in progress
- last: the year just ended

For example:

- 2026 to 2027 - next
  1 August 2026 to 31 July 2027
- 2025 to 2026 - current
  1 August 2025 to 31 July 2026
- 2024 to 2025 - last
  1 August 2024 to 31 July 2025

We show academic years in reverse chronological order, from 2026 to 2027 back to 2019 to 2020. We assume users are more likely to need recent academic years than older ones.

Each year, when the new academic year starts, the suffixes move forward. For example, 'next' becomes 'current', 'current' becomes 'last', and 'last' no longer has a suffix.

This question is required. If a user does not select at least one academic year, we show an error message:

> Select academic year

### Check your answers

We added an 'Academic years' section to the check your answers page, after the provider details section and before accreditation details.

The section includes a summary list showing the selected academic years. We include the 'next', 'current' and 'last' suffixes where relevant.

Users can change the academic years from this page. The change link returns them to the academic years question.

Once users save the provider, we return them to the provider list and display a 'Provider added' success message.

## Further considerations

We considered some changes that we did not implement. These included:

- pre-selecting academic years based on other information
- deriving academic years from partnership data

### Pre-selecting academic years based on other information

We considered whether to pre-select the current academic year by default. This would reduce the burden on users onboarding providers who are actively delivering ITT.

However, pre-selecting a checkbox can lead users to overlook it and submit without reviewing their selection. We decided to leave all options unselected and require users to make a deliberate choice.

### Deriving academic years from partnership data

Where a provider has existing partnership data, we could derive the academic years the provider has delivered ITT rather than asking users to select them.

We decided not to do this because not all providers have partnerships. Deriving years for some providers but not others would lead to inconsistency in how the data is collected and maintained.

*[HEI]: higher education institution
*[ITT]: initial teacher training
*[SCITT]: school-centred initial teacher training
