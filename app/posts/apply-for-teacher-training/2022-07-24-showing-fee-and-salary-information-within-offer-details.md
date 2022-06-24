---
title: Showing fee or salary information within offer details
description: Why we have repeated the fee and salary information from Find
date: 2022-07-24
ogImage:
  src: /apply-for-teacher-training/showing-fee-and-salary-information-within-offer-details/offer-details.png
  alt: "Details of offer. Fees. UK: £2,250. International: £20,400"
related:
  items:
    - text: Pull request adding fee and salary information to course offer pages
      href: https://github.com/DFE-Digital/apply-for-teacher-training/pull/6879
---

![Details of offer. Fees. UK: £2,250. International: £20,400](/apply-for-teacher-training/showing-fee-and-salary-information-within-offer-details/offer-details.png)

We have added fee and salary information within offer details

## The issue

When reviewing the [advice on consumer protection law for higher education providers](https://www.gov.uk/government/publications/higher-education-consumer-law-advice-for-providers), we noted that they suggest that total course costs, including tuition fees and any extra costs, should be provided as part of the pre-contract information at the offer stage.

We currently require providers to specify their tuition fees for each course within Publish, which are then shown on the course page in Find. There is an additional optional field where they can specify additional costs, such as the cost of a DBS check.

This information may already meet the consumer protection requirements. Providers may well also repeat this information, or offer further details, in information given to candidates outside of the digital service.

However, showing candidates the fee details within Apply, alongside the other details of the offer (such as any conditions), may more clearly meet the guidelines.

## What we changed

We updated Apply so that the fee (or salary) information was synced from the information provided in Publish, and is now shown on the 'offer details' page.

For courses that charge a fee, we show both the UK students fee and the international students fee (where both are specified), as we are unable to know for certain which fee would apply to the candidate.

![Screenshot showing a 'Details of offer' heading, under which the UK students fee and international students fee is given, along with the text 'An additional fee of £625 will apply if candidates take up the option of a PGCE qualification'](details-of-offer-with-fee.png)

For courses that offer a salary, we show the text written by providers that is shown on Find. Often this references a pay scale.

![Screenshot showing a 'Details of offer' heading, under which the Salary is listed as 'The school will pay the salary as an unqualified teacher scale 1 as a minium.'](details-of-offer-with-salary.png)

This change was made in May 2022.

## Further work

Further work could be done to allow Apply to be more specific and accurate in specifying the costs of a course within offer details. We could:

* prompt providers to detail all extra costs, such as for a DBS check or a PGCE
* ask providers to specify whether the 'home fee' or 'international students fee' applies when making an offer to a candidate
* give candidates more details of how the unqualified teacher pay scales translate into salary ranges
