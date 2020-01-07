---
title: Onboarding workflow and wizard
description: How does the onboarding process look after UCAS transition?
tags: publish-teacher-training-courses
---
## Current process

UCAS receives a spreadsheet of providers from allocations, they use that sheet to determine which providers are new, or are new lead schools, and they begin their onboarding process – a welcome email and an onboarding call to talk them through web-link.

## New process

Workflow co-designed with UCAS.

[Google diagram](https://docs.google.com/drawings/d/12slZCbsAB8m0-T9s_QGmqFZRxhwF1KfkoiN2g4Xk0mY/edit)

[Prototype](https://manage-courses-prototype.herokuapp.com/onboarding/accept-terms)

[![Onboarding workflow](/images/publish-teacher-training-courses/onboarding-wizard/onboarding-workflow.svg)](https://docs.google.com/drawings/d/12slZCbsAB8m0-T9s_QGmqFZRxhwF1KfkoiN2g4Xk0mY/edit)

### Lead schools

If there’s a lead school change we will treat this as an update to an existing provider rather than a new provider. It means that:

* we’ll need to onboard new users for that lead school onto DfE Sign in
* that new school will have access to all the existing courses and locations
* new lead schools do not need to start from scratch
* the marketing name of the provider shouldn’t change

Changes to lead schools can happen midcycle if a school doesn’t get Good or better in an Ofsted inspection.

### Setting expectations

Setting expecations for users means:

* alerting them to the need for a separate Apply service
* priming them for contact and details from UCAS
* describing need for UCAS web-link
* pointing out UCAS.com account

## Onboarding wizard

We can use a wizard to confirm a provider’s:

* marketing name
* contact details for candidates
* UCAS provider code
* first training location (eg not Main Site)
* UCAS apply preferences
* other users who should have access to Publish

The following designs are an initial first draft.

It’s not clear whether we will have time to build an onboarding wizard, as MVP it may be appropriate to do much of this through support or support templates.

## Screenshots

{% from "gallery/macro.njk" import appGallery with context %}
{{ appGallery({
  items: [
    {text: "Accept terms"},
    {text: "Organisation name"},
    {text: "Provider code"},
    {text: "Ways candidates can contact you"},
    {text: "Add your first location"},
    {text: "Preferences for UCAS Apply"},
    {text: "Request access for people"}
  ]
}) }}
