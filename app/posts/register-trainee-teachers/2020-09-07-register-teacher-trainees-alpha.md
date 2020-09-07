---
title: Register Trainee Teachers - alpha prototype 
description: A look at the alpha prototype and thoughts on next steps.
date: 2020-09-07
related:
  items:
  - text: Alpha overview
    href: https://docs.google.com/presentation/d/1l7W6m5xa0HGS0RD5Q0BXIWRRnnExryvC_HeH02gI4NM/edit#slide=id.p1
  - text: Alpha research overview
    href: https://dfedigital.atlassian.net/wiki/spaces/TTDT/pages/1626931201/3.+User+Research+Rounds+Sprint+Work
  - text: Alpha research analysis 
    href: https://dfedigital.atlassian.net/wiki/spaces/TTDT/pages/1626931201/3.+User+Research+Rounds+Sprint+Work
  - text: Static prototype 
    href: https://projects.invisionapp.com/share/R2YGO89WADV#/screens/428900167
---

The Register Teacher Trainee service exists to support the exchange of data on trainee teachers in England between accredited Initial Teacher Training (ITT) providers and the DfE.

Each year the service provides data on approximately 40K trainee teachers across 632 institutions in England.

## Design notes

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Opt in with one partner school"
    },
    {
      text: "Opt in with multiple partner schools"
    },
    {
      text: "Confirmation of opt-in"
    }
  ]
}) }}
