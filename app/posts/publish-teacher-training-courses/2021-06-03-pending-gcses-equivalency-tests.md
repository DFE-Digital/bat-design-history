---
title: Pending GCSEs and equivalency tests
description: Asking providers how flexible they are on GCSE entry requirements
date: 2021-06-03
---

{% from "screenshots/macro.njk" import appScreenshots with context %}

Providers are currently asked to indicate how flexible they are around the GCSE requirement by answering a question for each subject (maths and English, plus science for Primary courses).

This information is used by the UCAS application service only, where candidates are blocked from applying if they do not have the relevant GCSE grades and the provider has selected the ‘least flexible’ option.

{{ appScreenshots({
  hideContents: true,
  items: [{
      text: "Existing GCSE question",
      img: { src: "existing-question.png" }
    }]
}) }}

The [original design](/publish-teacher-training-courses/minimum-course-requirements-logic) for this question used two separate questions instead - one on pending GCSEs and one on equivalency tests. However this was implemented differently for compatibility with UCAS.

## First iteration

For the 2022-2023 cycle, the UCAS service will no longer be used. This gave us an opportunity to revisit this question.

We initially did a very minimal change to the question, removing the UCAS references and changing the guidance to indicate that candidates would be ‘discouraged but not blocked’ from applying if they did not have the relevant GCSE grade.

{{ appScreenshots({
  hideContents: true,
  items: [{
      text: "First iteration",
      img: { src: "first-iteration.png" }
    }]
}) }}

Usability research with providers revealed that this question phrasing was confusing, and it wasn't always understood that the answers were on a scale, and that the ‘Equivalency test’ option also included those taking the GCSE.

In addition, the use of ‘or equivalent’ in the first option , which was intended to cover non-GCSE equivalents such as O Levels or international qualifications, was confused with the ‘equivalency test’ option.

## Second iteration

We decided to return to the original (unimplemented) design, and ask separate questions for pending GCSEs and equivalency tests.

For the pending GCSE question, providers are unable to say which subjects this applies to, as research indicated that providers would either accept pending GCSEs or not, and that this would not vary by GCSE subject.

The equivalency test option does vary by GCSE subject though, as some providers indicated that they could offer these tests in some subjects but not others.

We also added an option text field to allow providers to give further details on their equivalency tests, as research indicated that there were some nuances around this, and may be other information that candidates need to know.

{{ appScreenshots({
  hideContents: true,
  items: [{
      text: "Second iteration",
      img: { src: "second-iteration.png" }
    }]
}) }}
