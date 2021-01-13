---
title: Withdrawing an application at any time
description: Let providers withdraw an application at the candidate’s request at any time
date: 2021-01-13
related:
  items:
  - text: Reasons for closing an application
    href: https://docs.google.com/spreadsheets/d/1lKDA7E7PLvp6pC2lUWqSOK4AycfpLV0TOpkp_o-R4nY/edit#gid=0
    description: Map of what reasons are available at what stage of the application process
---

We previously explored a [very different way to let providers close an application at any time](/manage-teacher-training-applications/closing-an-application/).

But we weren’t happy with it for several reasons.

Firstly, having a process called ‘close application’ (which was a new term) didn’t always make sense. For example, when making a decision the choices were ‘make offer’ and ‘close application’.

Secondly, having a new term caused us to end up with a new ‘closed’ status.

Thirdly, if the user did click ‘close application’ when making a decision, it was strange that one of the reasons was ‘because the candidate requested it’.

We tried changing the term to ‘withdraw or reject application’ which would familiar to users. But if the user answered ‘no’ to all the reasons, then we didn’t know whether this would result in it being a rejection or a withdrawal.

## What we did and why

After more thought we realised that we have 2 main categories of reasons for an application to not progress:

- A provider can reject an application or withdraw an offer. This may or may not be the candidate’s fault.
- A candidate can withdraw an application. This is only ever triggered by a candidate – either by doing it themselves in the candidate service or by asking providers to do it for them.

Trying to combine these 2 things was the source of the problems we were now facing.

So we have gone back to the previous design where the option behind ‘make decision’ is ‘reject application’.

And we’ve added an option to ‘withdraw at candidate’s request’ at any time throughout the process.

We no longer need a question under ‘withdraw offer’ to redirect users to update the status of conditions. This is because withdrawing an offer goes back to how it was before. An offer can only be withdrawn when in the ‘offered’ state.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Withdraw application link",
    img: {
      src: "application-details.png"
    }
  }, {
    text: "Withdraw application (reasons)",
    img: {
      src: "withdraw--01.png"
    }
  }, {
    text: "Withdraw application (other advice)",
    img: {
      src: "withdraw--02.png"
    }
  }, {
    text: "Withdraw application (check answers)",
    img: {
      src: "withdraw--03.png"
    }
  }, {
    text: "Withdraw application (confirmation banner)",
    img: {
      src: "withdraw--04.png"
    }
  }]
}) }}
