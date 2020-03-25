---
title: PGDE and further education courses
description: We quickly iterated fixes to correctly indicate qualifications on these courses.
date: 2018-10-02
---

We started with two qualification options:

* PGCE with QTS
* QTS

For most courses this was acceptable. PGCEs are also known as PGCertEd or PGCert (if without an education specialism).

We need providers to always use PGCE and none of the variants, those variants can be considered something different and will confuse users.

The new options are:

* PGCE with QTS
* PGDE with QTS
* QTS
* PGCE
* PGDE

## PGDE

Postgraduate diplomas in education (also known as PGDE or PGDipEd or PGDip if omitting the education specilisation) are almost the same as PGCE except they offer more Master’s credits, _we think_.

Historically there was a clear difference between the two types of course, but today they are largely interchangeable.

We updated the qualification filter from ‘PGCE with QTS’ to ‘PGCE (or PGDE) with QTS’ and briefly indicated that from a ‘what you’ll get’ perspective they are essentially equivalent.

On course pages we show PGDE, expand the abbreviation and indicate that these courses offer Master’s credits.

We identified PGDE courses by looking for any enriched course that used any of the PGDE terms then looked at each result to avoid false positives. [There’s about 120](https://gist.github.com/fofr/63073b212c76469ba88511dc0db63691).

## Further education

There are no qualifications required to teach further education. This means further education courses don’t offer QTS. To say ‘with QTS’ would be wrong.

For any further education course (eg where the further education subject is used) we omit the ‘with QTS’ in the course offered description.

PGDE and PGCE descriptions on course pages make it explicit that these courses do not award QTS.

‘A postgraduate certificate in education (PGCE) is recognised internationally. This course does not lead to the award of qualified teacher status (QTS).’

There’s [29 further education courses](https://find-postgraduate-teacher-training.education.gov.uk/results?l=2&subjects=14&qualification=QtsOnly&qualification=PgdePgceWithQts&qualification=Other&fulltime=False&parttime=False).

### QTLS (Qualified teaching learning and skills)

We investigated QTLS (Qualified teaching learning and skills). This used to be required to teach FE but is no longer needed. On completion of an FE course students can still apply for QTLS through the [Society for Education and Training](https://set.et-foundation.co.uk/professionalism/qtls/), and depending on the subject, [QTLS is considered equivalent to QTS](https://www.gov.uk/guidance/qualified-teacher-status-qts#qualified-teacher-learning-and-skills-qtls). We learnt that this can be years after completing the course and that courses don’t directly award QTLS, it’s different to the QTS process.

We chose to ignore QTLS. Providers who want to talk about it can use the course fields.

### ProfGCE (Professional graduate certificate in education)

This qualification is at level lower than PGCE. It is mostly relevant in the FE sector. For now we have not done anything about ProfGCE courses, there is only one reference in all the enrichment data, and that refers to it as an option.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  path: "/images/find-teacher-training/live-launch",
  items: [{
    text: "Qualification filter",
    img: { src: "qualification-filter.png" }
  }, {
    text: "Further education search results",
    img: { src: "further-education-results.png" }
  }, {
    text: "Full course page (PGDE)",
    img: { src: "full-course-page-pgde.png" }
  }]
}) }}
