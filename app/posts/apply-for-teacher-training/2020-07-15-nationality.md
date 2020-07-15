---
title: Asking for nationality
description: Asking for nationality and getting a structured list of country codes.
date: 2020-07-15
---

As part of [opening up the service to international candidates](/apply-for-teacher-training/international-candidates/), we changed how we ask candidates for their nationality, providing explicit options for British and Irish, and allowing more than 2 nationalities to be entered as free text.

However, there were a few problems with this design.

### The problem with free text

If a candidate had 2 or more nationalities, they had to enter them as free text. This meant we could not use structured data.

### The problem with the design logic

Candidates who had British or Irish nationality as well as an additional overseas nationality were shown questions about residency and English language qualifications which were not relevant to them.

## What we did

We looked at [patterns used on other GOV.UK services](https://github.com/alphagov/govuk-design-system-backlog/issues/73), such as [Register to Vote](https://www.gov.uk/register-to-vote):

{% from "figure/macro.njk" import appFigure with context %}
{{ appFigure({
  image: {
    file: "govuk-register-to-vote.png"
  }
}) }}

This pattern solves the above issues, but we made some changes.

We will not use hint text for the British and Irish nationality options. Our hypothesis is that candidates will know which boxes are relevant to them without the explanation. We’ll test this with users.

We will use nationality instead of country. The Home Office refers to ‘nationality’ and ‘national of [country]’ on its [visa checking tool](https://www.gov.uk/check-uk-visa) and [English language visa eligibility guidance](https://www.gov.uk/tier-4-general-visa/knowledge-of-english). We ask about nationality primarily for visa purposes, so it makes sense to be consistent with the Home Office.

### Accessibility considerations

This pattern allows candidates to add up to 3 other nationalities in addition to British and Irish.

We need to show different fields and buttons depending on how many nationalities are added.

{{ appFigure({
  image: {
    file: "what-is-your-nationality-1-other.png"
  },
  caption: "With 1 or 2 fields, the ‘Add another nationality’ button is shown."
}) }}

{{ appFigure({
  image: {
    file: "what-is-your-nationality-2-others.png"
  },
  caption: "With 2 or 3 fields, each field shows a corresponding ‘Remove’ button."
}) }}

{{ appFigure({
  image: {
    file: "what-is-your-nationality-3-others.png"
  },
  caption: "With 3 fields, the ‘Add another nationality’ button is hidden
These state changes could present a challenge to screen reader users."
}) }}

We’ll make this behaviour easier to understand by:

* using hidden labels such as ‘first nationality’, ‘second nationality’ and so on
* announcing full label names on the remove buttons, eg ‘Remove first nationality’
* [returning focus to the page heading](https://inclusive-components.design/a-todo-list/#focusmanagement) when removing a field

We’re announcing label descriptions because it helps users keep track of which fields are being added or removed. However, we’re not visually displaying them as there is no implicit order to the nationalities a candidate has. We’d like to avoid having 2 different experiences, but this seems like a reasonable tradeoff between meeting accessibility needs and making the content understandable to an international audience.

{{ appFigure({
  image: {
    file: "what-is-your-nationality-no-js.png"
  },
  caption: "If JavaScript is not present, a candidate is shown 3 select menus - one for each nationality they can add."
}) }}

{{ appFigure({
  image: {
    file: "review-personal-details.png"
  },
  caption: "We only need to show one nationality summary item when reviewing these answers, which shows each nationality chosen."
}) }}
