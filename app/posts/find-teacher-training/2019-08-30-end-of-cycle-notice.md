---
title: An end of cycle notice
description: Tell users which year’s courses they are searching.
related:
  items:
  - text: Trello ticket
    href: https://trello.com/c/FccNwFJ4
---
Towards the end of the recruitment cycle, the current cycle’s courses will mostly be closed to new applications or have only a few vacancies. There will be only a short window to apply.

Through our survey users who are searching for 2020 courses have complained about the lack of courses in there area.

We need to indicate that we are only searching the current year’s courses, and give the date when next year’s will be available.

Ideally we’d do this on the GOV.UK start page, but GDS is too busy to update it for us.

## Design notes

This is the first page users will see.

The green button takes users to the Find by location page.

This design increased bounce rate on the page from 8% to 18% in the first weeks of September.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Courses starting in different years" },
    { text: "Iteration showing closing dates" }
  ]
}) }}
