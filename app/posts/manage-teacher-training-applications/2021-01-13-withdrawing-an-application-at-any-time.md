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

We [previously explored a very different way to let providers close an application at any time](/manage-teacher-training-applications/closing-an-application/).

But we weren’t happy with it for several reasons. Here’s a few of them:

Firstly, having a process called ‘Close application’ (which is a new term) doesn’t always make sense. For example, when making a decision the choices were ‘Make offer’ and ‘Close application’.

Secondly, having a new term caused us to end up with a new ‘Closed’ status.

Thirdly, if the user does click ‘Close application’ when making a decision, it’s strange that one of the reasons is ‘Because the candidate requested it’.

We tried changing the term to ‘Withdraw or reject application’ which felt better as we were using simple terms that are familiar. But if the user answers ‘No’ to all the structured reasons, then we didn’t know whether this would result in it being a rejection or a withdrawal.

## What we did and why

After more thought we realised that we have 2 main categories:

Rejecting an application means it was unsuccessful. This may or may not be the candidate’s fault.

Withdrawing an application. This is only ever triggered by a candidate.

Trying to combine these 2 things was the source of the problems we were now facing.

So we have gone back to the previous design where the option behind ‘Make decision’ is ‘Reject application’.

And we’ve added an option to ‘Withdraw at candidate’s request’ at any time throughout the process.

This work is consciously not polished and will be tested in research before doing that.

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
