---
title: Private beta as launched
description: The service as it was launched on 1 May 2018.
tags:
---

[Tested with users on May 3](/find-teacher-training/private-beta/user-research-may-3), with key observations noted below.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Index",
      img: { src: "index.png" },
      caption: ''
    },
    {
      text: "Disclaimer",
      img: { src: "disclaimer.png" },
      caption: '
We found that users were likely to notice and respond to the disclaimer. When questioned, users had a better understanding of what this disclaimer means.

This page performed significantly better than the [original banner](/find-teacher-training/private-beta/user-research-apr-25#search-results).
      '
    },
    {
      text: "Choose your search",
      img: { src: "choose-your-search.png" },
      caption: '
Some users did not realise they needed to ‘pick one’, the radio buttons and copy were not sufficient in indicating this. We saw users sometimes select multiple radio buttons, first clicking "By location" and then "By provider", before continuing.

We [iterated this design](/find-teacher-training/private-beta/iteration-may-15) to be more explicit about the task and the need to pick only one.
      '
    },
    {
      text: "Search by location",
      img: { src: "search-by-location.png" },
      caption: ''
    },
    {
      text: "Search by provider",
      img: { src: "search-by-provider.png" },
      caption: ''
    },
    {
      text: "Financial support",
      img: { src: "financial-support.png" },
      caption: ''
    },
    {
      text: "Search results",
      img: { src: "search-results.png" },
      caption: ''
    },
    {
      text: "No search results",
      img: { src: "no-search-results.png" },
      caption: 'Private beta launched without the [suggested searches feature trialled on Apr 25](/find-teacher-training/private-beta/user-research-apr-25)'
    },
    {
      text: "Minimal course details",
      img: { src: "minimal-course-details.png" },
      caption: ''
    },
    {
      text: "Full course details",
      img: { src: "full-course-details.png" },
      caption: ''
    },
    {
      text: "Study type filter",
      img: { src: "study-type-filter.png" },
      caption: ''
    },
    {
      text: "Qualifications filter",
      img: { src: "qualifications-filter.png" },
      caption: ''
    }
  ]
}) }}
