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
---

{% from "email/macro.njk" import appEmail %}

We recently designed a new flow to [let providers change the course before making an offer](https://bat-design-history.netlify.app/manage-teacher-training-applications/letting-providers-change-course-before-making-an-offer/).

We did not consider what happens if:

- there’s an upcoming interview
- the new course is run by a different provider

## What we changed

We added warning text to tell users that if there are upcoming interviews:

- the interviews will be updated with the new course details
- the candidate will be sent emails to tell them that the interviews have been updated

If the user changes the course to one run by a different training provider, the warning text will tell them that emails will be sent to users at the old and new providers.

We think it’s important to be clear that upcoming interviews will be changed, as users may not expect it to happen. We have emphasised this by putting it first in the warning text.

This is different from other flows such as making an offer, where we mention that interviews will be cancelled but do not put it first. We think that the information is less important in those flows.

## How it works

The content of the warning text depends on whether there will be:

- changes to upcoming interviews
- a change of training provider

We only warn users about changes to upcoming interviews if they’re changing the course.

### No changes to upcoming interviews and no change of training provider

The warning text content is:

> The candidate will be sent an email to tell them that the course has been updated.

### Changes to upcoming interviews but no change of training provider

The warning text content is:

> The upcoming interview will be updated with the new course details.
>
> The candidate will be sent emails to tell them that the course and the upcoming interview have been updated.

### No changes to upcoming interviews but there’s a change of training provider

The warning text content is:

> Emails will be sent to:
> - the candidate, to tell them that the course has been updated
> - users at the new and old training providers, to tell them that the application has been transferred between organisations

### Changes to upcoming interviews and a change of training provider

The warning text content is:

> The upcoming interview will be updated with the new course details.
>
> Emails will be sent to:
> - the candidate, to tell them that the course and the upcoming interview have been updated
> - users at the new and old training providers, to tell them that the application has been transferred between organisations

## Future considerations

We plan to carry out user research to help us decide whether to:

- show details of upcoming interviews
- allow users to choose whether to change or cancel upcoming interviews

We’ll need to write content for the emails which will be sent when the training provider is changed.
