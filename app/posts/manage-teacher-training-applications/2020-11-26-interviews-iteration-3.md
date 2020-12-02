---
title: Interviews iteration 3
description: Various improvements to the way interviews work and getting it ready for development
date: 2020-11-26
---

{% from "email/macro.njk" import appEmail %}

Previous iterations:

- [Iteration 1](/manage-teacher-training-applications/interviews)
- [Iteration 2](/manage-teacher-training-applications/interviews-iteration-2)

## Main improvements

### Interview schedule

‘Interviews’ was changed to ‘Interview schedule’ to differentiate it from the candidate’s interviews page within an application.

Interviews are grouped by date to make it easier to scan them. Only the most crucial information is shown for the same reason.

Users can click an interview for more information such as the candidate's interview preferences and additional details added by the provider.

The organisation shown under the course is the one which is running the interview.

In the previous iteration, the link to the interview details page was the name of the candidate. But we now link the time because it’s the thing which is most related to a specific interview.

The link has hidden text containing the name of the candidate and the date to make it accessible for visually impaired users.

The interview preferences are displayed as bold text without an icon. We think this will be enough to draw attention to them without giving too much emphasis, since many candidate preferences will matter less once the interview has been arranged.

Clicking an interview now anchors the user down to the particular interview to make sure it’s in view.

Past interviews are shown on a separate page.

### Candidate interview page

Interviews are categorised as either upcoming or past to match the schedule and make them easier to find.

The course is shown for each interview so that users do not have to go to the application details page to find it.

The button to set up an interview has been changed from ‘Set up an interview’ to ‘Set up interview’. This is less wordy and is consistent with the other calls to action.

The ‘Change’ link has been changed to ‘Change details’. The ‘Cancel’ link has been changed to ‘Cancel interview’. This is to make their functions clearer.

The summary list labels have changed to match the labels on the form.

We changed the width of the summary cards to be two-thirds. This makes it easier to read them and spot the available actions.

When there are no additional details, the value is set to ‘None’.

### Set up and change interview forms

The interview preferences box now uses a large heading to make it easier to spot and to correctly represent the information hierarchy.

The time hint now provides a range of example times including how to enter midday.

The label for ‘Organisation’ has been changed to ‘Organisation carrying out the interview’ which is much clearer.

The label for ‘Location’ has been changed to ‘Address or online meeting details’ to make it clear what it's used for without relying on hint text.

The ‘Additional details’ field has now been marked as optional.

### Set up and change interview check answers pages

The `h1` has changed from ‘Check and confirm interview’ to ‘Check and send interview’ so it's clearer that details will be sent to the candidate. We therefore removed the warning text which explained that an email will be sent.

The same goes for the button’s label, which has been changed from ‘Confirm interview’ to ‘Send interview details’.

All the labels match the new labels in the form as explained earlier.

The success message now says ‘Interview set up’ and uses the new [notification banner](https://design-system.service.gov.uk/components/notification-banner/) component.

### Cancelling an interview form

The label for the reason for cancellation has been changed from ‘Tell the candidate why you’re cancelling the interview’ to ‘Reason for cancelling interview’. It's more concise and makes error messages easier to read.

### Cancelling an interview check answers page

The `h1` has been changed from ‘Check and confirm interview cancellation’ to ‘Check and send interview cancellation’ to make it clearer. We therefore removed the warning text explaining that an email will be sent.

The button’s label has been changed from ‘Confirm cancellation’ to ‘Send cancellation’.

The success message now says ‘Interview cancelled’.

### Banner prompt

The ‘Set up an interview’ button has been changed to ‘Set up interview’ to be less wordy.

The ‘or’ between the buttons has been removed as it’s unnecessary.

## How it works

### Candidate comms

For this version, the candidate will only get updates about interviews by email – not in their dashboard.

### Candidate interviews page

The interviews page is only shown once an interview has been set up.

### Available actions

An interview can only be set up, changed or cancelled when an application is in the ‘Received’ or ‘Interviewing’ states.

The buttons and links are not shown in any other state.

Interviews must be set up for today or in the future.

### Time input

Helping users to enter a time is challenging.

To start we’re going to use a single text box.

A space, full stop or colon can be used between hours and minutes.

The hours do not need to be zero padded and minutes do not need to be included if it’s on the hour.

Suffixes for `am` and `pm` must be included. An error will be shown otherwise.

If this proves to be a problem, we’ll explore the option of an autocomplete control.

### Upcoming versus past interviews

Upcoming interviews are those with dates that are today or in the future.

Past interviews are those with dates that are before today.

Once the status moves beyond ‘Interviewing’ all interviews become past interviews.

### Specifying which organisation is carrying out the interview

Users are only asked to specify an organisation if they belong to both the training provider and accredited body for that course.

Otherwise, the interview will automatically be on behalf of whichever organisation they belong to.

### Using the back link when setting up an interview

The back link on the first page of the set up interview flow works differently depending on whether another interview has been set up:

- If an interview has been set up, the back link goes to the interviews page.
- If an interview has not been set up, the back link goes to the application details page.

## Emails

### New interview

{{ appEmail({
  subject: "Interview arranged - Preston Teacher Training Consortium",
  content: "

Dear Kelly

# Interview arranged

You have an interview with Preston Teacher Training Consortium about your application to study Mathematics.

The details are as follows:

> 4 January 2021 at 11am
>
> 3 Cavendish Road
> Preston
> PR1 4RR
>
> Give your name at reception when you arrive and someone will collect you.
>
> There will be a panel interview in the morning, which should take around an hour. We'll take a break for lunch then there will be a two-hour exercise to complete in the afternoon.

Contact Preston Teacher Training Consortium if you have any questions or you will not be able to attend the interview.

# Get support

Contact [becomingateacher@digital.education.gov.uk](mailto:becomingateacher@digital.education.gov.uk) if you have problems applying online or want to give feedback.

  "
}) }}

### Interview details updated

{{ appEmail({
  subject: "Interview details updated - Preston Teacher Training Consortium",
  content: "

Dear Kelly

# Interview details updated

Preston Teacher Training Consortium has updated the details of the interview about your application to study Mathematics.

The new details are as follows:

> 6 August 2021 at 1pm
>
> 3 Cavendish Road
> Preston
> PR1 4RR
>
> Give your name at reception when you arrive and someone will collect you.
>
> There will be a panel interview in the morning, which should take around an hour. We’ll take a break then there will be a two-hour exercise.

Contact Preston Teacher Training Consortium if you have any questions or you will not be able to attend the interview.

# Get support

Contact [becomingateacher@digital.education.gov.uk](mailto:becomingateacher@digital.education.gov.uk) if you have problems applying online or want to give feedback.

  "
}) }}

### Interview cancelled

{{ appEmail({
  subject: "Interview cancelled – Preston Teacher Training Consortium",
  content: "

Dear Kelly

# Interview cancelled

Preston Teacher Training Consortium has cancelled the interview on 4 January 2021 at 11am about your application to study Mathematics.

They've given the following reason for cancelling the interview:

> You contacted us to say you didn't want to apply for this course any more.

Contact Preston Teacher Training Consortium if you have any questions.

# Get support

Contact [becomingateacher@digital.education.gov.uk](mailto:becomingateacher@digital.education.gov.uk) if you have problems applying online or want to give feedback.

  "
}) }}

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
