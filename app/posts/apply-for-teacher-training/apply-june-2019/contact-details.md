---
title: Contact details
description: Adding emails, phone number and address
---
{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "Contact details"},
    {text: "What is your address"},
    {text: "Select address"},
    {text: "Manually add address"}
  ]
}) }}
