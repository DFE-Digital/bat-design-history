---
title: Helping users find applications which have not been looked at yet
description: We tried different ways of helping users find applications which have not been looked at yet.
date: 2022-03-21
tags:
  - MN030
---

Many providers have an initial ‘sifting’ stage when they first receive an application.

They look at whether the application meets standards such as having acceptable qualifications. If it does then the application will be passed to a tutor or other colleague who will read the application in more detail.

Research shows that users need to know which applications have not been looked at yet.

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

At the moment, applications that have not been sifted cannot be distinguished from other applications with ‘received’ status. This means that they:

- appear after applications which have 5 days or fewer to make a decision and automatically rejected applications that need feedback
- are ordered by fewest days left to make a decision

We recently [changed the way the application list is sorted](/manage-teacher-training-applications/sorting-the-application-list-in-different-ways/). This gives users 2 ways to find applications that have not been sifted yet. They can use:

- the default sort order, which puts received applications at the top
- the sorted by most recently updated order, along with the ‘received’ status filter

However this does not completely fix the problem because:

- in the default sort order, unsifted applications will be pushed down the list by newer applications
- in the most recently updated order, unsifted applications will be pushed down the list by actions such as adding a note to other received applications

## Testing 2 approaches

We looked at 2 approaches to helping users more easily find applications that have not been looked at yet.

### Adding a link to a filtered list of applications

We tried adding a block to the overview page. It took users to the application list filtered by:

- received
- does not have a note
- unassigned

![Overview page taking users to the application list](option1--overview.png "Overview page taking users to the application list")

![Application list](option1--application-list.png "Application list")

The problem with this approach is that:

- the content in the block is long and hard to understand
- it relies on the provider making use of notes and user assignment
- it needs to change the sort order which is hard to explain and could confuse users

### Adding a link to a filtered list of notifications

We tried adding a block to the overview page that takes users to the notifications page filtered by ‘application received’.

![Overview page taking users to the notifications page](option2--overview.png "Overview page taking users to the notifications page")

![Notifications page](option2--notifications.png "Notifications page")

While research showed that users would be very keen to use the notifications feature, there were some problems with it. For example:

- some participants thought they were being taken to the application list
- most participants did not engage with the other types of notifications - although this could have been because the research did not focus on them

We did not want users to need to mark notifications as read. So we intended that this would happen automatically when a user views the notifications section.

This may be problematic because:

- some research participants expected that notifications would be marked as read only once they viewed an application
- if there are more unread notifications than fit on a page, notifications shown after the first page would be marked as read even though they had not been seen

We could mark notifications as read once a user has viewed an application. But we would also need to decide whether to mark them as read if the user’s colleague has viewed the application.

We could let users mark notifications as read, but it may be annoying for users to have to keep clearing notifications.

## Next steps

We want to explore other ways to help users find applications that have not been sifted yet such as letting users:

- filter the activity log or applications list to see only applications received in the last day
- mark an application as shortlisted and filter for shortlisted applications
