---
title: Applying again (Apply 2)
description: Providing an option for unsuccessful applicants to apply again.
date: 2020-03-16
tags:
- AN022
---

If a candidate is not offered an interview by any of their initial 3 choices (or chooses not to accept an offer or withdraws their application), they can move to a secondary application phase. UCAS calls this ‘Apply 2’.

During this phase, a candidate can make an unlimited number of applications, but this time, only one course choice is allowed. If the candidate is again unsuccessful (or chooses not to accept an offer or withdraws) they can keep applying until they do accept an offer, or until the application cycle for the academic year closes.

### Reasons why a candidate might need to apply again

* Withdrew choice(s)
* Declined offer(s)
* Declined by default
* Rejected by provider(s)
* Rejected by default

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## User journey

{% from "figure/macro.njk" import appFigure with context %}
{{ appFigure({
  image: {
    file: "flow.svg"
  }
}) }}

### A note on journeys from Find

It might be possible for a candidate to apply to a course from Find when they are eligible for this second phase, but haven’t opted in to it yet. This scenario (and others) are something we may want to consider later.
