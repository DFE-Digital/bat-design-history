---
title: Application sub navigation
description: Help providers navigate the parts of an application more easily with sub navigation
date: 2020-03-30
---

## Hypotheses

### Sub navigation

Previously, all the details of an application were all displayed on a single page. This includes the application itself, the offer, timeline and soon to be notes.

The page has got really big and hard to navigate.

If the parts of an application are split across pages
Then users will be able to find and view the applicaition more easily

### Improved header

Previously, the application used the [header component](https://design-system.service.gov.uk/components/header/). But:

* the links are small and located in the center which takes up unnecessary vertical space
* the active blue colour is quite hard to see (despite it passing WCAG 2.1 contrast guidelines)

If the links are on the right, highlighted in white and bigger
Then the header will take up less room and be easier to see and use

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Application page",
    caption: "Banner shows across all pages when it's a new application. And there is no offer page."
  }, {
    text: "Offer page"
  }, {
    text: "Notes page"
  }, {
    text: "Timeline page"
  }]
}) }}
