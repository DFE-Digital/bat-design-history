---
title: Improving the delete partnership confirmation page
description: We give additional context to users when they want to delete a partnership
date: 2025-11-19
tags:
  - partnerships
  - providers
related:
  items:
    - text: Iterating on how we set up partnerships between providers
      href: /register-of-training-providers/iterating-on-how-we-set-up-partnerships-between-providers/
    - text: Iterating on the change provider partnership flow
      href: /register-of-training-providers/iterating-on-the-change-provider-partnership-flow/
    - text: Preventing duplicate partnerships based on partnership dates
      href: /register-of-training-providers/preventing-duplicate-partnerships-based-on-partnership-dates/
    - text: Logging provider partnerships linked to academic years
      href: /register-of-training-providers/logging-provider-partnerships-linked-to-academic-years/
screenshots:
  items:
    - text: Accredited provider - delete partnership
      src: accredited-provider--delete-training-partner.png
    - text: Accredited provider - delete partnership - no partnership end date
      src: accredited-provider--delete-training-partner-no-end-date.png
    - text: Training partner - delete partnership
      src: training-partner--delete-accredited-provider.png
    - text: Training partner - delete partnership - no partnership end date
      src: training-partner--delete-accredited-provider-no-end-date.png
---

We updated the delete partnership page to give additional context to users.

## What we changed

We added two messages:

1. Partnership end date
2. Warning message

### Partnership end date

Some users may delete a partnership when they intended to end the partnership instead.

If the partnership does not have an end date, we show the message:

> If you do not want to delete the partnership, but update that it has ended, add the partnership end date

We link to the form where users can add the partnership end date.

### Warning message

Since deleting a partnership is permanent, we show a warning message:

> Removing a partnership is permanent - you cannot undo it.

While deleting a partnership is permanent, users can:

- recreate the partnership at any time
- view partnership details in the activity log
