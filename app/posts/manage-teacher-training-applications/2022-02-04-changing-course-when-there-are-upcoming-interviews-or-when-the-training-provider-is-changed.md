---
title: Changing course when there are upcoming interviews or the training provider is changed
description: We added content to tell users what happens if they change the course for an application with upcoming interviews, or transfer an application to another training provider.
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
tags:
  - interviews
---

We recently designed a new flow to [let providers change the course before making an offer](/manage-teacher-training-applications/letting-providers-change-course-before-making-an-offer/).

We did not consider what happens if:

- there’s an upcoming interview
- the new course is run by a different provider

## What we changed

If the user changes the course to one run by a different training provider, the warning text tells them that emails will be sent to users at the old and new providers.

If there are upcoming interviews, the warning text tells the user that:

- the interviews will be updated with the new course details
- the candidate will be sent emails to tell them that the interviews have been updated

In other flows, such as making an offer, we do not mention separately that interviews will be cancelled. We just say that an email will be sent about the cancellation.

We think that here it’s important to emphasise that the interviews will be updated, since users may not expect it to happen. So we separately say that the interviews will be updated and mention it again when we say what emails will be sent.

## How it works

The content of the warning text depends on whether:

- there are upcoming interviews
- the new course is with a different training provider

We will not update the details of upcoming interviews if the only changes are to the training location or whether the course is part time or full time. So in this case we will not warn the user that the interviews are being changed.

### There are no upcoming interviews and the training provider is not being changed

The warning text content is:

> The candidate will be sent an email to tell them that the course has been updated.

### There are upcoming interviews but the training provider is not being changed

The warning text content is:

> The upcoming interview will be updated with the new course details.
> The candidate will be sent emails to tell them that the course and the upcoming interview have been updated.


If the only changes are to the training location or whether the course is full time or part time, the warning text content is:

>The candidate will be sent an email to tell them that the course has been updated.

### There are no upcoming interviews but the training provider is being changed

The warning text content is:

> Emails will be sent to:
>
> - the candidate, to tell them that the course has been updated
> - users at the new and old training providers, to tell them that the application has been transferred between organisations

### There are upcoming interviews and the training provider is being changed

The warning text content is:

>The upcoming interview will be updated with the new course details.
>
>Emails will be sent to:
>
> - the candidate, to tell them that the course and the upcoming interview have been updated
> - users at the new and old training providers, to tell them that the application has been transferred between organisations

If the only changes are to the training location or whether the course is full time or part time, the warning text content is:

> Emails will be sent to:
>
> - the candidate, to tell them that the course has been updated
> - users at the new and old training providers, to tell them that the application has been transferred between organisations

## Future considerations

We need to write content for the emails which will be sent when the training provider is changed.

We also plan to carry out user research to help us decide whether to:

- show details of upcoming interviews
- allow users to choose whether to change or cancel upcoming interviews
