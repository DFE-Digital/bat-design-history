---
title: Improving the activity log and timeline
description: Some improvements to the activity log and timeline driven by the need accomodate interviews that can be changed or cancelled
date: 2021-03-03
---

When we designed the [interview journeys](/manage-teacher-training-applications/interviews-iteration-3/) we realised the activity log and timeline needs to handle events that relate to things that can later be changed or deleted.

As a temporary, minimal solution at the time, we decided to hide any ‘view interview’ link on an event where that interview no longer exists.

The problem is that without a link users cannot see the details of the interview and so cannot fully understand what’s happened.

## What we did

We added the details of the interview (and other types of event) inline so users can understand what’s happened without leaving the activity log or timeline.

We also moved away from the blue ‘train track’ styling which didn’t work very well, especially on the activity log where the events are across different applications.

It also sets us up nicely to use the same application list layout when we introduce search and filter.

## How it works

Everything that happens to an application is shown on the timeline and activity log.

On the activity log, events are grouped by day.

If, for example, an event relates to an interview that exists, a link is provided. If the interview has since been cancelled, all events that relate to that interview will not have a link.

## Future considerations

- Adding the ability to filter and search the activity log
- Inlining further details about all events like marking a condition as met or submitting an application

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
