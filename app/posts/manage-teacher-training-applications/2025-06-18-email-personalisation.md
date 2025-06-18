---
title: Email personalisation
description: Allow providers to personalise the find a candidate invite email 
date: 2025-06-18
tags:
  - find a candidate
  - candidate emails
eleventyComputed:
  eleventyNavigation:
    key: manage-teacher-training-find-a-candidate
---
## Background

We heard from training providers in our earliest user research sessions that there are some situations where they would want to either share or collect more information from candidates that they are inviting to apply to their courses through Find a candidate.

Some scenarios that they mentioned included:

* sharing information about their organisation that they think the candidate will find appealing

* sharing contact information so the candidate can ask them any questions

* explaining why they have invited the candidate to the course, especially if it’s a related subject or a route the candidate hadn’t previously applied to

* asking the candidate to contact them before they submit their application to discuss details in their profile that the provider is unsure about.

## What we did

We added a free-text field to the invitation email that providers can choose to use for any of the reasons we heard about in user research, and any that we haven’t yet heard about. The free-text field is flexible enough to solve several of the user needs that we uncovered.

![New screen asking provider users if they want to add their own message with yes and no radio boxes](add-own-message-yes-no.png)

We also added a preview of the invitation content in a details component. Some providers had expressed interest about what we put in the email to candidates and there was no way for them to see it. This will also hopefully prevent duplication between the user-generated content and the standard email content.

![Expanded details component showing the content in the email invitation](email-content-preview.png)

![Free-text field for adding a bespoke message to the invitation email](message-entry.png)

## What's next?

We will monitor how this feature is used. So far, providers who have included a personalised message are more likely to receive an application from the invited candidate.  

We will also do some free-text analysis of the content to see if there are common themes we can standardise for so that providers don’t have to enter the same information each time they send an invitation. We will also monitor the length of messages that providers are adding to see if we need to increase or reduce the word count (currently 200 words).

The Find and Publish team are researching a dynamic preview of course descriptions that shows providers what will be shown to candidates. We could look to implement this in our email preview if it tests well for them.
