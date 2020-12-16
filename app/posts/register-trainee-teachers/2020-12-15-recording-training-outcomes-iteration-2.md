---
title: Recording training outcomes (iteration 2)
description: Removing the option for failure when recording training outcomes
date: 2020-12-15
---

In the [previous iteration of recording training outcomes](/register-trainee-teachers/recording-training-outcomes/) we made the assumption that our users sometimes withdraw trainees when recording that they did not meet the QTS standards.

User research has taught us that our understanding did not reflect real user behaviour. Recording a “failure outcome” is not something users typically do. 

We’ll now remove the option for “failure” when recording trainee outcomes.

## What we know now about the QTS process and user behavior

DTTP users do not currently record any assessment outcomes other than “passed” before recommending trainees for QTS.

Withdrawal is not the default next step in the process for a trainee whose assessment outcome has been recorded as a “failure”.

What’s more, failure is actually a rare outcome. 

A more likely scenario is for the trainee to either be withdrawn if they're unlikely to pass, or have their course extended if they're likely to pass but need more time. 

## What our users said

> “We’d wait until they passed before touching DTTP record.”

> “We’ve never had anybody fail. Something would be implemented before that stage. [There’s a] remediation stage - a 3 week period to make sure they pass. Or we’d extend the course - in which case, I would change the [programme end] date.”

> “When someone hadn’t met the baseline standards, because she hadn’t been in school, we’d extend the programme - we didn’t record her as failed, we just deferred the record so that she fell into the next years’ cohort.”

> “We would usually withdraw rather than say that they failed the programme.”

> “This would be really rare, normally would withdraw before this point. They’d be informed of this process, it has to be ratified by executive boards, lots of paperwork before this point. Would also be possibly given an extension, assuming no appeals, then would need to confirm that here. This would all happen on a case by case basis, would be doing additional work with them, adapting the course to suit them, could be happening in the third month of the year. Wouldn’t offer an extension to someone who isn’t going to get there regardless.”

## Future work

Now that we know a potential scenario is to withdraw a trainee who’s likely to fail, we need to revise the reasons for withdrawal - ensuring there’s an option  that covers preempting failure.

We also need to consider how we’ll accommodate trainees who are not on track to meet the QTS standards on time and need an extension.

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
