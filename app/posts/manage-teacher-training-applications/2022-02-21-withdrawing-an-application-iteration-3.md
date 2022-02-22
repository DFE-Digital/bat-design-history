---
title: Withdraw an application iteration 3
description: Allowing users to withdraw an application after making an offer, even if the candidate has not asked them to do so.
date: 2022-02-21
screenshots:
  items:
    - text: Application details
    - text: Reasons (before offer)
      src: reasons.png
    - text: Check answers (before offer)
      src: check-answers.png
    - text: Exit page
      src: exit.png
    - text: Reject application
      src: reject.png
    - text: Reasons (after offer)
      src: reasons--offered.png
    - text: Check answers (after offer)
      src: check-answers--offered.png
    - text: Feedback
---

At the moment we only let users withdraw an application at the candidate’s request.

This is a problem for defered offers that need to be confirmed. If a candidate has stopped responding to messages then the provider cannot withdraw the application.

As a result, the application stays at the top of the application list waiting to be confirmed.

## What we changed

We changed ‘Withdraw at candidate’s request’ to ‘Withdraw application’ to give providers a way to withdraw an application at any point.

We also changed the pages within the withdrawal journey.

## How it works

When the user withdraws an application they’re asked to give a reason. The reasons available and the journey which follows depend on whether the provider has made an offer.

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

Clicking ‘Continue’ takes the user to the check answers page.

The warning text on the page is based on whether the candidate has upcoming interviews. The possible versions of the text are:

- The candidate will be sent an email to tell them why you withdrew their application.
- The candidate will be sent emails to tell them why you withdrew their application and that the upcoming interview has been cancelled.
- The candidate will be sent emails to tell them why you withdrew their application and that the upcoming interviews have been cancelled.

Clicking ‘Withdraw application’ on the check answers page takes the user to the feedback page. It displays the feedback that was sent to the candidate. A success message tells the user that the application has been withdrawn.

## Further considerations

We want to consider:

- changing the withdraw offer flow
- moving the link to withdraw an application
- removing the need to confirm a deferred offer
- asking candidates to confirm that they want to take up their deferred offer

### Changing the withdraw offer flow

At the moment the withdraw offer flow ends the application and sends feedback to the candidate.

Since the newly designed withdraw application flow lets users withdraw an application after an offer has been made, there are now 2 ways to achieve the same thing.

We also know that some users expect withdrawing an offer to undo the offer rather than end the application.

So we want to consider changing the flow so that it cancels the offer without ending the application. This would revert the application back to its previous status.

### Moving the link to withdraw application

The withdraw application flow gives users a way to end an application in any status.

We want to consider moving the link to the top to make it accessible from any page of the application.

### Removing the need to confirm a deferred offer

When we initially added the flow for deferring an offer, we added a step that meant providers would have to confirm the deferred offer at the start of the next recruitment cycle.

This was because the course may not be available in the next recruitment cycle.

We intended that providers would confirm deferred offers at the start of the next recruitment cycle without speaking to the candidate.

However, research shows that many providers contact the candidate before confirming their deferred offer in order to make sure they intend to take up their place. We’re not sure that providers should be doing this because an accepted offer is legally binding, even if it’s deferred.

Instead of asking users to confirm the deferred offer, we want to consider automatically confirming deferred offers if the course is available in the next recruitment cycle.

### Asking candidates to confirm that they want to take up their deferred offer

After deferring an offer, some candidates fall out of contact or decide not to take up their offer.

We want to consider letting providers send out requests to candidates to confirm their deferred offers during the next recruitment cycle.
