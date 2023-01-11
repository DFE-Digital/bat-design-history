---
title: Helping users check how diverse their candidates are
description: We created a report showing the sex, disability, ethnicity and age of candidates who apply to a provider and are recruited by them
date: 2021-09-07
user_needs:
  - MN029
tags:
  - equality and diversity
screenshots:
  items:
    - text: Reports landing page
      src: reports-landing-page--single-organisation.png
    - text: Reports landing page when the user belongs to multiple organisations
      src: reports-landing-page--multiple-organisations.png
    - text: Sex, disability, ethnicity and age of candidates report
      src: candidate-sex-disability-ethnicity-age-report.png
---

The user need this work aims to address is:

{% set need = collections['user-need'] | slugs(tags) | first %}

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  title: need.data.title,
  description: need.templateContent,
  url: need.url,
  status: need.data.status
}) }}


By making it easy for all providers to view and export equality and diversity information, we can help providers improve their recruitment practices.

## What we did

We created a report called ‘Sex, disability, ethnicity and age of candidates’.

It includes data about candidates applying to the provider’s courses and those the provider recruited.

## How it works

Users can view a report for any organisation they belong to. They do not need any user or organisation permission to view it.

The caption for the h1 heading is the name of the organisation whose data is in the report.

There’s an ‘Export data (ZIP)’ link which generates a ZIP file containing a CSV file for each section of the report.

The report has four sections:

- sex
- disability
- ethnicity
- age

Not all candidates answer the equality and diversity questionnaire when applying, so we highlight where the data comes from at the bottom of the page.

### Sex

This section includes the 4 responses which candidates can give:

- female
- male
- intersex
- prefer not to say

### Disability

Candidates are asked 2 questions. The first is whether they are disabled, with the answers:

- yes
- no
- prefer not to say

Candidates who say ‘yes’ can then choose one or more options from:

- blind
- deaf
- learning difficulty
- long-standing illness
- mental health condition
- physical disability or mobility issue
- social or communication impairment
- other

There is hint text giving examples of each of these. In the report we include this text to help providers understand what sorts of disabilities are included.

If a candidate chooses ‘other’ then they can give details. We do not include these in the report since they are free text so each one is different.

### Ethnicity

Candidates are asked to choose from a broad list of ethnicities:

- Asian or Asian British
- Black, African, Black British or Caribbean
- mixed or multiple ethnic groups
- White
- another ethnic group
- prefer not to say

For each of these they are then asked to choose a more specific option, which includes ‘other’ and ‘prefer not to say’.

In the report, we organise these by listing the more specific options under each of the broader options.

This means that the totals in the ‘candidates applied’ and ‘candidates recruited’ columns will not be the same as the total numbers of candidates.

### Age

Candidates are asked for their date of birth during the application process.

For this report, we consider the age they will be on 31 August of the recruitment cycle. For example, for the 2020 to 2021 cycle we consider their age on 31 August 2021.

The age groups include:

- 18 to 24
- 25 to 34
- 35 to 44
- 45 to 54
- 55 to 64
- 65 and over

### Where this data comes from

The data for sex, disability and ethnicity comes from an optional questionnaire.

We tell users how many candidates completed the questionnaire. We give both a number and a percentage of the total number of candidates who applied to them.

The data for age comes from the candidate’s date of birth, which they must enter as part of their application. We tell the user that the data for age is based on all applications.

## Other considerations

We considered a number of other changes including:

- comparing data with regional, national or provider datasets
- downloading data as a single worksheet
- using the UCAS age groups

### Comparing data

We want to find out from research whether it would be useful to allow the user to compare data to:

- other recruitment cycles
- the same time in a previous year
- other organisations
- regional or national statistics

### Downloading data

We could provide a single file with all the data.

Doing this in a single page (worksheet) could make it hard to use the data, but it isn’t possible to use multiple pages in a CSV file.

We could try using an open document format spreadsheet to contain all the data in separate pages.

### Age groups

The age data published by UCAS uses different age groups. The Apply service will use the same groups when it starts publishing data.

We could provide the age data using the same groups to make comparison easier. The groups are:

- 21 and under
- 22
- 23
- 24
- 25 to 29
- 30 to 34
- 35 to 39
- 40 to 44
- 45 to 49
- 50 to 54
- 55 to 59
- 60 to 64
- 65 and over

If we decide not to use these groups, we will need to extend the youngest group to ‘16 to 24’. This is because it is possible for candidates to apply from 16 years of age.
