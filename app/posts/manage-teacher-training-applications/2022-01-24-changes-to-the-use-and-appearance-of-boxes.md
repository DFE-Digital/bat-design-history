---
title: Changes to the use and appearance of boxes
description: We removed boxes from some flows in the service and changed all boxes to  have the same border thickness.
date: 2022-01-24
---

{% from "screenshots/macro.njk" import appScreenshots with context %}

We reviewed how we use and display boxes in the service. This was part of an audit which also included:

- [page titles](/manage-teacher-training-applications/making-page-titles-consistent-and-more-meaningful/)
- [headings, caption text, success messages and timeline event titles](/manage-teacher-training-applications/changes-to-headings-caption-text-success-messages-and-timeline-event-titles/)
- [button labels and warning text](/manage-teacher-training-applications/changes-to-button-labels-and-addition-of-warning-text/)
- [the use of red buttons](/manage-teacher-training-applications/changing-the-way-we-use-red-warning-buttons/)

## How it works

We made changes so that we’re consistent with:

- the thickness of the borders used for boxes
- when we show boxes around content

We also removed some boxes and their content as they were unnecessary.

### Changing the thickness of the borders used for boxes

Previously some boxes used thick lines and some used thin lines. For example:

- each set of permissions on the organisation permissions page was surrounded by a thick line
- the candidate interview preferences on the interview details page were surrounded by a thin line

We do not think that this distinction conveys any difference in meaning, so we decided to use thin lines for all boxes.

![Organisation permissions page](organisation-permissions.png "Update organisation permissions page")
![Interview details page](interview-details.png "Interview details page")

### When we show boxes around content

We’ve decided to only show content in boxes when either:

- there are actions which users can take on a whole thing, for example to change or cancel an interview
- it’s helpful for users to see information from another part of the service, for example we replay course details at the start of the ‘make decision’ flow

![Interviews page](interviews.png "Interviews page")
![Make a decision](make-a-decision.png "Make a decision page")

As a result of this, we’ve removed the box around summary lists on the check answers pages.

### Removing unnecessary boxes and their content

We removed the box showing the current status of conditions which was displayed above the radio buttons when:

- deferring an offer
- changing an offer
- updating the status of conditions

This is because the radio buttons indicate the current status of conditions, so it is not necessary to show the statuses separately.

![Update status of conditions page](status-of-conditions.png "Update status of conditions page")
