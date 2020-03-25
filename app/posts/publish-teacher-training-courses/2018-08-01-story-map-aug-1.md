---
title: Story map – 1 August 2018
description: Screenshots of the end to end journey from publish courses to search and compare.
date: 2018-08-01
---

Designs illustrating each column in the [Trello Story map](https://trello.com/b/9fCxMchD/bat-search-story-map).

Show the end to end journey, from publishing and enriching courses to search and compare where applicants find and apply to courses.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Check UCAS data",
    img: { src: "check-your-courses.png" }
  }, {
    text: "Request access",
    img: { src: "request-access.png" }
  }, {
    text: "Enrich organisation information",
    img: { src: "enrich-organisation-information.png" }
  }, {
    text: "Enrich course",
    img: { src: "enrich-course.png" }
  }, {
    text: "Preview course",
    img: { src: "preview-course.png" }
  }, {
    text: "Publishing a course",
    img: {
      path: "/images/publish-teacher-training-courses/validating-on-publish",
      src: "validating-a-course-on-publish.png"
    }
  }, {
    text: "Service start page",
    img: { src: "index.png" }
  }, {
    text: "Find courses by location",
    img: { src: "find-by-location.png" }
  }, {
    text: "Find courses by subject",
    img: { src: "find-by-subject-collapsed.png" }
  }, {
    text: "View search results",
    img: { src: "teacher-training-courses.png" }
  }, {
    text: "Course detail page",
    img: { src: "minimum-course-page.png" }
  }]
}) }}
