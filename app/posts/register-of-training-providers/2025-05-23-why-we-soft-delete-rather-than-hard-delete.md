---
title: Why we soft delete rather than hard delete
description: We chose a softer approach to deletion to support how we track changes across the service and maintain an auditable record
date: 2025-05-23
tags:
  - soft delete
  - hard delete
  - activity log
related:
  items:
    - text: Tracking activity across the service
      href: /register-of-training-providers/tracking-activity-across-the-service/
---

We do not hard delete things from the Register of training providers. Instead, we soft delete them.

That means when someone removes a provider, accreditation, address, contact, partnership, or user, we keep the data in the database but hide it from users. This decision supports how we track changes across the service and maintain an auditable record.

## What soft delete means in this service

Soft deletion means we:

- mark the record as deleted - with a timestamp and user ID
- keep it in the database
- stop it from appearing in the user interface

This is different from a hard delete, where we would remove the record completely.

## Why this matters for revision history and activity logs

We keep a revision history for each type of record, including providers, addresses, contacts, partnerships, accreditations, and users. Each revision is linked to an activity log entry that shows what changed, who changed it, and when.

If we hard delete a record, we would lose that revision history and the related activity log entries since it will also be deleted. Soft deletion lets us preserve the full context of a change, even when the record itself is no longer visible in the service.

For example:

- if a provider contact is deleted, we keep the revisions and activity logs
- if a provider is removed from the register, we retain its full history
- if an item is accidentally deleted, we could consider restoring it in future

This approach supports transparency and auditability, which are key characteristics of a register.

## Why we hide soft-deleted things from users

Although we keep soft-deleted records in the database, we do not show them to users. That includes:

- removing them from lists and details pages
- not linking to them from the activity log
- blocking access to the provider-level activity log if the provider has been soft deleted

This avoids confusion and makes it clear that the record is no longer active.

## What to consider next

There are some things we may need to consider in future:

- hard deleting records that have been soft deleted for a long time
- allowing some records to be restored, if deleted in error
- clarifying what happens to associated records when something is deleted
- adding admin tools to manage deletion more explicitly
- handling deletion requests from third parties

We’ll keep reviewing this as needs change.
