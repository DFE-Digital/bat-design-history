---
title: Showing when an offer will be automatically declined
description: Telling users when an offer will be automatically declined within the application list and application pages
date: 2021-02-11
---

## Showing when an offer will be automatically declined on the application list

- The h2 was changed from ‘Waiting for candidate action‘ to ‘Waiting for candidate to respond to offer’.
- If the offer will be declined tonight (at 11:59pm) it says ‘Last day for candidate to respond’.
- If the offer will be declined tomorrow night (at 11:59pm) it says ‘1 day for candidate to respond’.
- If the offer will be declined any later such as 2 days from now, it says ‘2 days for candidate to respond’.

## Showing when an offer will be automatically declined on the application page

We added a prompt to the offer page.

- If the offer will be declined tonight (at 11:59pm) it says, for example, ‘Your offer will be automatically declined at the end of today (15 August 2020 at 11:59pm) if the candidate does not respond.’.
- If the offer will be declined tomorrow night (at 11:59pm) it says, for example, ‘Your offer will be automatically declined at the end of tomorrow (16 August 2020 at 11:59pm) if the candidate does not respond.’.
- If the offer will be declined any later such as 2 days from now, it says ‘Your offer will be automatically declined in 2 days (17 August 2020 at 11:59pm) if the candidate does not respond.’.

## What if there’s no offer deadline in the system yet?

Offers only have a deadline after providers have made a decision on all of their applications.

For this iteration we’re not going to explain this in the service. But we will look to address this in a separate piece of work.

We may also look to notify users when all decisions have been made and that the deadline has now been added.

## Other changes

We are now more clearly distinguishing between prompts for providers to make a decision and explanations about waiting for candidates to respond.

So we made a few changes to applications in the ‘received’ and ‘interviewing’ states as follows:

- The h2 was changed from ‘Deadline approaching: respond to the candidate
’ to ‘Deadline approaching: make decision about application’
- If the application will be rejected tonight (at 11:59pm) it says ‘Last day to make decision’.
- If the application will be rejected tomorrow night (at 11:59pm) it says ‘1 day to make decision’.
- If the application will be declined rejected any later such as 2 days from now, it says ‘2 days to make decision’.

We also reflected these changes on the application page.

- If the application will be rejected tonight (at 11:59pm) it says, for example, ‘This application will be automatically rejected at the end of today (15 August 2020 at 11:59pm) if you do not make a decision.’.
- If the application will be rejected tomorrow night (at 11:59pm) it says, for example, ‘This application will be automatically rejected at the end of tomorrow (16 August 2020 at 11:59pm) if you do not make a decision.’.
- If the application will be rejected any later such as 2 days from now, it says ‘This application will be automatically rejected in 2 days (17 August 2020 at 11:59pm) if you do not make a decision.’.

We also changed the ‘give feedback’ prompts as follows:

- The `h2` on the application list changed from ‘Give feedback: you did not respond in time’ to ‘Give feedback: you did not make a decision in time’.
- The prompt on the application page changed from ‘You did not respond to the application within 40 working days. Tell the candidate why their application was unsuccessful.’ to ‘You did not make a decision about the application within 40 working days. Tell the candidate why their application was unsuccessful.’

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
