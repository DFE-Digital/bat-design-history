---
title: Preventing schools from removing mentors
description: We prevent schools from removing mentors if they are part of an active funding claim
date: 2024-04-24
tags:
  - mentors
related:
  items:
    - text: Adding mentors
      href: /claim-funding-for-mentors/adding-mentors/
    - text: Adding mentors in Support
      href: /claim-funding-for-mentors/adding-mentors-in-support/
screenshots:
  items:
    - text: Mentors list
      src: mentors-list.png
    - text: Mentor details
      src: mentor-details.png
    - text: Remove mentor
      src: mentor--remove-mentor.png
    - text: Cannot remove mentor
      src: mentor--cannot-remove.png
    - text: Mentor removed success message
      src: mentor-list--mentor-removed.png
---

We prevent schools from removing mentors if they are part of an active funding claim. We prevent removal because we may have submitted the claim details to the ESFA for processing.

In the future, we will consider how a status model may allow users to remove mentors after submitting the claim. For example, if there is a period between submission and sending details to the ESFA for payment, we can allow users to remove mentors.

## How it works

### Mentor details

On the mentor details page, we show a summary list of the mentor’s details, including:

- first name
- last name
- teacher reference number (TRN)

This page also includes a ‘Remove mentor’ link, which allows mentors to remove the mentor.

### Removing a mentor

![Remove mentor flow](remove-mentor--flow.png)

Selecting ‘Remove mentor’ from the mentor details page starts the remove mentor flow.

#### Mentor cannot be removed

Users cannot remove a mentor if the mentor is part of an active claim. If this is the case, we show a message:

> You cannot remove this mentor because they are included in an active claim.
>
> You will be able to remove the mentor once we have processed the claim.

Users will need to contact the support team if they mistakenly included the mentor in a claim.

#### Mentor can be removed

If the user can remove the mentor, we display a confirmation step with the heading “Are you sure you want to remove this mentor?”

Selecting the ‘Remove mentor’ button will complete removing the mentor from the service.

Users can add the mentor again at any time.
