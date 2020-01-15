---
title: Hide discontinued training locations
description: Don’t show these locations to avoid confusion.
tags:
---

The way we display non-running training locations in Publish has confused some publishers (we’ve received Zendesk tickets about superfluous training locations on their courses, where the publisher didn’t understand that the location was discontinued and they didn’t need to do anything).

Also we show irrelevant info for those locations – this looks weird, eg vacancies on a suspended location.

## Hide confusing locations

This design hides all suspended or discontinued training locations behind a disclosure.

Inside the disclosure the listed locations only have their address and status, vacancies and apply dates are removed.

(See the bottom of each screenshot)

[Trello](https://trello.com/c/8c2gDVqe/501-tweak-how-non-running-training-locations-are-presented)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Discontinued training locations behind disclosure",
      img: { src: "discontinued-training-locations.png" }
    },
    {
      text: "Disclosure when open",
      img: { src: "discontinued-training-locations-open.png" }
    }
  ]
}) }}
