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

- Publish teacher training courses
- Register trainee teachers

This organisation switcher pattern is also used on [GOV.UK Notify](https://www.notifications.service.gov.uk/) and is available in the [MOJ Design System](https://design-patterns.service.justice.gov.uk/components/organisation-switcher/).

## User need

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a multi-academy trust,
I need to  be able to submit claims on behalf of other schools within our trust,
So that I can reduce the burden on schools to submit claims individually."
}) }}

## Why we use this pattern

We use the organisation switcher pattern because it:

1. reduces cognitive load

    Constantly asking users to select an organisation for every task increases their cognitive load, as they must repeatedly make the same decision.

    The organisation switcher establishes a clear context for their actions, allowing users to focus on the tasks at hand without unnecessary interruptions.

2. improves efficiency

    Selecting an organisation once and working within that context eliminates repetitive steps, speeding up workflows.

    This is particularly beneficial for tasks that require multiple actions (e.g., adding multiple users or claims within the same organisation).

3. minimises errors

      Repeatedly selecting an organisation for every task increases the risk of users accidentally choosing the wrong organisation, leading to errors.

      With an organisation switcher, the context is set once and is visually reinforced, reducing the chance of mistakes.

4. enhances consistency

    Keeping users in a consistent organisational context aligns with how most people work – focusing on one area at a time before switching to another.

    It avoids the disjointed experience of repeatedly confirming context, making the interaction smoother.

5. supports task flow

    Many tasks (for example, adding a mentor or making a claim) involve multiple sequential actions. With an organisation switcher, users can complete all related tasks within the same context without interruptions.

    This streamlines processes, making the service feel intuitive and responsive.

6. provides contextual awareness

    The organisation switcher visually reinforces the active organisation context at all times. This ensures that users always know which organisation they work on, reducing confusion.

    By contrast, requiring a choice for every task provides no ongoing indication of the broader context.

7. caters to power users

    Users who manage multiple organisations will benefit significantly from the ability to set context once, as they are more likely to perform several tasks within a single organisation before switching.

    This approach supports their workflow without penalising them with unnecessary steps.

8. reduces friction for common use cases

    In many cases, users will likely focus on one organisation for an extended period. Requiring organisation selection for every task unnecessarily disrupts this natural workflow.

    The switcher accommodates this common pattern while still allowing quick changes when necessary.

9. aligns with established design patterns

    Organisation switchers are a common pattern in systems where users operate across multiple entities. Leveraging familiar patterns makes the service more intuitive and easier to adopt.

10. encourages task completion

    Repeated organisation selection can feel burdensome and frustrating, potentially discouraging users from completing tasks.

    An organisation switcher eliminates these unnecessary hurdles, encouraging users to complete their work efficiently.

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
