---
title: Iteration 26 June 2018
description: Separate courses by accrediting provider. Provide explicit fields for each course offered.
---
Following [user research with providers](/publish-teacher-training-courses/school-direct-view), it was found that the “About this course” field was confusing when it could potentially apply to different course variants.

Where there are different accrediting providers, those providers have a significant impact on the course and how it should be presented to applicants. Courses with different accrediting providers must not be folded into each other.

We set up 6 unmoderated research sessions with providers where we asked them to complete a single course listing. One user completed this task before we made some [small iterations](/publish-teacher-training-courses/iteration-june-28) to this design: [completed course listing](https://docs.google.com/document/d/19zLJb1fplLHmrxZ2VlPsWCfdhqfK0DuoyKjCog8eeAE/edit?usp=sharing)

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
      text: "PGCE with QTS course option",
      img: { src: "pgce-with-qts-course-option.png" },
      caption: "In large text boxes it is not clear what formatting, if any, a user can put in. We’ve seen users assume that paragraphs and lists are accepted."
    },
    {
      text: "QTS with salary course option",
      img: { src: "qts-with-salary-course-option.png" }
    },
    {
      text: "About your organisation",
      img: { src: "about-your-organisation.png" }
    },
    {
      text: "Requirements and eligibility",
      img: { src: "requirements-and-eligibility.png" }
    },
    {
      text: "Preview",
      img: { src: "preview.png" }
    }
  ]
}) }}
