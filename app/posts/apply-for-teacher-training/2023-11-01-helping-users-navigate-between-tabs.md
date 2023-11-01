---
title: Helping users navigate between tabs for continuous applications
description: We designed and added additional navigations on your details and your applications
date: 2023-11-01
tags:
  - navigation
  - tabs
---

We have designed and implemented additional navigations with links and CTA's between 'Your details' and 'Your applications' tabs, to make user journeys for candidates smoother. These improvements aim to improve the user experience and helps candidates seamlessly transition between managing their details, adding applications and viewing applications.

## The issue

During our bug parties, we saw a few testers struggle and comment that when you complete ‘Your details’ there is nothing to direct candidates to the ‘Your applications’ tab. There was no prompts or guidance to navigation between these two tabs.

## What we did

### Button on ‘Your details’ after completing all sections
Once the candidate has completed all of their details we render a button in a container at the bottom of the page which takes the candidate directly to appication submission journey. And we then hide this button once the candidate has added 4 applications.

![Screenshot of a new button at the bottom of the your details page](blue-box.png)

### Link on ‘Your details’ after completing all sections
Once the candidate has completed their details we also render a link at the top of the page, this will link them to the application summary page. The link will disappear once the candidate has added 4 application choices.

![Screenshot of a link at the top of your details page](details-to-applications.png)

### Link on ‘Your applications’ when the candidate has not completed their details
We also render a link on the ‘Your applications’ tab which links them to their details. We hide this link once they have completed their details.

![Screenshot of a link on your applications tab](your-applications-to-your-details.png)

### Link on the course selection journey when the candidate has not completed their details
If the candidate goes through the course selection journey, and they have not completed their details we will now render the following text, which will link them to their details and confirm that the choice will be saved as a draft.

![Screenshot of the new content and link on the application review page](course-review.png)

## User testing
We have conducted a few user research sessions to test out this new navigation that has been launched as part of the 2023 cycle. We have received some good feedback that allows us to understand the issue at hand better.

![Screenshot of comments from user testing session](ur-findings.png)

Most users said that they have not noticed the 'add application' link at the top, as it is not very prominent and gets lost.

Some users did not notice the green CTA button at the bottom of the page as they have not scrolled down, but after finding the button thought that it is very useful and it is a 'natural next step' to adding an application. Some users expected to see the green CTA at the bottom, as they have seen the same pattern on other goverment based websites.

## Further considerations

Things to consider after the user research findings have been finalised:
* Move the blue/grey box button to the top
* Make the link at the top to applications more prominent