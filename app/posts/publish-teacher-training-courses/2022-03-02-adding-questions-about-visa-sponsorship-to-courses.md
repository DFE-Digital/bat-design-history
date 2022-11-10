---
title: Adding questions about visa sponsorship to courses
description: We added questions about visa sponsorship to the new course and the edit course flows
date: 2022-03-02
related:
  items:
    - text: Guidance for accredited ITT providers on recruiting trainee teachers from overseas
      href: https://www.gov.uk/guidance/recruit-trainee-teachers-from-overseas-accredited-itt-providers
screenshots:
  items:
    - text: Organisation settings - lead school
      src: organisation-settings--lead-school.png
    - text: Organisation settings - SCITT
      src: organisation-settings--scitt.png
    - text: Organisation settings - HEI
      src: organisation-settings--hei.png
    - text: Organisation settings - Student visa
      src: organisation-settings--student-visa.png
    - text: Organisation settings - Skilled Worker visa
      src: organisation-settings--skilled-worker-visa.png
    - text: Add course - Student visa (can sponsor)
      src: add-course--student-visa-can-sponsor.png
    - text: Add course - Student visa (cannot sponsor)
      src: add-course--student-visa-cannot-sponsor.png
    - text: Add course - Skilled Worker visa
      src: add-course--skilled-worker-visa.png
    - text: Add course - check your answers (Student visa)
      src: add-course--check-your-answers-student-visa.png
    - text: Add course - check your answers (Skilled Worker visa)
      src: add-course--check-your-answers-skilled-worker-visa.png
    - text: Edit course - basic details (Student visa)
      src: edit-course--basic-details-student-visa.png
    - text: Edit course - basic details (Skilled Worker visa)
      src: edit-course--basic-details-skilled-worker-visa.png
    - text: Edit course - Student visa
      src: edit-course--student-visa.png
    - text: Edit course - Student visa funding type changed
      src: edit-course--student-visa-funding-type-change.png
    - text: Edit course - Student visa accredited body changed
      src: edit-course--student-visa-accredited-body-change.png
    - text: Edit course - Skilled Worker visa
      src: edit-course--skilled-worker-visa.png
    - text: Edit course - Skilled Worker visa funding type changed
      src: edit-course--skilled-worker-visa-funding-type-change.png
    - text: Edit course - Skilled Worker visa accredited body changed
      src: edit-course--skilled-worker-visa-accredited-body-change.png
---

We have added a visa sponsorship question to the new course and the edit course flows.

This will make it easier for providers to give the right answer on whether they can sponsor a Student or Skilled Worker visa for a course.

## Types of visa available to candidates

Depending on their circumstances and the course they’re applying for, candidates may be eligible for a:

- Skilled Worker visa
- Student visa

The Skilled Worker visa:

- is available only for salaried courses
- can be sponsored by the school where the candidate would be working, or by the local authority or multi-academy trust that the school operates under

The Student visa:

- is available only for fee-paying courses
- can only be sponsored by the accredited body ratifying the course

More information about the [different types of visas for students](https://www.gov.uk/government/publications/train-to-teach-in-england-non-uk-applicants/train-to-teach-in-england-if-youre-a-non-uk-citizen#visa) is available on GOV.UK.

## What we changed

We made changes to the:

- organisation settings page
- new course flow
- edit course flow

### Organisation settings page

On the organisation settings page we:

- moved visa sponsorship to its own section below ‘About your organisation’
- removed the visa sponsorship questions if the provider is a lead school - they now answer these questions when adding or editing a course
- disabled the student visa question if the provider is a SCITT - the answer is always “no - cannot sponsor”
- split the visa sponsorship form page into two pages - one for the Student visa and another for the Skilled Worker visa

### Add course flow

In the add course flow we:

- added the question “Can candidates get a sponsored Student visa?” if the course is fee-paying
- added the question “Can candidates get a sponsored Skilled Worker visa?” if the course is salaried

For the “Can candidates get a sponsored Student visa?” question, we pre-populate an answer. This is determined by the answer that the accredited body has given. This is because lead schools cannot sponsor a Student visa unless the accredited body also sponsors Student visas.

We have included an explanation of this and say if the accrediting body can sponsor Student visas or not.

On the ‘check your answers’ page we:

- added a section called “Student visa”, if the course is fee-paying
- added a section called “Skilled Worker visa”, if the course is salaried

If the user changes the funding type, they are asked to confirm whether they can sponsor a visa. For example, if the user changes the course from fee-paying to salaried, they are then asked if they can sponsor a Skilled worker visa.

If the user changes the accredited body, they’re also asked to confirm whether they can sponsor a visa.

### Edit course flow

On the course ‘Basic details’ page we:

- added a section called “Student visa”, if the course is fee-paying
- added a section called “Skilled Worker visa”, if the course is salaried

In the edit course flow we:

- added the question “Can candidates get a sponsored Student visa?” if the course is fee-paying
- added the question “Can candidates get a sponsored Skilled Worker visa?” if the course is salaried

If the user changes the funding type, they are asked to confirm if they can sponsor a visa. For example, if the user changes the course from fee-paying to salaried, they are then asked if they can sponsor a Skilled worker visa.

If the user changes the accredited body, they’re also asked to confirm if they can sponsor a visa.

When the user changes either the funding type or accredited body, we show a message on the visa sponsorship page explaining why they are being shown the page.

The messages we show are:

- “You’re being asked this question because you changed your answer to funding type.”
- “You’re being asked this question because you changed the accredited body for this course.”
- “You’re being asked this question because you changed your teaching apprenticeship answer.”

The user can cancel the change using the ‘Cancel’ link. The changes will not be saved and the user will be taken back to the ‘Basic details’ page.

## Further considerations

In future we may consider:

- explaining why SCITTs cannot edit their Student visa answer in organisation settings
- skipping the Student visa question if the training provider or accredited body is a SCITT
- giving HEIs the option to allow their training providers the ability to sponsor student visas

### Explaining why SCITTs cannot edit their Student visa answer in organisation settings

Some users may not know that immigration rules prevent state-funded schools from sponsoring Student visas. We may consider showing the reason in their organisation’s settings.

### Skipping the Student visa question if the training provider or accredited body is a SCITT

SCITTs cannot sponsor Student visas. We may consider removing the Student visa question in the new and edit course flows, if the funding type is fee paying and the training provider or accredited body is a SCITT.

In this case, they do not need to answer the question and we can default it to “no - cannot sponsor”.

### Giving HEIs the option to allow their training providers the ability to sponsor Student visas

HEIs do not need to sponsor visas for courses their training providers offer.

We may consider allowing HEIs to specify which of their training providers they will be willing to sponsor candidates’ visas.

*[SCITT]: School centred initial teacher training
*[SCITTs]: School centred initial teacher training
*[HEI]: Higher education institute
*[HEIs]: Higher education institutes
