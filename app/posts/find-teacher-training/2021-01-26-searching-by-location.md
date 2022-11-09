---
title: Searching by location
description: Considering a different way to model where providers offer school placements.
date: 2021-01-26
screenshots:
  items:
    - text: Find teacher training courses
      caption: Shows a list of popular cities/towns to incentivise to searching within broad areas rather than by postcode. The search input below this list allows searching using a place name, postcode, provider name or provider code.
    - text: Select where you want to train in London
      caption: If you select ‘London’ or enter a location within the London travel area, you are asked to select the London Boroughs you want to search in. If you enter a postcode, the borough(s) that this postcode lies within is pre-selected.
    - text: Select the subjects you want to teach
      caption: Removes guidance about financial support and SKEs (this is now shown in context on course detail pages) and adds guidance about primary course specialisms.
    - text: Teacher training courses
      caption: Search filters have been updated so options can now be changed without leaving the page
    - text: Teacher training courses (in London)
      caption: If searching within London, the list of boroughs being searched within is shown above the results, alongside a link to change them
    - text: Teacher training courses (for a provider)"
    - text: Teacher training courses (across England)"
    - text: Teacher training courses (no courses found)"
    - text: Teacher training courses (location lies within Scotland)
      caption: |
        As this service only lists training courses in England, we can provide the relevant link to [teachinscotland.scot](https://teachinscotland.scot/)
    - text: Teacher training courses (location lies within Wales)
      caption: |
        As this service only lists training courses in England, we can provide the relevant link to [discoverteaching.wales](https://www.discoverteaching.wales/routes-into-teaching/)
    - text: Teacher training courses (location lies within Northern Ireland)
      caption: |
        As this service only lists training courses in England, we can provide the relevant link to [education-ni.gov.uk](https://www.education-ni.gov.uk/articles/initial-teacher-education-courses-northern-ireland)
    - text: Course details
      caption: Showing standardised guidance
    - text: Apply for this course
      caption: This remains unchanged
    - text: Apply for this course with UCAS
      caption: UCAS application route showing course, provider and location codes
related:
  items:
    - text: Locations research overview
      href: https://docs.google.com/presentation/d/1ambjdiFgZ0oSiJd_LVKt6qihaapg-3zEu0l9kVGZgmM/
      description: Summary of previous research carried out on locations prior to July 2020
    - text: User research findings (iteration 1)
      href: https://docs.google.com/presentation/d/10hgv9S6L2mL7hDmI_6DOeD-emgg9DN0Dzxm25bDZwes/
    - text: User research findings (iteration 2)
      href: https://docs.google.com/presentation/d/1kNpaTUxkc24-uS0P1-nN5b0R6wu0GWZR07hPr03BARU/
---

## The location problem

Currently, Find uses a model inherited from UCAS. This allows courses to show 2 types of location:

* the training provider’s contact address
* their training locations – places a candidate can apply to, but not necessarily where they will spend the majority, if any, of their time.

Providers can add up to 37 addresses. Some set themselves up as multiple providers so they can add more locations (such as [West London Teaching School Alliance](https://web.archive.org/web/20210125160621/https://www.find-postgraduate-teacher-training.service.gov.uk/results/filter/provider?l=3&prev_l=none&prev_lat=none&prev_lng=none&prev_loc=none&prev_lq=none&prev_query=none&prev_rad=none&query=West+London+Teaching+School+Alliance)). Others only list one address (this is the case for 50% of SCITTs and 100% of HEIs).

Listed addresses are not classified in any way (they could be administrative addresses, campuses, schools, hubs or areas).

This is the [location problem](/publish-teacher-training-courses/the-location-problem); the information we have is inconsistent, which makes choosing courses based on location impossible.

### School placements

Candidates are based in a number of schools during training. Because location information doesn’t accurately reflect real placement locations:

* candidates may apply to a course based on an address that is not available
* they may not know that they are placed in different locations during their training
* they may not know that the amount of time spent in school differs according to the training route.

For candidates, choosing a location is important, yet because of poor location information, Find potentially sets the wrong expectation for where they will train.

### Why not ask providers to give us a list of all the placement schools they work with?

This might be possible, but gathering this information is not a quick or simple process. Also, placement schools can change from year to year, so we would need providers to update their information regularly.

It may be possible in future to match [a database of schools in England](https://get-information-schools.service.gov.uk), with our database of teacher training providers.

However, a candidate will never be based at one location. Showing all addresses may set the expectation that candidates can choose specific placement schools. In reality, they cannot. The provider assigns a candidate to a location, although they will consider their commute.

## A new approach

Our challenge is to balance the candidate’s need to find courses based in a particular location while honestly reflecting the data we have, which doesn’t allow us to be specific about locations.

We have looked at matching the candidate’s location with a wider area. We initially considered using local authorities however, these can vary in size and have unrecognisable or unfamiliar names.

A better alternative may be [Travel to Work Areas](https://en.wikipedia.org/wiki/Travel_to_work_area):

> A Travel to Work Area or TTWA is a statistical tool used by UK Government agencies and local authorities, especially by the Department for Work and Pensions and Jobcentres, to indicate an area where the population would generally commute to a larger town, city or conurbation for the purposes of employment.

Using TTWAs would also make it easier for providers to select which areas can offer school placements in, and would therefore be more likely to keep this information updated.

{% from "gallery/macro.njk" import appGallery with context %}
{{ appGallery({
  items: [{
    text: "Current model",
    caption: "Search using a postcode. A radius of 50 miles is drawn around the user’s postcode. Providers who happen to have a location listed that lies within that area are returned.",
    alt: "Diagram of current model"
  }, {
    text: "Proposed model",
    caption: "Search using Travel to Work Areas. A user picks an area (or enters a postcode that is mapped to an area). Providers who offer school placements in that area are returned.",
    alt: "Diagram of proposed model"
  }]
}) }}

### Searching within London

London is a large, highly populated area. It has many more candidates and courses than in other areas.

Most of Greater London is covered by the London TTWA, and this can return too many results. To break this travel area into smaller areas, we can use London Council Boroughs. Candidates may want to select a number of different boroughs to search within.

### Improving our location data

Some providers (in particular universities) only list one location. We can guess the location of their school placements from the TTWA they are located within, but this may not reflect the true area they serve. For this reason, we would need to add the ability in Publish for providers to select which TTWAs (and/or London Boroughs) they offer school placements in.

## Improving guidance

Earlier attempts to solve the location problem explained how school placements work in search results. However this made results lengthy and complicated, and it was hard to determine why different results had different guidance and information.

Course detail pages are largely made up of provider-generated content, but they also include standardised content about financial support (bursaries, loans, salaries).

We could include standardised content about how placements work and explain that choosing a location comes later in the process. We can also include data about where a provider has placements if they have shared that information with us.

To distinguish between provider-generated content and standardised guidance, we can use a box out device and link back to related content on Get Into Teaching (GIT). By using Get Into Teaching brand colours, we can give a subtle nod back to that part of the user journey.

![Standardised guidance boxout.](standardised-guidance-school-placements.png "An example of standardised guidance about school placements.")

![Standardised guidance boxout.](standardised-guidance-qualifications.png "An example of standardised guidance about qualifications.")

![Standardised guidance boxout.](standardised-guidance-financial-support.png "An example of standardised guidance about financial support.")

Finally, we currently show a map of the training locations a provider has given, alongside a table which shows a code for each location. This map gives an impression of accuracy and certainty, which doesn’t reflect reality, while the list of location codes is only useful if you decide to apply with UCAS.

We can remove the map, and only show the list of location codes if you choose to apply with UCAS.

## Hypotheses

If we encourage users to search within a Travel to Work Area,\
We set the right expectations about where they will train.

If we provide standardised guidance on course pages\
Then we can set the scene about placements, be an authoritative source (and in time providers can avoid providing the same information in different ways)

*[TTWA]: Travel to Work Area
*[TTWAs]: Travel to Work Areas
*[HEI]: Higher Education Institute
*[HEIs]: Higher Education Institutes
*[SCITT]: School Centred Initial Teacher Training
*[SCITTs]: School Centred Initial Teacher Training
*[UCAS]: Universities and Colleges Admissions Service
