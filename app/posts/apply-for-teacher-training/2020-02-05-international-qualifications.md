---
title: International qualifications
description: Initial designs for capturing international qualifications
date: 2020-02-05
---
Initial designs for capturing:

- international degrees
- international qualifications equivalent to a Maths, English or Science GCSE
- other international qualifications

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "International degree",
      img: { src: "01-international-degree.png" }
    }, {
      text: "I know what degree it is equivalent to",
      img: { src: "02-i-know-what-it-is-equivalent-to.png" }
    }, {
      text: "I don’t know what degree it is equivalent to",
      img: { src: "03-i-dont-know-what-it-is-equivalent-to.png" }
    }, {
      text: "Have you completed your degree?",
      img: { src: "04-have-you-completed-your-degree.png" }
    }, {
      text: "Yes I have completed my degree selected",
      img: { src: "05-yes-i-have-completed-my-degree.png" }
    }, {
      text: "I am still studying selected",
      img: { src: "06-i-am-still-studying.png" }
    }, {
      text: "International degree summary",
      img: { src: "07-international-degree-summary.png" }
    }, {
      text: "Non UK Maths GCSE selected",
      img: { src: "08-non-uk-maths-gcse-selected.png" }
    }, {
      text: "I know what UK qualification it is equivalent to",
      img: { src: "09-i-know-what-uk-qualification-it-is-equivalent-to.png" }
    }, {
      text: "I don’t know what UK qualification it is equivalent to",
      img: { src: "10-i-dont-know-what-uk-qualification-it-is-equivalent-to.png" }
    }, {
      text: "What grade is your Maths qualification?",
      img: { src: "11-what-grade-is-your-maths-qualification.png" }
    }, {
      text: "Other international qualification",
      img: { src: "12-other-international-qualification.png" }
    }]
}) }}
