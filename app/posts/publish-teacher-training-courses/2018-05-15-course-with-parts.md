---
title: Course with parts
description: Experimental designs looking at breaking course fields onto different pages, based on a theme.
---
Experimental designs looking at breaking course fields onto different pages, based on a theme.

Try listing courses like search.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Courses",
      img: { src: "courses.png" }
    },
    {
      text: "Course",
      img: { src: "course.png" }
    },
    {
      text: "Course subject and description",
      img: { src: "course-subject-and-description.png" }
    },
    {
      text: "About this course",
      img: { src: "about-this-course.png" }
    },
    {
      text: "Requirements and qualifications",
      img: { src: "requirements-and-qualifications.png" }
    },
    {
      text: "School placements",
      img: { src: "school-placements.png" }
    },
    {
      text: "Application codes",
      img: { src: "application-codes.png" }
    }
  ]
}) }}
