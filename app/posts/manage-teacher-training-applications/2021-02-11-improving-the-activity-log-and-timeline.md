---
title: Improving the activity log and timeline
description: Some improvements to the activity log and timeline driven by the need accomodate interviews that can be changed or cancelled
date: 2021-03-03
---

When we designed the [interview journeys](/manage-teacher-training-applications/interviews-iteration-3/) we realised the activity log and timeline need to handle events relating to things that can be changed or deleted.

As a minimal solution at the time, we decided to hide the ‘view interview’ link on any event relating to an interview which no longer exists.

The problem is that without a link users cannot see the details of the interview and so cannot fully understand what’s happened.

We decided also to look at how notes are displayed in the activity log and timeline. Currently notes appear only as a link, meaning that users always need to click through to read the note.

## What we did

We added the details of interviews and notes so that users can understand what’s happened without leaving the activity log or timeline.

We also moved away from the blue ‘train track’ styling which didn’t work very well, especially on the activity log where it implied a connection between events in different applications.

The new styling will also work better than the ‘train track’ when we introduce the filter panel on the left hand side of the page.

## How it works

Everything that happens to an application is shown in the timeline and activity log.

Events are grouped by day in the activity log.

If an event relates to an interview that exists then a link is provided. If the interview has since been cancelled, all events that relate to that interview will not have a link.

A link is still given for notes.

## Future considerations

We'll consider:

- adding the ability to filter and search the activity log
- putting further details in the timeline and event log for all events, such as marking a condition as met or submitting an application

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Activity log",
    img: {
      src: "activity-log.png"
    }
  }, {
    text: "Timeline",
    img: {
      src: "timeline.png"
    }
  }]
}) }}
