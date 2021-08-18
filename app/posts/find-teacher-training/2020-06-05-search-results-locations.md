---
title: Placement schools in search results
description: Iterating results to better indicate why a University course is near to a candidate and trying maps
date: 2020-06-05
screenshots:
  items:
    - text: "Version 4: Explaining placement schools"
      src: 01-search-results-with-placement-school-details.png
    - text: University search results with a map
      src: 02-university-search-results-with-map.png
    - text: Other search results with a map
      src: 03-non-university-search-results-with-map.png
    - text: "Version 3: Showing distance away from you"
      src: 04-search-results-distance-away-from-you.png
    - text: "Version 2: Showing where time will be spent"
      src: 05-search-results-distance-away.png
    - text: "Version 1: Showing distance of placement schools"
      src: 06-search-results-minimal.png
---

Following [our intention to treat universities as an area](/find-teacher-training/universities-as-an-area/), we needed to update the search result design to better indicate the distance of each course.

Without a change in design it would not be clear why a University that’s 5 miles away is showing above a SCITT or school direct result that’s only 3 miles away.

We must indicate to a candidate:

* that placement schools are near to them, and that is why this result is ranking highly
* that you will spend most of your time in these schools, rather than at University
* how they end up in a placement school

## What we tried

### Testing with providers

When we tested search results with providers, we started minimally, showing the following text:

> __Distance:__
>
> Placement schools are in this area
> 3 miles to university

With these options for the placement school text:

* Placement schools are in this area (if search is < 11 miles from University)
* Placement schools are within 1 mile (if search is 11 miles from University)
* Placement schools are within X miles (if search is X + 10 miles from University)

### Testing with candidates

For candidates we expanded university search results to give more context about where time would be spent:

> __Location:__
>
> Placement schools:
> Placement schools are in this area
> You’ll be placed in schools for most of your course
>
> University:
> 4 miles away
> You’ll be at university only some of the time

And we gave more context to other results:

> __Location:__
>
> 2 miles away
> (Nearest of 3 locations to choose from)
>
> Location:
> [Name of training location eg "Patcham High School"]
> [Address of training location]

We found that:

* statements about where candidates will spend their time were successful
* "this area" is too vague, is that my area, my town, the area around the University?
* candidates interpreted "within 1 mile" as being closer than "in this area"
* some also thought that "within 1 mile" meant 1 mile of the university
* candidates preferred specific distances
* providers feared that candidates would want to choose their placement schools, some candidates expressed a preference to choose

### Iterating and testing again with candidates

We changed the following to make it clearer that we meant distance from them rather than from the university, and to avoid the false impression of exactness with specific numbers:

* replaced "this area" with "near you"
* removed "within X miles", which although was specific and candidates liked that, was not at all accurate
* used vaguer terms to represent the diminishing chance that a placement school is close by, "might be near you" and then "might be in commuting distance"
* added a details element to explain placement schools, to justify the vagueness (we don't know which school they will be in, they can't choose the school, the university won't know until the school begins, past schools used for certain subjects are not good indicators)

> __Location:__
>
> Placement schools:
> Placement schools are near you
> You’ll be placed in schools for most of your course
>
> University:
> 4 miles away from you
> You’ll be at university only some of the time

With these options for the placement school text:

* Placement schools are near you (search is < 11 miles from University)
* Placement schools might be near you (search is < 21 miles from University)
* Placement schools might be in commuting distance (search is < 50 miles from University)

Explaining placement schools:

> You can’t pick which schools you want to be in, but your university will try to place you in schools you can commute to.
>
> Universities usually work with over 100 potential placement schools. Most will be within 10 miles of the university, but sometimes they can cover a wider area, especially outside of cities.
>
> [More about placements on this course]

### Adding maps to results

[Unlike previous designs](/find-teacher-training/map-3/), which focused on a single map showing many courses, these designs focused on many maps, each showing 1 course.

Distance alone is not helpful, as one candidate told us: 5 miles into Newcastle with rush hour traffic might take 40 minutes, whereas 5 miles out of town could take 5 minutes.

We used our last candidate sessions to explore some map concepts:

* showing a map of locations for each course
* using circles to indicate where placement schools might be
* showing their location on the map

These are experimental designs, showing 10 interactive maps on a page has significant performance drawbacks.

## Further design tweaks

In research we also tested:

* removing the radius control altogether
* removing the sort by control
* giving the page a more specific title related to the user’s search
