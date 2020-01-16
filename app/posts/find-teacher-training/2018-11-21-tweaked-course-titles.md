---
title: Iterate course titles
description: Make it easier to differentiate between search results.
tags:
---

Search results must be distinct, and the differences between courses must be clear. When a provider offers multiple courses for the same subject, it’s not obvious to users what the difference is ([see BHSSA example](/public/images/find-teacher-training/live-launch/04-search-results.png)).

Make courses more obviously different by:

*   using course codes to differentiate
*   putting the course offered at the top as most common differentiator

Other design changes include:

*   Use a format where name and code match what’s in UCAS Apply
*   Make it easier to skip past a provider’s courses by separating subject and provider
*   Update each course detail page to match the formatting of the search result
*   Demote accredited provider on a course page to minimise candidate confusion around ‘accredited provider’ alluded to in research with providers

[Pull request](https://github.com/DFE-Digital/search-and-compare-ui/pull/286)
[Previous examples of the problem](/publish-teacher-training-courses/what-is-a-course)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Search results", img: { src: "search-results.png" } },
    { text: "Course", img: { src: "course.png" } }
  ]
}) }}
