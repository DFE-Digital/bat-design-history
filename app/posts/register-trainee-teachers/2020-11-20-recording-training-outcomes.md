---
title: Recording training outcomes
description: An early attempt at recording training outcomes
date: 2020-11-20
---

When recording a training outcome we need to know if trainees have met the standards to be awarded a qualification. There is also a need to record unsuccessful outcomes.

In the next round of research we hoped to validate our current understanding around collecting this information which included the following assumptions:

* our users are able to specify a date for when the trainee has either met the standards or for when they have not met the standards
* a common workflow for our users is to withdraw some trainees in the same process of recording a ‘standards not met’ outcome
* when a trainee is recorded as not meeting the standards for QTS, some will stay on the programme to try again
* we need to display dates from previous QTS outcomes against a trainee record
* our users understand the options we have provided for reasons why a trainee isn’t being recommended for QTS and the options cover all potential scenarios

## There are multiple outcomes to consider

Early version of this flow included a button labelled 'Recommend for QTS'. We were concerned that this was too specific and didn't reflect other possible outcomes such as failure or awards other than QTS.

As a result we’ve decided to include a more generic button label, 'Record outcome’.

## Why are trainees not being recommended for QTS?

We are trying to understand more around the requirements for recording the reasons why trainees are not being recommended for QTS.

We had initially placed reasons for failure within the withdrawal flow yet we began wondering what would happen to a trainee that failed to meet the standards but did not withdraw from the course. 

In this iteration of the prototype we have included the following options:

* did not pass the assessment
* did not pass the exams
* for another reason (free text field)

We anticipate these reasons will change based on insights from future research.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Trainee details",
    img: { src: "Screenshot_2020-11-30 Leslie Jacobson - Register trainee teachers - GOV UK.png" }
  }, {
    text: "Have they met the standards for QTS?",
    img: { src: "Screenshot_2020-11-30 Have the met the standards - Register trainee teachers - GOV UK.png" }
  }, {
    text: "When did they meet the standards?",
    img: { src: "Screenshot_2020-11-30 When did they meet the standards - Register trainee teachers - GOV UK.png" }
  }, {
    text: "Check outcome details - standards met",
    caption: "If the user has met the standards.",
    img: { src: "Screenshot_2020-11-30 Standards met - Check outcome details - Register trainee teachers - GOV UK.png" }
  }, {
    text: "Trainee recommended for QTS",
    img: { src: "Screenshot_2020-11-30 Trainee recommended for QTS - Register trainee teachers - GOV UK.png" }
  }, {  
    text: "When should they be recorded as having not met the standards?",
    caption: "If the user has not met the standards.",
    img: { src: "Screenshot_2020-11-30 When should they be recorded as having not met the standards - Register trainee teachers - GOV UK.png" }
  }, {
    text: "Why are they not being recommended for QTS?",
    img: { src: "Screenshot_2020-11-30 Add a reason for not passing their assessment - Register trainee teachers - GOV UK.png" }
  }, {
    text: "Will the trainee stay on the programme?",
    img: { src: "Screenshot_2020-11-30 Will the trainee stay on the programme - Register trainee teachers - GOV UK.png" }
  }, {
    text: "Check outcome details - standards not met and trainee is staying on the programme",
    img: { src: "Screenshot_2020-11-30 Standards not met - Check outcome details - Register trainee teachers - GOV UK.png" }
  }, {
    text: "Check outcome details - standards not met and trainee withdrawing",
    img: { src: "Screenshot_2020-11-30 Standards not met and withdrawing -  Check outcome details - Register trainee teachers - GOV UK.png" }
  }, {
    text: "Trainee details - standards not met",
    img: { src: "Screenshot_2020-11-30 Leslie Jacobson - Standards not met - Register trainee teachers - GOV UK.png" }
  }, {
    text: "Trainee details - standards not met and trainee withdrawing",
    img: { src: "Screenshot_2020-11-30 Leslie Jacobson - Withdrawn - Register trainee teachers - GOV UK.png" }
  }]
}) }}
