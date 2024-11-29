---
title: Managing payments in Support
description: We added a way for support users to securely send payment information to the Education and Skills Funding Agency (ESFA)
date: 2024-09-30
tags:
  - support
  - claims
  - payments
related:
  items:
    - text: How we pay claims
      href: /claim-funding-for-mentors/how-we-pay-claims/
    - text: Sampling (auditing) claims in support
      href: /claim-funding-for-mentors/sampling-claims-in-support/
    - text: Clawing back claims via Support after they have been paid
      href: /claim-funding-for-mentors/clawing-back-claims-via-support-after-they-have-been-paid/
    - text: Showing all claims in support
      href: /claim-funding-for-mentors/showing-all-claims-in-support/
    - text: Updating how we show all claims in support
      href: /claim-funding-for-mentors/updating-how-we-show-all-claims-in-support/
    - text: Logging payment, sampling and clawback activity
      href: /claim-funding-for-mentors/logging-payment-sampling-and-clawback-activity/
screenshots:
  items:
    - text: Default payments screen
      src: payments--default.png
    - text: Send payments to ESFA
      src: payments--send-to-esfa.png
    - text: Payments sent to ESFA
      src: payments--sent-to-esfa.png
    - text: Cannot send payments to ESFA
      src: payments--cannot-send-to-esfa.png
    - text: Upload ESFA payment response form
      src: payments--upload-response.png
    - text: Upload ESFA payment response form with an error
      src: payments--upload-response-error.png
    - text: Upload ESFA payment response help text
      src: payments--upload-response-help.png
    - text: Review ESFA payment response
      src: payments--upload-response-review.png
    - text: Upload ESFA payment response success
      src: payments--upload-response-success.png
    - text: Cannot upload ESFA payment response
      src: payments--cannot-upload-response.png
    - text: Claim details
      src: payments--claim-details.png
    - text: Update claim - information sent to ESFA
      src: payments--update-claim-information-sent.png
    - text: Update claim - paid
      src: payments--update-claim-paid.png
    - text: Claim successfully updated
      src: payments--claim-updated.png
    - text: Reject claim
      src: payments--reject-claim.png
    - text: Download payments file
      src: payments--download-payments-file.png
    - text: Download payments file error
      src: payments--download-payments-file-error.png
---

We needed to create a quick and easy way for support users to send claims to the Education and Skills Funding Agency (ESFA).

When we started the private beta, we scheduled regular catch-ups with the ESFA to discuss the service and their requirements. They advised that to make payments, they would require a CSV file and stipulated that they needed the following information:

- school_urn
- school_name
- school_local_authority
- school_establishment_type
- school_establishment_type_group
- claim_amount

They also advised us that they were building an API, but it would not be ready for the private or public beta.

When we initially spoke to Support about designing this process, they were concerned that manually sending CSVs to the ESFA may result in us sending:

- files to an incorrect email address
- the wrong file

With this in mind, we decided to semi-automate the process.

## How it works

The payments section is a sub-section of ‘Claims’.

![Screenshot showing the claims section navigation with ‘Payments’ highlighted](payments--navigation.png "Screenshot showing the claims section navigation with ‘Payments’ highlighted")

The payments section has 2 workflows:

- [Sending claims to the ESFA for payment](#sending-claims-to-the-esfa) - the primary action
- [Uploading payment responses from the ESFA](#uploading-payment-responses-from-the-esfa) - the secondary action

The payment section is empty until we receive a response from the ESFA; there are no claims to be processed by Support. In this situation, we show a message below the actions:

> There are no claims waiting to be processed.

![Screenshot showing the payments section empty state](payments--default.png 'Screenshot showing the payments section empty state')

### List of claims

If there are claims on the payments list, we show:

- a list of claims
- filters in a sidebar
- a search
- pagination

Claims on the payments list have the initial ‘Information requested’ status.

We show claims in date order, with the oldest showing first. The date is derived from when the school submitted the claim.

Each item on the claims list includes:

- claim reference
- school name
- accredited provider name
- submitted date
- total value of the claim
- claim status - displayed as a tag

![Claims list item](payments--claims-list-item.png "Claims list item")

The claim reference and school name include a link to the individual claim details, allowing support users to view the claim details.

#### Searching and filtering

When a user searches or filters the list of claims, we return a list of claims matching the search and filters.

Searching and filtering are independent of one another. If someone first searches for a claim and then applies filters, the filters act upon the subset of claims returned by the initial search.

Similarly, if someone filters the list of claims, a subsequent search will only include the claims in the filtered list, not the complete list.

Clearing a search will not clear the filters, and clearing the filters will not clear the search.

### Filter sidebar

The filter sidebar includes filters for:

- claim status
- accredited providers
- schools

#### Claim status

We show a list of checkboxes containing the claim statuses relevant to payments:

- information requested
- information sent

#### Accredited provider filter

The accredited providers’ filter shows all accredited ITT providers.

If there are more than 15 accredited providers, we create a scrollable region and use JavaScript to add a search box. Typing in the search box updates the list below with accredited providers matching the search term. If there are no matches, the list is empty.

If JavaScript is unavailable, the accredited providers are still within the scrollable region, but we no longer show the search box.

The scrollable region is indicated by a:

- cut off mid-way through a checkbox
- bottom border
- custom styles to display a scrollbar

The scroll area shows four and a half accredited providers to help users realise that other accredited providers are on the list. This smaller height lets users move to a filter below.

If there are 15 accredited providers or fewer, we display the filter as a simple list of checkboxes.

When a user selects an accredited provider and applies the filters, we display the remove filter tags under ‘selected filters’ at the top of the filter panel.

#### Schools filter

The schools’ filter shows all onboarded schools.

If there are more than 15 schools, we create a scrollable region and use JavaScript to add a search box. Typing in the search box updates the list below with schools matching the search term. If there are no matches, the list is empty.

If JavaScript is unavailable, the schools remain within the scrollable region, but we no longer show the search box.

The scrollable region is indicated by a:

- cut off mid-way through a checkbox
- bottom border
- custom styles to display a scrollbar

The scroll area shows four and a half schools to help users realise that other schools are on the list. This smaller height lets users move to a filter below.

If there are 15 schools or fewer, we display the filter as a simple list of checkboxes.

When a user selects a school and applies the filters, we display the remove filter tags under ‘selected filters’ at the top of the filter panel.

### Claim search

We include a search box above the list of claims. This search allows users to search for a specific claim by its reference number.

Once a user has searched, a ‘Clear search’ link is provided below the search field, allowing users to reset the search back to the initial state. The initial state may be an entire list of claims or a sub-set if the user has previously filtered the list.

Navigating to a claim or away from the list of claims clears the search term but not the filters. We consider the search to be complete.

#### Single results

We do not automatically send users to the claim details page after completing a search. If a user’s search finds a single claim, we show the user the list of claims containing it. This approach allows users to orient themselves or correct mistakes before viewing the claim.

#### No results

If the search does not return a result, we show a message depending on the search and filter terms:

- There are no results for ‘search term’.
- There are no results for ‘search term’ and the selected filter.
- There are no results for ‘search term’ and the selected filters.
- There are no results for the selected filter.
- There are no results for the selected filters.

#### Empty searches

If a user does not enter a search term when submitting a search, we show a list of claims that match any filter criteria.

### Pagination

We include pagination below the list of claims. If the list contains more than 25 items, we show the standard [GOV.UK pagination component](https://design-system.service.gov.uk/components/pagination/).

### Claim details

On the claim details page, we show:

- claim reference number
- school name - including a link to the school details page
- accredited provider
- list of mentors
- date the claim was submitted
- user who submitted the claim
- claim status
- reason the claim was not paid

We show possible actions below the page heading:

- ‘Confirm information sent’ - if the status is ‘Information requested’
- ‘Confirm claim paid’ - if the status is ‘Information sent’
- ‘Reject claim’

We also show summary lists outlining the:

- hours of training for each mentor
- grant funding calculations

The hours of training summary list includes:

- mentor name
- mentor’s training hours

The grant funding summary list includes:

- total hours claimed
- hourly rate
- claim amount

### Sending claims to the ESFA

![Send claims to the ESFA be paid flow](payments--send-claims-to-esfa-flow.png)

Once a school submits a claim, it enters a queue waiting for support to send to the ESFA for payment. We do not automatically submit claims to the ESFA. Support users can view these claims in the ‘All claims’ section or via an individual organisation’s claims page. These claims are in the ‘Submitted’ status.

A support user must select the ‘Send claims to ESFA’ button to send all ‘Submitted’ claims to the ESFA. Before submitting, we show users how many claims we will send and what will happen once we have sent them:

> Selecting ‘Send claims’ will:
>
> - create a CSV containing a list of all ‘Submitted’ claims
> - send an email to the ESFA containing a link to the generated CSV - this link expires after 7 days.
> - update the claim status from ‘Submitted’ to ‘Payment in progress’

We warn users that they cannot undo sending claims to the ESFA. They will have to contact the ESFA directly.

The email contains instructions on how the ESFA should update the CSV and send it back after processing the claims.

Once sent, we update the claim status to ‘Payment in progress’; school users can see this status.

#### Downloading the payments file

We do not attach claims to the email we send to the ESFA. Instead, we send the ESFA a link to a page in the service where they can download the CSV file for payments. This link is only valid for 7 days, after which a support user must send a new link.

#### No claims pending payment

If no claims are pending payment, we show a message:

> You cannot send any claims to the ESFA because there are no claims pending payment.

The only option is to cancel and return to the main payments list.

### Uploading payment responses from the ESFA

![Upload ESFA response flow](payments--upload-esfa-response-flow.png)

The upload process has 2 steps:

1. Select a CSV file to upload
2. Confirm upload

#### Select a CSV file to upload

The file upload screen contains one [file upload input](https://design-system.service.gov.uk/components/file-upload/).

We show ‘Help with the CSV file’ in a [details component](https://design-system.service.gov.uk/components/details/). The help describes the structure and information needed in the ESFA’s response file:

> Use this form to upload the CSV file sent by the ESFA.
>
> The CSV file must contain the following headers in the first row:
>
> - claim_reference
> - school_urn
> - school_name
> - school_local_authority
> - school_establishment_type
> - school_establishment_type_group
> - claim_amount
> - claim_submission_date
> - claim_status
> - claim_unpaid_reason

##### Validation rules

We follow the [error message guidance](https://design-system.service.gov.uk/components/file-upload/#error-messages) outlined in the GOV.UK Design System [file upload component](https://design-system.service.gov.uk/components/file-upload/).

If users do not upload a file, we show an error message:

> Select a CSV file to upload

If users do not upload a valid CSV file, we show an error message:

> The selected file must be a CSV

If users upload a valid CSV file but it is empty, we show an error message:

> The selected file is empty

#### Check before uploading

We do not immediately upload the data from the ESFA into the database. Instead, we ask users to confirm they want to upload the data. This confirmation step allows the user to change their mind, for example, if they discover a mistake in the data.

We show the number of claims included in the upload but not the details of each claim.

Users can continue and complete the file upload or cancel out of the process.

#### Upload success

When a user successfully uploads the ESFA file, we update all claims referenced.

The upload can result in a claim being in one of two states:

- paid
- information requested

If the ESFA confirms they have paid the claim, it is no longer shown in the payments list as it is considered complete.

If the claim is marked as ‘Information requested,’ it remains in the payments list, and a support user must respond to the request for information.

#### No claims waiting for a response

If no claims are waiting for a response from the ESFA, we show a message:

> You cannot upload a response from the ESFA as there are no claims waiting for a response.

The only option is to cancel and return to the main payments screen.

### Updating a claim

Support users can update a claim by:

- responding to a request for information
- confirming we have paid the claim
- rejecting the claim

Before updating the claim status, we ask support users to confirm the change.

#### Responding to a request for information

For all claims marked as ‘Information requested,’ the ESFA will describe its needs. For example, the ESFA could need the school’s bank details because the information it holds is outdated.

In this situation, a support user must contact the school for relevant information. This interaction is carried out off-service via Zendesk.

##### Confirming information was sent

Once a support user has sent the information to the ESFA, they mark the claim as ‘Information sent’ by selecting the ‘Confirm information sent’ button on the claim details within the payments section.

#### Confirming we have paid the claim

Support users can confirm that the ESFA paid a claim before they receive a new response file from the ESFA.

#### Rejecting a claim

Support users can manually reject a claim if they have received information from the school or the ESFA has said they will not pay the claim.

## Further considerations

We considered some changes that we did not implement. These included:

- Giving the ESFA access to the service
- Adding reasons why we rejected a claim
- Giving support users the ability to add notes to a claim

### Giving the ESFA access to the service

We communicate with the ESFA via email. Typically, the emails contain links to files the ESFA can download.

This communication style adds significant complexity to the service and requires sending links to or attaching CSV files to emails. However, this is how the ESFA requested the information to be received when we discussed the service with them.

The ESFA are developing an API, but this has yet to be made live.

To simplify the service, we could consider giving members of the ESFA direct access to it.

Giving the ESFA access would allow them to download claim information and respond in service when a claim has a problem. It would also enable ESFA colleagues to update the claims status after they have been paid or clawbacks have been completed. However, given their significant workload, the ESFA has never requested this, and we are unsure of their appetite for doing this.

### Adding reasons why we rejected a claim

A claim may be rejected by the ESFA for several reasons, for example:

- the ESFA holds incorrect bank details
- the school has closed

In these situations, it may be essential to relay the information to the school for future reference.

In Manage teacher training applications, we show structured reasons for rejection. Similarly, in Register trainee teachers, we show structured reasons for a trainee's withdrawal from their course.

These structured reasons help users understand why something was rejected or withdrawn and allow the DfE to report more effectively.

In the future, we could employ a similar approach in the service.

### Giving support users the ability to add notes to a claim

Support users sometimes need to talk to schools and accredited providers to ensure the ESFA correctly pays claims. In these situations, support users will need to use Zendesk. However, this leads to a disconnect between what they see in the service and what they see in Zendesk.

In user research, we found that support users may need to add a private note in the service so other support users can understand the status of a claim.
