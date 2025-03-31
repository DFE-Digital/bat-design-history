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
      src: deferral-free-text-entry.png
    - text: Check details with reason
      src: check-deferral-details.png
    - text: Check details without reason
      src: summary-card-excluding-response.png
---

Deferring from initial teacher training (ITT) often eventually leads to withdrawal, with deferred trainees much more likely to withdraw than obtain qualified teacher status (QTS), as illustrated below (data sampled on March 20th 2025).

![Outcomes for 2022-2023 academic year deferrals](2022-2023-outcomes.png "Outcomes for 2022-2023 academic year deferrals")

![Outcomes for 2023-2024 academic year deferrals](2023-2024-outcomes.png "Outcomes for 2023-2024 academic year deferrals")

With this in mind, the Department for Education sought to understand better why trainees deferred. This research would allow us to design policies and services to reduce deferrals and the number of deferrals that result in withdrawal.

## What we have changed

As a first step, we have added an optional free-text ‘reason for withdrawal’ field to both the Register withdrawal journey and the in-development Register API withdrawal endpoint.

This question is posed after inquiring about the date of deferral. At the end of the flow, the reason for deferral is included on the summary card.  If no reason is given, then the row will display “Reason not given.”  

This response isn’t currently displayed anywhere else in the service (for example, in the timeline) but is queryable within the analytics to inform future improvements.

![Screenshot of deferrals free text entry interface](Why-has-the-trainee-deferred.png)

![Screenshot of check details page with reason for deferral](Check-deferral-details.png)

![Screenshot of check details page without a reason for deferral](Summary-card-excluding-response.png)

## Reasons for our approach

This change will allow providers to share information about withdrawals without generating additional administrative burden for providers who do not currently capture this information.

## Next steps

Providing providers with a defined set of options to select from will expedite the process for users to submit this data and facilitate easier analysis of the information. Consequently, once we have collected a few months of free text data, it will be analysed to identify commonalities that can be used to establish a defined set of options.

*[API]: application programming interface
*[CSV]: comma-separated values
*[ITT]: initial teacher training
*[QTS]: qualified teacher status
