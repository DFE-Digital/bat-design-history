---
title: Logging provider partnerships linked to academic years
description: We log all changes to partnerships
date: 2025-11-21
tags:
  - activity log
  - partnerships
  - providers
  - academic years
related:
  items:
    - text: Iterating on how we set up partnerships between providers
      href: /register-of-training-providers/iterating-on-how-we-set-up-partnerships-between-providers/
    - text: Iterating on the change provider partnership flow
      href: /register-of-training-providers/iterating-on-the-change-provider-partnership-flow/
    - text: Improving the delete partnership confirmation page
      href: /register-of-training-providers/improving-the-delete-partnership-confirmation-page/
    - text: Preventing duplicate partnerships based on partnership dates
      href: /register-of-training-providers/preventing-duplicate-partnerships-based-on-partnership-dates/
---

We log all changes to partnerships.

## What we changed

We made several changes, including:

- adding an item to the activity log to see changes to partnerships
- adding a last updated on and by to the provider view - so you can instantly see when the latest change was made
- linking the global activity log to the associated thing, for example, the provider partnerships section

## How it works

### Provider partnership created

When a user creates a new partnership, we show a summary card containing:

- accredited provider name
- training partner name
- partnership dates - start and end dates
- academic years - in a list showing the academic year label and dates

![Screenshot showing the ‘Provider partnership created’ activity on the global activity log](global-activity-item--partnership-created.png "Screenshot showing the ‘Provider partnership created’ activity on the global activity log")

![Screenshot showing the ‘Provider partnership created’ activity on the provider activity log](provider-activity-item--partnership-created.png "Screenshot showing the ‘Provider partnership created’ activity on the provider activity log")

### Provider partnership updated

If a user updates the partnership dates and academic years, we show a summary card containing:

- accredited provider name
- training partner name
- partnership dates - start and end dates
- academic years - in a list showing the academic year label and dates

Currently, we do not show what has changed from the previous version of the partnership.

![Screenshot showing the ‘Provider partnership updated’ activity on the global activity log](global-activity-item--partnership-updated.png "Screenshot showing the ‘Provider partnership updated’ activity on the global activity log")

![Screenshot showing the ‘Provider partnership updated’ activity on the provider activity log](provider-activity-item--partnership-updated.png "Screenshot showing the ‘Provider partnership updated’ activity on the provider activity log")

### Provider partnership deleted

When a user deletes a partnership, we show a summary card containing the following:

- accredited provider name
- training partner name
- partnership dates - start and end dates
- academic years - in a list showing the academic year label and dates

![Screenshot showing the ‘Provider partnership deleted’ activity on the global activity log](global-activity-item--partnership-deleted.png "Screenshot showing the ‘Provider partnership deleted’ activity on the global activity log")

![Screenshot showing the ‘Provider partnership deleted’ activity on the provider activity log](provider-activity-item--partnership-deleted.png "Screenshot showing the ‘Provider partnership deleted’ activity on the provider activity log")

### Linking activity

We link activity items to their corresponding provider pages. For example, if the activity relates to partnerships, we link the provider name to their partnerships list.

We remove links to providers if they have been deleted from the register. We do not delete items from the activity log, as it is a record that cannot be altered.

![Screenshot showing a deleted provider on the ‘Provider partnership created’ activity item in the global activity log](global-activity-item--partnership-created-provider-deleted.png "Screenshot showing a deleted provider on the partnership created card in the global activity log")

### Showing last updated information

We show who last updated the provider and when the update was made. For example:

> Last updated by Anne Wilson on 25 November 2025 at 11:44am

![Screenshot showing who last updated the provider and when they did the update](provider-activity--last-updated.png "Screenshot showing who last updated the provider and when they did the update")

## Further considerations

We considered some changes that we did not implement. These included:

- linking activity items to the previous version
- searching and filtering the activity logs
- showing what changed in the activity item

### Linking activity item to previous version

If there have been multiple revisions, we will consider linking a revision to the previous and next revision where relevant.

### Searching and filtering the activity logs

We do not know how long we will need to retain the activity logs, but it could be up to 7 years’ worth of changes.

Over time, the activity log will grow large. Whilst we already include pagination, it may be necessary to include search and filtering mechanisms to make it easier for users to find relevant information.

On the global activity log, this could include filters for:

- provider
- user who made the change
- type of change (action) - for example, add, update or delete
- type of change (data) - for example, provider details, addresses, contacts, partnerships, etc

### Showing what changed in the activity item

Currently, we do not display the specific changes made; we only indicate that a change was made. Instead, we rely on users visually deciphering this information from the activity log. This can be difficult depending on the frequency of change in the register.

We will consider adding details of what changed if a strong need arises.
