---
title: Contextual guidance on course fields
description: A first pass at providing some guidance for each course field. Starting from the original onboarding guidance.
---
A first pass at providing some guidance for each course field. Starting from the original onboarding guidance.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "About this course",
      img: { src: "about-this-course.png" }
    },
    {
      text: "Course requirements",
      img: { src: "course-requirements.png" }
    },
    {
      text: "Qualification",
      img: { src: "qualification.png" }
    },
    {
      text: "Salary",
      img: { src: "salary.png" }
    }
  ]
}) }}
