---
title: Issues with changing an offer
description: Various issues with changing the details of an offer as a user who belongs to an accredited body or a school direct
date: 2021-02-01
---

The way changing an offer works as an accredited body and school direct can be buggy, confusing and inconsistent.

## Changing the provider as an accredited body

Scenario:

> Given I belong to an accredited body
> Who ratifies courses at multiple training providers
> And I have the ‘make decisions’ permission
> When I click ‘change provider’
> I am taken to a page with just my accredited body as a pre-selected radio button
> And I cannot change the provider

Issues:

- The list should contain all the school directs they can change to
- There shouldn’t be a ‘change’ link if the user cannot actually change the provider.
- It says ‘provider’ on the offer panel and it says ‘training provider’ on the next screen, but it actually shows the accredited body.

Questions:

- Should we give the user a list of all school direct partners? Probably.

## Changing the course as an accredited body

Scenario:

> Given I belong to an accredited body
> Who ratifies courses at the training provider
> And I have the ‘make decisions’ permission
> When I click ‘change course’
> And I select a course that I do not ratify
> And I try and complete the flow
> I get an error preventing me from doing that

Issues:

- The user should only see courses that they ratify.
- The ‘change’ link appears because the selected training provider has multiple courses - it should only appear if the currently selected training provider runs multiple courses that the accredited body ratifies.

## Changing to a course ratified by a different accredited body as a school direct

Scenario:

> Given I belong to a school direct
> Who runs courses ratified by multiple accredited bodies
> And I have the ‘make decisions’ permission
> When I click ‘change course’
> And I select a course that’s ratified by a different accredited body
> And I try and complete the flow
> I get an error preventing me from doing that

Issues:

- The school direct should be able to change to any course they run, but we need to understand any implications of doing this, especially from the accredited body perspective.
- The accredited body for each course should be shown for each radio button.
