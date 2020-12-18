---
title: Search by candidate name or reference
description: Let users search the applications list by candidate name or reference
date: 2020-12-18
---

We introduced a search to allow users to search the applications list by candidate name or number.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Applications list – No search or filters"
  }, {
    text: "Applications list – Search by name"
  }, {
    text: "Applications list – Search by reference"
  }, {
    text: "Applications list – Search by partial string"
  }, {
    text: "Applications list – No search results"
  }, {
    text: "Applications list – Filtered search"
  }]
}) }}
