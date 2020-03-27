---
title: Applying again (Apply 2)
description: Providing an option for unsuccessful applicants to apply again.
date: 2020-03-16
related:
  items:
    - text: 'Prototype PR'
      href: https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training-prototype/pull/363
tags:
- AN022
---

If a candidate is not offered an interview by any of their initial 3 choices (or chooses not to accept an offer or withdraws their application), they can move to a secondary application phase. UCAS calls this ‘Apply 2’.

During this phase, a candidate can make an unlimited number of applications, but this time, only one course choice is allowed. If the candidate is again unsuccessful (or chooses not to accept an offer or withdraws) they can keep applying until they do accept an offer, or until the application cycle for the academic year closes.

### Reasons why a candidate might need to apply again

* Withdrew choice(s)
* Declined offer(s)
* Declined by default
* Rejected by provider(s)
* Rejected by default

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## User journey

{% from "figure/macro.njk" import appFigure with context %}
{{ appFigure({
  image: {
    file: "flow.svg"
  }
}) }}

### A note on journeys from Find

It might be possible for a candidate to apply to a course from Find when they are eligible for this second phase, but haven’t opted in to it yet. This scenario (and others) are something we may want to consider later.

## Design changes

- Course choices becomes Course choice
- 3 choices becomes 1 choice in guidance
- The ‘add another course’ flow doesn’t happen
- Add an apply again page and link to it in a banner on the dashboard
- Show a ‘Your application was copied’ banner when a new application is made
- Tweak the title of the application page to be "Your new application"
- Show previous applications in the right column
- Show reference statuses to indicate if a reference has been received or not
- Make received references read only (you can delete but not change any other aspect)

[Our review of the service](/apply-for-teacher-training/changes-for-apply-2) highlighted further changes for the ‘Apply again’ context.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Apply again banner",
      img: { src: "01-apply-again-banner.png" }
    }, {
      text: "Do you want to apply again?",
      img: { src: "02-apply-again-page.png" }
    }, {
      text: "Your new application (application copied)",
      img: { src: "03-application-copied.png" }
    }, {
      text: "With one previous application",
      img: { src: "04-with-one-previous-application.png" }
    }, {
      text: "A single course choice",
      img: { src: "05-a-single-course-choice.png" }
    }, {
      text: "A single course added",
      img: { src: "06-a-single-course-added.png" }
    }, {
      text: "A single course in review",
      img: { src: "07-a-single-course-in-review.png" }
    }, {
      text: "References, 1 received and 1 replaced",
      img: { src: "08-references-received-or-replaced.png" }
    }]
}) }}
