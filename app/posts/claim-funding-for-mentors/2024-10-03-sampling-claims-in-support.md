---
title: Sampling (auditing) claims in Support
description: We added a way for support to upload and audit a sample list of claims
date: 2024-10-03
tags:
  - support
  - claims
  - payments
  - auditing
  - sampling
related:
  items:
    - text: How we audit claims
      href: /claim-funding-for-mentors/how-we-audit-claims/
    - text: Defining the sampling algorithm
      href: /claim-funding-for-mentors/defining-the-sampling-algorithm/
    - text: Managing payments in support
      href: /claim-funding-for-mentors/managing-payments-in-support/
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
    - text: Default sampling screen
      src: sampling--default.png
    - text: Upload claim sample form
      src: sampling--upload-sample.png
    - text: Upload claim sample form with error
      src: sampling--upload-sample-error.png
    - text: Upload claim sample help text
      src: sampling--upload-sample-help.png
    - text: Review claim sample upload
      src: sampling--upload-sample-review.png
    - text: Upload claim sample success
      src: sampling--upload-sample-success.png
    - text: Cannot upload claim sample
      src: sampling--cannot-upload-sample.png
    - text: Claim details - sampling in progress
      src: sampling--claim-details-sampling-in-progress.png
    - text: Approve claim
      src: sampling--approve-claim.png
    - text: Update claim - provider rejected claim
      src: sampling--provider-rejected-claim.png
    - text: Upload provider response form
      src: sampling--upload-provider-response.png
    - text: Upload provider response form with error
      src: sampling--upload-provider-response-error.png
    - text: Upload provider response help text
      src: sampling--upload-provider-response-help.png
    - text: Review provider response upload
      src: sampling--upload-provider-response-review.png
    - text: Upload provider response success
      src: sampling--upload-provider-response-success.png
    - text: Cannot upload provider response
      src: sampling--cannot-upload-provider-response.png
    - text: Claim details - provider did not approve the claim
      src: sampling--claim-details-provider-not-approved.png
    - text: Reject claim
      src: sampling--reject-claim.png
    - text: Download claims file
      src: sampling--download-claims-file.png
    - text: Download claims file error
      src: sampling--download-claims-file-error.png
---

Sampling is essential to administering government grants, ensuring taxpayers get value for their money.

As outlined in more detail in [‘How we audit claims’](/claim-funding-for-mentors/how-we-audit-claims/) and [‘Defining the sampling algorithm’](/claim-funding-for-mentors/defining-the-sampling-algorithm/), we must sample a minimum number of claims, which total at least 10% of all claims submitted for a given academic year.

This sample needs to be fair and agnostic of school demographics. Due to the funding amount and the level of post-claim assurance we have implemented, the sampling will be completed after payment, which, for the private beta, we expect to commence in October 2024.

## How it works

The sampling section is a sub-section of ‘Claims’.

![Screenshot showing the claims section navigation with ‘Sampling’ highlighted](sampling--navigation.png "Screenshot showing the claims section navigation with ‘Sampling’ highlighted")

The sampling section has 2 workflows:

- [Uploading claims to be sampled](#uploading-claims-to-be-sampled) - the primary action
- [Uploading responses from providers](#uploading-responses-from-providers) - the secondary action

The sampling section is empty until we upload the claims to be sampled. In this situation, we show a message below the actions:

> There are no claims waiting to be processed.

![Screenshot showing the sampling section empty state](sampling--default.png 'Screenshot showing the sampling section empty state')

### List of claims

If there are claims to sample, we show:

- a list of claims
- filters in a sidebar
- a search
- pagination

Claims on the sampling list have the initial ‘Sampling in progress’ status.

We show claims in date order, with the oldest showing first. The date is derived from when the claim entered the sampling queue.

Each item on the claims list includes:

- claim reference
- school name
- accredited provider name
- submitted date
- total value of the claim
- claim status - displayed as a tag

![Claims list item](sampling--claims-list-item.png "Claims list item")

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

- sampling in progress
- provider not approved

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
- reason the claim is being sampled

We show possible actions below the page heading:

- ‘Approve claim’
- ‘Confirm provider rejected claim’- if the status is ‘Sampling in progress’
- ‘Reject claim’- if the status is ‘Provider not approved’

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

### Uploading claims to be sampled

![Upload claims to be sampled flow](sampling--flow.png)

The upload process has 2 steps:

1. Select a CSV file to upload
2. Confirm upload

#### Select a CSV file to upload

The file upload screen contains one [file upload input](https://design-system.service.gov.uk/components/file-upload/).

We show ‘Help with the CSV file’ in a [details component](https://design-system.service.gov.uk/components/details/). The help describes the structure and information needed in the sampling file:

> Use this form to upload the CSV file sent by the Data and Insights team.
>
> The CSV file must contain the following headers in the first row:
>
> - claim_id
> - school_id
> - provider_id
> - claim_window_id
> - claim_reference_number
> - submitted_at
> - claim_sample_reason

When a user uploads a CSV file, we use a standard set of [CSV file validation rules](#csv-file-validation-rules).

#### Confirm before uploading

We do not immediately upload the sampling data into the database. Instead, we ask users to confirm they want to upload the data. This confirmation step allows the user to change their mind, for example, if they discover a mistake in the data.

We show the number of claims included in the upload but not the details of each claim.

Users can continue and complete the file upload or cancel out of the process.

We also include a warning message on this page:

> Each accredited provider included in the sample data will receive an email instructing them to assure their partner schools’ claim.

#### Upload success

When a user successfully uploads the sampling file, we update all claims referenced.

The upload updates all referenced claims with the status ‘Sampling in progress’.

We send an email to each accredited provider included in the sampling data. The email contains a unique link to [download a list of the mentor claims](#downloading-a-sampling-file) that need the accredited provider’s assurance.

### Uploading responses from providers

![Upload provider response flow](sampling--provider-response-flow.png)

The upload process has 2 steps:

1. Select a CSV file to upload
2. Confirm upload

#### Select a CSV file to upload

The file upload screen contains one [file upload input](https://design-system.service.gov.uk/components/file-upload/).

We show ‘Help with the CSV file’ in a [details component](https://design-system.service.gov.uk/components/details/). The help describes the structure and information needed in the provider’s response file:

> Use this form to upload the CSV file sent by the provider.
>
> The CSV file must contain the following headers in the first row:
>
> - claim_reference
> - school_urn
> - school_name
> - school_postcode
> - mentor_full_name
> - mentor_hours_of_training
> - claim_assured
> - claim_not_assured_reason

When a user uploads a CSV file, we use a standard set of [CSV file validation rules](#csv-file-validation-rules).

#### Confirm before uploading

Like the [uploading claims to be sampled process](#uploading-claims-to-be-sampled), we do not immediately upload the accredited provider’s response into the database. Instead, we ask users to confirm they want to upload the data. This confirmation step allows the user to change their mind, for example, if they discover a mistake in the data.

While the accredited provider’s data is on a per-mentor basis, we show the number of claims included in the upload, not the details of each claim.

Users can continue and complete the file upload or cancel out of the process.

If the accredited provider's response contains multiple lines for a claim (one for each mentor), we reject the whole claim if the provider has rejected all or part of one mentor’s claim. We also aggregate all the ‘claim_not_assured_reason’ into one comment, which we show to support users on the sampling claim details page.

#### Upload success

When a user successfully uploads the accredited provider’s response file, the service updates all claims referenced.

### Downloading a sampling file

We do not email claims in a CSV to accredited providers. Instead, the email contains a link to download the data from the service, valid for 7 days.

If the email recipient has a problem opening the link or it has expired, they must reply to the email and request that we send the link again.

### Updating a claim

Support users can update claims manually by taking one of the actions on the claim details page or uploading them in bulk on the claims list.

The accredited provider response upload can result in a claim being in one of two states:

- paid
- provider not approved

If the accredited provider assures us of the claim, we mark it as paid and no longer show it on the sampled claims list.

If the accredited provider does not assure the claim or a support user manually confirms that the provider rejected it, we mark it as ‘Provider not approved’. The claim remains on the sampling list, and a support user must investigate why.

A support user can approve or reject the claim after their investigation.

If they approve the claim, we mark it as paid; we require no further action.

If they reject the claim, we mark it as ‘Claim not approved’ and move it into the clawbacks queue.

Before updating the claim status, we ask support users to confirm the change.

### CSV file validation rules

We follow the [error message guidance](https://design-system.service.gov.uk/components/file-upload/#error-messages) outlined in the GOV.UK Design System [file upload component](https://design-system.service.gov.uk/components/file-upload/).

If users do not upload a file, we show an error message:

> Select a CSV file to upload

If users do not upload a valid CSV file, we show an error message:

> The selected file must be a CSV

If users upload a valid CSV file but it is empty, we show an error message:

> The selected file is empty

## Further considerations

We considered some changes that we did not implement. These included:

- [generating the sample from within the service](#generating-the-sample-from-within-the-service)
- [giving accredited providers access to the service](#giving-accredited-providers-access-to-the-service)
- [showing the list of claims when reviewing the upload](#showing-the-list-of-claims-when-reviewing-the-upload)
- [adding reasons why accredited providers rejected a claim](#adding-reasons-why-accredited-providers-rejected-a-claim)
- [assigning an accredited provider response to a specific accredited provider](#assigning-a-provider-response-to-a-specific-accredited-provider)
- [uploading multiple accredited provider files in one go](#uploading-multiple-accredited-provider-files-in-one-go)
- [moving sampling before payments](#moving-sampling-before-payments)

### Generating the sample from within the service

The current sampling workflow requires a Data and Insights team member to generate a CSV file containing claims we need to sample. This file must then be uploaded to the service, which is cumbersome and inefficient.

In the next phase of development, we should bring the sampling process into the service, removing the need for:

- the Data and Insights team to generate the data
- a CSV data upload process

### Giving accredited providers access to the service

The accredited providers (Best Practice Network and National Institute of Teaching) wanted to avoid accessing the service in private beta.

However, accredited providers must ensure that the claims schools submit are correct during the claim assurance process. The current process could be more convenient and efficient.

Instead of emailing CSV files to accredited providers and receiving files back from them, we should give each accredited provider access to the service in the next development phase.

Giving accredited providers access would:

- remove the need for CSV file exporting and importing
- improve data security - we will not send files containing mentor information via email
- reduce the complexity of the sampling process

### Showing the list of claims when reviewing the upload

We considered showing a list of claims that will be updated once the upload is complete but before the user finishes the process. This information would allow users to:

- check the upload matches the content of the CSV
- spot any errors in the data
- remove individual claims from the upload - if needed

We did not make the change as we could not establish a user need.

If users need to check the contents of the CSV or remove claims from the upload, they will need to open the file off-service in a spreadsheet app.

### Adding reasons why accredited providers rejected a claim

A claim may be rejected by the accredited ITT provider for several reasons, for example:

- the mentor was trained in the early career framework (ECF), not initial teacher training (ITT)
- the mentor’s hours were not correct

In these situations, it may be important to relay the information to the school for future reference.

In Manage teacher training applications, we show structured reasons for rejection. Similarly, in Register trainee teachers, we show structured reasons for a trainee's withdrawal from their course.

These structured reasons help users understand why something was rejected or withdrawn and allow the DfE to report more effectively.

In the future, we could employ a similar approach in the service.

### Assigning a provider response to a specific accredited provider

When a user uploads a response from an accredited provider, we show ‘Provider sampling response’ in the activity log. However, we need to know what activity and associated CSV file belongs to each accredited provider.

We could do this by:

- selecting an accredited provider during the upload process
- determining the accredited provider from the contents of the CSV - for example, using the claim reference to find the linked accredited provider

If we choose the second option and the file contains claims for multiple accredited providers, we would need to split the file automatically into one for each accredited provider.

In the next development phase, we should include the accredited provider’s name in the activity log item.

### Uploading multiple accredited provider files in one go

In private beta, we only worked with two accredited providers: Best Practice Network and the National Institute of Teachers (NIoT). This small number of accredited providers meant we only needed to upload one file at a time.

However, the service will expand to include all (approximately 170) accredited providers in public beta. We may need to consider using a [multi-file upload pattern](https://design-patterns.service.justice.gov.uk/components/multi-file-upload/) to upload CSV files efficiently.

However, we have not established this need as the upload file flow is short. Furthermore, if we implement accounts for accredited providers, the need for file uploads is removed.

### Moving sampling before payments

Claims could be sampled before payment is made. A similar service, ‘Claim additional teaching payments’, takes this approach.

This approach benefits from auditing claims before payment, allowing errors to be detected and remedied before funds are sent.

This was dismissed because of the short period between the claim window closing in the summer and when the ESFA required projections for payments in September. The risk was that the sampling process would not be completed by the ESFA payment deadline, and therefore, schools would not be paid promptly.

To mitigate the possibility of erroneous claims being submitted, we updated guidance to encourage schools to confirm their claims with their accredited providers. If schools did this, it would ensure alignment before the sampling process.
