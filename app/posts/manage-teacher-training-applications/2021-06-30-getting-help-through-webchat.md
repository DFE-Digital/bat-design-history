---
title: Getting help trough webchat
description: Letting users contact support via webchat
date: 2021-06-30
---

UCAS currently gives providers a way to get support via email and phone. And our service only allows support via email.

We did some research that showed that providers would prefer to contact support via instant webchat.

And we think that if we let users get support through webchat it’ll we increase the percentage of issues that can be solved instantly through one interaction.

We’ll know the ability to get help via chat is succcessful if the:

- time to resolve the issue is reduced via chat when compared to email
- satisfaction rating is higher via chat when compared to email
- number of issues via email are reduced
- percentage of issues that require multiple interactions is reduced
- resolution rate is higher

## What we did

We made several changes to the footer to include a link that lets users start chatting with a support agent.

### Adding chat as an option

We added an option to get help via online chat.

When advisors are available to chat, there’s a link that says ‘Speak to an advisor now’.

When no advisors are available, there’s no link and instead we say ‘available Monday to Friday, 10am to midday (except public holidays)’.

This updates automatically with JavaScript. We’ve decided not to announce the dynamic change to screen readers because it’s:

- equitable - sighted users will have to have scrolled to the bottom when the status changes to be informed about that change
- unnecessary - the chance of a user needing support, scrolling to the bottom as the chat feature goes online or offline is low

### Remove survey out of footer

Currently there’s a line that says ‘Alternatively, [give feedback through our survey]’ that appears under ‘Get support’.

But we’ve removed this because there’s already a link to the survey at the top of the page and it’s not related to getting support.

### Changed the email details

Currently, we mention that ‘we respond within 5 working days, or one working day for more urgent queries’

We changed this to ‘up to 5 day response times, 1 day for urgent requests’.

### Changed the link learn more about how the service works

Currently, there’s a link that says ‘How to use Manage teacher training applications’ that appears under ‘Get support’.

But as it’s not a channel of support, we moved it to the bottom left as a regular footer link.

We also changed the link text to ‘How to use this service’ to be more concise.

## Notes

cannot change email because the support tickets through zendesk cover multiple products not just manage.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Offline",
    img: {
      src: "offline.png"
    },
  }, {
    text: "Online",
    img: {
      src: "online.png"
    },
  }]
}) }}
