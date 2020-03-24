---
title: Validating on publish
description: How validation works when a user tries to publish without the required fields.
date: 2018-07-31
---

Users need to save without all required fields being present so they’re not obstructed when completing their course listing. We’ve observed users filling them in piecemeal. For example, they may require information from an accrediting provider, or if they’re copying content from their previous UCAS listings or course website – they may not have existing text for one of the new fields, a field they plan to come back to. Leaving a field blank is preferable and less error prone than forcing them to enter ‘TBC’ or something similar.

When publishing we need to validate that all the required parts are present. When fields aren’t present we need to prompt users to go back to those fields and complete them.

* * *

[Trello story](https://trello.com/c/jB5C2SWM/47-design-validation-at-time-of-publishing), part of the “[Simple publish](https://trello.com/c/gczKVoh3/51-simple-publish-action-and-validation-word-counts-and-mandatory-fields)” story map.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Validating a course on publish",
    img: { src: "validating-a-course-on-publish.png" },
    caption: "A user has attempted to publish an empty course.

This page shows all the errors a user could see at this stage for this type of course. If the course was salaried then the salary field is required in place of the fee field.

Optional fields do not error if they are not present.

Clicking an error takes you to the field that’s missing. Clicking “Give details about this course” takes you to the “About this course” section on the “About this course” page."
  }, {
    text: "Validating about this course",
    img: { src: "validating-about-this-course.png" },
    caption: "An example of the ”About this course” page once a user navigates to it after attempting to publish."
  }, {
    text: "Validating ‘About your organisation’ on publish",
    img: { src: "validating-about-your-organisation-on-publish.png" }
  }]
}) }}
