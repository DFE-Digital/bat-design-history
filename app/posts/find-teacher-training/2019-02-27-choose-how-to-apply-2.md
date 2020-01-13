---
title: Choose how to apply – Iteration and research
description: An updated journey into UCAS or new Apply service, tested with users.
tags:
---

Following on from the [initial design](/find-teacher-training/choose-how-to-apply).

## Design changes

In this version we:

*   added more context to the page with a choice
*   added a ‘learn more’ disclosure to the choice page
*   expanded the journey with further Apply pages and emails

## User research

In research users started on the Find prototype and found a course they wanted to apply to. The first time they tried to apply they saw the ‘Apply with choice’ design. After stepping through a stubbed DfE Apply journey – showing account creation, sign up emails, screenshots of the application process and a submitted screen, we returned to Find to apply to another course. The next course they found showed only the option of applying through UCAS.

We tested this with 14 users.

[Lookback](https://lookback.io/dfe-digital/apply-tt-ua)

### Key findings

For people who’ve never applied to Teacher Training, when given a choice about two application services, no users were turned away by that choice. All of them would continue to apply.

For people who applied using DFE Apply, applying again through UCAS represents a pain point. We hypothesise that by sending applicants wishing to apply to many courses directly to UCAS we can reduce the risk of that pain point.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Prototype flow and findings",
      img: { src: "prototype-flow-and-findings.png" },
      caption: '<p class="govuk-body"><a href="https://docs.google.com/drawings/d/12wrGFPlEGNkG1U6Qlkx1OCHLBtGochNTBS9jMhPV7Fs/edit">Google drawing</a></p>'
    },
    {
      text: "User journey",
      img: { src: "apply-flow.svg" },
      caption: '<p class="govuk-body">
      <a href="https://docs.google.com/drawings/d/1kSIYsL1JaMADJkDT1gavtsasHTCOhZRbHMY9M4Oc9nE/edit?usp=sharing">Google drawing</a>
    </p>'
    },
    { text: "Apply for this course (with choice)", img: { src: "apply-for-this-course-(with-choice).png" } },
    { text: "Apply for this course (without choice)", img: { src: "apply-for-this-course-(without-choice).png" } },
    { text: "Apply start page", img: { src: "apply-start-page.png" } },
    { text: "Create account", img: { src: "create-account.png" } },
    { text: "Sign up email", img: { src: "sign-up-email.png" } },
    { text: "Application complete", img: { src: "application-complete.png" } },
    { text: "Application submitted email", img: { src: "application-submitted-email.png" } },
    { text: "Application rejected email", img: { src: "application-rejected-email.png" } }
  ]
}) }}
