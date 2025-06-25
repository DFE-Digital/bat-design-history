---
title: Geocoding addresses
description: We geocode addresses so users can quickly find and choose training providers based on accurate location data
date: 2025-02-24
tags:
  - addresses
  - locations
  - geocoding
related:
  items:
    - text: Managing provider addresses
      href: /register-of-training-providers/managing-provider-addresses/
    - text: Adding an address using a postcode address finder
      href: /register-of-training-providers/adding-an-address-using-a-postcode-address-finder/
    - text: Using a postcode address finder in the new provider flow
      href: /register-of-training-providers/using-a-postcode-address-finder-in-the-new-provider-flow/
screenshots:
  items:
    - text: Add provider - check your answers
      src: add-provider--check-your-answers.png
    - text: Add address - check your answers
      src: add-address--check-your-answers.png
    - text: Add address - check your answers with no geolocation information
      src: add-address--check-your-answers-no-geolocation.png
    - text: Provider details
      src: provider-details.png
---

Previously, we gave users the ability to [manage provider addresses](/register-of-training-providers/managing-provider-addresses/) and [add an address using a postcode address finder](/register-of-training-providers/adding-an-address-using-a-postcode-address-finder/). This work enables us to collect accurate and reliable address data.

To increase the utility of the address data, we need to geocode addresses as well.

We geocode addresses because it:

- allows users to quickly find and choose training providers based on accurate location data - for example, on Find postgraduate teacher training (Find)
- enables spatial mapping, regional planning, and identification of coverage gaps or oversupply areas, informing strategic decision-making
- helps identify geographic trends and target resources, support, or funding more effectively to regions with specific needs or opportunities

We use the Ordnance Survey (OS) Places API in our postcode address finder, but it does not include geolocation (latitude and longitude) data. Furthermore, geolocation data will not be included by default if a user manually enters an address.

To solve this problem, we use the Google Maps API.

## What we did

We updated the ‘Add provider’ and ‘Add address’ flows to automatically geocode the address data before saving it to the database.

We display the latitude and longitude data on the:

- add provider flow ‘Check your answers’ page
- add address flow ‘Check your answers’ page
- address summary card on the provider details page

## How it works

Once the user has selected or entered the address, we send the address string to the Google Maps API. The API returns the latitude and longitude, which we display in a summary list to the user.

The geolocation summary list contains two rows:

- latitude
- longitude

We display the whole latitude and longitude data returned by the API; we do not round it.

Users cannot change the latitude or longitude directly. Instead, they need to change the address.

If the API returns no geolocation data, we replace the summary list with a message:

> The address could not be geocoded.

We save the geolocation data against each address for later recall.

## Further considerations

We considered allowing users to add geolocation data if the API fails. However, we decided against doing so as we could not guarantee that the information entered by the user would be correct or match the address, and we did not want to increase the complexity by introducing a mechanism to double-check the data.

Instead, we can introduce a background process that periodically checks addresses with missing geolocation data and attempts to fill in the gaps.

*[API]: application programming interface
*[OS]: Ordnance Survey
