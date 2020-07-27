---
title: "Help users know what needs doing and what’s changed"
description: New application list focused on what needs doing and an activity log focused on what’s changed.
date: 2020-07-15
tags:
 - MN004
 - MN014
 - MN021
---

Previously the application list was [ordered by ‘last changed’](/manage-teacher-training-applications/sorting-by-rbd-date/). And with an option to sort by days left to respond.

Not all users understand what ‘last changed’ means and there’s not enough room to clearly explain what exactly has changed.

Users have to rely on the ‘Changed’ line along with any note’s subject (if present) and the status.

Also, letting users sort by ‘days left to respond’ is only applicable to applications in the submitted state.

If we focus the application list around what needs doing as opposed to what's changed then users will spend less time having to configure the list to meet their needs

If we give users an activity log to see what’s changed then users who are processing applications this way will see a dedicated page to support this way of working.

## How the application list works

We removed the sort controls and ordered the list by priority as follows:

1. Deferred offers (these need dealing with as soon as the next cycle begins)
2. Applications that are approaching the deadline and will be rejected automatically if not dealt with
3. Applications that were automatically rejected because the provider didn’t respond in time
4. New applications that are waiting on the provider’s response.
5. Applications that are waiting on the candidate to accept or decline an offer or to meet conditions.
6. Successful applications where conditions have been met.
7. All other applications that don’t need action like rejected, conditions not met and declined.

Sub headings were added to make the tasks clear. This way we didn’t need a secondary view to help users know what needs doing. It’s integrated directly within the main flow.

## How the activity log works

We added an ‘activity log’ page which lists the events with most recent first.

It’s like the timeline on the application details but combined for all applications.

The events are ordered by most recent first.

If there’s something specific that’s changed, it’s displayed in context of the event.

For example, if an offer was made, the details of the offer are shown.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Application list ordered by priority",
    img: {
      src: "application-list.png"
    }
  }, {
    text: "Activity log",
    img: {
      src: "activity-log.png"
    }
  }]
}) }}
