---
title: Progressive application
description: Ask for further information only when needed.
---
Our designer Vin documented these on [Confluence](https://dfedigital.atlassian.net/wiki/spaces/BaT/pages/279314433/Designs) (Project Bluesky).

We’ve heard from candidates that filling in the application details is painful and tedious. We believe that breaking the application in to chunks that candidates can fill in different stages will ease the process of application submission.

A user flow where a candidate creates an application in bits as and when required will be a better experience than asking the candidate fill in all the details at once. For example, while creating an account in amazon or during buying a product, the user is not asked about the residence address or payment details, but they are asked these details in relevant steps of the journey. We could adapt a similar approach.

## Findings

* Candidates reacted negatively to the progressive application
* Even when the work experience and other qualificaiton sections were clearly marked and understood as optional, the candidates chose to fill in all parts of the application
* Candidates felt a need to sell themselves more to the providers and hence needed more space to express themselves
* Asking the mandatory data like Work Experience after the interview was illogical in the candidates perspective

## Screenshots

{% from "gallery/macro.njk" import appGallery with context %}
{{ appGallery({
  items: [
    {text: "Your application"},
    {text: "Your application (expanded)"},
    {text: "Invite reply"},
    {text: "Invite reply (expanded)"},
    {text: "Conditional offer"},
    {text: "Conditional offer (with tracking)"}
  ]
}) }}
