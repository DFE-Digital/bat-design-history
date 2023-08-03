---
title: Allowing candidates to edit their application form after they've submitted it
description: As part of our work to change the application process, we designed a way for candidates to edit parts of their application form after they’ve submitted it. 
date: 2023-08-03
tags:
  - applications
ogImage:
  src: journey-map-of-editing-information.png
  alt: "Illustration of a woman with her hands on her head looking frustrated. Around her head are icons of exclamation marks and question marks showing her confusion. The the left of her it says 'When Francis felt frustrated."
---

![Illustration of a woman with her hands on her head looking frustrated. Around her head are icons of exclamation marks and question marks showing her confusion. The the left of her it says 'When Francis felt frustrated.](non-editable-section.png)

As part of our work to [change the application process](/apply-for-teacher-training/changing-application-process/), we decided to allow candidates to edit parts of their application form after they’ve submitted it.

This feature will be released in the 2023 to 2024 recruitment cycle which starts in October 2023.

## The issue

Currently, when a candidate submits their application, they cannot change anything on it. Instead, they must contact support to do it. This can be time consuming, especially if it’s a small change like a spelling mistake.

We decided to allow them to edit their application because:

- our support team receive a lot of support tickets from candidates asking to change their application
- we wanted to allow candidates to ‘self-serve’ instead of waiting for a response from our support team
- if a candidate’s information is out of date or wrong, this can affect the information their training provider holds on them

## What we changed

We held a discussion with our policy team to find out if there would be any issues by allowing candidates to edit their application after submission.

From this discussion we decided to only allow candidates to edit the following sections:

- personal information
- contact information
- ask for support if you’re disabled
- interview availability
- equality and diversity information

We know that during the recruitment cycle (which runs for a year) a candidate can have many life events. They can change their name, address or their interview avaialbility might change during the year. Allowing candidates to edit these sections themselves would be intuitive and quicker for our users.

We had concerns about allowing edits to sections like:

- safeguarding
- qualifications
- work history

 Candidates need to decalre any safeguarading information because they will be working with children. We felt it was too much of a risk to allow people to edit this section if they declared something but then removed it.

 We also did not want candidates to enter inaccurate information about their qualifications or work history on purpose. Although these are assumptions, we agreed to revisit these sections later by monitoring if our support tickets reduce once we release this feature.

 Our designers and developers then mapped out a user journey so we could understand how users could navigate back and forth between each section of the application form.

![Screenshot showing 5 screens connected with arrows. Each screen has sticky notes on it with comments from the Apply team on how the user would navigate from screen to screen. Sticky notes mention design and content considerations and questions.](journey-map-of-editing-information.png)

Once we had a clear understanding of how this would work, we prototyped the features into our Apply for teacher training prototype.

## Sections candidates can edit

When a candidate has submitted an application and wants to edit a section of the form, we show the summary page with change links. We also show the question ‘Have you completed this section?’. If the candidate says ‘Yes’ after making their edits, we will [push the updates through to Manage teacher training (Manage)] so the provider can be alerted to the change.

![Screenshot of the 'Personal information' summary screen which shows a users Name, Date of birth and Nationality, next to these sections is a change link so the user can edit the information. Below this is a question that says 'Have you completed this section?' with yes or no options for the user to select. Below this is a green button that says 'Continue'.](editable-section.png)

If the candidate says ‘No’ we mark the section as ‘Incomplete’ and stop them from submitting any more applications until they mark the section as complete.

## Sections candidates cannot edit

If a candidate wants to edit a section like ‘Qualifications’ or ‘Work history’ we show the summary page without the links to change information. Instead, we show a message to tell the candidate to contact support to edit this section.

![Screenshot of a summary screen called 'English GCSE or equivalent'. The screen shows information like qualifitcation type, grade, year awarded and if the user is currently studying. Below this list is a line of content that tells the user to contact support if they need to edit this information.](non-editable-section.png)

## Future considerations

Once we release this feature, we will monitor user feedback and support tickets to see if we should allow updates to other sections of the application form.
