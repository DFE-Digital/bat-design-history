---
title: Improved header
description: Changes to the header and navigation layout
date: 2020-03-29
---

Previously, the application used the [header component](https://design-system.service.gov.uk/components/header/). But:

* the links are small and located in the center which takes up unnecessary vertical space
* the active blue colour is quite hard to see (despite it passing WCAG 2.1 contrast guidelines)

If the links are on the right, highlighted in white and bigger
Then the header will take up less room and be easier to see and use

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Application page"
  }]
}) }}
