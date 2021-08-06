---
title: Results on a map – Full screen
description: First pass at showing courses on a full screen map.
date: 2018-10-07
screenshots:
  items:
    - Results on a map
    - Results open on a map
    - Results on a map mobile
    - Mobile filter open
---

A first pass at putting search results on a full-width map.

By putting results on a map it should be:

* clearer where the search has focused (eg when choosing a city like London this is treated as a point rather than an area)
* more obvious to see what is close to the user’s searched for location

## Design questions

### What do we show on the map?

A map is a little more complex than a listing because:

* there could be multiple courses at any given location (eg PGCE with QTS and a QTS only course)
* a course can be at multiple locations: each training provider has multiple locations, how do we represent this?
* some of a training provider’s training locations will be outside of the search radius
* the map could show an area larger than the searched for radius

This could make our result count confusing. eg "8 results found", but it shows 6 markers.

The map design doesn’t currently cater for many of these scenarios.

### What are users expectations?

We need to test maps with users to find out how they expect the map to behave.

When a user moves a map what should they see:

* results are already showing on the map as they move around
* new results appear as they move around
* nothing new, the user needs to explicitly search again

When they click a result, what do they expect to happen?

Do users want to see a list of results, pick one, and see where it is on a map? Or do they want to see where all courses are to compare them? The former need can be met with a map on the course page.

## Design notes

Give the map as much space as possible, going full width. This should make it easier to move around and navigate results on a map

As per convention, keep a space on the left for controlling the view: title, controls and filters for searching again.

On mobile this view moves to below the map and the filter toggle expands over the map like a modal. (In the screenshots it’s missing a + icon and a way of hiding the modal)
