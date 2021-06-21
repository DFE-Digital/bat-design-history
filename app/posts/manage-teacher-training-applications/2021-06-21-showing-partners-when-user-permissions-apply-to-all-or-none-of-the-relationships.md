---
title: Showing partners when user permissions apply to all or none of the relationships
description: Reinstating the list of partners next to each user permission even when the permission applies to all or none of the relationships
date: 2021-06-21
---

To give users less to read, [we stopped spelling out the partners when the permissions apply to all or none of the relationships](/manage-teacher-training-applications/moving-organisational-permissions-guidance-above-the-form/#making-the-descriptions-more-concise-when-all-or-none-of-the-permissions-are-applicable).

But this was problematic because some users felt unsure who their partners were.

So we’ve decided to revert back to spelling out each partner. This may also help users relate user permissions back to organisational permissions.

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
