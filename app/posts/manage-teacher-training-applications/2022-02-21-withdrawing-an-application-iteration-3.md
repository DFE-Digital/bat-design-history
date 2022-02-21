---
title: Withdraw an application iteration 3
description: Changing the way withdraw application works to accomodate further reasons
date: 2022-02-21
screenshots:
  items:
    - text: Timeline
---

At the moment, we only let users withdraw an application at the candidate’s request.

This is a problem for defered offers that need to be confirmed because if a candidate has stopped responding to messages, the provider cannot withdraw the application.

As a result, the application would stay at the top of the application list waiting to be confirmed.

## What we changed

To give providers a way to withdraw an application at any point in the process we have changed ‘Withdraw at candidate’s request’ to ‘Withdraw application’ and changed the journey.

## How it works

The way it works depends on whether the provider has made an offer.

When the user clicks “Withdraw application” they’re asked to give a reason.

Before an offer is made the reasons are:

- Candidate asked to withdraw the application
- Other

If the user selects “Candidate asked to withdraw the application” they’re taken to a check answers page.

If the user selects “Other” they’re taken to an exit page saying that they need to reject the application.

After an offer is made the reasons are:

- Candidate asked to withdraw the application
- Did not reply to messages
- Other

If “Other” is selected, a text box is revealed to give details. This field is required.

Clicking the “Continue” button takes the user to the ‘check answers’ page.

The warning text is based on whether the candidate has upcoming interviews of not.

Clicking “Withdraw application” takes the user to the feedback page. It displays the feedback that was sent to the candidate.

## Further considerations

We want to consider:

### Changing the ‘withdraw offer’ flow

At the moment the ‘withdraw offer’ flow will end the application and give any feedback to the candidate.

But ‘withdraw application’ now gives users the same functionality. There’s no need to give users 2 methods to achieve the same thing. That’s confusing.

Also, we know that users expect ‘withdraw offer’ to undo the offer as opposed to end the application.

Therefore we want to consider changing the flow so that undoes the offer as opposed to ending the application.

### Position of ‘withdraw application’ link

Because ‘withdraw application’ gives users a way to end an application no matter the status, we want to consider moving the link to the top to make it a global action that’s accessible from any page of the application. Particularly the offer page.

### Clarifying the policy around deferrals

We need to consider the policy around deferrals.

### Removing the step to confirm a deferred offer

The majority of the time the offered course is available in the next cycle.

And a deferred offer is legally binding.

Given this, we don't think



### Getting candidates to confirm their place
