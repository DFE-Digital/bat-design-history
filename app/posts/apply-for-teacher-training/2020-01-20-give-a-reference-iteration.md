---
title: Give a teacher training reference (iteration)
description: Simplifying the previous design
tags: awaiting-validation
---

An [iteration on the initial design](/apply-for-teacher-training/give-a-reference), removing some of the unnecessary fields.

## User needs

As a referee
: I need to provide a useful reference
: So that I can help the candidate with their application and get back to my day as quickly as possible

As a candidate
: I need to know that my referee doesn't want to give a reference
: So that I can get another referee as quickly as possible to progress my application

## Hypotheses

{% from "hypothesis/macro.njk" import appHypothesis with context %}

{{ appHypothesis({
  title: 'Not asking referees to confirm they\'ll give a reference',
  context: { text: 'The <a href="/apply-for-teacher-training/give-a-reference">previous iteration</a> asks referees whether to confirm they want to give a reference after they just clicked a link in the email to give a reference which prolongs the process.' },
  if: 'we let users confirm via the email',
  then: 'it\'ll shorten the process for referees'
})}}

{{ appHypothesis({
  title: 'Not asking referees to confirm relationship details',
  context: { text: 'The <a href="/apply-for-teacher-training/give-a-reference/#start-page">previous iteration</a> asks referees to confirm their relationship with the candidate. But this prolongs the process and is beyond MVP.' },
  if: 'we remove this question',
  then: 'it\'ll speed up the process for referees'
})}}

{{ appHypothesis({
  title: 'Actively refusing to give a reference',
  context: { text: 'Some referees may not want to, or be able to give a reference. This slows down the candidate\'s application process.' },
  if: 'we let users tell us that they won\'t give a reference',
  then: 'we\'ll be able to notify the candidate and get another referee quickly',
  measurements: [
    'referees click the refuse link in the email and confirm their refusal'
  ]
})}}

{{ appHypothesis({
  title: 'One big text box for the reference',
  context: {
    html: '<p class="govuk-body">We don\'t have any evidence that referees and providers need anything more sophisticated or bespoke than a single text box. So for now, we\'re just keeping parity with UCAS—albeit with a smaller box and lower word count.</p><p class="govuk-body">We\'re wary about asking explicitly if the candidate is safe to work with children. Providers liked this, but we need to be careful how we ask the question. The absence of the flag might be seen as reason alone to reject a candidate when really the referee didn\'t know either way.</p><p class="govuk-body">We also don\'t have enough confidence in the 1 to 10 scales, which providers described as ‘subjective’. A single box is the lowest risk.</p>'
  },
  if: 'we let users enter everything into 1 big text box',
  then: 'we\'ll be able to see what problems arise with referees and providers',
  measurements: [
    'providers successfully use the references given to make decisions'
  ]
})}}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Email sent",
      img: { src: "00-email-sent.png" }
    }, {
      text: "Reference form",
      img: { src: "01-reference-form.png" }
    }, {
      text: "Reference submitted",
      img: { src: "02-reference-submitted.png" }
    }, {
      text: "Consent given for research",
      img: { src: "03-consent-given-for-research.png" }
    }, {
      text: "No consent for research",
      img: { src: "04-no-consent-for-research.png" }
    }, {
      text: "Decline to give reference",
      img: { src: "05-decline-to-give-reference.png" }
    }]
}) }}
