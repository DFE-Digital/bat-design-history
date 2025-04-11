---
title: Onboarding organisations that do not have a unique reference number (URN)
description: The approach the Claim service will take to onboard organisations that do not have a unique reference number (URN) from Get information about schools (GIAS)
date: 2025-04-11
tags:
  - edge cases
  - onboarding
  - schools
  - public beta
related:
  items:
    - text: How we plan to onboard schools in public beta
      href: /claim-funding-for-mentors/how-we-plan-to-onboard-schools-in-public-beta/
---

Moving from private to public beta will see organisations eligible to claim funding for general mentor training increase from 231 to over 12,000.

With this comes the increase in the number of organisation and setting types that will be eligible to use the Claim funding for mentor training (Claim) service.

One such organisation type we identified was those who did not hold a unique reference number (URN) or a UK provider reference number (UKPRN).

These unique identifiers are the attributes used when onboarding organisations into the service.

Organisations attain these unique identifiers through interaction and registrations with the Department for Education (DfE).

Although mentor funding is associated with the mentor, who is identified through their teacher reference number (TRN), for a claim to be made the organisation hosting the mentor must first be added to the service along with their associated users.

The Claim service is based on data attained from the Get Information about Schools (GIAS) service.

Prior to onboarding, initial teacher training (ITT) providers record organisations they work in the Register trainee teachers (Register) service to give us an up-to-date list. 

This list of schools/organisations then has a first user associated to each entity. 

The list of initial users is obtained from DfE Sign-in (DSI) and matched to the school.

When onboarded the service creates the organisation, based on the GIAS data, and associates the first user to that organisation.

Once complete the service automatically generates and sends an invitation email which includes a link allowing the first user to log-in.

We know education settings such as private nurseries fall into the category where through a lack of DfE interaction no such identifiers have been issued.

The problem we identified occurs as mentors within those settings are eligible and will have a TRN, the organisation hosting them may be unknown to DfE.

This edge case explores how we can ensure such organisations are able to use the service and claim the grant funding available to them.

## What the problem is

Claim uses a combination of URN and UKPRN to identify and onboard organisations into the service.

We know there will be organisations hosting eligible mentors who do not have either a URN or a UKPRN.

The as-is flow would prevent them from being able to access the service as the organisation would not be found in the GIAS dataset.

## What we did

Where an organisation has not been onboarded, they are able to contact the support team and request to be added. 

This is done via a look-up against the GIAS data using a postcode, URN, UKPRN, or a street address. 

Considering such organisations within this edge case, the look-up will fail as they are not within the GIAS data.

We conceptualised a variation to this flow where the support user could initiate a manual add process where the look-up was not required, like that used as a manual override to a street address look-up.

To test our hypothesis surrounding such organisations, we identified some private nursery settings via online searches. We sought to identify them within the service via the look-up. 

Following this, we tested further against the GIAS service and the UKPRN look-up service. The test was to see if we could identify the organisation through any combination of look-up values.

In all the tests, we failed to identify the organisation, proving our hypothesis correct, that organisations not within our datasets would be hosting eligible mentors.

Having tested our hypothesis, we conceptualised a flow where we identified three key areas where we needed to run further in-depth testing and analysis:

- Allowing users access to the service via DfE Sign-in
- What unique identifier could we associate to the organisation
- How could we ensure payment ran as intended
- Allowing users to access the service

From our hypothesis testing, we identified that a smaller subset of the organisations used generic email domains (such as @gmail.com or @outlook.com).

We know such domains are restricted in functionality when using the DSI service. 

The Claim service uses DSI, so we wanted to test if a user with such a domain email would be able to access the service.

To test this, we set up a series of user accounts on generic domains. We then created organisations within the service and associated our users to them using the generic email domain address. 

Although registration was required with the DfE Sign in service, this was seamless using the generic domains.

In all tests, users were able to access the Claim service.

Taking this a step further, we identified some testing personas from private beta where the project team had used generic domains as part of a bug party. 

In all instances, these users were still able to access the service then months later.

We did encounter the known issue where a user setting up a DSI account for the first time needs to navigate back to the invitation link as the redirects become lost in the registration flow.

## What unique identifier could we associate to the organisation

Organisations within the service need a form of unique identifier; currently, the Claim service is primarily using the URN to identify the school/ organisation setting. 

All claims within the service have a unique claim ID which is generated when a claim is created. This is what is used when managing service-level processes.

The necessity for there to be an organisation-level unique identifier is primarily driven through the payments process. 

Finance and/or the Education Skills Funding Agency (ESFA) require the unique identifier when matching the total claim sum to a school.

Typically, the URN, in conjunction with the school's name and address, is used to match the school to bank details within the finance systems. This matching is done as part of the Claims assurance and payments process.

Through analysis of the payments flow, we identified that the identification of organisations is done to match them to a vendor number; the vendor number is the unique identifier used within the financial systems.

An existing edge case within the Claim service is for organisations who cannot be identified through the finance matching process to provide and/or update their bank details. 

To do this, the organisation needs to make the necessary updates using the [Provide service](https://www.gov.uk/guidance/provide-information-about-your-banking-and-payments-to-dfe).

The Provide service is the only way an organisation can supply DfE with their payment details as it is subject to a series of financial assurance checks.

Given we already have the Provide service facilitating an edge case within the Claim service, its back-end assurance benefits, and the fact it provides the user with a vendor number, we identified this would be a viable alternative to a URN or UKPRN. 

From a school user’s perspective, if they were impacted by this edge case, they would need to complete this service anyway to supply their payment details.

## How we will ensure the payment will be processes as intended

Based on the research and analysis, we identified that the vendor number would be a sufficient alternative to either a URN or a UKPRN as it was a unique value that could be used to match the claims to a school’s payment details.

Through the payments flow, the URN or UKPRN is used in conjunction with other attributes to identify the school’s Vendor number. The vendor number is associated with the school and allows payment to be made.

We agreed that providing a vendor number would be a sufficient alternative to the URN or UKPRN if the ancillary information were also provided in the comma separated values (CSV) exports used to arrange and report on payments.

## Making the vendor number mandatory

Having agreed the vendor number would be a sufficient alternative, we needed to decide if we were only allowing organisations to be onboarded once they had their vendor number or would we allow them to be provisionally onboarded without it.

We decided that a vendor number would be mandatory for an organisation to be onboarded because:

- Without it, we may end up with claims that could not be paid within the service
- Unpayable claims would mean additional conditional statuses being developed
- Integrity of the organisation dataset would be compromised due to unidentifiable schools being listed
- New functionality for users to add/edit the vendor number after onboarding
- New conditional chaser/prompt notifications to the user would be required

## The outcome and next steps

By mandating the vendor number, we minimised the changes required to the service and ensured the current processes remained as-is.

To allow non-URN or UKPRN-holding organisations to be onboarded, we needed to make changes to the manual to add an organisation flow.

Currently, the support user selects on academic year and then interacts with the school look-up feature.

Now, the support user will still select on academic year and complete a search using the look-up, but if they are unable to identify the school, then a manual add option is available.

In the first instance, the support user will direct the requesting school to complete the Provide service flow to obtain their Vendor number. 

Having completed this, the school will need to contact support again to go through the onboarding flow. 

The onboarding flow’s manual add path will mandate the Vendor number.

Once the school and its first user have been added, then all existing service processes remain the same.

The other changes required were on the CSV exports that the service creates as part of the payment flows. These needed to be updated to include the school’s vendor number. 

This involved adding a new column to the export.

All other information within the export remained the same.
