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

### Screenshots of the MVP of Candidate accounts

![Search results page with a link to save a course for later.](search-results-unsaved.png "Search results page with a link to save the course")

![Search results page with a link to save a course for later, with the link clicked and the link text changed to say the course has been saved.](search-results-saved.png "Search results page when the course has been saved")

![Course page with a link to save a course for later.](course-detail-unsaved.png "Course page with a link to save the course")

![Course page with a link to save a course for later, with the link clicked and the link text changed to say the course has been saved.](course-detail-saved.png "Course page when the course has been saved")

![Save courses page, which can be accessed via the primary navigation, and shows a list of saved courses, with information on the provider name, course name, course code and whether a course is open or closed for applications. There is also a link to delete a course on each saved course.](saved-courses.png "Saved courses page")

![Notification banner notifying when a user has deleted a course from their list of saved courses, with a link to undo the action.](saved-courses-delete-banner.png "Notification banner notifying when a user has deleted a course")

![Save courses page when there is no courses saved, showing a banner with a link to find courses.](saved-courses-empty.png "Save courses page with no courses saved")

## Scope

The MVP allowed candidates to save their courses, but didn’t address other user needs such as comparing courses.

We monitored the data of how the MVP was being used, and reviewed what user needs were still unmet. This allowed us to define the following scope:

* Adding recent searches and email alerts
* Adding pagination to saved courses
* Adding notes to saved courses
* Adding course information to saved courses
* Exploring ways to compare courses

## Design exploration

When exploring design solutions, we referenced services with similar functionality, such as [Find an apprenticeship](https://www.gov.uk/apply-apprenticeship), and [Teaching vacancies](https://teaching-vacancies.service.gov.uk/).

### 1. Adding recent searches and email alerts

We decided to update 'Saved courses' in the primary navigation to 'My courses'.

This allowed us to build out this section to include:

* saved courses
* recent searches
* email alerts
* a link to the Apply service

![My courses page with sub navigation to saved courses, recent searches and email alerts, and a separate link to the apply service.](prototype-my-courses.png)

Recent searches allows users to search again with the same criteria and to set up an email alert to be notified when a course is published that matches the search.

Analysis showed that around 75% of courses are published in the September and October, but there is still a number of courses published throughout the year.

![Recent searches page showing all the recent searches that have been made, and the ability to search for courses with that search criteria again, and to set up an email alert for each of the searches.](1-recent-searches.png)

![Table details of an email alert that can be reviewed before clicking a button to sign up for email alerts.](1-email-alert-new.png)

![Notification banner communicating that a new email alert has been set up.](1-email-alert-success.png)

The email alerts page allows users to view all the email alerts they have set up, and to unsubscribe from alerts.

![Email alerts page showing all the email alerts that have been set up, and the ability to unsubscribe from them.](1-email-alert-page.png)

### 2. Adding pagination to saved courses

Analysis showed the majority of candidates saving courses on Find are saving between 1 to 10 courses.

However, we felt there was enough candidates saving up to 40 courses, that we needed to add pagination to the page.

This will ensure candidates who save many courses are not overwhelmed or have issues with performance.

![Saved courses page with pagination added to the bottom of the page.](2-saved-course-pagination.png)

### 3. Adding notes to saved courses

We found in the last round of user testing that participants found the notes feature is helpful when compared courses, so we wanted to test this feature again.

![Saved courses page with a link to add a note to each saved course.](3-add-note-empty.png)

![Form to add a note to a saved course and a button to save the note.](3-add-note-new.png)

![Success banner communicating that tha note has been added to a saved course.](3-add-note-success.png)

![Saved courses page with the content of the note displayed on the saved course, and the ability to edit or delete the note.](3-add-note-added.png)


### 4. Adding course information to saved courses

Currently, the saved courses page only provides the name of the course and provider.

![Save courses page, which can be accessed via the primary navigation, and shows a list of saved courses, with information on the provider name, course name, course code and whether a course is open or closed for applications. There is also a link to delete a course on each saved course.](saved-courses.png "Live saved courses page")

We wanted to explore if providing additional information would help candidates compare saved courses.

When comparing courses, past research has shown that nearest placement school is most important for UK citizens, and the fee is most important for non-UK citizens. We added this information to the saved courses.

![Saved courses page with additional content of nearest placement school and fee amount or salary.](4-saved-course-info.png)

### 5. Exploring ways to compare courses

The user need to compare courses has come out strongly in several rounds of user research with candidates, with many explaining a desired solution such as a side-by-side comparison tool.

We explored solutions for a comparison, but we felt they may be overwhelming and more than what users need.

![Design exploration of a comparison tool for comparing courses as a grid.](5-comparison-tool-1.png)

![Design exploration of a comparison tool for comparing courses as a table.](5-comparison-tool-2.png)

We decided to focus on providing the additional course information and ability to add notes, to see if this would be enough to help users compare courses.

![Saved courses page with additional course information and ability to add notes.](5-saved-courses.png)

## Next steps

We will be tested these designs with participants in January 2026.

We will iterate on the designs based on feedback before implementing the new features.

## Screenshots of the prototype

### Mobile

| Saved courses | Recent searches | Email alerts |
| -- | -- | -- |
| <img alt="Saved courses page with additional course information and ability to add notes." src="prototype-saved-courses-mobile.png"> | <img alt="Recent searches page with the ability to perform the search again or set up an email alert for that search criteria." src="prototype-recent-searches-mobile.png"> | <img alt="Email alerts page with the email alerts that have been set up, and the ability to unsubscribe from them." src="prototype-email-alerts-mobile.png"> |

### Desktop

#### Saved courses
![Saved courses page with additional course information and ability to add notes.](5-saved-courses.png)

#### Recent searches
![Recent searches page with the ability to perform the search again or set up an email alert for that search criteria.](prototype-recent-searches.png)

#### Email alerts
![Email alerts page with the email alerts that have been set up, and the ability to unsubscribe from them.](prototype-email-alerts.png)






