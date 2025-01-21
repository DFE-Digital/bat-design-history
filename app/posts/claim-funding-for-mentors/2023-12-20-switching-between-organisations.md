---
title: Switching between organisations
description: We added a way for users to switch between organisations if they belong to two or more
date: 2023-12-20
tags:
  - organisations
  - organisation switcher
related:
  items:
    - text: Adding primary navigation to Publish teacher training courses
      href: /publish-teacher-training-courses/adding-primary-navigation-to-the-service/
    - text: Switching between recruitment cycles during rollover on Publish teacher training courses
      href: /publish-teacher-training-courses/switching-between-recruitment-cycles-during-rollover/
screenshots:
  items:
    - text: Organisation list
      src: organisation-list.png
    - text: Organisation switcher
      src: organisation-switcher.png
---

We added a way for users to switch between organisations if they belong to two or more.

We used the same approach employed on other provider and school-facing services, including:

- Publish teacher training courses (Publish)
- Register trainee teachers (Register)

This type of organisation switcher pattern is also used on [GOV.UK Notify](https://www.notifications.service.gov.uk/) and is available in the [MOJ Design System](https://design-patterns.service.justice.gov.uk/components/organisation-switcher/).

## User need

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a multi-academy trust (MAT),
I need to  be able to submit claims on behalf of other schools within our trust,
So that I can reduce the burden on schools to submit claims individually."
}) }}

## Why we use an organisation switcher

We use the organisation switcher pattern because it:

1. reduces cognitive load

    Constantly asking users to select an organisation for every task increases their cognitive load, as they must repeatedly make the same decision.

    The organisation switcher establishes a clear context for users’ actions, allowing them to focus on their tasks without unnecessary interruptions.

2. improves efficiency

    Selecting an organisation once and working within that context eliminates repetitive steps, speeding up workflows.

    This approach is particularly beneficial for tasks that require multiple actions (for example, adding users or claims within the same organisation).

3. minimises errors

    Repeatedly selecting an organisation for every task increases the risk of users accidentally choosing the wrong organisation, leading to errors.

    With an organisation switcher, the context is set once and is visually reinforced, reducing the chance of mistakes.

4. enhances consistency

    Keeping users in a consistent organisational context aligns with how most people work: focusing on one area at a time before switching to another. This consistency avoids the disjointed experience of repeatedly confirming context, making the interaction smoother.

5. provides contextual awareness

    The organisation switcher visually reinforces the active organisation context at all times. This pattern ensures that users always know which organisation they are working on, reducing confusion.

    By contrast, requiring a choice for every task provides no ongoing indication of the broader context.

6. caters to MAT users

    Users who manage multiple organisations, such as those who belong to multi-academy trusts, will benefit significantly from the ability to set context once. They are likelier to perform several tasks within a single organisation before switching.

    This approach supports their workflow without penalising them with unnecessary steps.

7. reduces friction

    In many cases, users will likely focus on one organisation for an extended period. Requiring organisation selection for every task unnecessarily disrupts this natural workflow.

8. aligns with established design patterns

    Organisation switchers are standard in services where users operate across multiple entities. For example, we use an organisation switcher on Publish and Register. Leveraging familiar patterns makes the service more intuitive and easier to adopt.

## How it works

### Signing into the service

When signing in to the service, users see either:

- the list of claims - if they belong to one organisation
- a list of organisations - if they belong to multiple organisations

### Changing organisation

If the user belongs to multiple organisations, they can select which organisation they want to view and easily switch between them.

The organisation ‘switcher’ is above the primary navigation. It includes the current organisation's name and a ‘change organisation’ link.

Everything below the organisation switcher, for example, the primary navigation and the claims list, relates to the chosen organisation.

Changing an organisation displays a list of the user’s organisations. Choosing one of these organisations takes the user to the claims list page, where the selected organisation name is shown in the switcher.

We do not show the organisation switcher if the user only belongs to one organisation.
