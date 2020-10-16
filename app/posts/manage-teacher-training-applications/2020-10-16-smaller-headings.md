---
title: Smaller headings
description: Reduce the size of all headings to make them easier to read
date: 2020-10-01
---

{% from "figure/macro.njk" import appFigure with context %}

Currently, all top level page headings are extra large (`govuk-heading-xl`).

We decided to reduce them in order to make them easier to read and follow the new default `h1` size on the GOV.UK Design System.

Here are a few before and after shots:

{{ appFigure({
  image: {
    file: "application-list--before.png"
  },
  caption: "Application list: before"
}) }}

{{ appFigure({
  image: {
    file: "application-list--after.png"
  },
  caption: "Application list: after"
}) }}

{{ appFigure({
  image: {
    file: "application-details--before.png"
  },
  caption: "Application details: before"
}) }}

{{ appFigure({
  image: {
    file: "application-details--after.png"
  },
  caption: "Application details: after"
}) }}

{{ appFigure({
  image: {
    file: "reject-application--before.png"
  },
  caption: "Reject application: before"
}) }}

{{ appFigure({
  image: {
    file: "reject-application--after.png"
  },
  caption: "Reject application: after"
}) }}
