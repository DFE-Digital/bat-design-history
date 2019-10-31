---
title: Subject knowledge
description: Evidence of knowledge and interest in a subject
---
{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "Subject knowledge"}
  ]
}) }}
