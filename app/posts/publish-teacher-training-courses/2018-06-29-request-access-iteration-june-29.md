---
title: Request access
description: Request access for users.
date: 2018-06-29
---

A small iteration on the [initial design](/publish-teacher-training-courses/check-ucas-data#request-access) adding a form legend, the new user’s organisation and success message.

We’d like to record whether the new user is part of the same organisation or a different one.

More about the request access process on the ticket: [BATSA-384](https://dfedigital.atlassian.net/browse/BATSA-384)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Request access",
    img: { src: "request-access.png" }
  }, {
    text: "Access requested",
    img: { src: "access-requested.png" }
  }]
}) }}
