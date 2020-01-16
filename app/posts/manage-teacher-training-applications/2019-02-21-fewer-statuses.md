---
title: Fewer statuses
description: Trying a smaller set of statuses.
related:
  items:
  - text: Confluence documentation
    href: https://dfedigital.atlassian.net/wiki/spaces/BaT/pages/279314433/Designs
  - text: Prototype
    href: https://bat-manage-teacher-training-applications.herokuapp.com/provider/v02/index
  - text: Minimal and maximal statuses
    href: https://docs.google.com/document/d/1qQOvPcnvskyvwaTqtEUD2CAZjKfcYr7v0rlK_kcDhaA
---
A minimum viable service that could allow the providers to access and manage their ITT applications.

The team thought the statuses were not relevant so came up with a minimal set of statuses for an application.

## Findings

* Needs extra info to track recruitment progress
* routes - ie. SCITT, SD, salaried, school/campus (?)
* Need to be able to scan quickly - Download to print/save
* Design hunch: ability to extract data
* In review - confusing; expectation to have “interview offered”
* Recruited - confusing; expectation to have conditional/unconditional
* Rejected - contentious topic!
* need more options to reflect real life scenarios (No places, Not suitable for teaching, Eligibility (no evidence), No show, No time to meet conditions)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {text: "Dashboard"},
    {text: "New applications"},
    {text: "New application"},
    {text: "Change application status"},
    {text: "Recruited applications"}
  ]
}) }}
