---
title: Residency status
description: Initial designs for capturing visas and residency status
date: 2020-02-05
---
Initial designs for capturing visas and residency status

The residency status screen is shown when a non EU (and perhaps non EEA) nationality is selected.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Residency status",
      img: { src: "01-residency-status.png" }
    }, {
      text: "I have the right to study selected",
      img: { src: "02-i-have-the-right-to-study-selected.png" }
    }, {
      text: "I will need a tier 2 visa selected",
      img: { src: "03-i-will-need-a-tier-2-visa-selected.png" }
    }, {
      text: "I will need a tier 4 visa selected",
      img: { src: "04-i-will-need-a-tier-4-visa-selected.png" }
    }, {
      text: "I don’t know my status selected",
      img: { src: "05-i-dont-know-my-status-selected.png" }
    }, {
      text: "Personal details summary with residency status",
      img: { src: "06-personal-details-summary-with-residency-status.png" }
    }]
}) }}
