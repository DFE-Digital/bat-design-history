---
title: Create account
description: Sign up, sign in, recover password and dashboard
---
{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "Start page"},
    {text: "Create an account"},
    {text: "Reset password"},
    {text: "Sign in"},
    {text: "Dashboard"}
  ]
}) }}
