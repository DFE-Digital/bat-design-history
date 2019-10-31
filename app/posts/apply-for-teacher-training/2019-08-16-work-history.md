---
title: Work history (August iteration)
description: Move guidance into a question.
tags: apply-for-teacher-training
---
Following on from [the original design](/apply-june-2019/work-history), rather than using multiple details elements and two submit button we’ve shaped the guidance as a question and used routing based on their answer to send users to the right place.

## Screenshots

{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "Work history"},
    {text: "Job"},
    {text: "Out of the workplace"},
    {text: "Review work history"}
  ]
}) }}
