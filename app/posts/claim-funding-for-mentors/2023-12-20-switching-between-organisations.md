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
