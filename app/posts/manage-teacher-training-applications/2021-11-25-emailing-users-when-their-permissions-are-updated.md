---
title: Emailing users when their permissions are updated
description: Adding a new email notification which is sent when a user’s permissions are updated.
date: 2021-11-25
---

{% from "email/macro.njk" import appEmail %}

We already send users an [email when they’re added to or removed from an organisation](/manage-teacher-training-applications/emailing-users-who-are-added-to-or-removed-from-an-organisation/). The emails mention what permissions they were given.

We’ll now send users an email when their permissions are updated.

If a colleague updates a user’s permissions, the user will be sent this:

<!-- markdownlint-disable MD025 -->

{{ appEmail({
  subject: "((user_name)) updated your permissions for ((provider_name)) - manage teacher training applications",
  content: "Dear ((first_name))

((user_name)) updated your permissions for ((provider_name)).

((has_permissions??

You have permission to:

- manage users
- manage interviews
- view criminal convictions and professional misconduct

))

((has_no_permissions??

You only have permission to view applications.

))

Manage applications:

((application_list_link))
"
}) }}

<!-- markdownlint-enable MD025 -->

If a member of the support team updates a user’s permissions, the user will be sent  this:

{{ appEmail({
  subject: "Your permissions have been updated for ((provider_name)) - manage teacher training applications",
  content: "Dear ((first_name))

Your permissions have been updated for ((provider_name)).

((has_permissions??

You have permission to:

- manage users
- manage interviews
- view criminal convictions and professional misconduct

))

((has_no_permissions??

You only have permission to view applications.

))

Manage applications:

((application_list_link))

"
}) }}
