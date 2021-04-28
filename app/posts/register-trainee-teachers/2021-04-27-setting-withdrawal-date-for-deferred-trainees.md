---
title: Setting the withdrawal date for deferred trainees
description: Improving how we collect this data
date: 2021-04-27
---
{% from "screenshots/macro.njk" import appScreenshots with context %}
{% from "figure/macro.njk" import appFigure with context %}

If a trainee defers from their course and then withdraws, providers are meant to use the trainee’s deferral date as their withdrawal date - as this is the date they were last on the course.

Previously our withdrawal page asked for a withdrawal date - but if the trainee is already deferred we don’t want providers to have a choice of date. Instead we’ll tell the provider that we’ll use the existing deferral date as the withdrawal date.

Our previous withdrawal date question:
{{ appFigure({
  image: {
    file: "previous-date-question.png",
    alt: "Our existing withdrawal page asking for date of withdrawal"
  }
}) }}

New alternative withdrawal date question:
{{ appFigure({
  image: {
    file: "deferred-inset-text.png",
    alt: "Instead of asking for the date, we notify the provider that we’ll use the deferral date."
  }
}) }}

The deferral date is shown on the confirmation page, but cannot be changed.
{{ appFigure({
  image: {
    file: "withdrawal-confirmation.png",
    alt: "The deferral date is shown on the confirmation page, and cannot be changed."
  }
}) }}
