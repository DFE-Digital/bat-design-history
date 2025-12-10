---
title: Recent changes for international candidates
description: Making it easier to know when you are eligible for a course
date: 2025-12-08
tags:
  - international
  - eligibility
---
## Background

We have heard from research and support queries that international candidates are struggling to access information about applying to initial teacher training, which results in them submitting applications to courses they are not eligible for. Information that it would be useful for them to access before submitting applications includes:
* fees and financial support
* course type 
* duration 
* documentation needed

### User story
As a candidate for initial teacher training
I need to understand key information about a course before I apply
so that I can apply to the course that is right for me and my circumstances and have an increased chance of success.
 
## What did we do? 

We had heard that anecdotally some providers send candidates pre-screening questions to help both sides understand whether the course is appropriate for the applicant.

We have added an interstitial page that gives candidates some further information on the course they are applying to in *either* of the following circumstances:

* a candidate has selected ‘citizen of another country’ for their nationality 
* a candidate has selected ‘qualification from outside the UK’ for any of their qualifications. 

The main things that we wanted to let people know about were:

### Fees and financial support 
Discovering too late in the process that they will not receive financial support is a big reason for candidate withdrawals among international candidates (4.36% of all withdrawals, 190% higher for international candidates than domestic candidates). 

It’s also always useful to highlight the increased fees for international candidates, we’ve heard that some people think this must also cover living expenses which is not the case.

### Qualifications 
Not having the right qualifications is a common rejection reason amongst international applicants. Whilst ‘supporting documents not provided’ is reasonably small at only 2.67%, this is 140% higher than for domestic candidates. 

### Ways to find out more 
We wanted to direct people to more information about courses, eligibility criteria and anything specific that's relevant to international applications on the new ‘check before you send’ page. This will give them the best chance of applying to the right course the first time they try. 

![Checklist for international candidates before they submit covering information about financial support, the requirement for original documents and ENIC and ways to find out more](checklist_pre_submission.png)

### Updating the summary cards 

On the screen where candidates review their application we wanted to let people know about the fact that they need to produce original copies of qualifications and additionally that they need to be translated into English. This is relevant to all candidates regardless of nationality.

![Summary card with warning about qualifications needing to be translated into English](summary_card_update.png)

We also wanted to make changes that are specifically aimed at international candidates, to let them know about the higher fees in context when they are reviewing their application:

![Summary card with information about international fees being higher](summary_card_financial_support_update.png)

### Collecting structured data for some international degree grades 

If someone has got their degree from a UK university we ask them for their grade through structured check boxes that reflect the UK classification system :
![Radio buttons showing the different degree classifications that can be selected: first class honours, upper second class honours, lower second class honours, third class honours, pass, fail](degree_classification_radios.png)

However we don't collect degree classification from international candidates in the same way, because different countries have different classification systems. If a candidate says that they got their degree from another country, we ask them to enter the classification in a free-text field. This gives us unstructured data.

We did some research that showed us that there are [some countries which award degrees using the same classification system as the UK](https://www.gov.uk/government/publications/overseas-degree-equivalency-table-and-methodology):

Nigeria - 9.34% of degrees
Ghana - 4.14%
Kenya - 1.33%
Ireland - 0.45%
Zimbabwe - 0.39%
Sri Lanka - 0.19%
Hong Kong - 0.14%
Uganda - 0.09%
Mauritius - 0.03%
Lesotho - 0.01%

These include some of the countries that we receive the most international applications from. Gathering structured data for the above will mean we go from having 71% of degrees in structured data to a total of 88%.
Collecting structured data for degree classification means we can intervene when someone applies for a course that has a higher degree classification eligibility criteria than the degree they have entered in their details.

We now show this degree grade interruption screen when someone for whom we have structured data on their degree classification applies for a course they are not qualified for:
![Interruption screen to tell candidates that their degree does not match the requirements of the course they are applying to](degree_interruption_screen.png)

### Updating the hint text for international qualifications
We had seen some candidates entering their English as a Foreign Language (EFL) qualification in the field for 'What type of qualification in English do you have' question. This question is asking for an English GCSE or similar, not an English language qualification.

We updated the hint text to specifically say 'not an EFL qualification' and to also reflect the most common Engish qualificaitons that we see entered to make it clearer what kind of answer to enter in this field:

![Enter an English qualification screen with updated hint text](international_qualifications_hint.png)

## What’s next? 
There are other changes we could make to improve the chances of international candidates of submitting a successful application first time.

We have heard in research with international candidates that when their degree was taught in English or they come from a country where English is spoken as an official language, they do not believe that they need an EFL assessment.  

We would like to make it clearer to all candidates when an EFL assessment might be needed as part of their application so that more people include one first time. This would mean that candidates are more likely to be accepted first time, and providers can spend less time going back and forth chasing documentation.