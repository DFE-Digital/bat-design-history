---
title: Seeding the register with provider data
description: We combined data from multiple DfE services and external sources to populate the register with accurate provider, partnership and accreditation records
date: 2026-02-13
tags:
  - data
  - training providers
  - partnerships
  - accreditations
  - addresses
related:
  items:
    - text: Defining the attributes of teacher training providers
      href: /register-of-training-providers/defining-the-attributes-of-teacher-training-providers/
    - text: Geocoding addresses
      href: /register-of-training-providers/geocoding-addresses/
    - text: Releasing the first slice of the Register of training providers
      href: /register-of-training-providers/releasing-the-first-slice-of-the-register-of-training-providers/
---

Before the register could be useful, it needed accurate and complete data. We seeded the register by bringing together provider, partnership and accreditation data from multiple sources across the Department for Education (DfE) and external organisations.

## Why we did this

The register is intended to be a single source of truth for initial teacher training (ITT) providers. Without reliable seed data, users would need to manually enter every provider record, which would be slow, error-prone and impractical.

By seeding the register with existing data, we could:

- give users immediate access to provider records when the service launched
- reduce the manual effort needed to build the register from scratch
- establish a baseline of data that we could then validate and improve

## Where the data came from

We drew on 4 main sources to populate the register.

### Register trainee teachers (Register)

Register holds records of providers and partnerships involved in ITT. We used it as a primary source for provider details and partnership relationships.

### Publish teacher training courses (Publish)

Publish holds information about providers and their partnerships in the context of recruitment cycles. Recruitment cycles in Publish correspond to academic years, so we mapped the data accordingly.

### Market regulations team

The market regulations team at DfE maintains records of accredited providers, including their accreditation numbers and the dates those accreditations are valid.

### Ordnance Survey

We used the Ordnance Survey (OS) Places API to look up and standardise provider addresses and to collect latitude and longitude for each address.

## What data we collected

We seeded the register with the following attributes for each provider:

- legal name
- operating name
- provider code
- UK provider reference number (UKPRN)
- unique reference number (URN)

For addresses, we collected:

- address lines 1, 2 and 3
- town or city
- county (optional and usually empty in OS data)
- postcode
- geolocation (latitude and longitude)

For accreditations, we collected:

- accreditation number
- start date
- end date (optional)

For partnerships, we collected:

- accredited provider
- training partner
- start date
- end date (optional)
- academic years

## Academic years and recruitment cycles

Register and Publish use different terminology for overlapping concepts. Publish uses 'recruitment cycles', which recruit for academic years. The register uses academic years to link providers and partnerships.

We aligned the data around academic years to keep things consistent.

## How much data we used

Publish and Register hold data from 2019 onwards. We chose to use data from 2024 onwards because older data was of low quality. Recent data has been systematically improved over the last recruitment cycle, making it more accurate and reliable.

We used 3 academic years of data:

- 2024 to 2025 (previous academic year)
- 2025 to 2026 (current academic year)
- 2026 to 2027 (next academic year)

## How we validated the data

We cross-referenced the seed data against several external sources to check for accuracy and completeness:

- [Get information about schools (GIAS)](https://get-information-schools.service.gov.uk/) - to verify school-based provider details and URNs
- [UK register of learning providers (UKRLP)](https://www.ukrlp.co.uk/) - to check provider names and UKPRNs
- Ordnance Survey - to validate and standardise address data
- Companies House - to verify legal names for providers registered as companies
- provider websites - where available, to confirm operating names and other details

## How we cleansed the data

The data needed significant cleansing before it was ready to use. We used a combination of semi-automated and manual processes.

### Semi-automated cleansing

We used external APIs and data sources to clean data at scale:

- Ordnance Survey to standardise address data and fill in missing geolocation information
- UKRLP to check and correct provider names and UKPRNs

### Manual cleansing

Some data required hands-on work:

- manipulating spreadsheets to correct formatting and structural issues
- using a list and form to fix empty or erroneous address data
- reviewing individual provider records against source data

### Reports to identify gaps and errors

We created reports to systematically work through data quality issues. These helped us find and fix:

- providers with missing, invalid or duplicate UKPRNs
- providers without an address
- providers with an operating name or legal name that did not match UKRLP or market regulations team records

We worked through each report until the data met the quality standard needed for the register.

## What we learned

Seeding the register highlighted several things:

- older data from DfE services was unreliable and needed to be excluded rather than cleaned
- using multiple validation sources gave us more confidence in the final data than relying on any single source
- semi-automated cleansing saved significant time, but manual review was still needed for edge cases
- creating targeted reports to identify specific data problems was more effective than trying to review all records at once

*[API]: application programming interface
*[DfE]: Department for Education
*[GIAS]: Get information about schools
*[ITT]: initial teacher training
*[OS]: Ordnance Survey
*[UKPRN]: UK provider reference number
*[UKRLP]: UK register of learning providers
*[URN]: unique reference number
