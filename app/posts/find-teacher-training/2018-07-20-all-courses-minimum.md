---
title: Just the UCAS data
description: What an absolute minimum viable service might look like.
date: 2018-07-20
screenshots:
  items:
    - text: Index
    - text: Find by location
      caption: |
        ### Results

        As expected, location continues to be the number 1 need for users and the first choice was selected.

        “I can’t travel far with kids at the moment”

        “Wanted to do Physics with Maths, but closest was Sheffield, which was too far to travel”
    - text: Teacher training courses
      caption: |
        ### Search results

        The results have been updated from the private beta to make it easier to differentiate them. Changes include:

        * adding a summary of the course type
        * including the (QTS) accrediting provider
        * denoting the type of location
        * cleaning up the address formatting
        * removing decimal places from distance

        ### Vacancies

        The design includes filters for vacancies. We aim to show only courses with vacancies but will provide a filter to see all courses – sometimes users need to see if there are more suitable courses nearby that they could apply to in the next cycle. This doesn’t need to be addressed until after launch – at launch all courses will have vacancies.

        ### Results

        Users [seemed to understand](https://lookback.io/watch/m3ue4g3QBwbt7pq9G?t=41m39s) that they were only seeing courses with vacancies, and that they could use the filter to view courses that were full. (When a result didn’t show – “probably because there are no vacancies”)

        * * *

        The ‘sort by’ dropdown caused some confusion. It isn’t clear how sorting by training provider would be useful. This was [removed in the next iteration](/find-teacher-training/mvp-iteration-jul-25#teacher-training-courses). The ordering of results by distance seemed implicit enough to remove the “sorted by distance” label too. We’ll see how this tests.

        * * *

        Participant 1 didn’t know if courses were salaried or not, “[None of them tell you if they are salaried or not – I assume it’s not salaried](https://lookback.io/watch/m3ue4g3QBwbt7pq9G?t=31m31s)” (no salaried courses were shown, they were looking for unsalaried courses because they had a bursary).
    - text: Change subject
      caption: |
        UCAS doesn’t have subjects for “Primary general”, “Primary mathematics” or “Primary physical education”.

        Business education is more commonly referred to as business studies.

        The alphabetical listing seems arbitrary.

        Helpful guidance: [Improving the usability of multi-selecting from a long list](https://medium.com/tripaneer-techblog/improving-the-usability-of-multi-selecting-from-a-long-list-63e1a67aab35)

        ### Iteration

        Before research we iterated the long list of subjects into [a grouped list](/find-teacher-training/mvp-iteration-jul-25#find-by-subject-collapsed).
    - text: Minimum course page
      caption: |
        The course website, not shown here, was added prior to research.

        ### Results

        The course website provided a much needed jumping off point to find more information about a course.

        Most websites point to the provider’s home page rather than something more specific, for each course a user will need to navigate the provider website to find further information: “[a lot of time and effort](https://lookback.io/watch/QCBC3KYjNxtEuQH5R?t=32m59s)”

        The website prevents the user from reaching a dead end.

        * * *

        Participant 1 wanted to see requirements and eligibility, “[I want to see what they’re looking for](https://lookback.io/watch/m3ue4g3QBwbt7pq9G?t=21m21s)”

        Participant 2 noted that a ‘[school bio](https://lookback.io/watch/QCBC3KYjNxtEuQH5R?t=24m8s)’ would be useful information to show.
---

To deliver a viable service by October we are aggressively reducing scope, limiting many features to their irreducible core. When we have built the minimum viable service, we can begin to improve on features to better meet user needs. This is being tracked using a [Story map in Trello](https://trello.com/b/9fCxMchD/bat-search-story-map).

To visualise what that service might look like, this is a design which uses:

* only the existing UCAS course data on course detail pages – eg there’s been no enrichment and there is no bespoke text
* the list of subjects as provided by UCAS
* only the locations that exist in the data for location search

All private beta specifics (eg anything pertaining to business studies only) have been removed.

## User research

We tested this design with remote users on 25 to 26 July 2018:

* [Participant 1](https://lookback.io/watch/m3ue4g3QBwbt7pq9G)
* [Participant 2](https://lookback.io/watch/QCBC3KYjNxtEuQH5R)
* [Participant 3](https://lookback.io/watch/aHYeZsGupN6oFuGGv)
* [Participant 4](https://lookback.io/watch/evAk5KLYjJxvk2BLc)
* [Participant 5](https://lookback.io/watch/Psi3panxQDwkrXuwj)
* [Participant 6](https://lookback.io/watch/7MvZtfSoB6h3HnbG4)

Aiming to test:

* the minimum viable service, looking for any major difficulties in the journey to prioritise focus
* reactions to minimum course details page
* results listings including distance to nearest place you can apply to attribute
* current filters and what is a priority in terms of building

We [iterated this design](/find-teacher-training/mvp-iteration-jul-25) during research.
