---
title: Helping users check how diverse their candidates are
description: We created a report showing the sex, disability, ethnicity and age of candidates applying compared to those recruited
date: 2021-09-07
tags:
  - MN029
screenshots:
  items:
    - text: Reports landing page
      src: reports-landing-page--single-organisation.png
    - text: Reports landing page when the user belongs to multiple organisations
      src: reports-landing-page--multiple-organisations.png
    - text: Sex, disability, ethnicity and age of candidates report
      src: candidate-sex-disability-ethnicity-age-report.png
---

We want to help providers better understand their recruitment process. In research, we've identified that some providers monitor the equality and diversity of their candidates.

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

We created a ‘Sex, disability, ethnicity and age of candidates’ report. It includes data about candidates applying to the provider’s courses and those the provider recruited.

## How it works

Users can view this report for any organisation they belong to. We don’t restrict access to the information by a user or organisation permission.

The caption for the h1 is the name of the organisation whose data is in the report.

There’s an ‘Export data (ZIP)’ link which generates a ZIP file of the data in the report. The file contains CSV files for each section.

The report has four sections:

- sex
- disability
- ethnicity
- age

Not all candidates answer the equity and diversity questionnaire, so we highlight where the data comes from at the bottom of the page.

## Other considerations
