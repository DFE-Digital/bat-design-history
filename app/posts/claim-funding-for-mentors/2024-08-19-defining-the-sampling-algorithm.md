---
title: Defining the sampling algorithm
description: To ensure a fair and effective audit process, we need to audit a selection of claims made by schools
date: 2024-08-19
tags:
  - claims
  - auditing
related:
  items:
    - text: How we audit claims
      href: /claim-funding-for-mentors/how-we-audit-claims/
    - text: How we pay claims
      href: /claim-funding-for-mentors/how-we-pay-claims/
    - text: "Government Functional Standard GovS 015: Grants"
      href: https://www.gov.uk/government/publications/grants-standards
---

To ensure a fair and effective audit process, the Claim funding for mentor training service needs to audit a selection of claims made by schools.

The goal of this sampling process is to ensure a fair representative sample and minimise financial risk to DfE while meeting the following essential requirements:

- Total claim value coverage: The value of the sampled claims must sum to at least 10% of the total claim value
- Population representativeness: The sample must accurately represent the ‘claiming school’ population
- Risk-based sampling: The sample must include a higher proportion of claims flagged as a higher financial risk to the DfE

## Sampling methodology design

We will employ a random stratified sampling methodology to satisfy our auditing requirements.

### Requirement 1: Total claim value coverage

We will sample the claims selected from each stratum so that their total value meets or exceeds 10% of the total claim value.

### Requirement 2: Population representativeness

#### Strata definition

Schools are stratified based on the following characteristics:

- Type of establishment
- Phase of education
- Urban-rural classification

#### Sampling focus

To align with [Cabinet Office best practice](https://www.gov.uk/government/publications/grants-standards), we will design the sampling to represent claim value rather than the proportion of schools in each stratum.

For instance, if urban secondary schools account for 20% of the total claim value, this stratum should also account for 20% of the sample value.

Prioritising claim value over the proportion of schools in each stratum simplifies the algorithm and better aligns the sampling process to manage financial risk to DfE.

### Requirement 3: Risk-based sampling

#### High-Risk Claims

The sample must include all claims identified as high-risk, defined by the following criteria:

- Claim value threshold
- Mentor submissions

#### Claim value threshold

 All claims submitted by schools that have claimed more than £5,000 across all their claims.

We chose the £5,000 amount because the average claim amount during the private beta is £1,670, and only 10 individual claims exceeded this amount.

Sampling all the claims above £5,000 increases the likelihood of identifying the claims where schools have mistakenly claimed for both their initial teacher training (ITT) mentors and early careers framework (ECF) mentors, as their claim would be significantly more than the average amount.

#### Mentor Submissions

 We will randomly classify 20% of claims submitted by mentors as high-risk.

We are sampling a higher percentage of claims submitted by mentors because the mentor is included in the claim. Therefore, there is a low risk the information they are providing is inaccurate to request a higher amount of funding. However, this risk is low for two reasons:

1. we do not allow schools to submit claims which exceed the policy - 20 hours of training per mentor and accredited provider
2. the funding is paid to the school and not the mentor

## Methodology of the sampling process

The algorithm for creating the random stratified sample uses BigQuery SQL and JavaScript. The following steps outline the process used to produce the sample.

### Step 1: Identify high-risk claims from high-value schools

#### Calculate the total claim value per school

The algorithm first calculates the total value of claims submitted by each school.

#### Mark high-risk schools

We flag schools with a total claim value exceeding £5,000 as high risk.

We will then separate all claims from these high-risk schools into a dataset for further processing.

### Step 2: Identify and select claims submitted by mentors

#### Select mentor-submitted claims

The algorithm identifies all claims submitted by mentors from the remaining claims (those not flagged as high risk in Step 1).

#### Random selection of mentor claims

We randomly order the mentor-submitted claims.

We will then select the top 20% of these claims (based on their random order) for sampling and moved to a separate dataset.

### Step 3: Stratify and randomly sample claims by strata value

#### Stratification of remaining claims

The claims not identified as high-risk or mentor-submitted are stratified based on three criteria:

- type of establishment
- phase of education
- urban-rural classification

#### Calculate total strata value

We calculate the total claim value for each stratum.

We will then calculate 10% of the total claim value for each stratum.

#### Random sampling within strata

We randomly order claims within each stratum.

We will then sequentially add claims to the sample starting from the top of the random order, ensuring that with each additional claim, the cumulative value of the sampled claims is closer to 10% of the total claim value for that stratum.

## Conclusion

We designed this sampling algorithm to effectively audit claims by ensuring that the sample size covers at least 10% of the total claim value, accurately reflects the distribution of claim values across different types of schools, and focuses on claims that pose a higher financial risk. This approach balances fairness with the strategic objective of minimising financial exposure.
