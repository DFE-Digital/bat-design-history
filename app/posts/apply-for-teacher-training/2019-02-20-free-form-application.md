---
title: Free form application and qualifications
description: More free text, less structured data.
related:
  items:
  - text: Prototype
    href: https://bat-apply.herokuapp.com/v04_2/application/index
tags: apply-for-teacher-training
---
Our designer Vin documented these on [Confluence](https://dfedigital.atlassian.net/wiki/spaces/BaT/pages/279314433/Designs) (Project Bluesky).

In user testing sessions, we"ve seen candidates with varied education and experience. Using structured format for data in the previous prototypes was a roadblock, as most candidates did not find their profile fitting into a standard format.

Candidates want to express more about themselves than just giving mandatory data.

## Candidate findings

* Candidates received the light weight, free format application form well
* Candidates rely on the help text to figure out what has to be filled in the sections
* Having work experience and skills in different pages leads to confusion, since candidates do not have a visibility of the next sections of the application.

## Provider findings

* Providers found that the application contents are not detailed enough for them to make a decision on the application
* Providers need factual data about the education and work

## Screenshots

{% from "gallery/macro.njk" import appGallery with context %}
{{ appGallery({
  items: [
    {text: "Your application"},
    {text: "Personal details"},
    {text: "Your qualifications"},
    {text: "Your qualifications (expanded)"},
    {text: "Your teaching experience and motivation"},
    {text: "References"}
  ]
}) }}
