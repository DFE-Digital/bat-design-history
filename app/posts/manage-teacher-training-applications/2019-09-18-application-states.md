---
title: Application states
description: Create new states with filters.
date: 2019-09-18
---
[Pull request](https://github.com/DFE-Digital/manage-teacher-training-applications-prototype/pull/2)

A quick update to expand the 4 states in the August 2019 prototype to better represent all states an application can be in.

Those original states have largely stayed the same, they are:

* New (unchanged)
* Interviewing (previously In progress)
* Offer made (newly added)
* Confirmed (previously Recruited)
* Rejected (unchanged)

In review and recruited didn’t make sense to users. It wasn’t clear where interviewing and offers made would sit.

These states correspond to the ‘Change status’ actions a user can make.

This is a quick design to get the statuses in, there’s no reason the nice panel boxes can’t come back somehow.

## Filters on a state

We’ve added filters to most states which provide a means of further filtering that set of applications. These may not be needed if application volumes are small.

We need to test these filters and labels with providers to check their usefulness.

These filters might be better surfaced once a state has been selected.

### New

* References pending – not all references have been provided
* References submitted

Some providers may only want to respond to applications when references are available.

### Offer made

* Conditional
* Unconditional - rarely used
* Accepted (conditional) – a conditional offer has been accepted but conditions are not yet met

An unconditional offer (which would be ‘Accepted (unconditional)’) goes straight into the Confirmed state.

### Rejected

* Rejected by us
* Rejected by default – gone beyond the RBD date
* Withdrawn – candidate has removed their application
* Offer rejected – candidate was made an offer but refused
* Declined by default – candidate didn’t respond to offer in time

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Applications" },
    { text: "New applications" },
    { text: "Rejected" }
  ]
}) }}
