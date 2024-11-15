---
title: Managing claim windows in Support
description: We added a way for support users to manage claim windows, allowing them to open and close the service
date: 2024-10-30T12:00:00+00:00
tags:
  - claim windows
  - academic years
  - claims
related:
  items:
    - text: Grouping and filtering claims by academic years in Support
      href: /claim-funding-for-mentors/grouping-and-filtering-claims-by-academic-year-in-support/
    - text: Showing claims by academic year
      href: /claim-funding-for-mentors/showing-claims-by-academic-year/
    - text: Understanding academic years
      href: https://www.gov.uk/guidance/understanding-academic-years
    - text: The relationship between recruitment cycles and academic years
      href: /becoming-a-teacher/the-relationship-between-recruitment-cycles-and-academic-years/
    - text: Highlighting the claim window deadline
      href: /claim-funding-for-mentors/highlighting-the-claim-window-deadline/
screenshots:
  items:
    - text: Service settings
      src: service-settings.png
    - text: List of claim windows
      src: claim-windows--list.png
    - text: Add new claim window
      src: claim-windows--add-claim-window.png
    - text: Add new claim window form with errors
      src: claim-windows--add-claim-window-errors.png
    - text: Check your answers before submitting a new claim window
      src: claim-windows--add-claim-window-check-your-answers.png
    - text: Claim window added
      src: claim-windows--claim-window-added.png
    - text: Claim window details
      src: claim-windows--claim-window-details.png
    - text: Edit claim window
      src: claim-windows--edit-claim-window.png
    - text: Edit claim window form with errors
      src: claim-windows--edit-claim-window-errors.png
    - text: Check before updating the claim window
      src: claim-windows--edit-claim-window-check-your-answers.png
    - text: Claim window updated
      src: claim-windows--claim-window-updated.png
    - text: Remove claim window double confirmation
      src: claim-windows--remove-claim-window.png
    - text: Claim window removed
      src: claim-windows--claim-window-removed.png
---

When we launched the private beta on 2 May 2024, we did not include a way for support users to manage claim windows and their academic years. This meant we could not easily:

- open and close claim windows
- assign claims to the correct academic year - important for calculating the appropriate funding

When a school user submitted a claim, we only stored the date the user submitted the claim, not the academic year it was related to.

As part of the work enabling support users to open and close the claim window, we needed to:

- collect dates the claim window opens and closes
- assign the claim window an academic year

For example, the first claim window was between 2 May 2024 and 19 July 2024 and associated with the 2023 to 2024 academic year.

If we re-opened the claim window in September 2024, we needed to identify whether it was for the previous 2023 to 2024 academic year or the current 2024 to 2025 academic year.

## Background on academic years

Academic years are determined by the course start date.

|If the course starts between:|The academic year is:|
| --- | --- |
|1 August 2024 to 31 July 2025|2024 to 2025|
|1 August 2023 to 31 July 2024|2023 to 2024|
|1 August 2022 to 31 July 2023|2022 to 2023|

For most students, each academic year runs from 1 September to 31 August, but there are 4 official start dates in each academic year, each lasting 12 months.

|If the course starts between:|The academic year will run from:|
| --- | --- |
|1 August and 31 December|1 September to 31 August|
|1 January and 31 March|1 January to 31 December|
|1 April and 30 June|1 April to 31 March|
|1 July and 31 July|1 July to 30 June|

For postgraduate teaching apprenticeships (PGTA), the academic year may start as early as 1 June.

## Problems with academic years and mentor training

Ideally, we would follow this guidance and have our academic year dates following the above rules. However, we had several unique problems:

Firstly, mentor training can begin in advance of the academic year—from 6 April 2024 for the 2024 to 2025 academic year. This enables schools to train their mentors before supporting training begins in September.

Secondly, the first claim window closes in mid-July. Therefore, it wouldn’t be appropriate to classify the claim window until 31 August, as schools cannot claim in August.

This is why the service start page states:

> Use this service to claim for mentors who supported, or intended to support, trainee teachers from September 2023 to July 2024.

Thirdly, schools claim in arrears for their mentor training. Mentors who support trainees in the 2024 to 2025 academic year can only submit their claims once they have completed their training and the placement school information has been received and shared by the Register training teacher service (Register). For the private beta, mentors supporting trainees in the 2023 to 2024 academic year could only claim between May and July 2024 in the first claim window.

Fourthly, qualified teacher status (QTS) is typically awarded to trainees between May and July, and we expect schools to claim mentor funding after this time.

Fifthly, in both private and public beta, there is the option for a second claim window to open in September. This would technically be in a new academic year but allows schools to claim funding for the previous academic year.

To solve these problems, we ask users to enter the opening and closing dates for the claim window and select the appropriate academic year.

## How it works

Managing claim windows is accessed via the primary navigation's ‘Service settings’ option.

### Claim windows list

On the claim windows list page, we show:

- an ‘Add claim window’ button
- a list of claim windows in reverse chronological order

For each claim window in the list, we show:

- date window opens
- date window closes
- academic year
- status

The open and closed dates determine the claim window status. If the claim window is open, we mark it as ‘Current’; otherwise, we mark it as ‘Past’.

We paginate the list if it contains more than 25 claims.

### Claim window details

On the claim window details page, we show:

- a ‘Remove claim window’ link
- a summary list containing the claim window details

The summary list shows:

- date window opens
- date window closes
- academic year

If the claim window is current, we show change links next to each line in the summary list.

#### Changing the claim window details

Users can only change the details of a current of future claim window.

When choosing to change the details of a claim window, we show the user a form including:

- date window opens
- date window closes
- academic year

We prepopulate the form with the selected claim window’s details.

Once changed, users have to confirm the changes before saving.

#### Removing a claim window

Claim windows can be removed if schools have not submitted any claims in the claim window.

If claims have been submitted in the claim window, we show a message:

> You cannot remove this claim window because it contains claims.

### Adding a claim window

Selecting ‘Add claim window’ on the claim windows list starts the add claim window flow.

The ‘Add claim window’ flow has two steps:

1. Enter claim window details
2. Check your answers

#### Enter claim window details

The first step in the ‘Add claim window’ flow is to enter the claim window details.

The form includes three questions:

- date window opens
- date window closes
- academic year

##### Validation rules

Users must answer all questions.

If users do not enter a date the window opens, we show a message:

> Enter the date the window opens

If users do not enter a date the window closes, we show a message:

> Enter the date the window closes

We follow the [date input error message guidance](https://design-system.service.gov.uk/components/date-input/#error-messages) guidance for incorrect or incomplete dates.

If users enter a window opens date that overlaps with another claim window, we show a message:

> Select a date the window opens that is not within an existing claim window

If users enter a window closes date that overlaps with another claim window, we show a message:

> Select a date the window closes that is not within an existing claim window

If users do not select an academic year, we show a message:

> Select an academic year

If users select an academic year that doesn’t match the window’s opening and closing dates, we show a message:

> Select an academic year that starts between [date window opens] and [date window closes]

#### Check your answers

The final step is to check your answers.

We show:

- date window opens
- date window closes
- academic year

If a user returns to a previous answer using the change link, the information they entered is pre-populated. When finished, the user sees the ‘Continue’ button, which will return them to the check answers page.

To add the new claim window, users must select ‘Save claim window’.

#### Confirmation

When a claim window is submitted, we show a success message on the claim windows list.
