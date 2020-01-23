---
title: Marketing page for providers
description: A page selling the benefits of joining the Apply pilot
date: 2020-01-23
related:
  items:
    - text: Sketch file
      href: https://drive.google.com/open?id=18nDHVmcGWJLZxQQeCt29oGN_U6L_toKk
---
A marketing page, aimed primarily at SCITTs, to demonstrate how easy the new service is to use, that other providers are adopting it, and it pays to get onboard now to influence its design. Heavily influenced by Notify/Verify product pages.

The page uses deliberately simplified screenshots so that:

* they don’t become outdated
* they succinctly support the point being made without other UI distraction

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Marketing page for providers" },
    { text: "Sign up Google form" }
  ]
}) }}
