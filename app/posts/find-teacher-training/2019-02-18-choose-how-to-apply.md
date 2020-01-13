---
title: Choose how to apply
description: User journey into UCAS or new Apply service
tags:
---

Initial designs to test the impact of giving candidates a choice on how they should apply.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "User journey",
      img: { src: "apply-flow.svg" },
      caption: '[Google drawing](https://docs.google.com/drawings/d/1kSIYsL1JaMADJkDT1gavtsasHTCOhZRbHMY9M4Oc9nE/edit?usp=sharing)'
    },
    { text: "Choose how to apply", img: { src: "01-choose-how-to-apply.png" } },
    { text: "Choose how to apply (UCAS selected)", img: { src: "01-choose-how-to-apply-ucas-selected.png" } },
    { text: "Apply on UCAS", img: { src: "02-apply-on-ucas.png" } },
    { text: "UCAS login page", img: { src: "03-ucas-apply-page.png" } }
  ]
}) }}
