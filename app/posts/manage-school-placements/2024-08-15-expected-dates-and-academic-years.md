---
title: Expected dates and academic years
description: Refining the concept of expected dates and introducing academic years
date: 2024-08-15
tags:
  - school placements
  - placement windows
  - academic years
related:
  items:
    - text: Adding placements if you belong to a school
      href: /manage-school-placements/adding-placements/
    - text: The lifecycle of a school placement
      href: /manage-school-placements/the-lifecycle-of-a-school-placement/
    - text: User research round 6 findings
      href: /manage-school-placements/user-research-round-6-findings/
---

Research into [the lifecycle of a school placement](/manage-school-placements/the-lifecycle-of-a-school-placement/) identified key attributes of subject, mentor and the expected time the placement will take place (previously referred to as placement window). In our initial testing we found that the proposed way of adding placement windows was a barrier to adding placements. Users got stuck at that step because it required a single choice that did not reflect the way placements worked. We temporarily removed this from the service to allow users to add placements and continued to look at how they should work.

## Looking at a new solution

[User research round 5 findings](/manage-school-placements/user-research-round-5-findings/) showed us that users still consider when the placement takes place essential. We tested three different approaches with school users in [User research round 6](/manage-school-placements/user-research-round-6-findings/) and then followed up with provider users to confirm that the approach that met school needs met their needs too.

We also considered the language used. We stopped talking about placement windows and asked instead about the expected dates of the placement, improving clarity and comprehension.

As part of this work we also looked at adding academic year to placements. This is the second part of understanding when a placement happens and will be essential as the service starts to be used to manage placements in the current year as well as finding them for the next year.

## What we changed

- We added a question to the add placement flow to record which academic year the placement is in.
- We added a question to the add placement flow to record which time of the academic year the placement is expected to happen.
- We added a filter to the placement search to allow providers to search for placements by academic year.
- We changes the display of placements throughout the service to allow them to be viewed by academic year.

## How it works

### Adding a placement

![Add placement flow](add-placement--flow.png "Add placement flow - including academic year and expected date")

We added two new questions to the add placement flow. These ask the user to select an academic year and enter when the placement could take place.

These questions have been added after the user has chosen the subject and before they select a mentor. The position in the user flow means that all of the key characteristics of the placement are asked up front. We then ask the things that may change during planning and through conversations with the provider.

![Select an academic year](screenshot-academic-year.png "Select an academic year")

![When could the placement take place?](screenshot-expected-date.png "When could the placement take place?")

![Check your answers](screenshot-check-your-answers.png "Check your answers")

Academic year is a key characteristic of the placement. We don't give the user the ability to change this once it is published, because changing it would fundamentally alter the placement.

The expected date can be changed at any point, because it changes based on the dates set by the training provider.

![Placement details once published](screenshot-placement-details.png "Placement details once published")

### Filtering placements

Provider users are able to filter the placements shown on the find placements screen by academic year. They default to showing the current academic year.

![New filter](screenshot-filters.png "New filter")

### Displaying placements

Where placements are displayed throughout the service we have introduced a horizontal navigation to allow users to choose between academic years.

![Placement screen](screenshot-placements.png "Placements screen")

