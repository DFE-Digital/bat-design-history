---
title: The summary card component
description: A design pattern to enable the display of multiple summaries alongside each other.
date: 2020-03-13
---
{% from "figure/macro.njk" import appFigure with context %}

Use the summary card when you need to show multiple summaries – for example, when reviewing an application that includes several repeated types of information (a set of courses or a series of qualifications, say).

{{ appFigure({
  image: {
    file: "summary-card-with-title-and-multiple-actions.png"
  }
}) }}

## When to use this component

Use the summary card component when you have multiple summaries that can be grouped thematically and appear alongside each other.

Also use it when you need to apply an action(s) to the information shown – for example, deleting all the information shown in the summary.

If you’re using this component at the end of an application process, you may want to show it when reviewing individual sections, to make sure users are familiar with the pattern when they see it again at the end of their journey.

## When not to use this component

If you need to present only a limited amount of related information, use the summary list component. Combine this with heading(s) if you need to introduce different summary lists.

## How it works

The summary card component allows you to visually group related pieces of information that sit alongside other similarly grouped summaries. The content of a summary card will typically include a single summary list, but could display a paragraph (or multiple paragraphs) of text instead.

Summary cards should have a title where possible, but can appear without one if they appear alongside other summary cards that do have a title.

{{ appFigure({
  image: {
    file: "summary-card.png"
  }
}) }}

### Summary card with a title

If the information in each summary card can have a title, this should be shown in the summary card’s header. A title will typically use a unique name for the information shown – for example, the name of an organisation or title of a qualification.

{{ appFigure({
  image: {
    file: "summary-card-with-title.png"
  }
}) }}

### Summary card with a title and actions

You can add actions to a summary card, like a ‘Delete’ link to let users delete a particular group of related content. A maximum of three actions is recommended.

For sighted users, the actions get their context from the heading they appear next to.

Assistive technology users, like those who use a screen reader, may hear the links out of context and not know what they do. To give more context, add visually hidden text to the links. This means a screen reader user will hear a meaningful action like ‘Delete choice: University of Bristol’ or ‘Withdraw choice: The University of Gloucestershire’.

{{ appFigure({
  image: {
    file: "summary-card-with-title-and-multiple-actions.png"
  }
}) }}
