---
title: Moving organisational permissions guidance above the form
description: Moving the organisational permissions hint text above the form and some other related tweaks
date: 2021-06-14
screenshots:
  items:
    - text: Permissions form (details panel closed)
      src: permissions-form--closed.png
    - text: Permissions form (details panel open)
      src: permissions-form--open.png
    - text: User details page
      src: user-details.png
    - text: Your permissions page
      src: your-permissions.png
---

This work builds on the work we do to [simplify how we ask about and display permissions](/manage-teacher-training-applications/simplifying-how-we-ask-about-and-display-permissions/).

## What we changed and why

### Moving the hint text above the form

The hint text shown next to each user permission is problematic because:

* long hint text is not accessible - screen readers read out the entire text when users interact with each checkbox. This can frustrate users because the text can be very long.
* the hint text doesn’t really help users decide how to respond, which is what hint text is for. If the hint text tells the user that the permissions doesn’t apply to an organisation they’d like it to apply to, we wouldn’t expect them to leave the checkbox unticked. Instead we’d expect them to tick it and then change organisational permissions if appropropriate.
* the long hint text makes it harder to see all of the user permissions at a glance.

To solve these issues we’ve moved the content above the form and put some of it inside a collapsible details component.

### Making the descriptions more concise when all or none of the permissions are applicable

At the moment, we list out each partner organisation that applies and does not apply to each user permission.

We've changed the text to say:

* ‘It currently applies to all courses you work on with all your partner organisations.’ when it applies to all partner organisations
* ‘It currently does not apply to courses you work on with all your partner organisations.’ when it applies to none of their partner organisations

### No longer distinguishing between the training provider and accredited body within a relationship

We replaced ‘ratified by’ and ‘run by’ with ‘work on with’ in the lede for the bullets.

This removes unnecessary jargon that may not be true from the user’s point of view. For example, the accredited body user may think they run the course with their partner school.
