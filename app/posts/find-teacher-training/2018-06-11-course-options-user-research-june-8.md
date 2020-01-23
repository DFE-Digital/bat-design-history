---
title: Folded courses research 8 June 2018
description: Testing study options in search results and on the course information page.
date: 2018-06-11
---
We tested a hypothesis around folding courses - eg salaried and unsalaried folded into one course listing and course detail page. (More on folding: ‘[What is a course?](/publish-teacher-training-courses/what-is-a-course)’, [folding detail](/publish-teacher-training-courses/imported-from-ucas))

Course folding reduces the number of results per search and allows search results to surface more variety. Rather than English at Catholic Teach Alliance listed four or five times, it would be listed just once, allowing for the next course to be surfaced immediately, also making results fairer.

With fewer courses to add information for it should also provide a lighter work load for providers entering courses.

[Discussion guide](https://docs.google.com/document/d/1bKRxKlHHSVm9lZ4vJHxOoJpYkklJiz51oukQ7tsG4N0/edit?usp=sharing)

6 remote user research sessions recorded using Lookback:

* [Participant 1](https://lookback.io/watch/kw8NGRosYvft9yM3G)
* [Participant 2](https://lookback.io/watch/fNgMHR8TLkg3d2Kr2)
* [Participant 3](https://lookback.io/watch/FuAzAMcbq9LcCswXv)
* [Participant 4](https://lookback.io/watch/kH3oS3z8nAoWMsJ8B)
* [Participant 5](https://lookback.io/watch/Z3nCygSqTdw3agSGh)
* [Participant 6](https://lookback.io/watch/8QnFPjo5LYrFdFBdd)

## Results

The UX needed to be clearer on the course listings/results page, showing the course options, but most candidates understood the meaning; there is evidence that people did navigate differently the course listing page depending on which course they would choose.

The course details page ended up being long as content wasn’t as similar across variants as we once thought. At the apply point people understood that there were options and some even would click both to compare.

[Research notes in Confluence](https://dfedigital.atlassian.net/wiki/spaces/BaT/pages/445317125/Folded+courses)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Index",
    img: { src: "index.png" }
  }, {
    text: "Find by location",
    img: { src: "find-by-location.png" }
  }, {
    text: "Search results with variants",
    img: { src: "search-results-with-variants.png" },
    caption: "There seems to be an understanding once participants arrive at the course listings that there are multiple options in one course. [Participant 121 understands two courses folded into one](https://lookback.io/watch/8QnFPjo5LYrFdFBdd?t=22m16.5s-26m58s).

Looking at the first result: “it kind of looks like there’s two options – do the PGCE with the bursary, or drop the PGCE and get a salary … and they don’t offer part time”

Participant 123 says that the UI is not clear, “[it is not clear there are two routes](https://lookback.io/watch/kH3oS3z8nAoWMsJ8B?t=28m39.7s-34m42s)”. However they understand that there are two courses. Also makes the point that if you don’t know the acronyms then it could appear meaningless to some users (but not themself).

Looking at the second result, participant 122 doesn’t see the folded options, he only sees the bottom of the two options – ‘for the SCITT route you’re only getting your QTS, not your PGCE’. It seems to be due to his assumption that SCITTs dont do a PGCE. However [he says it’s due to a it not being visually clear](https://lookback.io/watch/Z3nCygSqTdw3agSGh?t=17m50.8s-22m24s)."
  }, {
    text: "First course",
    img: { src: "first-course.png" },
    caption: "The folded Apply option doesn’t seem to work with participant 122 in the sense that [they don’t see it or click it](https://lookback.io/watch/Z3nCygSqTdw3agSGh?t=31m11.7s-35m45s)."
  }, {
    text: "Second course",
    img: { src: "second-course.png" }
  }, {
    text: "Third course",
    img: { src: "third-course.png" }
  }, {
    text: "Fourth course",
    img: { src: "fourth-course.png" }
  }]
}) }}
