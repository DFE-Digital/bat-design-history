---
title: Starting the Manage service on GOV.UK
description:  We created a start page on GOV.UK and made plans for URL redirects and content changes within Manage.
date: 2022-01-11
---

{% from "screenshots/macro.njk" import appScreenshots with context %}

The ‘Manage teacher training applications’ service currently starts on a service.gov.uk domain rather than on GOV.UK. The start page is not indexed by search engines, so users find it using browser bookmarks or by opening emails sent by the service.

We’ll start the service on GOV.UK so that:

- it’s easier for users to find
- we meet government standards, which say that [all public-facing services must have a starting point on GOV.UK](https://www.gov.uk/service-manual/service-assessments/get-your-service-on-govuk)

## How it works

We need to make several changes in the following order.

1. Change the content on `/provider/sign-in`, the interim page between the start page and DfE Sign-in.
2. Redirect signed in users away from the interim page.
3. Prepare to remove `/provider` and redirect traffic. Add a feature flag in the code so that these changes do not take effect immediately.
4. Publish the new start page on GOV.UK. Remove the feature flag so that changes from step 3 take effect.

### 1. Change the content on the interim page

We cannot link directly from a GOV.UK page to DfE Sign-in, so we’ll need to keep the interim page at `/provider/sign-in`.

We’ll change the content on this page to match the new start page. We’ll have very little content before the start button, since most users will just need to click to continue.

In the content after the start button we’ll tell users how to get an account if they do not already have one.

![Interim page](interim-page.png "Interim page")

### 2. Redirect signed in users away from the interim page

Users who have signed in to the service should be redirected from `/provider/sign-in` to `/provider/applications`.

### 3. Prepare to remove /provider and redirect traffic

We need to be ready to remove `/provider` and redirect traffic to:

- `/applications` if the user has signed in
- `/sign-in` if the user has not signed in

We’ll put this behind a feature flag in the code so that we can make it take effect once the GOV.UK start page has been published.

### 4. Publish the new GOV.UK start page

We worked with the DfE digital communications team to create content for a new start page which tells users:

- who can use the service
- the main features of the service
- how to get an account

We’ll include more content on this page than on the interim page because some users may find it while browsing GOV.UK. We need to help users understand whether they need to use the service.

The start page was created as a draft in the Whitehall content management system. The DfE digital communications team will publish it once we’re ready.

![GOV.UK start page](govuk-start-page.png "GOV.UK start page")

## Creating a separate page for each service

We considered creating a single start page for Publish, Manage and Register. We decided not to do so because:

- the user groups for the 3 services are different, although they significantly overlap - we’ll make it easy for users to find what they’re looking for by focusing on one thing
- the services allow users to complete different tasks relating to different stages in the teacher training application process
- it will be easier for users to spot what they’re looking for in search results, since we can name each start page after an individual service instead of using a title which sums up the services
- having a separate start page per service is a standard cross-government pattern
