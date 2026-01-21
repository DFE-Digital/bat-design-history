---
title: Preventing accreditations from being deleted if linked to a partnership
description: We prevent users from deleting an accreditation if it has been linked to a partnership
date: 2025-10-08
tags:
  - accreditations
  - partnerships
  - providers
related:
  items:
    - text: Managing provider accreditations
      href: /register-of-training-providers/managing-provider-accreditations/
    - text: Linking partnerships with accreditations
      href: /register-of-training-providers/linking-partnerships-with-accreditations/
    - text: Logging changes to a partnership's linked accreditations
      href: /register-of-training-providers/logging-changes-to-a-partnerships-linked-accreditations/
screenshots:
  items:
    - text: Cannot delete accreditation
      src: accreditations--cannot-delete-accreditation.png
---

We prevent users from deleting an accreditation if it has been linked to a partnership.

## Why we did this

Accreditations can be linked to partnerships to show which accreditation covers the training delivered through that partnership.

If a user deletes an accreditation that is linked to one or more partnerships, this would create orphaned data within the register. The partnerships would reference an accreditation that no longer exists.

We implemented this change to:

- prevent accreditations from being deleted by mistake
- maintain data integrity across the register
- ensure partnerships always reference valid accreditations

## How it works

When a user tries to delete an accreditation, we check if it is linked to any partnerships.

### If the accreditation has no linked partnerships

The user sees the standard deletion confirmation page and can proceed with removing the accreditation.

### If the accreditation is linked to partnerships

We show a page explaining that the accreditation cannot be deleted because it is linked to one or more partnerships.

The page includes:

- a heading explaining the accreditation cannot be deleted
- a list of partnerships that are linked to the accreditation
- guidance on what the user needs to do

To delete the accreditation, users must first:

1. Go to each linked partnership
2. Remove the link to this accreditation (or link to a different accreditation)
3. Return to the accreditation and delete it

### Error prevention

We chose to prevent deletion rather than show a warning because:

- deleting linked accreditations would cause data integrity issues
- users may not fully understand the consequences
- it's easier to prevent the action than to fix orphaned data

## Further considerations

We considered some changes that we did not implement. These included:

- allowing users to delete the accreditation and automatically unlinking it from partnerships
- showing a warning but allowing the deletion to proceed

We decided against these options because they could lead to unintended data changes that would be difficult to reverse.

*[DfE]: Department for Education
