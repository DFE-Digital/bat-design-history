---
title: Using clear and consistent file names for exported data
description: Including the report name, provider name, date and time in the file name to help users find data they’ve downloaded
date: 2021-09-21
---

The reports section of the service allows users to download data including:

- application data
- Higher Education Statistics Agency (HESA) data
- status of active applications

We want to use file names which are clear and consistent. This will help users find data they’ve downloaded.

## What we did

We created file name templates which include:

- report name
- provider name
- date and time the data was downloaded

### Provider name

We’ve included the provider name because 20% of users belong to more than one organisation. We need to make sure that users know which organisation the data applies to.

### Length of file name

File names should not exceed 255 characters to avoid operating system errors.

From the 1,973 providers in Manage:

- the longest provider name is 77 characters
- the shortest provider name is 3 characters
- the average provider name is 25 characters

## How it works

The template for downloads is:

report-name_start-year-to-end-year_provider-name_date-downloaded_time-downloaded.extension

All characters other than numbers and letters are removed from the report name and provider name. Spaces are replaced with dashes. Only lower case is used.

For example ‘St John’s Teacher Training’ becomes ‘st-johns-teacher-training’.

Some file names will include multiple provider names. If the character limit is reached, we’ll cut the provider names short to reduce the file name length.

### Application data

An example file name for application data is:

application-data_2020-to-2021_wren-academy_2021-09-16_15-04-59.csv

If the user downloads the data for more than one provider, we include all provider names in alphabetical order until the file name reaches the 255 character limit.

An example file name for more than one provider is:

application-data_2019-to-2021_ucl-university-of-london_wren-academy_2021-09-16_15-04-59.csv

We do not indicate which statuses are included in the data export.

### HESA data

An example file name for HESA data is:

hesa-data_2020-to-2021_wren-academy_2021-09-16_15-04-59.csv

The user can only download the data for all providers. So we include all provider names until we reach the 255 character limit.

### Status of active applications

An example file name for the status of active applications report is:

status-of-active-applications_2020-to-2021_wren-academy_2021-09-16_15-04-59.csv

This report can only be downloaded for one provider at a time.
