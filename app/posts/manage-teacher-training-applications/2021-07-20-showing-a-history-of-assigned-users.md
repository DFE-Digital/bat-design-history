---
title: Showing a history of assigned users
description: Let users see who was assigned to an application in the activity log and timeline
date: 2021-07-20
---

This is part of [letting users assign applications to themselves or other users](/manage-teacher-training-applications/assigning-applications-to-users/).

Users need to see a history of who was assigned to an application.

## What we changed

We added an event to the application timeline and activity log, to show when users are assigned to or unassigned from applications.

## How it works

When a user adds or removes assigned users, an event is logged in the application’s timeline and the provider’s activity log.

The heading for the event is:

- “Users assigned” - if it’s the first time a user has been assigned to the application
- “Assigned users updated” - for all subsequent changes

In the entry we display either:

- a list of all the users who are assigned
- “No users assigned”

Below each list of assigned users, we provide a link to the application details.

## Other considerations

We considered some changes which were not implemented.

We decided not to show who has been added or removed from the list of assigned users. We do not do this for other events such as interviews and it would make the timeline and activity log more complicated. We may consider this again in future.

In other places where we list assigned users, if the signed in user is assigned then we:

- put their name first
- put “(you)” after their name

We do not usually indicate in the timeline and activity log that something was done by the signed in user. So we decided not to do so for assigned users.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Application timeline",
    img: {
      src: "application-assignment-timeline.png"
    }
  }, {
    text: "Provider’s activity log",
    img: {
      src: "application-assignment-activity-log.png"
    }
  }]
}) }}
