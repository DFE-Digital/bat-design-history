---
title: Exploring showing search results on a map
description: We explored adding a map view to the location and provider search results, using Ordnance Survey map data and considering the accessibility implications carefully
date: 2026-03-09
tags:
  - maps
  - search
  - location
  - ordnance survey
  - accessibility
related:
  items:
    - text: Finding placement schools by location
      href: /register-of-placement-schools/finding-placement-schools-by-location/
    - text: Replacing the Google Maps API with the Ordnance Survey API
      href: /register-of-placement-schools/replacing-google-maps-api-with-ordnance-survey-api/
screenshots:
  items:
    - text: Location search results
      src: maps--location-search-results.png
    - text: Location search results (filtered)
      src: maps--location-search-results-filtered.png
    - text: Provider search results
      src: maps--provider-search-results.png
    - text: Provider search results (filtered)
      src: maps--provider-search-results-filtered.png
    - text: School details
      src: maps--school-details.png
---

We explored adding a map view to the search results pages. This is a prototype we want to test with users, including providers and policy colleagues, to understand the benefits and costs of the approach before building anything in production.

Maps can help users understand the geographic spread of placement schools and compare locations at a glance. However, maps also introduce significant accessibility challenges and technical complexity.

This post explains the decisions we made, the constraints we worked within, and what we prototyped.

## Should you use a map at all?

Before building anything, we asked whether a map would genuinely serve our users better than a well-structured list.

Maps work well when spatial context matters, for example, when a user wants to see which schools are clustered near a particular area. However, they add complexity for users with disabilities, on mobile devices, and on slow connections.

We asked:

- do users need to understand geographic proximity, or do they need a filtered and sorted list?
- will users on mobile be able to use the map meaningfully?
- can all users access the same information without the map?

The GOV.UK principle of doing the hard work to make it simple applies here. A well-structured list with distance information might serve users just as well while requiring far less complexity. We decided to treat the map as an enhancement to the list, not a replacement for it.

## Accessibility requirements

### Public Sector Bodies Accessibility Regulations

The [Public Sector Bodies Accessibility Regulations](https://www.legislation.gov.uk/uksi/2018/952/contents/made) (PSBAR) require public sector websites to be accessible. There is an exemption for online maps and mapping services, but only where essential information is provided in an accessible digital manner.

This exemption is often misread as permission to skip accessibility work. It is not. The condition is critical: essential information must still be accessible. In practice, this means providing a non-map alternative, such as a list view, that conveys the same information.

### WCAG 2.2

Interactive maps raise concerns under three [WCAG 2.2](https://www.w3.org/TR/WCAG22/) success criteria in particular:

- **1.1.1 Non-Text Content:** maps require text alternatives
- **1.4.11 Non-text Contrast:** map tiles and markers must meet contrast ratios
- **2.1.1 Keyboard Accessibility:** maps must be operable using a keyboard

Additional considerations:

- colour must not be the only way to convey information, for example, category markers must not rely on colour alone
- the map should support zoom to at least 200%
- interactive map content is largely inaccessible to screen reader users without a text-based alternative
- maps with many colours, icons and labels can cause cognitive overload, particularly for users who are neurodivergent

### GOV.UK Design System

There is no official GOV.UK Design System component for maps. The Design System does not include one, partly because of unresolved accessibility challenges. This means we need to justify our implementation in the service's accessibility statement and document our approach for the cross-government design community.

## Pros and cons of showing a map

### Pros

- gives a strong spatial context when users are comparing locations
- familiar interaction pattern for many users
- can reveal geographic clustering that a list does not convey
- OS data is accurate and authoritative for Great Britain

### Cons

- significant accessibility challenges
- adds technical complexity and potential performance overhead
- can overwhelm users, particularly those who are neurodivergent or have cognitive impairments
- mobile interaction with maps can be frustrating
- the map becomes a barrier if it is the only way to browse results

## What we prototyped

### Map placement

For the location and provider search results, we show a map at the top of the page, below the search box and above the results list. This gives users the spatial context immediately without hiding the list. We do not show the map if there are no results.

We also show a map on the individual school details page, below the page title and before the school details.

Because the school details page now includes a map, we removed the "Search again" link and replaced it with a back link. The back link label depends on how the user arrived at the page:

- if they navigated from the location or provider search results, the back link reads "Back to search results"
- if they arrived via the school search autocomplete, the back link reads "Back to school search"

### Ordnance Survey Maps API

We use maps provided by Ordnance Survey through the [Public Sector Geospatial Agreement](https://www.ordnancesurvey.co.uk/customers/public-sector/public-sector-geospatial-agreement). The [OS Maps API](https://osdatahub.os.uk/docs/wmts/overview) offers four styles: light, road, outdoor and leisure.

We use the outdoor style. It provides the best contrast without obscuring the map pins.

### Map pins

The map shows pins for the schools in the current page of results. It shows up to 25 pins, corresponding to the 25 results on a single page. It does not show all results across all pages.

Selecting a pin will display the school's name.

Whilst not imperative, the map pin colours match the status tag colours:

| Status | Tag class | Pin colour |
| --- | --- | --- |
| Open | `govuk-tag--green` | Green |
| Closed | `govuk-tag--red` | Red |
| Open, proposed to close | `govuk-tag--orange` | Orange |
| Proposed to open | `govuk-tag--yellow` | Yellow |

We included a legend below the map to explain what each pin colour means. This meets the WCAG requirement not to rely on colour alone to convey meaning.

### Zoom levels

The zoom level adjusts based on how spread out the pins are. If the schools in the results are clustered tightly together, the map zooms in to show local street detail. If they are spread across a wide area, the map zooms out to show the full extent.

For reference, the OS Maps API zoom levels work as follows:

| Zoom level | Approximate view |
| --- | --- |
| 12 | City or large town, showing multiple neighbourhoods and main roads |
| 13 | Neighbourhood level |
| 14 | Local streets |
| 15 to 16 | Street or block level |
| 17 and above | Building or parcel level |

We use zoom level 13 as the default for single school maps and zoom level 12 as the default for location and provider search results pages.

## Further considerations

We are considering three enhancements:

- **Toggling the map on and off:** some users may prefer to use only the list. A toggle would let them hide the map.
- **Linking map pins to list items:** clicking a school name in a map pin tooltip would scroll to the corresponding item in the results list.
- **Expanding the map:** an option to open the map in a larger view, such as a modal window, would help users who need a bigger geographic overview.

## Next steps

The immediate next step is to test this prototype with users, including providers and policy colleagues. We want to understand whether the map genuinely helps them, whether the accessibility trade-offs are acceptable, and whether the added complexity is justified.

We will use findings from that research to decide whether to build the map in production and whether to prototype any of the enhancements above.

We also plan to share what we learn with the wider GOV.UK design community. There is an active [maps in services Slack group](https://join.slack.com/t/mapsinservices/shared_invite/zt-163npa168-e5EREuQZU3NqwfdojWw2ew) and an open [GitHub discussion on adding a maps component to the GOV.UK Design System](https://github.com/alphagov/govuk-design-system-backlog/issues/75). Contributing our findings to those discussions will help others working through the same problems.
