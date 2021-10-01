---
title: Updating the structured reasons for rejection report
description: Improving how we show the reasons why an application was rejected
date: 2021-09-27
tags:
  - SN001
screenshots:
  items:
    - text: Structured reasons for rejection report
      src: structured-reasons-for-rejection-report.png
    - text: Structured reasons for rejection details showing category of reason
      src: structured-reasons-for-rejection-details--category.png
    - text: Structured reasons for rejection details showing category and reason for rejection
      src: structured-reasons-for-rejection-details--reason.png
---

The user need we’re trying to meet with this work is:

{% set need = collections['user-need'] | slugs(tags) | first %}

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  title: need.data.title,
  description: need.templateContent,
  url: need.url,
  status: need.data.status
}) }}

## What we did

We made changes to the structured reasons for rejection:

- landing page
- details page

### Landing page

The landing page is split into sections with one category per section.

Each section includes summary metrics and may also include a table of data for more detailed reasons why an application was rejected.

#### Categories

We updated the report to show the categories in the same order as the Manage service.

We added the missing ‘other reasons’ category.

The order we display the categories is:

- candidate behaviour
- quality of application
- qualifications
- performance at interview
- honesty and professionalism
- safeguarding
- offered a place on another course
- cannot sponsor applicant’s visa
- course full
- other reasons
- additional advice or feedback

Additional advice or feedback isn’t a reason for rejection. It is included because providers give it at the same time as the reasons for rejection.

#### Summary metrics

We updated the glance metrics to show the number and percentage of rejections in each category and for the current calendar month.

![Summary metrics](summary-metrics.png "Figure 1: Summary metrics for a single category of reason for rejection")

These metrics allow the user to see how the rejection category is being used overall during the cycle and the current month.

For example, at the beginning of the cycle, ‘course full’ is unlikely to be used, but towards the end of the cycle, it’s use may be significantly higher.

#### Table data

Some categories of rejection include more detailed reasons. We display these reasons in a table.

Categories of rejections that have table data are:

- candidate behaviour
- honesty and professionalism
- qualifications
- quality of application
- safeguarding

For each reject reason, the table shows the number and percentage of:

- all rejections
- all rejections within this category
- all rejections in [current month]
- all rejections in [current month] within this category

![Table data](table-data.png "Figure 2: Table showing data for a single category of reason for rejection")

#### Other changes

We added a section called ‘understanding this report’ to explain:

- the report does not include rejections made through the API.
- the percentages for all the categories will not add up to 100%, since users can choose more than one reason for rejection.

We added sub-navigation to the page to allow users to see the current and previous cycle’s data. When the new cycle opens [12 October 2021] the navigation will display two options:

- 2021 to 2022 (starts 2022)
- 2020 to 2021 (starts 2021)

We formatted all numbers and percentages consistently, making them easier to compare.

### Structured reasons for rejection details page

We updated the page title to include the category and reason in the title name.

If the user clicks a category, for example ‘qualifications’, the category name will be displayed in the heading.

If the user clicks a reason for rejection within a category, for example ‘no english gcse grade 4 &#40;c&#41; or above, or accepted equivalent’, the category name and the reason for rejection will be displayed in the heading.

## Other considerations

We considered splitting reasons for rejection data into different parts, such as:

- separating the data for manual and automatic rejections
- showing number and percentage of rejections by month
