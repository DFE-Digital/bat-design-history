---
title: Updating the service to align with the new GOV.UK brand
description: We updated the service to reflect the new GOV.UK brand guidelines, which all government services must adopt by the end of June 2025
date: 2025-05-02
tags:
  - gov.uk
  - reband
  - brand
screenshots:
  items:
    - text: Provider list
      src: provider-list.png
    - text: Provider details
      src: provider-details.png
    - text: Your account
      src: your-account.png
---

We’ve updated the design of the Register of training providers service to reflect the new GOV.UK brand guidelines, which all government services must adopt by the end of June 2025.

## What we changed

We have updated the:

- header
- service navigation
- secondary navigation
- footer
- phase banner

### Header

![Rebranded GOV.UK header - signed out version](govuk-header--signed-out.png "Rebranded GOV.UK header - signed out version")

![Rebranded GOV.UK header - signed-in version](govuk-header--signed-in.png "Rebranded GOV.UK header - signed in version")

We replaced the old [GOV.UK header](https://design-system.service.gov.uk/components/header/) with the new branded version. This includes removing the service name from the header, as per the new design standard.

We still need to determine where to put the “Your account” and “Sign out” links. We have two options:

- implement a GOV.UK One Login style header, which includes the two links
- move the two links into the service navigation and right align them

### Service navigation

![Rebranded GOV.UK service navigation](govuk-service-navigation.png "Rebranded GOV.UK service navigation")

We updated the [service navigation](https://design-system.service.gov.uk/components/service-navigation/) pattern and added the service name here, as recommended. This makes the service name more visible and clearly associates it with the navigation.

### Secondary navigation

![Updated secondary navigation](secondary-navigation.png "Updated secondary navigation")

We restyled the secondary navigation to visually match the new service navigation pattern. It does not follow the design exactly – for instance, the background remains white (rather than pale blue), and the bottom border is grey instead of dark blue – but the hierarchy and interaction patterns are consistent.

### Footer

![Rebranded GOV.UK footer](govuk-footer.png "Rebranded GOV.UK footer")

We applied the new [GOV.UK footer](https://design-system.service.gov.uk/components/footer/) style, including a pale blue background and updated Royal Crest. This brings the prototype in line with the current branding expectations.

### Phase banner

We have moved the [GOV.UK phase banner](https://design-system.service.gov.uk/components/phase-banner/) to below the service navigation.

## Why we changed it

These changes were made to align with the GOV.UK Design System’s updated branding guidance. The updates are required across all government services to ensure a consistent and accessible experience for users.

## Further considerations

We’ll monitor for any additional updates to the guidance before the end-of-June deadline and adjust the service if needed. Some visual differences (such as secondary navigation colour treatment) may be revisited as GOV.UK components evolve.
