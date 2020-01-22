---
title: No more course folding
description: Reasoning behind not folding courses and unfolded course designs.
date: 2018-08-09
---
We defined folding as the combination of ‘course variants’ by subject, eg PGCE with QTS, QTS only, salaried and unsalaried would all show as one search result and course detail page.

The [logic around course folding](/publish-teacher-training-courses/imported-from-ucas) was established in a [design with data exercise](/publish-teacher-training-courses/what-is-a-course). We then sought to validate these designs in user research with training providers and applicants.

The folding exercise was ran while we were unclear what data, if any, we’d get from UCAS. Since then the service has changed. UCAS will handle creation of all courses and their metadata, they send us that data regularly.

## User research

We tested folded courses with training providers:

* [West London Teaching School Alliance](https://lookback.io/watch/mbc9BNqBJjoRkinAE) ([screenshots](/publish-teacher-training-courses/school-direct-view))
* [Kingston School Direct](https://lookback.io/watch/FoHoHPQF7B5TwrFkw)
* [Swiss Cottage Teaching School Alliance](https://lookback.io/watch/HwTQT7B4WGnzRR2SG)
* [Bromley Schools Collegiate](https://lookback.io/watch/aLgtstXXFGEHFLeCL)
* [Catholic Teaching Alliance](https://lookback.io/watch/i4dYWSnhubPdWSY36)

We tested a course detail page with applicants: [applicant research](/find-teacher-training/course-options-user-research-june-8)

### Folding tested poorly with providers

When we tested folding with training providers they expressed surprise and confusion. It wasn’t obvious to them how certain information could be explained in the fields provided. For example: ‘[About this course](/publish-teacher-training-courses/school-direct-view#about-this-course)’, “which course is that for, these courses are different?”

We [iterated the page layout](/publish-teacher-training-courses/iteration-june-26) to be more explicit about the fields for each course variant to avoid this confusion. But we found that more and more small exceptions meant fewer fields could be shared between variants; eg a salaried course has a different interview process, and might have more emphasis on experience in the entry requirements.

By continuing to fold fields we would make it harder for providers to communicate all the differences between their courses.

The commonality we’d seen in the UCAS data was an illusion. By using UCAS course data to infer what’s common between courses, we neglected to consider that the UCAS tool itself makes it difficult for providers to communicate differences between their courses. In UCAS Entry Profiles, once a training programme is set up, it is cumbersome to go into each course section and modify it to describe the differences between courses.

#### When we unfolded

When we tested a design for templates it was easier to [apply a template to a variant than a folded course](/publish-teacher-training-courses/templates#courses). In research we found that any ambiguity or concern regarding which course was which and which content to put into which field was gone – these topics didn’t arise. The unfolded courses tested well with users because it’s what they expected, it followed the same pattern as UCAS.

We also presented an unfolded design to users for [checking their UCAS data](/publish-teacher-training-courses/check-ucas-data#courses) had imported correctly, this too was a natural fit.

### Folding tested ok with applicants

The picture was better when we tested with applicants.

On the [search results page](/find-teacher-training/course-options-user-research-june-8#search-results-with-variants) users largely understood that multiple courses were being represented. Here the benefit of course folding was seen more clearly; users could more easily scan past a single training provider without needing to read each variant of their course – in this sense the results were fairer.

We saw that applicants didn’t understand that some fields only applied to some variants – we expected the [iterated course detail page](/publish-teacher-training-courses/iteration-june-26#preview) to largely fix this, but we didn’t test this version with applicants.

## Don’t fold courses

The first version of the tool will be based on UCAS’s definition of a course. Course metadata will still be created and configured in UCAS. The UCAS model of a course must persist in some format in the publish courses tool. It is also the model that providers are most familiar with.

Trying to create a new course model when we don’t control all aspects of the course, especially course creation and application is troublesome. Providers will need to understand both models and how they overlap.

Sticking with the UCAS course model for the minimum viable service reduces risk and simplifies what we build.

There remains a case for folding some School Direct courses once the minimum viable service is built. Where a provider has separated their courses purely by school, [folding by school](/publish-teacher-training-courses/imported-from-ucas#folding-on-schools) could be worth folding. Grouping might also work.

## Grouping not folding

The benefit of folding on search results that we saw with applicants can be achieved using grouping.

Rather than 1 result linking to a page with all variants, instead group a provider’s courses in the search results. A group will have multiple links to each variant – allowing for a cursory comparison, while the group itself can be easily skipped past.

We’re [tracking grouping on the story map](https://trello.com/c/jQftifYl/44-group-listings-to-make-results-easier-to-scan) and consider it outside of the minimum viable service.

## Unfolded course designs

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  path: "/images/publish-teacher-training-courses/unfolded-courses",
  items: [{
    text: "Organisation",
    img: { src: "organisation.png" }
  }, {
    text: "Course: PGCE with QTS full time with salary",
    img: { src: "pgce-with-qts-full-time-with-salary.png" }
  }, {
    text: "Course: PGCE with QTS full time",
    img: { src: "pgce-with-qts-full-time.png" }
  }, {
    text: "About your organisation",
    img: { src: "about-your-organisation.png" }
  }]
}) }}
