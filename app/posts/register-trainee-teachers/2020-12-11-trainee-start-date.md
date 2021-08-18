---
title: Collecting trainee start date
description: Adding a second date in addition to the course start date
date: 2020-12-01
---

Until now we haven’t collected a trainee’s start date because we hoped that the course start date would be sufficient.

Course start dates from Publish are only given to the nearest month - but we need an accurate start date for the trainee themself for funding purposes. Trainees may also start early or late, so it’s important to capture the actual date distinctly from the course start date.

An assumption in this first design is that we need to support registering trainees for TRN who don’t have a start date. For example a provider registering their trainees in August, a weeks before the trainees actually start. This is an interesting design challenge as we’d then need some later process to collect the date once trainees start.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  title: "Designs",
  items: [{
    text: "Start date question",
    src: "start-date-question.png"
  }, {
    text: "Start date confirmation",
    src: "start-date-confirmation.png"
  }, {
    text: "Start date question expanded",
    src: "start-date-question-expanded.png"
  }]
}) }}

Once trainees are submitted for TRN, we will prevent them being submitted for QTS until a start date is added.

![Trainee record page](trainee-record-page.png)

## Future work

If we support records without a trainee start date, we’ll probably need more prominent reminders to users to provide this - otherwise we risk providers getting to the end of the course and not being able to recommend for QTS because this information is missing.
