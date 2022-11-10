---
title: Schools autocomplete
description: An autocomplete for selecting partner schools quickly.
date: 2018-11-27
screenshots:
  items:
    - text: Schools autocomplete
      src: 01-partner-schools-autocomplete.png
    - text: Schools autocomplete (GIF)
      src: 02-schools-autocomplete.gif
---

[Live demo](https://publish-courses-prototype.herokuapp.com/school-autocomplete) and [pull request](https://github.com/DFE-Digital/publish-teacher-training-prototype/pull/18).

If we begin asking providers for their [list of partner schools](/find-teacher-training/maps-for-providers-with-many-partners) we’ll need a fast and easy way to create and manage that list. Partner schools can be more than 1,000.

Use the accessible autocomplete with the [Edubase schools data](https://get-information-schools.service.gov.uk/Downloads), there’s about 26,000 schools.

Each option contains:

- school name
- town
- URN number
- postcode

This allows searching for schools by each of these properties (eg all schools in ‘BN1’). The text is also necessary as a differentiator when choosing a school with a common name – for example St Mary’s Catholic Primary School.

## User research

We’ve begun testing this pattern as part of the UCAS Transition work. It is being used in the [Add training location flow](/publish-teacher-training-courses/new-training-location#user-research).

- [Canterbury Christ Church University](https://lookback.io/watch/oDwREDkfjwjW5SpCi)
- [East of England Teacher Training](https://lookback.io/watch/vw6eDzqmL4s24rR2Y) (a SCITT)

We’ve found that:

- if many schools have the same name, the right one is hard to find, eg St Patrick’s or St Mary’s ([example](https://lookback.io/watch/vw6eDzqmL4s24rR2Y?t=48m48s))
- imprecise punctuation meant that an exact match wasn’t shown (eg missing comma or apostrophe)
- users don’t necessarily know the postcode, when they do the search works well

We’ve tweaked the prototype so that:

- punctuation is ignored
- 30 results show, rather than 10

While out of scope for a prototype, the live version of this must be able to handle fuzzy matching, for example:

- starting a search with St Mary’s, then qualifying it with London or the beginning of a postcode (eg BN1), should show all matching schools in London or that area
- common alternatives must be considered, eg CofE, C of E, CE, Church of England

*[UCAS]: Universities and colleges admissions service
*[URN]: Unique reference number
