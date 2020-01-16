---
title: User research 10 May 2018
description: Testing with assisted digital, dyslexic and visually impaired users.
tags: find-private-beta
---

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Search by location",
      img: { src: "search-by-location.png" },
      caption: 'Trialled removing the radius field for location. Instead defaulting to 100 miles and ordered results by distance.

### Result

Out of 4 participants only 2 performed actions that were affected by the change. Each found results easily and were not impeded by the lack of a radius filter.

100 miles felt too wide for some results, recommend reducing to 50.

* * *

The location and provider autocomplete is not fully accessible – it does not announce that options are available or what has been selected. This was seen in preparation for research. ([BATSA-277](https://dfedigital.atlassian.net/browse/BATSA-277))'
    },
    {
      text: "Financial support",
      img: { src: "financial-support.png" }
    },
    {
      text: "Search results",
      img: { src: "search-results.png" },
      caption: 'In combination with removal of radius, distance was moved to the top of the metadata in each search result. The location no longer refers to a search radius.

### Result

Without an explicit radius, one user noticed that as they scrolled down the courses were getting further away. They returned to the top of the list and focussed on those just within a certain area – an area he defined as a 20 minute drive.
      '
    }
  ]
}) }}
