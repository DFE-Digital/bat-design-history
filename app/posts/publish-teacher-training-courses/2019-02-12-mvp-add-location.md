---
title: Minimum viable Add training location
description: A replication of what’s available on UCAS. For if we don’t have time to build school autocompletes and other features, with everything else.
---
A much simplified training location flow. It replicates what is available on UCAS, without any extras.

This design represents a baseline we could build first. We’d then iterate towards the training location wizards, adding a [school autocomplete](schools-autocomplete), [then different types of location](new-training-location) along with [regions or areas](new-training-location-region).

We’d also avoid having to categorise existing locations into types, though doing this at rollover might be the only appropriate time.

## Screenshots

{% from "gallery/macro.njk" import appGallery with context %}
{{ appGallery({
  items: [
    {text: "Add training location"},
    {text: "Edit training location"},
    {text: "Locations"}
  ]
}) }}
