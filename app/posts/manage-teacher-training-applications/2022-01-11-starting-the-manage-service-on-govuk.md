---
title: Starting the Manage service on GOV.UK
description:  We created a start page on GOV.UK and made plans for URL redirects and content changes within Manage.
date: 2022-01-11
tags:
  - start pages
---

{% from "screenshots/macro.njk" import appScreenshots with context %}

The ‘Manage teacher training applications’ service currently starts on a service.gov.uk domain rather than on the main gov.uk domain.

The start page is not indexed by search engines, so users find it using browser bookmarks or by opening emails sent by the service.

We’ll start the service on the main gov.uk domain so that it’s easier for users to find.

This will also mean that we’re following the approach set out in the government Service Standard, which says that [all public-facing services must have a starting point on GOV.UK](https://www.gov.uk/service-manual/service-assessments/get-your-service-on-govuk).

## What we did

We worked with the DfE digital communications team to create a new GOV.UK start page, using the Whitehall content management system.

We decided to create a start page just for Manage. We considered creating a single start page for Publish, Manage and Register but decided not to do so because:

- the user groups for the 3 services are different, although they significantly overlap - we’ll make it easy for users to find what they’re looking for by focusing on one thing
- the 3 services allow users to complete different tasks relating to different stages in the teacher training application process - users may not need more than one service at a time
- it will be easier for users to spot what they’re looking for in search results, since we can name each start page after an individual service instead of using a title which sums up what the services are for
- having a separate start page per service is a standard cross-government pattern

## How it works

The new start page on GOV.UK tells users:

- who can use the service
- the main features of the service
- how to get an account

There are some elements of the page which we cannot control, such as:

- a heading saying ’Guidance’
- information about the department which created the content and date of publication
- the text ’Applies to England’, which is used when content does not apply to the whole of the UK
- links to print the page

The URL of the page will be www.gov.uk/government/manage-teacher-training-applications.

![GOV.UK start page](govuk-start-page.png "GOV.UK start page")

Users must sign in to DfE Sign-in before they can use Manage.

For security reasons, DfE Sign-in requires a token which has been issued from a page managed by DfE on the service.gov.uk domain.

This means that we cannot link directly from the new start page to DfE Sign-in. Instead we need to keep the interim page at `/provider/sign-in`.

We have not included information about who can use the service, since users should not reach the page unless it applies to them. We do tell users how to get an account.

If a user who has signed in reaches this page, they’ll be redirected to `/provider/applications`.

![Interim page between the start page and DfE Sign-in](interim-page.png "Interim page between the start page and DfE Sign-in")

We’ll remove the old start page from the service.gov.uk domain and redirect traffic from `/provider` to:

- `/provider/applications` if the user has signed in
- `/provider/sign-in` if the user has not signed in

## Order in which changes should be made

We need to make the changes in the following order.

1. Change the content on `/provider/sign-in`, the interim page between the start page and DfE Sign-in.
2. Redirect signed in users away from the interim page.
3. Prepare to remove `/provider` and redirect traffic. Add a feature flag in the code so that these changes do not take effect immediately.
4. Publish the new start page on GOV.UK. Remove the feature flag so that changes from step 3 take effect.
