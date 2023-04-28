---
title: Updating how providers manage course vacancies
description:
date: 2022-07-26
tags:
  - school placements
  - vacancies
screenshots:
  items:
    - text: Course list showing ‘open’ courses - courses with vacancies
      src: course-vacancies--course-list-course-open.png
    - text: Course list showing ‘closed’ course - a course without vacancies
      src: course-vacancies--course-list-course-closed.png
    - text: Course vacancies list - the course has vacancies
      src: course-vacancies--vacancies-list.png
    - text: Change vacancies - courses with vacancies
      src: course-vacancies--change-vacancies-has-vacancies.png
    - text: Locations with vacancies
      src: course-vacancies--locations-with-vacancies.png
    - text: Check your answers - courses with vacancies
      src: course-vacancies--check-your-answers-has-vacancies.png
    - text: Course vacancies list - the course has vacancies
      src: course-vacancies--vacancies-updated-has-vacancies.png
    - text: Change vacancies - courses without vacancies
      src: course-vacancies--change-vacancies-no-vacancies.png
    - text: Check your answers - courses without vacancies
      src: course-vacancies--check-your-answers-no-vacancies.png
    - text: Course vacancies list - courses without vacancies
      src: course-vacancies--vacancies-updated-no-vacancies.png
---

When a provider publishes a course, they can list all the locations where a candidate can gain experience. These locations are shown in the ‘School placements’ section of Find postgraduate teacher training (Find).

In addition to the list of locations, we also show vacancies for each location. This allows providers to show where a candidate can train. The vacancy status on Find is a simple ‘yes’ or ‘no’.

In Publish teacher training courses (Publish), users can update the vacancy status of each location in the list. They can either mark all schools as not having vacancies or individually select locations with vacancies.

If all locations do not have vacancies, the course is marked as ‘Closed’ in Publish. The course is still available on Find, but candidates cannot apply.

## What we changed

We have:

- moved the vacancies section into a tab on the course details
- updated the vacancies flow

## How it works

### Changing vacancies

![Change course vacancies flow](course-vacancies--flow.png "Change course vacancies flow")

Changing the vacancies for a course has several steps. If the course has vacancies, we show:

1. ‘Does the course have vacancies?’
2. select locations with vacancies
3. check your answers

If the course does not have vacancies, we show:

1. ‘Does the course have vacancies?’
2. check your answers

#### ‘Does the course have vacancies?’

Selecting ‘Change vacancies’ from the courses list page or vacancies tab on the course page takes the user to a question asking, ‘Does the course have vacancies?’

The question has two options:

- Yes
- No

If the user selects ‘Yes’, we show a page where they must select all locations with vacancies.

If the user selects ‘No’, we show a ‘Check your answers’ page.

#### Select locations with vacancies

If the course has vacancies, we show all locations associated with the course.

Users can select which locations have vacancies.

They cannot submit the page with no locations selected. If they do, we show an error message:

> Select all locations with vacancies

#### Check your answers

The final step is to check your answers.

If the course has vacancies, we show:

- the answer to ‘Does the course have vacancies?’
- a list of locations with vacancies

If the course does not have vacancies, we show:

- the answer to ‘Does the course have vacancies?’
- a warning message: ‘Updating vacancies will close the course to applications’

#### Submitting the change

We show a success message and change the course status to:

- ‘Open’ if the course has vacancies and was previously closed
- ‘Closed’ if the course does not have vacancies

### Changing locations

If users add a new location to a closed course, the course is reopened.

If users remove a location from an open course and it is the only location with vacancies, the course is closed.

## Further considerations

We considered moving vacancies to the course level. Providers don’t often know the number of vacancies per location or the locations available to accept placements when the course is opened.

We didn’t make this change because we need to learn more about how this information could be used to improve the candidate’s decision-making.
