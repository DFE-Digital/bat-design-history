---
title: Showing the organisation name when the user belongs to one organisation
description: Always displaying the organisation name inside the caption even if the user belongs to just one organisation
date: 2021-06-21
---

We previously decided to [only show which organisation the user selected if they belong to more than one organisation](/manage-teacher-training-applications/require-users-to-choose-an-organisation-before-changing-organisation-settings/#users).

But some users were slightly confused about which organisation they were managing, even if they only belong to just one organisation.

So we’ve changed it so that the organisation name is part of the caption when the user belongs to one or multiple organisations.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Organisational permissions",
    img: {
      src: "org-permissions.png"
    }
  }, {
    text: "User list",
    img: {
      src: "user-list.png"
    }
  }, {
    text: "User details",
    img: {
      src: "user-details.png"
    }
  }, {
    text: "New user",
    img: {
      src: "new-user.png"
    }
  }, {
    text: "Edit user",
    img: {
      src: "edit-user.png"
    }
  }]
}) }}
