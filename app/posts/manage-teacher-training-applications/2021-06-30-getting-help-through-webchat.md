---
title: Getting help through online chat
description: Giving users a way to get help through online chat
date: 2021-06-30
---

UCAS providers users with email and phone support. We only give email support.

Research shows that providers prefer to get help through online chat.

We think that online chat will:

- increase the percentage of issues solved with one interaction
- increase user’s satisfaction score
- decrease the time to resolve the issue
- decrease the number of requests through email

## What we did

We’ve made several changes to ‘Get support’ area within the footer to inlcude an option to chat.

### Including a chat option

When chat is available, there’s a link that says ‘Speak to an adviser now (opens in new window)’.

When chat is unavailable, there’s a sentence that says ‘Available Monday to Friday, 10am to midday (except public holidays)’.

The status changes automatically without a page refresh.

We decided not to notify users of this (visually or audibly) because it’s unlikely to be relevant to the user.

### Removal of survey link

Currently there’s a line that says ‘Alternatively, [give feedback through our survey]’.

We removed this because:

- there’s already a link to the survey at the top of the page
- it’s not related to getting support

### Changing the content around email

Currently, we say ‘we respond within 5 working days, or one working day for more urgent queries’

We’ve tweaked this to say ‘blah’.

### Changing and moving the link to learn more about how the service works

Currently, the link says ‘How to use Manage teacher training applications’.

But as it’s not a type of support, we’ve moved it to the bottom left as a regular footer link.

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
