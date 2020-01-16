---
title: Apply – December 2018
description: The Apply designs as they stood at the end of December 2018.
related:
  items:
  - text: Prototype
    description: |
      Username: `batapply`
      Password: `batapply1`
    href: https://bat-apply-prototype.herokuapp.com
---
Our designer Faz looked at capturing the same fields needed in the UCAS process but by using the GOV.UK design patterns.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {text: "Apply landing page"},
    {text: "Create an account"},
    {text: "Your application"},
    {text: "Personal details"},
    {text: "Contact details"},
    {text: "UK Address"},
    {text: "International Address"},
    {text: "British Forces Post Office Address"},
    {text: "Correspondence"},
    {text: "Correspondence (UK)"},
    {text: "Correspondence (International)"},
    {text: "Check your eligibility"},
    {text: "Add a degree"},
    {text: "Enter degree"},
    {text: "Add GCSEs"},
    {text: "Add Maths equivlanet"},
    {text: "Add Science GCSE"},
    {text: "Your qualifications"},
    {text: "Work history"},
    {text: "Enter a job"},
    {text: "Work history overview"},
    {text: "Add GCSEs"}
  ]
}) }}
