---
title: Academic qualifications
description: Adding your degree, statutory requirements and other qualifications
---
{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "Academic qualifications"},
    {text: "Your degree"},
    {text: "Add degree"},
    {text: "Add non-UK degree"},
    {text: "Maths GCSE or equivalent"},
    {text: "Add maths GCSE or equivalent"},
    {text: "English GCSE or equivalent"},
    {text: "Add English GCSE equivalent"},
    {text: "Add other qualification"}
  ]
}) }}
