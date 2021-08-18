---
title: Switching between cycles
description: Let users see switch between past and future cycles
date: 2020-06-29
tags:
  - MN016
  - MN017
  - MN018
  - MN019
  - MN020
screenshots:
  items:
    - Application list (current cycle)
    - Switch cycle
    - Application list (next cycle)
    - Application list (with no applications)
---

Let users look at applications in the previous and next cycles.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}
