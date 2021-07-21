---
title: Selecting references
description: Letting candidates choose which references to submit with their application
date: 2021-07-19
---

{% from "screenshots/macro.njk" import appScreenshots with context %}

Previously, candidates were unable to choose which 2 references would be sent with their application to providers. They would request several references and whichever 2 they received first would be sent with their application.

This would result in support requests from candidates asking to swap their references when they received more.

This was also causing confusion for referees. If a candidate had already received 2 references and then a 3rd referee tried to submit a reference, the system would not allow them to.

In response, we decided to build a feature that allows candidates to select which 2 references they want to send to providers.

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Select 2 references link on task list",
    img: {
      src: "select-2-references-link.png"
    }
  }]
}) }}

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Selecting references section",
    img: {
      src: "select-2-references-section.png"
    }
  }]
}) }}

## Telling candidates that they can choose which 2 references to send to providers

When testing the ‘Select your references’ feature, we realised candidates did not know which references would be sent to providers, or that they could choose which 2 to send, until later in the process.

Instead, they assumed that the first 2 received would be sent, or that someone from the Department for Education would select 2 references for them.

As a result, some candidates would only request 2 references, so that they could control which 2 got sent.

### Giving candidates more information sooner

We realised that candidates needed to know that they can choose which 2 get sent from the outset. That way, they could feel confident in requesting many references.

To do this, we moved some of the guidance from the ‘Choose your referees’ page onto the task list page. We also made it clearer that candidates can request many references and then select which 2 they want to send with their application.

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "References guidance in task list",
    img: {
      src: "references-guidance-task-list.png"
    }
  }]
}) }}

### Prompting candidates to select 2 references

We realised that the messaging in the emails and in the task list did not tell candidates what to do once they'd received 2 or more references. So we decided to prompt them to select 2 as soon as they receive 2 or more.

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Select 2 references email prompt",
    img: {
      src: "select-2-prompt-email.png"
    }
  }]
}) }}

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Select 2 references prompt in task list",
    img: {
      src: "select-2-prompt-task-list.png"
    }
  }]
}) }}

### Telling candidates that they can change their selection

Candidates did not realise that they could change their selection if more references came in later.

So we decided to change the wording in the email they get when they receive additional references after already selecting 2.

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Email explaining that you can change your selection",
    img: {
      src: "you-can-change-selection-email.png"
    }
  }]
}) }}

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Guidance in task list explaining that you can change your selection",
    img: {
      src: "you-can-change-selection-task-list-2.png"
    }
  }]
}) }}

## Helping candidates choose the right referees

Sometimes candidates would choose referees who were unable to give a reference through the online form.

This was generating a lot of support queries from referees who were trying to submit references over email, in line with their organisational policies.

Support colleagues were having to:

* tell referees that email references are not accepted
* contact individual candidates to ask them to choose different referees

This was also a waste of referees’ time, because they were writing references that could not be used.

In order to reduce the number of support queries, we decided to give candidates more information about what their referees will need to do. That way, they could make better decisions about who to choose as referees.

We’ve now changed the guidance around choosing referees to include more information about what providing a reference will involve, as well as the word limit. We also explicitly say that references sent by email will not be accepted.

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "‘Choose your referees’ page",
    img: {
      src: "choose-your-referees-page.png"
    }
  }]
}) }}
