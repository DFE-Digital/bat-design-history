---
title: Adding a placement before adding mentors
description: We updated the service to allow placements to be added before mentors.
date: 2024-04-25
tags:
  - placements
related:
  items:
    - text: Adding mentors
      href: /claim-funding-for-mentors/adding-mentors/
    - text: Adding placements if you belong to a school
      href: /manage-school-placements/adding-placements/
    - text: The anatomy of a school placement
      href: /manage-school-placements/the-anatomy-of-a-school-placement/
screenshots:
  items:
    - text: Placements page without mentors added
      src: placements-list.png
    - text: Placement details page when no mentors are in the service
      src: placement-details.png
    - text: Placement details page when mentors are in the service but not added to the placement
      src: placement-details-select.png
---

Previously, users could only add placements to the service if they had already added one or more mentors. User research showed us that this was viewed as a barrier to adding placements. Mentors are often decided later on in the process, so users expected to mainly use 'not yet known' while initially adding placements.

## What we changed

We have:

- allowed placements to be added before mentors
- allowed the add a mentor journey to be reached from the placement details page if no mentors are added

## How it works

![Add mentor flow](add-placement-flow.png "Add placement flow when no mentors are present")

There is now an 'add placement' button visible on the Placements page at all times. If the user adds a placement before any mentors have been added to the service, the add mentor screen is not shown.

The flow is:

1. Phase (shown only if the school does not have a phase specified)
2. Subject (this list is populated to represent the available subjects at that phase)
3. Check your answers

If the user views the details of a placement when no mentors are added, they're given a link into the mentors area to add a mentor. If the user views the details of a placement that does not have a mentor but the school does have mentors on the service, they are given a link to select a mentor.

## Further considerations

In the future we may look at how to offer the user the option of adding a mentor in the placements journey. We may also look at the ability to add a mentor to the system directly from the placement details page.
