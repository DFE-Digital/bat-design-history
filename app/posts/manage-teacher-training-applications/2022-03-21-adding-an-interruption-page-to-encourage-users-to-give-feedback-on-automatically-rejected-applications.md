---
title: Adding an interruption page to encourage users to give feedback on automatically rejected applications
description: We tried using an interruption page to encourage users to give feedback on automatically rejected applications.
date: 2022-03-21
tags:
  - MN004
  - MN021
  - AN029
  - MN014
screenshots:
  items:
    - text: Interruption page
      src: interruption-page.png
---

We recently [added an overview page](/manage-teacher-training-applications/adding-an-overview-page-and-filters-to-help-users-prioritise-their-work/) to highlight important information that could easily be missed. For example, automatically rejected applications that need feedback.

While the overview page is useful, users can still ignore it quite easily. So we wanted to try showing users a page that interrupts them when they sign in.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## What we changed

We added an interruption page that is shown:

- if there’s one or more applications that have been automatically rejected and need feedback
- when the user signs in

We included a skip link so that users are not forced to give feedback immediately because:

- we cannot be sure that the user who sees the page will be able to provide the feedback
- most users will be signing in to deal with other applications

## Research findings

Most participants indicated that they would not give feedback at the point of seeing the interruption page. And that such a page would be annoying.

## Further considerations

While participants indicated that they would find this page annoying, that is actually the point of the page.

So if we find that the number of automatic rejected applications without feedback increases, we may consider using the interruption page.

We also want to consider whether:

- to give users the ability to skip the interruption page 3 times and after that, forcing them to give feedback
- to send users a weekly email to remind them about applications that need feedback
