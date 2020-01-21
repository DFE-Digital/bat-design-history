---
title: Give a reference iteration
description:
tags:
---

## User needs

As a referee
I need to provide a useful reference
So that I can help the candidate with their application and get back to my day as quickly as possible

As a candidate
I need to know that my referee doesn't want to give a reference
So that I can get another referee as quickly as possible to progress my application

## Hypotheses

### Actively refusing to give a reference

Some referees may not want to, or be able to give a reference. This slows down the candidate's application process.

**If** we let users tell us that they won't give a reference
**Then** we'll be able to notify the candidate and get another referee quickly
**We'll know this works when**:
- Referees click the refuse link in the email and confirm their refusal

### One big text box for the reference

We don't have any evidence that referees and providers need anything more sophisticated or bespoke than a single text box. So for now, we're just keeping parity with UCAS.

We're also wary about asking directly if the candidate is safe to work with children. Providers like this, but we feel we need to be careful how we ask this. The absence of the flag might be seen as a bad when really the referee didn't know either way.

We also don't have enough confidence in the 1 to 10 scales, which providers described as ‘subjective’. A single box is the lowest risk.

**If** we let users enter everything into 1 big text box
**Then** we'll be able to see what problems arise with referees and providers

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
