---
title: Logging payment, sampling and clawback activity
description: We created an activity log to capture when support users process payments, sampling and clawbacks
date: 2024-10-18
tags:
  - support
  - claims
  - activity
related:
  items:
    - text: Showing all claims in support
      href: /claim-funding-for-mentors/showing-all-claims-in-support/
    - text: Updating how we show all claims in support
      href: /claim-funding-for-mentors/updating-how-we-show-all-claims-in-support/
    - text: Managing payments in support
      href: /claim-funding-for-mentors/managing-payments-in-support/
    - text: Auditing claims in support
      href: /claim-funding-for-mentors/auditing-claims-in-support/
    - text: Clawing back claims via Support after they have been paid
      href: /claim-funding-for-mentors/clawing-back-claims-via-support-after-they-have-been-paid/
screenshots:
  items:
    - text: Activity log
      src: activity-log--list.png
    - text: Activity log with pagination
      src: activity-log--list-pagination.png
    - text: Activity log showing items with multiple documents
      src: activity-log--list-multiple-documents.png
    - text: Activity details
      src: activity-log--details.png
    - text: Activity details with file list pagination
      src: activity-log--details-pagination.png
---

As part of the payments, sampling, and clawbacks work, we needed to capture when a support user took an important action. To do this, we created an activity log.

## How it works

The activity log uses a variation of the timeline component used by the [Ministry of Justice](https://design-patterns.service.justice.gov.uk/components/timeline/), [HM Revenue & Customs](https://design.tax.service.gov.uk/hmrc-design-patterns/timeline/), [Home Office](https://design.homeoffice.gov.uk/components?name=Timeline) and [Department for Work and Pensions](https://design-system.dwp.gov.uk/components/timeline).

The activity log component is used on several services across DfE, including:

- Claim additional payments for teaching
- Register trainee teachers
- Register for a national professional qualification
- Teaching record system console

### Activity log

The activity log captures the following actions:

- claims sent to ESFA for payment
- ESFA payment response uploaded
- sampling data uploaded
- provider sampling response uploaded
- claims sent to ESFA for clawback
- ESFA clawback response uploaded

Each action shows:

- the title of the action
- who carried out the action
- when the action was carried out
- an alphabetical list of links to the files sent or received

If more than 25 items are in the log, we show [pagination](https://design-system.service.gov.uk/components/pagination/).

We limit the number of documents listed for each item in the log to 5. If there are more than 5 documents, we display a message (for example, ‘Showing 5 of 27 files’) and a link to view all files.

### Activity log details

For log items that have more than 5 documents, we show a page with the following details:

- the title of the action
- who carried out the action
- when the action was carried out
- an alphabetical list of links to the files

If there are more than 25 documents, we show [pagination](https://design-system.service.gov.uk/components/pagination/).

## Further considerations

We considered some changes that we did not implement. These included:

- capturing all activity in the log, not just support functions
- logging the provider name against each ‘provider sampling response uploaded’ action
- allowing Support users to add comments or notes

### Capturing all activity in the log

We considered capturing all user activity in the activity log but could not find a need.

We already display who submitted a claim and when in the claim details, so it’s not necessary to record this information in a log. Furthermore, users cannot amend claims unless in the ‘draft’ state, so there is no need to track changes.

We will revisit this if or when the need arises.

### Logging the provider name in their response

When a provider returns their sampling file, and support uploads it to the service, we currently do not label the provider in the activity log. This means there could be many log items with the same details and no way to differentiate them.

Instead of using the generic ‘Provider sampling response’ we need to label the link ‘[Provider name] sampling response’. The name could be derived from the file contents or manually selected by the support user.

If more than one accredited provider’s data exists within the file, the service must separate the content and show links for each accredited provider’s data.

### Allowing support users to add notes

Support users often need to talk to schools and providers. When they do, it is via Zendesk. However, this leads to a disconnect between the information in the service and what is held in Zendesk.

In user research, we found that support users may need to add a private note to explain the status of a claim to other support users.
