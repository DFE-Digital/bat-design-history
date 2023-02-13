---
title: Updating the error messages displayed in the add and edit course flows
description: We improved the error messages on the ‘Add course’ and edit course flows to make the language clearer and more accurate
date: 2023-02-09
related:
  items:
    - text: Improving the content on the add and edit course flows
      href: /publish-teacher-training-courses/improving-the-content-on-the-add-and-edit-course-flows/
    - text: Adding questions about visa sponsorship to courses
      href: /publish-teacher-training-courses/adding-questions-about-visa-sponsorship-to-courses/
    - text: Making the visa sponsorship questions clearer
      href: /publish-teacher-training-courses/making-the-visa-sponsorship-questions-clearer/
---

We improved the error messages on the ‘Add course’ and edit course flows to make the language clearer and more specific to the options presented on the page.

## What we changed

### Subject level

If the user does not select a subject level, we show an error message:

> Select a subject level

![Subject level error message](error-messages--subject-level.png "Subject level error message")

### Special educational needs and disabilities (SEND)

If the user does not select if this is a special educational needs and disability (SEND) course, we show an error message:

> Select if this is a special educational needs and disability (SEND) course

![Special educational needs and disabilities (SEND) error message](error-messages--send.png "Special educational needs and disabilities (SEND) error message")

### Subject

We show a different page if the user has previously chosen the ‘Primary’ subject level or ‘Secondary’ subject level.

#### Primary subjects

If the user does not select a primary subject specialism, we show an error message:

> Select a subject

![Primary subject specialism error message](error-messages--subject-primary.png "Primary subject specialism error message")

#### Secondary subjects

If the user does not select a subject from the first subject drop-down, we show an error message:

> Select a subject

![Secondary subject error message](error-messages--subject-secondary.png "Secondary subject error message")

If the user selects a subject from the optional second subject drop-down, which matches the first subject chosen, we show an error message:

> First subject and second subject cannot be the same

![Secondary subject error message if subjects are the same](error-messages--subject-secondary-same-subject.png "Secondary subject error message if subjects are the same")

### Modern languages

When a user selects ‘Modern languages’ as a first or second subject, we show a list of languages.

If the user does not select a language, we show an error message:

> Select a language

![Languages error message](error-messages--languages.png "Languages error message")

### Engineers teach physics

When a user selects ‘Physics’ as the first subject for the course, we show an ‘Engineers teach physics’ page.

If the user does not select if the course is part of the Engineers teach physics programme, we show an error message:

> Select if this course is part of the Engineers teach physics programme

![Engineers teach physics error message](error-messages--engineers-teach-physics.png "Engineers teach physics error message")

### Age range

We show age ranges depending on the user's chosen subject level.

If the user selects the primary subject level, we show the primary age ranges; if they choose secondary, we show the secondary subject levels. We do not show the age range page for the further education subject level.

#### Primary

If the user does not select a primary age range, we show an error message:

> Select an age range

![Primary age range error message](error-messages--age-range-primary.png "Primary age range error message")

#### Secondary

If the user does not select a secondary age range, we show an error message:

> Select an age range

![Secondary age range error message](error-messages--age-range-secondary.png "Secondary age range error message")

#### Another age range

If the user selects ‘Another age range’ but does not enter a range, we show an error message:

> Enter start age

And

> Enter end age

![Other age range error message](error-messages--age-range-other.png "Other age range error message")

If the course is primary and the user enters an age that is not between 3 and 11, we show an error message:

> Enter an age between 3 and 11

If the course is secondary and the user enters an age that is not between 11 and 19, we show an error message:

> Enter an age between 11 and 19

If the user enters a start age that is more than the end age, we show an error message:

> Start age must be less than end age

Age ranges must be a minimum of 4 years. If the user adds another age range that is less than 4 years, we show an error message:

> End age must be at least four years after start age

### Qualification

We show qualifications depending on the user's chosen subject level.

#### Primary and secondary

If the user does not select a qualification, we show an error message:

> Select a qualification

![Primary and secondary level qualification error message](error-messages--qualification-primary-secondary.png "Primary and secondary level qualification error message")

#### Further education

If the user does not select a qualification, we show an error message:

> Select a qualification

![Further education qualification error message](error-messages--qualification-further-education.png "Further education qualification error message")

### Funding type

If the user does not select a funding type, we show an error message:

> Select a funding type

![Funding type error message](error-messages--funding-type.png "Funding type error message")

### Teaching Apprenticeship

If the user does not select if this is a teaching apprenticeship, we show an error message:

> Select if this is a teaching apprenticeship

![Apprenticeship error message](error-messages--teaching-apprenticeship.png "Apprenticeship error message")

### Full time or part time

If the user does not select if the course is full time, part time or both, we show an error message:

> Select full time or part time

![Full time or part time error message](error-messages--full-time-or-part-time.png "Full time or part time error message")

### Location

In the ‘Add course’ flow, the location page is only shown if there is more than one location a user can choose from. If there is only one location, we default the answer and skip the page.

If there is more than one location and the user does not select a location, we show an error message:

> Select a location

![Location error message](error-messages--locations.png "Location error message")

### Accredited body

In the ‘Add course’ flow, the accredited body page is only shown if there is more than one accredited body a user can choose from. If there is one accredited body, we default the answer and skip the page.

If there is more than one accredited body and the user does not select an accredited body, we show an error message:

> Select a location

![Accredited body error message](error-messages--accredited-body.png "Accredited body error message")

### Visa sponsorship

We show different visa sponsorship questions depending on whether the course is fee-paying or salaried.

#### Fee-paying courses

If the user belongs to a lead school or school-centred initial teacher training (SCITT) and they do not answer the Student visa sponsorship question, we show the error message:

> Select if Student visa sponsorship is available for this course

![Student visa error message](error-messages--visa-sponsorship-fee-paying.png "Student visa error message")

If the user belongs to a higher education institution (HEI) and they do not answer the Student visa sponsorship question, we show the error message:

> Select if your organisation can sponsor Student visas for this course

![Student visa error message (HEI)](error-messages--visa-sponsorship-fee-paying-hei.png "Student visa error message (HEI)")

#### Salaried or apprenticeship courses

For all provider types, if the user does not answer the visa sponsorship question, we show the error message:

> Select if your organisation can sponsor Skilled Worker visas for this course

![Skilled Worker visa error message](error-messages--visa-sponsorship-salaried.png "Skilled Worker visa error message")

### Applications open date

If the user does not select an applications open date, we show an error message:

> Select an applications open date

![Applications open date error message](error-messages--applications-open-date.png "Applications open date error message")

#### Another date

If the user selects ‘Another date’ but does not enter a date, we show an error message:

> Enter a date when applications will open

![Other applications open date error message](error-messages--applications-open-date-other.png "Other applications open date error message")

If the user enters a date that is in the past, we show an error message:

> Applications open date must be in the future

If the user enters an invalid date, we show an error message:

> Applications open date must be a real date

If the user enters a partially correct date, we follow [GOV.UK design system guidance on error messages in date inputs](https://design-system.service.gov.uk/components/date-input/#error-messages)

### Course start date

If the user does not select a course start date, we show an error message:

> Select a course start date

![Course start date error message](error-messages--course-start-date.png "Course start date error message")

## Further considerations

### Subject level and special educational needs and disabilities

The subject level and special educational needs and disabilities (SEND) questions are currently on the same page when creating a new course but not when editing a course.

We’re considering splitting the pages in the add course flow to be consistent with the edit flows and simplify the content and error messaging.

### Full time or part time

The ‘Full time or part time’ page currently has radio buttons.
It is not clear if the ‘Full time or part time’ option means:

- both full time and part time
- either full time or part time

We will consider changing this to checkboxes and removing the ‘Both’ option.
