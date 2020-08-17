---
title: Prompting users to give feedback on automatically rejected applications
description: Let candidates know why their application was automatically rejected so they don’t lose confidence unnecessarily
date: 2020-08-13
---

Currently, if providers fail to respond to applications before the ‘reject by default’ date, candidates won’t get any feedback and providers have a way of not giving feedback.

This may result in candidates losing confidence and choosing not to apply again.

If we prompt providers to give feedback to candidates then candidates will be able to make an informed decision on whether to apply again or not.

Related: [Prompting providers to provide feedback on application list page](/manage-teacher-training-applications/help-users-know-what-needs-doing-and-whats-changed/#application-list-ordered-by-priority)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Feedback prompt",
    img: {
      src: "feedback-prompt.png"
    }
  }]
}) }}
