---
title: Adding an interruption page to encourage users to give feedback on automatically rejected applications
description: We tried showing an interruption page to users who need to give feedback on automatically rejected applications.
date: 2022-03-18
user_needs:
  - MN004
  - MN021
  - AN029
  - MN014
tags:
  - rejections
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

We added an interruption page that is shown when the user signs in if one or more automatically rejected applications need feedback.

The page has a green button which takes the user to the application list, filtered to show only applications which need feedback.

We have no way within the current design to force users to give feedback, as they could remove the filter and keep working. But they would at least see the list of applications which need attention.

We included a skip link on the interruption page in case users do not want to give feedback immediately because:

- most users will have signed in to deal with other applications
- we cannot be sure that the user who sees the page will be able to provide feedback

Users who clicked the skip link would be taken to the overview page.

## Research findings

Most participants indicated that they would not give feedback at the point of seeing the interruption page. That meant that the page would be annoying.

## Further considerations

While participants indicated that they would find the page annoying, that is part of how an interruption page works. Users are encouraged to give feedback so that they no longer see the page.

We’ve decided not to use the interruption page yet, since we’re already making a number of other changes such as introducing an overview page.

We’ll monitor the proportion of automatically rejected applications without feedback. If the proportion increases then we may consider using the interruption page.

If we do use the page then we’ll want to consider whether to:

- give users the ability to skip the interruption page only a certain number of times, forcing them to view the filtered application list after that
- force users to give feedback before they can complete other tasks
- send users a weekly email to remind them about applications that need feedback
