---
title: Beta prototype v1
description: Building a new prototype from scratch
date: 2020-10-14
screenshots:
  title: Screenshots of all pages
  items:
    - text: Register trainee teachers
      src: 01-register-for-teacher-training.png
    - text: Assessment Only (AO) guidance
      src: 02-assessment-only-guidance.png
    - text: Data requirements
      src: 03-data-requirements.png
    - text: Trainee teachers
      src: 04-trainee-teachers.png
    - text: Add a trainee
      src: 05-add-a-trainee.png
    - text: Other routes not supported
      src: 06-other-routes-not-supported.png
    - text: Overview
      src: 07-overview.png
    - text: Candidate personal details
      src: 08-candidate-personal-details.png
    - text: Confirm personal details
      src: 09-confirm-personal-details.png
    - text: Contact details
      src: 10-contact-details.png
    - text: Confirm personal details
      src: 11-confirm-personal-details.png
    - text: Overview
      src: 12-overview.png
    - text: Has the candidate disclosed diversity information?
      src: 13-has-the-candidate-disclosed-diversity-information.png
    - text: Confirm diversity information
      src: 14-confirm-diversity-information.png
    - text: Ethnic group
      src: 15-ethnic-group.png
    - text: Which of the following best describes their Asian or Asian British background?
      src: 16-which-of-the-following-best-describes-their-asian-or-asian-british-background.png
    - text: Which of the following best describes their Black, African, Black British or Caribbean background?
      src: 17-which-of-the-following-best-describes-their-black-african-black-british-or-caribbean-background.png
    - text: Which of the following best describes their Mixed or multiple ethnic groups background?
      src: 18-which-of-the-following-best-describes-their-mixed-or-multiple-ethnic-groups-background.png
    - text: Which of the following best describes their White background?
      src: 19-which-of-the-following-best-describes-their-white-background.png
    - text: Which of the following best describes their Another ethnic group background?
      src: 20-which-of-the-following-best-describes-their-another-ethnic-group-background.png
    - text: Is the candidate disabled?
      src: 21-is-the-candidate-disabled.png
    - text: Confirm diversity information
      src: 22-confirm-diversity-information.png
    - text: Which disabilities were disclosed?
      src: 23-which-disabilities-were-disclosed.png
    - text: Confirm diversity information
      src: 24-confirm-diversity-information.png
    - text: Check record
      src: 25-check-record.png
    - text: Check record
      src: 26-check-record.png
    - text: GCSE details
      src: 27-gcse-details.png
    - text: Confirm GCSE details
      src: 28-confirm-gcse-details.png
    - text: Add undergraduate degree
      src: 29-add-undergraduate-degree.png
    - text: Add undergraduate degree
      src: 30-add-undergraduate-degree.png
    - text: Degree details
      src: 31-degree-details.png
    - text: Confirm degree details
      src: 32-confirm-degree-details.png
    - text: Add undergraduate degree
      src: 33-add-undergraduate-degree.png
    - text: Degree details
      src: 34-degree-details.png
    - text: Confirm degree details
      src: 35-confirm-degree-details.png
    - text: Assessment details
      src: 36-assessment-details.png
    - text: Confirm assessment details
      src: 37-confirm-assessment-details.png
    - text: Check record
      src: 38-check-record.png
    - text: Trainee submitted for TRN
      src: 39-trainee-submitted-for-trn.png
    - text: Trainee teachers
      src: 40-trainee-teachers.png
    - text: Sally Jenkins
      src: 41-sally-jenkins.png
    - text: Sally Jenkins
      src: 42-sally-jenkins.png
    - text: Trainee ID (optional)
      src: 43-trainee-id-optional.png
    - text: Assessment details
      src: 44-assessment-details.png
    - text: Sally Jenkins
      src: 45-sally-jenkins.png
    - text: Recommend for QTS
      src: 46-recommend-for-qts.png
    - text: Check assessment details
      src: 47-check-assessment-details.png
    - text: Sally Jenkins
      src: 48-sally-jenkins.png
    - text: Sally Jenkins
      src: 49-sally-jenkins.png
    - text: Sally Jenkins
      src: 50-sally-jenkins.png
    - text: Trainee teachers
      src: 51-trainee-teachers.png
    - text: Trainee teachers
      src: 52-trainee-teachers.png
    - text: Trainee teachers
      src: 53-trainee-teachers.png
related:
  items:
    - text: Current beta prototype (Heroku)
      href: https://register-prototype.herokuapp.com/
    - text: Github repo for prototype
      href: https://github.com/DFE-Digital/register-trainee-teachers-prototype
    - text: Alpha prototype
      href: /register-trainee-teachers/alpha-prototype/
---

We began work on a new prototype for the Register service in early September 2020. The [alpha prototype](/register-trainee-teachers/alpha-prototype/) was a static InVision prototype, which while good for quick iteration, limited some of the usability testing we could do. This new one is built with the [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/) and allows us to test complex journeys with realistic data.

## Journey changes

Working in HTML and designing for progressive enhancement necessitated some changes from the alpha designs:

* use the task list pattern rather than tabs for each form
* break up forms across pages to support adding multiples (like multiple degrees)
* implicitly require that each section be completed as a whole, and not allow individual fields to be left blank

The new prototype borrows heavily from the Apply and Manage services. Register sits half way between them in terms of data collected and actions users need to take, so it’s been incredibly helpful to have them to take inspiration from.

## Task list pattern

This pattern allows us to have multiple sections that users can complete in any order. As the Register service supports more routes, we can vary the sections shown so they are specific to each route.

![Task list overview.](07-overview.png "Task list overview")

![A task collecting some data.](08-candidate-personal-details.png "A task collecting some data")

![Confirming those details.](09-confirm-personal-details.png "Confirming those details")

![A partially completed task list.](12-overview.png "A partially completed task list")
