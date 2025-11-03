---
title: Logging changes to a partnership’s linked accreditations
description: We explored ways to log changes to provider partnerships and linked accreditations
date: 2025-10-10
tags:
  - activity log
  - partnerships
  - accreditations
  - providers
related:
  items:
    - text: Linking partnerships with accreditations
      href: /register-of-training-providers/linking-partnerships-with-accreditations/
    - text: Tracking activity across the service
      href: /register-of-training-providers/tracking-activity-across-the-service/
    - text: Viewing activity at the provider level
      href: /register-of-training-providers/viewing-activity-at-the-provider-level/
---

We explored ways to log changes to provider partnerships and linked accreditations.

## What we changed

- Added an item to the activity log to see changes to partnerships
- Added a last updated on and by to the provider view - so you can instantly see when the latest change was made
- Linked the global activity log to the associated thing, for example, the provider

## How it works

When a user creates, updates or deletes a partnership, we log the changes to the activity log.

### Provider partnership created

When a user creates a new partnership, we show a summary card containing:

- accredited provider name
- training partner name
- linked accreditations - in a list

![Screenshot showing the ‘Provider partnership created’ activity on the global activity log](global-activity-item--partnership-created.png "Screenshot showing the ‘Provider partnership created’ activity on the global activity log")

![Screenshot showing the ‘Provider partnership created’ activity on the provider activity log](provider-activity-item--partnership-created.png "Screenshot showing the ‘Provider partnership created’ activity on the provider activity log")

### Provider partnership accreditations updated

If a user updates the accreditations linked to a partnership, for example, by either adding or removing an accreditation, we show:

- accredited provider
- training partner
- linked accreditations

Currently, we do not show what accreditations a user has added or removed.

![Screenshot showing the ‘Provider partnership accreditations updated’ activity on the global activity log](global-activity-item--partnership-updated.png "Screenshot showing the ‘Provider partnership accreditations updated’ activity on the global activity log")

![Screenshot showing the ‘Provider partnership accreditations updated’ activity on the provider activity log](provider-activity-item--partnership-updated.png "Screenshot showing the ‘Provider partnership accreditations updated’ activity on the provider activity log")

### Provider partnership deleted

When a user deletes a partnership, we show a summary card containing the:

- accredited provider
- training partner
- linked accreditations

![Screenshot showing the ‘Provider partnership deleted’ activity on the global activity log](global-activity-item--partnership-deleted.png "Screenshot showing the ‘Provider partnership deleted’ activity on the global activity log")

![Screenshot showing the ‘Provider partnership deleted’ activity on the provider activity log](provider-activity-item--partnership-deleted.png "Screenshot showing the ‘Provider partnership deleted’ activity on the provider activity log")

### Linking activity

We link activity items to their corresponding provider pages. For example, if the activity relates to partnerships, we link the provider name to their partnerships list.

We remove links to providers if they have been deleted from the register. We do not delete items from the activity log, as it is an immutable record.

![Screenshot showing a deleted provider on the global activity log](global-activity-item--provider-deleted.png "Screenshot showing a deleted provider on the global activity log")

![Screenshot showing a deleted provider on the ‘Provider partnership created’ activity item in the global activity log](global-activity-item--partnership-created-provider-deleted.png "Screenshot showing a deleted provider on the partnership created card in the global activity log")

### Showing last updated information

We show who last updated the provider and when the update was made. For example:

> Last updated by Anne Wilson on 28 October 2025 at 2:55pm

![Screenshot showing who last updated the provider and when they did the update](provider-activity--last-updated.png "Screenshot showing who last updated the provider and when they did the update")

## Further considerations

We considered some changes that we did not implement. These included:

- linking activity items to the previous version
- searching and filtering the activity logs
- showing what changed in the activity item

### Linking activity item to previous version

If there have been multiple revisions, we will consider linking a revision to the previous and next revision where relevant.

### Searching and filtering the activity logs

Over time, the activity log will grow large. Whilst we already include pagination, it may be necessary to include search and filtering mechanisms to make it easier for users to find relevant information.

On the global activity log, this could include filters for:

- provider
- user who made the change
- type of change (action) - for example, add, update or delete
- type of change (data) - for example, provider details, addresses, contacts, partnerships, etc

### Showing what changed in the activity item

Currently, we do not display the specific changes made; we only indicate that a change was made. Instead, we rely on users visually deciphering this information from the activity log. This can be difficult depending on the frequency of change in the register.

We will consider adding details of what changed, if a strong need arises.
