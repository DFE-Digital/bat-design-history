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
---

Let users look at applications in the previous and next cycles by clicking ‘Switch cycle’ at the top left.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Application list (current cycle)",
    img: {
      src: "application-list-current-cycle.png"
    }
  }, {
    text: "Switch cycle",
    img: {
      src: "switch-cycle.png"
    }
  }, {
    text: "Application list (next cycle)",
    img: {
      src: "application-list-next-cycle.png"
    }
  }, {
    text: "Application list (with no applications)",
    img: {
      src: "application-list-previous-cycle.png"
    }
  }]
}) }}
