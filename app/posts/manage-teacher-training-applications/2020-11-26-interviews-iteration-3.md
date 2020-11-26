---
title: Interviews iteration 3
description: Various improvements to the way interviews work and getting it ready for development
date: 2020-11-26
---

This post documents various improvements to the way interviews work.

Previous iterations:

- [Iteration 1](/manage-teacher-training-applications/interviews)
- [Iteration 2](/manage-teacher-training-applications/interviews-iteration-2)

## Changes of note

### Interview schedule

‘Interviews’ was changed to ‘Interview schedule’ to differentiate it from the candidate’s interviews page from within an application.

Interviews are grouped by date to make it easier to scan. Only the most crucial information is shown for the same reason.

Users can click an interview to see more detail such as interview preferences and additional details.

The organisation shown under the course is the one who’s running the interview.

In the previous iteration, the link to the interview details page was the name of the candidate. But we now link the time because it’s the most related to an interview.

The link has hidden text containing the name of the candidate and the date to make it accessible for visually impaired users.

The interview preferences are displayed as words without an icon. We think preferences matter less after the interview has been arranged.

Clicking an interview now anchors the user down to the particular interview to make sure it’s in view.

Past interviews are shown as a separate page.

### Candidate interview page

The interviews are organised by upcoming and past interviews to match the schedule and make them easier to find.

The course is shown for each interview so that users do not have to go to the application details page to find it.

The button to set up an interview has been changed from ‘Set up an interview’ to ‘Set up interview’ to be less wordy and more consistent with the other calls to action.

The ‘Change’ link has been changed to ‘Change details’. The ‘Cancel’ link has been changed to ‘Cancel interview’.

The summary list labels have changed to match the labels on the form.

We changed the width of the summary cards to be two-thirds which makes them easier to read and makes it easier to spot the available actions.

When there are no additional details, the value is set to ‘None’.

### Set up and change interview forms

The interview preferences box now uses a large heading to make it easier to spot and correctly represent the information hierarchy.

The time hint now provides a range of example times including how to enter midday.

The label for ‘Organisation’ has been changed to ‘Organisation carrying out the interview’ which is much clearer.

The label for ‘Location’ has been changed to ‘Address or online meeting details’ to be clearer about what this field expects without relying on hint text to clarify.

The ‘Additional details’ field is now been marked as optional.

### Set up and change interview check answers pages

The `h1` has changed from ‘Check and confirm interview’ to ‘Check and send interview’ to be clearer. We therefore removed the warning text to explain that an email will be sent.

The same goes for the button’s label which has been changed from ‘Confirm interview’ to ‘Send interview details’.

All the labels match the new labels in the form as explained earlier.

The success message now says ‘Interview set up’ and uses the new [Notification Banner](https://design-system.service.gov.uk/components/notification-banner/) component.

### Cancelling an interview form

The label for the reason for cancellation has been changed from ‘Tell the candidate why you’re cancelling the interview’ to ‘Reason for cancelling interview’ which is more concise and makes error messages easier to read.

### Cancelling an interview check answers page

The `h1` has changed from ‘Check and confirm interview cancellation’ to ‘Check and send interview cancellation’ to be clearer. We therefore removed the warning text to explain that an email will be sent.

The button’s label has been from changed from ‘Confirm cancellation to ‘Send cancellation’.

The success message now says ‘Interview cancelled’.

### Banner prompt

The ‘Set up an interview’ button has been changed to ‘Set up interview’ to be less wordy.

And the ‘or’ between the buttons has been removed as it’s unnecessary.

## How it works

### Candidate comms

For this version, the candidate will only get updates about interviews by email – not in their dashboard.

### Candidate interviews page

The interviews page is only shown once an interview has been set up.

### Available actions

An interview can only be set up, changed or cancelled when an application is in the ‘Received’ or ‘Interviewing’ states.

When in any other state the buttons and links are not shown.

Interviews must be set up for today or in the future.

### Time input

Helping users to enter a time is challenging.

To start we’re going ot use a single text box.

A space, full stop or colon can be used between hours and minutes.

The hours do not need to be zero padded and minutes do not need to be included if it’s on the hour.

Suffixes for `am` and `pm` must be included. An error will be shown otherwise.

If this proves to be a problem, we’ll explore the option of an autocomplete control.

### Upcoming versus past interviews

Upcoming interviews are those with dates that are today or in the future.

Past interviews are those that are before today.

Once the status moves beyond ‘Interviewing’ all interviews become ‘Past interviews’.

### Specifying which organisation is carrying out the interview

The question that asks users to specify which organisation is carrying out the interview only shows for users who belong to the training provider and accredited body of that course.

Otherwise, it will automatically be on behalf of the user who’s setting up the interview.

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
    text: "Cancelling an interview: step 1",
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
    text: "Interviews page",
    img: {
      src: "interviews-page.png"
    }
  }, {
    text: "Interview list page",
    img: {
      src: "interview-schedule-page.png"
    }
  }, {
    text: "Interview list page - past interviews",
    img: {
      src: "interview-schedule-page--past.png"
    }
  }]
}) }}
