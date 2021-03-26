---
title: Show guidance on a candidate’s tuition fee status
description: Let users see when a candidate’s application is eligible for home student tuition fees.
date: 2021-03-22
---

It’s possible to work out from a candidate’s application whether or not they’re likely to qualify for ‘home tuition fee funding’. This has implications for how the provider’s course is funded as well as for the candidate’s ability to get things like student loans.

We can’t be sure whether or not they qualify because we don’t ask them enough questions, therefore the assessment is provisional.

## Candidate data analysis

The proportion of all candidates who are British or Irish:

- 88% of candidates have British or Irish nationality
- 12% of candidates do not have British or Irish nationality, they are ‘international’

The proportion of international candidates who say they have the right to work or study in the UK:

- 58% of international candidates have the right to work or study in the UK
- 28% of international candidates do not have the right to work or study in the UK
- 15% of international candidates’ right to work in the UK is unknown (for example, marked as ‘not yet, or not sure’)

The proportion of international candidates who have a UK address (also known as residency):

- 74% of international candidates have a UK address
- 26% of international candidates do not have a UK address

The proportion of all candidates who have two or more nationalities:

- 99% of candidates have only one nationality
- 1% of candidates have two or more nationalities

The proportion of all candidates with two or more nationalities who have British or Irish as one of those nationalities:

- 76% of all candidates with two or more nationalities has British or Irish as one of their nationalities
- 24% of all candidates with two or more nationalities do not have British or Irish as one of their nationalities

## What we changed and why

We added a new field to the application details summary list, giving an assessment of the candidate’s funding status.

We emphasised that the assessment may not be correct. Providers should always check the candidate’s details so they can make a more accurate assessment.

## How it works

Funding status is determined through a combination of three factors: nationality, the right to work or study in the UK and residency (whether they have a UK address).

British and Irish candidates automatically qualify for home funding. All other candidates must have the right to work or study in the UK and have a UK address.

Candidates may have the right to work or study in the UK for a number of reasons including:

- EU settled status
- EU pre-settled status
- permanent residence card
- family visa
- student visa
- refugee status

If the candidate meets the criteria for funding, we display the message ‘Eligible for home tuition fee funding (automated assessment - check details with candidate)’.

If the candidate has not met the criteria for funding, we display the message ‘Not eligible for home tuition fee funding (automated assessment - check details with candidate)’.

If the candidate does not have the right to work or study in the UK at the time of the application, we display ‘Candidate needs to apply for permission to work and study in the UK’ in the candidate details section.

## Research

## Other considerations

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Application details – Eligible for funding",
    caption: "Figure 1: The application details screen showing the candidate is eligible for home tuition fee funding",
    img: {
      src: "application-details-eligible-for-funding.png"
    }
  }, {
    text: "Application details – Not eligible for funding (right to work or study)",
    caption: "Figure 2: The application details screen showing the candidate is not eligible for home tuition fee funding because the candidate does not have a right to work or study in the UK",
    img: {
      src: "application-details-not-eligible-for-funding-right-to-work.png"
    }
  },  {
    text: "Application details – Not eligible for funding (international address)",
    caption: "Figure 3: The application details screen showing the candidate is not eligible for home tuition fee funding because their address in not in the UK",
    img: {
      src: "application-details-not-eligible-for-funding-address.png"
    }
  },{
    text: "Application details – Not eligible for funding (right to work or study and international address)",
    caption: "Figure 4: The application details screen showing the candidate is not eligible for home tuition fee funding because the candidate does not have a right to work or study in the UK and they do not have a UK address",
    img: {
      src: "application-details-not-eligible-for-funding-right-to-work-and-address.png"
    }
  }]
}) }}
