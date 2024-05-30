---
title: Initial support for users who work for multiple providers
description: Dipping our toes in to the complex world of organisations, providers, and schools
date: 2021-02-16
related:
  items:
    - text: Round 3 findings
      href: /register-trainee-teachers/beta-prototype-research-round-3/
---

So far, our prototype has been designed to work the simple case - users who work for a single provider. We’re now extending that to look at how it could work for different organisational setups.

In the current DTTP service, trainees are added by accredited providers. The majority of our users work for a single accredited provider, but often a provider represents a partnership of multiple schools, and so about [20% of current DTTP users](/publish-teacher-training-courses/users-with-multiple-organisation-access/) are responsible for inputting ITT data across multiple schools.

Our first step towards supporting multiple providers was looking at how DTTP, Manage and Publish handle them.

On the DTTP service, each accredited provider is kept separate. A user account can be connected to multiple providers - but when signing in, they choose which provider they’re inputting data for. When they need to add trainees for a different provider, they return to the service start and pick the other provider. In this ‘hat model’ the user puts on the ‘hat’ of the provider they want to act as. This is also similar to how Publish works.

Users accounts can also be connected to a lead school to see all trainees for a lead school. For the moment we’re not supporting this as it only applies to routes we’ve not worked on yet.

On Manage, signed-in users can be associated with several organisations of different types - they all trainees simultaneously. There’s no switching hats. Instead, they can filter their application list by provider or organisation. We’ve called this the ‘blended model’.

## What our research has told us so far

Users have not reported significant issues with the DTTP model. They do not mind keeping their data sets separate and “switching hats” when moving between providers. However, this does not necessarily mean it’s the best solution; people who’ve been using the system for some time have got used to and accept the way it works.

We’ve also heard that some accredited providers would like their partner schools to add their trainees directly, rather than the accredited provider doing it for them. This is something we’d like to explore more in the future - but to support it would mean a much more complex model understanding the relationships between various training providers, and who is allowed to do and see what.

## Hat model vs blended model

Which to choose?

The hat model is:

- similar to the current service
- suited to workflows where you work as a single provider at a time

It could be problematic because users may:

- add data to the wrong provider
- need to swap between providers for certain tasks
- need to split their work by provider

The blended model could be a good option because it allows users to:

- view their records in one place
- switch between provider without signing out

However, with this model, users need to:

- specify which provider they’re inputting data for
- select a filter if they want to see just the records that relate to a single provider

## Designs

We’ve started by designing both approaches.

### Hat model

In this model, the user picks a provider to work as immediately after signing in. Thereafter, they can swap providers by clicking the provider name in the header.

![Screenshot of hat model: chooser](hat-model-chooser.png "Hat model: chooser")

![Screenshot of hat model: header.](hat-model-header.png "Hat model: header")

![Screenshot of hat model: task list.](hat-model-task-list.png "Hat model: task list")

### Blended model

The main changes here are the option to filter by provider and the need to pick a provider when adding a trainee.

![Screenshot of blended model: filters.](blended-model-filters.png "Blended model: filters")

![Screenshot of blended model: chooser.](blended-model-chooser.png "Blended model: chooser")

![Screenshot of blended model: task list.](blended-model-task-list.png "Blended model: task list")

### Swapping between models

To help with usability testing and design, we added an internal settings page in the prototype to let us play with various scenarios. This lets us easily try different scenarios - such as a user with access to 5 providers

![Screenshot of provider admin screen.](provider-admin-screen.png "Provider admin screen")

## Testing these designs

We feel that the blended model is likely more flexible for users - as it allows you to either see all records or filter as needed. We’ll need to validate this with users though.
