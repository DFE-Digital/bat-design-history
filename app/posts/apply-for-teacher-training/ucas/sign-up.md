---
title: Sign up
description: Registering for UCAS Teacher Training
---
{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "Welcome"},
    {text: "Terms and conditions"},
    {text: "Initial details"},
    {text: "Previous contact"},
    {text: "Postal address"},
    {text: "Postal address 2"},
    {text: "Postal address 3"},
    {text: "Personal details"},
    {text: "Security"},
    {text: "Registration successful"}
  ]
}) }}
