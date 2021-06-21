---
title: Showing partners when user permissions apply to all or none of the relationships
description: Reinstating the list of partners next to each user permission even when the permission applies to all or none of the relationships
date: 2021-06-21
---

To give users less to read, we [stopped spelling out the partner organisations when the permissions apply to all or none of the relationships](/manage-teacher-training-applications/moving-organisational-permissions-guidance-above-the-form/#making-the-descriptions-more-concise-when-all-or-none-of-the-permissions-are-applicable) to give users less to read.

But research showed that some users were unsure about who their partners were.

So we’ve decided to spell out each partner even if the user permissions appliy to all or none of the relationships.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "User details",
    img: {
      src: "user-details.png"
    }
  }, {
    text: "User permissions form",
    img: {
      src: "user-permissions-form.png"
    }
  }]
}) }}
