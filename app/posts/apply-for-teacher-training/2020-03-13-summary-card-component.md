---
title: The summary card component
description: A design pattern to enable the display of multiple summaries alongside each other.
date: 2020-03-13
tags:
  - summary card
related:
  items:
    - text: Summary card
      description: Discussion about this component on the GOV.UK Design System Community Backlog
      href: https://github.com/alphagov/govuk-design-system-backlog/issues/210
---

{% from "gallery/macro.njk" import appGallery with context %}

Throughout the service we ask candidates to enter multiple items of information (eg jobs, work experiences, qualifications, course choices). We then give candidates the opportunity to review their answers, not only after completing each section, but when reviewing their entire application.

We tried to display this information using existing components, but uncovered a number of different issues:

* Repeating the summary list component many times over on a page, separated only by headings and rules, made it difficult to identify individual entries. This problem was even more noticable when reviewing an entire application because there were additional heading levels.

* We tried to display individual entries in a table, but given the amount of information needing to be shown, this soon became constraining; information was inaccessible and poorly labelled, and it didn’t work well on mobile.

* It also proved difficult to associate actions with individual summary lists, further decreasing the overall clarity of a page.

We needed a component that would help users clearly identify different summaries, and perform associated actions on each. The summary card component allows us to do this.

{{ appGallery({
  items: [{
    text: "A review page without component",
    caption: "Reviewing a work history using headings and summary list components."
  }, {
    text: "A review page with component",
    caption: "Reviewing the same work history using the summary card component."
  }]
}) }}

* * *

## Introducing the summary card

Use the summary card when you need to show multiple summaries – for example, when reviewing an application that includes several repeated types of information (a set of courses or a series of qualifications, say).

![Summary card with title and multiple actions](summary-card-with-title-and-multiple-actions.png)

## When to use this component

Use the summary card component when you have multiple summaries that can be grouped thematically and appear alongside each other.

Also use it when you need to apply an action(s) to the information shown – for example, deleting all the information shown in the summary.

If you’re using this component at the end of an application process, you may want to show it when reviewing individual sections, to make sure users are familiar with the pattern when they see it again at the end of their journey.

## When not to use this component

If you need to present only a limited amount of related information, use the summary list component. Combine this with heading(s) if you need to introduce different summary lists.

## How it works

The summary card component allows you to visually group related pieces of information that sit alongside other similarly grouped summaries. The content of a summary card will typically include a single summary list, but could display a paragraph (or multiple paragraphs) of text instead.

Summary cards should have a title where possible, but can appear without one if they appear alongside other summary cards that do have a title.

![A summary card](summary-card.png)

### Summary card with a title

If the information in each summary card can have a title, this should be shown in the summary card’s header. A title will typically use a unique name for the information shown – for example, the name of an organisation or title of a qualification.

![Summary card with title](summary-card-with-title.png)

### Summary card with a title and actions

You can add actions to a summary card, like a ‘Delete’ link to let users delete a particular group of related content. A maximum of three actions is recommended.

For sighted users, the actions get their context from the heading they appear next to.

Assistive technology users, like those who use a screen reader, may hear the links out of context and not know what they do. To give more context, add visually hidden text to the links. This means a screen reader user will hear a meaningful action like ‘Delete choice: University of Bristol’ or ‘Withdraw choice: The University of Gloucestershire’.

![Summary card with title and multiple actions](summary-card-with-title-and-multiple-actions.png)
