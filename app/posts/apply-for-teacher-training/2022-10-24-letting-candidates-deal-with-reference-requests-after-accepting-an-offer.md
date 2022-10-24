---
title: Letting candidates deal with reference requests after accepting an offer
description: Candidates can check the status of requests, request more references, cancel requests and send reminders.
date: 2022-10-20
---

{% from "email/macro.njk" import appEmail %}

We’ve [changed the references process](/changing-the-reference-process-to-make-it-easier-for-candidates-to-submit-applications) so that candidates:

- only need to give details of people who can give references, rather than having to request and receive references
- have to confirm these details when they accept an offer, so that reference requests can be sent
- can deal with reference requests after they accept an offer - this includes checking the status of requests, requesting more, cancelling requests and sending reminders

## The issue

Previously a candidate had to request and receive references before submitting their application. Once they’d requested references they could click into the references task in their application to:

- check the status of their reference requests
- add reference requests
- cancel reference requests
- send reminders to people who they’d asked for references but who had not given one yet

Candidates now only need to request references after they accept an offer. They cannot click into the task in their application because they’ve already submitted it.

We needed to design a way for candidates to check the status of their reference  requests after accepting an offer.

## What we changed

After the candidate has accepted an offer, they’re taken to a page with the h1 heading ‘Your teacher training course’. They will return to the same page if they leave the service and sign in again.

We made changes to this

### ‘Your teacher training course’ page

Content at the top of this page tells the candidate the course and provider for the offer they’ve accepted.

Links on the right let them view or withdraw their application. These functions have not been changed.

The dashboard has 2 sections, references and conditions. Each reference request appears as a row in a list, and includes:

- name - this can be clicked and leads to a reference request details page
- history of the reference request - the date when the request was sent or the date of the most recent reminder
- status
- a link to cancel the request if it has ‘reference requested’ status
- a link to send a reminder if the request has ‘reference requested’ status and it’s been at least 48 hours since the request was made or a reminder was sent

The status of a request can be:

- not sent - if the candidate entered a name for a new reference but did not complete the process by sending the request
- reference requested
- received by training provider
- request cancelled - candidates can cancel requests, and they are automatically cancelled if the application is withdrawn or the candidate does not meet their conditions
- cannot give reference - if the person asked to give a reference said they could not do so
- request failed - if the email bounced

There’s also a button which lets a candidate request another reference.

### Links to cancel or send a reminder

We added these links even though the candidate can do the same things on the reference details page. We know from analytics that some users are unaware that they can send a reminder and try to add a reference again instead.

If the candidate clicks one of these links, they’re taken to a page to confirm it. After they click the button to confirm, they’re returned to the candidate dashboard.

The reference request will have changed status to ‘request cancelled’ if the candidate cancelled it.

### Reference details page

## Other approaches we considered

We considered including references within the conditions section of the page, but decided to give them a separate section. They’re different to other conditions because:

- candidates can add reference requests, but training providers cannot add conditions once an offer have been accepted
- candidates cannot take any action on conditions within the service, but they can cancel or send reminders about reference requests

## Emails

The service sends emails:

- if a reference request cannot be sent
- to remind the candidate that they haven’t received a reference

### Reference request cannot be sent

<!-- markdownlint-disable MD001 MD025 MD042 MD051 -->

{{ appEmail({
  subject: "((referee)) has not received your request for a reference",
  content: "

Dear ((candidate_name))

You asked ((referee)) for a reference for your teacher training application.

Your request did not reach ((referee)). This could be because:

- there’s a problem with their email service
- you entered the wrong email address

It’s important that ((provider)) receives your references as soon as possible.

You can sign into your account to:

- request the reference again - check the email address before you do this
- ask someone else for a reference

[Sign into your account].

((provider)) must check your references before they can confirm your place on the course. Contact them if you need help getting references or choosing who to ask."
}) }}

<!-- markdownlint-enable MD001 MD025 MD042 MD051 -->

### Reminder that the candidate has not received a reference

Reminders are sent to the candidate 9, 16 and 30 days after they requested a reference.

The 3 reminders have slightly different content. The intention is that the message becomes more urgent as time passes.

#### Reminder after 9 days

<!-- markdownlint-disable MD001 MD025 MD042 MD051 -->

{{ appEmail({
  subject: "((referee)) has not replied to your request for a reference",
  content: "

Dear ((candidate_name))

You asked ((referee)) for a reference for your teacher training application. They have not replied yet.

You can sign into your account to:

- send them an email to remind them that you’ve asked for a reference
- cancel the request for a reference
- ask someone else for a reference

[Sign into your account].

((provider)) must check your references before they can confirm your place on the course. Contact them if you need help getting references or choosing who to ask."
}) }}

<!-- markdownlint-enable MD001 MD025 MD042 MD051 -->

#### Reminder after 16 days

<!-- markdownlint-disable MD001 MD025 MD042 MD051 -->

{{ appEmail({
  subject: "((referee)) has not replied to your request for a reference",
  content: "

You asked ((referee)) for a reference for your teacher training application. They have not replied yet.

It’s important that ((provider)) receives your references as soon as possible.

You can sign into your account to:

- send them an email to remind them that you’ve asked for a reference
- cancel the request for a reference
- ask someone else for a reference

[Sign into your account].

((provider)) must check your references before they can confirm your place on the course. Contact them if you need help getting references or choosing who to ask."
}) }}

<!-- markdownlint-enable MD001 MD025 MD042 MD051 -->

#### Reminder after 30 days

<!-- markdownlint-disable MD001 MD025 MD042 MD051 -->

{{ appEmail({
  subject: "((referee)) has not replied to your request for a reference",
  content: "

You asked ((referee)) for a reference for your teacher training application. They have not replied yet.

((provider)) needs to check your references before they can confirm your place on the course.

You can sign into your account to:

- ask someone else for a reference
- send them an email to remind them that you’ve asked for a reference
- cancel the request for a reference

[Sign into your account].

Contact ((provider)) if you need help getting references or choosing who to ask."
}) }}

<!-- markdownlint-enable MD001 MD025 MD042 MD051 -->

## Further work

Currently providers can add information about their reference requirements as a condition. For example they may want to:

- give a deadline
- ask the candidate to request for a reference from a specific employer

If a provider does this, the information appears as a condition within the candidate interface. This may be confusing, particularly since emails tell candidates that they must meet conditions and provide references.

We’d like to improve this by asking providers for reference requirements in a more structured way. This would allow us to display it within the references section.
