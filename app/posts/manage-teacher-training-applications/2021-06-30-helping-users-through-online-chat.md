---
title: Helping users through online chat
description: Giving users a way to get help through online chat
date: 2021-06-30
---

UCAS provides users with email and phone support. Our service only provides email.

Out of email, phone and online chat, our research shows chat is most preferred.

We think that giving users the option to chat will:

- decrease the time to resolve the issue
- decrease the number of requests through email
- increase the percentage of issues solved with one interaction
- result in a better satisfaction score compared to email

## What we did

We made some changes to the ‘Get support’ area of the footer to accommodate chat.

### Including a chat option

When chat is available, there’s a link that says ‘Speak to an adviser now (opens in new window)’.

When chat is unavailable, there’s a sentence that says ‘Available Monday to Friday, 10am to midday (except public holidays)’.

The status changes automatically without a page refresh. We decided not to notify users of this (visually or audibly) because it’s unlikely to be relevant to the user.

Chat relies on JavaScript to work. In the case where JavaScript is unavailable, there’s a sentence that says ‘Unavailable’.

### Removal of survey link

Currently there’s a line that says ‘Alternatively, [give feedback through our survey]’.

We removed this because:

- there’s already a link to the survey at the top of the page
- it’s not related to getting support

### Changing the content around email

Currently there’s a sentence which says ‘we respond within 5 working days, or one working day for more urgent queries’

We changed this to ‘You’ll get a response within 5 working days, or one working day for urgent requests.’ to focus more on the user.

### Changing and moving the link to learn more about how the service works

Currently there’s a ‘How to use Manage teacher training applications’ link.

But it’s not a type of support so we moved it to the bottom left as a regular footer link.

We also changed the link text to ‘How to use this service’ to be more concise.

### Changing the ‘Get support’ heading to ‘Get help’

We changed the heading to ‘Get help’ to be more concise.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Offline",
    img: {
      src: "offline.png"
    }
  }, {
    text: "Online",
    img: {
      src: "online.png"
    }
  }]
}) }}
