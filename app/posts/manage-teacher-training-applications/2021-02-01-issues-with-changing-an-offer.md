---
title: Issues with changing an offer
description: Various issues with changing the details of an offer as a user who belongs to an accredited body or a school direct
date: 2021-02-01
---

The way changing an offer works as an accredited body or school direct can be buggy, confusing and inconsistent.

## Changing the training provider if you’re an accredited body

Scenario:

> Given I belong to an accredited body
> Who ratifies courses at multiple training providers
> And I have the ‘make decisions’ permission
> When I click ‘change provider’
> I am taken to a page with just my accredited body as a pre-selected radio button

Issues:

- There shouldn’t be a ‘change’ link if the user cannot actually change the provider.
- It says ‘provider’ on the offer panel and it says ‘training provider’ on the next screen, but it actually shows the accredited body.

Questions:

- Should we give the user a list of all school direct partners? Probably.

## Changing the course if you’re an accredited body

Scenario:

> Given I belong to an accredited body
> Who ratifies courses at the training provider
> And I have the ‘make decisions’ permission
> When I click ‘change course’
> I am taken to a page that lists all the courses that the training provider runs

Issues:

- The user should only see courses that they accredit.
- The ‘change’ link appears because the selected training provider has multiple courses - it should only appear if the currently selected training provider runs multiple courses that the accredited body ratifies.
- The accredited body can select a course they don’t ratify and then when they try and complete the flow, they see an error.

## Changing to a course if you’re a school direct

Scenario:

> Given I belong to a school direct
> Who runs courses ratified by multiple accredited bodies
> And I have the ‘make decisions’ permission
> When I click ‘change course’
> And I select a course that is
> I am taken to a page that shows all my courses

Issues:

- If the user selects a course ratified by a different accredited body and try to complete the flow, they see an error.
- Users cannot see the accredited body for each course radio button.

## Next steps

We intend to explore better ways to make the offer panel and subsequent flows clearer. One way may include giving users a single change link which takes the user down a flow similar to the candidate service
