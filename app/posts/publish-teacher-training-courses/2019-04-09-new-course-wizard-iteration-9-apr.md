---
title: New course wizard – Iteration 9 April
description: Bring the wizard in line with changes made to the Google Form.
---
Bring the wizard in line with changes made to the Google Form:

* split UCAS application requirements over two pages
* remove mention of ‘publishing’ from application open screen
* ask about apprenticeships for Universities and SCITTs

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Is this a teaching apprenticeship?" },
    { text: "When will applications open?" },
    { text: "Candidates with pending GCSEs" },
    { text: "Tests for candidates without GCSE requirements" },
    { text: "Check your answers before confirming" },
    { text: "Course details", id: "course-details" }
  ]
}) }}
