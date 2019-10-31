---
title: Language skills
description: Is English your main language?
---
{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "English is main language"},
    {text: "English is not main language"}
  ]
}) }}
