---
title: Clawing back claims via Support after they have been paid
description: We added a way for support users to securely send clawback information to the Education and Skills Funding Agency (ESFA)
date: 2024-10-11T12:00:00+00:00
tags:
  - support
  - claims
  - payments
  - auditing
  - refunds
related:
  items:
    - text: Managing payments in support
      href: /claim-funding-for-mentors/managing-payments-in-support/
    - text: Auditing claims in support
      href: /claim-funding-for-mentors/auditing-claims-in-support/
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

PREAMBLE - WHY WE ARE DOING THIS

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

Claims enter the clawbacks list if they have been rejected during sampling. These claims have the initial status of ‘claim not approved’.

We show claims in XXXX order.

Each item on the claims list includes:

- claim reference
- school name
- accredited provider name
- submitted date
- total value of the claim
- claim status - displayed as a tag

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

We show a list of checkboxes containing the clawback claim statuses:

- claim not approved
- clawback requested
- clawback in progress

#### Accredited provider filter

The accredited providers’ filter only shows accredited providers included in the claims submitted by the schools.

If there are more than 15 accredited providers, a scrollable region is created, and JavaScript is used to add a search box. Typing in the search box updates the list below with accredited providers matching the search term. If there are no matches, the list is empty.

If JavaScript is unavailable, the accredited providers are still within the scrollable region, but the search box is no longer shown.

The scrollable region is indicated by a cut-off mid-way through a checkbox, a bottom border and custom styles to display a scrollbar.

The scroll area shows four and a half accredited providers to help users realise that other accredited providers are on the list. This smaller height lets users move to a filter below.

If there are 15 accredited providers or fewer, the accredited providers filter will be displayed as a simple list of checkboxes.

When a school has been selected and the filters have been applied, the remove filter tags are displayed under ‘selected filters’ at the top of the filter panel.

#### Schools filter

The schools’ filter only shows schools that have submitted claims.

If there are more than 15 schools, a scrollable region is created, and JavaScript is used to add a search box. Typing in the search box updates the list below it with schools matching the search term. If there are no matches, the list is empty.

If JavaScript is unavailable, the schools remain within the scrollable region, but the search box is no longer shown.

The scrollable region is indicated by a cut-off mid-way through a checkbox, a bottom border and custom styles to display a scrollbar.

The scroll area shows four and a half schools to help users realise that other schools are on the list. This smaller height lets users move to a filter below.

If there are 15 schools or fewer, the school filter will be displayed as a simple list of checkboxes.

When a school has been selected and the filters have been applied, the remove filter tags are displayed under ‘selected filters’ at the top of the filter panel.

### Claim search

We include a search box above the list of claims. This search allows users to search for a specific claim by its reference number.

Once a user has searched, a ‘Clear search’ link is provided below the search field, allowing users to reset the search back to the initial state. The initial state may be an entire list of claims or a sub-set if the user has previously filtered the list.

Navigating to a claim or away from the list of claims clears the search term but not the filters. We consider the search to be complete.

#### Single results

We do not automatically send users to the claim details page after completing a search. If a user’s search finds a single claim, we show the user the list of claims containing it. This allows users to orient themselves or correct mistakes before viewing the claim.

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

We include pagination below the list of claims. If the list contains more than 25 items, we show the standard GOV.UK pagination component.

### Claim details

On the claim details page, we show:

- claim reference number
- school name - including a link to the school details page
- accredited provider
- list of mentors
- date the claim was submitted
- user who submitted the claim
- claim status
- ‘Request clawback’ action - if the status is ‘claim not approved’

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

Once a clawback has been initiated, we show a summary list containing the clawback details:

- number of hours
- hourly rate
- clawback amount
- reason for clawback
- revised claim amount

If the clawback has not been submitted to the ESFA, we include change links that allow users to change its details.

### Request clawback

![Request clawback flow](clawbacks--request-clawback-flow.png)

The ‘Request clawback’ flow has two steps:

1. Enter clawback details
2. Check your answers

#### Enter clawback details

The clawback details form has two questions:

- number of hours to clawback
- reason for clawback

We adapt the hint for the ‘number of hours to clawback’ question to include the total hours claimed. For example, if the total hours claimed was 40, the hint is:

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

If a user returns to a previous answer using the change link, their entered information is pre-populated. When finished, the user sees the ‘Continue’ button, which should return them to the check answers page.

Before completing the ‘Request clawback’ flow, we display a warning to the user:

> We will show clawback details to the school

Once completed, on the claim details page, we display:

- a success message
- details of the clawback request

### Send claims to the ESFA for clawback

![Send claims to the ESFA for clawback flow](clawbacks--send-claims-to-esfa-flow.png)

### Uploading clawback responses from the ESFA

![Upload ESFA response flow](clawbacks--upload-esfa-response-flow.png)

## Further considerations

We considered some changes that we did not implement. These included:

- showing how the clawback will be made - for example, via refund or offset against other payments
- considering what happens if a clawback is ultimately unsuccessful

### Showing how the clawback was made

### Considering what happens if a clawback is ultimate unsuccessful
