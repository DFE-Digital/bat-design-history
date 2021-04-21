---
title: Adding a ‘cannot sponsor visa’ reason for rejection
description: Let providers reject an application because they cannot sponsor a candidate’s visa
date: 2021-04-19
---

A recent policy change means that [state-funded schools cannot sponsor Student visas](https://www.gov.uk/guidance/recruit-trainee-teachers-from-overseas-accredited-itt-providers#recruit-by-becoming-a-visa-sponsor).

To provide consistent and useful feedback to candidates, we added the question “Was it because you cannot sponsor the candidate’s visa?” to the reasons for rejection.

The question is only shown when the candidate is not a British or Irish citizen, they are ‘international’.

## Candidate data analysis

Looking at the candidate data, we can see who is likely to receive this reason for rejection.

12% of candidates do not have British or Irish nationality, they are ‘international’.

15% of international candidates’ right to work in the UK is unknown (for example, marked as ‘not yet, or not sure’).

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Reasons for rejecting the candidate’s application",
    img: {
      src: "reason-for-rejection-cannot-sponsor-visa-01.png"
    }
  }, {
    text: "Check your feedback and reject application",
    img: {
      src: "reason-for-rejection-cannot-sponsor-visa-02.png"
    }
  }, {
    text: "Application feedback",
    img: {
      src: "reason-for-rejection-cannot-sponsor-visa-03.png"
    }
  }]
}) }}
