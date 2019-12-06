---
title: Add a region or area workflow
description: Add a region or area, rather than a school or university.
tags: publish-teacher-training-courses
---
Following on from the [specific school or university](/publish-teacher-training-courses/new-training-location) workflow, this design builds out the ‘region’ training type.

Providers have filled in UCAS training locations with names and addresses that correspond to areas, for example ‘United Teaching Northamptonshire’, ‘East Midlands’ or ‘London’. In Find we try to geocode these as best we can, but a point in the middle of London, or another type of best guess, doesn’t yielf the best results.

This design aims to:

* allow providers the freedom to specify regions, using whatever name they choose
* use a school autocomplete to list schools in the area, to get a proper geographical understanding of the region

Concerns we expect from providers that the design would need to address:

* I have too many schools to list
* I don’t know which schools to list
* Will candidates see these schools?

## User research

* [Gateway Alliance](https://lookback.io/watch/XkCjbzaEZNPrEnNcp?t=32m54.07s) (didn’t test the design, but would use regions)
* [University of Huddersfield](https://lookback.io/watch/pWYBvEpr8YfeF7pAx)
* [The Royal Borough Teaching School Alliance](https://lookback.io/watch/iviAKDMGPxMK68voe)

## Screenshots

{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "What type of location?"},
    {text: "Region name"},
    {text: "Schools in the area"},
    {text: "Confirm"},
    {text: "Confirm (with a map)"},
    {text: "Edit"}
  ]
}) }}
