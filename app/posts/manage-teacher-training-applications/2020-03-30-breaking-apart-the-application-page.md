---
title: Breaking apart the application page (sub navigation)
description: Help providers navigate the parts of an application more easily with sub navigation
date: 2020-03-30
---

## Hypotheses

### Sub navigation

Previously, all the details of an application were all displayed on a single page. This includes the application itself, the offer, timeline and soon to be notes.

The page has got really big and hard to navigate.

If the parts of an application are split across pages
Then users will be able to find and view the applicaition more easily

### Putting offer onto a page of its own

Previously, the offer was represented by a [tiny panel in the right hand column](/manage-teacher-training-applications/offer-a-different-course/#details-page).

This meant the options for an offer were hidden behind ‘Edit response’ making them hard to discover.

If we put the offer on a page of its own
Then the options can be found more easily

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
