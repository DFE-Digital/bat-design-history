---
title: Adding primary navigation to the service
description: Helping users navigate parts of the service with primary navigation
date: 2022-03-25
screenshots:
  items:
    - text: Single organisation user - lead school
      src: primary-navigation--single-organisation-user-lead-school.png
    - text: Single organisation user - accredited body
      src: primary-navigation--single-organisation-user-accredited-body.png
    - text: Multiple organisation user - lead school
      src: primary-navigation--multiple-organisation-user-lead-school.png
    - text: Multiple organisation user - accredited body
      src: primary-navigation--multiple-organisation-user-accredited-body.png
    - text: Change organisation
      src: organisation-list.png
    - text: Your account
      src: your-account.png
---

When a user signs in to the service they must go through a number of steps before reaching the service’s home page.

These steps include:

- accepting terms and conditions - if they have previously not done so
- being asked to prepare for the next recruitment cycle - if they sign in during the ‘rollover’ period
- choosing an organisation - if they belong to multiple organisations
- completing their PE allocation request - if the organisation the user belongs to is an accredited body and they have signed in during the ‘allocation’ period
- choosing the current or next cycle page - if they sign in during the ‘rollover’ period

The rollover period is between [MONTH] and [MONTH].

The PE allocation period is between [MONTH] and [MONTH].

The home page includes guidance and links to the following sections:

- About your organisation
- Locations
- Courses
- Courses as an accredited body - if the provider the user belongs to is an accredited body
- View your PE allocations - if the provider the user belongs to is an accredited body
- Users - shown in a grey sidebar

If the user goes to one of the sections, they can return to the page by clicking on the service name in the header. They cannot move to another section without first going back.

## Data analysis

Using the Publish database, we looked at the:

- number of organisations per user
- length of organisation names

### Number of organisations per user

Understanding the relationship between users and organisations helps us make decisions about:

- when to show specific interface elements
- what content to show

For example, we show a way to change organisation if the users who belongs to multiple organisations.

From the data we can see that:

- 82% of users belong to 1 organisation
- 11% belong to 2 organisations
- 7% belong to more than 2 organisations
- Average number of organisations per user: 1.5
- Maximum number of organisations per user: 16

This data suggests that few users will need to choose an organisation when managing their courses.

We also need to make it possible for the users who belong to multiple organisations, to easily change their organisation.

### Length of organisation names

- Average length of organisation name: 28 characters
- Maximum length of organisation name: 95 characters
- Minimum length of organisation name: 3 characters

We need to make it easy for the signed-in user to distinguish between multiple organisations.

### Length of provider names

- Average length of provider name: 28 characters
- Maximum length of provider name: 95 characters
- Minimum length of provider name: 3 characters

We need to make it easy for the signed-in user to distinguish between multiple organisations.

## What we changed

We have:

- added a primary navigation bar
- added a way for users to change their organisation - if they belong to multiple organisations
- updated breadcrumbs to better match the structure of the service
- updated backlinks
- updated heading captions

## How it works

### Primary navigation

### Changing organisation

### Breadcrumbs

### Backlinks

### Heading captions

## Further considerations

In future we may consider:

- how to change the recruitment cycle when users sign in during the rollover period
- what menu options are available to different types of users based on their permissions
- combine courses the organisation runs and courses the organisation’s partners run into one list that can be filtered
