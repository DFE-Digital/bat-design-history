---
title: Enrichment release – 6 September
description: Publish courses, as it was released with the course enrichment feature.
date: 2018-09-10
---

Screenshots of Publish courses (manage-courses-ui) as released on 6 September.

This is what the service looked like when we enabled organisation and course enrichment for the first time.

This release doesn’t include:

* editing contact details
* about your organisation [layout improvements](/publish-teacher-training-courses/iteration-aug-23)
* persistent validation on publish

## User research

After launch we tested this with providers:

* [Excalibur TSA](https://lookback.io/watch/6Cxgfdd85cChDjSWT)
* [Learning Institute South West](https://lookback.io/watch/aEg6nx4WHpuwQjTJq)
* [UCL (in-person)](https://lookback.io/watch/2E4kE9niSMwCnRCiN)
* [North East Partnership SCITT](https://lookback.io/watch/c4ARA3fRWZvcnR2HE)
* [University of Hertfordshire](https://lookback.io/watch/mFgLmxxqTEyGNF7pK)

Insights were recorded in [Google Sheets](https://docs.google.com/spreadsheets/d/1XJvy0mirMWdumDno05OsOEduU8_Gbbm6ta7ZQaMXJ9g/edit?ts=5b97f2af#gid=0).

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Organisation",
    img: { src: "organisation.png" }
  }, {
    text: "Course",
    img: { src: "course.png" }
  }, {
    text: "Course new and not yet running",
    img: { src: "course-new-not-yet-running.png" }
  }, {
    text: "Course not running",
    img: { src: "course-not-running.png" }
  }, {
    text: "About this course",
    img: { src: "about-this-course.png" }
  }, {
    text: "Fees and length",
    img: { src: "fees-and-length.png" }
  }, {
    text: "Requirements and eligibility",
    img: { src: "requirements-and-eligibility.png" }
  }, {
    text: "Preview",
    img: { src: "preview.png" }
  }, {
    text: "About your organisation",
    img: { src: "about-your-organisation.png" }
  }, {
    text: "Request access",
    img: { src: "request-access.png" }
  }]
}) }}
