---
title: Iteration – 24 August
description: Split homepage into tasks, Step 1 and Step 2
---
The [previous iteration](/publish-teacher-training-courses/iteration-aug-23) which placed a new emphasis on ‘About your organisation’ on the homepage tested well.

In this design we:

* made the steps more explicit
* added more detail about what the user needs to do
* included a prompt about copying courses

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  hideContents: true,
  items: [
    {
      text: "Organisation",
      img: { src: "organisation.png" }
    }
  ]
}) }}
