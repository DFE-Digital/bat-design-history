---
title: Improving the visa and immigration status question
description: We removed a confusing free text box and replaced it with a list of defined radio options.
date: 2023-12-11
tags:
  - immigration
  - visa
---
![Image of a user flow showing the personal information section journey](user-flow-2.jpg)

We implemented a more structured approach on the question ‘What is your immigration status?’ in Apply for teacher training (Apply).

This redesign replaces the previous free text box input with a user-friendly radio button list so users can select the most relevant preset option, streamlining the process of communicating their visa or immigration status.

## The issue

We have concluded that from insights gathered through user data analysis, candidates have a difficult time understanding what they are being asked when presented with the question ‘What is your immigration status?’ followed by a large free text box.  The example in the hint text mostly caters to users within the European economic area (EEA). As a result, the responses we receive are often ambiguous and unclear.

![Screenshot of the old immigration status page showing a texbox with an example 'I have permanent residence'](old-immigration-status.png)

To address this issue, our primary goal was to simplify the process for candidates to communicate their visa or immigration status clearly. This not only serves to protect candidates but also ensures consistency for providers in evaluating candidate information.

## What we changed

We analysed 4291 user entries and identified several common issues.

The free text box for responses to the question led to spelling mistakes or auto-corrections.

Lack of consistency across responses and inclusion of sensitive information in the text box were additional concerns. To tackle this, we explored various solutions, including:

- eliminating the 'immigration status' question altogether

- incorporating a '[immigration status share code](/apply-for-teacher-training/exploring-ways-to-integrate-the-services)' functionality

We opted for a preset answer approach, presenting users with a predefined list of the most common visa or immigration statuses.

We worked closely with our international teacher recruitment unit (ITRU) to curate a list of the most frequently used visa types. This list replaced the free text box.

![Screenshot of visa or immigration status page showing multiple radio button options for non- European economic area users](Non-EEA-option.png)

![Screenshot of visa or immigration status page showing three radio button options for European economic area users](EEA-option.png)

## User testing

We tested the content and designs with our users, the research was planned to understand if the changes supported international users in providing clear and accurate information about their visa or immigration status.

We found that:

- all users knew the name of their visa or immigration status

- users guessed the list is ordered by the most common visas

- finding their visa or immigration status on the page posed no problems and users were able to do this in an acceptable amount of time

- 'Other' was noticed and users said they would enter their visa name or immigration status here

- users did not question the presence of other visas or immigration statuses, including the Afghan and Ukraine visas, suggesting that they accepted that this page would be used by people of other nationalities and immigration statuses

- users from the EEA did not express dissatisfaction with the presence of other visa options, as their options were displayed at the top of the list, making them easy to find and select

From this research, we improved and iterated the designs and content.

## Further consideration

We need to gather additional data to refine the list of radio buttons further. We aim to:

- assess user responses once the radio list has been implemented

- look for patterns if candidates use the 'Other' option

- identify any missing visas or immigration statuses

This iterative process ensures that our design remains user-centric and aligns with the evolving needs of our diverse user base.