---
title: Helping users find applications which have not been looked at yet
description: We tried different ways of helping users find applications which have not been looked at yet.
date: 2022-03-21
user_needs:
  - MN030
tags:
  - filtering
  - applications overview
---

Many providers have an initial ‘sifting’ stage when they first receive an application.

They look at whether the candidate meets standards such as having acceptable qualifications. If they do then the application will be passed to a tutor or other colleague who will read it in more detail.

Research shows that users need to know which applications have not been looked at yet.

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

At the moment, applications that have not been sifted cannot be distinguished from other applications with ‘received’ status. This means that they:

- appear in the application list after applications which have 5 days or fewer to make a decision and automatically rejected applications that need feedback
- are ordered by fewest days left to make a decision

We recently [changed the way the application list is sorted](/manage-teacher-training-applications/sorting-the-application-list-in-different-ways/). This gives users 2 ways to find applications that have not been sifted yet. They can use:

- the default sort order, which puts received applications at the top
- the sorted by most recently updated order, along with the ‘received’ status filter

However this does not completely fix the problem because:

- in the default sort order, applications which have not been sifted will be pushed down the list by newer applications
- in the most recently updated order, applications which have not been sifted will be pushed down the list by actions such as adding a note to other applications

## Testing 2 approaches

We looked at 2 approaches to helping users more easily find applications that have not been looked at yet.

### Adding a link to a filtered list of applications

We tried adding a block to the overview page. It took users to the application list sorted to show most recently updated applications first and filtered to show applications which:

- had received status
- did not have a note
- were not assigned to any user

![Overview page taking users to the application list](option1--overview.png "Overview page taking users to the application list")

![Application list](option1--application-list.png "Application list")

The problem with this approach is that:

- the content in the block is long and hard to understand
- it relies on the provider making use of notes and user assignment
- it needs to impose a particular sort order, which is hard to explain and could confuse users

### Adding a link to a filtered list of notifications

We tried adding a block to the overview page that takes users to a notifications page filtered by ‘application received’.

This page was based on a [previous design for a notifications page](/manage-teacher-training-applications/notifications-iteration/).

![Overview page taking users to the notifications page](option2--overview.png "Overview page taking users to the notifications page")

![Notifications page](option2--notifications.png "Notifications page")

While research showed that users would be very keen to use the notifications feature, there were some problems with it. For example:

- some participants thought they were being taken to the application list
- most participants did not engage with the other types of notifications - although this could have been because the research did not focus on them

We intended that notifications would be automatically marked as read when a user viewed the notifications section. Research showed that this may be problematic because:

- some research participants expected that notifications would be marked as read only once they viewed an application
- if there are more unread notifications than fit on a page, notifications shown after the first page would be marked as read even though they had not been seen

We could mark notifications as read only once a user has viewed an application, but we would also need to decide whether to:

- let users manually mark notifications as read, since it may be annoying for users to have to go into each application to clear the notification
- mark notifications as read if one of the user’s colleagues has viewed the application

## Next steps

We want to explore other ways to help users find applications that have not been sifted yet, such as letting users:

- filter the activity log or applications list to see only applications received in the last day
- mark an application as shortlisted and filter for shortlisted applications
