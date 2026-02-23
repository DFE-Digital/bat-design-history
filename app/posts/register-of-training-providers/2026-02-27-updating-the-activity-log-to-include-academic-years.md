---
title: Updating the activity log to include academic years
description: We added an 'Academic years' entry to the activity log and updated the partnership log items to be consistent with the rest of the service
date: 2026-02-27
tags:
  - activity log
  - academic years
  - partnerships
  - providers
related:
  items:
    - text: Tracking activity across the service
      href: /register-of-training-providers/tracking-activity-across-the-service/
    - text: Viewing activity at the provider level
      href: /register-of-training-providers/viewing-activity-at-the-provider-level/
    - text: Logging provider partnerships linked to academic years
      href: /register-of-training-providers/logging-provider-partnerships-linked-to-academic-years/
    - text: Adding academic years to the provider details page
      href: /register-of-training-providers/adding-academic-years-to-the-provider-details-page/
    - text: Updating provider partnerships to align with academic years
      href: /register-of-training-providers/updating-provider-partnerships-to-align-with-academic-years/
---

We introduced academic years at the provider level. As with other changes to provider data, we need to capture these in the activity log so users can see what changed, when, and by whom.

We also updated existing partnership log items to align with the way we now display academic years across the service.

## What we changed

### Provider academic years activity log entry

We added a new entry type to the activity log to capture when a provider's academic years are added or updated.

This entry appears in both the global activity log and the provider-level activity log. Both logs follow the same pattern used for other activity types in the service.

#### Activity item

Each academic years activity item includes:

- an activity label: 'Provider academic years added' or 'Provider academic years updated'
- who carried out the action and when, for example 'By Anne Wilson on 23 February 2026 at 11:07am'
- a summary card showing the provider and the academic years affected

#### Summary card

The summary card title shows the provider's operating name, linked to the provider's details page.

The summary list within the card shows the academic years in reverse chronological order. We include the 'next', 'current' and 'last' suffixes where relevant.

If the provider has been deleted from the register, we remove the link from the provider name but retain the activity item. We do not delete items from the activity log, as it is a permanent record.

### Partnership activity log items

We updated the existing partnership activity log items to be consistent with how we now display academic years elsewhere in the service.

The changes we made to partnership log items include:

- removing the start and end date hint text from academic year entries in summary lists (dates are no longer shown inline alongside each academic year label)
- ordering academic years from newest to oldest (previously they were shown in chronological order)
- adding the 'next', 'current' and 'last' suffixes to the relevant academic years

These changes affect the partnership summary cards shown in both the global and provider-level activity logs for the following activity types:

- provider partnership created
- provider partnership updated
- provider partnership deleted

## Design decisions

### Using the same label format as the rest of the service

The 'next', 'current' and 'last' suffixes now appear consistently wherever academic years are displayed. This includes the provider list, the provider details page, the partnerships section and the activity log. Keeping the format consistent means users do not need to interpret different conventions in different parts of the service.

### Removing hint text from partnership summary lists in the log

When collecting academic years through a form, hint text showing start and end dates helps users identify the correct year before selecting it. In an activity log summary card, users are viewing a record of what was saved, not making a selection. The hint text is not needed and adds visual noise. We removed it to make the log easier to read.

### Reverse chronological ordering

Ordering academic years from newest to oldest in the activity log is consistent with the ordering we use elsewhere in the service. It means users can quickly see the most recent years without having to scan to the end of a list.
