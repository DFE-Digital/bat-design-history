---
title: Managing users
description: Providing a way for users to view, invite and remove users from their organisation
date: 2020-04-15
tags:
  - users
  - permissions
related:
  items:
    - text: Research playback
      href: https://docs.google.com/presentation/d/1Kb8QIVThwopRVoJYfM5hRiZ1ks6j1CE-lQlz4X9p_hM/edit?usp=sharing
    - text: Research recordings
      href: https://drive.google.com/drive/u/0/folders/1SvRYGvLBB3GTaqgRRQ_42ouavpGaADac
screenshots:
  items:
    - Users
    - Invite a user
    - Invite a user success
    - View a user
    - Delete a user
eleventyComputed:
  eleventyNavigation:
    key: publish-managing-users
---

This work closely follows [user management patterns](/manage-teacher-training-applications/adding-users) from the Apply for teacher training (Apply) service. There is an assumption that Publish teacher training courses (Publish) and Apply have common users. Maintaining consistent user interface (UI) supports the intention to provide a consistent experience across Find and Apply.

## User needs

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a Publish user
  I need to see the other users that have access to my organisation
  So that I can check the appropriate people have access"
}) }}

{{ appUserNeed({
  description: "As a Publish user
  I need to be able to add and remove users
  So that only the appropriate people have access to my organisation"
}) }}

## Hypotheses

### Request Access

A Publish user can currently request access for a new user. They currently access this feature via a link in the sidebar on the Organisation page.

If we rename the Request Access flow to Invite User and include it within the proposed Users feature then it will still be easy to find yet be located more logically in our information architecture.

### An updated header design

As part of this research we included an alternative header design for Publish. Prior research and support tickets provide evidence that some users get confused between Find and Publish due to their similarities.

The design adds two new links; Notifications and Users being added to the header.

If we change the appearance of the header then users will easily identify they are not on Find.

If we move links that are to do with user management and account preferences to the header then users will be able to find them easily.

## Who we tested with

- Middlesex University
- Nottinghamshire TORCH SCITT
- Prince Henry’s High School & South Worcestershire SCITT
- University of Bedfordshire
- University College London

## Research feedback

All the research participants were able to find the Users link in the updated header, and successfully invite and delete users.

> “Really simple, easy and straightforward”

Many participants expressed concerns about the level of access a user may have within Publish.

Questions were asked about who has the rights to perform certain tasks.

- Who has the ability to delete courses?
- Who has the ability to delete users?

> “Not all users should be able to delete other users…”

A participant requested ‘manager’ and ‘administrator’ roles and mentioned that only an ‘administrator’ should be able to withdraw a course.

Concern over the approval process was also expressed.

- Who approves the new account?
- On what grounds is approval determined?
- How long does it take?

*[SCITT]: School centred initial teacher training
*[SCITTs]: School centred initial teacher training
