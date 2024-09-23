---
title: Adding expected dates and academic years
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

Research into [the anatomy of a school placement](/manage-school-placements/the-lifecycle-of-a-school-placement/) identified ‘expected date’, also known as placement window, as a key attribute of a school placement.

During alpha, we ran [experiments to understand how schools might add placements](/manage-school-placements/adding-placements/). We tested adding a placement window using three radio button options corresponding to terms in the academic year. As detailed in [user research round 1](/manage-school-placements/user-research-round-61-findings/), some users got stuck at that step because it required a single choice that did not reflect the way placements worked e.g. a school placement offer might span terms. We temporarily removed this from the service to allow users to add placements and continued to look at how they should work.

## Looking at a new solution

[User research round 5](/manage-school-placements/user-research-round-5-findings/) showed us that ITT provider users still consider when the placement takes place essential. need to know the placement window upfront when schools make the initial placement offer, to avoid having to contact them unnecessarily. There wasn’t a clear consensus on the best way to structure this.

We tested three different approaches with school users in [user research round 6](/manage-school-placements/user-research-round-6-findings/) structuring the placement window design according to academic terms (multi-select), months and custom ‘start and end dates’ – and found that academic term worked best.

As part of [user research round 7](/manage-school-placements/user-research-round-7-findings/), we found a general consensus amongst ITT provider users that the academic term structure of a placement window would meet their needs too.

We also reconsidered the language of 'placement window'. We stopped referring to placement windows within the service and asked instead about the expected dates of the placement, improving clarity and comprehension.

As part of this work, and in preparation for the start of the 2024/25 ITT recruitment cycle, we also looked at adding academic year to placements. This is the second part of understanding when a placement happens and will be essential as the service starts to be used to manage placements in the current year as well as finding them for the next year.

## What we changed

- We added a question to the add placement flow to record which academic year the placement is in.
- We added a question to the add placement flow to record which time of the academic year the placement is expected to happen.
- We added a filter to the placement search to allow providers to search for placements by academic year.
- We changed the display of placements throughout the service to allow them to be viewed by academic year.

## How it works

### Adding a placement

![Add placement flow](add-placement--flow.png "Add placement flow - including academic year and expected date")

We added two new questions to the add placement flow. These ask the user to select an academic year and enter when the placement could take place.

These questions have been added after the user has chosen the subject and before they select a mentor. The position in the user flow means that all of the key characteristics of the placement are asked up front. We then ask the things that may change during planning and through conversations with the provider.

![Select an academic year](screenshot-academic-year.png "Select an academic year")

![When could the placement take place?](screenshot-expected-date.png "When could the placement take place?")

![Check your answers](screenshot-check-your-answers.png "Check your answers")

Academic year is a key attribute of a school placement. We don’t give the user the ability to change this once it is published, because:

- ITT providers organise placements for annual cohorts of trainee teachers – their courses and terms align with the academic year
- If the academic year of a placement changes, dependencies like mentor or year group may change, meaning the whole nature of the placement could be different
- Once a provider has been assigned to a placement, its core attributes cannot change as they are likely to have a trainee assigned to it
- It is easy to delete and create new placements.

The expected date can be changed at any point, because it often changes based on the dates set by the training provider.

![Placement details once published](screenshot-placement-details.png "Placement details once published")

### Filtering placements

Provider users are able to filter the placements shown on the find placements screen by academic year and expected date.

Results default to showing the current academic year.

![New filter](screenshot-filters.png "New filter")

### Displaying placements

Where placements are displayed throughout the service we have introduced a horizontal navigation to allow users to choose between academic years.

![Placement screen](screenshot-placements.png "Placements screen")
