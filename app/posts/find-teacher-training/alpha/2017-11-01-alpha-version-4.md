---
title: Alpha version 4
date: 2017-11-01
---

[Version 4 prototype](https://search-and-compare-alpha.herokuapp.com/v04/)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Index",
    img: { src: "index.png" }
  }, {
    text: "Choose your search",
    img: { src: "choose-your-search.png" }
  }, {
    text: "Whats your degree",
    img: { src: "whats-your-degree.png" }
  }, {
    text: "What subject",
    img: { src: "what-subject.png" }
  }, {
    text: "Financial support",
    img: { src: "financial-support.png" }
  }, {
    text: "Search results",
    img: { src: "search-results.png" }
  }, {
    text: "Course details",
    img: { src: "course-details.png" }
  }, {
    text: "About the course",
    img: { src: "about-the-course.png" }
  }, {
    text: "Modules",
    img: { src: "modules.png" }
  }, {
    text: "Course comparison",
    img: { src: "course-comparison.png" }
  }]
}) }}
