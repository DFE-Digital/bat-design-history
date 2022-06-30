---
title: Switching between recruitment cycles during rollover
description: We added a way for users to be able to switch between recruitment cycles during rollover
date: 2022-06-15
screenshots:
  items:
    - text: Choose recruitment cycle
      src: cycle-switcher--choose-recruitment-cycle.png
    - text: Action bar - single organisation user
      src: cycle-switcher--action-bar-single-organisation.png
    - text: Action bar - multiple organisation user
      src: cycle-switcher--action-bar-multiple-organisations.png
---

At the start of July each year, the process of rollover begins. During this period, users need to be able to see courses in the current recruitment cycle and prepare courses for publishing in the next recruitment cycle.

When we implemented the [primary navigation and organisation switcher](/publish-teacher-training-courses/adding-primary-navigation-to-the-service/), we lost the ability to change between recruitment cycles.

Using the ‘organisation switcher’ as a guide, we created a way to switch between recruitment cycles.

## What we changed

We added:

- a recruitment cycles page that shows the current and the next recruitment cycles
- updated the organisation switcher to include a way to switch recruitment cycle and show the recruitment cycle the user is working in

## How it works

Previously, the organisation switcher only showed if the user belonged to multiple organisations. We now display the switcher for all users during rollover.

The switcher shows:

- the organisation’s name
- the recruitment cycle - for example, ‘2021 to 2022 - current’
- a link to ‘Change recruitment cycle’ - if it is rollover
- a link to ‘Change organisation’ - if the user belongs to multiple organisations

### Recruitment cycle page

The ‘Recruitment cycles’ page lists two recruitment cycles:

- the current cycle - for example, ‘2021 to 2022 - current’
- the next cycle - for example, ‘2022 to 2023’

We include the word ‘current’ in the label for the current recruitment cycle to make it obvious what cycle they’re looking at.

### Signing into the service

When a user signs into the service during rollover, they will see:

- a list of organisations - if they belong to multiple organisations
- a list of recruitment cycles - if it is rollover

### Changing recruitment cycle

Users who select ‘Change recruitment cycle’ are shown the list of recruitment cycles. Selecting one of the cycles returns the user to the courses page with the cycle displayed in the organisation switcher and the courses for that cycle shown in the courses list.

If the user belongs to multiple organisations, the organisation will remain the same until the user chooses to change organisation.

### Changing organisation

When users select ‘Change organisation’, they are shown the list of organisations they belong to. Selecting one of the organisations returns the user to the courses page with the new organisation displayed in the organisation switcher and their courses shown in the courses list.

The recruitment cycle remains the same when changing the organisation.

For example, if the user is looking at courses for Organisation A in the 2021 to 2022 recruitment cycle and then switch to Organisation B, they will still be in the 2021 to 2022 recruitment cycle when they return.
