---
title: Updating how organisations manage their locations
description: We improved the process of adding and editing locations and now allow providers to remove locations
date: 2022-06-06
screenshots:
  items:
    - text: Locations list
      src: locations--list.png
    - text: Location - details
      src: locations--details.png
    - text: Location - cannot remove location
      src: locations--cannot-remove-location.png
    - text: Add location - name and unique reference number (URN)
      src: locations--add-location.png
    - text: Add location - error
      src: locations--error.png
    - text: Add location - address
      src: locations--add-location-address.png
    - text: Add location - address error
      src: locations--address-error.png
    - text: Add location - check your answers
      src: locations--add-location-check-your-answers.png
    - text: Location added
      src: locations--location-added.png
    - text: Location updated
      src: locations--location-updated.png
    - text: Remove location
      src: locations--remove.png
    - text: Location removed
      src: locations--location-removed.png
---


## What we changed

We have:

- updated the add location flow
- included a summary of the location details
- added the ability to remove a location

We made these changes because:

-
## How it works

### Location list

On the location list page, we show:

- an ‘Add location’ button
- a list of locations in alphabetical order - ordered by the location name

For each location in the list, we show the:

- location name
- location code
- unique reference number (URN)

We paginate the list if the location list contains more than 50 locations.

When a location is added to the organisation or removed from the organisation, we show a success message above the page heading.

### Location details

On the location details page, we show a summary list of the location’s details, including:

- name
- location code
- unique reference number (URN)
- address

The location code cannot be changed as it is automatically generated.

This page also includes a ‘Remove location’ link, which allows users to remove the location from the organisation.

### Adding a location

Clicking ‘Add location’ starts the add location flow.

The flow includes three steps:

1. adding the location name and URN
2. providing an address for the location
3. checking your answers

We show an error message if the information is missing from the forms or it is entered incorrectly. For example, a postcode is incorrect.

Users can check their answers at the end of the flow before saving the new location.

### Removing a location

We introduced the ability to remove a location from the organisation.

When someone clicks ‘Remove location’, they must confirm the removal.

If the location is attached to a course, they cannot remove the location before first removing it from the course.
