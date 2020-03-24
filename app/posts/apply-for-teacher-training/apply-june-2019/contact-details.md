---
title: Contact details
description: Adding emails, phone number and address.
---

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Contact details" },
    { text: "What is your address" },
    { text: "Select address" },
    { text: "Manually add address" }
  ]
}) }}
