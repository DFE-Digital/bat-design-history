---
title: Changing course when there are upcoming interviews or the training provider is changed
description: We added content to tell users when there are upcoming interviews which will be changed and
date: 2022-02-04
screenshots:
  items:
    - text: Check answers page (no upcoming interviews and no change of training provider)
      src: check-answers.png
    - text: Check answers page (upcoming interviews but no change of training provider)
      src: check-answers--upcoming-interviews.png
    - text: Check answers page (no upcoming interviews but a change of training provider)
      src: check-answers--change-of-training-provider.png
    - text: Check answers page (upcoming interviews and a change of training provider)
      src: check-answers--upcoming-interviews-change-of-training-provider.png
---

{% from "email/macro.njk" import appEmail %}

If a user changes the course a candidate is applying to then we send an email to tell the candidate.

We’ve made changes to the service because we may need to send further emails to:

- the candidate if they have upcoming interviews, to tell them that the details have been changed
- users of Manage if the new course is run by a different training provider, to tell them that the application has been transferred

## What we changed

We now send additional emails and warn users that we’ll do so, before they click to complete the change of course.

### Upcoming interviews

We recently designed a new flow to [let providers change the course applied for before making an offer](https://bat-design-history.netlify.app/manage-teacher-training-applications/letting-providers-change-course-before-making-an-offer/).

If any interviews have been set up, the candidate will have been sent an email for each interview which includes:

- training provider
- course - this is the subject only, without the code or details such as whether it’s full time or part time
- date
- time
- address or online meeting details - this is not the same as the course location
- additional details

This email will be out of date if a user changes the course (subject) the candidate is applying for.

If the interview is in the past then we will not update the interview.

If the interview is upcoming then we’ll send the candidate an email with the new details. We’ll also display warning text at the end of the flow.

### Change of training provider

If the new course is offered by a different provider then we’ll send emails to:

- users at the old training provider, to let them know that they’ll no longer have access to the application
- users at the new training provider, to let them know that they’ll need to make a decision about the application

We’ll also display warning text to tell the user that we’ll send the emails.

## How it works

We’ve added warning text to the end of the flows for:

- changing course details before an offer has been made
- changing course details while making an offer
- changing offer details

### Warning text

The content of the warning text depends on whether there’s a change to:

- upcoming interviews
- the training provider

We only warn users about changes to upcoming interviews if they’re changing the training provider or course.

We think it’s important to be clear that upcoming interviews will be changed, as users may not expect it to happen. We have emphasised this by putting it first in the warning text when it applies.

This is different from other flows such as making an offer, where we mention that interviews will be cancelled but do not put it first. We think that the information is less important in those flows.

If there are no changes to upcoming interviews and no change of training provider, the warning text content is:

> The candidate will be sent an email to tell them that the course has been updated.

If there are changes to upcoming interviews but no change of training provider,the warning text content is:

> The upcoming interview will be updated with the new course details.
>
> The candidate will be sent emails to tell them that the course and the upcoming interview have been updated.

If there are no changes to upcoming interviews but there’s a change of training provider, the warning text content is:

> Emails will be sent to:
> - the candidate, to tell them that the course has been updated
> - users at the new and old training providers, to tell them that the application has been transferred between organisations

If there are changes to upcoming interviews and a change of training provider, the warning text content is:

> The upcoming interview will be updated with the new course details.
>
> Emails will be sent to:
> - the candidate, to tell them that the course and the upcoming interview have been updated
> - users at the new and old training providers, to tell them that the application has been transferred between organisations

### Emails to provider users

A user will not receive an email if they had access to the application before the change and still have access to it.

#### Email to a user who had access to the application but no longer has access

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
  subject: "Laura Goldman’s application has been transferred to another organisation - manage teacher training applications",
  content: "Dear James Bradley

Laura Goldman’s application to study English Literature (Y65RD) at Blackpool Teacher Training Academy has been transferred to another organisation.

They’re now applying to study English and Drama (T56DH) at Preston Teaching Guild.

# Get help

Get help, report a problem or give feedback at [becomingateacher@digital.education.gov.uk](mailto:becomingateacher@digital.education.gov.uk).
}) }}
<!-- markdownlint-enable MD025 MD001 -->

#### Email to a user who did not have access to the application but now has access

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
  subject: "Laura Goldman’s application has been transferred from another organisation - manage teacher training applications",
  content: "Dear James Bradley

Laura Goldman’s application to study English Literature (Y65RD) has been transferred from Blackpool Teacher Training Academy.

They’re now applying to study English and Drama (T56DH) at Preston Teaching Guild.

View the application:

https://qa.apply-for-teacher-training.service.gov.uk/provider/applications/8686

# Get help

Get help, report a problem or give feedback at [becomingateacher@digital.education.gov.uk](mailto:becomingateacher@digital.education.gov.uk).
}) }}

<!-- markdownlint-enable MD025 MD001 -->

## Future considerations

We plan to carry out user research to help us decide whether to:

- show details of upcoming interviews
- allow users to choose whether to change or cancel upcoming interviews
