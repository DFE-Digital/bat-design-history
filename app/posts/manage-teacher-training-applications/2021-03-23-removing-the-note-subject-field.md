---
title: Removing the note subject field
description: Why we decided to remove the note subject field
date: 2021-03-23
---

A note is made up of a subject and message. The reason for subject was so that it could [be squeezed into the application list](/manage-teacher-training-applications/sorting-by-rbd-date/#sorting-by-last-changed-default).

But as we [no longer show the note on the application list](manage-teacher-training-applications/help-users-know-what-needs-doing-and-whats-changed/) we decided to remove it so that it’s easier to create a note.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Add a note",
    img: {
      src: "add-note.png"
    }
  }, {
    text: "Notes page with success message",
    img: {
      src: "notes-page-with-success.png"
    }
  }]
}) }}
