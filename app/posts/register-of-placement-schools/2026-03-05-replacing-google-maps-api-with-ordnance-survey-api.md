---
title: Replacing the Google Maps API with the Ordnance Survey API
description: We moved from the Google Places API to the Ordnance Survey Places API, using the Public Sector Geospatial Agreement to access OS location data
date: 2026-03-05
tags:
  - location
  - search
  - ordnance survey
  - apis
related:
  items:
    - text: Finding placement schools by location
      href: /register-of-placement-schools/finding-placement-schools-by-location/
    - text: Exploring showing search results on a map
      href: /register-of-placement-schools/exploring-showing-search-results-on-a-map/
---

We used the Google Places API to power the location autocomplete and search results.

We replaced the Google Places API with the Ordnance Survey (OS) Places API, which is available to public sector organisations through the Public Sector Geospatial Agreement (PSGA).

## The policy change

The PSGA gives public sector organisations access to Ordnance Survey location data and APIs at no additional cost. As a government service, we are eligible to use OS data under this agreement.

## How this affects users

The change was made at the infrastructure level. From a user's perspective, the autocomplete and location search continue to work in the same way:

- users can enter a postcode, town or city to search for placement schools
- the autocomplete suggests matching locations as the user types
- results are returned and sorted by distance within the chosen radius

## What we changed

We replaced the Google Places API with the OS Places API. We maintained the same functionality throughout:

- location autocomplete suggestions
- geocoding postcodes and place names to coordinates
- filtering and sorting results by distance and radius

## What we considered

### Why we moved away from Google

Using the Google Places API in a public sector service requires a commercial licence and attribution. The OS API removes this cost and removes the need to display Google attribution on government pages.

OS data is also highly accurate for Great Britain and is the authoritative source of geographic data for the public sector.

### Maintaining functionality

We prioritised maintaining the same user experience during the switch. Users should not notice any difference in how location search works.
