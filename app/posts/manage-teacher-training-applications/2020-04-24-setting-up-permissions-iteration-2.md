---
title: Setting up permissions (iteration 2)
description: Let providers set up permissions between themselves and their partner organisations
date: 2020-04-24
---

For context you can read about the [first iteration for setting up permissions](/manage-teacher-training-applications/setting-up-permissions).

In this iteration we drastically improved the design and tested it with a user who works at The Millais Alliance. They have 3 partner organisations who ratify their courses for them.

The journeys include:

- setting up permissions for partner organisations for the first time
- inviting a new user to their organisation

## Hypotheses

### Adding a ‘before you start’ page

In the [previous iteration](/manage-teacher-training-applications/setting-up-permissions) we took users traight to the first partner organisation permissions page.

This meant users didn’t understand fully what they were looking at.

If we add a page to set the scene
Users will understand what’s going on and what they’ll need to do

### Clarifying that all users can see basic application information

In the [previous iteration](/manage-teacher-training-applications/setting-up-permissions) it wasn’t clear to users that the default permission for everyone is to see basic application information.

If we add a note in context of each permissions page
Then users will be able to see that the ‘make decisions’ and ‘see safeguarding information’ are additive.

### Clarifying what each permissions means

In the [previous iteration](/manage-teacher-training-applications/setting-up-permissions) it wasn’t clear to users exactly what the permissions meant.

If we add explanations for each permission
Then users can find out exactly what each of these permissions mean

### Making it easier to understand user-level permissions

In the [previous iteration](/manage-teacher-training-applications/setting-up-permissions) we put provider access and related permissions as nested checkboxes.

This allows for a very small amount of space to clarify what these things mean.

If we put the providers and permissions on separate pages
Then users will be able to understand more easily what they’re doing
Because each page has a single focus

### Using tick icons and clearer wording to denote applicable permissions

In the [previous iteration](/manage-teacher-training-applications/setting-up-permissions) it wasn’t easy to see at a glance which permissions were applicable to the user.

If we improve the content and use tick icons
Then users will be able to understand more easily at a glance

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Data sharing",
    caption: "Added this to make the prototype more realistic",
    img: {
      src: "data-sharing.png"
    }
  }, {
    text: "Setting up permissions step 1",
    img: {
      src: "permissions1.png"
    }
  }, {
    text: "Setting up permissions step 2",
    caption: "Permissions for courses run by The Millais Alliance and ratified by University of Brighton",
    img: {
      src: "permissions2.png"
    }
  }, {
    text: "Setting up permissions step 3",
    caption: "Permissions for courses run by The Millais Alliance and ratified by University of Sussex",
    img: {
      src: "permissions3.png"
    }
  }, {
    text: "Setting up permissions step 4",
    caption: "Permissions for courses run by The Millais Alliance and ratified by University of Chichester",
    img: {
      src: "permissions4.png"
    }
  }, {
    text: "Setting up permissions step 4",
    caption: "Check answers",
    img: {
      src: "permissions5.png"
    }
  }, {
    text: "Invite a user step 1",
    caption: "User list page",
    img: {
      src: "user-list.png"
    }
  }, {
    text: "Invite a user step 2",
    caption: "Basic details",
    img: {
      src: "new-user1.png"
    }
  }, {
    text: "Invite a user step 3",
    caption: "Permissions",
    img: {
      src: "new-user2.png"
    }
  }, {
    text: "Invite a user step 4",
    caption: "Check answers",
    img: {
      src: "new-user3.png"
    }
  }, {
    text: "Invite a user step 5",
    caption: "Success message",
    img: {
      src: "new-user4.png"
    }
  }]
}) }}
