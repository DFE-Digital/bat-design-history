---
title: Creating a second sandbox environment
description: We created a second sandbox environment to give providers the ability to test our new CSV upload functionality
date: 2025-03-27
tags:
  - sandbox
  - csv
  - bulk uploads
---

We need a secondary sandbox environment for higher education institution (HEI) providers to test the CSV bulk add trainee feature. This feature is part of the work to support our move from the Higher Education Statistics Agency (HESA).

The testing period will run from 1 May 2025 to 15 August 2025.

## Why we did this

We considered using our existing environments but found issues with each option.

### Existing Sandbox environment

Vendors currently use the existing Sandbox environment for API testing against specific providers. Vendors and HEI providers are distinct user groups with different needs. Using a shared environment could cause confusion and testing conflicts.

### Staging environment

We initially considered the Staging environment but dismissed it because:

- it does not follow production security protocols
- providers might upload live data into a less secure environment

### What we needed

We needed an environment that would:

- prevent unauthorised access to production data
- ensure data isolation and security
- allow controlled testing of the CSV bulk add trainee feature
- use production-level authentication

## How it works

We created a secondary sandbox environment called 'CSV Sandbox'. This environment uses production DfE Sign-in to safeguard against unauthenticated access.

### Access controls

We implemented measures to prevent unauthorised access from:

- non-HEI accredited providers
- lead partners

This environment is intended solely for HEI accredited providers. Other users may be authenticated by DfE Sign-in but will not be authorised to access the service.

### Data handling

The CSV Sandbox environment uses sanitised data. There is no need for personally identifiable information in a testing environment.

### External connections

We disabled external connections to systems and services, including:

- DfE Analytics
- the Register API
- email notifications

There is no need for external interaction during testing.

### Visual indicators

We added content to clarify this is not a production environment. This prevents unintended transmission of personally identifiable information (PII).

![Phase banner showing the service is in a sandbox environment](phase-banner.png "The phase banner indicates this is a sandbox environment")

![Notification banner warning users not to enter real data](notification-banner.png "A notification banner reminds users not to enter real trainee data")

## Design decisions

### Why we chose 'CSV Sandbox' as the name

We considered 'Provider Sandbox' but chose 'CSV Sandbox' because it better describes the specific purpose. The environment is focused on CSV testing rather than broader provider activities.

### Why we use production DfE Sign-in

Using production DfE Sign-in means:

- authorised users can access the environment as they would production
- if providers accidentally upload live data, it remains in a secure environment
- we do not need to manage separate authentication credentials

### Continuous integration

We set up continuous integration to deploy changes that address issues found during testing. This provides a fast feedback loop with HEI providers and allows quicker identification and resolution of problems.

### Database reset workflow

We established a database restore and reset workflow. This allows providers to reset their test data and repeat testing as needed.

## What we tested

Before launch, we:

- tested the CSV Sandbox environment end-to-end
- reviewed support communications
- documented the process for provisioning access

This helps us support HEI providers so they can test the CSV bulk add trainee feature with minimal friction.

## Further considerations

We need to consider:

- whether to automate the environment provisioning process
- whether we need a more permanent solution for provider testing
- whether a lighter weight or lower cost setup would work for future testing periods

*[API]: application programming interface
*[CSV]: comma-separated values
*[PII]: personally identifiable information
*[HEI]: higher education institution
*[DfE]: Department for Education
*[HESA]: Higher Education Statistics Agency
