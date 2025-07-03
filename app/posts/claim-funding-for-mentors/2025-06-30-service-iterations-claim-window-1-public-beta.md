---
title: Service iterations - Claim window 1, public beta
description: Since the public beta was launched, the service team has received feedback, which has been reviewed. It is detailed below, with any associated iterations.
date: 2025-06-30
tags:
  - support
  - onboarding
  - schools
  - public beta
---

Since the public beta was launched, the service team has received feedback, which has been reviewed. It is detailed below, with any associated iterations.

## Support dashboard performance improvements

A notable 6-8 second delay was experienced when the support dashboard was loaded, resulting in significant time being lost by support users managing claims.

This delay was caused by a JavaScript component that loaded over 25,000 schools and 870 providers into memory. To resolve this, a new JavaScript component was created. Schools and providers are now loaded on demand via a new endpoint. As a result, the page load time was reduced to around 500 milliseconds (ms).

Although this was a marked improvement, high load times were still observed. After further investigation, an N+1 query was identified as the cause of the additional delay.

An N+1 query is a common performance issue in web applications where a single query is made to retrieve a list of items, and then for each item in that list, an additional query is made to retrieve related data. This can lead to a significant increase in the number of database queries and can slow down the application.

To fix this issue, eager loading was implemented, allowing all related data to be loaded in a single query. After this change, the page load time was reduced to around 200ms.

A significant improvement in performance was achieved, with the page load time reduced by over 95% and claims able to be managed more efficiently.

## Update regions

A support request was received from a user based in South Bucks, stating that the rates for the rest of England were being received, rather than the fringe area rates.

After investigation, it was found that a change in the Get Information About Schools (GIAS) data had updated the school details to reflect that the school was in Buckinghamshire, rather than South Bucks.

Both South Bucks and Chiltern are now inactive local authorities and have been replaced by the Buckinghamshire local authority. The service was updated to treat Buckinghamshire as a fringe area, so users in this region now receive the correct rates.

Some schools still have the old local authority codes, so these codes have been kept under the fringe area to ensure accurate rates for all affected schools.

As part of this work, the grant conditions were also updated to reflect this change.

## Emails originating from the wrong address

A user reported that an email was received from [becomingateacher@digital.education.gov.uk](mailto:becomingateacher@digital.education.gov.uk) instead of the expected [ittmentor.funding@education.gov.uk](mailto:ittmentor.funding@education.gov.uk) address.

This was due to a global setting in the Notify service, and after investigation, it was realised that this issue affects every service in the Becoming a Teacher (BAT) service line. The only way to resolve this issue would be to create a Claim funding for mentor training specific Notify account, which was agreed to be unfeasible at this time.

As a result, it was decided that this issue would not be fixed.

## End of claim window banner

It was recognised that imminent claim window closures were not clearly communicated to users via the existing warning text.

To improve clarity, an information banner was added to the top of the claim page, displaying the remaining time until the claim window closes. This banner is visible to all users and provides a clear indication of how long remains to submit claims before the deadline.

The banner appears when there are 30 days remaining and displays the number of days remaining until only 1 day remains. At that point, the banner changes to display the number of hours and minutes remaining until the claim window closes.

![An image of an important banner showing the text "There are 29 days remaining to claim for ITT general mentor training before the claim window closes."](end-of-claim-window-banner.png "End of claim window banner")

## Remove claim window selection

Previously, support users were required to select a claim window when onboarding schools. After some users reported that they couldn’t submit claims, it was found that onboarding had been done to the incorrect claim window.

Several approaches were considered to improve understanding in this area. However, it was ultimately decided that there was no clear need for support users to select a claim window when onboarding schools, as onboarding should only occur for the current claim window.

The claim window selection was removed from the onboarding process, and it is now set automatically to the current claim window when a school is onboarded.

This will continue to be monitored, and if a need arises to allow support users to select a claim window, the situation will be reassessed.

## View manually onboarded schools

Due to the conditions of the funding for ITT mentor training, schools should only be onboarded when their placements have been tracked via the Register trainee teachers (Register). However, due to delays in onboarding and issues with receiving data on time, exceptions have been made and manual onboarding by support has been allowed.

All manually onboarded schools must first be verified by their provider to ensure eligibility for funding. To facilitate this, a new page was added to the support setting page, allowing support users to view all manually onboarded schools.

The support user who onboarded each school is now tracked, providing a clearer audit trail.

A basic table was created, listing the name of the school, the user who onboarded the school, and all claim windows for which the school is eligible. If a school is eligible for multiple claim windows, all eligible claim windows are shown, with the current claim window highlighted.

Should more specific needs arise, further functionality will be considered for this page, but it is believed that the current solution is enough for the policy team.

![An image of a page with a table of schools showing the name of the school, the user who onboarded the school and the claim windows they are eligible to claim for](view-manually-onboarded-schools.png "The first implementation of the manually onboarded schools page")

## Improvements to claims invite email content

A new section was added to the claims invite email, explaining why the school was invited to make a claim.

Some schools were confused as to why an invitation to make a claim was received, and this new section aims to clarify the reason and the purpose of the service.

This change was made to reduce the number of support requests received from schools who are unsure why an invitation was sent.

While updating this text, it was also noticed that providers were being referred to inconsistently, sometimes as an "accredited provider". This was standardised to "accredited ITT provider" to ensure consistency across the service.

![An image showing the improved email content](improvements-to-claims-invite-email.png "The updated claims invite email content")

## Add daily claim slack report and total claim amount

A strong appetite was expressed for a daily report to track key service metrics. The following metrics are now tracked
and reported:

- Number of claims made since the last report
- Number of schools making their first claim since the last report
- Number of providers with their first claim assigned since the last report
- Amount claimed since the last report
- Total number of claims since the start of the academic year

To handle this report, a new Slack bot was added, posting a daily report to the #claim-funding-for-mentors channel at 5pm.

A request was received to add the total amount claimed since the start of the academic year, and this has been included.

Further useful metrics may be added as the report is iterated upon.

![An image of the Slack message sent for the daily claims roundup report](daily-claim-slack-report.png "An example of the daily claims roundup report sent to Slack")

## Add link to claim in clawback email

A common support request was received from users who were unsure how to access a claim that required clawback. This was due to an email being sent from the service directing users to view the claim for further information.

The specific email sent to users only included a generic link to the claims index page, which does not show claims that have moved past the "Submitted" status. This meant that the claim requiring clawback could not be found, despite the email's instructions.

To resolve this issue, a link to the specific claim that was clawed back was added to the email sent to users, as no restriction is placed on viewing the claim.

As part of future work, a way for users to view their historic completed claims will be added, which should further improve the user experience.

![An image showing the new link in an email sent to a school that requires a clawback](add-link-to-clawback-email.png "The new link in the clawback email")

## Consolidate national providers

Some national providers are present on the service, with each of their sites treated as a separate provider. This is due to the way data is handled by the Register service. As a result, claims were created against many different sites for the same provider.

A request was received to treat headquarters as a single entity for all sites, so that audit and clawback processes could be managed more easily.

It was agreed that this was a reasonable request, but it was realised that the sister service, Manage school placements, still requires these sites to be separate entities.

Due to the structure of the service and the shared codebase, a decision was made to create a claims-specific version of the provider search component. This version explicitly excludes all sites that are not the headquarters for this provider.

These sites remain in the database, allowing the Manage school placements service to continue functioning as intended, while being hidden from the claims service.

## Clean up closed schools on Get Information About Schools (GIAS) sync

A nightly sync with the GIAS service is performed to keep school records up to date. During the public beta, support requests were received from users who noticed that outdated school records were being used.

On investigation, it was found that while schools that have closed are not imported, an issue existed: if a school was open when onboarded but later closed, it was not being removed from the database. As a result, the latest version of the school was never imported, and records became outdated.

This meant that when syncing by Unique Reference Number (URN), the old record was matched, not the current one.

To address this, logic was added to check if a school is closed and, if so, remove it from the database. However, to avoid losing important data, schools that have already been onboarded are not deleted. Instead, users are relied upon to notify if their school has closed, so it can be removed manually.

These changes ensure that only active schools are contained in the database and that the latest information from GIAS is always reflected.

## Allow support users to delete submitted claims

During the public beta, a support request was received from a user who realised a mistake had been made in a submitted claim. Deletion of the claim and submission of a corrected version was requested, but no way to do this was available.

This led to consideration of whether support users should be allowed to delete submitted claims. At first, it was decided that submitted claims could not be changed or deleted, to protect the integrity of the process. However, if an error is spotted before the claim is sent to the Education and Skills Funding Agency (ESFA), not allowing changes could create extra work for all involved.

After further discussion, a feature was introduced allowing support users to delete submitted claims, as long as the claim has not yet been sent to the ESFA. This means that mistakes can be fixed before the claim is finalised.

Once a claim has been sent to the ESFA, it cannot be deleted or changed. Any issues at that stage must be handled through the rejection process.

![An image showing the new remove claim link only visible to support users](delete-submitted-claims.png "The new remove claim link only visible to support users")
