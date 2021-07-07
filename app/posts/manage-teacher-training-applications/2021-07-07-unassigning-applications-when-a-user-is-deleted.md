---
title: Unassigning applications when a user is deleted
description: Automatically unassigning applications when a user is deleted from the organisation
date: 2021-07-07
---

This is part of [letting users assign applications to themselves or other users](/manage-teacher-training-applications/assigning-applications-to-users/).

Users need to see which applications have been assigned to the user they are deleting.

## What we changed

We added a message to the delete user confirmation page to highlight whether the user is assigned to any applications. This allows the admin user the opportunity to reassign any ’in progress’ applications before deleting the user.

## How it works

We display a message if any applications have a status of ‘received’, ‘interviewing’, ‘offered’ or ‘awaiting conditions’ and that are not assigned to any other user.

We also display a link to the applications list, which automatically filters the list to show applications assigned to the user and in one of those four states. This gives the admin user the opportunity to reassign applications to another user.

If there are not any applications that meet the criteria, we do not display a message.

{% from "figure/macro.njk" import appFigure with context %}
{{ appFigure({
  image: {
    file: "unassigning-applications-delete-user-confirmation.png",
    alt: "The delete user confirmation screen showing a message that applications are assigned to the user"
  }
}) }}

When the admin user deletes the user, all references to the user are deleted from candidate applications. The user’s name is also removed from the assigned user filter and the assign user form.

## Other considerations

We considered some changes which were not implemented.

- Reassigning applications when a user leaves the organisation
- Assigning applications to users in bulk, which meet chosen criteria

Neither changes were included in this iteration as we wanted to learn more from research before implementing something more complex.
