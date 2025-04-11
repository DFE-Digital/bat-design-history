---
title: Why we will not reinstate deleted user accounts
description: Why we’ve decided that creating new user accounts is safer and simpler than reinstating deleted ones
date: 2025-04-09
tags:
  - users
  - accounts
related:
  items:
    - text: The principles underpinning the register of training providers
      href: /register-of-training-providers/the-principles-underpinning-the-register-of-training-providers/
---

When we remove users from the Register of training providers and we add them again at a later date, we have two options available:

- reinstating the deleted user account
- creating a new user account

Reinstating deleted user accounts might preserve history and reduce admin effort but also introduce security risks and system complexity. After weighing both options, we chose not to support reinstatement. This post explains the decision.

## Reinstating a deleted account

Reinstating a deleted account restores its original state, including historical data and permissions. This approach offers some benefits, but it also introduces several risks and complications.

Pros:

- maintains the user’s audit history and past activity
- restores previous roles, settings, permissions and relationships
- prevents data duplication
- reduces the work required to reconfigure the user

Cons:

- reintroduces potential security issues if the account was compromised
- adds complexity to how the system manages user states
- risks applying outdated or inappropriate permissions and relationships
- conflicts with data retention or deletion policies that treat deletion as permanent

## Creating a new account

Creating a new account treats the user as a separate, newly added individual with no link to a previously deleted account. This simplifies account handling and reduces risk, though it also has trade-offs.

Pros:

- starts from a clean, secure baseline
- simplifies logic for handling user state
- requires explicit assignment of roles, settings, permissions and relationships
- aligns with data deletion and privacy policies

Cons:

- loses historical data and activity logs tied to the original account
- requires reconfiguration of access and preferences
- may lead to duplicate user records if not managed carefully
- fragments the audit trail across multiple accounts for the same person

## Why we chose to create new user accounts

We chose to create new user accounts to reduce security risk, simplify system logic, and avoid ambiguity. Reinstating accounts would require tracking and restoring complex states, handling edge cases, and reviewing permissions that may no longer be valid. Reintroducing a deleted account could also undo actions taken for good reason, such as removing access due to misuse or outdated roles.

By treating each new user addition as a clean entry, we ensure that every account exists with a clear intent. This approach avoids unintentional privilege inheritance, simplifies our data model, and provides a clear and reliable audit trail. While it means accepting some duplication and the loss of historical context, those trade-offs result in a safer and more maintainable system.
