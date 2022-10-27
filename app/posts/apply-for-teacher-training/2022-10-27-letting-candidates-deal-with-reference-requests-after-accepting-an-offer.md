---
title: Letting candidates deal with reference requests after accepting an offer
description: Candidates can check the status of requests, send reminders, request more references and cancel requests.
date: 2022-10-27
related:
  items:
    - text: Summary of candidate research for the new references process
      href: https://docs.google.com/presentation/d/13gbxJk6S6j21MCtHN2B4E4-NM_BydZWqIX9SycDYoEk/edit#slide=id.g14472665577_1_98
---

{% from "email/macro.njk" import appEmail %}

We’ve [changed the references process](/changing-the-reference-process-to-make-it-easier-for-candidates-to-submit-applications) so that candidates do not need to receive references before they submit their application. They instead need to give details of 2 people who can give a reference.

When they accept an offer, candidates are given the chance to change these details before the requests are sent out.

## The issue

Previously a candidate had to request and receive references before submitting their application. Once they’d requested references they could click into the references task in their application to:

- check the status of their reference requests
- add reference requests
- cancel reference requests
- send reminders to people who they’d asked for references but who had not given one yet

Candidates now only need to request references after they accept an offer. They cannot click into the task in their application because they’ve already submitted it.

We needed to design a way for candidates to deal with their reference requests after accepting an offer.

## What we changed

After the candidate has accepted an offer, they’re taken to a page with the h1 heading ‘Your teacher training course’. They will return to the same page if they leave the service and sign in again.

We made changes to this page. We also designed a new page to show the details of a reference request.

### ‘Your teacher training course’ page

![TODO](your-course.png)

Content at the top of this page lists the course and provider for the offer which the candidate has accepted.

Links on the right let them view or withdraw their application. These functions have not been changed.

The page has 2 subheadings, references and offer conditions.

The references section lists the candidate’s reference requests. For each one it includes:

- name - this has a link which leads to a reference request details page
- status
- additional information - depending on the status of the request
- links to cancel or send a reminder - depending on the status of the request

There’s also a grey button which lets a candidate request another reference.

#### Statuses

![TODO](all-statuses.png)

The status of a request can be:

- not sent - if the candidate started a new reference request and saved the person’s name but did not send the request
- reference requested
- received by training provider
- request cancelled - candidates can cancel requests, and they are automatically cancelled if the application is withdrawn or the candidate does not meet their conditions
- cannot give reference - if the person asked to give a reference said they could not do so
- request failed - if the email bounced

#### Additional information

The additional information shown is:

- the date when the request was sent or the date of the most recent reminder - if it has reference requested status
- the message "Email could not be sent - check email address and send again” - if it has request failed status

#### Links to cancel or send a reminder

If it’s in reference requested status, a reference request has:

- a link to cancel the request
- a link to send a reminder if it’s been at least 48 hours since the request was made or a reminder was sent

We added these links even though the candidate can do the same things on the reference details page. We know from analytics that in the past some users have been unaware that they can send a reminder and have tried to add a reference again instead.

If the candidate clicks one of these links, they’re taken to a page to confirm the action. After they click the button to confirm, they’re returned to the ‘Your teacher training course’ page.

The reference request will have changed status to ‘request cancelled’ if the candidate cancelled it.

### Reference details page

![TODO](request-details.png)

If the candidate clicks the link on the name of someone they asked for a reference, they go to a  page showing:

- name
- email
- type - this can be academic, professional, school experience or character
- how the candidate knows the person giving the reference and how long they’ve known them
- status
- history

A history entry is added every time the status of a request changes or a reminder is sent.

- “Request sent on ((date))” when the status changes to ‘requested’
- “Reference sent to provider on ((date))” when the status changes to ‘received by training provider’
- “Request cancelled on ((date))” when the status changes to ‘request cancelled‘
- “Request declined on ((date))” when the status changes to ‘cannot give reference’
- “The request did not reach ((address)) on ((date))” when the status changes to ‘request failed’
- “Reminder sent on ((date))” when the candidate sends a reminder
- “Automated reminder sent on ((date))” when the service sends an automated reminder

## Other approaches we considered

We considered including references within the conditions section of the page, but decided to give them a separate section.

They’re different to other conditions because:

- candidates can add reference requests, but training providers cannot add conditions once an offer has been accepted
- candidates cannot take any action on conditions within the service, but they can cancel or send reminders about reference requests

## Emails

The service sends emails to candidates:

- if a reference request cannot be sent
- if someone says that they cannot give a reference
- to remind the candidate that they haven’t received a reference

<!-- markdownlint-disable MD001 MD025 MD042 MD051 -->

### Reference request cannot be sent

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

((provider)) must check your references before they can confirm your place on the course. Contact them if you need help getting references or choosing who to ask.

# Get help

Call 0800 389 2500 or [chat online]

Monday to Friday, 8:30am to 5:30pm (except public holidays)."
}) }}

### The person who received the request cannot give a reference

{{ appEmail({
  subject: "((referee)) is unable to give you a reference",
  content: "

Dear ((candidate_name))

((referee)) has said that they’re unable to give you a reference.

It’s important that ((provider)) receives your references as soon as possible.

You can sign into your account to request a reference from someone else.

[Sign into your account].

((provider)) must check your references before they can confirm your place on the course. Contact them if you need help getting references or choosing who to ask.

# Get help

Call 0800 389 2500 or [chat online]

Monday to Friday, 8:30am to 5:30pm (except public holidays)."
}) }}

### Reminder that the candidate has not received a reference

Reminders are sent to the candidate 9, 16 and 30 days after they requested a reference. Each of these is 2 days later than the reminders which are sent to the people who received reference requests.

The 3 reminders sent to candidates have slightly different content. The intention is that the message becomes more urgent as time passes.

#### Reminder after 9 days

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

((provider)) must check your references before they can confirm your place on the course. Contact them if you need help getting references or choosing who to ask.

# Get help

Call 0800 389 2500 or [chat online]

Monday to Friday, 8:30am to 5:30pm (except public holidays)."
}) }}

#### Reminder after 16 days

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

((provider)) must check your references before they can confirm your place on the course. Contact them if you need help getting references or choosing who to ask.

# Get help

Call 0800 389 2500 or [chat online]

Monday to Friday, 8:30am to 5:30pm (except public holidays)."
}) }}

#### Reminder after 30 days

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

Contact ((provider)) if you need help getting references or choosing who to ask.

# Get help

Call 0800 389 2500 or [chat online]

Monday to Friday, 8:30am to 5:30pm (except public holidays)."
}) }}

<!-- markdownlint-enable MD001 MD025 MD042 MD051 -->

## Further work

We’ve improved the wording of the history entries and the change is in the backlog of development work.

Later we intend to improve the way that providers enter reference requirements.

### Improved history entries

We’re going to make the history entries clearer and distinguish between different types of automatic cancellation.

The new wording will be:

- “You sent the request on ((date))”
- “They gave a reference to the training provider on ((date))”
- “You cancelled the request on ((date))”
- “The request was automatically cancelled because you withdrew your application on ((date))”
- “The request was automatically cancelled because you did not meet your conditions on ((date))”
- “The request was automatically cancelled because your offer was withdrawn on ((date))”
- “They said they cannot give reference on ((date))”
- “The request failed on ((date))”
- “A reminder was automatically sent on ((date))”
- “You sent a reminder on ((date))”

### Entering reference requirements

Currently providers can add information about their reference requirements as a condition. For example they may want to:

- give a deadline
- ask the candidate to request a reference from a specific employer

If a provider does this, the information appears as a condition within the candidate interface.

It may be confusing for references to be mentioned both in the offer conditions and in their own specific section.

We’d like to improve this by asking providers for reference requirements in a more structured way. This would allow us to display the additional information within the references section.
