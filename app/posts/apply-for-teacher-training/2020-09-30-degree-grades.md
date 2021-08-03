---
title: Asking for degree grades
description: Making it easier to enter predicted and international degree grades.
date: 2020-09-30
---

Having introduced [structured fields for UK degrees](/apply-for-teacher-training/structured-data-for-degrees/) and allowing candidates to enter [international degrees](/apply-for-teacher-training/international-candidates/#international-qualifications), we reviewed the degree section and found some issues with how we ask for grades.

## Predicted grades

Currently we ask candidates to provide a degree grade. If they have not completed their degree yet, we ask for a predicted grade:

![Screenshot of ‘What grade is your degree?’ question.](what-grade-is-your-uk-degree.png "This option appears after an ‘or’ divider, and with a list of grades above it. Candidates might infer from this that not having a degree yet is considered a lesser option.")

* * *

We’re effectively asking 2 different questions at the same time:

* Have you completed your degree?
* What grade did you get for your degree?

Furthermore, if you want to give a predicted grade, asking for a free text answer means candidates cannot use the structured answers we provide.

### Hypothesis

If we ask if you have completed your degree in a separate question
Then we can reassure candidates that not having a grade for their degree yet is perfectly okay.

If we ask the 2 different questions on 2 separate pages
Then any guidance relevant to the particular question will be more visible

If we ask ‘What grade did you get?’ in a separate section
Then candidates with predicted grades can answer this question using structured data.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  headingLevel: 3,
  items: [{
    id: "have-you-completed-your-degree",
    text: "Have you completed your degree?"
  }, {
    id: "grade-uk-completed",
    text: "What grade did you get?",
    caption: "Asking for a grade if candidate has completed a UK undergraduate degree."
  }, {
    id: "grade-uk-predicted",
    text: "What grade do you think you’ll get?",
    caption: "Asking for a predicted grade if candidate has not completed a UK undergraduate degree."
  }]
}) }}

## International grades

When asking for a grade for an international degree, we followed [the pattern used for UK degrees](/apply-for-teacher-training/structured-data-for-degrees/#what-grade-is-your-degree-baccalaureates).

However, as we do not provide structured answers for international degrees, this pattern does not work, meaning we effectively put the most useful option under ‘Other’:

![Screenshot of ‘What grade is your international degree?’ question.](what-grade-is-your-international-degree.png)

### Hypothesis

If we ask international candidates if their degree did or will give a grade (‘Yes’, ‘No’ or ‘I do not know), and show examples of grades before showing these options
Then candidates will be able to better understand the question and provide the right information.

{{ appScreenshots({
  headingLevel: 3,
  items: [{
    id: "grade-international-completed",
    text: "Did your degree give a grade?",
    caption: "Asking for grade if candidate has completed a UK undergraduate degree."
  }, {
    id: "grade-international-predicted",
    text: "Will your degree give a grade?",
    caption: "Asking for a predicted grade if candidate has not completed international degree."
  }]
}) }}

## Reviewing answers

With the above changes in place, we can explicitly play back whether a candidate has completed their degree, and whether they have given a predicted grade.

![Screenshot of degree review answers page.](review-answers.png)
