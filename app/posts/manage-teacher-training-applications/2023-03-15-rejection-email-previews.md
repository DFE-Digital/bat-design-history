---
title: Rejection email previews
description: Why we decided to show providers a preview of the rejection emails that will be sent to candidates
date: 2023-03-14
tags:
  - rejections
ogImage:
  src: /manage-teacher-training-applications/rejection-email-previews/email-preview.png
  alt: "Illustration with the heading ‘The candidate will be sent this email’ followed by a box containing lines to indicate email content, followed by a green button"

---

![Illustration with the heading ‘The candidate will be sent this email’ followed by a box containing lines to indicate email content, followed by a green button](email-preview.png)

We’ve added a preview of the email that will be sent to candidates when a provider rejects their application. We did this to give providers greater awareness of how their reasons for rejecting a candidate will be used, and in order to encourage them to write better feedback.

This change was added in production on 13 March 2023.

## The issue

A review of the reasons for rejection sent to candidates has shown us that sometimes these were not of high quality.

Since we [started asking candidates if the feedback was helpful](/apply-for-teacher-training/asking-candidates-if-rejection-feedback-is-helpful/) in November 2022, 46% of the responses to the survey have said that the feedback was not helpful.

Issues we’ve spotted with feedback have included:

* candidates being written about in the third person and referred to by their name or as ‘the applicant’
* very short reasons not written as full sentences
* use of ‘N/A’ or ‘see email’

## What we changed

Previously, after selecting and writing the reasons for rejection, the confirmation page showed their answers using a ‘check your answers’ style summary list, with ‘change’ links:

![Screenshot of a page with the heading ’Check details and reject application’ followed by a table containing 2 reasons with the headings ‘Qualifications’ and ‘Personal statement’, the content of those rejections, and links labelled ‘Change’. Below this is a warning icon with the text ‘The candidate will be sent an email to tell them why you rejected their application’. Below this is a green button labelled ‘Reject application’](previous-check-answers.png)

We changed this to instead contain a preview of the exact email that would be sent to candidates:

![Screenshot of a page with the heading ’Check details and reject application’ followed by the text ‘The candidate will be sent this email’ followed by a box containing the content of a rejection email that includes ‘They’ve given the following feedback to explain their decision’ and the rejection reaons shown using an indent. Below the email preview is a green button labelled ‘Reject application’](screenshot-of-email-preview.png)

This no longer contained the ‘Change’ links, but we judged that the ‘Back’ link at the top (or the browser back button) would be sufficient, as this goes to the same page anyway.

## Research

We tested the changed design in usability sessions with participants from 9 providers, alongside other changes.

All providers were unaware that the candidate saw the feedback presented in this way, except for one provider who had used the sandbox to test the candidate journey.

Around half suggested they would elaborate on feedback now they know how it looks, and would avoid the note-form style, third-person wording and bullet points they use currently.

