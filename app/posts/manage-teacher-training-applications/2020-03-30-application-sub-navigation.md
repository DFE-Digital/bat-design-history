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

### Concise header

Previously, the application has used the standard GOV.UK header component. But this takes up quite a bit of space and pushes the content of the application further down.

If the header puts the navigation on the right and saves space
Then the content will be pushed up a bit making it easier to access

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
