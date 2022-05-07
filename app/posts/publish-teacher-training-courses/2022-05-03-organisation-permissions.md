---
title: Giving lead schools the ability to manage permissions for the accredited body
description: We added a way for lead schools to give permission to their accredited bodies to manage courses and locations on their behalf
date: 2022-05-03
tags:
  - PN014
  - PN015
  - PN016
---

{% from "screenshots/macro.njk" import appScreenshots with context %}

We have observed that users belonging to accredited bodies need to manage courses on behalf of their training partners.

These users cannot do this via their organisation and are added to their training partner organisation so that they can.

This is a problem because it allows members of one accredited body to incorrectly view and manage other relationships their partners have.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## What we changed

If the user belongs to a lead school, we have:

- updated the ‘Accredited bodies’ section to show each organisation’s permissions
- added a way to change permissions

If the user belongs to an accredited body, we have:

- updated the ‘Training partner’ section to show permitted actions

## How it works


## Further considerations

In future, we may consider combining courses run by accredited bodies and those of their training partners into one list that can be filtered.

We want to find out more about user needs before considering this further.

## Screenshots

[Lead schools](#lead-schools)
[Accredited bodies](#accredited-bodies)

{{ appScreenshots({
  title: "Lead schools",
  headingLevel: 3,
  items: [{
    id: "accredited-bodies--list",
    text: "Accredited body list showing an accredited bodies without permissions"
  }, {
    id: "accredited-bodies--select-permissions",
    text: "Add accredited body - Select permissions"
  }, {
    id: "accredited-bodies--check-your-answers-no-permissions",
    text: "Add accredited body - check your answers without any permissions selected"
  }, {
    id: "accredited-bodies--check-your-answers-with-permissions",
    text: "Add accredited body - check your answers with permissions selected"
  }, {
    id: "accredited-bodies--change-permissions",
    text: "Change accredited body permissions"
  }, {
    id: "accredited-bodies--with-permissions",
    text: "Accredited body list showing an accredited body with permissions"
  }]
}) }}

{{ appScreenshots({
  title: "Accredited bodies",
  headingLevel: 3,
  items: [{
    id: "training-partner--course-list-with-permissions",
    text: "Training partner course list with permissions"
  }, {
    id: "training-partner--course-list-no-permissions",
    text: "Training partner course list without any permissions"
  }, {
    id: "training-partner--published-course-with-permissions",
    text: "Training partner - published course with permissions"
  }, {
    id: "training-partner--published-course-no-permissions",
    text: "Training partner - published course without permissions"
  }, {
    id: "training-partner--draft-course-with-permissions",
    text: "Training partner - draft course with permissions"
  }, {
    id: "training-partner--draft-course-no-permissions",
    text: "Training partner - draft course without permissions"
  }]
}) }}
