---
title: Copy content – 14 September iteration
description: Make the copy feature easier to find
date: 2018-09-14
tags:
  - courses
  - copy content
screenshots:
  items:
    - Course with copy content prompts
    - Copy content on form page
    - Copy content disclosure when open
---

> We did not build this design. Instead we used an MVP ‘you can find copy here’ – ie a signpost where people were looking for the feature.

An iteration on where the copy content feature sits.

Because of its position in the right hand column it’s too easily missed by users completing the form. For users who search for the feature because they’ve read about it, it’s missed because they’re searching on the course overview page.

This design aims to make the feature more discoverable by:

- putting the form on each section of the course overview (behind a disclosure)
- moving the form from the right to below the title, in the main flow of the document (also behind a disclosure)

There are subtle differences in the copy for the two pages.

## Course overview

Notes on implementation:

- the disclosure must have unique but hidden text for screenreaders (like the edit links)
- when the form is submitted the behaviour is the same, eg the ‘About this course’ page is loaded with [the orange prompt](/publish-teacher-training-courses/copy-content-from-another-course-live#copying-content-on-about-this-course)

The disclosure is placed below the empty sections. It might be better above them as the primary action, this might draw attention away from the edit link. We’ll need to test this positioning and iterate.

*[MVP]: Minimum viable product
