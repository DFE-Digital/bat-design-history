---
title: Replace both referees
description: Let a candidate add 2 new referees
date: 2020-02-05
---
A follow up to the [design for adding a single new referee](/apply-for-teacher-training/add-a-new-referee).

Key differences are:
- after adding the first referee the candidate is taken to a form to add a second referee
- these forms refer to the first and second referees
- the review summary shows both of the newly added referees
- titles and labels refer to "2" or "each referee" or "referees"

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "You need to add 2 new referees",
      img: { src: "01-you-need-to-add-2-new-referees.png" }
    }, {
      text: "Add your first new referee",
      img: { src: "02-add-your-first-new-referee.png" }
    }, {
      text: "Add your second new referee",
      img: { src: "03-add-your-second-new-referee.png" }
    }, {
      text: "Check each referee’s details",
      img: { src: "04-check-each-referees-details.png" }
    }, {
      text: "Application dashboard after adding referees",
      img: { src: "05-application-dashboard-after-adding-referees.png" }
    }, {
      text: "Application dashboard with warning",
      img: { src: "06-application-dashboard-with-warning.png" }
    }]
}) }}
