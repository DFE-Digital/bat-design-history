---
title: Improving the support console using user-centred principles and research insights following on from round 10 of research
description: Design iterations made to the claims service following on from research round 10
date: 2025-02-03
tags:
  - support console
  - user research
related:
  items:
    - text: How we plan to onboard schools in public beta
      href: /claim-funding-for-mentors/round-10-support-console-research-findings/
---

Design iterations were made following recommendations from [user research round 10](/claim-funding-for-mentors/round-10-support-console-research-findings/).

The key areas following research were:

- status tags
- clawback journey

As many of the team were new to the claims service, design and development also did a review of the console and noticed key areas of improvement. These were:

- upload screens
- a manual process for adding providers response during auditing
- school rejection journey
- activity log
- auditing email and terminology for sampling

## Improve the status tags

In user research with 3 members of the support team who will be managing claims, the status labels caused confusion. Due to the number of processes that involve others, it was important that the status tags explained who was in current ownership of the claim, whether that was the Payer (formally known as ESFA), the provider, the school or the support agent themselves. The recommendation from research was to make the label content more descriptive and clarify who requested or sent the information.

Before and after of status tags:

- Payment in progress - Payer payment review
- Information requested – Payer needs information
- Information sent - Information sent to payer
- Payment not approved - Rejected by payer
- Sampling in progress - Audit requested
- Provider not approved - Rejected by provider
- Claim not approved - Rejected by school
- Clawback requested - Ready for clawback
- Clawback in progress - Sent to payer for clawback

We also colour coded the status tags to help users know whether there was a job to be done:

- yellow tags mean wait
- tuquoise tags mean take an action
- blue tags mean complete
- orange tags mean complete but failed

## Terminology changes

To better explain the auditing process through status labels, we changed the term ‘sampling’ to ‘auditing’. We ensured this term was used widely across the service by changing all mentions of sampling or sample to auditing and audit.

The ESFA will soon be part of DfE and undergo a name change, so to avoid confusion when this happens, we reviewed the support console to change any mention of ESFA to ‘Payer’.

## Improving the upload screens

Support agents have four key moments where they need to upload spreadsheet files (csvs)  to the service. These are:

- payments - upload payer response
- auditing - upload claims to be sampled
- auditing - upload provider response
- clawbacks - upload payer response

To complete the actions necessary for uploading, users need enough information to know they are uploading the correct csv, whether there are any errors in the csv, and what they are. We improved the user's ability to do this using validation messages and preview screens using patterns also used on services such as Gov Notify.

![Before upload screen](a-before-upload.png)”Screenshot shows the before version of the upload screen”

![After upload screen](b-after-upload.png)”Screenshot shows the after version of the upload screen”

By showing the preview screen (when everything is correct and no validation is needed), the user can quickly and easily see the title and first five rows. This is enough information to validate at a glance that the correct spreadsheet csv is selected.

## Upload screen validation errors
Screenshots showing the validation that appears firstly for column errors and then secondly, on a new screen, errors within the spreadsheet.

![Validation for upload screen 1](c-error-upload.png)”Screenshot shows the error messages for upload screen 1”

![Validation for upload screen 2](d-error-upload.png)”Screenshot shows the error messages for upload screen 2”

The header columns validation happens first, so that we can confirm that we are collecting the correct information. The second validation screen then looks at the subsequent rows to check the data. If there are errors, the support agent may need to reach back out to someone to find the correct information.

Using this validation method helps the support user easily identify any issues in the csv.

This format uses the same patterns seen on Gov Notify. However, to match with government services way of writing validation, the messages are phrased as ‘enter a’, rather than ‘not a’, which is the format used on Notify.

##  Clawback journey

In research, participants struggled to efficiently complete the clawback process. Specifically, users struggled to know how to reject only part of a claim. The problem statement off the back of user research is “how do we help users understand that a claim can be partially wrong and that they must state the incorrect mentor as the reason for the clawback?”

To do this we built out screens which allowed the user to enter rejection information in relation to which mentor it applied to.

In the first design, users were presented with one screen that expected them to fill in clawback details for the entire claim. This could mean that the reason for clawback could be a long list of names and reasons. This is specifically where users struggled to complete a partial clawback effectively.

![Clawback screen before](e-clawback.png)”Screenshot shows before version of the clawback details screen”

We iterated this design to split out this clawback process by mentor. It also pulls in the information that the provider filled in during the auditing process, as well as how the school responded.

Splitting the journey per mentor supports the more likely scenario of partial clawback rather than an entire claim.

![Clawback screen after](f-clawback.png)”Screenshot shows after version of the clawback details screen”

## School rejection

As part of improving this clawback process, the school information screens had to be added during the ‘auditing>reject part’ of the journey. Although this information would be logged in Zendesk, asking the user to add it here allows a better audit trail and easier flow for clawback because this information can then be pulled in to the final clawback flow, negating the need to go back and check Zendesk after a gap in time, or change in support agent.

![Response screen](g-response.png)”Screenshot shows the response screen”

Previously the school rejection journey contained no way of entering relevant information and if information needed to be recalled later, they would need to check Zendesk

## Activity log

With the current activity log, there was no way of knowing which claims were included in a payment or clawback if they hadn't been entered using a CSV, as there would be no file to download.

To improve the activity log, we ensured every action had a page where details could be viewed, any files could be downloaded, and any relevant emails could be resent.

![Activity log before](h-activitylog-before.png)”Screenshot shows the before version of the activity log”

![Activity log after](i-activitylog-after.png)”Screenshot shows the after version of the activity log”

![Activity log details](j-activitylog-details.png)”Screenshot shows activity log details”
