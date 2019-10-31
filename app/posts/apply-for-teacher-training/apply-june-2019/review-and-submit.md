---
title: Review and submit
description: See what you’ve entered, interview preferences and submission
---
{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "Review application"},
    {text: "Interview preferences"},
    {text: "Anything else and submission"},
    {text: "Application submitted"}
  ]
}) }}
