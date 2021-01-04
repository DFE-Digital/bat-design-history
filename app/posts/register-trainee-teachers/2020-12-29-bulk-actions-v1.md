---
title: Bulk actions on a group of records
description: Letting providers do common actions in one go
date: 2020-12-18
---
{% from "screenshots/macro.njk" import appScreenshots with context %}

Providers have told us they often have a group of trainees to recommend for QTS at the same time - all with the same programme and training details.

In DTTP and with our current service, this means opening each record individually to recommend it for QTS - providing the same date each time. If a provider had 50 trainees, this could take half a day or more.

We’ve also heard that providers will add a bunch of records as draft, check them as a group, and then submit them all for TRNs in one go. We’re not sure this same behaviour will happen once we launch the service as we hope there’ll be less need to check records separately.

We can help support these two processes by letting providers perform actions in bulk on a group of records.

Initial assumptions:

* All details will need to be the same for the selected group, for example the entire group will be recommended for QTS on the same date
* Our existing options for filters will be sufficient for providers to get to the right set of trainees

We’ve set up actions to happen in a few stages:

1. Choose the action
2. Choose filters
3. Select from filtered trainees
4. Confirm action

We’ve set it up like this so in the future we may be able to build on this feature by starting at stage 3 with an existing list of trainees.


{{ appScreenshots({
  title: "Designs",
  items: [{
      text: "1. Link in header",
      img: { src: "1. header.png" }
    }, {
      text: "2. Select action",
      img: { src: "2. select action.png" }
    }, {
      text: "3. Filter records",
      img: { src: "3. filter records.png" }
    }, {
      text: "4. Select trainees",
      img: { src: "4. select trainees.png" }
    }, {
      text: "5. QTS date",
      img: { src: "5. qts date.png" }
    }, {
      text: "6. Confirm trainees",
      img: { src: "6. confirm trainees.png" }
    }, {
      text: "7. Confirmation",
      img: { src: "7. confirmation.png" }
    }]
}) }}

## Further work

We’d like to improve on how we link to the bulk actions flow. It might be better to link directly to a specific action instead of a picker. However it’ll take some time to find the best way to do this - so for the first version we’re keeping it as a separate flow.

We’d also like to explore letting providers directly pick trainees from the trainee list - but this has complications as you’d need to deal with cases where providers pick trainees with incompatible actions.
