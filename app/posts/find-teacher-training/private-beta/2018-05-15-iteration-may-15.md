---
title: Iteration 15 May 2018
description: Updated ‘choose your search’ page and added subject filter to results.
date: 2018-05-15
tags:
  - private beta
screenshots:
  items:
    - text: Find courses by
      caption: |
        Some user did not know what to do on the original ‘[choose your search](/find-teacher-training/private-beta/private-beta-launch#choose-your-search)’ page.

        Clarify the task by using a title that relates to the choice a user must make. Include ‘or’ in the title and options to indicate that only one of the options is needed ([PR](https://github.com/DFE-Digital/search-and-compare-ui/pull/58)).
    - text: Search by location
    - text: Search by provider
    - text: Search results
      caption: |
        If a user cannot find an appropriate business studies course, a valid user need is to find more appropriate courses for other subjects.

        The complete service would include a subjects filter, but in the beta we’ve removed it because of the single subject focus. Courses for other subjects can be found on UCAS.

        The yellow bar at the top of the page does not perform well in prompting users to search on UCAS if they cannot find what they’re looking for here.

        Put the subject filter back, but rather than allow the subject to be changed, prompt the user to visit the UCAS website instead. ([BATSA-232](https://dfedigital.atlassian.net/browse/BATSA-232), [Github issue](https://github.com/DFE-Digital/search-and-compare-ui/issues/33), [PR](https://github.com/DFE-Digital/search-and-compare-ui/pull/60)).
    - text: Subjects filter
---
