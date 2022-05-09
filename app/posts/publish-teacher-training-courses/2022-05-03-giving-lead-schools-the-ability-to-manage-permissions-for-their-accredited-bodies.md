---
title: Giving lead schools the ability to manage permissions for their accredited bodies
description: We added a way for lead schools to give permission to their accredited bodies to manage courses and locations on their behalf
date: 2022-05-03
tags:
  - PN015
screenshots:
  items:
    - text: Accredited body list showing an accredited bodies without permissions
      src: accredited-bodies--list.png
    - text: Add accredited body - Select permissions
      src: accredited-bodies--select-permissions.png
    - text: Add accredited body - check your answers without any permissions selected
      src: accredited-bodies--check-your-answers-no-permissions.png
    - text: Add accredited body - check your answers with permissions selected
      src: accredited-bodies--check-your-answers-with-permissions.png
    - text: Change accredited body permissions
      src: accredited-bodies--change-permissions.png
    - text: Accredited body list showing an accredited body with permissions
      src: accredited-bodies--with-permissions.png
---

We have observed that users belonging to accredited bodies need to manage courses on behalf of their training partners.

These users cannot do this via their organisation and are added to their training partner organisation so that they can.

This is a problem because it allows members of one accredited body to incorrectly view and manage other relationships their partners have.

This work extends upon the changes we introduced that allowed [lead schools to manage their accredited body relationships](/publish-teacher-training-courses/managing-accredited-bodies-if-youre-a-lead-school/).

## User need

The user need this work aims to address is:

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## What we changed

We have:

- updated the ‘Accredited bodies’ section to show each organisation’s permissions
- added a way to change permissions

We made these changes so that users have a way to change permissions for the accredited bodies that ratify their courses.

## How it works

### Viewing existing accredited body relationships

We show the accredited bodies in alphabetical order.

For each accredited body, we show:

- accredited body name
- accredited body description - if there isn’t a description, we show ‘Not entered’
- accredited body permissions - if there aren’t any permissions, we show ‘None - view only’

### Adding a new accredited body relationship

Users belonging to a lead school can add a new accredited body to their organisation.

When a user clicks on the ‘Add accredited body’ button, they then need to:

- find the accredited body by name or organisation code using an autocomplete
- add a description of the accredited body - this is optional
- select which permissions they want to give the accredited body - this is optional
- check their answers before adding

We send an email to all members of the organisation and the accredited body to notify them of the new relationship.

#### Find accredited body by name or organisation code

To add a new accredited body relationship, users need to find the accredited body by name or organisation code using an autocomplete.

If JavaScript is disabled, we show a select component instead of an autocomplete.

Users cannot add a duplicate accredited body. If they try, we display an error message ‘Accredited body already added’.

#### Add a description of the accredited body

The accredited body’s description is optional. If the user doesn’t add a description, we show ‘Not entered’.

#### Select permissions for an accredited body

Users can optionally give the accredited body permissions to manage courses and locations on their behalf.

Permissions include:

- Add course
- Change courses
- Publish courses
- Change course vacancies
- Withdraw courses
- Manage locations

If the user doesn’t select any permissions, we show ‘None - view only’.

If the user selects the ‘Add course’ permission, we also allow the accredited body user to delete the course.

We use checkboxes instead of radio buttons because:

- they’re easier to scan and read
- they do not require users to select ‘no’ for each category which does not apply

We put the permissions in an order which matches the lifecycle of a course.

Withdrawing should be last as you can't do anything else to it afterwards.

### Changing an accredited body’s permissions

An accredited body’s permissions can be changed by clicking the change link.

When a user clicks change, we display a list of permissions with the current permissions selected.

If the permissions are changed, we send an email notification to all users in the accredited body describing the change.

## Further considerations

In future, we may consider combining courses run by accredited bodies and those of their training partners into one list that can be filtered.

We want to find out more about user needs before considering this further.
