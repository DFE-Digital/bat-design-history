---
title: Prototyping candidate accounts
description: Exploring how we might introduce accounts onto Find, and allow candidates to save courses for later.
date: 2025-03-28
tags:
  - Find
  - accounts
  - candidates
  - candidate accounts
related:
  items:
    - text: Reviewing previous research on candidate accounts
      href: /find-teacher-training/exploring-candidate-accounts/
    - text: Candidate accounts user research round 1
      href: /find-teacher-training/candidate-accounts-user-research-round-1/
screenshots:
  items:
    - text: Search results, with ability to save courses
      src: candidate-accounts-results.png
    - text: Course page, with ability to save courses
      src: candidate-accounts-course.png
    - text: Saved courses page, no courses
      src: candidate-accounts-saved-none.png
    - text: Saved courses page, with courses and recommendations
      src: candidate-accounts-saved.png
    - text: GOV.UK One Login
      src: candidate-accounts-login.png
    - text: Transition page from Find to Apply
      src: candidate-accounts-selected.png
---

## Background

When we [reviewed previous research on candidate accounts](/find-teacher-training/exploring-candidate-accounts/), we found that there would be many benefits to having one account across GIT, Get School Experience, Find and Apply.

We decided to start small by first introducing a candidate account on Find, that would use the same log-in credentials as on Apply. Therefore, candidates would be able to use their account to log-in to Apply as well.

## Scope

For candidate accounts on Find, we will focus initially on an MVP of candidates just being able to set up an account and then save courses.

- Ability to search for a course and view it
- Whether they can see the ability to save the course, and perform the action
- How they respond to seeing a log in screen when they click 'save course', would it be a barrier
- Whether they can navigate to where they can view and access their saved courses, and remove a course from the list
- How they respond to seeing a saved close has closed for applications, and what they would do next

## Potential benefits

- Allow more tailored recommendations based from saved searches, reducing the time taken to find the right course and increasing acceptance rate on saved courses
- Allow more tailored recommendations when courses are full, increasing the rate of reapplications, and increasing acceptance rate on reapplication.

## Principles

1. Candidates must be able to easily browse courses without logging in/setting up an account.
2. The initial account setup should be as quick and easy as possible and will allow candidates to save courses. After that, we will prompt them to input more information bit by bit to offer them increasingly tailored course recommendations.
3. All information entered on Find must transfer over to Apply. This will reduce the burden of applying to courses as many of their details will already be there.
4. The solution must not block further integration with other services.

## What we changed

We designed a prototype in Figma, as the team decided it would be easier to prototype the login elements of the design in comparison to using the prototype kit.

### Ability save courses from search results and course pages

We designed how candidates might save courses for later from the search results page:

![screenshot of saving a course from the search results page, with the save button not yet clicked](candidate-accounts-saving1.png)

![screenshot of saving a course from the search results page, with the save button clicked and indicated that the course has been saved](candidate-accounts-saving2.png)

We also allowed them to save from the course pages:

![screenshot of saving a course from the course page, with the save button not yet clicked](candidate-accounts-saving3.png)

![screenshot of saving a course from the course page, with the save button clicked and indicated that the course has been saved](candidate-accounts-saving4.png)

### Viewing saved courses and recommendations

We designed how candidates might view their saved courses.

![screenshot of the saved courses page with two courses saved](candidate-accounts-saved-view1.png)

We also wanted to explore showing candidates when a course is closed, and providing recommendations of similar courses to the closed course.

![screenshot of a saved course that has closed with a recommendation of a similar course that can be viewed via a link](candidate-accounts-saved-view2.png)

### Improving the transition from Find to Apply

The most challenging thing was how to improve the transtition from Find to Apply.

This is because the two services are still separate, with different navigation, so it can be confusing to users.

This is the initial design we tested:

![screenshot of page checking if the course name is correct and if the candidate wants to proceed to apply for the course](candidate-accounts-selected-first.png)

When we [tested the designs](/find-teacher-training/candidate-accounts-user-research-round-1/0), we needed to iterate on the design several times so that participants were clear on what is happening, and what they needed to do.

![screenshot of the five iterations made to the page transitioning candidates from Find to Apply during the round of testing](candidate-accounts-selected-iterations.png)

This is the final design iteration.

![screenshot of page checking if the course name is correct and if the candidate wants to proceed to apply for the course](candidate-accounts-selected.png)

## Next steps

These designs were tested with participants.

The findings are written in the following post: [Candidate accounts user research round 1](/find-teacher-training/candidate-accounts-user-research-round-1/).
