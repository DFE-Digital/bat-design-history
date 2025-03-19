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

We were advised by GIT that showing full postcodes in our Find URLs was a breach of data protection on a users local machine.

We checked with the data protection team who advised us:

> For some properties, full postcodes can be for several houses or just a couple. When combined with other data, it could be possible to identify someone, even if it relates to a large amount of properties.
> Showing a postcode in full may be quite risky and allow for a person to be identified.

So the answer was not directly yes or no but as it can easily identify someone then we would proceed with caution and assume it would.

If we limit it to just the beginning as NG1 or NG1 2xx then that reduces the risk. However after a spike this was not feasible

## What we discovered from the spike

The first spike for hiding the location data from search URLs we noticed it would degrade the overall user experience. As that would mean that users would not be able to share links to search results as we rely on that data to dictate the search results

For the second spike we decided to investigate by searching by up to the first character of the 2nd part of post codes. For example, “NG1 2”. we tested whether this would meet the user requirements - it should be sufficient enough to address data protection concerns.

However the outcome of the spike showed this was not feasible:

- When searching for a postcode up to the first character of the 2nd part of post code e.g SG6 4 the results we get back ONLY return back based on the first part of the postcode.
- Meaning the search results will return ALL results with SG6 returning more than the user would like, degrading user experience and makes discoverability much harder.
- In addition when searching for SG6 4 the search results display 1 mile from Letchworth Garden City SG6, UK only showing the first half of the postcode provided and not SG6 4
- Using the below address validation [site](https://developers.google.com/maps/documentation/address-validation/demo) If you were to input in the address SG6 and then SG6 4 the map below returns the same geocode data.
- I cant find evidence that Google supports the ability to do a partial postcode match based on a half completed postcode such as SG6 4 . In some examples it finds nothing and in others it just defaults to the first half. I believe our service is defaulting to use the first half if a half finished postcode is given.

The GIT service have implemented obfuscation to their URL's. However this postcode information is present on the page so defeats the point of obfuscating as the data is visible on the page.
## Status of this work

Due to the above limitations and potential user degradation and lack of value to implement such a solution, the team have agreed to not proceed with this approach.
