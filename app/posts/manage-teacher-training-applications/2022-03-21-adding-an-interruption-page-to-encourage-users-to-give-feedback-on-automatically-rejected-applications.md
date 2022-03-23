---
title: Adding an interruption page to encourage users to give feedback on automatically rejected applications
description: We tried showing an interruption page to users who need to give feedback on automatically rejected applications.
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

We recently [added an overview page](/manage-teacher-training-applications/adding-an-overview-page-and-filters-to-help-users-prioritise-their-work/) to highlight important information that could easily be missed. This includes automatically rejected applications that need feedback.

While the overview page is useful, users can still ignore it quite easily. We wanted to try showing users a page that interrupts them when they sign in.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## What we changed

We added an interruption page that is shown when the user signs in if one or more applications have been automatically rejected and need feedback.

We included a skip link so that users are not forced to give feedback immediately because:

- most users will have signed in to deal with other applications
- we cannot be sure that the user who sees the page will be able to provide feedback

## Research findings

Most participants indicated that they would not give feedback at the point of seeing the interruption page. That meant that the page would be annoying.

## Further considerations

While participants indicated that they would find this page annoying, that is central to how an interruption page works. Users are encouraged to give feedback so that they no longer see the page.

We’ve decided not to use the interruption page yet. We’ll monitor the number of automatically rejected applications without feedback and if it increases then we may consider using the interruption page.

If we do use the page then we’ll want to consider whether:

- to give users the ability to skip the interruption page 3 times and after that, forcing them to give feedback
- to send users a weekly email to remind them about applications that need feedback
