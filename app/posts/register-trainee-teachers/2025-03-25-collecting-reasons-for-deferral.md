--- 
title: Collecting reasons for deferral 
description: Collecting reasons for deferral 
date: 2025-03-25
tags: 
  - trainees 
  - providers 
  - deferrals 
related: 
    - text: Understanding trainee withdrawals 
      href: /register-trainee-teachers/understanding-trainee-withdrawals/ 
screenshots: 
    - text: Outcomes for 2022-2023 academic year deferrals 
      src: 2022-2023 outcomes.png 
    - text: Outcomes for 2023-2024 academic year deferrals 
      src: 2023-2024 outcomes.png 
    - text: Deferrals free text entry interface 
      src: Deferral free text entry.png
    - text: Check details with reason
      src: Check deferral details.png
    - text: Check details without reason
      src: Summary card excluding response.png
--- 

Deferring from Initial Teacher Training (ITT) often eventually leads to withdrawal, with deferred trainees much more likely to withdraw than obtain Qualified Teacher Status (QTS) as illustrated below (data sampled on March 20th 2025). 

![A pie chart of the outcomes for 2022-2023 academic year deferrals](2022-2023 outcomes.png)

![A pie chart of the outcomes for 2023-2024 academic year deferrals](2023-2024 outcomes.png)

With this in mind, the Department for Education sought to better understand the reasons behind trainees deferring, which would allow us to design policies and services aimed at reducing both deferrals and the number of deferrals that result in withdrawal. 

## What we have changed 

As a first step we have added an optional free text 'reason for withdrawal' field to both the Register withdrawal journey and the in-development Register API withdrawal endpoint.   

This question is posed after inquiring about the date of deferral. At the end of the flow, the reason for deferral is included on the summary card (see attached screenshot).  If no reason is given, then the row will display "Reason not given."  

This response isn't currently displayed anywhere else in the UI (e.g., Timeline), but is queryable within the analytics to inform future improvements. 

![Screenshot of deferrals free text entry interface](Why has the trainee deferred.png)

![Screenshot of check details page with reason for deferral](Check deferral details.png "Check details with reason")

![Screenshot of check details page without an reason for deferral](Summary card excluding response.png "Check details without reason")

## Reasons for our approach 

This change will allow providers to share what information they have available about withdrawals without generating additional administrative burden for those providers who do not currently capture this information. 

## Next steps 

Providing providers with a defined set of options to select from will expedite the process for users to submit this data and facilitate easier analysis of the information. Consequently, once we have collected a few months of free text data, it will be analysed to identify commonalities that can be used to establish a defined set of options. 
