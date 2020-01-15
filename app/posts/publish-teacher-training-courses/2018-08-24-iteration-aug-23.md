---
title: Iteration – 23 August
description: Trying to bring ‘About your organisation’ into the user journey
tags:
---

In this iteration we:

*   removed the horizontal navigation in favour of sections in the page
*   took the course content status labels and reused them on course pages
*   updated the ‘About your organisation’ page to be more like a course
*   added details we received from UCAS to the ‘About your organisation’ page

## Removing horizontal navigation

The switch from tabs to horizontal navigation didn’t have the desired effect. This bar now sits strangely on the page and we considered moving it to the top – but that would further deprioritise the ‘About your organisation’ journey.

Instead we chose to be explicit: Do this, then do this.

## Status labels

The status labels in the course table tested well. They’re a good indicator of empty/draft/published.

For consistency this design adds them to ‘About your organisation’ and course pages. The draft status [replaces the blue box](/publish-teacher-training/user-research-aug-22#workflow-states) (‘You have unpublished changes’).

The draft status was switched from blue to orange. This colour better communicates this intermediate state. [“It’s in amber”](https://lookback.io/watch/dujimh9gzaKrRAFBu?t=1h13m15.01s)

## Making ‘About your organisation’ like a course

The [previous design had two calls to action](/publish-teacher-training/user-research-aug-22#about-your-organisation) on one page. One for saving, another for publishing. With the publish button high up on the page there’s a risk users might use this rather than save, although we didn’t observe this in research.

We also needed to show what information we’d imported from UCAS about this organisation (eg contact details). There wasn’t an obvious place to put this.

The new design creates an overview page containing a summary and the publishing workflow. Editing is moved to a child page, separating the save and publish actions in the same way a course does. The design is now consistent with courses. On the overview there is space to put imported UCAS data, like on a course.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Organisation",
      img: { src: "organisation.png" }
    },
    {
      text: "About your organisation",
      img: { src: "about-your-organisation.png" }
    },
    {
      text: "Edit about your organisation",
      img: { src: "edit-about-your-organisation.png" }
    },
    {
      text: "Course",
      img: { src: "course.png" },
      caption: 'Note the similarity with ‘About your organisation’ and the orange draft status.'
    },
    {
      text: "Preview",
      img: { src: "preview.png" }
    },
    {
      text: "Course length and fees",
      img: { src: "course-length-and-fees.png" }
    }
  ]
}) }}
