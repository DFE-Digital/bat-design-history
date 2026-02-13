---
title: Releasing the second slice of the Register of training providers
description: At the beginning of February 2026, we released the second slice of the register, adding seed data, partnerships, activity logs, a read-only API and disaster recovery
date: 2026-02-13
tags:
  - register
  - iteration
  - api
  - partnerships
  - activity log
  - data
  - disaster recovery
related:
  items:
    - text: Releasing the first slice of the Register of training providers
      href: /register-of-training-providers/releasing-the-first-slice-of-the-register-of-training-providers/
    - text: Seeding the register with provider data
      href: /register-of-training-providers/seeding-the-register-with-provider-data/
    - text: Tracking activity across the service
      href: /register-of-training-providers/tracking-activity-across-the-service/
    - text: Iterating on how we set up partnerships between providers
      href: /register-of-training-providers/iterating-on-how-we-set-up-partnerships-between-providers/
    - text: Testing our disaster recovery process
      href: /register-of-training-providers/testing-our-disaster-recovery-process/
    - text: Managing API and support user accounts
      href: /register-of-training-providers/managing-api-and-support-user-accounts/
---

At the beginning of February 2026, we released the second slice of the [Register of training providers](https://register-of-training-providers.education.gov.uk/).

The [first slice](/register-of-training-providers/releasing-the-first-slice-of-the-register-of-training-providers/) established the foundations: user sign-in, support user management, and the ability to add and manage provider records. The second slice builds on this by populating the register with real data and adding features that make the service more useful and resilient.

## What we released

The second slice included:

- seeding the register with provider data from existing Department for Education (DfE) services
- building the ability to manage partnerships between providers
- building global and provider-level activity logs
- creating a read-only API for basic provider data
- testing the disaster recovery process

## Seeding provider data

Before the register could be useful, it needed accurate and complete data. We seeded the register by bringing together provider, partnership and accreditation data from multiple sources, including Register trainee teachers, Publish teacher training courses, the market regulations team and Ordnance Survey.

We used data from 2024 onwards, covering 3 academic years. Older data was excluded because of quality issues.

The seed data went through semi-automated and manual cleansing, with cross-referencing against external sources like Get information about schools (GIAS) and the UK register of learning providers (UKRLP) to check accuracy.

Read more about [seeding the register with provider data](/register-of-training-providers/seeding-the-register-with-provider-data/).

## Provider partnerships

We added the ability to manage partnerships between accredited providers and training partners. Users can now create, edit and delete partnerships, with each partnership recording:

- the accredited provider and training partner
- start and end dates
- the academic years the partnership covers

Linking partnerships to dates and academic years helps us show when a partnership existed and supports funding and quality assurance processes.

Read more about [iterating on how we set up partnerships between providers](/register-of-training-providers/iterating-on-how-we-set-up-partnerships-between-providers/).

## Activity logs

We built activity logs at both the global and provider level. The activity log shows a timeline of changes made across the service, including:

- provider details
- accreditations
- addresses
- partnerships

Each activity item records what changed, what action was taken, and who made the change. The log is grouped by day and paginated to keep it manageable.

Read more about [tracking activity across the service](/register-of-training-providers/tracking-activity-across-the-service/).

## Read-only API

We created a read-only API to allow other services to access basic provider data. The providers endpoint returns records ordered by the date they were last updated. Each record includes:

- provider ID
- operating name
- provider type
- provider code
- accreditation status

As a temporary measure, we use a rake task to generate API keys. We are planning a proof of concept to test the API with consumers.

Work is ongoing to allow users to create and manage API clients through the user interface. Read more about [managing API and support user accounts](/register-of-training-providers/managing-api-and-support-user-accounts/).

## Disaster recovery

We tested our disaster recovery procedures to make sure we can restore the service if we lose our database or data. The test covered 2 scenarios: loss of the database server and loss of data or data corruption.

The recovery procedures worked as documented. We identified improvements to make, including adding the DfE Sign-in temporary URL to our prerequisites checklist and reviewing our monitoring setup.

Read more about [testing our disaster recovery process](/register-of-training-providers/testing-our-disaster-recovery-process/).

## What comes next

With the second slice in place, the register now holds real provider data and supports key workflows around partnerships and activity tracking. We will continue to iterate based on feedback from users and stakeholders, and expand the API as we learn more about how consumers need to use provider data.

*[API]: application programming interface
*[DfE]: Department for Education
*[GIAS]: Get information about schools
*[UKRLP]: UK register of learning providers
