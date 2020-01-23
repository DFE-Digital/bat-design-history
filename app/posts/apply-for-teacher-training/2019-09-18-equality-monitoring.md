---
title: Equality monitoring
description: First pass at asking for information for monitoring equality.
date: 2019-08-18
related:
  items:
  - text: HESA Initial Teacher Training record 2019/20
    href: https://www.hesa.ac.uk/collection/c19053
  - text: HESA sexual orientation reference (not ITT)
    href: https://www.hesa.ac.uk/collection/c18051/a/sexort
  - text: HESA gender identity reference (not ITT)
    href: https://www.hesa.ac.uk/collection/c18051/a/genderid
  - text: HESA religion or belief reference (not ITT)
    href: https://www.hesa.ac.uk/collection/c18051/a/relblf
  - text: Spreadsheet showing what’s currently collected
    href: https://docs.google.com/spreadsheets/d/1uY6ZzQePVoWgIzrdRKtuinj9NzQ5dgwaL6DMIYFUH_c
  - text: Trello ticket
    href: https://trello.com/c/ztd2hNAH
---
Our first pass at asking for information for monitoring equality.

We need to collect this information so that providers can report it back to [HESA](https://www.hesa.ac.uk/collection/c19053). It is only sent to a provider when the application process is complete.

The information we collect must be compatible with HESA’s requirements.

## What are we asking for?

In this design we are asking for:

* sex ([HESA ITT reference](https://www.hesa.ac.uk/collection/c19053/e/sexid))
* sexual orientation
* disability ([HESA ITT reference](https://www.hesa.ac.uk/collection/c19053/e/disable))
* ethnicity ([HESA ITT reference](https://www.hesa.ac.uk/collection/c19053/e/ethnic))
* religion

We are not yet asking about gender identity.

## Where should this live?

This design puts the equality monitoring questions after you’ve reviewed your completed application and are on the journey to submit. We wanted to create a separation between what goes to a provider and what doesn’t. To highlight that this information is being treated differently.

However having to fill in all of this extra information at this point, when a user is expecting to submit and finish, is an unexpected chore. If the user has awareness of this section ahead of submitting it might be a smoother journey.

## Asking about disability

This design was initially based on the [NHS’s Accessible Information Standard diversity monitoring questions](https://www.england.nhs.uk/wp-content/uploads/2017/01/ais-review-diversity-monitoring-questions.docx). This will be updated, given that the NHS version is slightly more health leaning than required here.

## Asking about sex and gender

We currently ask for sex, but not gender identity. Gender identity is not listed in the HESA collection nor the list of currently collected information. As noted in the link above though, there is precendent for collecting gender identity information in other HESA collections.

The [GOV.UK Design System](https://design-system.service.gov.uk/patterns/gender-or-sex/) notes that we should not ask for sex, and does not yet make an exception for equality monitoring:

> If you do need to ask, use ‘sex’ when you need biological data (for example, if you’re providing a medical service). In all other cases, use ‘gender’.

The design system backlog has a [discussion about collecting gender information](https://github.com/alphagov/govuk-design-system-backlog/issues/69).

See also this [LGBT survey](https://equalities.blog.gov.uk/2017/09/29/lgbtsurvey-asking-about-sexual-orientation-and-intersex/) for reference.

## Asking about ethnicity

The design system provides a [complete pattern for collecting ethnicity information](https://design-system.service.gov.uk/patterns/ethnic-group/) that we have reused.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Equality monitoring" },
    { text: "What is your sex?" },
    { text: "Sexual orientation" },
    { text: "Disability status" },
    { text: "Any health problems?" },
    { text: "Ethnic group" },
    { text: "Ethnic background" },
    { text: "Religion" },
    { text: "Check your answers" }
  ]
}) }}
