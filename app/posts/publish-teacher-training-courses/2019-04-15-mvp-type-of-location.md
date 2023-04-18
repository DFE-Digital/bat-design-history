---
title: Type of location MVP
description: A quick way to indicate if a location is an area or an address
date: 2019-04-15
---

A quick way to indicate if a location is an area or an address.

Some providers use the UCAS training locations to indicate a region or area, e.g. United Learning Sussex.

When we validate locations we require building and street name, town or city, and postcode. For regions or areas this validation is not appropriate. However we still need enough information to show courses on a map.

In the design below, if a user selects ‘An area’, then we would validate differently.

A [more complete workflow was previously designed and tested](/publish-teacher-training-courses/new-training-location-region).

![Type of location.](type-of-location.png "Type of location")

*[UCAS]: Universities and colleges admissions service
