---
title: Homepage update July 21
description:
date: 2021-08-03
---

{% from "figure/macro.njk" import appFigure with context %}

Changes page heading from the service name (‘Register trainee teachers’) to ’Your trainee teachers’, to:

- reduce confusion with the start page that has the same heading
- make the purpose of the page a little clearer

Adds the organisation name to the heading, this sets context for the ‘Your’ in ‘Your trainee teachers’ and will for users that belong to more than one organisation.

Makes the heading one size larger for consistency with the rest of the service and gives room in heading hierarchy for sections in the page.

Updates the nav to refer to ‘trainees’ consistently instead of ‘records’. The service currently uses ‘records’ and ‘trainees’ either inconsistently or in a way that’s pretty subtle — I personally find ‘record’ to be too general and find it helpful to use ‘trainee’.

Removes the lead-in paragraph, this doesn’t need to be seen repeatedly by users.

Styles ‘Add a trainee’ as a link and puts it into the new ‘Draft trainees’ section.

Adds sections:

- Draft trainees
- Registered trainees
- Guidance and feedback

This gives a stronger distinction between ‘draft’ and non-draft trainee records. This is consistent with the top nav and helps with prioritise incomplete records as a group.

The three actions in draft are shown as a simple list in part because they are conditional on whether the user has any draft trainees or records imported from Apply. If the user hasn’t created any draft trainees but has records from Apply we’d only show them the ‘See draft trainees imported from Apply’ link because the ‘all draft’ link would do the exact same thing. This will also make prioritisation clearer.

Removes the middle section of the page with 3 links as the relationship between them wasn’t clear and the new sections give a clearer home for the ‘Registered trainees’ and ‘Guidance’ links.

Adds a link to the current year’s trainees.

Made the status cards use css-grid so they adapt to different viewport widths more nicely – 2 × 3 from mobile, 4 × 2 from desktop.

Splits the guidance links. This is so the guidance titles are more useful than ‘guidance’. For now the two links go to different sections in the same page, but the guidance page should be split.

{{ appFigure({
  title: "Your trainee teachers",
  image: {
      file: "registers-home-page.png",
      alt: "Your trainee teachers, screenshot."
    }
}) }}
