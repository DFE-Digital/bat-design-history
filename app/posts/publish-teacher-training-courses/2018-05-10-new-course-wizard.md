---
title: Experimental new course wizard
description: Breaking down data required for each course into a page-per-thing wizard.
---
First attempts at a ‘one thing per page’ approach to creating a course.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Title",
      img: { src: "title.png" }
    },
    {
      text: "Qualifications",
      img: { src: "qualifications.png" }
    },
    {
      text: "Start date",
      img: { src: "start-date.png" }
    },
    {
      text: "Duration",
      img: { src: "duration.png" }
    },
    {
      text: "Applications open",
      img: { src: "applications-open.png" }
    },
    {
      text: "Application codes",
      img: { src: "application-codes.png" }
    }
  ]
}) }}
