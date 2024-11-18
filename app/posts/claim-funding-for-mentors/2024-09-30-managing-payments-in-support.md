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
    - text: Auditing claims in support
      href: /claim-funding-for-mentors/auditing-claims-in-support/
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

Since the ESFA will not have access to Claim funding for mentor training, we decided to share information using email and CSV files.

When we initially spoke to Support about designing this process, they were concerned that manually sending CSVs to the ESFA may result in:

- files being sent to an incorrect email address
- the wrong file being sent

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

### Sending claims to the ESFA

Once a school submits a claim, it enters a queue waiting to be sent to the ESFA for payment. Claims are not automatically submitted to the ESFA. Support users can view these claims in the ‘All claims’ section or via an individual organisation’s claims page. These claims are in the ‘Submitted’ status.

A support user must select the ‘Send claims to ESFA’ button to send all ‘Submitted’ claims to the ESFA. Before submitting, we show users how many claims will be sent and what will happen once they’ve sent them:

> Selecting ‘Send claims’ will:
>
> - create a CSV containing a list of all ‘Submitted’ claims
> - send an email to the ESFA containing a link to the generated CSV - this link expires after 7 days.
> - update the claim status from ‘Submitted’ to ‘Payment in progress’

We warn users that the process cannot be undone when sending claims to the ESFA. They will have to contact the ESFA directly.

The email contains instructions on how the ESFA should update the CSV and send it back after processing the claims.

Once sent, the claim status is updated to ‘Payment in progress’, and school users can see this status.

#### Downloading the payments file

No claim details are sent to the ESFA. Instead, we send the ESFA a link to a page in the service where they can download the payments CSV file. This link is only valid for 7 days, after which a support user must send a new link.

#### No claims pending payment

If no claims are pending payment, we show a message:

> You cannot send any claims to the ESFA because there are no claims pending payment.

The only option is to cancel and return to the main payments screen.

### Uploading payment responses from the ESFA

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

We do not immediately upload the data from the ESFA into the database. Instead, we ask users to confirm they want to upload the data. This allows the user to change their mind, for example, if they discover a mistake in the data.

We show the number of claims included in the upload but not the details of each claim.

Users can continue and complete the file upload or cancel out of the process.

#### Upload success

When a user successfully uploads the ESFA file, all claims referenced are updated in the service.

The upload can result in a claim being in one of two states:

- paid
- information requested

If the claim is paid, it is no longer shown in the payments list as it is considered complete.

If the claim is marked as ‘Information requested,’ it remains in the payments list, and a support user must respond to the request for information.

#### No claims waiting for a response

If no claims are waiting for a response from the ESFA, we show a message:

> You cannot upload a response from the ESFA as there are no claims waiting for a response.

The only option is to cancel and return to the main payments screen.

### Responding to a request for information

For all claims marked as ‘Information requested,’ the ESFA will describe its needs. For example, the ESFA could need the school’s bank details because the information it holds is out of date.

In this situation, a support user must contact the school for relevant information. This interaction is carried out off-service via Zendesk.

#### Confirming information was sent

Once a support user has sent the information to the ESFA, they mark the claim as ‘Information sent’ by selecting the ‘Confirm information sent’ button on the claim details within the payments section.

### Confirming claim was paid

Support users can confirm that the ESFA paid a claim before they receive a new response file from the ESFA.

Support users must confirm this action before updating the claim.

### Rejecting a claim

Support users can manually reject a claim if they have received information from the school or ESFA that the claim will not be paid.

Support users must confirm this action before updating the claim.

## Further considerations

We considered some changes that we did not implement. These included:

- Giving the ESFA access to the service
- Adding reasons why a claim was rejected
- Giving support users the ability to add notes to a claim

### Giving the ESFA access to the service

Communication between the service and the ESFA is conducted via email and CSV files. This adds significant complexity to the service and requires sending links to or attaching CSV files to emails. However, this is how the ESFA requested the information to be received when we discussed the service with them. They are in the process of developing an API, but this has yet to be made live.

To simplify the service, we could consider giving members of the ESFA direct access to it. This would allow them to download claim information and respond in service when a claim has a problem. However, the ESFA has never requested this previously.

### Adding reasons why a claim was rejected

A claim may be rejected by the ESFA for several reasons, for example:

- the ESFA holds incorrect bank details
- the school has closed

In these situations, it may be important to relay the information to the school for future reference.

In Manage teacher training applications, we show structured reasons for rejection. Similarly, in Register trainee teachers, we show structured reasons for a trainee's withdrawal from their course.

These structured reasons help users understand why something was rejected or withdrawn and allow the DfE to report more effectively.

In the future, we could employ a similar approach in the service.

### Giving support users the ability to add notes to a claim

Support users sometimes need to talk to schools and providers to ensure the ESFA correctly pays claims. In these situations, support users will need to use Zendesk. However, this leads to a disconnect between what is seen in the service and what is captured in Zendesk.

In user research, we found that support users may need to add a private note in the service so other support users can understand the status of a claim.
