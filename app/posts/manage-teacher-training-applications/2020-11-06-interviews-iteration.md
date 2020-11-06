---
title: Interviews iteration
description: Various improvements to the way interviews work
date: 2020-11-06
---

This post documents various improvements to the way interviews work. [View initial iteration](/manage-teacher-training-applications/interviews).

## Using a single ‘Interviewing’ status

In the previous iteration we had ‘Awaiting interview’ and ‘Interviewed’ states.

The intention was to have the status change automatically to ‘Interviewed’ at the end of the day the last interview took place. But that could be misleading if the interview didn’t actually take place.

Alternatively, we thought about letting users change the status themselves by marking an application as ‘Interviewed’ but that means we have to rely on users actually doing that for very little gain.

Really, the next step is to make an offer or reject the application, so an interim step is unnecessary or worse, prone to misuse.

To avoid all that complexity we decided to collapse the status into a single ‘Interviewing’ status as soon as one interview has been set up.

The application remains in that state until an offer is made or the application is rejected.

## Prompting users to make a decision once an interview has been set up

In the previous iteration, when an application is in the ‘Awaiting interview’ state, we prompted users to either make a decison or set up another interview.

But we felt it was confusing to prompt users to set up another interview for providers that don’t set up multiple interviews.

So we removed that option from the prompt but still let users set up another interview from the interviews page.

## Hiding the ‘Cancel’ and ‘Change’ links once an offer is made or the application is rejected

In the previous iteration, we let users cancel or change an interview even after an offer was made.

This was more an oversight than anything else. But now we only let users cancel or change an interview when in the ‘Interviewing’ state.

## Make the candidate’s preferences easier to spot

In the previous iteration we used [Inset text](https://design-system.service.gov.uk/components/inset-text/) at the top of the page where users fill out the interview details.

But some users missed this, so we’ve put the preferences in a box instead.

## Add hint text to location

We added hint text to the location field to let users know they can provide other details, like directions which we know candidates find useful.

## Move location before additional details

In the previous iteration the location comes before additional details. This wasn’t very logical and inconsistent with the order on the summary card.

So now location always comes before additional details which comes last.

## Add organisation before location

Some users beloing to both the training provider and the accredited body.

In this case we don’t know who to send the interview details on behalf of.

So for users who belong to both organisations, we now ask users to specify the organisation.

## Showing past interviews on interviews list page

In the previous iteration we didn’t think about whether past interviews would show on the interviews list page.

We decided that it is better to show past interviews rather than having them disappear. This way users don’t have to hunt for them elsewhere.

So we added sub headings to distinguish upcoming interviews from those that have already taken place.

## Tidy up interview list page

In the previous iteration we [laid out the candidate’s interview preferences along with the additional details](/manage-teacher-training-applications/interviews/#interview-list-page).

This made the table messy, the rows tall and potentially harder to read.

So instead of showing the interview preferences and the additional details in the list. We just let users browse to the interview itself to see those details.

## Keeping the priority heading as ‘Deadline approaching: respond to the candidate’

In the previous iteration we found some users didn’t understand that the priority heading related to the Reject By Default (RBD) date.

We considered adding the acronym into heading but then decided to give it more time.

We did this because we think the ‘Interviewed’ state confused users because in reality once an interview takes place, providers are very quick to progress that application either way.

This is something we’ll keep an eye on with this new iteration.

## Gaps still to address

- The timeline and activity log aren’t showing a complete list of interview related actions
- The ‘Interview preferences’ icon is using a check mark which isn’t really what it’s for
- Should a cancelled interview disappear from the UI or get marked as cancelled?
- The interview list page needs to show course details
- Use or don’t use an ‘article’ for the button text - be consistent

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Application list",
    img: {
      src: "application-list.png"
    }
  }, {
    text: "Prompt: when in the received state",
    img: {
      src: "prompt--received.png"
    }
  }, {
    text: "Set up interview: step 1",
    img: {
      src: "set-up-interview--1.png"
    }
  }, {
    text: "Set up interview: check answers",
    img: {
      src: "set-up-interview--2.png"
    }
  }, {
    text: "Set up interview: success message on the interviews page",
    img: {
      src: "set-up-interview--3.png"
    }
  }, {
    text: "Prompt: when in the interviewing state",
    img: {
      src: "prompt--interviewing.png"
    }
  }, {
    text: "Cancelling an interview :step 1",
    img: {
      src: "cancel--1.png"
    }
  }, {
    text: "Cancelling an interview: check answers",
    img: {
      src: "cancel--2.png"
    }
  }, {
    text: "Cancelling an interview: success message on interviews page",
    img: {
      src: "cancel--3.png"
    }
  }, {
    text: "Changing an interview :step 1",
    img: {
      src: "changing--1.png"
    }
  }, {
    text: "Changing an interview: check answers",
    img: {
      src: "changing--2.png"
    }
  }, {
    text: "Changing an interview: success message on interviews page",
    img: {
      src: "changing--3.png"
    }
  }, {
    text: "Interview list page",
    img: {
      src: "interview-list-page.png"
    }
  }]
}) }}
