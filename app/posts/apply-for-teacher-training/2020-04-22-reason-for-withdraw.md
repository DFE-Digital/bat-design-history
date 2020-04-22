---
title: Reason for withdrawing
description: Asking candidates to tell us why they decided to withdraw their application.
date: 2020-04-22
---

Candidates can withdraw from a course choice at any time during the application process. This is not the ideal outcome, especially if this means a candidate no longer wants to teach, but also because something may have gone wrong. We’d like to better understand the reasons why candidates choose this option.

## User needs

**As the Department for Education**
We need to understand why candidates withdraw from courses
So that we can improve the service and amend policies

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    id: "withdraw",
    text: "Are you sure you want to withdraw this course choice?"
  }, {
    id: "withdraw-confirmation",
    text: "Course choice withdrawn",
    caption: "By showing a confirmation page after this action, we can then ask a candidate to tell us their reason for withdrawing. We make it clear that any feedback will only be used by the Department for Education. We also take this opportunity to ask if they would like to participate in user research."
  }, {
    id: "withdraw-confirmation-questions",
    text: "Course choice withdrawn (with conditional radio options shown)"
  }]
}) }}
