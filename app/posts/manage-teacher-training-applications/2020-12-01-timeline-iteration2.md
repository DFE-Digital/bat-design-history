---
title: Timeline iteration 2
description: Provide links to the application, offer, note, interview the event relates to.
date: 2020-12-01
---

{% from "figure/macro.njk" import appFigure with context %}
{% from "screenshots/macro.njk" import appScreenshots with context %}

See [first iteration](/manage-teacher-training-applications/timeline).

A while ago we added links to each event in the timeline. For example:

- when a note is added, there’s a link to the note
- when an application is submitted or withdrawn, there’s a link to the application
- when an offer is made, accepted or changed, there’s a link to the offer

{{ appFigure({
  image: {
    file: "timeline-links.png"
  },
  caption: "Timeline with links to the related item"
}) }}

We are now starting to add items to the timeline which can be changed or deleted. For example, an interview can be set up, changed (multiple times) and cancelled.

When these things happen, the links are out of date or misleading.

We considered the following design:

{{ appFigure({
  image: {
    file: "timeline-explanations.png"
  },
  caption: "Out of date or cancelled items with explanations"
}) }}

But we think this is not that helpful and potentially confusing and misleading.

As this is a big piece of work to address we decided that for now we’d just remove links to out of date or cancelled interviews, for example.

{{ appFigure({
  image: {
    file: "timeline-links-removed.png"
  },
  caption: "Out of date or cancelled items have links removed"
}) }}



