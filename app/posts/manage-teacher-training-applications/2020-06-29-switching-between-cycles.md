---
title: Switching between cycles
description: Let users see switch between past and future cycles
date: 2020-06-29
tags:
  - cycles
screenshots:
  items:
    - Application list (current cycle)
    - Switch cycle
    - Application list (next cycle)
    - Application list (with no applications)
---

Let users look at applications in the previous and next cycles.

## User needs

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a provider
I need to be able to defer an offer to the next recruitment cycle
So that I can tie in a good candidate who cannot accept a place in this recruitment cycle"
}) }}

{{ appUserNeed({
  description: "As a provider
I need to look at a candidate’s previous applications
So that I can see if they’ve improved their latest application based on the feedback"
}) }}

{{ appUserNeed({
  description: "As a provider
I need to look at a candidate’s successful application from the previous recruitment cycle
So that if they end up underperforming I can check if something was missed and so that I can check on their progress during the course"
}) }}

{{ appUserNeed({
  description: "As a provider
I need to keep in touch with candidates who have deferred their offers
So that I can make sure they take their place in the next recruitment cycle"
}) }}
