---
title: Finding placement schools by provider
description: We added a way for citizens to find placement schools by the ITT provider who placed trainees at the school
date: 2025-08-01T13:00:00+00:00
tags:
  - placement schools
  - provider
  - accredited provider
  - training provider
  - find
related:
  items:
    - text: Finding placement schools by location
      href: /register-of-placement-schools/finding-placement-schools-by-location/
    - text: Viewing individual placement schools
      href: /register-of-placement-schools/viewing-individual-placement-schools/
screenshots:
  items:
    - text: Initial find placement schools form
      src: finding-placement-schools--form.png
    - text: Initial find placement schools form - with errors
      src: finding-placement-schools--form-error.png
    - text: Find placement schools by provider search form
      src: finding-placement-schools-by-provider--form.png
    - text: Find placement schools by provider search form - with errors
      src: finding-placement-schools-by-provider--form-error.png
    - text: Find placement schools by provider form, showing autocomplete suggestions
      src: finding-placement-schools-by-provider--form-autocomplete.png
    - text: Find placement schools by provider form, showing selected provider
      src: finding-placement-schools-by-provider--selected-provider.png
    - text: Search results page
      src: finding-placement-schools-by-provider--results.png
    - text: Search results page with filters selected
      src: finding-placement-schools-by-provider--results-with-filters.png
    - text: Search results page with search term
      src: finding-placement-schools-by-provider--results-with-search.png
---

After introducing the location search in [Finding placement schools by location](/register-of-placement-schools/finding-placement-schools-by-location/), we focused on a second route that starts with an initial teacher training (ITT) provider. Providers need a quick way to see which schools they work with and in which academic years. We added a way for people to find placement schools by the ITT provider that placed trainees at the school. This helps people plan future placements and helps DfE check coverage and history.

This post is the second of three:

1. Start with: [Finding placement schools by location](/register-of-placement-schools/finding-placement-schools-by-location/)
2. You are here: **Finding placement schools by provider**
3. Next: [Viewing individual placement schools](/register-of-placement-schools/viewing-individual-placement-schools/)

In this post, we describe the user needs for provider-led search, what we built, and the design decisions that keep results clear and consistent with the location view.

## Why searching by provider matters

This route helps users understand relationships between organisations delivering ITT. Users can start with a provider and see a distinct list of schools they have worked with, plus the academic years. It helps when:

- providers plan future placements with known partners
- candidates need to understand where a provider may place them
- DfE needs to understand coverage and history by provider
- support teams need to verify a provider–school relationship

Benefits:

- groups results by school with academic years attached
- matches how providers think about partnerships over time
- makes it easier to spot gaps, changes and trends

## User needs

As a candidate or trainee:

- I need to search for a provider by name or code, so that I can see the schools that the provider works with.
- I need a distinct list of schools per provider with the academic years shown, so that I can tell current relationships from historical ones.
- I need to filter a provider’s schools by phase and setting, so that I can focus on suitable placements.
- I need precise school details in the results, including name and unique reference number (URN), so that I can open the right school profile with confidence.

Read more [initial user needs](/register-of-placement-schools/initial-user-needs/).

## How it works

![Find placement schools by provider flow](find-placement-schools-by-provider--flow.png "Find placement schools by provider flow")

The ‘Find placement schools’ flow has 3 steps:

1. Find placement schools by location, school or training provider
2. Enter provider name, UKPRN or URN
3. View a list of placement schools

### Find placement schools by location, school or training provider

The first step in the ‘Find placement schools by location, school or training provider’ flow is to decide how to search. We show a list of radio buttons:

- by city, town or postcode
- by school
- by university or other training provider

In this post, we will describe the first flow, searching by university or other training provider.

If the user does not select an option, we show an error message:

> Select find placement schools by location, school or training provider

### Enter provider name, UKPRN or URN

The second step in the flow is to find the provider.

We use an autocomplete to suggest providers when the user types a provider name, UKPRN or URN.

If the user does not enter a search term, we show an error message:

> Enter a provider name, UKPRN or URN

### View a list of placement schools

The final step in the flow shows placement schools listed in alphabetical order (A to Z).

We show the result count and the search term in the page heading. For example, “222 placement schools for ‘University of Bristol’”.

We show placement school details in a [GOV.UK summary card](https://design-system.service.gov.uk/components/summary-list/#summary-cards).

![Example summary card](summary-card-example.png "Example summary card")

Each placement school on the list includes:

- school name - in the summary card heading
- school status
- UK provider reference number (UKPRN)
- unique reference number (URN)
- a link to the school’s details on Get information about schools (GIAS)
- school type and type group
- education phase and age range
- address
- a list of academic years the school participated in ITT

#### Searching and filtering

When a user searches or filters the list of placement schools, we return a list of placement schools matching the search and filters.

Searching and filtering are independent of one another. If someone first searches for a placement school and then applies filters, the filters act upon the subset of placement schools returned by the initial search.

Similarly, if someone filters the list of placement schools, a subsequent search will only include the placement schools in the filtered list, not the complete list.

Clearing a search will not clear the filters, and removing the filters will not clear the search.

### Filter sidebar

The filter sidebar includes filters for:

- region
- school type
- education phase
- school status

#### Region filter

The region filter shows all regions of England, including:

- North East
- North West
- Yorkshire and The Humber
- East Midlands
- West Midlands
- East of England
- London
- South East
- South West

The regions are listed in order from north to south.

We also include two additional options:

- Wales
- Not applicable

We include Wales because some providers offer placements in schools in Wales.

We include ‘Not applicable’ because region data is derived from GIAS, and this is one of their categories. (Note: in instances like this, we will attempt to fix the categorisation.)

We display all regions, even if there are no placement schools that match the region. This allows users to understand what placement schools are available in the register.

Since there are more than 5 regions, we create a scrollable region and use JavaScript to add a search box. Typing in the search box updates the list below with types matching the search term. If there are no matches, the list is empty.

If JavaScript is unavailable, the types are still within the scrollable region, but we no longer show the search box.

The scrollable region is indicated by a:

- cut off mid-way through a checkbox
- bottom border
- custom styles to display a scrollbar

The scroll area shows four and a half regions to help users realise that other regions are on the list. This smaller height lets users move to a filter below.

When a user selects one or more regions and applies the filters, we display the remove filter tags under ‘selected filters’ at the top of the filter panel.

#### School type filter

The school type filter shows all ‘establishment type groups’ from GIAS.

We use the ‘establishment type groups’ as a proxy for school type, as they are fewer and simpler to understand.

We display all school types, even if there are no placement schools that match the type. This allows users to understand what placement schools are available in the register.

This filter works in the same way as the ‘Region’ filter.

#### Education phase filter

The education phase filter shows all education phases from GIAS, even if there are no placement schools that match the education phase. This allows users to understand what placement schools are available in the register.

This filter works in the same way as the ‘Region’ filter.

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

- Finding a provider by postcode
- Showing search results on a map
- No-JavaScript version of the flow
- Showing more school details

### Finding a provider by postcode

We use an autocomplete to help users find a provider. This autocomplete accepts provider name, UKPRN and URN, but not postcode.

Many users remember a place better than codes, such as UKPRN and URN. Using a postcode or even a place name is a quick way to find the provider.

We will consider implementing search by postcode and place name in the autocomplete to reduce the effort it takes for the user to find the provider.

### Showing search results on a map

Showing search results on a map makes the results more useful.

People grasp geography faster on a map. It shows clusters, gaps and proximity to landmarks such as home, university or transport hubs. It complements the list view rather than replaces it.

It supports decision-making. Users can see whether options are concentrated along a rail line, split by a river, or spread across rural areas. That context is hard to read from a list alone.

It improves filtering. Drawing a radius or moving the centre point is often simpler on a map and can reduce trial-and-error in the form.

It matches patterns across government. Teams are actively developing guidance for accessible maps, which signals demand and a maturing approach we can reuse.

### No-JavaScript version of the flow

When users select a provider in the flow, we use an autocomplete to help them.

The autocomplete feature works well for quickly selecting a provider; however, it requires JavaScript, which is not available to everyone, and it does not always run successfully.

Users might not have JavaScript enabled or available because they:

- disable JavaScript in their browsers to avoid potential security risks, such as cross-site scripting (XSS) attacks
- rely on screen readers or other assistive technologies, and might disable JavaScript if it interferes with their tools
- are using older or less powerful devices, where JavaScript can slow down performance
- work in an organisation that enforces strict browsing policies that disable JavaScript to maintain security and control over its network

We will add a no-JavaScript version of the find placement schools by provider flow, which we can progressively enhance.

### Showing more school details

The current search results page displays a limited amount of information we know about each school. We will implement a ‘school details’ page, which goes into more detail about the school.

*[GIAS]: Get information about schools
*[ITT]: initial teacher training
*[UKPRN]: UK provider reference number
*[URN]: unique reference number
*[XSS]: cross-site scripting
