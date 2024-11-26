---
title: Clawing back claims via Support after they have been paid
description: We added a way for support users to securely send clawback information to the Education and Skills Funding Agency (ESFA)
date: 2024-10-11T12:00:00+00:00
tags:
  - clawbacks
  - support
  - claims
  - payments
  - auditing
  - refunds
related:
  items:
    - text: Managing payments in support
      href: /claim-funding-for-mentors/managing-payments-in-support/
    - text: Sampling (auditing) claims in support
      href: /claim-funding-for-mentors/sampling-claims-in-support/
    - text: Showing all claims in support
      href: /claim-funding-for-mentors/showing-all-claims-in-support/
    - text: Updating how we show all claims in support
      href: /claim-funding-for-mentors/updating-how-we-show-all-claims-in-support/
    - text: Logging payment, sampling and clawback activity
      href: /claim-funding-for-mentors/logging-payment-sampling-and-clawback-activity/
screenshots:
  items:
    - text: Default clawbacks screen
      src: clawbacks--default.png
    - text: Clawbacks list
      src: clawbacks--list.png
    - text: Claim details
      src: clawbacks--claim-details.png
    - text: Request a clawback form
      src: clawbacks--request-clawback.png
    - text: Request a clawback form with errors
      src: clawbacks--request-clawback-error.png
    - text: Check clawback request
      src: clawbacks--check-clawback-request.png
    - text: Request clawback success
      src: clawbacks--request-clawback-success.png
    - text: Update clawback request form
      src: clawbacks--update-clawback-request.png
    - text: Check updated clawback request
      src: clawbacks--check-update-clawback-request.png
    - text: Updated clawback request success
      src: clawbacks--clawback-request-updated.png
    - text: Send clawbacks to ESFA
      src: clawbacks--send-to-esfa.png
    - text: Clawbacks sent to ESFA
      src: clawbacks--sent-to-esfa.png
    - text: Cannot send clawbacks to ESFA
      src: clawbacks--cannot-send-to-esfa.png
    - text: Upload ESFA clawback response form
      src: clawbacks--upload-response.png
    - text: Upload ESFA clawback response with an error
      src: clawbacks--upload-response-error.png
    - text: Upload ESFA clawback response help text
      src: clawbacks--upload-response-help.png
    - text: Review upload ESFA clawback response
      src: clawbacks--upload-response-review.png
    - text: Upload ESFA clawback response success
      src: clawbacks--upload-response-success.png
    - text: Cannot upload ESFA clawback response
      src: clawbacks--cannot-upload-response.png
    - text: Download clawbacks file
      src: clawbacks--download-clawbacks-file.png
    - text: Download clawbacks file error
      src: clawbacks--download-clawbacks-file-error.png
---

To ensure taxpayers get value for their money, a mechanism for retrieving money from schools that have made inaccurate claims—this process is known as clawback—is essential.

As outlined in more detail in [‘How we audit claims’](/claim-funding-for-mentors/how-we-audit-claims/), we must claw back funds where schools have been overpaid, or claims were made without sufficient supporting evidence.

These claims will be identified in the sampling process detailed in the previous post, [‘Sampling claims in support’](/claim-funding-for-mentors/sampling-claims-in-support/).

## How it works

The clawbacks section is a sub-section of ‘Claims’.

![Screenshot showing the claims section navigation with ‘Clawbacks’ highlighted](clawbacks--navigation.png "Screenshot showing the claims section navigation with ‘Clawbacks’ highlighted")

The clawbacks section has 2 workflows:

- [Send claims to the ESFA for clawback](#send-claims-to-the-esfa-for-clawback) - the primary action
- [Uploading clawback responses from the ESFA](#uploading-clawback-responses-from-the-esfa) - the secondary action

If there are claims to clawback, we show:

- a list of claims
- filters in a sidebar
- a search
- pagination

### List of claims

If we reject a claim during sampling, it enters the clawbacks list. These claims have the initial status of ‘claim not approved’.

We show claims in date order, with the oldest showing first. The date is derived from when the claim entered the clawbacks queue.

Each item on the claims list includes:

- claim reference
- school name
- accredited provider name
- submitted date
- total value of the claim
- claim status - displayed as a tag

![Claims list item](clawbacks--claims-list-item.png "Claims list item")

The claim reference and school name include a link to the individual claim details, allowing support users to view the claim details.

Once we have processed a clawback, we show the clawback amount in the claims list item:

![Claims list item showing clawback amount](clawbacks--claims-list-item-with-clawback.png "Claims list item showing clawback amount")

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

We show a list of checkboxes containing the clawback claim statuses:

- claim not approved
- clawback requested
- clawback in progress

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
- ‘Request clawback’ action - if the status is ‘Claim not approved’

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

Once a user initiates a clawback, we show a summary list containing the clawback details:

- number of hours
- hourly rate
- clawback amount
- reason for clawback
- revised claim amount

If support has not submitted the clawback to the ESFA, we include change links that allow users to change the clawback details.

### Request clawback

![Request clawback flow](clawbacks--request-clawback-flow.png)

The ‘Request clawback’ flow has two steps:

1. Enter clawback details
2. Check your answers

#### Enter clawback details

The clawback details form has two questions:

- number of hours to clawback
- reason for clawback

We update the hint for the ‘number of hours to clawback’ question to include the total hours claimed. For example, if the total hours claimed was 40, the hint is:

> Enter whole numbers up to a maximum of 40 hours

We ask for a general reason for clawback rather than asking users to specify the mentors. To help users explain the reason for clawback, we display a hint:

> Explain why the clawback is being requested. For example, include details of which mentor has received a deduction.

##### Validation rules

Users must answer both questions.

If a user does not enter the number of hours, we show an error message:

> Enter the number of hours

If a user enters an amount that is not a number, is not a whole number, or is greater than the total hours claimed, we show an error message:

> Enter the number of hours between 1 and [total hours claimed]

If a user does not enter a reason for clawback, we show an error message:

> Enter the reason for clawback

#### Check your answers

The final step is to check your answers.

We show:

- number of hours to clawback
- hourly rate
- clawback amount
- reason for clawback

If a user returns to a previous answer using the change link, the information they entered is pre-populated. When finished, the user sees the ‘Continue’ button, which should return them to the check answers page.

Before completing the ‘Request clawback’ flow, we display a warning to the user:

> We will show clawback details to the school

Once completed, on the claim details page, we display:

- a success message
- details of the clawback request

### Send claims to the ESFA for clawback

Once a support user has submitted a claim for clawback, it enters a queue waiting for support to send to the ESFA for clawback. Support users can still edit clawback details.

A support user must select the ‘Send claims to ESFA’ button to send all ‘Clawback requested’ claims to the ESFA.

![Send claims to the ESFA for clawback flow](clawbacks--send-claims-to-esfa-flow.png)

The send claims process has one step: confirming you want to send the claims.

Before submitting, we show users how many claims we will send and what will happen once we have sent them:

> Selecting ‘Send claims’ will:
>
> - create a CSV containing a list of all claims marked as ‘Clawback requested’
> - send an email to the ESFA containing a link to the generated CSV - this link expires after 7 days.
> - update the claim status from ‘Clawback requested’ to ‘Clawback in progress’

We warn users that they cannot undo sending claims to the ESFA. They will have to contact the ESFA directly.

The email contains instructions on how the ESFA should update the CSV and send it back after processing the claims.

Once sent, we update the claim status to ‘Clawback in progress’; school users can see this status.

#### Downloading the clawbacks file

We do not attach claims to the email we send to the ESFA. Instead, we send the ESFA a link to a page in the service where they can download the CSV file for clawbacks. This link is only valid for 7 days, after which a support user must send a new link.

#### No claims pending clawback

If no claims are pending clawback, we show a message:

> You cannot send any claims to the ESFA because there are no claims with a clawback requested.

The only option is to cancel and return to the main clawbacks list.

### Uploading clawback responses from the ESFA

![Upload ESFA response flow](clawbacks--upload-esfa-response-flow.png)

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
> - clawback_amount
> - claim_submission_date
> - claim_status

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

- clawback in progress
- clawback complete

If the ESFA confirms they have clawed back the claim, it will no longer be shown in the payments list as it is considered complete.

If the claim is marked as ‘Clawback in progress,’ it remains in the clawbacks list.

#### No claims waiting for a response

If no claims are waiting for a response from the ESFA, we show a message:

> You cannot upload a response from the ESFA as there are no claims waiting for a response.

The only option is to cancel and return to the main payments screen.

## Further considerations

We considered some changes that we did not implement. These included:

- showing how the ESFA will process the clawback
- considering what happens if a clawback is ultimately unsuccessful

### Showing how the ESFA will process the clawback

The ESFA has 2 ways to claw back money:

- via a refund
- offsetting the refund against other payments

We could add details of how the ESFA will process the clawback to the clawback details in the claim; however, we have yet to discover a need for this information.

### Considering what happens if a clawback is ultimately unsuccessful

Currently, we do not have a way to mark the clawback as unsuccessful.

If a school can claim mentor funding, it must be a legitimate organisation. Therefore, we will always be able to claw back funds if necessary.

We will update the service if we discover a need to mark a clawback as unsuccessful.
