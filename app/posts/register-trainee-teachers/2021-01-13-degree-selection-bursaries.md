---
title: Selecting which degree a bursary was awarded for
description: A description just for Jesse
date: 2021-01-13
---

When trainees have multiple degrees, providers need to tell us which attracted their bursary (for courses that have bursaries). Most trainees will have a single degree only, so this is only relevant for a minority of trainees. 

Where trainees have multiple degrees, we’ll show an extra page asking which degree was awarded a bursary.

Previously, bursary levels varied depending on different factors, including the grade the trainee got for the degree - so a 2:1 might attract a higher bursary than a 2:2. In this situation if the candidate had both, the provider would have awarded the bursary on the basis of the degree with the higher grade.

Since designing this page, we’ve learnt that bursary levels have been streamlined for the next academic year - meaning that selecting a degree would no longer be needed. If so, we’ll be able to avoid asking this question in the first place. For now, we’ll this it as a useful design for picking between degrees, but won’t build it as a feature in production.


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  title: "Designs",
  items: [{
      text: "Bursary question",
      img: { src: "bursary-question.png" }
    }, {
      text: "Bursary summary",
      img: { src: "bursary-summary.png" }
    }]
}) }}
