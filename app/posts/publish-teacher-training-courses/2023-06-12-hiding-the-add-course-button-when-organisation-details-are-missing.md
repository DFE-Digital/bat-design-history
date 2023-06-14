---
title: Hiding the ‘Add course’ button when organisation details are missing
description: We only show the ‘Add course’ button when the provider has entered the required information to create a course
date: 2023-06-12
tags:
  - courses
  - onboarding
screenshots:
  items:
    - text: Missing details - Accredited provider
      src: missing-details--accredited-provider.png
    - text: Missing details - Training partner
      src: missing-details--training-partner.png
---

When the Support team onboards a provider onto Publish teacher training courses (Publish), the user cannot add courses in Publish until they have entered:

- a school
- a study site
- an accredited provider - if the provider is a training partner
- visa sponsorship details

If they have not entered these details, we hide the ‘Add course’ button and replace it with content explaining what they need to do.

For example, if the provider is a training partner, and they have not added schools, study sites or details about their accredited provider, we show:

> Before adding a course, you need to:
>
> - [add a school](https://www.example.com)
> - [add a study site](https://www.example.com)
> - [add an accredited provider](https://www.example.com)

We only show links to content that is missing.

## Further considerations

We considered some changes that we did not implement. These included:

- having a dedicated onboarding flow
- self-service registration

### Dedicated onboarding flow

When the first user accesses Publish, we could create a new flow to capture the essential details needed before adding a course. This flow could replace the list of links on the courses page.

### Self-service registration

When a new provider wants to use Publish, they must contact the Support team and give some basic details to set up their organisation’s account.

These details include:

- provider name
- UK provider reference number (UKPRN)
- ‘Is the organisation an accredited provider?’
- accredited provider ID - if the organisation is an accredited provider
- provider type - for example, higher education institution (HEI), school centred initial teacher training (SCITT) or school
- unique reference number (URN) - if the provider is a school
- contact address

Instead of involving the Support team, we could create a new provider registration flow that captures all the relevant information.

If needed, the Support team could approve the account creation before the provider can access their account.

This change would significantly reduce the administrative burden on the support team and allow for a smoother transition to creating courses for providers.
