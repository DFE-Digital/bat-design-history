---
title: Tracking activity across the service
description: We introduced an activity log to help users see what has changed in the service, when, and by whom
date: 2025-05-21T12:00:00+00:00
tags:
  - activity log
  - timeline
related:
  items:
    - text: Viewing activity at the provider level
      href: /register-of-training-providers/viewing-activity-at-the-provider-level/
screenshots:
  items:
    - text: Activity log
      src: activity-log.png
---

We introduced an activity log to help users see what has changed in the service, when, and by whom. This work supports operational users and the Department for Education (DfE) in understanding how and when data changes across the service.

This is the first of two posts. It describes the rationale for tracking activity and how we designed and built the global activity log. A second post will cover the [provider-specific view](/register-of-training-providers/viewing-activity-at-the-provider-level/).

## User needs

This work supports several user needs:

- Support users need to see other users’ actions to understand the context and avoid duplication or errors.
- Operational staff need a complete history of changes to support policy enforcement and audit.
- DfE policy and delivery teams need to see how the service is being used to identify patterns or problems.

## What we changed

We created a global activity log that shows a timeline of actions taken across the service. Key features of the activity log include:

- identifying the type of data that changed, for example, provider details and addresses
- describing the action, including create, update, delete, archive and restore
- showing who carried out the action
- summary cards for each activity, with a clear title
- grouping by day to reduce visual clutter
- paginating the results to manage performance and readability

Users can access the global activity log from the main navigation. It includes activity related to providers and support users.

## How it works

We only log activity when something has changed. This prevents the activity log from becoming bloated with items that do not reflect a real change.
### Activity item

![Template activity item](activity-log--template-activity-item.png "Template activity item")

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
- “User details”

#### Describing the action the user carried out

For each activity item, we describe the action performed by the user. This includes:

- “created”
- “updated”
- “deleted”
- “archived” - if the activity is provider-based
- “restored” - if the activity is provider-based

#### Showing who carried out the action and when

We show who carried out the action for each activity item and when, for example, “By Anne Wilson on 21 May 2025 at 2:22pm.”

If the user has been deleted, we show “Deleted user” instead of the user’s full name.

In the future, we will need to consider other types of users, including:

- system users, who might carry out bulk or scheduled tasks
- API users, who might contribute changes via third-party services

### Summary cards for each activity

For each type of activity, we use the [GOV.UK summary cards component](https://design-system.service.gov.uk/components/summary-list/#summary-cards) showing details of the activity.

#### Provider details

![Example summary card showing provider details](activity-log--summary-card-provider-details.png "Example summary card showing the provider details")

The provider details summary card includes:

- a title including the provider’s name
- a summary list of the provider’s details

The summary list includes:

- provider type
- operating name
- legal name
- UK provider reference number (UKPRN)
- unique reference number (URN)
- provider code

If the user has not entered information, we show “Not entered” and use the secondary text colour (mid-grey).

#### Provider accreditations

![Example summary card showing the provider accreditation](activity-log--summary-card-provider-accreditation.png "Example summary card showing the provider accreditation")

The provider accreditation summary card includes:

- a title including the provider’s name
- a summary list of the accreditation details

The summary list includes:

- accreditation number
- date accreditation starts
- date accreditation ends

If the user has not entered information, we show “Not entered” and use the secondary text colour (mid-grey).

#### Provider addresses

![Example summary card showing the provider address](activity-log--summary-card-provider-address.png "Example summary card showing the provider address")

The provider address summary card includes:

- a title including the provider’s name
- a summary list of the address details

The summary list includes:

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

![Example summary card showing the provider contact details](activity-log--summary-card-provider-contact.png "Example summary card showing the provider contact details")

The provider contact summary card includes:

- a title including the provider’s name
- a summary list of the contact’s details

The summary list includes:

- first name
- last name
- email address
- telephone

The provider contact form requires the user to enter all details, so we do not display “Not entered” for any fields.

#### Provider partnerships

![Example summary card showing the provider partnership](activity-log--summary-card-provider-partnership.png "Example summary card showing the provider partnership")

The provider partnership summary card includes:

- a title including both providers’ names in the partnership, separated by a hyphen
- a summary list of the partnership details

The summary list includes:

- accredited provider
- training provider

#### User details

![Example summary card showing the user details](activity-log--summary-card-user-details.png "Example summary card showing the user details")

The user details summary card includes:

- a title including the user’s full name
- a summary list of the user’s details

The summary list includes:

- first name
- last name
- email address

### Grouping by day

![Example grouping by day](activity-log--example-grouping-by-day.png "Example grouping by day")

We show the activity log grouped by day. Labels include:

- “Today”
- “Yesterday”
- the date, for example, “20 May 2025”, “19 May 2025”, and so on

We separate the label from the activity items with a horizontal rule.

### Paginating the results

![Example pagination](activity-log--example-pagination.png "Example pagination")

We include pagination below the list of activity. If the list contains more than 25 items, we show the standard [GOV.UK pagination component](https://design-system.service.gov.uk/components/pagination/).

## Further considerations

We considered some changes that we did not implement. These included:

- search and filters
- links from activity items to the relevant record
- highlighting the changes
- downloading the log

### Search and filters

### Links from activity items to the relevant record

### Highlighting changes

### Downloading the log


*[API]: application programming interface
*[DfE]: Department for Education
*[UKPRN]: UK provider reference number
*[URN]: unique reference number
