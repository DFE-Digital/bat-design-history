---
title: Restructuring permissions
description: Todo
date: 2021-05-19
---

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  title: "Screenshots: your account",
  items: [{
    text: "Account - user permissions",
    img: {
      src: "account-permissions.png"
    }
  }, {
    text: "Account - user permissions (belongs to multiple organisations)",
    img: {
      src: "account-permissions--multi.png"
    }
  }]
}) }}

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
