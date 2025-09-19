---
title: Viewing individual placement schools
description: We added a way for citizens to find individual placement schools by school name
date: 2025-08-01T14:00:00+00:00
tags:
  - placement schools
  - find
related:
  items:
    - text: Finding placement schools by location
      href: /register-of-placement-schools/finding-placement-schools-by-location/
    - text: Finding placement schools by provider
      href: /register-of-placement-schools/finding-placement-schools-by-provider/
    - text: Get information about schools (GIAS)
      href: https://get-information-schools.service.gov.uk/
screenshots:
  items:
    - text: Initial find placement schools form
      src: finding-placement-schools--form.png
    - text: Initial find placement schools form - with errors
      src: finding-placement-schools--form-error.png
    - text: Find placement schools by provider search form
      src: find-individual-placement-school--form.png
    - text: Find placement schools by provider search form - with errors
      src: find-individual-placement-school--form-error.png
    - text: Find placement schools by provider form, showing autocomplete suggestions
      src: find-individual-placement-school--form-autocomplete.png
    - text: Find placement schools by provider form, showing selected school
      src: find-individual-placement-school--selected-school.png
    - text: School details page
      src: find-individual-placement-school--school-details.png
---

Building on [Finding placement schools by location](/register-of-placement-schools/finding-placement-schools-by-location/) and [Finding placement schools by provider](/register-of-placement-schools/finding-placement-schools-by-provider/), we completed the journey with a clear school profile. We added a way for users to find individual placement schools by school, then view a single page that confirms the school’s details and shows placement history across academic years and providers.

This post is the third of three:

1. Start with: [Finding placement schools by location](/register-of-placement-schools/finding-placement-schools-by-location/)
2. Then read: [Finding placement schools by provider](/register-of-placement-schools/finding-placement-schools-by-provider/)
3. You are here: **Viewing individual placement schools**

In this post, we cover how direct lookup and a consistent school profile help users confirm they have the correct record and understand past and current placement relationships.

## Why searching by school matters

Sometimes users know the school. They’ve heard about it from a provider, saw it on a course page, or already have a placement agreed. A direct lookup by name, unique reference number (URN), or UK provider reference number (UKPRN) allows users to confirm the exact school and view its placement history in one place.

This helps when the user:

- has a school name and wants to make sure they have the correct record before they apply for a course or make contact
- has information from another service and wants to check that the placement details match
- needs to confirm whether the school is active for placements this academic year
- wants the school’s address and website to plan travel or contact the right place

## User needs

As a candidate or trainee:

- I need to find an individual school so that I can be sure I have the correct record.
- I need a single school page that confirms identity, address and setting, so that I can check details before I contact anyone.
- I need to see the providers the school partnered with by academic year, so that I can tell whether the school is active this year.
- I need clear, plain-English labels rather than internal codes, so that I can understand the information without specialist knowledge.
- I need a way to move from the school page to related providers or searches, so that I can compare options easily.

Read more [initial user needs](/register-of-placement-schools/initial-user-needs/).

## How it works

![View placement schools flow](view-placement-schools--flow.png "View placement schools flow")

The ‘View individual placement school’ flow has 3 steps:

1. Find placement schools by location, school or training provider
2. Enter school name, UKPRN or URN
3. View placement school details

### Find placement schools by location, school or training provider

The first step in the ‘Find placement schools by location, school or training provider’ flow is to decide how to search. We show a list of radio buttons:

- by city, town or postcode
- by school
- by university or other training provider

In this post, we will describe the second flow, searching by school.

If the user does not select an option, we show an error message:

> Select find placement schools by location, school or training provider

### Enter school name, UKPRN or URN

The second step in the flow is to find the school.

We use an autocomplete to suggest schools when the user types a school name, UKPRN or URN. The autocomplete is populated with all schools from [Get information about schools (GIAS)](https://get-information-schools.service.gov.uk/), including open and closed schools.

If the user does not enter a search term, we show an error message:

> Enter a school name, UKPRN or URN

### View placement school details

The final step in the flow shows the individual placement school.

We show placement school details in a [GOV.UK summary list](https://design-system.service.gov.uk/components/summary-list/).

![Example summary list](summary-list-example.png "Example summary list")

We show the school name in the page heading and a summary list of the school’s details.

Each summary list includes:

- school status
- UK provider reference number (UKPRN)
- unique reference number (URN)
- a link to the school’s details on Get information about schools (GIAS)
- school type and type group
- education phase and age range
- address
- a list of academic years the school participated in initial teacher training (ITT)

We also include a link to ‘Search again’.
## Further considerations

We considered some changes that we did not implement. These included:

- Showing more details about the school
- Showing the placement school on a map
- No-JavaScript version of the flow
- Finding the school using its postcode

### Showing more details about the individual school

The current school page displays a limited amount of information we know about each school.

Instead of simply linking to GIAS, we could include more information on this page, including:

- special educational needs and disabilities (SEND) details
- linking to Ofsted reports
- showing course or subject information of hosted trainees
- linking to related schools
- linking to a provider search

### Showing the placement school on a map

Showing the placement school on a map makes the information more useful.

People grasp geography faster on a map. It shows clusters, gaps and proximity to landmarks such as home, university or transport hubs. It complements the details view rather than replaces it.

It supports decision-making. Users can see whether options are concentrated along a rail line, split by a river, or spread across rural areas. That context is hard to read from a list alone.

### No-JavaScript version of the flow

When users select a school in the flow, we use an autocomplete to help them.

The autocomplete feature works well for quickly selecting a school; however, it requires JavaScript, which is not available to everyone, and it does not always run successfully.

Users might not have JavaScript enabled or available because they:

- disable JavaScript in their browsers to avoid potential security risks, such as cross-site scripting (XSS) attacks
- rely on screen readers or other assistive technologies, and might disable JavaScript if it interferes with their tools
- are using older or less powerful devices, where JavaScript can slow down performance
- work in an organisation that enforces strict browsing policies that disable JavaScript to maintain security and control over its network

We will add a no-JavaScript version of the find placement schools flow, which we can progressively enhance.

### Finding the school using its postcode

We use an autocomplete to help users find a school. This autocomplete accepts school name, UKPRN and URN, but not postcode.

Many users remember a place better than codes, such as UKPRN and URN. Using a postcode or even a place name is a quick way to find the school.

We will consider implementing search by postcode and place name in the autocomplete to reduce the effort it takes for the user to find the school.

*[GIAS]: Get information about schools
*[ITT]: initial teacher training
*[SEND]: special educational needs and disabilities
*[UKPRN]: UK provider reference number
*[URN]: unique reference number
*[XSS]: cross-site scripting
