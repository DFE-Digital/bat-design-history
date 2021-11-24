---
title: Making our prompts more consistent
description: Making the content used in our prompts more consistent depending on whether the user can or cannot take action
date: 2021-11-24
screenshots:
  items:
    - text: Make a decision or set up interview
      src: received.png
    - text: Make a decision or set up interview (without permission to manage interviews)
      src: received--no-interview-permission.png
    - text: Make a decision or set up interview (without permission to make offers and reject applications)
      src: received--no-make-decisions-permission.png
    - text: Make a decision or set up interview (without permission to make offers and reject applications and manage interviews)
      src: received--no-permissions.png
    - text: Make a decision
      src: interviewing.png
    - text: Make a decision (without permission to make offers and reject applications)
      src: interviewing--no-permission.png
    - text: Waiting on candidate response
      src: offered.png
    - text: Give feedback
      src: rejected.png
    - text: Give feedback (without permission to make offers and reject applications)
      src: rejected--no-permission.png
    - text: Offer deferred
      src: deferred.png
    - text: Confirm deferred offer
      src: confirm-deferred-offer.png
    - text: Confirm deferred offer (without permission to make offers and reject applications)
      src: confirm-deferred-offer--no-permission.png
---

We made the content used in prompts more consistent.

We’ll only show a heading inside the prompt if the user is able to take an action. For example, if a decision can be made and they have permission to make offers.

We’ll hide the heading within the prompt if the user is unable to take action. For example, if they are waiting on the candidate’s response or they lack permission to perform the action.
