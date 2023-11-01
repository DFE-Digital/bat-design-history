---
title: Helping candidates understand why they cannot submit an application 
description: There are some scenarios where we need to stop candidates from submitting applications, we developed content to help them understand what they need to do to submit their applications.
date: 2023-11-01
tags:
 - applications
---

As part of our work to [change the application process](/apply-for-teacher-training/changing-application-process/), we needed to show some content when a candidate cannot submit their application. There could be various reasons for this, so we needed conditional content depending on the situation so candidates would understand what is happening.

This change was implemented for the new recruitment cycle which started on 10 October 2023.

## The issue

A candidate needs to fill out their application form on a tab in Apply for teacher training (Apply) called ‘Your details’. Once they have finished this, they can navigate to a tab called ‘Your applications’ and start choosing courses and submitting their applications. They can also add courses as drafts first, and then finish their application form before submitting.

To submit an application, a candidate can click into a summary card where they will see a summary of the training provider and course they selected. On this page we render a button to submit the application.

A summary card on Apply:

![Screenshot of all the content a candidate could see if there is more than one scenario where they cannot submit an application. Each scenario has a purple box around it to show how much content there is.](draft-summary-card.png)

Summary of the provider and course with a submit button:

![Screenshot of all the content a candidate could see if there is more than one scenario where they cannot submit an application. Each scenario has a purple box around it to show how much content there is.](submission-page.png)

There are certain scenarios where we cannot allow a candidate to submit their application. These scenarios are:

- the recruitment cycle has not opened yet
- the course the candidate is trying to apply to is full or been withdrawn
- the candidate has not marked all the sections in their application form as ‘completed’
- the candidate needs to add their science GCSE because they are applying to a primary course
- the candidate does not have the right to work or study in the UK but is applying for a course than cannot sponsor visas

## What we did

We worked with our developers to map out all the scenarios where we needed to stop candidates from submitting their applications.

In these scenarios, we hide the ‘submit’ button and show some content to explain to candidates what they need to do so they can submit their application.

We found that some scenarios could apply at the same time.  

What the interface looks like when more than one scenario applies, each purple square is a different scenario:

![Screenshot of all the content a candidate could see if there is more than one scenario where they cannot submit an application. Each scenario has a purple box around it to show how much content there is.](all-content-at-once.png)

Showing all the content at the same time would be overwhelming for candidates. We set out some rules to determine how we can show one message at a time. This involved ordering each scenario by importance.  

For example, if the new recruitment cycle has not opened yet, candidates cannot submit an application. We should only show content telling them what they can do while they wait for the cycle to open.

## The content candidates see when they cannot submit an application

### Scenario 1

A candidate cannot submit their application because the cycle is not open, or the provider has not opened the course to applications yet (some providers stagger their intake during the cycle).

In this situation we would look for the latest date for the course opening and display that. This would either be the cycle open date, or the date the provider has set for the course to accept applications.

If this scenario applies, we only show this content.

![Screenshot of the summary of the provider and course a candidate is applying to in a summary list. Below this is content telling the candidate they cannot submit their application until the new recruitment cycle opens.](scenario-1-cycle-closed.png)

### Scenario 2

A candidate cannot submit their application because the course has either become full or the provider has withdrawn it on Publish teacher training courses (Publish). If this scenario applies, we only show this content.

![Screenshot of the summary of the provider and course a candidate is applying to in a summary list. Below this is content telling the candidate they cannot submit their application because the course is not available anymore and they need to remove the application.](scenario-2-not-availbale.png)

### Scenario 3

A candidate cannot submit their application because they have selected ‘No’ to the question asking them if they have the right to work or study in the UK in the ‘Personal information’ section. 

The candidate has then chosen a course that cannot sponsor visas. If this scenario applies, we only show this content, regardless of any other sections that are not complete on the ‘Your details’ tab.

![Screenshot of the summary of the provider and course a candidate is applying to in a summary list. Below this is content telling the candidate they cannot submit their application because the course does not sponsors visas.](scenario-3-visa-sponsorship.png)

[Read the design history on stopping candidates applying to courses that cannot sponsor visas](/apply-for-teacher-training/blocking-candidates-with-no-visa).

### Scenario 4

A candidate cannot submit their application because they have not finished all sections on their task list on the ‘Your details’ tab. They have only added applications for secondary courses. If this scenario applies, we only show this content.

![Screenshot of the summary of the provider and course a candidate is applying to in a summary list. Below this is content telling the candidate they cannot submit their application because they need to complete their details first.](scenario-4-not-complete-your-details.png)

### Scenario 5

A candidate cannot submit their application because they have submitted an application for a secondary course, and have now added a Primary course but they have not filled out their Science GCSE yet. If this scenario applies, we only show this content.

![Screenshot of the summary of the provider and course a candidate is applying to in a summary list. Below this is content telling the candidate they cannot submit their application because they need to add information about their science GCSE or equivalent.](scenario-5-add-science-after-secondary-courses.png)

### Scenario 6

A candidate cannot submit their application because they have added a Primary course but also have other sections of their task list on the ‘Your details’ tab that are not finished. In this case we show a combination of Scenario 3 and 4. If this scenario applies, we only show this content.

![Screenshot of the summary of the provider and course a candidate is applying to in a summary list. Below this is content telling the candidate they cannot submit their application because they need to add information about their science GCSE or equivalent and finsih their other details.](scenario-6-science-and-other-details.png)