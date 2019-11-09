---
title: References
description: Completing a reference for a UCAS applicant
---
{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "Referee giving reference"},
    {text: "Referee giving their details"},
    {text: "Referee viewing applicants details"},
    {text: "Referee creating reference"},
    {text: "Referee confirming reference"},
    {text: "Referee finished"}
  ]
}) }}
