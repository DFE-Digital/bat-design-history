---
title: Improving the way we display who made changes in the timeline
description: We changed the way we display who made changes in the timeline
date: 2022-02-14
screenshots:
  items:
    - text: Timeline
    - text: Activity log
---

The way we display who made changes in the timeline is misleading and complicated. For example:

- when the support team makes a change in the Support service, the label says “Apply support”
- when the support team make changes in the console, the label says “System”
- when a user makes the change through the API, the label says, for example “Sally Jones (Vendor API)”

## What we changed

We changed the labels to be:

- the full name of the user for changes made by providers
- “Support team” for changes made by members of the support team
- “System” for changes made automatically such as when an offer is automatically declined

We decided not to keep “(Vendor API)” for changes made via the API because that should not be the concern of the user. Support can look that detail up when troubleshooting a problem.

We left the label as “Candidate” for changes made by the candidate.
