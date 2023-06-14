---
title: Changing the way candidates choose courses
description: We changed the way candidates can apply to courses by moving the flow to a different section of the service.
date: 2023-06-14
tags:
  - courses
  - applications
ogImage:
  src: /apply-for-teacher-training/changing-the-way-candidates-choose-courses/cover-image-2.png
  alt: "Illustration showing 9 screens leading on from each other. The screens show a flow the user would take to choose a teacher training course from choosing a training provider, choosing a course, choosing additional courses, writing their personal statement, indicacting their interveiw needs, adding extra information and submitting their application."
---

![Illustration showing 9 screens leading on from each other. The screens show a flow the user would take to choose a teacher training course from choosing a training provider, choosing a course, choosing additional courses, writing their personal statement, indicacting their interveiw needs, adding extra information and submitting their application.](cover-image-2.png)

As part of our work to [change the application process](/apply-for-teacher-training/changing-application-process/), we designed a new way for candidates to choose courses to apply to.

We’re looking to make this change for the new recruitment cycle starting in October 2023.

## The issue

Currently, when a candidate applies for teacher training, they submit one application linked to 4 course choices. This means candidates have to wait for an outcome on all 4 course choices before they can apply again.

We wanted to make the process more flexible by allowing candidates to submit an application with one course choice linked to it. This would allow them to switch out their applications independently from each other, without having to wait for an outcome on all 4 applications.

## What we did

As part of this work, we introduced a new [navigation bar](/apply-for-teacher-training/adding-a-navigation-bar/). This would allow candidates to switch between adding information about themselves on a tab called ‘Your details’ and choose their courses on a different tab called ‘Your applications’.

When a candidate is ready to add applications, we presented them with content about how courses can fill up quickly so they should apply soon.

![Screenshot showing content a user would see before adding an application. The content tells the user that courses can fill up quickly and has a link to guidance on the application prociess. Below if a green button that says 'Add application'](ready-to-apply.png)

We still ask candidates if they know where they want to apply. This is the same question we have currently.

If they say ‘No’, they navigate to the Find postgraduate teacher training service.

If they say ‘Yes’, we ask them which training provider they’re applying to.

![Screenshot showing a question 'Do you know which training course you want to apply to' followed by yes and no radion inputs and a green button that says 'Continue'](knowing-which-provider.png)

![Screenshot showing a question 'Which training provider do you want to apply to' followed by a drop down menu of different training providers followed by a 'Continue' button.](which-provider.png)

Once they’ve chosen their training provider, we show a list of courses the training provider offers for candidates to choose from.

![Screenshot showing a list of different courses a training provider offers. Course are in alphabetical order. Below the list is a green button that says 'Continue'](choose-courses.png)

We then ask candidates if they’re interested in any other courses offered by the same training provider. Often candidates apply to different courses offered by the same training provider. This means they use up their 4 course choices on the same provider where they might be more successful applying to a range of different providers.

With this design, a provider would be able to see the course a candidate wanted to apply to, but then also other courses they are interested in. A provider could still make an offer if the candidate was better suited to another course.

![Screenshot showing a list of remaining courses a training provider offers. Course are in alphabetical order and users can select more than one if they are interested in additonal courses. Below the list is a green button that says 'Continue'](additional-courses.png)

If the candidate has already applied to the same training provider, we show a page to tell them to apply to another training provider.

![Screenshot of a page telling the user they have already applied to a sepcific training provider.](already-applied.png)

If a candidate has an application in draft, and then tries to add another application to the same training provider, we show a page to tell them they already have an application to the same training provider.

![Screenshot of a page telling the user they already have a draft application with a specific training provider.](already-have-draft-application.png)

Once they've chosen a course, candidates can then fill out their personal statement. We’re not sure if this was the best place to put the personal statement. But we felt it did not belong in the ‘Your details’ tab anymore.

![Screenshot of a page called 'Personal statement' this is followed by content explaing to the user what they should write about in their statement and a large text box to write it in.](personal-statement.png)

We then ask the candidate about their interview needs.

![Screenshot of a page called 'Interview needs' where a user can tell training providers about anything they might need for an interview.](interview-needs.png)

Candidates would then be able to add any additional information to their application. We were not sure of the purpose of this question and discussed removing it after testing.

![Screenshot of a page called 'Additional information' where the user is asked if they would like to add anything else to their application.](additional-information.png)

On the final page, candidates can review their course selection. At this point they could choose to submit their application or save it as a draft.

![Screenshot of a page where the user can review and change any information they have already input.](review-course-flow.png)

## What we learnt

We tested this flow with 8 users in May 2023. There were no usability issues, as it’s very similar to what we have now. We did find that:

* candidates did not read the information above the green ‘Add application’ button and selected the button immediately
* selecting other courses they were interested in at the same provider was valuable but users thought this would use up an application choice
* having the personal statement within the flow made candidates think they should personalise it per training provider
* candidates liked being able to tell providers about their interview needs
* candidates found the review page useful and liked the option of submitting immediately or saving it as a draft

## Further considerations

As part of launching this feature in October 2023, the team decided to leave out some features. We’re now iterating the designs, which include:

* removing the ability for candidates to select other courses they’re interested in (we intend to revisit this later)
* removing the ‘additional information’ question as we could not see a purpose for it
* moving ‘interview needs’ back to the ‘Your details’ tab and renaming it to ‘Interview availability’
