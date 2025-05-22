---
title: Viewing activity at the provider level
description: We created a provider activity log that helps users see what has changed for a single provider
date: 2025-05-21T13:00:00+00:00
tags:
  - activity log
  - timeline
related:
  items:
    - text: Tracking activity across the service
      href: /register-of-training-providers/tracking-activity-across-the-service/
screenshots:
  items:
    - text: Provider activity log
      src: activity-log--provider.png
---

In our [first post](/register-of-training-providers/tracking-activity-across-the-service/), we explained why we introduced an activity log and described the global view. This post focuses on how we built a provider-specific view of activity.

The provider activity log helps users see what has changed for a single provider, including details, accreditations, addresses, contacts and partnerships, and who made the changes.

While the global log provides a full history across the service, it can be hard to follow changes related to a single provider. Research with prospective users revealed they often need to:

- see the history of a specific provider’s records
- understand who made changes and when
- check whether something has already been updated
- troubleshoot issues with partnerships or accreditation

Adding a scoped activity log to provider pages meets these needs without requiring users to sift through the full log.

## What we changed

We added an activity log view to each provider’s page in the service. It includes:

- a summary card for each change - without a title, since it is unnecessary
- activity grouped by type - for example, provider details, accreditations, addresses or contacts
- the action taken - create, update, delete, archive or restore
- who carried out the action
- pagination to manage performance

This view uses the same data as the global log, but filtered to only show changes related to the selected provider.

Users access this view through the secondary navigation on a provider’s page.

![Provider activity log secondary navigation](activity-log-provider--secondary-navigation.png "Provider secondary navigation")
## How it works

We only log activity when something has changed. This prevents the activity log from becoming bloated with items that do not reflect a real change.

We show a count of the activity in the heading, for example “Activity (31).”

### Activity item

![Template activity item](activity-log-provider--template-activity-item.png "Template activity item")

For each activity item, we:

- identify what has changed - the ‘activity label’
- describe the action the user carried out - the ‘action’
- show who carried out the action and when
- include a summary of the changes

#### Identifying what data has changed

For each activity item, we describe what has changed. This includes:

- “Provider details”
- “Provider address”
- “Provider accreditation”
- “Provider contact”
- “Provider partnership”

#### Describing the action the user carried out

For each activity item, we describe the action performed by the user. This includes:

- “created”
- “updated”
- “deleted”
- “archived”
- “restored”

#### Showing who carried out the action and when

We show who carried out the action for each activity item and when, for example, “By Anne Wilson on 21 May 2025 at 2:22pm.”

If the user has been deleted, we show “Deleted user” instead of the user’s full name.

In the future, we will need to consider other types of users, including:

- system users, who might carry out bulk or scheduled tasks
- API users, who might contribute changes via third-party services

### Summary cards for each activity

For each type of activity, we use the [GOV.UK summary cards component](https://design-system.service.gov.uk/components/summary-list/#summary-cards) showing details of the activity.

We do not include a card title since it is not needed.

#### Provider details

![Example summary card showing provider details](activity-log-provider--summary-card-provider-details.png "Example summary card showing the provider details")

The provider details summary card includes:

- provider type
- operating name
- legal name
- UK provider reference number (UKPRN)
- unique reference number (URN)
- provider code

If the user has not entered information, we show “Not entered” and use the secondary text colour (mid-grey).

#### Provider accreditations

![Example summary card showing the provider accreditation](activity-log-provider--summary-card-provider-accreditation.png "Example summary card showing the provider accreditation")

The provider accreditation summary card includes:

- accreditation number
- date accreditation starts
- date accreditation ends

If the user has not entered information, we show “Not entered” and use the secondary text colour (mid-grey).

#### Provider addresses

![Example summary card showing the provider address](activity-log-provider--summary-card-provider-address.png "Example summary card showing the provider address")

The provider address summary card includes:

- address line 1
- address line 2
- address line 3
- town or city
- county
- postcode
- latitude
- longitude

If the user has not entered information, we show “Not entered” and use the secondary text colour (mid-grey).

We show “Unknown” for missing latitude and longitude information and use the secondary text colour (mid-grey).

#### Provider contacts

![Example summary card showing the provider contact details](activity-log-provider--summary-card-provider-contact.png "Example summary card showing the provider contact details")

The provider contact summary card includes:

- first name
- last name
- email address
- telephone

The provider contact form requires the user to enter all details, so we do not display “Not entered” for any fields.

#### Provider partnerships

![Example summary card showing the provider partnership](activity-log-provider--summary-card-provider-partnership.png "Example summary card showing the provider partnership")

The provider partnership summary card includes:

- accredited provider
- training provider

### Paginating the results

![Example pagination](activity-log-provider--example-pagination.png "Example pagination")

We include pagination below the list of activity. If the list contains more than 25 items, we show the standard [GOV.UK pagination component](https://design-system.service.gov.uk/components/pagination/).
