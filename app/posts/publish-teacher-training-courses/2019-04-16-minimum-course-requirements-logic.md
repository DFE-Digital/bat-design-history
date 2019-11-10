---
title: Logic mapping UCAS eligibility questions to API codes
description: Which code should the API sent to UCAS based on a provider’s answers to questions.
tags: publish-teacher-training-courses
---
UCAS sets a status (1, 2, 3, 9 or n/a) for Maths, English and Science for each course. [This denotes who can apply](/publish-teacher-training-courses/specific-requirements).

In our design we instead ask two questions:

* will you receive applications from candidates with pending GCSEs?
* will you receive applications from candidates who need to take an English, Maths or Science equivalency test?

## What subjects are required?

Maths and English are required for Primary and Secondary courses. Additionally science is needed for Primary.

We don’t ask the questions for Further education courses because there is no legal requirement.

When a subject isn’t required use the UCAS code 9\. When it is required, use the one derived from answers to the questions.

| Level | English | Maths | Science |
|-|-|-|-|
| **Primary** | Required | Required | Required |
| **Secondary** | Required | Required | Not required (9) |
| **Further education** | Not required (9) | Not required (9) | Not required (9) |

## Which code should be used?

A user can select Yes to equivalency tests but can restrict this by subject (see screenshot).

| Pending GCSEs | Equivalency | Code |
|-|-|-|
| Yes | Yes (subject checked) | 3 |
| Yes | Yes (subject not checked) | 2 |
| Yes | No | 2 |
| No | No| 1 |
| No | Yes| Invalid* |

\* It’s possible to make an invalid choice – UCAS doesn’t allow you to receive applications from candidates needing to take an equivalency test if you’ve blocked applications from candidates with pending GCSEs. In this case we need to warn the user with a validation message.

## Screenshots

{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: "/images/publish-teacher-training-courses/new-course-wizard-iteration",
  items: [
    {text: "Question 1", id: "candidates-with-pending-gcses"},
    {text: "Question 2", id: "tests-for-candidates-without-gcse-requirements"}
  ]
}) }}
