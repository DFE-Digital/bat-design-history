---
title: Placement schools and training centres
description: Asking providers to give more detailed location information
date: 2021-06-14
tags:
  - locations
  - placement schools
  - training locations
screenshots:
- title: Managing placement school locations
  headingLevel: 3
  items:
    - id: locations-schools-not-setup
      text: Locations – Placement schools (none added)
      caption: Before providers can manage school placement locations, they need to indicate their preferences by completing a wizard.
    - id: locations-schools-wizard-display
      text: How do you want to display placement schools?
    - id: locations-schools-wizard-apply
      text: Can candidates choose a placement school when they apply?
      caption: If a provider opts to show precise locations of their placement schools, they are asked if candidates can select one of these locations when they apply.
    - id: locations-schools-wizard-add
      text: How do you want to add placement schools?
      caption: If no placement schools have been added previously, we ask how the provider wants to add placement school locations.
    - id: locations-schools-add
      text: Add a placement school
    - id: locations-schools-wizard-upload
      text: Upload school data
    - id: locations-schools-wizard-upload-review
      text: Review locations
    - id: locations-schools-display-list
      text: Locations – Placement schools (precise locations)
      caption: A list of placement schools when the provider has opted to display individual school locations.
    - id: locations-schools-display-list-and-apply
      text: Locations – Placement schools (precise locations that can be applied to)
      caption: A list of placement schools when the provider has opted to display individual school locations and let candidates choose one when they apply.
    - id: locations-schools-display-areas
      text: Locations – Placement schools (general placement areas)
      caption: A list of placement schools when the provider has opted to display general placement areas.
- title: Managing training centre locations
  headingLevel: 3
  items:
    - id: locations-centres-none
      text: Locations – Training centres (none added)
    - id: locations-centres-add
      text: Add a training centre
    - id: locations-centres
      text: Locations – Training centres
- title: Adding locations to a course
  headingLevel: 3
  items:
    - id: course-locations-incomplete
      text: Course (showing prompt to add schools and centres)
    - id: course-select-schools-none
      text: In which schools can candidates be placed? (No schools added)
    - id: course-select-schools-some
      text: In which schools can candidates be placed?
    - id: course-select-centres-none
      text: Where will candidates do their centre-based training? (No centres added)
    - id: course-select-centres-one
      text: Where will candidates do their centre-based training?
    - id: course-locations-complete-list
      text: Course (showing precise locations added)
    - id: course-locations-complete-area
      text: Course (showing general placement areas)
- title: Previewing a course
  headingLevel: 3
  items:
    - id: preview-list
      text: Course preview (showing precise locations)
    - id: preview-list-apply
      text: Course preview (showing precise locations that can be applied to)
    - id: preview-area
      text: Course preview (showing general placement areas)
---

## The location problem

Currently, Publish uses a model inherited from UCAS. This allows courses to show 2 types of location:

- the training provider’s contact address
- their training locations – places a candidate can apply to, but not necessarily where they’ll spend the majority, if any, of their time

Providers can add up to 37 addresses. Some set themselves up as multiple providers so they can add more locations (such as [West London Teaching School Alliance](https://web.archive.org/web/20210125160621/https://www.find-postgraduate-teacher-training.service.gov.uk/results/filter/provider?l=3&prev_l=none&prev_lat=none&prev_lng=none&prev_loc=none&prev_lq=none&prev_query=none&prev_rad=none&query=West+London+Teaching+School+Alliance)). Others only list one address (this is the case for 50% of SCITTs and 100% of HEIs).

Listed addresses are not classified in any way (they could be administrative addresses, campuses, schools, hubs or areas).

This is the [location problem](/publish-teacher-training-courses/the-location-problem); the information we have is inconsistent, which makes choosing courses based on location impossible for candidates.

## What location data do we need?

We’ve tried to use existing location data on Find, but it has proven problematic. We found that:

- [boosting HEI courses](/find-teacher-training/search-results-locations/) in search results unfairly favoured one type of provider

- [travel areas](/find-teacher-training/searching-by-location/#a-new-approach) did not align with providers’ understanding of where they offer placements

- [showing contextual guidance](/find-teacher-training/searching-by-location/#improving-guidance) explaining how school placements work did not reflect individual provider working methods

We reverted these changes because the data was unreliable and providers behave differently.

We cannot make improvements to Find until we have more accurate location data and can give providers the flexibility they want.

## What location data can providers give us?

When we looked at locations from a candidate perspective, we considered [using Travel to Work Areas](/find-teacher-training/searching-by-location/#a-new-approach). This was based on the assumption that providers would be unable to give us more precise location information.

When we spoke to providers, many told us that they maintain a list of placement or partner schools. We also found out that they have the URNs for these schools. A URN is a unique reference number used by the Department for Education (DfE) for education establishments. Using URNs means we can use structured data from the [Get information about schools](https://www.get-information-schools.service.gov.uk) service.

### Placement schools

Depending on the route and type of provider, placements are arranged differently:

- **Providers potentially have 100s of placement locations.** Some providers work with a lot of schools, possibly hundreds.

- **Placements are not known.** Some providers will not know which courses are running in which locations until closer to the start of the academic year. Placements can also change throughout the year and vary by subject.

- **Training does not take place in a single location.** Most routes involve candidates being placed in at least 2 different schools to give them broader teaching experience. Some routes can also involve study at a college or university campus

- **Providers cannot guarantee a specific placement.** Some providers tend to place candidates after the application stage, taking into account individual needs and availability of school places. Even for providers who have a more direct relationship with schools, circumstances can change (i.e. a mentor goes on maternity leave). Providers often have to explain to candidates that they cannot choose a particular school.

- **Some providers prefer not to reveal placement schools.** Some providers expressed concern that candidates might contact schools (who are not set up to deal with this sort of enquiry), or feel obliged to take candidates, when some years they can, some years they cannot. They were also concerned about competition legislation and being seen to advertise incorrect information.

[The Register team also did some research on placement schools](/register-trainee-teachers/initial-placement-findings/). They discovered that providers use different terminology, and different placement patterns.

A one size fits all approach to locations does not work.

## Our approach

To provide the best experience for candidates, we need consistent and complete location information for:

- the placement schools where a candidate may be placed,

- the centre-based training location(s) where candidates will undertake the academic parts of their training.

To give providers the flexibility they desire, we will let decide how they want to display their placement schools:

- General placement areas – we’ll derive a set of area names from the placement schools they give us

- Precise locations – we’ll show the individual names and addresses of placement schools. Providers can choose which schools are shown for each course.

Additionally, should they choose to show precise locations, they can decide if candidates can choose a placement school when they apply. If they select this option, they can manage vacancies and open and close courses at each location, as they do currently.

*[HEI]: Higher education institute
*[HEIs]: Higher education institutes
*[SCITT]: School centred initial teacher training
*[SCITTs]: School centred initial teacher training
*[UCAS]: Universities and colleges admissions service
*[URN]: Unique reference number
