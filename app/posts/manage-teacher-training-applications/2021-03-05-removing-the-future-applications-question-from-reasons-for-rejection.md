---
title: Removing the ‘future applications’ question from reasons for rejection
description: Why we decided to stop asking users whether or not they want to receive future applications from the candidate
date: 2021-03-05
---

When a user rejects an application, they have to say whether or not they want to receive future applications from the candidate.

We ask this question so that:

- training providers do not receive further applications from candidates they’re never going to give a place to
- candidates do not waste time applying again to a provider who is not interested in them

But we know that 45% of rejections give feedback that says, for example, ‘Wren Academy would not be interested in future applications from you.’

This message is demoralising and confusing to candidates.  For example, some candidates felt that:

- other training providers may not want to receive applications from them either, making it less likely they’ll apply again
- the time scales were vague - for example, they wondered whether the provider would be interested in applications in the next academic year
- the statement was confusing if the rest of the feedback did not back it up

Even when the training provider said they would be interested in future applications, some candidates felt that the statement was disingenuous or an empty platitude.

For now, we’ve decided it’s best to just remove the question. We’ll better address these needs in the future.

## Effect of removing the ‘future applications’ question

Removing the question can cause the ‘other advice’ question to appear on its own which makes the h1 redundant. We’ve changed the design so that the legend and the h1 are combined if this happens when:

- rejecting an application manually
- giving feedback after an application is rejected automatically
- withdrawing an offer

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "‘Other reasons for rejection’ page when a reason has not been selected on the previous page",
    img: {
      src: "other-reasons--01.png"
    }
  }, {
    text: "‘Other reasons for rejection’ page when a reason has been selected on the previous page",
    img: {
      src: "other-reasons--02.png"
    }
  }]
}) }}
