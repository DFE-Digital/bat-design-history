---
title: Prompting users to set up permissions when changing a user’s access
description: Improvements to changing a user’s access to organisations
date: 2020-08-12
---

Currently when a user is given access to a new provider (when changing their access) they have to separately set up permissions for that organisation by clicking ‘Change’ from the details page.

This is problematic because:

* the user will get 2 email notifications – 1 for the change of access and 1 for the change of permissions
* the user has to remember to set up permissions for the newly added organisation

If we prompt users to set up permissions for each organisation they’re added to then users will get 1 email and won’t forget to set up permissions

## How it works

For each organisation the user is added to, a permissions screen will be shown for each organisation (just like when you invite the user for the first time).

The details page should always show the row ‘Organisations this user has access to
’ the ‘Change’ link only appears when the user who is looking at the page belongs to multiple organisations.

When changing access the user has to select at least one organisation. If they want to remove the user from all organisations, they have to press the ‘Delete’ button on the details screen.

At the end of the flow an email will be sent to users explaining what changes have been made.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Details page",
    img: {
      src: "details.png"
    }
  }, {
    text: "Change access – current",
    img: {
      src: "access-1.png"
    }
  }, {
    text: "Change access – remove Wren Academy and add The Royal Borough Teaching School Alliance",
    img: {
      src: "access-2.png"
    }
  }, {
    text: "Set permissions for The Royal Borough Teaching School Alliance",
    img: {
      src: "permissions.png"
    }
  }, {
    text: "Check permissions",
    img: {
      src: "check.png"
    }
  }, {
    text: "Updated details page",
    img: {
      src: "details-flash.png"
    }
  }]
}) }}
