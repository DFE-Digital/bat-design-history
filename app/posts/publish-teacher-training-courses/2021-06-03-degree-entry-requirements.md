---
title: Degree entry requirements
description: Asking providers what their degree entry requirements are
date: 2021-06-03
---

{% from "screenshots/macro.njk" import appScreenshots with context %}

Some providers require a minimum degree classification, such as a 2:2, on top of the statutory requirement for a degree. Not meeting this can be a reason why candidates are rejected. Research has also shown that where candidates are aware of this before applying, it can take them a long time to sift through courses in order to find those that will accept their degree classification.

Currently, the requirement for a degree, any minimum classification, and any subject requirements, are all described by providers within a single text box labelled "Qualifications needed".

In order to enable candidates to more easily find courses which will accept their degree classification, we are changing this text box to a set of structured questions and answers.

These questions have to be answered for each course separately, as analysis research showed that whilst most providers have the same degree requirements across all their courses, some have different degree entry requirements depending on the course type.

## How it works

When a provider views a course that has been ‘rolled over’, they see a prompt to answer the new question about degree requirements.

{{ appScreenshots({
  hideContents: true,
  items: [{
      text: "Prompt to add degree requirements",
      img: { src: "prompt-for-degree-requirements.png" }
    }]
}) }}

The first question asks whether or not there is a degree minimum classification.

The hint text explains that if a minimum classification is specified, candidates will be discouraged but not blocked from applying if they do not meet this level.

{{ appScreenshots({
  hideContents: true,
  items: [{
      text: "Do you require a minimum degree classificaiton?",
      img: { src: "do-you-require-minimum-degree.png" }
    }]
}) }}


If answering ‘yes’, a second question asks what the minimum degree classification is. Only 2:1, 2:2 or Third are given as options.

The ‘(or equivalent)’ text refers to non-UK degrees which use different classifications.

{{ appScreenshots({
  hideContents: true,
  items: [{
      text: "Do you require a minimum degree classificaiton?",
      img: { src: "degree-minimum-classification.png" }
    }]
}) }}

For non-Primary training courses, providers are told that candidates will be given generic guidance that their degree subject should match the subject they want to teach.

However, providers are able to add more specific requirements by answering ‘Yes’ and entering some additional text. In research, providers typically use this for describing a particular percentage of a course which should match the subject, based on course modules.

{{ appScreenshots({
  hideContents: true,
  items: [{
      text: "Do you have any additional degree subject requirements?",
      img: { src: "degree-subject-requirements.png" }
    }]
}) }}

Upon returning to the course description tab, providers are shown a summary of their answers, and any additional text they entered.

If they follow the ‘Change’ link, they are taken through each of the questions from the beginning.

{{ appScreenshots({
  hideContents: true,
  items: [{
      text: "Degree requirements summarised",
      img: { src: "degree-requirements-summarised.png" }
    }]
}) }}

## User research findings

These changes were usability tested with 5 providers in May 2021. Most participants were able to answer the new questions with ease, although some indicated they would need to check their policy with colleagues.

There was broad agreement that the guidance indicating that candidates would be ‘discouraged but not blocked’ from applying if they did not meet the minimum degree classification was a good balance, as they did consider exceptional cases.
