---
title: Improving activity log and timeline again
description: Improvements to the activity log and timeline to help make it clear to users why they can no longer see an application that’s been transferred to a new training provider or accredited body.
date: 2021-03-22
---

The design of the activity log does not show all the details relating to an event.

For example, the ‘offer made‘ and ‘offer changed’ events do not show the conditons of the offer. This means users cannot tell that an offer was changed due to a condition being added or removed.

## What we did

We added all the relevant details for events relating to:

- making or changing an offer, including adding or removing conditions
- updating the status of conditions
- deferring an offer
- reconfirming an offer
- adding a note

We also made the activity log and timeline content as consistent as possible. The only difference is that on the activity log the candidate’s name is part of the event title, which isn’t necessary on the timeline.

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
