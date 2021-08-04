---
title: Timeline iteration 2
description: Provide links to the application, offer, note, interview the event relates to.
date: 2020-12-01
---

{% from "screenshots/macro.njk" import appScreenshots with context %}

See [first iteration](/manage-teacher-training-applications/timeline).

A while ago we added links to each event in the timeline. For example:

- when a note is added, there’s a link to the note
- when an application is submitted or withdrawn, there’s a link to the application
- when an offer is made, accepted or changed, there’s a link to the offer

![Timeline with links to the related item.](timeline--links.png "Timeline with links to the related item")

We are now starting to add items to the timeline which can be changed or deleted. For example, an interview can be set up, changed (multiple times) and cancelled.

When these things happen, the links are out of date or misleading.

We considered the following design:

![Out of date or cancelled items with explanations.](timeline--explanations.png "Out of date or cancelled items with explanations")

But we think this is not that helpful and potentially confusing and misleading.

As this is a big piece of work to address we decided that for now we’d just remove links to out of date or cancelled interviews, for example.

![Out of date or cancelled items have links removed.](timeline--no-links.png "Out of date or cancelled items have links removed")
