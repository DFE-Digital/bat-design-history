---
title: Withdraw an application iteration 3
description: Allowing users to withdraw an application after making an offer, even if the candidate has not asked them to do so.
date: 2022-02-21
screenshots:
  items:
    - text: Timeline
---

At the moment we only let users withdraw an application at the candidate’s request.

This is a problem for defered offers that need to be confirmed. If a candidate has stopped responding to messages then the provider cannot withdraw the application.

As a result, the application stays at the top of the application list waiting to be confirmed.

## What we changed

To give providers a way to withdraw an application at any point in the process we’ve changed ‘Withdraw at candidate’s request’ to ‘Withdraw application’. We’ve also changed the journey which users enter after clicking the link.

## How it works

When the user clicks ‘Withdraw application’ they’re asked to give a reason. The reasons available and the journey which follows depend on whether the provider has made an offer.

### The provider has not made an offer

Before an offer is made the reasons for withdrawing an application are:

- Candidate asked to withdraw the application
- Other

If the user selects ‘Candidate asked to withdraw the application’ they’re taken to a check answers page.

If the user selects ‘Other’ they’re taken to a page saying that they need to reject the application instead.

### The provider has made an offer

After an offer has been made the reasons for withdrawing an application are:

- Candidate asked to withdraw the application
- Candidate did not reply to messages
- Other

If the user selects ‘Other’, a text box is revealed so they can give details. This field is required.

Clicking the “Continue” button takes the user to the ‘check answers’ page.

The warning text on the page is based on whether the candidate has upcoming interviews. The possible versions of the text are:

- The candidate will be sent an email to tell them why you withdrew their application.
- The candidate will be sent emails to tell them why you withdrew their application and that the upcoming interview has been cancelled.
- The candidate will be sent emails to tell them why you withdrew their application and that the upcoming interviews have been cancelled.

Clicking ‘Withdraw application’ on the check answers page takes the user to the feedback page. It displays the feedback that was sent to the candidate. A flash message tells the user that the application has been withdrawn.

## Further considerations

We want to consider:

- changing the ‘withdraw offer’ flow
- moving the ‘withdraw application’ link
- removing the need to confirm a deferred offer
- asking candidates to confirm that they want to take up their deferred offer

### Changing the ‘withdraw offer’ flow

At the moment the ‘withdraw offer’ flow will end the application and give any feedback to the candidate.

But ‘withdraw application’ now gives users the same functionality. It’s confusing to give users 2 methods to achieve the same thing.

We also know that some users expect ‘withdraw offer’ to undo the offer rather than end the application. So we want to consider changing the ‘withdraw offer’ flow so that it undoes the offer rather than ending the application.

### Moving the ‘withdraw application’ link

Since ‘withdraw application’ gives users a way to end an application no matter the status, we want to consider moving the link to the top to make it accessible from any page of the application.

### Removing the need to confirm a deferred offer

An offer is legally binding, even if it’s deferred.

We currently ask users to confirm deferred offers in case the course is no longer available. We could instead automatically confirm deferred offers if the case is available in the new recruitment cycle.

### Asking candidates to confirm that they want to take up their deferred offer

We could ask candidates whether they still want to study the course at the start of the new recruitment cycle.
