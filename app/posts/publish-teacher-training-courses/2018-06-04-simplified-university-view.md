---
title: A university’s view
description: Universities are the simplest provider. There are no schools to apply to and no course folding.
tags:
---

Universities are the simplest provider. There are no schools to apply to and [no course folding](/publish-teacher-training/imported-from-ucas).

* remove schools link in header
* hide accrediting provider
* don’t show any of the qualification or salary study option fields

We showed this to universities at the [UCET](http://ucet.ac.uk/) June meetup. Each table was given a printout of the screens below, which some commented on.

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
      text: "Course details from ucas",
      img: { src: "course-details-from-ucas.png" }
    },
    {
      text: "About this course",
      img: { src: "about-this-course.png" }
    },
    {
      text: "About this training provider",
      img: { src: "about-this-training-provider.png" }
    },
    {
      text: "Course requirements",
      img: { src: "course-requirements.png" }
    },
    {
      text: "Organisation",
      img: { src: "organisation.png" }
    }
  ]
}) }}
