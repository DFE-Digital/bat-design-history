---
title: Filterable find concept
description:
date: 2022-10-07
related:
  items:
    - text: Making the service more browseable
      href: /find-teacher-training/making-the-service-more-browseable/
    - text: Exploring how to make the service more browsable
      href: /find-teacher-training/exploring-how-to-make-the-service-more-browsable/
screenshots:
  items:
    - text: Results list - unfiltered
      src: filter-concept--results-list-unfiltered.png
    - text: Results list - filtered
      src: filter-concept--results-list-filtered.png
    - text: Results list - filtered and with a search term
      src: filter-concept--results-list-filtered-with-search-term.png
---


## What we changed


## How it works


## Other considerations

We considered some changes which were not implemented.

- Reordering the subject list to show all checked subjects in alphabetical order at the top of the list of subjects, followed by an alphabetical list of unchecked subjects. This was not implemented as it is known to increase error rates and misinterpretations.
- Providing a ‘selected’ count below the filter’s heading similar to that found in the GOV.UK finder frontend component called [option select](https://finder-frontend.herokuapp.com/component-guide/option-select). This was not implemented in this iteration as we could not establish a need for it.
- Putting each filter section into an expandable region, but hiding the content means the user has to work harder to reveal the content.
