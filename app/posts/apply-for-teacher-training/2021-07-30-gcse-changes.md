---
title: Changes to the GCSE questions and guidance
description: Helping candidates apply for courses which accept pending GCSEs or equivalency tests
date: 2021-07-30
---

{% from "screenshots/macro.njk" import appScreenshots with context %}


One of the reasons why providers reject candidates is because they do not have the right GCSE grades. Candidates need grade 4 (C&#8203;) or above, or equivalent, in English and maths (and science, for Primary courses).

If candidates do not have these qualifications, they can still apply, as some providers will:

*  accept candidates who are currently studying for a GCSE (and expect to receive it before they start the course)
* offer an ‘equivalency test’ which lets a candidate show they meet the standard, without having a formal qualification

We [made some recent changes](/publish-teacher-training-courses/pending-gcses-equivalency-tests/) to the Publish service to better collect this information from providers. As a result, we're now able to warn candidates if they've chosen a course they do not meet the requirements for. We hope that this will reduce the rates of rejection, as candidates will be able to change their course choices before they apply.

To be able to show this guidance, we needed to make some changes to how we collect information about GCSEs. That way we'd know if someone is currently studying for a GCSE, or if they need to take an equivalency test.

### Changes to GCSE flow

The previous design asked candidates to "Add [subject] GCSE grade 4 (C&#8203;) or above, or equivalent”, with an option for "I do not have this qualification yet":

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Previous initial GCSE question design",
    img: {
      src: "previous-design.png"
    }
  }]
}) }}

It was unclear what candidates should do if they had a GCSE at grade 3 (D) or below - if they should add that GCSE, or say they do not have the qualification yet.

To resolve this, we simplified the question. We also updated the flow to catch people with GCSEs below the requirement later:

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "New GCSE section flow",
    img: {
      src: "GCSE-flow.png"
    }
  }]
}) }}

The reworded question does not reference the required grade. It also no longer reveals a question when candidates select "I do not yet have this qualification yet":

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "New initial question",
    img: {
      src: "new-first-question.png"
    }
  }]
}) }}

If candidates do not have a qualification, they're now asked if they're currently studying for one:

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Currently studying question",
    img: {
      src: "currently-studying.png"
    }
  }]
}) }}

If candidates do have a GCSE, but the grade is below the requirement, they're asked if they're retaking the GCSE:

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Currently retaking question",
    img: {
      src: "currently-retaking-2.png"
    }
  }]
}) }}

If candidates are not currently studying for a qualification, and do not already have one, they're shown a page reminding them of the requirements.

The page also:

*  tells candidates that they may be able to take an equivalency test
*  offers candidates the opportunity to give other evidence that they meet the subject standard

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

If a candidate does not have the right GCSE grades, an extra row will appear in the course choice summary box. The summary will say if the provider accepts pending GCSEs or equivalency tests.

If the provider does not accept equivalency tests or pending GCSEs, the candidate will see a warning message:

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
