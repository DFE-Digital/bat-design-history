---
title: Creating a new permission allowing users to set up interviews
description: Splitting the set up interviews user permission from the make decisions permission
date: 2021-05-12
---

Until now, the ‘make decisions’ permission has included the ability to set up, change and cancel interviews. This piece of work splits it out, so that ‘set up interviews’ is a separate permission.

We’ll give the new permission to all users who currently have the ‘make decisions’ permission. This means that no users will gain or lose permissions when we introduce the new one.

## Why we made the change

Providers have told us that some members of staff need to be able to set up, change and cancel interviews but should not be able to make decisions.

The change will also make it possible to reflect a relationship between organisations where:

- a school direct partner sets up interviews
- the accrediting body for the course oversees applications, either making the final decision or updating the service with the decision

## Naming the new permission

We considered calling the permission ‘set up, change and cancel interviews’.

We decided to use ‘set up interviews’ because:

- we don’t think users will be confused by it
- it’s concise

## Organisational permissions

We decided not to add a ‘set up interviews’ organisational permission.

This means that a user who has the permission for an organisation will be able to set up interviews for all courses it runs or ratifies.

We do not think that providers will need to control this permission in a more detailed way. This also allows us to use a simpler design because we do not need to:

- ask users to set it as an organisational permission
- show lists of organisations which the permission does and does not apply to

## What we changed

### Setting up and managing user permissions

The ‘set up interviews’ permission is now shown:

- as an option when a user is invited
- as an option when a user’s permissions are changed
- in a user’s details, if the user being viewed has the permission
- in the ‘user permissions’ section of the user’s account, if they have the permission

### Application pages

If an application has a status of ‘received’ or ‘interviewing’ we show a prompt which includes:

- the date and time when the application will be automatically rejected
- buttons for actions based on the status of the application and the user’s permissions

Now that setting up interviews has been split from making decisions, we’ve changed the possible combinations of buttons to:

- ‘make decision’ and ‘set up interview’ - if the status is ‘received’ and the user has both permissions
- ‘set up interview’ - if the status is ‘received’ and the user only has ‘set up interviews’ permission
- ‘make decision’ - if the user only has ‘make decisions’ permission, whatever the status
- no buttons - if none of the other options applies

We’ve made the wording of the prompts more passive, since the user may not have permission to make a decision. The wording is:

- if a decision has not been made by today
- if a decision has not been made by tomorrow
- if a decision has not been made within X days

We’ve also made sure that the h2 heading for the prompt matches the buttons:

- Set up an interview or make a decision
- Set up an interview
- Make a decision
- no h2 (if there are no buttons)

## Future considerations

### Letting users know about the change

We should consider telling users that the permission has been split. We do not always tell users about new features, but this is one which users might miss otherwise.

We could tell them using either an email or the provider newsletter.

### Mentioning interviews on the organisational permissions pages

We have decided not to mention interviews when users set up or change organisational permissions. We think that it’s unnecessary detail at that point.

If we find that this confuses users then we could mention interviews, for example by either:

- changing the label from ‘View applications’ to ‘View applications and set up interviews’
- adding a new ‘Set up interviews’ legend with both organisations listed underneath, as for ‘View applications’

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Additional permissions",
    img: {
      src: "invite-user--additional-permissions.png"
    }
  }, {
    text: "User details",
    img: {
      src: "user-details.png"
    }
  }, {
    text: "Prompt when status is received and can make decisions and set up interviews",
    img: {
      src: "received--both.png"
    }
  }, {
    text: "Prompt when status is received and can make decisions but not set up interviews",
    img: {
      src: "received--make-decision.png"
    }
  }, {
    text: "Prompt when status is received and can set up interviews but not make decisions",
    img: {
      src: "received--setup-interview.png"
    }
  }, {
    text: "Prompt when status is received but cannot set up interviews or make decisions",
    img: {
      src: "received--none.png"
    }
  }, {
    text: "Prompt when status is interviewing and can make decisions",
    img: {
      src: "interviewing--make-decision.png"
    }
  }, {
    text: "Prompt when status is interviewing but cannot make decisions",
    img: {
      src: "interviewing--none.png"
    }
  }]
}) }}
