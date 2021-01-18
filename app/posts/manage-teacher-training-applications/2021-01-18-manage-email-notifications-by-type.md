---
title: Managing email notifications by type
description: Let users choose which emails they receive
date: 2021-01-18
---

Currently users can turn off all email notifications. But we know different users want to receive certain emails without receiving the others.

This means users have to set up rules to filter ones they don't want out of their inbox. Or worse, they start to ignore email notification as a whole becuase they’re too noisy.

If we let users turn off email notifications by type, then we’ll be able to specify which emails they receive.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Prompt",
    img: {
      src: "prompt.png"
    }
  }]
}) }}

