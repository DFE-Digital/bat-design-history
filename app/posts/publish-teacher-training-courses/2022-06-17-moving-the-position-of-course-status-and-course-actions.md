---
title: Moving the position of course status and course actions
description: We moved the course status tag and course actions to make it easier for users to see the status of their course and take action
date: 2022-06-17
screenshots:
  items:
    - text: Course details - empty, draft and rolled over
      src: course-details--draft-rolled-over.png
    - text: Course details - published
      src: course-details--published.png
    - text: Course details - published with unpublished changes
      src: course-details--published-with-unpublished-changes.png
    - text: Course details - withdrawn
      src: course-details--withdrawn.png
---

Currently, the course status and actions a user can take on a course are only in the sidebar of the course descriptions page.

We wanted to make the course status and actions more evident and available regardless of the section a user might be in.

## What we changed

We removed the sidebar on the basic details and description pages.

We now show the:

- course status next to the course name
- last published date below the course name - if the course status is ‘published’
- last withdrawn date below the course name - if the course status is ‘withdrawn’
- actions in a horizontal list above the sub-navigation

We made these changes so that users could:

- see the status of the course at all times
- take action on the course from either the basic details or description pages

## How it works

### Status tag

We show the course status tag next to the course name. The status tag is displayed on the following line if the course name is long.

### Course actions

We show a horizontal list of actions based on the course status below the course name.

If the course has the status ‘empty’, ‘draft’ or ‘rolled over’, we show a:

- publish course button
- delete course link

If the course has the status ‘published’, we show links to:

- view on find
- change vacancies
- withdraw course

If the course is published and has unpublished changes, we first show a publish course button in the list of actions.

If the course is ‘withdrawn’, we remove all actions, including change links.

### Last published and withdrawn dates

Below the course name, we show the date:

- last published - if the course status is ‘published’
- withdrawn - if the course status is ‘withdrawn’
