---
title: Assigning applications to users
description: Let users assign an application to one or more users in their organisation
date: 2021-06-30
---

Users need to be able to assign applications to themselves or other users within the organisations they belong to.

We know that some organisations already do this outside of our service. We want to make it possible within the service, so that users do not need to refer elsewhere to find out what applications are assigned to them.

## User data analysis

### Number of users in an organisation

The number of users in an organisation varies between higher education institutions (HEIs), school-centred initial teacher training providers (SCITTs) and school direct providers (SDs).

- Number of users in an HEI: average 6, maximum 37
- Number of users in a SCITT: average 3, maximum 10
- Number of users in an SD: average 3, maximum 18

Research has shown that providers with a large number of users will typically assign applications to individuals to process. Providers with fewer users are less likely to do so.

### Number of organisations which users belong to

- 76% of users belong to 1 organisation
- 16% of users belong to 2 organisations
- 8% of users belong to 3 or more organisations

This means that 24% of users will be able to assign applications to users in 2 or more organisations. We need to make sure that these users are able to find the user they want to assign the application to.

### Percentage of users with a unique name

- 97% of users have a unique first and last name in Manage
- 3% of users do not have a unique first and last name in Manage

We need to make it possible for the signed in user to distinguish between multiple users with the same name. 

## What we changed

We introduced a page which allows users to assign an application. It can be reached from the application details page of a candidate’s application. 

On this new assignment page we show a list of users within all organisations the signed in user belongs to. They can assign the application to one or more users, including themselves.

All users can assign applications and have applications assigned to them, whatever permissions they have.

The applications list and applications details pages show a list of which users an application is assigned to.

## How it works

### Assigning an application to users

On the new assignment page we display an alphabetical list of users within the signed in user’s organisations.

The signed in user is displayed at the top of the list with “(you)” appended to their name. This will make it easier for users to assign applications to themselves.

If the list of options contains duplicate names, we include the user’s email address in a hint. This will make it possible to choose between two users with the same name.

After submitting the form, the user is returned to the section of the application details which they came from. For example if they were looking at the timeline then they will be returned to it.

A success message is displayed on the application details page.

### Application list

If an application is assigned to one or more users, their names appear on the application card. Nothing appears if the application is not assigned to anyone.

It is not possible to assign an application to someone from this page. The user needs to click into application details first.

### Application details

An application can be assigned from any section of the application details. The new content appears above the application’s sub-navigation, below any prompt (for example “Set up an interview or make a decision”).

If one or more users are assigned to the application then we show an alphabetical list of users and a change link. If the list includes the signed in user, their name will appear first with “(you)” appended.

If no one is assigned to the application then we show a default message and a change link.

## Other considerations

We considered some changes which were not implemented. We want to learn more through research about whether they're needed.

### Showing the organisations which users belong to

For the assignment page we considered either:

- separating the checkboxes by organisation
- giving the email address of all users

We decided not to do this because we think that the signed in user will be looking for a specific person to assign the application to. 

It's possible to do this in a single alphabetical list of names without email addresses (except where a name appears more than once).

We intend to explore this in research, to find out whether participants need to be able to browse for users to assign applications to. In that case it may be useful for them to know which organisation each user belongs to.

### Assigning many applications to many users

We have not implemented ‘bulk’ assignment in this iteration as we have not established a need for it. 

### Assigning applications to people outside the organisation

This could include assigning to:

- a user in the partner organisation for the application (for example the accredited body, if the signed in user belongs to the training provider)
- a user in any other organisation which uses the service
- someone who does not use the service

 One or more of these could be part of a future iteration.

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
