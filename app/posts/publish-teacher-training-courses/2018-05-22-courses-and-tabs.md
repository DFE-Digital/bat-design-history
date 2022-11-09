---
title: Courses and tabs
description: Exploration of a home page view with tabs for courses, schools, default course and organisation details.
date: 2018-05-22
screenshots:
  items:
    - text: Courses
      caption: |
        A significantly different view to the [previous courses index](/publish-teacher-training-courses/course-with-parts#courses). Created alongside [course variants in search and compare](https://search-and-compare-beta.herokuapp.com/history/variants).

        Use tabs to split up key information around courses, schools, default course information and the organisation’s metadata.

        ### Course breakdown

        Use tables to show each study option with availability by school.

        Design breaks down when there are many schools and options per course. eg United Teaching National SCITT has about 10 schools with 4 variants (PGCE, QTS, salaried, no salary) which would be a table of 40 rows per course.

        ### Questions

        Should the page be paginated?

        - 30% of providers have only 1 or 2 courses
        - 85% of providers have 20 or fewer courses
        - 10% of providers have 50-100 courses

        We will classify some of these as variants of the same course, so numbers will be less. Some courses from School Direct schools may be bundled up into courses by the overall provider, so the number may increase. The net ought to be similar.

        When there are many courses, how do you find them?

        With a maximum of 100 courses, and with most providers having 20 or fewer courses, ordering by subject should be enough.
    - text: Courses by study option
      caption: An alternative view where the study option is pulled out of the table to reduce the number of rows for courses with many options and schools.
    - text: Organisation
    - text: Edit organisation
    - text: Schools
---

This is a visualisation of course information structured by:

- training provider metadata (eg provider name, contact details)
- common course information (eg about this provider or interview process)
- schools an organisation is associated with
- courses the organisation offers – full detailed comprised of all of the above
