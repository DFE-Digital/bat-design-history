---
title: Adding a ‘cannot sponsor visa’ reason for rejection
description: Let providers reject an application because they cannot sponsor a candidate’s visa
date: 2021-04-19
---

A recent policy change means that [state-funded schools cannot sponsor Student visas](https://www.gov.uk/guidance/recruit-trainee-teachers-from-overseas-accredited-itt-providers#recruit-by-becoming-a-visa-sponsor).

This has prompted us to add ‘cannot sponsor visa’ as a reason for rejection. This will make it easier for providers to give the right reason, and allow us to gather further data about why providers reject applications.

Although for now, we will present this as a simple yes/no question, it’s important to note that the visa situation is quite complicated. This may require further work later.

## Other types of visa available to candidates

A Student visa may not be the only option available to a candidate, depending on their circumstances and the course they’re applying for. These other options include:

- Skilled Worker visa
- Youth Mobility Scheme visa
- Graduate visa - this has not been launched yet

The Skilled Worker visa:

- is available only for salaried courses (17% of all applications are to salaried courses)
- can only be sponsored by the school where the candidate would be working

The Youth Mobility Scheme visa:

- is available for candidates aged 18 to 30 who are from [certain countries](https://www.gov.uk/youth-mobility/eligibility)
- does not require sponsorship

A new Graduate visa is being introduced for people who have already studied in the UK on a Student visa.

## Candidate data analysis

Looking at the candidate data, we can see who is likely to receive the ‘cannot sponsor visa’ reason for rejection.

12% of candidates do not have British or Irish nationality, they are ‘international’.

15% of international candidates answer ‘not yet, or not sure’ when asked about their right to work or study in the UK. These candidates are the most likely to have an application rejected because the provider is not able to sponsor the visa.

Less than 1% of application rejections mention visa as a reason for rejection.

## What we did and why

To provide consistent and useful feedback to candidates, we added the question “Was it because you cannot sponsor the candidate’s visa?” to the reasons for rejection.

The question is only shown when the candidate is not a British or Irish citizen, they are ‘international’.

We ask the provider to give details about why they chose the option. This is because we know that there may be various reasons, not just because they cannot sponsor a Student visa.

## Future work

Analysis of the current reasons given that mention visas shows that of 32 items of feedback:

- only 3 explain why they can’t sponsor a visa (“we’re a SCITT”, “not a licensed visa sponsor”, “not enough face to face teaching”)
- there are several uses of “tier 4" which is the old name for the Student visa
- most do not mention a specific visa type
- hardly any give the candidate pointers about what they could do next (for example try a salaried course)

We plan to keep track of the reasons for rejection and test them with the following hypothesis:

We believe that adding a dedicated reason for rejection will result in providers giving more useful feedback because they are prompted to add a reason rather than filling in the ‘other’ reasons.

If we find that the feedback has not improved, we will consider changing the design. For example, we could:

- include hint text with the ‘give details’ field
- give more specific structured reasons within the ‘cannot sponsor visa’ response
- include pre-written content in the feedback sent to candidates
- reduce the range of candidates for which we show the option

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
