---
title: Residency status
description: Initial designs for capturing visas and residency status.
date: 2020-02-05
tags:
  - immigration status
screenshots:
  items:
    - text: Residency status
      src: 01-residency-status.png
    - text: I have the right to study selected
      src: 02-i-have-the-right-to-study-selected.png
    - text: I will need a tier 2 visa selected
      src: 03-i-will-need-a-tier-2-visa-selected.png
    - text: I will need a tier 4 visa selected
      src: 04-i-will-need-a-tier-4-visa-selected.png
    - text: I don’t know my status selected
      src: 05-i-dont-know-my-status-selected.png
    - text: Personal details summary with residency status
      src: 06-personal-details-summary-with-residency-status.png
---

{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}
{{ govukWarningText({
  html: "[We iterated this design before opening up the service to international candidates](/apply-for-teacher-training/international-candidates/#residency-and-visa-status)" | markdown("inline"),
  iconFallbackText: "Warning"
}) }}

The residency status screen is shown when a non EU (and perhaps non EEA) nationality is selected.
