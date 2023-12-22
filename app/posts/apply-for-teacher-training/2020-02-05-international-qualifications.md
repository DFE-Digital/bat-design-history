---
title: International qualifications
description: Initial designs for capturing international qualifications.
date: 2020-02-05
tags:
  - qualifications
  - international candidates
screenshots:
  items:
    - text: International degree
      src: 01-international-degree.png
    - text: I know what degree it is equivalent to
      src: 02-i-know-what-it-is-equivalent-to.png
    - text: I don’t know what degree it is equivalent to
      src: 03-i-dont-know-what-it-is-equivalent-to.png
    - text: Have you completed your degree?
      src: 04-have-you-completed-your-degree.png
    - text: Yes I have completed my degree selected
      src: 05-yes-i-have-completed-my-degree.png
    - text: I am still studying selected
      src: 06-i-am-still-studying.png
    - text: International degree summary
      src: 07-international-degree-summary.png
    - text: Non UK Maths GCSE selected
      src: 08-non-uk-maths-gcse-selected.png
    - text: I know what UK qualification it is equivalent to
      src: 09-i-know-what-uk-qualification-it-is-equivalent-to.png
    - text: I don’t know what UK qualification it is equivalent to
      src: 10-i-dont-know-what-uk-qualification-it-is-equivalent-to.png
    - text: What grade is your Maths qualification?
      src: 11-what-grade-is-your-maths-qualification.png
    - text: Other international qualification
      src: 12-other-international-qualification.png
---

{% from "dist/govuk/components/warning-text/macro.njk" import govukWarningText %}
{{ govukWarningText({
  html: "[We iterated this design before opening up the service to international candidates](/apply-for-teacher-training/international-candidates/#residency-and-visa-status)" | markdown("inline"),
  iconFallbackText: "Warning"
}) }}

Initial designs for capturing:

* international degrees
* international qualifications equivalent to a Maths, English or Science GCSE
* other international qualifications
