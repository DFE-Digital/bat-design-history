---
title: Withdrawing an application iteration 2
description: Getting the withdraw application flow ready for first release
date: 2021-04-15
---

The [first iteration of withdrawing an application](/manage-teacher-training-applications/withdrawing-an-application) was to test whether users could find the ‘Withdraw at candidate’s request’ link and differentiate adequately from rejecting an application and withdrawing an offer.

As this tested well, this iteration is to tidy the rest of the flow and get it ready for first release.

## How it works

Users can click a ‘Withdraw at candidate’s request’ link from the application details page at any time.

When a user clicks the link they’re taken to a page that asks them to confirm that they want to withdraw the application.

If there are any upcoming interviews this page will explain that they’ll be cancelled.

Clicking ‘Cancel’ or ‘Back’ will take the user to the application details page.

Clicking ‘Withdraw application’ will:

- withdraw the application
- cancel any upcoming interviews
- take the user to the application details page with a notification banner saying ‘Application withdrawn’
- send an email to the candidate to confirm they’re application has been withdrawn

## Future considerations

We’re not capturing a reason for withdrawing the application because we don’t know what users, candidates or DfE would do with it.

But we have a concern that some providers may withdraw an application instead of rejecting it. If this happens, we may explore capturing a reason as a potential solution to this.
