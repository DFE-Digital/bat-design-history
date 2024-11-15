---
title: Showing claims by academic year
description: We updated the claims list to group claims by academic year
date: 2024-10-30T13:00:00+00:00
tags:
  - claim windows
  - academic years
  - claims
related:
  items:
    - text: Grouping and filtering claims by academic years in Support
      href: /claim-funding-for-mentors/grouping-and-filtering-claims-by-academic-year-in-support/
    - text: Managing claim windows in Support
      href: /claim-funding-for-mentors/managing-claim-windows-in-support/
screenshots:
  items:
    - text: School claims list with no claims
      src: academic-years--claims-list-no-claims.png
    - text: School claims list showing last academic year’s claims
      src: academic-years--claims-list-last-year.png
    - text: School claims list showing this academic year’s claims
      src: academic-years--claims-list-this-year.png
    - text: School claims list showing claims for all academic years
      src: academic-years--claims-list-all-years.png
    - text: School claims list showing only the current academic year - public beta schools
      src: academic-years--claims-list-public-beta-school.png
    - text: Claim details showing the academic year below the school name
      src: academic-years--claim-details.png
    - text: Draft claim details showing the academic year cannot be changed
      src: academic-years--claim-details-draft.png
    - text: Declaration page when a user submits a draft claim
      src: academic-years--draft-claim-declaration.png
    - text: New claim check your answers showing the academic year below the school name
      src: academic-years--add-claim-check-your-answers.png
---

When we launched the private beta on 2 May 2024, we did not include the concept of academic years. However, when a claim is submitted, users need to know what academic year it relates to to better manage their claims in subsequent years.

This is particularly important when school users submit claims for the previous academic year, which may need clarification. For example, we opened a second claim window in the private beta in September 2024. The claim was for training that had taken place in the 2023 to 2024 academic year but was being submitted in the 2024 to 2025 academic year.

## What we changed

We have:

- grouped the claims list by academic year
- added the academic year to the claim details, check your answers and claim declaration pages

## How it works

### Claims list

We show claims grouped by academic year from when the school joined the service.

If the school joined the service in private beta, the first academic year they will see will be 2023 to 2024, followed by all subsequent academic years:

![Private beta academic years](academic-years--private-beta.png)

If the school joined the service in public beta, the first academic year they will see will be 2024 to 2025, followed by all subsequent academic years:

![Public beta academic years](academic-years--public-beta.png)

We list academic years in reverse chronological order - the most recent academic year is listed first and marked as “current”.

If the school has not claimed in the current academic year, we show a message:

> There are no claims for [school name] in academic year [academic year].

If the school did not claim in a previous academic year, we show a message:

> There were no claims for [school name] in academic year [academic year].

We do not hide academic years if the school does not claim funding for their mentors in an academic year. This gives schools an accurate record of when and what they claimed throughout the service’s lifetime.

### Claim details, check your answers and claim declaration

We show the academic year below the school name in the summary lists on the:

- claim details
- check your answers - when adding a new claim
- claim declaration - when submitting a draft claim

This information helps users understand the academic year the claim relates to when they do not look at the central claims list or when sharing the information with others. For example, we have found that users will copy or print claims to share with colleagues.

Users cannot change the academic year; it is calculated when the claim is created.

## Further considerations

We considered some changes that we did not implement. These included:

- moving the ‘Add claim’ button into the current academic year section
- displaying one list of claims and using filters to find claims

### Moving the ‘Add claim’ button

We considered moving the ‘Add claim’ button to within the current academic year section to clarify what year adding the claim is related to. However, we did not implement these changes because:

- most schools, there would only be one academic year in their claims list
- schools can only claim for the current academic year, and they may question why other years do not have an ‘Add claim’ button

### Using an academic year filter

We considered using filters to help users find claims for a specific academic year. However, this approach leads to a more complex interaction design, and users need help to quickly glance at the list and understand what claims were made each year.

Furthermore, the average number of claims per school is 3, so the claims list does not need filters to help users find claims.
