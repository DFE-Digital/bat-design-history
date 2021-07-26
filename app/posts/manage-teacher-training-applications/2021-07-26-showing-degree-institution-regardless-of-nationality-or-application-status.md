---
title: Showing degree institution regardless of candidate nationality or application status
description: Showing users the institution of the candidate’s degree regardless of their nationality or status of their application
date: 2021-07-26
---

To avoid bias, we currently show the degree institution only when the candidate is:

- not from the United Kingdom
- from the United Kingdom and they have accepted the offer

But candidates must provide at least one academic reference from an official email address. This means users can easily work out where the candidate studied.

We think that our current approach has limited value and effectiveness so we’ll show the degree institution at all times.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Before",
    img: {
      src: "before.png"
    }
  }, {
    text: "After",
    img: {
      src: "after.png"
    }
  }]
}) }}
