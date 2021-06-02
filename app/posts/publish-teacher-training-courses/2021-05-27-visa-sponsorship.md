---
title: Visa sponsorship
description: Asking providers which visas they can sponsor
date: 2021-05-27
---

{% from "screenshots/macro.njk" import appScreenshots with context %}

A relatively common reason for rejection is that the provider is unable to sponsor a visa for that candidate.

Whilst we have attempted to communicate which providers are likely to be able to sponsor visas, through guidance and a link to the [register of licenced sponsors](https://www.gov.uk/government/publications/register-of-licensed-sponsors-students), this puts the onus on the candidate to understand and research these options.

To make this simpler, we are proposing to ask providers to indicate which visas they are able to sponsor.

## Initial design

Our initial design added a question for each course: “Can you sponsor a visa for this course?”

However research with providers showed that the answer would be same for all courses.

The only difference was where providers offered both salaried and fee-paying courses, as different types of visas would be needed – a Skilled worker or a Student visa.

{{ appScreenshots({
  hideContents: true,
  items: [{
      text: "Visa sponsorship question on a course page",
      img: { src: "visa-sponsorship-course-page.png" }
    }]
}) }}


## Second iteration

We created a new page within the  “About your organisation” section, which asks two ‘Yes or No’ questions about the two different types of visa.

Asking these questions once, rather than once per course, saves providers time, particularly in the context of rollover where they may have hundreds of courses to update.

The 2 questions did cause some confusion to providers who only offered 1 type of course, and for which the other question was then irrelevant. However as we are currently unable to know for sure which providers will only ever offer one type of course, this minimal confusion is acceptable.

Hint text was added to make it clearer which type of courses each question applies to.

{{ appScreenshots({
  hideContents: true,
  items: [{
      text: "Prompt to answer visa sponsorship question",
      img: { src: "visa-sponsorship-prompt.png" }
    }, {
      text: "Visa sponsorship question",
      img: { src: "visa-sponsorship.png" }
    }]
}) }}

## Further issues to explore

The research also revealed a wider issue around organisations who both provide courses directly, and accredit courses provided by other organisations. In these instances, 2 participants were unclear which courses the ”About your organisation” section applied to.
