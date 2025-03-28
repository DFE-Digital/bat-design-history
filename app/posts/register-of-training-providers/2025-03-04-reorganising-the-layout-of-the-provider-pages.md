---
title: Reorganising the layout of the provider pages
description: We updated the provider pages to use secondary navigation and summary cards
date: 2025-03-04
tags:
  - providers
  - secondary navigation
  - summary cards
related:
  items:
    - text: Changing provider details
      href: register-of-training-providers/changing-provider-details/
    - text: Managing provider accreditations
      href: /register-of-training-providers/managing-provider-accreditations/
    - text: Managing provider addresses
      href: /register-of-training-providers/managing-provider-addresses/
    - text: Managing provider contacts
      href: /register-of-training-providers/managing-provider-contacts/
    - text: Managing provider partnerships
      href: /register-of-training-providers/managing-provider-partnerships/
screenshots:
  items:
    - text: Provider details
      src: secondary-navigation--provider-details.png
    - text: Provider accreditations
      src: secondary-navigation--provider-accreditations.png
    - text: Provider accreditations - empty
      src: secondary-navigation--provider-accreditations-empty.png
    - text: Provider addresses
      src: secondary-navigation--provider-addresses.png
    - text: Provider addresses - empty
      src: secondary-navigation--provider-addresses-empty.png
    - text: Provider contacts
      src: secondary-navigation--provider-contacts.png
    - text: Provider contacts - empty
      src: secondary-navigation--provider-contacts-empty.png
    - text: Provider partnerships
      src: secondary-navigation--provider-partnerships.png
    - text: Provider partnerships - empty
      src: secondary-navigation--provider-partnerships-empty.png
---

Previously, each training provider’s details were presented on a single, lengthy page. While this gave users access to all information at once, it posed significant usability issues:

- information overload – users had to scroll extensively to find specific details, which could feel overwhelming and frustrating, particularly on mobile devices

- discoverability issues – with all content grouped onto a single page, critical information could easily be overlooked or harder to reference quickly

- interaction constraints – a single long page made it impossible to implement interactions such as pagination, sorting, filtering, or search within individual sections

We introduced a secondary (horizontal) navigation to resolve these issues by clearly dividing provider information into logical sections. This offers several advantages:

- improved findability – users can directly navigate to specific sections, making information retrieval quicker and more intuitive

- enhanced readability – breaking content into smaller, manageable sections prevents cognitive overload and enhances clarity

- scalability and flexibility – a structured navigation pattern allows for quickly incorporating future changes or new sections without significantly impacting the existing user experience

- supports richer interactions – separate sections remove previous interaction constraints, allowing for pagination, sorting, filtering, and targeted search within each section, improving users’ ability to manage, explore, and quickly locate specific items

## What we changed

We have updated the provider details pages to include:

- secondary navigation
- summary cards
- pagination

## How it works

### Secondary navigation

![Example secondary navigation](secondary-navigation-example.png "Example secondary navigation")

The secondary navigation helps users navigate around the provider’s details. The design is based upon the [GOV.UK service navigation component](https://design-system.service.gov.uk/components/service-navigation/).

For each provider, the secondary navigation contains items for:

- provider details
- accreditations
- addresses
- contacts
- partnerships

When a user navigates to a provider details page, the default section highlighted in the secondary navigation is “Provider details”.

#### Accreditations section

![Accreditations section](secondary-navigation--provider-accreditations.png)

The accreditation section includes:

- “Accreditations” subtitle
- “Add accreditation” button
- list of accreditations
- pagination

If the provider has one or more accreditations, we include the number in the subtitle, for example, “Accreditations (5)”.

If the provider does not have any accreditations, we show a message:

> There are no accreditations for [provider name].

When users add, change or remove an accreditation, we show the success message above the page heading.

#### Addresses section

![Addresses section](secondary-navigation--provider-addresses.png)

The addresses section includes:

- “Addresses” subtitle
- “Add address” button
- list of addresses
- pagination

If the provider has one or more addresses, we include the number in the subtitle, for example, “Addresses (5)”.

If the provider does not have any addresses, we show a message:

> There are no addresses for [provider name].

When users add, change or remove an address, we show the success message above the page heading.

#### Contacts section

![Contacts section](secondary-navigation--provider-contacts.png)

The contacts section includes:

- “Contacts” subtitle
- “Add contact” button
- list of contacts
- pagination

If the provider has one or more contacts, we include the number in the subtitle, for example, “Contacts (5)”.

If the provider does not have any contacts, we show a message:

> There are no contacts for [provider name].

When users add, change or remove a contact, we show the success message above the page heading.

#### Partnerships section

![Partnerships section](secondary-navigation--provider-partnerships.png)

The partnerships section includes:

- “Partnerships” subtitle
- “Add partnership” button
- list of partnerships
- pagination

If the provider has one or more partnerships, we include the number in the subtitle, for example, “Partnerships (5)”.

If the provider does not have any partnerships, we show a message:

> There are no partnerships for [provider name].

When users add or remove a partnership, we show the success message above the page heading.

### Summary cards

We use the [GOV.UK summary cards component](https://design-system.service.gov.uk/components/summary-list/#summary-cards) in the following sections:

- accreditations
- addresses
- contacts
- partnerships

We show a summary list containing details for each item in the section. Using the summary card lets us visually separate each summary list and give each a title and some actions.

#### Accreditation summary card

![Example accreditation summary card](summary-card-example--accreditation.png "Example accreditation summary card")

For each accreditation summary card, we show:

- “Accreditation” followed by the accredited provider number as the card title - for example, “Accreditation 5728”
- “Remove” and “Change” links
- a summary list containing:
  - accredited provider number
  - date accreditation starts
  - date accreditation ends - if entered

For information missing in the summary list, for example, the date accreditation ends, we show ‘Not entered’ and use the secondary text colour (mid-grey).

#### Address summary card

![Example address summary card](summary-card-example--address.png "Example address summary card")

For each address summary card, we show:

- the town and postcode as the card title - for example, “Wakefield, WF1 2PF”
- “Remove” and “Change” links
- a summary list containing:
  - address line 1
  - address line 2
  - address line 3
  - town or city
  - county
  - postcode

#### Contact summary card

![Example contact summary card](summary-card-example--contact.png "Example contact summary card")

For each contact summary card, we show:

- the first name and last name as the card title - for example, “Charlotte Hobson”
- “Remove” and “Change” links
- a summary list containing:
  - first name
  - last name
  - email address
  - telephone number

For information missing in the summary list, for example, the email address, we show ‘Not entered’ and use the secondary text colour (mid-grey).

#### Partnership summary card

![Example partnership summary card](summary-card-example--partnership.png "Example partnership summary card")

For each partnership summary card, we show:

- the operating name as the card title - for example, “NIoT@Alban TSH”
- a “Remove” link
- a summary list containing:
  - provider type
  - operating name - including a link to the provider’s details page
  - legal name
  - UK provider reference number (UKPRN)
  - unique reference number (URN) - if the provider type is “school”
  - provider code

For information missing in the summary list, for example, the provider’s legal name, we show ‘Not entered’ and use the secondary text colour (mid-grey).

### Pagination

![Example pagination](pagination-example.png "Example pagination")

We include pagination below each list. If the list contains more than 25 items, we show the standard [GOV.UK pagination component](https://design-system.service.gov.uk/components/pagination/).
