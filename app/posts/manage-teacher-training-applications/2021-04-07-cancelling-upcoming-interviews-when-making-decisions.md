---
title: Cancelling upcoming interviews when making decisions
description: Automatically cancelling any upcoming interviews when making an offer or rejecting or withdrawing an application
date: 2021-04-07
---
<!-- This keeps users in control so that they can progress an application if, for example, a candidate doesn’t turn up for the interview. -->

At the moment, users can make an offer, reject an application or withdraw an application when there’s an upcoming interview.

This means that:

- users will see upcoming interviews for applicatins that have progressed beyond the interview stage
- candidates may think their interview is still going ahead

To solve this problem we’ll:

- cancel upcoming interviews when the user makes an offer, rejects an application or withdraws an application
- send an email to the candidate to tell them that their interview has been cancelled

## The problem with cancelling upcoming interviews that are today

The upcoming interviews list includes today’s interviews to make them easy to access just before or after the interview has taken place.

The problem with this is that if the user makes an offer and we cancel the interview, that might result in cancelling an interview that has just taken place.

For example, if an interview was at 10am and at 1pm an offer is made, cancelling the interview would be misleading and confusing.

Because of this, we won’t cancel interviews that are today.

### Solutions we discarded

#### Using the interview time to calculate upcoming interviews

This works by using the interview time to determine whether it’s upcoming or not.

If the interview is at 10am, once it’s 11am the interview is no longer upcoming.

The problem with this is that the interview would suddenly disappear into the ‘past interviews’ list which hinders users from checking the interview details just before or after the interview start time.

We may also not know the time of interview as we’re planning on making this field optional when arranging an interview through our service.

#### Using the interview time plus one hour to calculate upcoming interviews

This works like the previous solution but allowing for an extra hour past the start time.

If the interview is at 10am, once it’s 11am the interview is no longer upcoming.

This helps by preventing the interview from suddenly disappearing when the interview start time arrives.

But the 1 hour window is arbirtrary and means it’s hard for users to understand why it’s disappeared.

And as mentioned above, we’re planning on making the time field optional, which means we cannot base the solution on the exact time.

## Generating reasons for cancelling an interview

When an interview is cancelled we’ll generate the cancellation reason based on the action that’s taken place.

- When an offer is made the reason will be ‘We made you an offer.’
- When an application is rejected the reason will be ‘Your application was unsuccessful.’
- When an application is withdrawn the reason will be ‘You withdrew your application.’

## Telling the user that upcoming interviews will be cancelled

When a user goes to make an offer, reject an application or withdraw an application, if there are upcoming interviews we’ll tell the user on the ‘check answers’ page that they’ll be cancelled.

If there’s one upcoming interview it’ll say ‘The upcoming interview will be cancelled.’. If there’s more than one upcoming interview it’ll say ‘Upcoming interviews will be cancelled.’

## Cancelling an interview when the candidate withdraws their application

An upcoming interview can also be cancelled if a candidate withdraws their application. In this case the reason will be ‘Candidate withdrew their application.’ which will appear on the timeline and activity log.

As per normal, users will be notified about applications that have been withdrawn.

## Future considerations

It might be helpful to give users a page to see ‘today’s interviews’ separately from ‘upcoming interviews’.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Make offer ‘check answers’ page when there’s an upcoming interview",
    img: {
      src: "check-answers--make-offer.png"
    }
  }, {
    text: "Reject application ‘check answers’ page when there’s an upcoming interview",
    img: {
      src: "check-answers--reject-application.png"
    }
  }, {
    text: "Withdraw application ‘check answers’ page when there’s an upcoming interview",
    img: {
      src: "check-answers--withdraw-application.png"
    }
  }, {
    text: "Timeline showing ‘interview cancelled’ and ‘offer made’ events",
    img: {
      src: "timeline--offer-made.png"
    }
  }, {
    text: "Timeline showing ‘interview cancelled’ and ‘application rejected’ events",
    img: {
      src: "timeline--application-rejected.png"
    }
  }, {
    text: "Timeline showing ‘interview cancelled’ and ‘application withdrawn’ events",
    img: {
      src: "timeline--application-withdrawn.png"
    }
  }]
}) }}
