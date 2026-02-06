---
title: Updating the QTS status journey following policy changes
description: We updated the journey for updating a trainee's QTS or EYTS status to include placement validation and revised terminology
date: 2026-02-04
tags:
  - qts
  - placements
  - policy
related:
  items:
    - text: Recording trainee placement data
      href: /register-trainee-teachers/recording-trainee-placements-data/
    - text: Bulk awarding of teaching status
      href: /register-trainee-teachers/bulk-awarding-of-teaching-status/
screenshots:
  items:
    - text: Trainee record
      src: update-qts-status--trainee-record.png
    - text: Incomplete trainee record
      src: update-qts-status--trainee-record-incomplete.png
    - text: "Question page: When did the trainee’s QTS status change"
      src: update-qts-status--when.png
    - text: "Question page: When did the trainee’s QTS status change with error"
      src: update-qts-status--when-with-error.png
    - text: "Question page: When did the trainee’s QTS status change with date error"
      src: update-qts-status--when-with-date-error.png
    - text: Check your answers
      src: update-qts-status--check-your-answers.png
    - text: Check your answers - showing today’s date
      src: update-qts-status--check-your-answers-today.png
    - text: Check your answers - showing yesterday’s date
      src: update-qts-status--check-your-answers-yesterday.png
    - text: "Success message: Trainee’s QTS status updated"
      src: update-qts-status--success.png
    - text: "Stop page: You cannot update the trainee’s QTS status"
      src: update-qts-status--stop.png
---

We updated the journey for updating a trainee's qualified teacher status (QTS) or early years teacher status (EYTS) following changes to how we talk about recommending and awarding QTS.

## The policy change

Initial teacher training (ITT) policy states that a trainee must successfully complete a minimum of 2 contrasting placements to be awarded QTS or EYTS.

Previously, providers could recommend a trainee for QTS or EYTS in Register without any validation to check if they had recorded placement data on the trainee's record.

To support the DfE objective of gathering more placement data in the academic year when the trainee is training (rather than retrospectively 6 months later), we now check if the minimum number of placements has been recorded before allowing providers to update a trainee's QTS or EYTS status.

## How this affects users

Providers must now record sufficient placement data on a trainee's record before they can update the trainee's QTS or EYTS status. The minimum number of placements depends on the trainee's ITT route:

- most routes (including EYTS): minimum of 2 placements
- international qualified teacher status (iQTS): minimum of 1 placement
- Assessment Only: exempt from placement requirements
- salaried courses: the employing school counts as the first placement, so providers need to add at least one contrasting placement

If a provider tries to update a trainee's status without enough placements recorded, we show a stop page explaining what they need to do.

This validation also applies when providers use bulk recommend to update multiple trainees' statuses at once.

## How it works

### Updating QTS status

The 'Update QTS status' flow contains 2 steps:

1. When did the trainee's QTS status change?
2. Check your answers

#### When did the trainee's QTS status change?

This question page includes 3 radio options:

- today
- yesterday
- another date

If users select 'Another date' we show a conditional reveal with a date input allowing users to enter the date the trainee's QTS status changed.

If users do not select an item from the list of radios, we show an error message:

> Select when the trainee's QTS status changed

If users select 'Another date' but do not enter a date, we show an error message:

> Enter the date the trainee's QTS status changed

If the user enters an incomplete or incorrect date, we follow the [GOV.UK design system guidance on validating dates](https://design-system.service.gov.uk/components/date-input/#error-messages).

#### Check your answers

Before saving the change we show a 'Check your answers' page with a summary list showing the label 'When did the trainee's QTS status change?' and the value the user entered. For example:

- Today - 4 February 2026
- Yesterday - 3 February 2026
- 31 January 2026

We include a change link, which takes users back to the question page where they can change their answer.

To complete the flow, users must select the green button labelled 'Update QTS status'.

#### Success message

When users save changes, we show a success message on the trainee record page using the green notification banner. The message says:

> Trainee's QTS status updated

### Cannot update QTS status

If the trainee record is incomplete, for example they do not have enough placements listed, or the training provider information has not been completed, users cannot update the trainee's QTS status. In this instance, when users select the 'Update QTS status' button, we show a stop page that includes the message:

> You cannot update the QTS status for [TRAINEE NAME] because the trainee record is missing:
>
> - Training provider
> - Placement details

We include a list of all things missing and link directly to the form where users can add the information.

## What we changed

### Updated terminology

We changed how we refer to this action throughout the service:

| Before | After |
| --- | --- |
| Recommend for QTS | Update QTS status |
| Recommend for EYTS | Update EYTS status |
| QTS recommend | Update QTS status |
| EYTS recommend | Update EYTS status |

The new terminology better reflects what the action does and aligns with how providers think about this task.

### Added placement validation

We now prevent users from updating a trainee's QTS or EYTS status if there are not enough placements recorded on the trainee's record. When this happens, we show a stop page that:

- explains why the user cannot continue
- tells them how many placements are required for the trainee's route
- links to the trainee's record so they can add the missing placement data

### Refined the user flow

We made several improvements to the journey:

- updated heading captions to use the new terminology
- updated error messages to be clearer about what users need to do
- changed the check your answers layout to use a standard summary list rather than a summary card, making it consistent with other journeys in the service

## What we considered

### Salaried courses

For salaried courses, trainees are employed by a school throughout their training. We needed to decide whether this employing school should count towards the placement requirement.

We determined that the employing school counts as the trainee's first placement. This means providers only need to record one additional contrasting placement to meet the minimum of 2 placements.

We will review the content for salaried courses to make this clear to providers.

*[QTS]: qualified teacher status
*[EYTS]: early years teacher status
*[ITT]: initial teacher training
*[iQTS]: international qualified teacher status
*[DfE]: Department for Education
