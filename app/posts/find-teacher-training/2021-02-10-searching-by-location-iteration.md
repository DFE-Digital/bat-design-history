---
title: Searching by location (iteration)
description: Updates to the design of search results having conducted a design review.
date: 2021-02-10
---

Having conducted a design review on [the original design](/find-teacher-training/searching-by-location), we made a number of changes:

* The number of courses found is now shown in the search results page heading
* Some filters have been changed to make them more user friendly:
  * Salary filter changed from radios to a checkbox
  * Location and subject filters link off to separate pages
  * London boroughs moved into filter sidebar
  * The way search filters appear on mobile devices is now in line with Manage and Support
* We’ve split out qualifications from study type in search results
* We’ve removed Get Into Teaching branding from the standardised guidance shown on course details pages

## The number of courses is the search results page heading

We’ve changed the position of the number of teacher training courses returned in a search:

* It used to be above the list of results
* Now, it’s the page heading

This makes the page look less cluttered and makes headings consistent - previously it was different for each search type (area, provider, across England, no results).

It also means accessible technology will give users a clearer understanding of what’s changed after they change the filters.

{% from "figure/macro.njk" import appFigure with context %}
{{ appFigure({
  image: {
    file: "teacher-training-courses.png"
  },
  caption: "Teacher training courses"
}) }}

{{ appFigure({
  image: {
    file: "teacher-training-courses-none.png"
  },
  caption: "Teacher training courses - no courses found"
}) }}

{{ appFigure({
  image: {
    file: "teacher-training-courses-scotland.png"
  },
  caption: "Teacher training courses (location lies outside of England)"
}) }}

## Improved search filters

### Salary filter changed from radios to a checkbox

We’ve changed the salary filter:

* It used to have 2 radios (‘Courses with and without salary’ and ‘Only show courses that come with a salary’)
* Now it’s a checkbox (‘Only show courses that come with a salary’)

The changes mean this filter is consistent with other checkbox options.

Also, having a checkbox choice means the content is clearer and easier to understand.

### Location and subject filters link off to separate pages

We’ve changed the location and subject filters:

* For area, we’ve replaced the search box with a link to a page where candidates can change their location or choose a provider.
* For subject, we now link to a page where candidates can select a different subject. This removes the scrollable list of subjects that previously appeared in the filter sidebar, which may have caused accessibility problems on mobile devices.

In future we might want to look at updating searches automatically (so users don’t have to use the ‘Apply filters’ button). This does pose usability and accessibility questions so we’d need to be sure it would work before investing in it.

### London boroughs moved into filter sidebar

We’ve changed where the London boroughs show on the search page:

* They used to be above the list of results
* They’re now in the filters section under ‘London boroughs’

This declutters the page and brings the London search results in line with other location filter options.

{{ appFigure({
  image: {
    file: "filters.png"
  },
  caption: "Filters before changes (left) and the revised design (right)."
}) }}

### Changing how search filters look on a mobile device

We’ve changed how the search filters appear on a mobile device;

* They used to be behind a toggle
* They now appear from the side as an overlay

This makes the design more consistent with Manage and Support.

{% from "gallery/macro.njk" import appGallery with context %}
{{ appGallery({
  items: [{
    id: "filters-mobile-closed",
    img: {
      alt: "Screenshot of filters hidden on mobile"
    },
    caption: "Filters hidden."
  }, {
    id: "filters-mobile-open",
    img: {
      alt: "Screenshot of filters revealed on mobile"
    },
    caption: "Filters revealed."
  }]
}) }}

### Splitting out qualification and study type in search results

We’ve changed the search results filters:

* It used to have the field ‘Course’ which contained study mode and qualification
* It’s now split out into ‘Qualification’ and ‘Study type’

This was changed to bring it in line with other values in search result items which are not combined with other values, and should make it easier to compare items.

{{ appFigure({
  image: {
    file: "result-item-before.png"
  },
  caption: "Previous design for a search result item."
}) }}

{{ appFigure({
  image: {
    file: "result-item-after.png"
  },
  caption: "Revised design for a search result item."
}) }}

The new design for search result items depends on candidate’s being able to use the new location model to search for courses.

Until we roll that out, we can combine aspects of this new design with elements from the current design, which show the distance to the nearest location we know about:

{{ appFigure({
  image: {
    file: "result-item-interim-scitt.png"
  },
  caption: "Interim design for a search result item. Alongside the list of travel areas the course offers placements in, we continue to show the distance to the nearest location, but we no longer show the address."
}) }}

{{ appFigure({
  image: {
    file: "result-item-interim-hei.png"
  },
  caption: "Interim design for a search result item for a university. Alongside the travel area the university is located within, we continue to show the distance to the main campus and the note that explains that only some time will be spent at that location."
}) }}

### Remove GIT branding from standardised guidance boxouts

We’ve changed the standardised guidance boxouts:

* They used to say “Advice from Get Into Teaching”
* They now don’t say “Advice from Get Into Teaching”

We changed this because research suggested candidates didn’t notice who the guidance was from. Also, sometimes guidance points to GOV.UK, and the GIT reference was in a small font that had accessibility issues.

The boxouts colour bar has changed from GIT green to GOV.UK blue.

{{ appFigure({
  image: {
    path: "/images/find-teacher-training/searching-by-location",
    file: "standardised-guidance-school-placements.png"
  },
  caption: "Previous design for standardised guidance."
}) }}

{{ appFigure({
  image: {
    file: "standardised-guidance.png"
  },
  caption: "Revised design for standardised guidance."
}) }}
