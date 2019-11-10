---
title: Type of location MVP
description: A quick way to indicate if a location is an area or an address.
tags: publish-teacher-training-courses
---
A quick way to indicate if a location is an area or an address.

Some providers use the UCAS training locations to indicate a region or area, e.g. United Learning Sussex.

When we validate locations we require building and street name, town or city, and postcode. For regions or areas this validation isn’t appropriate. However we still need enough information to show courses on a map.

In the design below, if a user selects ‘An area’, then we would validate differently.

A [more complete workflow was previously designed and tested](/publish-teacher-training-courses/new-training-location-region).

{% from "figure/macro.njk" import appFigure %}
{{ appFigure({
  image: {
    path: page.filePathStem | replace("/posts", "/images"),
    file: "type-of-location.png"
  },
  caption: "Type of location"
}) }}
