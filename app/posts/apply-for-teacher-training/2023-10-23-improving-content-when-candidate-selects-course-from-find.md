---
title: Improving the content when a candidate selects a course from Find
description: We improved the content a candidate sees when selecting a course from Find postgraduate teacher training by making sure it follows GOV.UK Design System patterns and the GOV.UK style guidelines.
date: 2023-10-23
tags:
  - courses
---

We improved the content we show when users add a course from Find postgraduate teacher training (Find).

This change was implemented in September 2023.

## The issue

When a candidate is ready to apply to a teacher training course, they can choose their training provider and course straight away if they know where they want to apply to. If they do not know, they can go to Find to look for a course.

We found that the content we show when users are selecting a course from Find was out of date and there were issues with the text being in different sizes.

## What we did

We updated the content to be clearer about what Find is for by including a list of bullet points which aid scanning.  

We also removed the service name as we do not usually mention service names as ‘nouns’ to candidates. Instead, we describe the thing the candidate needs to do.

We also made sure all the text was the same size and removed the ‘Start now’ button to replace it with a ‘Continue’ button. ‘Start now’ buttons are usually used for pages on GOV.UK that link directly to government services.

Content we used to show before candidates navigated to Find.

![Screenshot of the 'Your applications' tab showing content in different sizes and the wrong green button.](old-find-content.png)

The new content we show when candidates navigate to Find.

![Screenshot of the 'Your applications' tab new content and a bullet list explaining what the service 'Find' does with a green button that says 'Continue.](new-find-content.png)

## Updating error messages

When our developers were building this change, we discovered some old error messaging that we show if something goes wrong when a candidate selects a course from Find.

This could happen if:

- the candidate has already applied to the same course
- the candidate has reached their limit on applications

there was a technical issue when the candidate selected the course

We realised this content is very old and uses an old ‘warning’ pattern.

Some of the content did not follow the GOV.UK style guidelines and there were no clear calls to action on what candidates could do to fix the issue.



![Screenshot of a red warning banner with content saying 'You have already selected a course.](old-warning-already-selected-course.png)

The new content is:

‘You have already added an application for Primary (Y068). Find a different course to apply to.’

This content helps the user fix the issue by giving them a call to action that links back to Find.

![Screenshot of a red warning banner with content saying 'You cannot apply to a course because you already have applied to the maximum number of courses.](old-warning-too-many-choices.png)

The new content is:

‘You cannot have more than 4 applications. Delete an application first, and then apply to Physics (C153).’

This content helps the user fix the issue by telling them how to get another application choice.

![Screenshot of a page telling candidates there is a technical issue with the course they selected and they should go back and select the course again.](warning-technical-problem.png)

The new content is:

__There is a problem__

We could not find the course you’re looking for. There may be a problem with the training provider or the course.

Try selecting the course again or find a different course to apply to.

This content helps the user on to the next step eve though the issue is likely a technical one.

## Further considerations

At the time we were not able to update the old ‘warning’ pattern. We think this should follow the ‘Error summary’ pattern in the GOV.UK Design System.  

We will update this pattern in the new recruitment cycle.