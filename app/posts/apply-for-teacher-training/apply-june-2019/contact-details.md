---
title: Contact details
description: Adding emails, phone number and address
---
{% from "gallery/macro.njk" import appGallery with context %}
{{ appGallery({
  items: [
    {text: "Contact details"},
    {text: "What is your address"},
    {text: "Select address"},
    {text: "Manually add address"}
  ]
}) }}
