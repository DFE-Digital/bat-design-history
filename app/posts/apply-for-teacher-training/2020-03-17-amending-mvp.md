---
title: The troubles with amending (or editing) your application
description: Complexities we faced when building an MVP version of this feature
date: 2020-03-17
related:
  items:
    - text: Technical options for building full design
      href: https://docs.google.com/document/d/1p5xJWMhz8AGJwnRlVaAStfoyGoxTHsbJZOI2RIY5LXw/
    - text: Technical options Trello ticket
      href: https://trello.com/c/aaPDz9Cg/1144-analysis-amend-app
    - text: Fully fix amending Trello ticket
      href: https://trello.com/c/3qmtfBc6/555-update-amend-application-feature-to-match-design-%E2%9A%BD%EF%B8%8F
    - text: MVP fixes Trello ticket
      href: https://trello.com/c/AEbgIFGH/1172-mvp-fixes-for-shipping-edit-application
---
Candidates should be able to edit an application within 5 working days of submitting. Currently candidates can only do this via an email to support. Since December we’ve had only 1 request to edit an application – we needed to change a course choice.

## The original design

[The original design](/apply-for-teacher-training/amend-withdraw) had the following flow:

* start editing an application
* make changes
* review changes (and run validations)
* submit edits before the end of the 5 day window

This was too complex to build quickly because:

* we needed to track two separate applications
* update references in parallel
* work history and qualifications are complex in themselves

[Technical options for building full design](https://docs.google.com/document/d/1p5xJWMhz8AGJwnRlVaAStfoyGoxTHsbJZOI2RIY5LXw/)

## The MVP

So we built an MVP behind a feature flag, the MVP (screenshots shown below) had this flow:

* go to edit an application
* make a change (change is persisted and automatically sent to provider at the end of the edit window)
* return to dashboard (no review step)

There were some usability issues with the MVP that we thought we could tweak to allow us to enable the feature.

But we found one significant problem – validation. At no point would we validate that the state a candidate left their edited application in was valid. Consider someone accidentally removing their entire work history, blanking their personal statement, or removing their only course choice. This introduces an unacceptable risk for the candidate.

Introducing these validations for the MVP edit application screen is also too complex to build. It’d make more sense to build the original design.

We also considered but rejected:

* telling candidates when their application edits meant their application could not be submitted, probably by email
* not submitting an application until a candidate corrected their application (too risky for candidate)
* submitting the original in the above scenario (not expected by candidate)

## What next?

We haven’t seen a significant user need for editing applications after submission. We do not want to build a large and complex feature if it is not needed.

While support queries have been minimal, there is inertia in our process – the candidate must decide to email us separately and describe to us what they want to change.

We plan to:

* make submitting a change request easier by using a form
* use that form to capture what should be changed
* evolve that form over time to automate much of the process
* improve tooling for support users to make edits

If after changing the request process to a form a new and significant user need arises, one that is too large for support, we will consider building self-serve editing for the most commonly requested edits – eg course choices, or re-evaluate our decision not to build the original design.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Editing your application",
      img: { src: "01-editing-your-application.png" }
    }, {
      text: "Edit application",
      img: { src: "02-edit-application.png" }
    }]
}) }}
