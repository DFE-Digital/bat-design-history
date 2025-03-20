---
title: Hiding postcode params spike
description: Outcome from spike into removing/hiding full postcodes from Find due to data protection
date: 2025-03-19
tags:
  - entry requirements
  - salary
  - salaried courses
  - apprenticeships
  - applications
  - filtering
  - undergraduate
  - tda
---

## Background

### The problem we were trying to solve

We were advised by the Get into Teaching (GIT) team that showing full postcodes in our [Find](https://find-teacher-training-courses.service.gov.uk/) uniform resource locators (URLs) was a breach of data protection on a users local machine; specifically where users accessed Find on a shared device, i.e. in a library.

We checked with the data protection team who advised us:

> For some properties, full postcodes can be for several houses or just a couple. When combined with other data, it could be possible to identify someone, even if it relates to a large amount of properties.
> Showing a postcode in full may be quite risky and allow for a person to be identified.

Therefore, while the data protection were not explicit in saying what we should do they did suggest we should be cautious with our approach.

We initially thought we could limit the risk by only surfacing the beginning of the postcode in the URL, for instance just showing NG1 or NG1 2xx. However after a spike this was not feasible

## What we discovered from the spikes

During the first spike for hiding the location data from search URLs we discovered it would degrade the overall user experience. As that would mean that users would not be able to share links to search results as we rely on that data to dictate the search results.

For the second spike we decided to investigate searching by adding the first character of the second part of post codes, for example, “NG1 2”.

However the outcome of the spike showed this was not a feasible solution.

When searching for a postcode up to the first character of the second part of post code e.g SG6 4 the results we get back *only* return back based on the first part of the postcode. This therefore limits the functionality for users and makes finding searching much more difficult.

In addition when searching for SG6 4 the search results display 1 mile from Letchworth Garden City SG6, UK only showing the first half of the postcode provided and not SG6 4.

Using the below address validation [site](https://developers.google.com/maps/documentation/address-validation/demo) If you were to input in the address SG6 and then SG6 4 the map below returns the same geocode data.

We can not find evidence that Google supports the ability to do a partial postcode match based on a half completed postcode such as SG6 4 . In some examples it finds nothing and in others it just defaults to the first half.

We believe our service is defaulting to use the first half if a half finished postcode is given.

The GIT service have implemented obfuscation to their URLs. However the full postcode information is present on the page so their solution defeats the point of obfuscating as the data is visible on the page.

## Status of this work

Due to the above limitations and potential user degradation and lack of value to implement such a solution, the team have agreed to not proceed with this approach.

We believe that by investigating proposed solutions and identifying clear disadvantages to users, as well as issues with the solution implemented by a sister service, we are reamaining compliant with data protection guidance.

We will continue to keep this under review and will make any changes if deemed necessary.
