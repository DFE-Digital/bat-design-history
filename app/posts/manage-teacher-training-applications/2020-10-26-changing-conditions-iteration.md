---
title: Changing conditions iteration
description: Let users add, edit and remove conditions
date: 2020-10-26
screenshots:
  items:
    - text: Offer page with ‘Add or change conditions’ link
      src: offer-page.png
    - text: Edit conditions page
      src: conditions-page.png
    - text: Check conditions page
      src: check-conditions.png
    - text: Check conditions page – all conditions removed
      src: check-conditions--no-conditions.png
    - text: Success message
      src: success-message.png
---

Various improvements to the way users manage conditions.

## Letting users add, edit or remove conditions after offer

At the moment there’s no way for users to add, edit or remove conditions themselves.

This means [users have to request this via support which is longwinded](https://ukgovernmentdfe.slack.com/archives/CPH8J9G65/p1603703089102100).

It could also cause users to manage conditions outside of the service.

We think it’ll be better to let users do this themselves without adding work to support agents.

Note: users can only add, edit or delete conditions when in the ‘Offered’ state. After an offer is accepted it is legally binding.

## Adding a hint the to the DBS check condition

Sometimes users tell candidates they need to provide ID to perform the DBS check inside a separate condition box.

But this is not what a condition box is intended to be used for and we tell the candidate via email.

If we add hint text to the DBS condition checkbox then users won’t put this information in a condition box.

## Simplifying the way users add further conditions

At the moment, users get 4 static text fields to add further conditions.

This makes the UI more complex for users who don’t need to add further conditions or those that want to add less than 4.

For example, we mark the group of fields as optional, but they’re not optional if you have conditions.

And if the user wants to add more than 4 conditions they have to put multiple conditions inside the same box which makes them hard to manage and read for provider users and the candidate.

We think it’ll be more efficient to let users add as many further conditions as they need.

## What’s not covered with this iteration

Some providers add ‘nice to have’ conditions (or recommendations) as part of an offer.

We know that at least one provider marked this ‘condition’ as ‘Not met’ thinking that this would not end the candidate’s application.

We explored ways to let users delete such conditions but we backed out of this because we felt that this would be better served by differentiating recommendations from conditions – something that we’ll do later.
