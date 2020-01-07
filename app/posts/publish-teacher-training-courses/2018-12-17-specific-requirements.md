---
title: Specific course requirements
description: Documentation on minimum qualifications settings in UCAS web-link and apply.
---
Providers can set specific requirements for their courses when setting up or editing their training programmes in UCAS web-link.

This relates to minimum grades for Maths, English and Science – grades A* to C, 4 or more, or an equivalent (eg international baccalaureate).

## Options

Depending on the qualification selected in the Education section of apply and the course selected in the Choices section (and that course’s specific course requirements), applicants will get different warnings in the ‘Check form’ section:

<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="col"></th>
      <th class="govuk-table__header" scope="col">1: Must have</th>
      <th class="govuk-table__header" scope="col">2: Taking</th>
      <th class="govuk-table__header" scope="col">3: Equivalency test</th>
      <th class="govuk-table__header" scope="col">9: Don’t care</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <th class="govuk-table__cell">
        <strong>A* – C</strong>
      </th>
      <td class="govuk-table__cell">No alert</td>
      <td class="govuk-table__cell">No alert</td>
      <td class="govuk-table__cell">No alert</td>
      <td class="govuk-table__cell">No alert</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__cell">
        <strong>Pending</strong>
      </th>
      <td class="govuk-table__cell">
        <strong style="color: #d4351c">Alert</strong>
      </td>
      <td class="govuk-table__cell">No alert</td>
      <td class="govuk-table__cell">No alert</td>
      <td class="govuk-table__cell">No alert</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__cell">
        <strong>Equivalence test</strong>
      </th>
      <td class="govuk-table__cell">
        <strong style="color: #d4351c">Alert</strong>
      </td>
      <td class="govuk-table__cell">
        <strong style="color: #d4351c">Alert</strong>
      </td>
      <td class="govuk-table__cell">No alert</td>
      <td class="govuk-table__cell">No alert</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__cell">
        <strong>D – G</strong>
      </th>
      <td class="govuk-table__cell">
        <strong style="color: #d4351c">Alert</strong>
      </td>
      <td class="govuk-table__cell">
        <strong style="color: #d4351c">Alert</strong>
      </td>
      <td class="govuk-table__cell">
        <strong style="color: #d4351c">Alert</strong>
      </td>
      <td class="govuk-table__cell">No alert</td>
    </tr>
  </tbody>
</table>

### 1: Must have

Example course: [17B/225K](https://find-postgraduate-teacher-training.education.gov.uk/course/17B/225K)

> You want the applicant to already have achieved the qualification at time of applying.

The option most providers have chosen. It is the least flexible. It does not allow applicants with pending qualifications or those seeking to take an equivalency test.

### 2: Taking

Example course: [12U/2527](https://find-postgraduate-teacher-training.education.gov.uk/course/12U/2527)

> You will consider applicants who expect to achieve the necessary qualifications before the training programme begins.

This option accepts applicants who have the qualification or have a pending qualification, but not those who seek an equivalency test.

### 3: Equivalence test

Example course: [1PJ/236Y](https://find-postgraduate-teacher-training.education.gov.uk/course/1PJ/236Y)

> You can offer applicants an equivalence test.

This option accepts applicants who have the qualification, have a pending qualification or those who seek an equivalency test. It is the most flexible and most accommodating.

An equivalency test is not the same as entering an equivalent qualification in the Education section (eg an international baccalaureate with a top score of 45)

### 9: Don’t care (Further education only, ‘same as N/A’)

Example course: [B60/X341](https://find-postgraduate-teacher-training.education.gov.uk/course/B60/X341)

> You do not require an applicant to hold GCSE grades A-C, 4 or above, or equivalent. This code can only be used for further education or post-compulsory education courses.

This option accepts all applicants, even if they have grades below a C.

## Screenshots

{% from "gallery/macro.njk" import appGallery with context %}
{{ appGallery({
  items: [
    {text: "Example warnings in UCAS apply"},
    {text: "Qualification options in UCAS"},
    {text: "How UCAS explains the options to providers"}
  ]
}) }}
