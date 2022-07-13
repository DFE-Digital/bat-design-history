---
title: Adding an overview page and filters to help users prioritise their work
description: We added a new overview page and filters to compensate for removing priority headings from the application list.
date: 2022-03-16
screenshots:
  items:
    - text: Overview page
      src: overview.png
    - text: Application list after user clicks blue block to view offers with conditions pending from the previous recruitment cycle
      src: application-list--conditions-pending-previous-cycle.png
    - text: Application list filtered to show application which needs feedback, marked with ‘Feedback needed’
      src: application-list--filtered-feedback-needed.png
tags:
  - AN029
  - MN021
  - MN030
---

We removed the priority headings from the application list as part of the work to let users [sort the application list in different ways](/manage-teacher-training-applications/sorting-the-application-list-in-different-ways/).

This means it’s much harder for users to spot:

- applications that are close to being automatically rejected
- automatically rejected applications that need feedback
- deferred offers that are ready to be confirmed
- offers with pending conditions from the previous recruitment cycle

Users need to be able to find these types of applications so that they can plan their work.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## What we changed

We added:

- an ‘important’ category of filters
- an indication in the application list that an application needs feedback
- an overview page

### Adding an ‘important’ category of filters

We added an ‘important’ category which lets users filter by applications that:


- have 5 days or fewer to make a decision
- were automatically rejected and need feedback
- had offers made and deferred which are now ready to be confirmed

### Indicating in the application list that an application needs feedback

The words ‘Feedback needed’ appear in the application list to indicate automatically rejected applications that have not received feedback.

### Adding an overview page

Users will be taken to the overview page when they sign in. It highlights important information that could easily be missed, as it would rely on users selecting certain filter combinations.

## How it works

The overview page includes up to 4 coloured blocks. They are:

- a purple block showing how many applications have 5 days or fewer to make a decision
- an orange block showing how many automatically rejected applications need feedback
- a yellow block showing how many deferred offers are ready to be confirmed
- a blue block showing how many offers have pending conditions from the previous cycle

Each block links to the application list with the appropriate filters selected. Any previously selected filters will be cleared in favour of the filters that relate to the block.

A block does not appear if the appropriate filters would show no applications.

## Further considerations

We want to consider whether to:

- change the colour from orange to red of the block for feedback needed and the status tag for rejected applications
- include a block for applications assigned to the signed in user
- rename the ‘important’ category of filters
- split the filters from the ‘important’ category into separate categories
- include filters for lengths of time other than 5 days or fewer to make a decision
