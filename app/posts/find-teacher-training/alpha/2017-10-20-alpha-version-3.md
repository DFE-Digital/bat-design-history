---
title: Alpha version 3
date: 2017-10-20
---
[Version 3 prototype](https://search-and-compare-alpha.herokuapp.com/v03/)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Index",
    img: { src: "index.png" }
  }, {
    text: "Choose your search",
    img: { src: "choose-your-search.png" }
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
  }]
}) }}
