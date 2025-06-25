---
title: Adding a subject to a placement
description: We changed the way that school users add the subject to a placement.
date: 2024-05-31
tags:
  - partner schools
  - placements
related:
  items:
    - text: User research round 1 findings
      href: /manage-school-placements/user-research-round-1-findings/
    - text: Adding placements if you belong to a school
      href: /manage-school-placements/adding-placements/
screenshots:
  items:
    - text: Phase selection
      src: primary-subject.png
    - text: Primary phase subjects
      src: primary-subject.png
    - text: Secondary phase subjects
      src: subject.png
    - text: Modern languages subjects
      src: modern-languages.png
    - text: Check your answers
      src: check-your-answers.png
    - text: Placements page
      src: placements-page.png
---

In user research we observed that some participants confused the ‘Select all that apply’ instruction on the ‘Subject’ screen for secondary school placements. They interpreted it as saying they should select all subjects relevant to the school rather than only those applicable to the individual placement. In most cases, there will only be one subject for a single placement, but there are exceptions, such as for French and Spanish placements.

## What we changed

- We changed the subject page for both primary and secondary subjects to only allow a single selection.

- We made it possible for users who select ‘modern languages’ to further specify which languages the placement is for.

## How it works

![Image showing the flow diagram for adding a subject to a school placement](add-placement-flow.png ‘Add a placement flow')

### Subjects list (primary and secondary)

When a placement is added the user can choose from a list of subjects. We changed the input on these pages from checkboxes to radios, meaning that the user can only choose a single item.

If the school only teaches one phase, the subjects list is automatically populated for that phase. If the school teaches both phases, the user is asked to specify the placement phase and then is shown the relevant subject list.

Subject lists are populated with subject names from Publish teacher training courses.

### Modern languages page

If a user chooses modern languages from the secondary subjects list, they’re taken to a page with a list of the modern languages taken from Publish teacher training courses. They are able to select multiple languages if they choose to.

### Placement titles

By default, placements take the title of the subject. If the placement is for modern languages, then the placement title is the language or languages selected.

## Editing subject

During the placement journey there is a change link for every answer that the school has entered. Clicking this link takes them back into the journey at that point.

Once a placement has been added, the subject can no longer be changed. This is because:

- We did not see instances of schools selecting the wrong subject in user research sessions.
- If a subject changes, dependencies like mentor or year group are likely to change, meaning the whole nature of the placement changes.
- Once a provider has been assigned to a placement, its core attributes cannot change.
- It is easy to delete and create new placements.

## Further considerations

We tested this with school users. They found it easy to use to add placements.

We did receive feedback that there may be scenarios where it was useful to break other subjects down in the same way we have done with modern languages. The subjects that came up were design and technology, which may be broken into specialisms, and physical education, which is taught by gender.

At present we do not have enough information to decide if these extra subject breakdowns are necessary. We will continue to test with users and monitor service usage through private beta.

We also found that users with large numbers of placements would like the ability to add multiple placements at one time. We will consider the bulk addition of placements in future.
