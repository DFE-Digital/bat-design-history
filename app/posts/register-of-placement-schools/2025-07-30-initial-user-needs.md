---
title: Initial user needs
description: A list of user needs that will be validated through user research and stakeholder feedback
date: 2025-07-30
tags:
  - user needs
  - placement schools
  - training providers
related:
  items:
    - text: Initial user needs for the Register of training providers
      href: /register-of-training-providers/initial-user-needs/
    - text: Why do we need a register of placement schools?
      href: /register-of-placement-schools/why-do-we-need-a-register-of-placement-schools/
eleventyComputed:
  eleventyNavigation:
    key: register-placement-schools-initial-user-needs
    title: Initial user needs
---

This post outlines the initial user needs that will shape the Register of placement schools (RoPS).

The register will hold a reliable record of schools that participate in initial teacher training (ITT) and their relationships with accredited providers and academic years. These needs focus on what users are trying to achieve, not on how we might deliver it. They also show how RoPS supports other Becoming a teacher (BAT) services.

RoPS concentrates on schools’ participation in ITT and school–provider relationships. It will align with [Get information about schools (GIAS)](https://get-information-schools.service.gov.uk/) for school identity and with the [Register of training providers (RoTP)](https://register-of-training-providers.education.gov.uk/) for provider identity. Course choice and applying remain with Find teacher training courses and Apply for teacher training services, respectively.

## DfE teams (support, policy, funding, data)

DfE teams use the register to understand where placements happen, keep data trustworthy and make decisions. Support teams need clear histories of change. Policy and funding teams need coverage by place, phase and subject over time. Analysts need structured access with consistent identifiers to link datasets.

### Support

As a DfE support agent:

- I need an audit trail of changes to placement school records by academic year, so that I can investigate issues and maintain data integrity.
- I need to see the source and timestamp of each field, so that I can answer user queries with confidence.
- I need a way to capture and track data corrections raised by schools or providers, so that I can resolve issues and improve data quality.

### Policy

As a DfE policy lead:

- I need to know which schools participate in ITT by academic year, so that I can monitor delivery and plan interventions.
- I need counts of active, newly added and withdrawn placement schools over time, so that I can understand trends.
- I need to identify gaps in placement coverage by location, phase and subject, so that I can target support.

### Funding

As an ITT funding analyst:

- I need a reliable view of placement activity by provider, school and academic year, so that I can inform funding policy and checks.
- I need school and provider identifiers such as URN and UKPRN in the dataset, so that I can reconcile records used in funding processes.

### Data analysis

As a DfE data analyst:

- I need structured access to placement school data via export and API, so that I can analyse placements, partnerships and provision.
- I need consistent identifiers across datasets, so that I can link placement data to other DfE records.

## Candidates and trainees (public interface)

A public view of the register helps candidates and trainees understand where training takes place. They need to search by place, filter by relevance and see which providers partner with each school by academic year. They also need clear signposting to apply via the right service.

### Candidates

As a candidate:

- I need to find placement schools near a place or postcode, so that I can shortlist realistic options.
- I need to filter schools by phase and subject, so that I only see schools relevant to my training.
- I need to understand each school’s setting and type, for example, mainstream, special or alternative provision, so that I can judge fit.
- I need to see which accredited providers a school partners with in the current and recent academic years, so that I can choose a course with placements that suit me.
- I need to know whether a school is currently participating in placements this academic year, so that I can assess how active it is.
- I need clear, consistent school details, including name, URN and location, so that I can identify the right school.
- I need to see when the information was last updated and the source, so that I can trust what I am viewing.
- I need a simple way to report inaccurate information, so that the register can be corrected.
- I need clear signposting to providers for applications and next steps, so that I know who to contact.

### Trainees

As a trainee:

- I need to confirm the details of my placement school, including URN and address, so that I avoid confusion before I start.
- I need to see other placement schools partnered with my provider in my area, so that I can discuss alternatives with my provider if plans change.
- I need the academic year shown on school–provider relationships, so that I can understand whether information is current or historical.

## Becoming a teacher service teams

Other BAT services use the register as the single source of truth for placement participation. They need stable identifiers, timely updates and filters that let them present relevant information to their users without storing duplicate data.

As a BAT service team member:

- I need a reliable, read-only API for placement school records, so that my service can use accurate data without maintaining its own copy.
- I need change events or dated snapshots, so that my service can stay in step with updates.
- I need to filter placement schools by attributes such as phase, subject and location, so that I can present relevant results.
- I need to resolve school records by URN and align with GIAS, so that I avoid duplicates and display the correct school.
- I need to know when a school becomes inactive for placements, so that I do not show outdated information.

## Register of placement schools service team

The service team needs to assemble trustworthy data from source systems, reconcile identities and publish a clear history. The focus is reliable imports, strong provenance and transparent change history by academic year.

As a RoPS team member

- I need to import and reconcile placement school data from Register trainee teachers by academic year, so that the register reflects real activity.
- I need to map historical school entries to current GIAS records, so that we avoid duplicates and preserve continuity.
- I need to reconcile provider-to-school relationships with the accredited provider and academic year, so that we can show who placed whom and when.
- I need to flag missing or unrecognised schools in RTT data, so that we can correct errors before publishing.
- I need to define and apply minimum data-completeness rules, so that only valid records appear in the register.
- I need to record data lineage and field-level source, so that users can see where each value came from and when it changed.
- I need activity logs and version history, so that changes are transparent to users and auditors.
- I need controlled reference data for phases, subjects, regions and statuses aligned to GIAS, so that the register remains consistent.

## What we did not include

We did not include provider-authored editing needs or school-authored editing needs. Today, providers and schools act mainly as data subjects for RoPS. Editing and submission of trainee and placement information remains with Register trainee teachers and related services. We will revisit these needs if research shows a clear benefit to moving editing into RoPS.

## How we will use these needs

We will use these needs to:

- prioritise features such as identifiers, provenance and academic-year views
- guide API design, change history and snapshot publishing
- plan research with our stakeholders including candidates, trainees and service teams
- measure success, for example, reduced duplicate schools, faster data corrections and uptake of the API across BAT services

*[API]: application programming interface
*[URN]: unique reference number
*[UKPRN]: UK provider reference number
