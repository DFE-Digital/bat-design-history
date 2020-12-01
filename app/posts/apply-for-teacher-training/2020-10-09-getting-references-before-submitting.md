---
title: Getting references before submitting an application
description: Removing the delay between submitting an application and it reaching providers.
date: 2020-10-09
tags:
- AN024
- AN023
- AN013
- AN010
related:
  items:
  - text: 💔 Decoupled references
    href: https://trello.com/c/bPmL433p
    description: Card on Trello that captures all of the work we did to research, design and implement this change.
---

Obtaining references is a pain point for many candidates. Identifying appropriate referees can be difficult, especially for recent graduates and candidates who have been out of the workplace. Once they have been identified, ensuring they respond, can again be challenging.

## Our initial approach

For the 2019/20 cycle, we deviated from UCAS’ reference process. Instead of preventing candidates from submitting their application until they had 2 complete references, we allowed them to complete their application, only contacting referees after submission.

By the time the 2019/20 recruitment cycle had closed:

* 687 candidates had received references.
* The average time for getting a reference was 6 days
* 97.8% of candidates that received references got them within 30 days
* 86 candidates were still waiting for references. Of these, 11 had waited longer than 30 days.

Our initial design intended to make the process easier for candidates, but instead made it more opaque; many candidates believed applications were sent directly to the provider when they pressed ‘Submit’, not put in a holding state while we waited for their references to come back.

Once candidates understood that any delay in getting a reference would prevent an application from reaching a provider, the process became frustrating. Candidates felt powerless while waiting on a third-party, unable to control their own destiny.

Further issues with this process became evident towards the end of the recruitment cycle:

* 89 courses were full by the time references were returned for 60 candidates (as of early July 2020). We tried to mitigate this situation by [giving candidates the option to replace a course choice](/apply-for-teacher-training/course-full-after-submitting-initial-approach/), but no candidate used this feature.

* The Apply deadline was moved forwards 2 weeks to account for the average delay in getting a reference. This in turn required additional business rules and communications with candidates, and introduced additional complexity and confusion given the UCAS journey maintained the original deadline.

## Decoupling references from the application process

To address these issues, we considered designing a system which would allow us to ‘decouple’ references from the point of submission.

What if candidates could request references before, or after submitting an application, with references attached to an application as they arrived? Maybe references could be made a condition for an offer?

However, given prior research with providers, we know there are some constraints with this approach:

* Providers want to see 2 references when they review an application
* While we are dual-running with UCAS we can’t deviate too far from the existing business rules. This is to maintain fairness; candidates applying via UCAS would have references, while candidates coming via our service may not.

With these constraints in place, even if we allowed candidates to request references before or after submitting, we still wouldn’t be able to send an application to providers until both references had been given. The most pressing issue would remain, with some candidates waiting for references while their course choices became full.

## Recoupling references

This left one remaining option: asking candidates to request and receive their references before submitting their application.

If we also removed the 7-day edit window (which was rarely used), the issue of candidates applying for courses that become full after submission would be eliminated. It would also meet candidates expectations of what happens after they submit their application.

There are downsides of this approach, however. Any delays in getting a reference would come earlier in the journey, which may discourage candidates from continuing their application. And it does not address the issue of candidates feeling powerless, with no control over the process.

We can address this last issue by:

* allowing candidates to request references from more than 2 referees, increasing their chances of a response
* allowing candidates to send a reminder email at any point before a reference is given (in addition to the automated ones we send at 7 and 28 days)
* making the process more transparent, showing a history of emails that have been sent

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Hypotheses

If we ask candidates to get their references before submitting (and remove the 7-day edit window)
Then candidates will be more likely to get a place with their favoured provider
Because their application will not be delayed by a wait for references

If we move the references section from last position to being the second item in the task list
Then candidates will request references earlier in the process
Because they will see this section earlier

If we allow candidates to make many reference requests
Then candidates will increase their chances of getting 2 references back quickly
Because they will enter more referees

If we allow candidates to send a reminder email
Then candidates will feel more in control of the process
Because they can send it at the time of their choosing

If we show a history of events that occur during a reference request
Then candidates will feel more in control of the process
Because they can make informed judgement about the progress of their request

If we make it clearer that after submitting an application is sent directly to the provider
Then candidates will feel more in control of the process
Because there will no longer be any ambiguity around the process (especially for candidates applying again across cycles)

We’ll know these changes work if:

* The overall time it takes to get a reference is reduced
* The overall time it takes to complete an application is reduced
* The overall time it takes for a candidate to start an application to it reaching a provider is reduced

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  title: "Design: Requesting a reference",
  headingLevel: 2,
  items: [{
    id: "your-application-incomplete",
    text: "‘Your application’ page with no reference requests made or started",
    caption: "While incomplete the prompt for this section is ‘Add your references’."
  }, {
    id: "request-start",
    text: "Choose your referees",
    caption: "Before adding a referee, we give some guidance about academic and character references, suggest contacting referees beforehand, and remind candidates that they can make as many requests as they like."
  }, {
    id: "request-type",
    text: "What kind of referee do you want to add?"
  }, {
    id: "request-name",
    text: "What is the referee’s name?"
  }, {
    id: "request-email",
    text: "What is the referee’s email address?"
  }, {
    id: "request-relationship",
    text: "How do you know this referee and how long have you known them?"
  }, {
    id: "request-review",
    text: "Check your answers before sending your request",
    caption: "Candidates have the option to request a reference now, or at a later date."
  }, {
    id: "request-candidate-name",
    text: "Tell the referee your name",
    caption: "If the candidate hasn’t added their personal details yet, we ask for their first and last name before sending a reference request. This information will populate the same questions in the ‘Personal details’ section."
  }]
}) }}

{{ appScreenshots({
  title: "Design: Tracking and managing reference requests",
  headingLevel: 2,
  items: [{
    id: "your-application-in-progress",
    text: "‘Your application’ page with requests in progress",
    caption: "While in progress the prompt for this section is ‘Manage your references’."
  }, {
    id: "review-in-progress",
    text: "Reviewing references in progress",
    caption: "Until 2 references have been given, candidates have the option to add another referee"
  }, {
    id: "summary-not-requested-yet",
    text: "Reference summary card: Not requested yet",
    caption: "In this state, a referee can be deleted, or the request can be sent."
  }, {
    id: "summary-awaiting-response",
    text: "Reference summary card: Awaiting response",
    caption: "In this state, a reference can be cancelled. Candidates can also send a reminder if they haven’t done so yet."
  }, {
    id: "summary-reference-overdue",
    text: "Reference summary card: Reference overdue",
    caption: "In this state, a reference can be cancelled. Candidates can also send a reminder if they haven’t done so yet."
  }, {
    id: "summary-reference-declined",
    text: "Reference summary card: Reference declined",
    caption: "In this state, a reference can be deleted."
  }, {
    id: "summary-request-failed",
    text: "Reference summary card: Request failed",
    caption: "In this state, a reference can be deleted. Candidates can also edit the email address and/or send their request again."
  }, {
    id: "summary-request-cancelled",
    text: "Reference summary card: Request cancelled",
    caption: "In this state (resulting if the candidate cancels their request, or cancelled by us in the application has been carried over from the previous cycle), a reference can be deleted. Candidates can also send their request again."
  }, {
    id: "summary-reference-given",
    text: "Reference summary card: Reference given"
  }, {
    id: "action-delete-referee",
    text: "Delete a referee"
  }, {
    id: "action-request",
    text: "Request a reference"
  }, {
    id: "action-nudge",
    text: "Send a reminder email",
    caption: "This page shows the date the next automated reminder will be sent, so that candidates don’t send an unnecessary reminder."
  }, {
    id: "action-cancel",
    text: "Cancel a reference request"
  }, {
    id: "action-delete-request",
    text: "Delete a reference request"
  }]
}) }}

{{ appScreenshots({
  title: "Design: Submitting an application",
  headingLevel: 2,
  items: [{
    id: "your-application-completed",
    text: "‘Your application’ page with 2 references given",
    caption: "When completed the prompt for this section is ‘Review your references’."
  }, {
    id: "review-completed",
    text: "Reviewing completed references"
  }, {
    id: "review-your-application",
    text: "’Review your application’ page with only the 2 given references shown",
    caption: "When reviewing an application, only given references are shown, and reference summary cards do not show the request history."
  }, {
    id: "send-application",
    text: "‘Send application’ page",
    caption: "Content has been updated to say ‘Send application’ rather than ‘Submit application’, and to make it clear that it will be sent directly to the provider(s)."
  }, {
    id: "confirmation",
    text: "Confirmation page",
    caption: "Content has been updated to remove the previous guidance about chasing references."
  }]
}) }}

## Emails

### Response overdue

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "((referee_name)) has not responded yet",
  content: "#### ((referee_name)) has not responded yet

  You can add as many referees as you like to increase the chances of getting 2 references quickly.

  You can also send one reminder to each referee from your account.

  Manage your references:

  ((manage_references_url))

  You cannot submit your application without 2 references. Courses can become full anytime - get your references as soon as possible."
}) }}

### Reference request failed

{{ appEmail({
  subject: "Referee request did not reach ((referee_name))",
  content: "#### Referee request did not reach ((referee_name))

  Check you gave the correct email address and request the reference again.

  You can add as many referees as you like to increase the chances of getting 2 references quickly.

  You can also send one reminder to each referee from your account.

  Manage your references:

  ((manage_references_url))

  You cannot submit your application without 2 references. Courses can become full anytime – get your references as soon as possible."
}) }}

### Reference declined

{{ appEmail({
  subject: "((referee_name)) has declined your reference request",
  content: "#### ((referee_name)) has declined your reference request

  You can add as many referees as you like to increase the chances of getting 2 references quickly.

  You can also send one reminder to each referee from your account.

  Manage your references:

  ((manage_references_url))

  You cannot submit your application without 2 references. Courses can become full anytime – get your references as soon as possible."
}) }}

### Reference given

{{ appEmail({
  subject: "You have a reference from ((referee_name))",
  content: "#### You have a reference from ((referee_name))

  You need to get another reference back before you can send your application to training providers.

  You can add as many referees as you like to increase the chances of getting 2 references quickly.

  Manage your references:

  ((manage_references_url))"
}) }}

### Second references given

{{ appEmail({
  subject: "You have a reference from ((referee_name))",
  content: "#### You have a reference from ((referee_name))

  You’ve got 2 references back now.

  When you’re ready, you can send your application to training providers.

  Sign in to continue your application:

  ((dashboard_url))"
}) }}
