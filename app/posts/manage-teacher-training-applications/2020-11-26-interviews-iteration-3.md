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

The ‘Interviews’ primary navigation was changed to ‘Interview schedule’ to differentiate it from the ‘Interviews’ section of a candidate’s application.

Interviews are grouped by the date to make the interviews easier to scan.

Only the most crucial information is shown on the schedule to keep things easy to scan. Users can click an interview to see more detail.

The organisation shown under the course is the one who’s running the interview.

The time – instead of the candidate’s name – is linked as that’s the attribute that relates the most to the interview. The name relates to the candidate or the candidate’s application.

The interview preferences are displayed as words without an icon. We think it’s good to not draw attention to it so much because the preferences matter less after the interview has been arranged.

The link has hidden text containing the name of the candidate and the date to make it accessible for visually impaired users.

Clicking an interview now anchors the user down to the particular interview to make sure it’s in view.

Past interviews are shown as a separate page.

### Candidate interview page

The interviews are organised by upcoming and past interviews to match the schedule and make them easier to find.

The course is shown for each interview so that users do not have to go to the application details page to find it.

The button to set up an interview has been changed from ‘Set up an interview’ to ‘Set up interview’ to be less wordy and more consistent with the other calls to action.

The ‘Change’ link has changed to ‘Change details’. The ‘Cancel’ link has changed to ‘Cancel interview’.

The summary list labels have changed to match the labels on the form.

We changed the width of the summary cards to be two-thirds which makes them easier to read and makes it easier to spot the available actions.

When there are no additional details, the value is set to ‘None’.

### Set up and change interview forms

The interview preferences box now uses a large heading to make it easier to spot and correctly represent the information hierarchy.

The time hint now provides a range of example times including how to enter midday.

The label for ‘Organisation’ has been changed to ‘Organisation carrying out the interview’ which is much clearer.

The label for ‘Location’ has been changed to ‘Address or online meeting details’ to be clearer about what this field expects without relying on hint text to clarify.

The ‘Additional details’ field has now been marked as optional.

### Set up and change interview check answers pages

The `h1` has changed from ‘Check and confirm interview’ to ‘Check and send interview’ to be clearer. We think this means the warning text which explains that an email will be sent can be removed.

The same goes for the button’s label which has been from changed from ‘Confirm interview’ to ‘Send interview details’.

All the labels match the new labels in the form as explained earlier.

The success message now says ‘Interview set up’ and uses the new Notification Banner component.

### Cancelling an interview form

The reason field label has changed from ‘Tell the candidate why you’re cancelling the interview’ to ‘Reason for cancelling interview’ which is more concise and makes error messages easier to design.

### Cancelling an interview check answers page

The `h1` has changed from ‘Check and confirm interview cancellation’ to ‘Check and send interview cancellation’ to be clearer. We think this means the warning text which explains that an email will be sent can be removed.

The same goes for the button’s label which has been from changed from ‘Confirm cancellation to ‘Send cancellation’.

The success message now says ‘Interview cancelled’.

### Banner prompt

The ‘Set up an interview’ button has been changed to ‘Set up interview’ to be less wordy.

And the ‘or’ between the buttons has been removed as it we think it’s unnecessary.

## How it works

### Candidate comms

For this version, the candidate will only get updates about interviews by email – not in their dashboard.

### Candidate interviews page

The interviews page is only shown once an interview has been set up.

### Available actions

An interview can only be set up, changed or cancelled when an application is in the ‘Received’ or ‘Interviewing’ states.

When in any other state the buttons and links should not be shown.

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
