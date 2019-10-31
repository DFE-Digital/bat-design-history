---
title: School experience
description: Adding school experience roles
---
{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "School experience"},
    {text: "Add role"},
    {text: "Review school experience"}
  ]
}) }}
