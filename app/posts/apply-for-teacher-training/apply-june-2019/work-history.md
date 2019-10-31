---
title: Work history
description: Adding work history and explaining gaps
---
{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "Work history"},
    {text: "5 year gap"},
    {text: "Add job"},
    {text: "Review work history"},
    {text: "Explain gap in work history"}
  ]
}) }}
