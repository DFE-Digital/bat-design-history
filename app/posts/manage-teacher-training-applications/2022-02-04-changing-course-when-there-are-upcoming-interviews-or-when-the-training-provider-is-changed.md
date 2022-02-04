---
title: Changing course when there are upcoming interviews or when the training provider is changed
description: TODO
date: 2022-02-04
screenshots:
  items:
    - text: Check answers page (no upcoming interviews and no change of training provider)
      src: check-answers.png
    - text: Check answers page (upcoming interviews but no change of training provider)
      src: check-answers--upcoming-interviews.png
    - text: Check answers page (upcoming interviews and a change of training provider)
      src: check-answers--upcoming-interviews-change-of-training-provider.png
---

We recently designed a new flow to [let providers change the course applied for before making an offer](/manage-teacher-training-applications/letting-providers-change-course-before-making-an-offer/). The candidate is sent an email with details of the new course.

If any interviews have been set up, the candidate will have been sent an email for each interview. The email includes:

- training provider
- course (without code)
- date
- time
- address or online meeting details - this is not the same as the course location
- additional details

This email will therefore be out of date if a user changes either training provider or course.

If the interview is in the past then we will not update the interview. If it is upcoming then we’ill send the candidate an email with the new details. We’ll also display warning text at the end of the flow.

In addition, if the new course is offered by a different provider then we’ll send emails to:

- users at the old training provider, to let them know that they’ll no longer have access to the application
- users at the new training provider, to let them know that they’ll need to make a decision about the application

We’ve already designed [emails to send to providers when an application is transferred](https://bat-design-history.netlify.app/manage-teacher-training-applications/what-to-show-when-an-application-has-been-transferred-to-another-provider/). We need to tell the user that we’ll send the emails.
## How it works

The warning text will be different when there are:

- no changes to upcoming interviews and no change of training provider
- changes to upcoming interviews and no change of training provider
- no changes to upcoming interviews and a change of training provider
- changes to upcoming interviews and a change of training provider

Changes to upcoming interviews means changes to the training provider or course.
### No changes to upcoming interviews and no change of training provider

The warning text content will be:

^ The candidate will be sent an email to tell them that the course has been updated.

### Changes to upcoming interviews and no change of training provider

The warning text content will be:

^ The upcoming interview will be updated with the new course details.
^
^ The candidate will be sent emails to tell them that the course and the upcoming interview have been updated.

### No changes to upcoming interviews and a change of training provider

The warning text content will be:

^ Emails will be sent to:
^ - the candidate, to tell them that the course has been updated
^ - users at the new and old training providers, to tell them that the application has been transferred between organisations

### Changes to upcoming interviews and a change of training provider

The warning text content will be:

^ The upcoming interview will be updated with the new course details.
^
^ Emails will be sent to:
^ - the candidate, to tell them that the course and the upcoming interview have been updated
^ - users at the new and old training providers, to tell them that the application has been transferred between organisations


## Future considerations

We plan to carry out user research to help us decide whether to:

- show details of upcoming interviews
- allow users to choose whether to change or cancel upcoming interviews

