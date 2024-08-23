---
title: Defining the sampling algorithm
description: To ensure a fair and effective audit process, the service needs to audit a selection of claims made by schools
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
---

To ensure a fair and effective audit process, the service needs to audit a selection of claims made by schools. The goal of this sampling process is to ensure a fair representative sample and minimise financial risk to DfE while meeting the following key requirements:

- Total claim value coverage: The value of the sampled claims must sum to at least 10% of the total claim value
- Population representativeness: The sample must accurately represent the claiming school population
- Risk-based sampling: The sample must include a higher proportion of claims flagged as a higher financial risk to the DfE

## Sampling methodology design

To satisfy these requirements, we will employ a random stratified sampling methodology.

### Requirement 1: Total claim value coverage

The claims selected from each stratum will be sampled so that their total value meets or exceeds 10% of the total claim value.

### Requirement 2: Population representativeness

#### Strata definition

Schools are stratified based on the following characteristics:

- Type of establishment
- Phase of education
- Urban-rural classification

#### Sampling focus

The sampling will be designed to represent  claim value rather than the proportion of schools in each stratum.

For instance, if urban secondary schools account for 20% of the total claim value, this stratum should also account for 20% of the sample value.

Prioritising claim value over the proportion of schools in each stratum simplifies the algorithm and better aligns the sampling process to manage financial risk to DfE.

### Requirement 3: Risk-based sampling

#### High-Risk Claims

The sample must include all claims identified as high-risk, defined by the following criteria:

#### Claim Value Threshold

 All claims submitted by schools that have claimed more than £5,000 across all their claims.

#### Mentor Submissions

 20% of claims submitted by mentors will be randomly classified as high risk.

## Methodology of the sampling process

The algorithm for creating the random stratified sample uses BigQuery SQL and JavaScript. The following steps outline the process used to produce the sample.

### Step 1: Identify high-risk claims from high-value schools

#### Calculate the total claim value per school

The algorithm first calculates the total value of claims submitted by each school.

#### Mark high-risk schools

Schools with a total claim value exceeding £5,000 are flagged as high risk.

All claims from these high-risk schools are separated into a distinct dataset for further processing.

### Step 2: Identify and select claims submitted by mentors

#### Select mentor-submitted claims

The algorithm identifies all claims submitted by mentors from the remaining claims (those not flagged as high risk in Step 1).

#### Random selection of mentor claims

The mentor-submitted claims are randomly ordered.

The top 20% of these claims (based on their random order) are selected for sampling and moved to a separate dataset.

### Step 3: Stratify and randomly sample claims by strata value

#### Stratification of remaining claims

The claims not identified as high-risk or mentor-submitted are stratified based on three criteria:

- Type of establishment
- Phase of education
- Urban-rural classification

#### Calculate total strata value

The total claim value for each stratum is calculated.

10% of the total claim value for each stratum is calculated.

#### Random sampling within strata

Within each stratum, claims are randomly ordered.

Claims are then sequentially added to the sample starting from the top of the random order, ensuring that with each additional claim, the cumulative value of the sampled claims is closer to 10% of the total claim value for that stratum.

## Conclusion

This sampling algorithm is designed to effectively audit claims by ensuring that the sample size covers at least 10% of the total claim value, accurately reflects the distribution of claim values across different types of schools, and focuses on claims that pose a higher financial risk. This approach balances fairness with the strategic objective of minimising financial exposure.
