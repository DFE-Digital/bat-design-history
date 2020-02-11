---
title: Adding users
description: First iteration of letting users invite other users to their organisation(s) to help manage applications
date: 2020-01-27
tags: awaiting-validation
---

First iteration to let users add more users to their organisation(s) to help them manage applications without relying on support agents to setup accounts.

## Hypotheses

Currently there's no way for a user to add users to their organisation. The current process depends on a support agent adding every user manually using Support for Apply. As we onboard more providers this makes it slow to create accounts and means users have to rely on support agents.

If we let users invite colleagues to their organisation(s)
Then they'll be able to add users quickly without having to rely on support agents
We’ll know this works when:
- new users are created without the help of a support agent

## Design notes

A support agent will still be needed to create the account of the first user of an organisation.

The ‘Users’ section in the navigation menu only appears if the user can manage users.

## Research findings

1 participant so far. Was able to invite a user without a problem. The issue of who would be able to remove users was raised.

[Research on Lookback](https://lookback.io/watch/j5Z8YfSp4g85kEYQn)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "User list",
      caption: "The provider column disappears if the user is part of just one organisation."
    },
    {
      text: "Add new user",
      caption: "The provider checkboxes disappear if the user is part of just one organisation."
    },
    {
      text: "Success message"
    }
  ]
}) }}
