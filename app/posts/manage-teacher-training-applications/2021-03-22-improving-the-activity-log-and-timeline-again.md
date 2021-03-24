---
title: Improving activity log and timeline again
description: Various improvements to the activity log and timeline driven by the work we’re doing to make it clear to users why they can no longer see an application that’s been transferred to a new training provider or accredited body.
date: 2021-03-22
---

Before now, the design of the activity log did not show all of the details relating to an event.

For example, the ‘offer made‘ and ‘offer changed’ event did not show the conditons of the offer. This means users cannot tell that an offer was changed due to a condition being add or removed.

## What we did

We added all the relevant details for events relating to:

- making or changing an offer including adding or removing conditions
- updating the status of conditions
- deferring an offer
- reconfirming an offer
- adding a note

We also tried to make sure the activity log and timeline content are as consistent as possible. The only difference is that on the activity log the candidate’s name is part of the event title which isn’t necessary on the timeline.

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
