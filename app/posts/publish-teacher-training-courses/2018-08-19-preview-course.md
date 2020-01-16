---
title: Preview course
description: Different preview states depending on course type and state.
---
Screenshots showing different preview states based on type and completeness of course.

The [prototype preview logic](https://github.com/fofr/manage-courses-prototype/blob/master/app/views/preview.html) may also help when building this.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Preview of fee paying course with all fields",
      img: { src: "preview-of-fee-paying-course-with-all-fields.png" }
    },
    {
      text: "Preview of fee paying course with only required fields",
      img: { src: "preview-of-fee-paying-course-with-only-required-fields.png" }
    },
    {
      text: "Preview of empty fee paying course",
      img: { src: "preview-of-empty-fee-paying-course.png" }
    },
    {
      text: "Preview of salaried course with all fields",
      img: { src: "preview-of-salaried-course-with-all-fields.png" }
    },
    {
      text: "Preview of salaried course with only required fields",
      img: { src: "preview-of-salaried-course-with-only-required-fields.png" }
    },
    {
      text: "Preview of empty salaried course",
      img: { src: "preview-of-empty-salaried-course.png" }
    }
  ]
}) }}
