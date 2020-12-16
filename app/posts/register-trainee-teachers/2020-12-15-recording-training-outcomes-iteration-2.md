---
title: Recording training outcomes (iteration 2)
description: Removing the option for failure when recording training outcomes
date: 2020-12-15
---

In the [previous iteration of recording training outcomes](/register-trainee-teachers/recording-training-outcomes/) we made the assumption that our users needed to record outcomes other than “pass”. Furthermore our users might then withdraw a trainee after recording that the trainee had “failed” (did not meet the QTS standards).

User research has taught us that our understanding did not reflect real user behaviour. Recording a “failure” is not something users typically do.

We’ll now remove the option for “failure” when recording trainee outcomes.

## What we know now about the QTS process and user behavior

DTTP users do not currently record any assessment outcomes other than “passed” before recommending trainees for QTS.

Withdrawal is not the default next step in the process for a trainee whose assessment outcome has been recorded as a “failure”.

What’s more, failure is actually a rare outcome. 

A more likely scenario is for the trainee to either be withdrawn if they're unlikely to pass, or to have their course extended if they're likely to pass but need more time.

## What our users said

> “We’d wait until they passed before touching their DTTP record.”

> “We’ve never had anybody fail. Something would be implemented before that stage. [There’s a] remediation stage - a 3 week period - to make sure they pass. Or we’d extend the course - in which case, I would change the [programme end] date.”

> “When someone didn’t meet the baseline standards, because she hadn’t been in school, we extended the programme. We didn’t record her as “failed” - we just deferred the record so that she fell into the next years’ cohort.”

> “We would usually withdraw someone, rather than say that they failed the programme.”

> “[Failing] would be really rare, normally we would withdraw them before this point. If the trainee was not on track to pass, “they’d be informed... it has to be ratified by our executive boards -there’s lots of paperwork before we get to this point. They would also possibly be given an extension, assuming they don’t appeal the decision We’d need to confirm that here [on DTTP/ Register]. This would all happen on a case by case basis. We would be doing additional work with them, adapting the course to suit them - it could be happening in the third month of the year. We wouldn’t offer an extension to someone who isn’t going to get there regardless.”

## Future work

Now that we know a potential scenario is to withdraw a trainee who’s likely to fail, we need to revise the reasons for withdrawal - ensuring there’s an option that covers preempting failure.

We also need to consider how we’ll accommodate trainees who are not on track to meet the QTS standards and need an extension.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Trainee details - TRN recieved",
    img: { src: "Clay Stracke - TRN recieved.png" }
  }, {
    text: "When did they meet the QTS standards?",
    img: { src: "When did they meet the QTS standards.png" }
  }, {
    text: "Check QTS details",
    img: { src: "Check QTS details.png" }
  }, {
    text: "Trainee recommended for QTS",
    img: { src: "Trainee recommended for QTS.png" }
  }, {  
    text: "Trainee details - Recommended for QTS ",
    img: { src: "Clay Stracke - Recommended for QTS.png" }
  }]
}) }}
