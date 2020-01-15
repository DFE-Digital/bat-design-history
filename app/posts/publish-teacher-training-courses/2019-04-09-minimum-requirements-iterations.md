---
title: Minimum course requirements – iterations
description: A view of how the minimum requirements design has been iterated since December.
---
Progression of the minimum requirements page design:

* Started with a subject choice and a sensible default
* Added the ability to change the choice
* Remove subject choice, instead defaulting to legal minimums. Page only asks for preference
* Make it clearer that this affects UCAS Apply
* Simplify preference choice using a table
* Remove table and switch to two questions
* Split questions over two pages

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Question 1: Candidates with pending GCSEs",
      img: {
        path: "/images/publish-teacher-training-courses/new-course-wizard-iteration",
        src: "candidates-with-pending-gcses.png"
      }
    },
    {
      text: "Question 2: Tests for candidates without GCSE requirements",
      img: {
        path: "/images/publish-teacher-training-courses/new-course-wizard-iteration",
        src: "tests-for-candidates-without-gcse-requirements.png"
      }
    },
    {text: "Two questions"},
    {text: "Options in a table"},
    {text: "Explicitly reference UCAS"},
    {text: "Pick an option, remove subject choice"},
    {
      text: "Introduce options",
      img: {
        path: "/images/publish-teacher-training-courses/new-course-iteration",
        src: "minimum-gcse-requirements.png"
      }
    },
    {
      text: "Original design",
      img: {
        path: "/images/publish-teacher-training-courses/minimum-requirements",
        src: "minimum-course-requirements.png"
      }
    }
  ]
}) }}
