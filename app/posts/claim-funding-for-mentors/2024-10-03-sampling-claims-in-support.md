---
title: Sampling (auditing) claims in Support
description: We added a way for support to upload and audit a sample list of claims
date: 2024-10-03
tags:
  - support
  - claims
  - payments
  - auditing
related:
  items:
    - text: How we audit claims
      href: /claim-funding-for-mentors/how-we-audit-claims/
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
    - text: Claim details - provider did not approve claim
      src: sampling--claim-details-provider-not-approved.png
    - text: Reject claim
      src: sampling--reject-claim.png
    - text: Download claims file
      src: sampling--download-claims-file.png
    - text: Download claims file error
      src: sampling--download-claims-file-error.png
---

## How it works

The sampling section is a sub-section of ‘Claims’.

![Screenshot showing the claims section navigation with ‘Sampling’ highlighted](sampling--navigation.png "Screenshot showing the claims section navigation with ‘Sampling’ highlighted")

The sampling section has 2 workflows:

- [Uploading claims to be sampled](#uploading-claims-to-be-sampled) - the primary action
- [Uploading responses from providers](#uploading-responses-from-providers) - the secondary action

The sampling section is empty until we upload the claims to be sampled. In this situation, we show a message below the actions:

> There are no claims waiting to be processed.

![Screenshot showing the sampling section empty state](sampling--default.png 'Screenshot showing the sampling section empty state')

### Uploading claims to be sampled

![Upload claims to be sampled flow diagram](sampling--flow.png)

The upload process has 2 steps:

1. Select a CSV file to upload
2. Confirm upload

#### Select a CSV file to upload

The file upload screen contains one [file upload input](https://design-system.service.gov.uk/components/file-upload/).

We show ‘Help with the CSV file’ in a [details component](https://design-system.service.gov.uk/components/details/). The help describes the structure and information needed in the sampling file:

> Use this form to upload the CSV file sent by the data and insights team.
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

We do not immediately upload the sampling data into the database. Instead, we ask users to confirm they want to upload the data. This allows the user to change their mind, for example, if they discover a mistake in the data.

We show the number of claims included in the upload but not the details of each claim.

Users can continue and complete the file upload or cancel out of the process.

We also include a warning message on this page:

> Each accredited provider included in the sample data will receive an email instructing them to assure their partner schools’ claim.

#### Upload success

When a user successfully uploads the sampling file, all claims referenced are updated in the service.

The upload updates all referenced claims with the status ‘Sampling in progress’.

We send an email to each provider included in the sampling data. The email contains a unique link to [download a list of the mentor claims](#downloading-a-sampling-file) that need the provider’s assurance.

### Uploading responses from providers

![Upload provider response flow diagram](sampling--provider-response-flow.png)

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

Like the [uploading claims to be sampled process](#uploading-claims-to-be-sampled), we do not immediately upload the provider’s response into the database. Instead, we ask users to confirm they want to upload the data. This allows the user to change their mind, for example, if they discover a mistake in the data.

While the provider's data is on a per-mentor basis, we show the number of claims included in the upload, not the details of each claim.

Users can continue and complete the file upload or cancel out of the process.

Where there are multiple lines for a claim in the provider’s response (one for each mentor), if a provider has rejected all or part of one mentor’s claim, the whole claim is rejected. We also aggregate all the ‘claim_not_assured_reason’ into one comment, which we show to support users on the sampling claim details page.

#### Upload success

When a user successfully uploads the provider’s response file, the service updates all claims referenced.

### Downloading a sampling file

We do not email claims in a CSV to accredited providers. Instead, the email contains a link to download the data from the service, valid for 7 days.

If the email recipient has a problem opening the link or it has expired, they must reply to the email and request that we send the link again.

### Updating a claim

The provider response upload can result in a claim being in one of two states:

- paid
- provider not approved

If the provider assures the claim, we mark it as paid, and it is no longer shown in the list of claims being sampled.

If the provider does not assure the claim, we mark it as ‘Provider not approved’. The claim remains on the sampling list, and a support user must investigate why.

A support user can approve or reject the claim after their investigation.

If they approve the claim, we mark it as paid; no further action is required.

If they reject the claim, we mark it as ‘Claim not approved’ and move it into the clawbacks queue.

### CSV file validation rules

We follow the [error message guidance](https://design-system.service.gov.uk/components/file-upload/#error-messages) outlined in the GOV.UK Design System [file upload component](https://design-system.service.gov.uk/components/file-upload/).

If users do not upload a file, we show an error message:

> Select a CSV file to upload

If users do not upload a valid CSV file, we show an error message:

> The selected file must be a CSV

If users upload a valid CSV file but it is empty, we show an error message:

> The selected file is empty

## Further considerations
