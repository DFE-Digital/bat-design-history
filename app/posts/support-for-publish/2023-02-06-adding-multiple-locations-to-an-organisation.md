---
title: Adding multiple locations to an organisation
description: Giving the support team the ability to add multiple locations to an organisation
date: 2023-02-06
screenshots:
  items:
    - text: Provider locations list
      src: locations--list.png
    - text: Adding a single location - form
      src: adding-single-location--edit.png
    - text: Adding a single location - form errors
      src: adding-single-location--edit-error.png
    - text: Adding a single location - check your answers
      src: adding-single-location--check-your-answers.png
    - text: Adding a single location - success
      src: adding-single-location--success.png
    - text: Adding a single location - success (when adding another)
      src: adding-single-location--continue-success.png
    - text: Adding multiple locations - upload form
      src: adding-multiple-locations--upload.png
    - text: Adding multiple locations - upload form error
      src: adding-multiple-locations--upload-error.png
    - text: Adding multiple locations - edit locations
      src: adding-multiple-locations--edit.png
    - text: Adding multiple locations - edit locations errors
      src: adding-multiple-locations--edit-error.png
    - text: Adding multiple locations - check your answers
      src: adding-multiple-locations--check-your-answers.png
    - text: Adding multiple locations - success
      src: adding-multiple-locations--success.png
    - text: Location details
      src: location--details.png
    - text: Location details updated
      src: location--details-updated.png
    - text: Remove location
      src: location--remove.png
    - text: Location cannot be removed
      src: location--cannot-remove.png
    - text: Location removed
      src: location--removed.png
---

Some providers find it difficult to enter large numbers of locations in Publish teacher training courses (Publish) and choose not to enter more than one location called, ‘Main site’.

This means it is harder for a candidate to find a provider’s course on Find postgraduate teacher training (Find) when searching by location (the most popular type of search).

Candidates also don’t know where their school placements will likely be as the provider hasn’t listed any locations.

To speed up the process of adding locations to Publish, we have introduced a way for support users to quickly and easily upload providers’ location information in bulk.

## What we changed

We have:

- updated the adding a single location flow
- added a way to add multiple locations

### Adding a single location

We updated the add location form to correct the layout and make it consistent with the add multiple locations flow.

We provided a way to save and add another location so that support users can quickly add more than one location to a provider.

### Adding multiple locations

We introduced a way for support users to copy and paste information from a spreadsheet or CSV file into the service.

This allows support users to quickly and easily enter new location information in bulk, using previously collected data from providers.

After data has been entered, we show a series of screens with each location’s information and allow support users to edit the information.

At the end of the flow, support users can check their answers before saving the locations.

## How it works

![Provider’s location list page](locations--list.png "Provider’s location list page")

We introduced the ‘Add multiple locations’ button as a secondary action alongside the main action of ‘Add location’.

Clicking ‘Add location’ takes the support user to the add single location form.

Clicking ‘Add multiple locations’ takes the support user to the add multiple locations form.

### Adding a single location

![Adding a single location to a provider](adding-single-location-flow.png "Adding a single location to a provider flow")

![Adding a single location form](adding-single-location--edit.png "Adding a single location form")

We introduced ‘Save location and add another’ on the check your answers page to simplify adding multiple locations. Clicking this button saves the location details and returns the support user to the ‘Add location’ page.

### Adding multiple locations

![Adding multiple locations to a provider](adding-multiple-locations-flow.png "Adding multiple locations to a provider flow")

![Adding multiple locations form](adding-multiple-locations--upload.png "Adding multiple locations form")

Location details can be copied and pasted into this form field from a CSV file or spreadsheet. The form field accepts comma-separated and tab-separated values.

For each location, support users need to include the following items:

- location name
- unique reference number
- address line 1
- address line 2
- town or city
- county
- postcode

If any data is missing, support users need to include a blank item in its place using a double comma or double tab.

The details of each location must be on a new line.

![Adding multiple locations edit form](adding-multiple-locations--edit.png "Adding multiple locations edit form")

For each location entered into the ‘Add location’ form field, we show the add location page pre-filled with the location name, unique reference number - if included - and address.

We display an error message if some location details are missing or incorrect.

## Further considerations

We considered some changes which were not implemented. We could consider them for a future iteration.

### Uploading a CSV file

We could further reduce the work for support users if we allowed them to upload a file rather than copying and pasting the data.

There is not a strong need for this since:

- we will not be adding a huge number of locations at one time
- the providers with the largest number of missing locations are higher education institutions (HEIs), and there’s only a small number of them
- once all locations have been added to Publish, the multiple location upload will not be used regularly

### Providing a way to see and manage all locations in the service

We could provide a central place for support users to manage locations.

There is not a strong need for this since:

- the number of locations and frequency of change is low
- providing two places to manage locations is unnecessary
- provider users should become more comfortable with managing their locations

### Removing a location from the ‘Add multiple locations’ flow

In the new design, the support user cannot change their mind about how many locations to add.

If they paste in the details of 10 locations and later decide they only need to add 9, they will need to cancel and start again.

We could add the ability to remove a location from the list of those to be added, either on the ‘Add location’ form page or on the check answers page.
