---
title: Capturing feedback about the service
description: Using a survey to gather insights about how candidates feel about using the service.
date: 2020-03-31
---

## User needs

**As a researcher**
I need to gather insights on how candidate’s feel about using the service
So that I can feed back user experience improvements to the service team

## Hypotheses

* If we prompt candidates to complete a feedback survey after they have submitted their application
  Then we will be more likely to get responses
  Because ‘Give feedback’ is the primary action on this page

* If we ask questions on the [system usability scale](https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html)
  Then we will be able to measure a candidate’s satisfaction with the service
  Because this is an industry standard questionnaire

* If we split questions across multiple pages
  Then we can capture incomplete responses
  Because we will save the answer to each question

We’ll know this works if a high percentage of candidates completing their applications give measurable feedback.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Confirmation page"
  }, {
    text: "I would recommend this service to a friend or colleague"
  }, {
    text: "I found this service unnecessarily complex"
  }, {
    text: "I thought this service was easy to use"
  }, {
    text: "I needed help using this service"
  }, {
    text: "I found all the parts of this service well-organised"
  }, {
    text: "I thought there was too much inconsistency in this website"
  }, {
    text: "I would imagine that people would learn to use this website very quickly"
  }, {
    text: "I found this website very awkward to use"
  }, {
    text: "I felt confident using this service"
  }, {
    text: "I needed to learn a lot of things before I could get going with this website"
  }, {
    text: "If you could improve anything on Apply for teacher training what would it be?"
  }, {
    text: "Is there anything else you would like to tell us?"
  }, {
    text: "Are you happy for us to contact you with follow-up questions to your feedback?"
  }, {
    text: "Thank you for your feedback"
  }]
}) }}
