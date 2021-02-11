---
title: Showing when an offer will be automatically declined
description: Telling users how long they have before an offer will be automatically declined if the candidate does not respond
date: 2021-02-11
---

The service tells users how long they have to make a decision before an application is automatically rejected. It's shown on both the application list and the application itself.

The service does not tell users how long they have before an offer is automatically declined if the candidate does not respond. 

It's good practice to let users know that something is going to happen automatically if no action is taken. In addition, research shows that some users want to follow up with candidates and this will help them decide when to make contact.

While doing this work, we made several other minor changes to improve consistency within the service. We‘ll now use ‘make a decision’ to describe what a user does and ‘respond‘ to describe how a candidate reacts to an offer. 

We're also going to be more precise about deadlines. Applications are automatically rejected after 40 working days at 11:59pm. Offers are automically declined after 10 working days at 11:59pm.

## Showing on the application list when an offer will be automatically declined

- The group heading will be changed from “Waiting for candidate action“ to “Waiting for candidate to respond to offer”.
- If the offer will be declined tonight it will say “Last day for candidate to respond”. 
- If the offer will be declined tomorrow night it will say “1 day for candidate to respond”.
- If the offer will be declined 2 or more days from now it will say, for example, “2 days for candidate to respond”.

## Showing on the application a prompt saying when an offer will be automatically declined 

We'll add a prompt to the application details, offer, interviews, notes and timeline pages.

- If the offer will be declined tonight it will say, for example, “Your offer will be automatically declined at the end of today (15 August 2020 at 11:59pm) if the candidate does not respond.”
- If the offer will be declined tomorrow night it will say, for example, “Your offer will be automatically declined at the end of tomorrow (16 August 2020 at 11:59pm) if the candidate does not respond.”
- If the offer will be declined 2 or more days from now, it will say, for example, “Your offer will be automatically declined in 2 days (17 August 2020 at 11:59pm) if the candidate does not respond.”

## If there’s no offer deadline in the system

An offer only has a deadline after providers have made decisions about all of a candidate’s applications.

For this iteration we’re not going to explain this in the service. We’ll consider it later. 

We’ll also consider notifying users when all decisions have been made, telling them the date and time when their offer will be automatically declined.

## Other changes

We’ll make a few changes to applications in the ‘received’ and ‘interviewing’ states. 

- The group heading will be changed from “Deadline approaching: respond to the candidate” to “Deadline approaching: make decision about application”.
- If the application will be rejected tonight it will say “Last day to make decision”.
- If the application will be rejected tomorrow night it will say “1 day to make decision”.
- If the application will be rejected 2 or more days from now it will say, for example, “2 days to make decision”.

We'll reflect these changes in the application.

- If the application will be rejected tonight it will say, for example, “This application will be automatically rejected at the end of today (15 August 2020 at 11:59pm) if you do not make a decision.”
- If the application will be rejected tomorrow night it will say, for example, “This application will be automatically rejected at the end of tomorrow (16 August 2020 at 11:59pm) if you do not make a decision.”
- If the application will be rejected 2 or more days from now it will say, for example, “This application will be automatically rejected in 2 days (17 August 2020 at 11:59pm) if you do not make a decision.”

We’ll also change way we remind users to give feedback when an application is automatically rejected. 

- The group heading on the application list will change from “Give feedback: you did not respond in time” to “Give feedback: you did not make a decision in time”.
- The prompt on the application page will change from “You did not respond to the application within 40 working days. Tell the candidate why their application was unsuccessful.” to “You did not make a decision about the application within 40 working days. Tell the candidate why their application was unsuccessful.”

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Application list",
    img: {
      src: "application-list.png"
    }
  }, {
    text: "Decline prompt - today",
    img: {
      src: "decline-prompt--today.png"
    }
  }, {
    text: "Decline prompt - tomorrow",
    img: {
      src: "decline-prompt--tomorrow.png"
    }
  }, {
    text: "Decline prompt - anytime after tomorrow",
    img: {
      src: "decline-prompt--beyond.png"
    }
  }, {
    text: "Make decision prompt - today",
    img: {
      src: "decide-prompt--today.png"
    }
  }, {
    text: "Make decision prompt - tomorrow",
    img: {
      src: "decide-prompt--tomorrow.png"
    }
  }, {
    text: "Make decision prompt - anytime after tomorrow",
    img: {
      src: "decide-prompt--beyond.png"
    }
  }, {
    text: "Give feedback prompt",
    img: {
      src: "feedback-prompt.png"
    }
  }]
}) }}
