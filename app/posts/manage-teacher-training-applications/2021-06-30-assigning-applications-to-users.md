---
title: Assigning applications to users
description: Let users assign an application to one or more users in their organisation
date: 2021-06-30
---

Users need to be able to assign their applications to users within their organisation.

## What we changed and why

We introduced a way for users to assign an application. This allows providers to manage who within their team is responsible for an application.

In the new assignment form, we provide a list of users within all organisations the user belongs to. They can assign one or more users to the application, including themselves.

## How it works

### Application list

If an application is assigned to one or more users, their names appear on the application card after the words ‘Assigned to:’

There is no ‘assigned to’ line if the application is not assigned to anyone.

It is not possible to assign someone to an application from this page. The user needs to click into application details first.

### Application details

An application can be assigned from any section of the application details. The new content appears above the application’s sub-navigation, below any prompt (for example “Set up an interview or make a decision”).

If one or more users are assigned to the application then we show an alphabetical list of users and a change link. If the list includes the signed in user, their name will appear first with “(you)” appended.

If no one is assigned to the application then we show a default message and a change link.

### Assigning users to an application

When changing who is assigned to an application, we display an alphabetical list of users within the signed in users organisation.

The signed in user is displayed at the top of the list with “(you)” appended to their name for easy identification and self-assignment.

If the list of options contains duplicate names, we include an email address hint to make it easier to choose the right name.

After submitting the form, the user is returned to the section of the application details which they came from. For example if they were looking at the timeline then they will be returned to the timeline.

A success message is displayed on the application details page.

## Other considerations

We considered some changes which were not implemented.

- Separating the checkboxes by organisation. We decided not to do this because only 24% of users are linked to 2 or more organisations and we differentiate users by email address.
- Assigning many applications to many users. This was not implemented in this iteration as we could not establish a need for it.
- Assigning applications to users outside the organisation or to users without access to Manage. This was not implemented in this iteration as we wanted to learn more from research before implementing something more complex.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Application unassigned",
    img: {
      src: "assigning-applications-to-users-application-details-unassigned.png"
    }
  }, {
    text: "Application assigned",
    img: {
      src: "assigning-applications-to-users-application-details-assigned.png"
    }
  }, {
    text: "Application assigned (without inset prompt)",
    img: {
      src: "assigning-applications-to-users-application-details-assigned-without-inset.png"
    }
  }, {
    text: "Assign users form",
    img: {
      src: "assigning-applications-to-users-assign-users-form.png"
    }
  }, {
    text: "Assign users form (with duplicate names)",
    img: {
      src: "assigning-applications-to-users-assign-users-form-with-duplicate-names.png"
    }
  }, {
    text: "Success message",
    img: {
      src: "assigning-applications-to-users-application-details-success-message.png"
    }
  }]
}) }}
