---
title: Cancelling upcoming interviews when making decisions
description: Automatically cancelling any upcoming interviews when making an offer, rejecting an application or withdrawing an application
date: 2021-04-07
---

{% from "email/macro.njk" import appEmail %}

It's possible that there will still be upcoming interviews scheduled when a user makes an offer, rejects an application or withdraws an application.

This means that:

- users will see upcoming interviews for applications that have progressed beyond the interview stage
- candidates may think their interviews are still going ahead

To solve this problem we’ll:

- automatically cancel upcoming interviews when the user makes an offer, rejects an application or withdraws an application
- send an email to the candidate to tell them that each upcoming interview has been cancelled

There’s no need to cancel interviews when an application is automatically rejected. This is because users cannot set up an interview to take place after the automatic rejection date.

## The problem with cancelling interviews scheduled for today

The upcoming interviews list includes today’s interviews. This is intended to make it easy to find the details just before or after an interview has taken place.

The problem is that if the user makes an offer and we cancel an interview scheduled for today, that might result in cancelling an interview that has just taken place.

For example, if an interview was at 10am and an offer is made at 1pm then cancelling the interview would be misleading and confusing.

We won’t cancel interviews that are scheduled for the day on which the user makes an offer, rejects an application or withdraws an application.

### Solutions we discarded

#### Using the interview time to calculate upcoming interviews

This works by using the interview time to determine whether it’s upcoming or not.

If the interview is at 10am, then from 10:01am the interview would no longer be upcoming.

The problem with this is that the interview would suddenly disappear into the ‘past interviews’ list, which makes it harder for users to check the interview details just after the start time.

We may also not know the time of the interview as we’re planning to make this field optional when arranging an interview through our service.

#### Using the interview time plus one hour to calculate upcoming interviews

This works like the previous solution but allowing for an extra hour past the start time.

If the interview is at 10am, then from 11am the interview would no longer be upcoming.

This helps by preventing the interview from suddenly disappearing when the interview start time arrives.

But the 1 hour window is arbirtrary and means it’s hard for users to understand why the interview has disappeared. We do not ask users to enter the length of interviews, so we do not know what time they are scheduled to end.

## Generating reasons for cancelling an interview

When an interview is cancelled we’ll generate the cancellation reason based on the action that’s taken place.

- When an offer is made the reason will be ‘We made you an offer.’
- When an application is rejected the reason will be ‘Your application was unsuccessful.’
- When an application is withdrawn on behalf of the candidate the reason will be ‘You withdrew your application.’

The reason will be included in the interview cancellation email sent to the candidate.

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
 subject: "Interview cancelled - Florene Mayert Academy",
 content: "

Dear Pat Thomas

# Interview cancelled

Florene Mayert Academy has cancelled the interview on 28 April 2021 at 12am (midnight) about your application to study Biological Science.

They’ve given the following reason for cancelling the interview:

> We made you an offer.

Contact Florene Mayert Academy if you have any questions.

# Get support

You can chat to a Get Into Teaching adviser online for help and advice:

https://beta-getintoteaching.education.gov.uk/#talk-to-us

You can also call for free on 0800 389 2501, Monday to Friday, 8.30am to 5pm (except public holidays).

 "
}) }}

## Telling the user that upcoming interviews will be cancelled

When a user makes an offer, rejects an application or withdraws an application, if there are upcoming interviews then the ‘check answers’ page will say:

- ‘The upcoming interview will be cancelled.’ - if there’s one upcoming interview
- ‘Upcoming interviews will be cancelled.’ - if there’s more than one upcoming interview

## Cancelling an interview when the candidate withdraws their application

An upcoming interview can also be cancelled if a candidate withdraws their application.

In this case the reason will be ‘Candidate withdrew their application.’ This will appear on the timeline and activity log.

As usual, users will be notified about applications that have been withdrawn. We'll add a sentence to the email to let users know that upcoming interviews have been cancelled. It will say:

- ‘The upcoming interview with them has been cancelled.’ - if there’s one upcoming interview
- ‘The upcoming interviews with them have been cancelled.’ - if there’s more than one upcoming interview

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
 subject: "Interview cancelled - Florene Mayert Academy",
 content: "

Dear Roxane Kihn

# Application withdrawn

Kelsi Sawayn has withdrawn their application for Creative Arts (62CV).

https://qa.apply-for-teacher-training.service.gov.uk/provider/applications/8729

The upcoming interview with them has been cancelled.

# Get help, give feedback or report a problem

For an overview of Manage teacher training applications, see our Service guidance.

You can also contact us at becomingateacher@digital.education.gov.uk.

# Change your email notification settings

You can turn off email notifications if you do not want to be told when application statuses change:

https://qa.apply-for-teacher-training.service.gov.uk/provider/account/notification-settings

 "
}) }}

## Future considerations

It might be helpful to give users a page to see ‘today’s interviews’ separately from ‘upcoming interviews’.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Make offer check answers page when there are upcoming interviews",
    img: {
      src: "check-answers--make-offer.png"
    }
  }, {
    text: "Reject application check answers page when there are upcoming interviews",
    img: {
      src: "check-answers--reject-application.png"
    }
  }, {
    text: "Withdraw application check answers page when there are upcoming interviews",
    img: {
      src: "check-answers--withdraw-application.png"
    }
  }, {
    text: "Timeline showing cancelled interview and offer made events",
    img: {
      src: "timeline--offer-made.png"
    }
  }, {
    text: "Timeline showing cancelled interview and application rejected events",
    img: {
      src: "timeline--application-rejected.png"
    }
  }, {
    text: "Timeline showing cancelled interview and application withdrawn events",
    img: {
      src: "timeline--application-withdrawn.png"
    }
  }]
}) }}
