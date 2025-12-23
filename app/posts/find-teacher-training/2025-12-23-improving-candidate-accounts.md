---
title: Improving candidate accounts
description: Expanding on the MVP to improve how candidates can navigate through saved courses and compare them.
date: 2025-12-23
tags:
  - find
  - accounts
  - candidates
  - candidate accounts
related:
  items:
    - text: Reviewing previous research on candidate accounts
      description: March 2025
      href: /find-teacher-training/exploring-candidate-accounts/
    - text: Prototyping candidate accounts
      description: March 2025
      href: /find-teacher-training/candidate-accounts-design/
    - text: Candidate accounts user research round 1
      description: May 2025
      href: /find-teacher-training/candidate-accounts-user-research-round-1/
---

## Background

In March 2025, we [reviewed previous research on candidate accounts](/find-teacher-training/exploring-candidate-accounts/) and decided we wanted to introduce accounts on Find.

Based on the research, we [prototyped an MVP of candidate accounts](/find-teacher-training/candidate-accounts-design/), focusing on allowing candidates to shortlist courses of interest.

We tested that candidates could:

- set up an account using GOV.UK One Login
- save a course from the search results page, and the course page
- access their saved courses, and delete them

After completing a round of [user research on the prototype](/find-teacher-training/candidate-accounts-user-research-round-1/), the MVP designs were built and went live for the start of the recruitment cycle in October 2025.

### Candidate accounts MVP screenshots

![Search results page with a link to save a course for later.](search-results-unsaved.png "Search results page with a link to save the course")

![Search results page with a link to save a course for later, with the link clicked and the link text changed to say the course has been saved.](search-results-saved.png "Search results page when the course has been saved")

![Course page with a link to save a course for later.](course-detail-unsaved.png "Course page with a link to save the course")

![Course page with a link to save a course for later, with the link clicked and the link text changed to say the course has been saved.](course-detail-saved.png "Course page when the course has been saved")

![Save courses page, which can be accessed via the primary navigation, and shows a list of saved courses, with information on the provider name, course name, course code and whether a course is open or closed for applications. There is also a link to delete a course on each saved course.](saved-courses.png "Saved courses page")

![Notification banner notifying when a user has deleted a course from their list of saved courses, with a link to undo the action.](saved-courses-delete-banner.png "Notification banner notifying when a user has deleted a course")

![Save courses page when there is no courses saved, showing a banner with a link to find courses.](saved-courses-empty.png "Save courses page with no courses saved")

## Scope

The MVP allowed candidates to save their courses, but didn’t address other user needs such as comparing courses.

We monitored the data of how the MVP was being used, and reviewed what user needs were still unmet. This allowed us to define the scope.

### 1. Adding previous searches and email alerts

This would allow users to search again with the same criteria and be notified when a course is published that matches the search.

Analysis showed that around 75% of courses are published in the September and October, but there is still a number of courses published throughout the year.

### 2. Adding pagination to saved courses

Analysis showed the majority of candidates saving courses on Find are saving between 1 to 10 courses.

However, we felt there was enough candidates saving up to 40 courses, that we needed to add pagination to the page.

This will ensure candidates who save many courses are not overwhelmed or have issues with performance.

### 3. Adding notes to saved courses

We found in the last round of user testing that participants found the notes feature is helpful when compared courses, so we wanted to test this feature again.

### 4. Adding course information to saved courses

Currently, the saved courses page only provides the name of the course and provider. We wanted to explore if providing additional information would help candidates compare saved courses.

### 5. Exploring ways to compare courses

The user need to compare courses has come out strongly in several rounds of user research with candidates, with many explaining a desired solution such as a side-by-side comparison tool.

## Design exploration

When exploring design solutions, we referenced services with similar functionality, such as Find an apprenticeship, and Teaching vacancies.

### My courses

We decided to update 'Saved courses' in the primary navigation to 'My courses'.

This allowed us to build out this section to include, saved courses, recent searches, email alerts, and a link to the Apply service.

![My courses page with sub navigation to saved courses, recent searches and email alerts, and a separate link to the apply service.](prototype-my-courses.png "My courses page")


## Next steps

We will be tested these designs with participants in January 2026.

We will iterate on the designs based on feedback before implementing the new features.
