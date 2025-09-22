---
title: Finding placement schools by location
description: We added a way for citizens to find placement schools by location
date: 2025-08-01T12:00:00+00:00
tags:
  - placement schools
  - location
  - find
related:
  items:
    - text: Finding placement schools by provider
      href: /register-of-placement-schools/finding-placement-schools-by-provider/
    - text: Viewing individual placement schools
      href: /register-of-placement-schools/viewing-individual-placement-schools/
screenshots:
  items:
    - text: Initial find placement schools form
      src: finding-placement-schools--form.png
    - text: Initial find placement schools form - with errors
      src: finding-placement-schools--form-error.png
    - text: Find placement schools by location search form
      src: finding-placement-schools-by-location--form.png
    - text: Find placement schools by location search form - with errors
      src: finding-placement-schools-by-location--form-error.png
    - text: Find placement schools by location form, showing autocomplete suggestions
      src: finding-placement-schools-by-location--form-autocomplete.png
    - text: Find placement schools by location form, showing selected location
      src: finding-placement-schools-by-location--selected-location.png
    - text: Search results page
      src: finding-placement-schools-by-location--results.png
    - text: Search results page with filters selected
      src: finding-placement-schools-by-location--results-with-filters.png
    - text: Search results page with search term
      src: finding-placement-schools-by-location--results-with-search.png
---

People start with location. Candidates look for schools near their home or place of study. Providers plan coverage across towns and regions. DfE teams need to see where placements are available and where there are gaps. We added a way for people to find placement schools by location so they can make faster, more confident decisions about where training can take place. This also gives providers and the DfE a clearer picture of geographic coverage.

This post is the first of three about searching and viewing placement schools:

1. You are here: **Finding placement schools by location**
2. Next: [Finding placement schools by provider](/register-of-placement-schools/finding-placement-schools-by-provider/)
3. Then: [Viewing individual placement schools](/register-of-placement-schools/viewing-individual-placement-schools/)

In this post, we explain why location search matters, the user needs it serves, and how we designed and built the experience.

## Why location search matters

This route suits discovery. Users can start with a postcode, town or city and see schools within a chosen radius. It helps when:

- candidates want placements near home or the place of study
- providers plan coverage across an area
- DfE teams check local availability and gaps

Benefits:

- fast, place-first results sorted by distance
- supports early planning where the exact school is not yet known
- reveals patterns and gaps at a glance

## User needs

As a provider, candidate or trainee:

- I need to find placement schools near a place or postcode, so that I can shortlist realistic options.
- I need to choose a radius and view the results sorted by distance, so I can quickly judge the travel time.
- I need to filter by phase and setting, for example, primary, secondary or special, so that I only see relevant schools.
- I need to see which providers partner with each school in the current and recent academic years, so that I can decide which courses to explore.

Read more [initial user needs](/register-of-placement-schools/initial-user-needs/).

## How it works

![Find placement schools by location flow](find-placement-schools-by-location--flow.png "Find placement schools by location flow")

The ‘Find placement schools’ flow has 3 steps:

1. Find placement schools by location, school or training provider
2. Enter city, town or postcode
3. View a list of placement schools

### Find placement schools by location, school or training provider

The first step in the ‘Find placement schools by location, school or training provider’ flow is to decide how to search. We show a list of radio buttons:

- by city, town or postcode
- by school
- by university or other training provider

In this post, we will describe the first flow, searching by city, town or postcode.

If the user does not select an option, we show an error message:

> Select find placement schools by location, school or training provider

### Enter city, town or postcode

The second step in the flow is to enter the location of the placement schools.

We use an autocomplete to suggest locations when the user types a city, town or postcode.

If the user does not enter a location, we show an error message:

> Enter a city, town or postcode

### View a list of placement schools

The final step in the flow shows placement schools ordered by distance from the search location.

We show the result count and the search term in the page heading. For example, “273 placement schools near ‘Bristol’”.

We show placement school details in a [GOV.UK summary card](https://design-system.service.gov.uk/components/summary-list/#summary-cards).

![Example summary card](summary-card-example.png "Example summary card")

Each placement school on the list includes:

- school name - in the summary card heading
- distance from the search location in miles
- school status
- UK provider reference number (UKPRN)
- unique reference number (URN)
- a link to the school’s details on Get information about schools (GIAS)
- school type and type group
- education phase and age range
- address
- a list of academic years the school participated in ITT

The distance between the search location and the school is calculated from the latitude and longitude data derived from the search location and the school’s address details.

#### Searching and filtering

When a user searches or filters the list of placement schools, we return a list of placement schools matching the search and filters.

Searching and filtering are independent of one another. If someone first searches for a placement school and then applies filters, the filters act upon the subset of placement schools returned by the initial search.

Similarly, if someone filters the list of placement schools, a subsequent search will only include the placement schools in the filtered list, not the complete list.

Clearing a search will not clear the filters, and removing the filters will not clear the search.

### Filter sidebar

The filter sidebar includes filters for:

- search radius
- school type
- education phase
- school status

#### Search radius filter

We show a list of radio buttons for the search radius filter. We list three radii:

- 10 miles - the default
- 25 miles
- 50 miles

Since these options are displayed as radio buttons, the selected option is not included in the ‘Selected filters’ section of the filter panel. The option cannot be removed, only defaulted back to the default option of ‘10 miles’.

#### School type filter

The school type filter shows all ‘establishment type groups’ from GIAS.

We use the ‘establishment type groups’ as a proxy for school type, as they are fewer and simpler to understand.

We display all school types, even if there are no placement schools that match the type. This allows users to understand what placement schools are available in the register.

If there are more than 5 types, we create a scrollable region and use JavaScript to add a search box. Typing in the search box updates the list below with types matching the search term. If there are no matches, the list is empty.

If JavaScript is unavailable, the types are still within the scrollable region, but we no longer show the search box.

The scrollable region is indicated by a:

- cut off mid-way through a checkbox
- bottom border
- custom styles to display a scrollbar

The scroll area shows four and a half school types to help users realise that other school types are on the list. This smaller height lets users move to a filter below.

When a user selects one or more school types and applies the filters, we display the remove filter tags under ‘selected filters’ at the top of the filter panel.

#### Education phase filter

The education phase filter shows all education phases from GIAS, even if there are no placement schools that match the education phase. This allows users to understand what placement schools are available in the register.

This filter works in the same way as the ‘School type’ filter.

#### School status filter

We show a list of checkboxes containing the school statuses from GIAS:

- open
- closed
- open, but proposed to close
- proposed to open

### Placement school search

![Example search form](search-example.png "Example search form")

We include a search box above the list of placement schools. This search enables users to find a specific placement school by its name, UK provider reference number (UKPRN), or unique reference number (URN) within the search results.

Once a user has searched, a ‘Clear search’ link is shown below the search field, allowing users to reset the search back to the initial state. The initial state may be the initial list of placement schools or a subset if the user has previously filtered the list.

#### No results

If the search does not return a result, we show a message depending on the search and filter terms:

- There are no results for ‘search term’.
- There are no results for ‘search term’ and the selected filter.
- There are no results for ‘search term’ and the selected filters.
- There are no results for the selected filter.
- There are no results for the selected filters.

#### Empty searches

If a user does not enter a search term when submitting a search, we show a list of placement schools that match any filter criteria.

### Pagination

![Example pagination](pagination-example.png "Example pagination")

We include pagination below the list of placement schools. If the list contains more than 25 items, we show the standard [GOV.UK pagination component](https://design-system.service.gov.uk/components/pagination/).

## Further considerations

We considered some changes that we did not implement. These included:

- Show travel time as well as distance
- Showing search results on a map
- No-JavaScript version of the flow
- Showing more school details

### Show travel time as well as distance

Showing travel time as well as distance makes the results more useful.

Time reflects real-world access. Two schools can be the same distance away, but take very different amounts of time to reach.

It supports different travel modes. Many trainees do not drive. Travel time allows people to compare options by walking, cycling, public transport, or car, not just “as the crow flies”.

It enables fair comparisons across places. Rural and urban areas can have similar distances but very different journey times. Showing time makes this visible and avoids favouring locations that look close on a map but are slow to reach.

It reduces misleading results. Straight-line distance is a poor proxy for actual accessibility. Time-based measures align better with whether a placement is realistically reachable.

While distance helps with orientation, journey time tells users whether a placement is viable. Using both provides a more transparent and more honest picture, so we will consider adding this feature in the near future.

### Showing search results on a map

Showing search results on a map makes the results more useful.

People grasp geography faster on a map. It shows clusters, gaps and proximity to landmarks such as home, university or transport hubs. It complements the list view rather than replaces it.

It supports decision-making. Users can see whether options are concentrated along a rail line, split by a river, or spread across rural areas. That context is hard to read from a list alone.

It improves filtering. Drawing a radius or moving the centre point is often simpler on a map and can reduce trial-and-error in the form.

It matches patterns across government. Teams are actively developing guidance for accessible maps, which signals demand and a maturing approach we can reuse.

### No-JavaScript version of the flow

When users select a location in the flow, we use an autocomplete to help them.

The autocomplete feature works well for quickly selecting a location; however, it requires JavaScript, which is not available to everyone, and it does not always run successfully.

Users might not have JavaScript enabled or available because they:

- disable JavaScript in their browsers to avoid potential security risks, such as cross-site scripting (XSS) attacks
- rely on screen readers or other assistive technologies, and might disable JavaScript if it interferes with their tools
- are using older or less powerful devices, where JavaScript can slow down performance
- work in an organisation that enforces strict browsing policies that disable JavaScript to maintain security and control over its network

We will add a no-JavaScript version of the find placement schools by location flow, which we can progressively enhance.

### Showing more school details

The current search results display a limited amount of information we have about each school. We will implement a ‘school details’ page, which goes into more detail about the school.

*[GIAS]: Get information about schools
*[ITT]: initial teacher training
*[UKPRN]: UK provider reference number
*[URN]: unique reference number
*[XSS]: cross-site scripting
