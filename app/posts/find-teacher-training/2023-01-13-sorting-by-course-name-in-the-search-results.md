---
title: Sorting by course name in the search results
description: We added sorting by course name to make it easier for users to find the courses they want
date: 2023-01-13
screenshots:
  items:
    - text: Course results - sorted by ‘Course name (A to Z)’
      src: course-results--sorted-by-course-name-a-z.png
    - text: Course results - sorted by ‘Course name (Z to A)’
      src: course-results--sorted-by-course-name-z-a.png
    - text: Course results - sorted by ‘Training provider (A to Z)’
      src: course-results--sorted-by-training-provider-a-z.png
    - text: Course results - sorted by ‘Training provider (Z to A)’
      src: course-results--sorted-by-training-provider-a-z.png
---

Previously, Find postgraduate teacher training (Find) only allowed users to sort courses by training provider name ascending and descending.

We added sorting by course name in the search results to make it easier for users to find the courses they want.

## What we changed

We added the sort options:

- Course name (A to Z)
- Course name (Z to A)

We changed the default sort order from ‘Training provider (A to Z)’ to ‘Course name (A to Z)’.

The sort options now include:

- Course name (A to Z)
- Course name (Z to A)
- Training provider (A to Z)
- Training provider (Z to A)

## How it works

To ensure the correct order of courses in the courses results list, we order by course name and training provider, depending on the sort being carried out.

For example, if the user sorts by ‘Course name (A to Z)’, we first sort by the course name ascending and then by the provider name ascending.

If the user changes the sort to ‘Provider name (A to Z)’, we sort by the provider name ascending and then the course name ascending to ensure the courses are ordered logically per provider.

### Sorting by ‘Course name (A to Z)’

Sort by course name ascending and by provider name ascending.

| Course name | Provider name |
| ----------- | ------------- |
| Course A | Provider A |
| Course B | Provider B |
| Course C | Provider A |
| Course D | Provider B |
| Course E | Provider B |

### Sorting by ‘Course name (Z to A)’

Sort by course name descending and by provider name ascending.

| Course name | Provider name |
| ----------- | ------------- |
| Course E | Provider B |
| Course D | Provider B |
| Course C | Provider A |
| Course B | Provider B |
| Course A | Provider A |

### Sorting by ‘Training provider (A to Z)’

Sort by provider name ascending and by course name ascending.

| Course name | Provider name |
| ----------- | ------------- |
| Course A | Provider A |
| Course C | Provider A |
| Course B | Provider B |
| Course D | Provider B |
| Course E | Provider B |

### Sorting by ‘Training provider (Z to A)’

Sort by provider name descending and by course name ascending.

| Course name | Provider name |
| ----------- | ------------- |
| Course B | Provider B |
| Course D | Provider B |
| Course E | Provider B |
| Course A | Provider A |
| Course C | Provider A |
