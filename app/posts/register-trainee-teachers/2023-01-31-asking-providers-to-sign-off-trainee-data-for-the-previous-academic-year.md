---
title: Asking providers to sign off trainee data for the previous academic year
description: We created a way for providers to confirm which trainees qualified, withdrew and deferred in the previous academic year.
date: 2023-02-02
---

In January each year, training providers need to check and sign off their trainee data from the previous academic year. For example, in January 2023 they need to check the data for the 2021 to 2022 academic year.

This is so that the data can be included in the annual [initial teacher training performance profiles publication](https://explore-education-statistics.service.gov.uk/find-statistics/initial-teacher-training-performance-profiles). This gives information about the outcomes for trainee teachers in England, including the proportion of trainees who:

- were in their final year and gained qualified teacher status (QTS) or early years teacher status (EYTS)
- got a job in a state school within 16 months of gaining QTS

We decided to ask providers to check data for all their trainees for the 2021 to 2022 academic year, not just those who finished their courses in that year. This is not necessary for the performance profiles but will help make sure that trainee data is accurate.

## What we changed

We added:

- guidance for users
- a report containing the data which users need to check

We decided to split the guidance and report rather than having both on a single page because:

- it allowed us to keep each page short and focused
- the people who download the report may not be the same ones who sign off the data
- the service already has separate sections for guidance and reports

The guidance and the report link to each other. When we sent emails to providers about signing off data, we included links to both pages.

We also improved the pages which list guidance pages and reports.

### Guidance

The new guidance page tells providers how to:

- find the data they need
- check the data and fix any mistakes
- sign off their data

To find the data, providers can use either:

- the new report we created
- their list of registered trainees, which can be [filtered to show the previous academic year](/register-trainee-teachers/identifying-trainees-from-a-single-year/)

For each trainee, the provider needs to check:

- course details
- status
- the date they were awarded QTS or EYTS, or deferred or withdrew from the course - unless they’re still studying

The guidance gives instructions for fixing mistakes. How users do this depends on whether:

- they’re a provider of school centred initial teacher training (SCITT) or a higher education institution (HEI)
- the trainee is shown in the service as awarded or withdrawn, or actively training or deferred

Providers sign off the trainee data using a Google form. This should be done by a senior person and not by the same person who entered the data.

We decided that it was not necessary to build a journey within Register for signing off data. People who sign off data may not be users of the service, so we cannot require them to sign in to it.

### Report

We created a new report which includes all trainees who:

- have been registered with the Department for Education
- studied in the 2021 to 2022 academic year

The report can be downloaded as a CSV file. It contains the same information about each trainee as the normal data export.

The format of the file name is:

YYYY-MM-DD_HH-MM-SS_AAAA-BBBB-trainees_performance-profiles-sign-off_register-trainee-teachers

In this file name:

- YYYY is the year when the file was downloaded, written in full
- MM is the month written as 2 digits
- DD is the day written as 2 digits
- HH is the hour in 24 hour clock format
- MM is the minutes written as 2 digits
- SS is the seconds written as 2 digits
- AAAA is the year when the academic year began
- BBBB is the year when the academic year ended

### List of guidance pages

We have a page which links to all the guidance pages. As we add more guidance it becomes harder for users to find what they’re looking for, so we added subheadings to help them.

The subheadings are:

- Registering trainees
- Signing off data
- Understanding data

Some links appear under the main page heading rather than under a subheading.

### List of reports

We decided not to include ‘performance profiles’ in the name of the new report. Instead the name is “Trainees who studied in the 2021 to 2022 academic year”.

This focuses on what’s in the report rather than what it’s used for. It’s possible that a provider will want to download the report for another purpose.

To help users identify the report they need, we mention performance profiles next to the link on the reports index page.

Similarly, we renamed the report used for the census as “New trainees for the 2022 to 2023 academic year”. We mention the census next to the link on the reports page.

## Further considerations

We may decide to change the way we present information for the annual initial teacher training census. Currently there is only one page with both:

- guidance
- a link to a report which providers use to check their data

We could separate these, as we’ve done for performance profiles.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  headingLevel: 2,
  items: [
  {
    id: "1-performance-profiles-report",
    text: "New performance profiles report"
  },
  {
    id: "2-performance-profiles-guidance",
    text: "New performance profiles guidance"
  },
  {
    id: "3-reports-index",
    text: "List of reports including a link to the new performance profiles report"
  },
  {
    id: "4-guidance-index",
    text: "List of guidance pages with new subheadings and link to the new performance profiles guidance"
  }]
}) }}
