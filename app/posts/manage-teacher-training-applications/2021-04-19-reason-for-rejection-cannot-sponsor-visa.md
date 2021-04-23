---
title: Adding a ‘cannot sponsor visa’ reason for rejection
description: Let providers reject an application because they cannot sponsor a candidate’s visa
date: 2021-04-19
---

A recent policy change means that [state-funded schools cannot sponsor Student visas](https://www.gov.uk/guidance/recruit-trainee-teachers-from-overseas-accredited-itt-providers#recruit-by-becoming-a-visa-sponsor).

## Other types of visa available to candidates

A Student visa may not be the only option available to a candidate, depending on their circumstances and the course they’re applying for. These other options include:

- Skilled Worker visa
- Youth Mobility Scheme visa
- Graduate visa - this has not been launched yet

The Skilled Worker visa:

- is available only for salaried courses
- can only be sponsored by the school where the candidate would be working

The Youth Mobility Scheme visa:

- is available for candidates aged 18 to 30 who are from [certain countries](https://www.gov.uk/youth-mobility/eligibility)
- does not require sponsorship

A new Graduate visa is being introduced for people who have already studied in the UK on a Student visa.

## Candidate data analysis

Looking at the candidate data, we can see who is likely to receive the cannot sponsor visa reason for rejection.

12% of candidates do not have British or Irish nationality, they are ‘international’.

For these candidates, the provider will be shown the cannot sponsor visa reason for rejection in the possible list of reasons.

15% of international candidates’ right to work or study in the UK is unknown (for example, marked as ‘not yet, or not sure’).

For these candidates, it is likely their applications will be rejected because of the lack of visa or the provider is not able to sponsor the visa.

## What we did and why

To provide consistent and useful feedback to candidates, we added the question “Was it because you cannot sponsor the candidate’s visa?” to the reasons for rejection.

The question is only shown when the candidate is not a British or Irish citizen, they are ‘international’.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Reasons for rejecting the candidate’s application",
    img: {
      src: "reason-for-rejection-cannot-sponsor-visa-01a.png"
    }
  }, {
    text: "Reasons for rejecting the candidate’s application - cannot sponsor visa",
    img: {
      src: "reason-for-rejection-cannot-sponsor-visa-01b.png"
    }
  }, {
    text: "Check your feedback and reject the application",
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
