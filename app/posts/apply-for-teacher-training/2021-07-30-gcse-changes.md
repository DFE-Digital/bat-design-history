---
title: Changes to the GCSE questions and guidance
description: Helping candidates apply for courses which accept pending GCSEs or equivalency tests
date: 2021-07-30
---

{% from "screenshots/macro.njk" import appScreenshots with context %}


One of the reasons for rejections the candidates receive is that they do not have the right qualifications in English or maths (plus science for Primary course). This is specified as GCSE grade 4 (C&#8203;) or above, or equivalent, in the national criteria for initial teacher training.

If candidates do not have this qualification, they can still apply, as some providers will:

*  accept candidates who are current studying for a GCSE (and expect to receive it before they start the course)
* offer an ‘equivalency test’ which lets a candidate demonstrate they meet the standard, without having a formal qualification

We [made some recent changes](/publish-teacher-training-courses/pending-gcses-equivalency-tests/) to the Publish service to better collect this information from providers. Because of these, we are now able to warn candidates if they are applying for a course which is not flexible enough to meet their circumstances. We hope that this will reduce the rates of rejection, as candidates will be able to change their course choices before they apply.

In order to be able to display this contextual guidance, we also needed to make some changes to how the GCSEs are collected, so that we know for sure whether someone is currently studying for a GCSE or needs to take an equivalency test, as this is currently ambiguous.

### Changes to GCSE flow

The previous design asked to "Add [subject] GCSE grade 4 (C&#8203;) or above, or equivalent”, with an option for "I do not have this qualification yet":

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Previous initial GCSE question design",
    img: {
      src: "previous-design.png"
    }
  }]
}) }}

This led to some ambiguity as to what candidates should do if they had a GCSE at grade D (3) or below, either adding that as a GCSE or selecting the last option.

To resolve this, we simplified the question, and updated the flow to catch people with GCSEs below the requirement later:

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "New GCSE section flow",
    img: {
      src: "GCSE-flow.png"
    }
  }]
}) }}

The reworded question removed the reference to the required grade, and removed the revealed question if answering “I don’t have a [subject] qualification yet”:

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "New initial question",
    img: {
      src: "new-first-question.png"
    }
  }]
}) }}

If candidates do not have a qualification, they are now explicitly asked if they are currently studying for one:

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Currently studying question",
    img: {
      src: "currently-studying.png"
    }
  }]
}) }}

If candidates do have a GCSE, but the grade is below the requirements, they are explicitly asked if they are re-taking the GCSE:

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Currently re-taking question",
    img: {
      src: "currently-retaking.png"
    }
  }]
}) }}

If candidates are not currently studying for a qualification, and do not already have one, they are shown a page reminding them of the requirements. This also contains some guidance about the possibility of taking an equivalency test, and offers candidates the opportunity to give any other evidence that they meet the subject standard.

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Other evidence question",
    img: {
      src: "other-evidence.png"
    }
  }]
}) }}

### Guidance on the Course choices review page

If a candidates does not have a GCSE qualification of the required standard, the course choice summary boxes on the review page contains an extra row to summarise whether that course will accept pending GCSEs (if the candidate is currently studying for one) or will accept equivalency tests.

If they do not do this, and the candidate needs this, a warning is shown:

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Course does not accept pending GCSEs",
    img: {
      src: "no-pending-gcses.png"
    }
  },
  {
    text: "Course does not accept equivalency tests",
    img: {
      src: "no-equivalency-tests.png"
    }
  }]
}) }}




