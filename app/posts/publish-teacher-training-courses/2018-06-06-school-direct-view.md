---
title: School direct view
description: School Direct routes are the most complex. List schools, show multiple UCAS courses per subject, show folded course summary.
---
School Direct routes are the most complex. List schools, show multiple UCAS courses per subject, show folded course summary.

We tested this with West London Teaching School Alliance:
[research session](https://lookback.io/watch/mbc9BNqBJjoRkinAE). We also demoed it to groups of School Direct and SCITT providers in Brighton and Reading. Some provider user needs have been derived from these sessions: [provider user needs](https://docs.google.com/document/d/1Jb5uDZBnSFGcCdl3gAF9ggAo1klsEWL-KeSIGGLJpBE/edit)

An iteration of this was tested with Kingston School Direct.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Courses",
    img: { src: "courses.png" }
  }, {
    text: "Course",
    img: { src: "course.png" }
  }, {
    text: "Course details from ucas",
    img: { src: "course-details-from-ucas.png" }
  }, {
    text: "About this course",
    img: { src: "about-this-course.png" }
  }, {
    text: "About this training provider",
    img: { src: "about-this-training-provider.png" },
    caption: "### Interview process

Depending on the course the interview can be different. For a salaried course the school you’ll be training in will have a greater say over the applicant.

### Placement schools

This box is universally hated. It’s perhaps doing too much – combining pattern of placements, course structure and how you are placed.

Possible alternatives: “When you’ll spend time in a different school”, “Schools you’ll train in”"
  }, {
    text: "Course requirements",
    img: { src: "course-requirements.png" }
  }, {
    text: "Qualification",
    img: { src: "qualification.png" },
    caption: "Qualification outcomes are more complex than this. For example:

* QTS with a PGCE top-up – top-ups can vary, eg alumni PGCE, this also affects fees
* PGCE can vary, some have masters credits others don’t – sometimes you don’t get the PGCE if you fail the masters bit, sometimes that doesn’t matter"
  }, {
    text: "Salary",
    img: { src: "salary.png" },
    caption: "The salary isn’t available. It’s based on the national teacher’s pay scale that isn’t published until later in the year.

Schools have also been applying that scale differently, eg prorata based on time in schools vs full time. Rules around this are unclear.

We need to remove the salary field and add guidance around how much salary there will be in existing box (eg setting against pay scale)."
  }, {
    text: "Preview",
    img: { src: "preview.png" }
  }, {
    text: "Schools",
    img: { src: "schools.png" }
  }, {
    text: "Organisation",
    img: { src: "organisation.png" }
  }]
}) }}
