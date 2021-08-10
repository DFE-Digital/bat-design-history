---
title: Organisation and user permissions research
description: Finding out whether users can set organisation and user permissions, and understand the links between the two
date: 2021-06-21
related:
  items:
  - text: Research findings slides
    href: https://docs.google.com/presentation/d/1-NNXVPR68PbK84pU8yMmFpOZcRyJDPYdpdw3WNuYMxU/edit#slide=id.p3
  - text: Design history entry about displaying permissions in the user list
    href: https://bat-design-history.netlify.app/manage-teacher-training-applications/displaying-permissions-in-the-user-list/ 
  - text: Design history entry about moving organisation permissions guidance
    href: https://bat-design-history.netlify.app/manage-teacher-training-applications/moving-organisational-permissions-guidance-above-the-form/ 
---

This round of research was part of an extended piece of work improving permissions.

In this round, we wanted to see if participants could: 

- understand the permissions model 
- set up permissions to reflect how their organisation works with its partners 
- set up permissions for a new user to reflect how they would work within their organisation

## What we researched

We tested the flow which providers use to set up permissions between their own organisation and their partners. We also tested how they set up permissions for users within their own organisation. 

### Organisation permissions

We started with an email which participants would receive when a partner organisation joined the service. It gave some background information and asked the participant to click to set up organisation permissions.

The flow continued with the 'set up organisation permissions' start page, then a page to set the permissions each partner organisation. 

After all organisation permissions had been chosen, the participant reached a 'check answers' page and then a confirmation page.

### User permissions

We asked participants to add a user and give them appropriate permissions. The flow took them from the organisation settings page to the users page, where they could click a button to invite a user.

After giving the name and email address of the user, the participant had to set permissions. 

For this iteration of the design we had removed hint text from checkboxes when selecting user permissions. We had done this because very long hint text is considered bad for accessibility. 

In particular we were looking at whether the details component was sufficient to explain the connection between organisation and user permissions.

## Who we researched with

We carried out research sessions with:

- 2 higher education institutions (HEIs)
- 4 school-centred initial teacher training (SCITT) providers
- 3 school direct providers

All participants were administrators or admissions leads.

## What we found

All participants set up organisation permissions correctly. 

The new user list design gave participants a good overview of their colleagues’ permissions. Participants were able to invite users and change their permissions. 

The user details page helped users understand how organisation permissions affected user permissions. It did this by listing the organisations to which each permission applied next to the permission itself.

Some participants had trouble understanding:

- how organisation permissions and user permissions relate to each other
- what ‘criminal convictions’ and ‘diversity information’ permissions included
- which users belong to which organisation
- who their partners are, when user permissions apply to all or none of the relationships

We also found that few participants expanded the details component on the user permissions page.

### How organisation permissions and user permissions relate to each other

It was not clear to particpants how organisation permissions and user permissions relate to each other. 

For example, some participants did not realise that they may need to change both organisation and user permissions to allow a user to view criminal convictions. Even some participants who did understand this were unable to navigate the service to do it. 

Some participants could not fully explain what they’d done after they had set up organisation permissions.

### ‘Criminal convictions and professional misconduct’ and ‘diversity information’ permissions

Some participants found the ‘criminal convictions’ and ‘diversity information’ permission labels unclear. They were not sure what information would be restricted after permitting certain organisations with these permissions.

During the course of the research we changed the wording of the ‘diversity’ permission to ‘sex, disability and ethnicity information’. Participants found this wording to be clear.

We did not change the 'criminal convictions' wording.

### Understanding which users belong to which organisation

The scope of the users list wasn’t completely clear. Some participants:

- asked if the list included users in their partner organisations
- talked about working out who belonged to which organisation based on their email address

This may cause users to add partner organisation users to their organisation or to contact support.

During the round of research we added the organisation name above the h1 heading as a caption. This helped users understand what they were looking at. 

We still need to test understanding of the organisational settings page for users who belong to multiple organisations.

### Understanding who their partners are when user permissions apply to all or none of the relationships 

Some participants did not know who their partners were when user permissions applied to all or none of their relationships.

Users may not be sure if they have added the correct permissions for a user.

We responded to this by changing the content during the round of research. Spelling out all the organisations even when it applied to all partners. This worked well.)))

### Details component

Most participants had to be directed to use the details component (the show/hide triangle control). They would not have used it otherwise.

This meant they would not have seen the content explaining the impact of organisation permissions on user permissions. This information is important in building an understanding what a user can and cannot do. 

Although participants were able to set permissions, they did not have a strong mental model of what they had done and the implications of it.

If users cannot access this information then they may create new users without fully understanding what those users will be able to do.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
    text: "Set up organisation permissions - start page",
    img: {
      src: "set-up--start.png"
    }
  }, {
    text: "Set up organisation permissions - relationship",
    img: {
      src: "set-up--relationship.png"
    }
  }, {
    text: "Set up organisation permissions - check answers",
    img: {
      src: "set-up--check.png"
    }
  }, {
    text: "Set up organisation permissions - confirmation",
    img: {
      src: "set-up--confirmation.png"
    }
  }, {
    text: "Set up organisation permissions - organisation settings",
    img: {
      src: "organisation-settings.png"
    }
  }, {
    text: "Users - list",
    img: {
      src: "user--list.png"
    }
  }, {
    text: "Adding a user - permissions form (details panel open)",
    img: {
      src: "permissions-form--open.png"
    }
  }, {
    text: "User - details",
    img: {
      src: "your-permissions.png"
    }
  }]
}) }}