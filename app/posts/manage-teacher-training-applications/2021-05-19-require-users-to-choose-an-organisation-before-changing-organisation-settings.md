---
title: Require users to choose an organisation before changing organisation settings
Description: Users will only be able to change organisational permissions and user settings for one organisation at a time
date: 2021-05-17
---

This builds on the work to [give all users access to view their organisation’s users and permissions](/manage-teacher-training-applications/giving-all-users-access-to-view-their-organisations-users-and-permissions). We separated the ‘your account’ section into:

- your account - the user’s profile, permissions and notification settings
- organisation settings - users and organisational permissions

We will now require users to choose which organisation they want to view settings for, if they belong to more than one.

## Why we’re making these changes

Combining organisation permissions and users adds complication to several pages. This includes:

- showing multiple organisations in the list of users
- having to hide duplicate relationships if the user belongs to both the training provider and accredited body
- showing multiple pages in the user invitation journey, with the possibility of confusion about which page is for which organisation
- having to indicate which permissions can be changed in a user profile, since the user viewing it may not have manage user permissions for all the organisations


This is a lot of extra complexity for the 20% of users who belong to multiple organisations. We think that this change will make it easier for those users to understand permissions.

It may also help to reinforce the principle that users should only belong to organisations they actually work for. They should use organisational permissions to set up other relationships.

## What we’ve done

### Organisation settings

If the user belongs to only one organisation, they will see links to the ‘users’ and ‘organisational permissions’ pages for that organisation.

If the user belongs to more than one organisation, they will see a subheading for each organisation with links to ‘users’ and ‘organisational permissions’ pages.

### Users

If the user belongs to more than one organisation, the caption for the h1 heading will show which organisation they selected.

### User details

In the body of the page we no longer list the organisations which the user has access to.

We’d previously introduced h2 headings to separate out personal details and permissions. That is no longer necessary as the page has been simplified.

We’ve made ‘delete user’ a link rather than a button as it’s a destructive action and rarely used. We’ve moved it to the top, just under the h1, because that’s where we normally place actions.

If the user belongs to more than one organisation, the caption for the h1 heading will show which organisation they selected. 

### Change permissions

We’ve taken the organisation name out of the h1 headings when users change permissions. If the user belongs to more than one organisation, we give its name in the caption. The format is ‘user name - organisation name’.

### Delete user

We’ve changed this from a question to a statement, to better fit with other h1 headings. 

We’re including the name of the organisation, to make sure it’s clear where the user will be deleted from.

### Invite user

We’ve removed the page for selecting which organisations the new user will have access to. This will already have been selected.

If the user belongs to more than one organisation, we give its name in the caption. The format is ‘user name - organisation name’.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  title: "Screenshots: organisation settings",
  items: [{
    text: "Organisation settings",
    img: {
      src: "organisation-settings.png"
    }
  }, {
    text: "Organisation settings (belongs to multiple organisations)",
    img: {
      src: "organisation-settings--multi.png"
    }
  }]
}) }}

{{ appScreenshots({
  title: "Screenshots: organisation permissions",
  items: [{
    text: "Organisation permissions",
    img: {
      src: "organisation-permissions.png"
    }
  }, {
    text: "Organisation permissions (belongs to multiple organisations)",
    img: {
      src: "organisation-permissions--multi.png"
    }
  }, {
    text: "Organisation permissions - edit",
    img: {
      src: "organisation-permissions-edit.png"
    }
  }, {
    text: "Organisation permissions - edit - success",
    img: {
      src: "organisation-permissions-edit--success.png"
    }
  }]
}) }}

{{ appScreenshots({
  title: "Screenshots: user list",
  items: [{
    text: "User list",
    img: {
      src: "user-list.png"
    }
  }, {
    text: "User list (belongs to multiple organisations)",
    img: {
      src: "user-list--multi.png"
    }
  }]
}) }}

{{ appScreenshots({
  title: "Screenshots: user details",
  items: [{
    text: "User details",
    img: {
      src: "user-details.png"
    }
  }, {
    text: "User details (belongs to multiple organisations)",
    img: {
      src: "user-details--multi.png"
    }
  }]
}) }}

{{ appScreenshots({
  title: "Screenshots: invite user",
  items: [{
    text: "User - invite - personal details",
    img: {
      src: "user-new--personal-details.png"
    }
  }, {
    text: "User - invite - personal details (belongs to multiple organisations)",
    img: {
      src: "user-new--personal-details--multi.png"
    }
  }, {
    text: "User - invite - permissions",
    img: {
      src: "user-new--permissions.png"
    }
  }, {
    text: "User - invite - permissions (belongs to multiple organisations)",
    img: {
      src: "user-new--permissions--multi.png"
    }
  }, {
    text: "User - invite - additional permissions",
    img: {
      src: "user-new--additional-permissions.png"
    }
  }, {
    text: "User - invite - additional permissions (belongs to multiple organisations)",
    img: {
      src: "user-new--additional-permissions--multi.png"
    }
  }, {
    text: "User - invite - check answers",
    img: {
      src: "user-new--check.png"
    }
  }, {
    text: "User - invite - check answers (belongs to multiple organisations)",
    img: {
      src: "user-new--check--multi.png"
    }
  }, {
    text: "User - invite - success",
    img: {
      src: "user-new--success.png"
    }
  }]
}) }}

{{ appScreenshots({
  title: "Screenshots: edit user permissions",
  items: [{
    text: "User - edit permissions - permissions",
    img: {
      src: "user-edit--permissions.png"
    }
  }, {
    text: "User - edit permissions - permissions (belongs to multiple organisations)",
    img: {
      src: "user-edit--permissions--multi.png"
    }
  }, {
    text: "User - edit permissions - additional permissions",
    img: {
      src: "user-edit--additional-permissions.png"
    }
  }, {
    text: "User - edit permissions - additional permissions (belongs to multiple organisations)",
    img: {
      src: "user-edit--additional-permissions--multi.png"
    }
  }, {
    text: "User - edit permissions - check answers",
    img: {
      src: "user-edit--check.png"
    }
  }, {
    text: "User - edit permissions - check answers (belongs to multiple organisations)",
    img: {
      src: "user-edit--check--multi.png"
    }
  }, {
    text: "User - edit permissions - success",
    img: {
      src: "user-edit--success.png"
    }
  }]
}) }}

{{ appScreenshots({
  title: "Screenshots: delete user",
  items: [{
    text: "User - delete",
    img: {
      src: "user-delete.png"
    }
  }, {
    text: "User - delete - success",
    img: {
      src: "user-delete--success.png"
    }
  }]
}) }}
