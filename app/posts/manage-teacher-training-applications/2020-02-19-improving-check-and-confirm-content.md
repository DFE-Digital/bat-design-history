---
title: Improving check and confirm content
description: Improving the content for checking and confirming a provider workflow action.
date: 2020-02-19
screenshots:
  items:
    - Check and confirm offer
    - Check and confirm withdrawal
    - Check and confirm conditions have been met
    - Check and confirm conditions have not been met
    - Check and confirm rejection
    - Offer confirmation message
    - Withdraw confirmation message
    - Conditions met confirmation message
    - Conditions not met confirmation message
    - Rejection confirmation message
---

Improving the way we get users to confirm a multi-step workflow action such as making an offer or rejecting an application. This work also makes the confirmation ‘flash’ message content consistent.

## Hypotheses

We've been using the ‘Are you sure?’ pattern to help users confirm an action like [withdrawing an offer](/manage-teacher-training-applications/withdrawing-an-offer).

The ‘Are you sure?’ pattern is good for one-step flows where we want to stop users doing destructive actions by accident.

But it’s not good for multi-step flows because it is patronising and redundant to ask users if they're sure after filling out several screens relating to that action.

If we use the [Check answers](https://design-system.service.gov.uk/patterns/check-answers/) pattern
Then it'll be more consistent without patronising the user with redundant content
