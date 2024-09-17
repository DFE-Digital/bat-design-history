---
title: Simplifying the feedback form
description: Removing checkboxes and making written feedback required.
date: 2021-01-08
tags:
  - user feedback
screenshots:
  items:
    - text: Feedback form
      caption: The updated feedback form. The textarea label is also the `<h1>` title for the page.
      src: form.png
    - text: Feedback form showing error messages
      caption: Error messages shown if neither of the questions have been answered.
      src: error-messages.png
related:
  items:
    - text: Prompting for feedback throughout the application journey
      href: /apply-for-teacher-training/feedback-component/
      description: Previous post outlining initial design
---

An accessibility audit highlighted that our feedback form did not indicate that two of the questions are optional: “What issues are there in this section?” and “Do you have any other feedback about this section?”.

Whilst we could fix this adding the word "(optional)" to the legend and label, this would be a bit odd as it doesn’t really make sense for a user to not tick any of the checkboxes or provide any written feedback.

Options considered included:

- requiring written feedback only if none of the checkboxes were selected
- adding a fourth "Another issue" checkbox, and then requiring at least one checkbox to be selected
- moving the textarea to be conditionally-revealed when each checkbox was selected, allowing users to optionally add further details

However, upon reviewing the feedback submitted so far, only 2 out of the 12 feedback items submitted offered no written feedback, and these both simply checked the “I don’t understand this section” checkbox. On its own, this is not super useful – although it might be more useful if the volume of feedback was much higher.

Instead, it makes more sense to simplify the form by removing the checkboxes, and having only a single required free text feedback field. The label for this can then also become the `<h1>` tag for the page.

This could be reviewed again in future if the volume of the feedback increases to such an extent that the free text fields become too time-consuming to analyse.
