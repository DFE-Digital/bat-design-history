---
title: Showing equality and diversity information to providers
description: How we plan to show equality information to those who should see it, but make sure it’s protected
date: 2020-08-06
related:
  items:
  - text: Equality monitoring
    href: /apply-for-teacher-training/equality-monitoring/
  - text: Apply – September 2019
    href: /apply-for-teacher-training/apply-september-2019/#equality-and-diversity
---

{% from "image/macro.njk" import appImage with context %}

In March we started collecting equality and diversity information from candidates. This is an optional questionnaire that we ask candidates to complete to reduce discrimination on the basis of sex, disability and ethnicity.

We’ll only make this information available to providers once an application is complete.

We're also introducing a new permission to provider accounts so that only those with ’view diversity information’ permission will be able to view the results.

This means that for most people looking at most applications, they won’t be able to see the diversity information.

## Different display scenarios

There’s three new pieces of data to display, but a few different scenarios to cover.

They are:
* The candidate has completed the diversity questionnaire or not
* The application is complete or not
* The viewing user has permission to see diversity information or not

We want providers to be clear what information is available, but also why they can’t necessarily see it.

## First iteration

We explored adding additional rows to the applicant details summary list, but with a placeholder line if they couldn’t be shown.

{{ appImage({
  file: 'multiple-lines-short-grey.png',
  alt: '3 lines in a summary list, with grey text that reads ‘Only available when the candidate accepts your offer’'
})}}

Once you add multiple rows it gets somewhat repetitive. We tried making them grey to knock them back a bit - and because they’re more of a message from the system than a candidate’s answer

For users without the correct permissions the text isn’t quite right - so they need more explanation.

{{ appImage({
  file: 'multiple-lines-long-grey.png',
  alt: '3 lines in a summary list, with grey text that reads ‘Only available to users with ‘view diversity information’ permission once an offer has been accepted’'
})}}

## Second iteration

After thinking about it a bit, we are going to try making a new section for the equality and diversity information. This means it doesn‘t have to sit with the biographic information, and we can be more free with the guidance we give.

Rather than show the same placeholder line for each row, we’ll hide and show the entire summary list.


{% from "screenshots/macro.njk" import appScreenshots with context %}

{{ appScreenshots({
  headingLevel: 3,
  items: [
  {
    text: "Scenario 1: Questionnaire not completed",
    img: {
      src: "1-scenario-1.png"
    }
  }, {
    text: "Scenario 2: Questionnaire completed, application in progress, user has view rights",
    img: {
      src: "2-scenario-2.png"
    }
  }, {
    text: "Scenario 3: Questionnaire completed, application in progress, user does not have view rights",
    img: {
      src: "3-scenario-3.png"
    }
  }, {
    text: "Scenario 4: Questionnaire completed, offer accepted, user has view rights",
    img: {
      src: "4-scenario-4.png"
    }
  }, {
    text: "Scenario 5: Questionnaire completed, offer accepted, user does not have view rights",
    img: {
      src: "5-scenario-5.png"
    }
  }]
}) }}

Not shown in the screenshots, but as a nice touch we can say “your offer” or “an offer” depending on whether the provider has made an offer or not.
