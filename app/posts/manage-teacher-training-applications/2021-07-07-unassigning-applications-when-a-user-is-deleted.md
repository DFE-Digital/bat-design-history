---
title: Unassigning applications when a user is deleted
description: Letting the signed in user know that applications will be unassigned if they delete a user from an organisation
date: 2021-07-07
---
{% from "figure/macro.njk" import appFigure with context %}

This is part of the work to [let users assign applications to themselves or other users](/manage-teacher-training-applications/assigning-applications-to-users/).

This design is based on the idea that the signed in user needs to:

- understand that applications will be unassigned from a deleted user
- see which applications are assigned to the user they are deleting, so that they can reassign them

After creating the design, we decided that we should first establish the strength of these needs and learn more about them.

We therefore did not show the new design to research participants, but instead discussed what they would expect to happen after deleting a user.

## What we changed

We added a message to the delete user confirmation page, which will appear only if there is a risk that applications in progress will become unassigned to any user.

## How it works

We display a message if any applications assigned to the user being deleted:

- have a status of ‘received’, ‘interviewing’, ‘offered’ or ‘awaiting conditions’
- are not assigned to any other user

The message includes a link to the applications list, with filters applied to show applications which meet the criteria.

This gives the signed in user the opportunity to reassign applications.

{{ appFigure({
  image: {
    file: "unassigning-applications-delete-user-confirmation-message.png",
    alt: "The delete user confirmation screen with a message saying that applications are assigned to the user"
  }
}) }}

If no applications meet the criteria, we do not display a message.

{{ appFigure({
  image: {
    file: "unassigning-applications-delete-user-confirmation-no-message.png",
    alt: "The delete user confirmation screen without any message about assigned applications"
  }
}) }}

### After the user has been deleted

When the signed in user deletes the user, all applications are unassigned from them. Their name is also removed from the assigned user filter and the assign user form.

The intention is that there will be a record of the user being assigned and unassigned. This change to the timeline and activity log will be in another design history entry.

## Other considerations

We considered some possible iterations including:

- a flow to help users reassign applications when another user leaves the organisation
- a way to bulk assign applications to users

We want to find out more about user needs before considering these further.
