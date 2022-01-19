---
title: Showing the automatic rejection date when setting up an interview
description: Helping users avoid entering an interview date after automatic rejection date
date: 2021-03-26
screenshots:
  items:
    - Interview details form
---

When setting up an interview, the user will see an error if they enter a date that’s after the automatic rejection date.

To help users avoid seeing this error, we’ve added hint text which mentions the automatic rejection date when setting up the details of the interview.

## Hint text rules

The example date in the hint should be either:

- tomorrow’s date
- today’s date, if the application will be automatically rejected today

## Error message

If the user enters a date that’s after the automatic rejection date, they’ll see an error which says, for example, ‘Interview date must be no later than 9 June 2021’.
