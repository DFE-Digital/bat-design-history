---
title: Improving the way we display who made changes in the timeline
description: We changed the way we display who made changes in the timeline and activity log.
date: 2022-02-14
screenshots:
  items:
    - text: Timeline
    - text: Activity log
---

The way we display who made changes in the timeline is misleading and complicated. For example:

- when the support team makes a change in the support service, the label says “Apply support”
- when the support team makes a change in the console, the label says “System”
- when an application is automatically rejected or an offer is automatically declined, the label says “System”
- when a user makes a change in their student record system using the API the label says, for example “Sally Jones (Vendor API)”

## What we changed

We changed the labels to be:

- the full name of the user for changes made by providers
- “Support team” for changes made by members of the support team

We’ll no longer show a label when an application is automatically rejected or when an offer is automatically declined. To compensate for this, we’ve changed the titles to:

- “Application automatically rejected”
- “Offer automatically declined”

We decided not to keep “(Vendor API)” for changes made using the API because that should not be the concern of the user. The support team can look that detail up when troubleshooting a problem.

We kept the label as “Candidate” for changes made by the candidate.
