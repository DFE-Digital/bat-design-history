---
title: New course wizard – Further education
description: Designs for the further education path in the new course wizard.
tags: publish-teacher-training-courses
---
After selecting ‘Further education’ as a course type, the wizard goes down a different path.

[Google diagram of new course workflow](https://docs.google.com/drawings/d/1DAhz464j1XDyQPoOH0adIwAceUwuGU1rqsWkVn8ZQ8I/edit)

Further education courses do not have:

* subjects (or languages)
* accredited bodies
* minimum GCSE requirements (there is no legal requirement)
* a fee or salary choice

Some screens need to differ:

* Title – there is no subject to generate a title from, we must ask for the title
* Outcome – the outcomes listed are PGCE or PGDE, there is no QTS option

Some pages can be reused:

* training locations (if applicable, though no current providers need this screen)
* full time or part time
* course start date

## User research

[Research playback presentation](https://docs.google.com/presentation/d/17wz2ZWJCNbbqsaywigok-fHv07IUjjiLRSaffCuim64/edit)

* [Canterbury Christ Church University](https://lookback.io/watch/oDwREDkfjwjW5SpCi?t=18m55.28s)
* [Sheffield Hallam University](https://lookback.io/watch/uCv5RfwkKAcyad3fJ?t=7m16.01s)
* [University of Huddersfield](https://lookback.io/watch/pWYBvEpr8YfeF7pAx?t=2m6.58s)

### Expertise

Not everyone who enters a further education course knows exactly what their FE courses offer. Some providers weren’t sure if their courses offered QTS or not (they don’t). They have contacts in their organisation who can give more detail.

### Titles

FE course titles are vague: Lifelong Learning, Further Education, FE Teacher Training. One provider explained that their FE course represented many possible subjects, from business to beauty, and that which subject would be taken would be discussed at interview.

### Pre-service and post-service

We’d seen these terms in some courses. We weren’t sure what they meant.

Post-service, or in-service is aimed at people already working or volunteering in a school as it does not include school placements. ([video](https://lookback.io/watch/pWYBvEpr8YfeF7pAx?t=5m4s))

Pre-service courses will include work placements.

### Is Find right for FE courses?

Should FE course be with all the others? “Yes - the application process is the same as those that result in QTS and managed in the same way. They’re getting the same treatment as someone who is applying for QTS” ([video](https://lookback.io/watch/pWYBvEpr8YfeF7pAx?t=12m36.1s))

How school placements work should be renamed to How placements work for FE courses, placements aren’t in schools.

As courses aren’t tied to allocations, the opening date for applications is arbitrary. “because this course is not subject to allocation restrictions, we know the course is going to run.” ([video](https://lookback.io/watch/pWYBvEpr8YfeF7pAx?t=15m25.7s))

## Screenshots

{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "What type of course?"},
    {text: "What is the course title?"},
    {text: "Pick a course outcome"},
    {text: "Full time or part time?"},
    {text: "Pick training locations"},
    {text: "When does the course start?"},
    {text: "Check your answers"}
  ]
}) }}
