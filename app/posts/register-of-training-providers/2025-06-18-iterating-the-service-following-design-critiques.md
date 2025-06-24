---
title: Iterating the service following design critiques
description: We iterated the service following three structured design critique sessions
date: 2025-06-18
tags:
  - design critique
related:
  items:
    - text: Running design critiques to improve the service
      href: /register-of-training-providers/running-design-critiques-to-improve-the-service/
---

We made several improvements to the service following [three structured design critique sessions](/register-of-training-providers/running-design-critiques-to-improve-the-service/).

These changes were driven by feedback from participants across policy, product, delivery, and design roles, with a focus on improving clarity, usability, and data understanding.

## What we changed

### Showing the URN for all provider types

We updated the provider details form and associated summary lists to show the unique reference number (URN) field for all provider types, not just schools. This change ensures consistency and enables users to enter or verify URNs as needed.

![Screenshot showing the provider list item](providers--list-item.png "Screenshot showing the provider list item")

![Screenshot showing the provider details summary](provider-details--summary-list.png "Screenshot showing the provider details summary")

![Screenshot showing the provider details form for a new provider](add-provider--form.png "Screenshot showing the provider details form for a new provider")

![Screenshot showing the provider details form for an existing provider](update-provider--form.png "Screenshot showing the provider details form for an existing provider")

![Screenshot showing the update provider details check your answers](update-provider--check-your-answers.png "Screenshot showing the update provider details check your answers")

### Consolidating address information

We grouped address details into a single block of content, rather than showing each attribute on a separate line. This change makes the address easier to scan and more closely matches how people expect to read addresses.

![Screenshot showing the add provider address check your answers](provider-address--check-your-answers.png "Screenshot showing the add provider address check your answers")

![Screenshot showing the provider address list item](provider-address--list-item.png "Screenshot showing the provider address list item")

### Contextual help and error messages for accredited provider numbers

We added help text to the accredited provider number field, tailored to the selected provider type. If a user tries to submit the form without an accredited provider number, the error message also adapts depending on the provider type. This change improves the guidance users receive and helps prevent confusion or incorrect submissions.

#### Contextual hint

If the provider type is a higher education institution (HEI), we show the hint:

> A unique 4 digit code starting with ‘1’ assigned by DfE to accredited providers, for example, 1234

![Screenshot showing the contextual hint message for higher education institutions (HEIs)](contextual-hint--hei.png "Screenshot showing the contextual hint message for higher education institutions (HEIs)")

If the provider type is a school-centred initial teacher training (SCITT) organisation, we show the hint:

> A unique 4 digit code starting with ‘5’ assigned by DfE to accredited providers, for example, 5678

![Screenshot showing the contextual help message for school-centred initial teacher training (SCITT)](contextual-hint--scitt.png "Screenshot showing the contextual help message for school-centred initial teacher training (SCITT) organisations")

If the provider is neither an HEI nor a SCITT, we show the message:

> A unique 4 digit code assigned by DfE to accredited providers

#### Contextual error message

If the provider type is an HEI, we show the hint:

> Enter accredited provider number in the correct format, like 1234

![Screenshot showing the contextual error message for higher education institutions (HEIs)](contextual-error--hei.png "Screenshot showing the contextual error message for higher education institutions (HEIs)")

If the provider type is a SCITT, we show the hint:

> Enter accredited provider number in the correct format, like 5678

![Screenshot showing the contextual error message for school-centred initial teacher training (SCITT)](contextual-error--scitt.png "Screenshot showing the contextual error message for school-centred initial teacher training (SCITT)")

If the provider is neither an HEI nor a SCITT, we use the HEI contextual error message:

> Enter accredited provider number in the correct format, like 1234

### Help when adding a partnership

We added help text to the ‘Add partnership’ flow to support users who cannot find the training partner they are searching for. This change addresses a typical edge case and guides how to resolve the issue.

If the user is adding a training partner to an accredited provider, we show the help text:

> I cannot find the training partner
>
> Make sure you’ve spelt the training partner’s name correctly. If you still cannot find it, check that the training partner is already listed in the Register.
>
> You may need to add the training partner first.

![Screenshot showing the contextual help message for missing training partners](contextual-help--training-partners.png "Screenshot showing the contextual help message for missing training partners")

If the user is adding an accredited provider to a training partner, we show the help text:

> I cannot find the accredited provider
>
> Make sure you’ve spelt the accredited provider name correctly. If you still cannot find it, check that the accredited provider is already listed in the Register.
>
> You may need to add the accredited provider first.

![Screenshot showing the contextual help message for missing accredited providers](contextual-help--accredited-providers.png "Screenshot showing the contextual help message for missing accredited providers")

### Simplifying the ‘Check your answers’ page when adding a partnership

We replaced the multiple ‘Change’ links on the ‘Check your answers’ page of the ‘Add partnership’ flow with a single summary card. This change helps users understand what they are changing, and prevents confusion between the training partner and the partnership details.

![Screenshot showing the ‘Add partnership’ check your answers](add-partnership--check-your-answers.png "Screenshot showing the ‘Add partnership’ check your answers")

### Explaining location data

We added help text to explain why the service collects latitude and longitude alongside provider addresses. This change gives users more confidence in how we will use their data and why geolocation is essential.

If we have successfully geocoded the address, we show the message:

> We collect location data to support location-based searches. It’s generated automatically from the address you entered.

![Screenshot showing the location information help text](location-information--help-text.png "Screenshot showing the location information help text")

If we have not successfully geocoded the address, we show the message:

> We were unable to generate location data for this address. We will try again later.

![Screenshot showing we could not generate location information help text](no-location-information--help-text.png "Screenshot showing we could not generate location information help text")

## Why this matters

These changes build on direct user and stakeholder feedback, helping us make the service more predictable, accessible, and transparent. They support users in entering accurate information and help them understand why the system collects specific data.

We will continue to test these changes and monitor how well they support our users’ tasks.
