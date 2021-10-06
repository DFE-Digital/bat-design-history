---
title: Updating the reasons for rejection report
description: Improving how we show the reasons why an application was rejected
date: 2021-09-27
tags:
  - SN001
related:
  title: Related Manage design history entries
  items:
    - text: Reasons for rejection
      href: /manage-teacher-training-applications/reasons-for-rejection/
    - text: Reasons for rejection (iteration 2)
      href: /manage-teacher-training-applications/reasons-for-rejection-iteration-2/
    - text: Reasons for rejection (iteration 3)
      href: /manage-teacher-training-applications/reasons-for-rejection-iteration-3/
    - text: Reasons for rejection (iteration 4)
      href: /manage-teacher-training-applications/reasons-for-rejection-iteration-4/
screenshots:
  items:
    - text: Structured reasons for rejection report
      src: structured-reasons-for-rejection-report.png
    - text: Structured reasons for rejection details showing the category
      src: structured-reasons-for-rejection-details--category.png
    - text: Structured reasons for rejection details showing the category and sub-category
      src: structured-reasons-for-rejection-details--reason.png
    - text: Structured reasons for rejection details showing the category has no results
      src: structured-reasons-for-rejection-details--empty.png
---

When a provider rejects an application, they must select at least one category of reason for rejection. They are also asked to do this for applications which are automatically rejected.

Some categories contain a list of sub-categories. If so, the provider must select at least one sub-category.

Categories that do not contain sub-categories reveal a ‘give details’ field. Most sub-categories also reveal a ‘give details’ field. The user must complete this field.

If the user says no to all the categories then on the next page they’re given a field asking them why they’re rejecting the application. The category is considered to be ‘other reasons’.

There is a report in the support service which shows how frequently each category and sub-category is used. It includes links to pages showing the details given by provider users.

The user need we meet with this report is:

{% set need = collections['user-need'] | slugs(tags) | first %}

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  title: need.data.title,
  description: need.templateContent,
  url: need.url,
  status: need.data.status
}) }}

We wanted to improve the report to make it easier for users to get the information they need.

## What we changed

We changed the report to:

- list categories and sub-categories in the order in which providers see them
- add the ‘other reasons’ category which was missing from the report
- make the ‘glance metrics’ (prominent pieces of data) more useful by showing numbers and percentages for overall and recent use
- make the columns in the tables of sub-categories more useful by showing numbers and percentages for overall and recent use
- allow users to see data for the current or previous cycle

We also improved the headings of the pages which give details of the reasons for rejection.

### Categories and sub-categories

Previously, the categories were not displayed in any logical order. We changed the report to show the categories in the same order as they are shown to providers.

We also added the missing ‘other reasons’ category, which providers use if the reason for rejection does not fit into any other category.

Previously support users could not see how much this category was used, or click through to the details added by providers.

The order in which we display the categories is:

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

‘Additional advice or feedback’ is not a reason for rejection. It is included in the report because providers can give it when they reject the application.

### Glance metrics

The report includes ‘glance metrics’, which are important pieces of data displayed prominently. In this report they are in blue or grey shaded boxes.

Previously, each category had 3 boxes. These showed:

- total number and percentage of application choices which included the category, and the total number of application choices made by candidates
- total number of application choices which included the category
- total number of application choices which included the category in the current month

There was overlap between the contents of the first and second boxes. In addition, we did not give percentages for some numbers.

In the new design we have 2 boxes showing:

- total number and percentage of application choices which included the category, and the total number of application choices made by candidates
- number and percentage of application choices which included the category in the current month, and the number of application choices made by candidates in the current month

Instead of saying ‘this month’, we now give the name of the current month. This makes it clearer what time period the glance metrics relate to.

![Summary metrics](summary-metrics.png "Figure 1: Glance metrics for a category")

These changes make it easier for a user to understand:

- how commonly used each category is
- how the use of each category in the current month compares to the recruitment cycle so far

### Table data

Some categories of rejection include more detailed sub-categories. In the report we display these sub-categories in a table under the category’s glance metric boxes.

Categories of rejection with sub-categories are:

- candidate behaviour
- honesty and professionalism
- qualifications
- quality of application
- safeguarding

We updated the tables to show the sub-categories in the same order as providers see them.

We removed the ‘total’ and ‘this month’ columns as the numbers alone do not indicate how common the sub-categories are.

 In their place the new design has columns showing each sub-category as a percentage of:

- all rejections
- all rejections within the category
- all rejections in the current month
- all rejections in the current month within the category

We also show how each of these percentages was calculated.

![Table data](table-data.png "Figure 2: Table showing sub-category data")

### Other changes

We added a section called ‘understanding this report’ to explain that:

- the report does not include rejections made through the API, as they’re free text rather than structured
- the percentages for all the categories will not add up to 100%, since users can choose more than one reason for rejection

We added navigation to the page to allow users to choose between the current and previous cycle’s data. When the new cycle opens on 12 October 2021 the navigation will display two options:

- 2021 to 2022 (starts 2022)
- 2020 to 2021 (starts 2021)

We formatted all numbers and percentages consistently, by using:

- 2 decimal places for each percentage
- a comma to indicate thousands

### Details page

If the user clicks a category on the landing page, for example ‘qualifications’, the category will be displayed in the heading and title of the details page.

If the user clicks a sub-category, for example ‘no english GCSE grade 4 &#40;C&#41; or above, or accepted equivalent’, the category and sub-category will be displayed in the heading and title.

If a details page has no content, it will say “There are no results for the selected reason for rejection.”

## Other considerations

We considered splitting reasons for rejection data into different parts, such as:

- separating the data for manual and automatic rejections
- showing number and percentage of rejections by month

We decided that we will only do this extra work if we find that users need it.
