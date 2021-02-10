---
title: Work history iteration
description: Further changes to the work history section made after user testing
date: 2021-01-10
related:
  items:
  - text: Work history breaks
    href: https://bat-design-history.netlify.app/apply-for-teacher-training/work-history-breaks/
    description: Previous post about breaks in work history
  - text: Work history iteration for testing
    href: https://bat-design-history.netlify.app/apply-for-teacher-training/work-history-iteration-for-testing/
    description: Changes to the work history flow made for testing
---

We made some further changes to the Work history section in response to user testing.

## What we did

We moved the section back underneath a Work experience section, and reinstated the Unpaid experience section.

We reordered the Add job form, to make the ‘Name of employer’ the first field, as this was often what candidates recalled first.

We renamed ‘Job title’ to ‘Role’, as candidates may not remember their exact job title (or even have had one), and so ‘Role’ implies they can use a short description instead.

We added some hint text to ‘Role’ saying “If you had more than one role with this employer, enter your last role.” as feedback from providers suggested that listing out each promotion within a employment was unnecessary.

We added a checkbox labelled “I’m not sure of the exact month or year I started” and ”I’m not sure of the exact month or year I left” so that candidates can use these when they could not recall the relevant months.

We renamed “Did this job involve working in a school or with childen?” to “Did you use skills relevant to teaching in this job?” as providers indicated that they were most interested in _relevant_ work history, which could encompass a wider variety of jobs.

We added the hint text “You can go into more detail about this in your personal statement.” to the ”Did this job involve working in a school or with childen?” question to remind candidates that they can give more details about relevant jobs in their personal statement.

On the review page, we simplified the design, moving away from a table and just using headings with horizontal lines between jobs, enclosed within a bordered section. This removed the need to include column headings and a table caption, and addressed accessibility issues with having used a row of merged cells for the break in history prompts.

The Add another job button was moved to the top of the page, for consistency with other sections.


## Screenshots

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Initial branching question"
    }
  ]
}) }}

