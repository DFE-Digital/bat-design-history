---
title: Collecting reasons for deferral
description: Collecting reasons for deferral
date: 2025-03-25
tags:
  - trainees
  - providers
  - deferrals
related:
  items:
    - text: Understanding trainee withdrawals
      href: /register-trainee-teachers/understanding-trainee-withdrawals/
screenshots:
  items:
    - text: Outcomes for 2022-2023 academic year deferrals
      src: 2022-2023-outcomes.png
    - text: Outcomes for 2023-2024 academic year deferrals
      src: 2023-2024-outcomes.png
    - text: Deferrals free text entry interface
      src: why-has-the-trainee-deferred.png
    - text: Check details with reason
      src: check-deferral-details.png
    - text: Check details without reason
      src: summary-card-excluding-response.png
---

Deferring from initial teacher training (ITT) often eventually leads to withdrawal, with deferred trainees much more likely to withdraw than obtain qualified teacher status (QTS), as illustrated below (data sampled on March 20th 2025).

![Outcomes for 2022-2023 academic year deferrals](2022-2023-outcomes.png)

![Outcomes for 2023-2024 academic year deferrals](2023-2024-outcomes.png)

With this in mind, the Department for Education aimed to better understand why trainees deferred. This research would enable us to develop policies and services to reduce deferrals and the withdrawals that result from them.

## What we have changed

As a first step, we have added an optional free-text ‘reason for deferral’ field to both the Register deferral journey and the in-development Register API deferral endpoint.

This question was posed after inquiring about the date of the deferral. At the end of the flow, the reason for the deferral is included on the summary card. If no reason is given, the row will display “Reason not given.”

This response isn’t currently displayed anywhere else in the service (for example, in the timeline) but is queryable within the analytics to inform future improvements.

![Screenshot of deferrals free text entry interface](why-has-the-trainee-deferred.png)

![Screenshot of check details page with reason for deferral](check-deferral-details.png)

![Screenshot of check details page without a reason for deferral](summary-card-excluding-response.png)

## Reasons for our approach

This change will allow providers to share information about deferrals without generating additional administrative burden for providers who do not currently capture this information.

## Next steps

Providing providers with a defined set of options to select from will expedite the process for users to submit this data and facilitate easier information analysis. Consequently, once we have collected a few months of free text data, it will be analysed to identify commonalities that can be used to establish a defined set of options.

*[API]: application programming interface
*[CSV]: comma-separated values
*[ITT]: initial teacher training
*[QTS]: qualified teacher status
