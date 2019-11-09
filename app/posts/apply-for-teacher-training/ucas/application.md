---
title: Application form
description: Completing the UCAS application form
---
{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    { text: "Welcome to UCAS teacher training"},
    { text: "Personal details"},
    { text: "Course choices"},
    { text: "Course choice"},
    { text: "Course choice made"},
    { text: "Criminal declaration in course choice"},
    { text: "Course choices with a choice"},
    { text: "Education"},
    { text: "Add school or college"},
    { text: "Add qualification"},
    { text: "School and work experience"},
    { text: "Add school and work experience"},
    { text: "Personal statement"},
    { text: "References"},
    { text: "Add referee details"},
    { text: "Example of errors in form"},
    { text: "Application summary"},
    { text: "Section completion statuses"},
    { text: "Check form"}
  ]
}) }}
