---
title: References
description: Adding first and second referees
---
{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "Add first referee"},
    {text: "Add second referee"},
    {text: "References"},
    {text: "Review references"}
  ]
}) }}
