---
title: Edit a course outcome
description: Allow providers to choose an outcome, instead of using our inferred one.
date: 2018-10-18
---

We currently infer the outcome with a mapping from UCAS data:

* qts: QTS
* postgraduate or professional (with or without QTS selected): PGCE with QTS

Additionally, if one of the subjects is ‘further education’ we give it the outcome of PGCE only.

There are some PGDE courses. Currently it’s a developer task to set these as PGDE. We infer this from enrichment text or change it in response to support queries.

We need to allow users to easily set their outcome if what we’ve inferred is wrong. This design should also allow further qualification options to be added.

## Implementation options

We could take a similar to contacts details: if a provider hasn’t set anything specific, we should continue to infer an outcome from the UCAS data. Once they’ve set their own we always use that one.

Alternatively we could populate an enrichment field for each of the courses containing the outcome. Then we would only need to infer outcome for new courses. The enrichment population shouldn’t alter the content state (eg it should not make new drafts).

## QTS with optional PGCE

There is a new option: QTS with optional PGCE. Providers have requested this label, and it makes sense to indicate it. For filtering purposes this should behave the same as PGCE with QTS.

## Hide uncommon options

The design separates common options from the uncommon ones. We want to nudge providers towards the most common QTS and PGCE with QTS.

If one of the options in the disclosure is selected then the box should be opened by default.

## Further education options

Further education courses don’t come with QTS. We need to add a bit of context to the outcome option here so that providers don’t click ‘PGCE’ or ‘PGDE’ by mistake. In publish courses only we add the further education context to the label and make the lack of QTS explicit.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Course with prefilled outcome",
    img: { src: "course-with-prefilled-outcome.png" }
  }, {
    text: "Edit outcome",
    img: { src: "edit-outcome.png" }
  }, {
    text: "Edit outcome with more options open",
    img: { src: "edit-outcome-with-more-options-open.png" }
  }]
}) }}
