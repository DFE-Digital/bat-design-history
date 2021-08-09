---
title: Research into setting organisation and user permissions
description: Determining whether users can set organisation and user permissions, and understand the links between the two
date: 2021-06-21
related:
  items:
  - text: Research findings slides
    href: https://docs.google.com/presentation/d/1-NNXVPR68PbK84pU8yMmFpOZcRyJDPYdpdw3WNuYMxU/edit#slide=id.p3
---

We tested the flow which providers use to set up permissions between their own organisation and their partners. We also tested how they set up permissions for users within their own organisation. 

We wanted to see if participants: 

- could understand the permissions model 
- were able to set up permissions to reflect how their organisation works with its partners 

For this iteration of the design we had removed the organisation hint text from checkboxes when selecting user permissions. We had done this because very lengthy hint text is not recommended from an accessibility point of view. 

So in particular we were looking at whether the details component was sufficient to explain the connection between organisation and user permissions.

## What we researched

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Data sharing agreement - confirmation",
    img: {
      src: "dsa-confirmation.png"
    }
  }, {
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

## Who we researched with

We carried out research sessions with:

- 2 higher education institutions (HEIs)
- 4 school-centred initial teacher training (SCITT) providers
- 3 school direct providers

All participants were administrators or admissions leads.

## What we found

All participants set up organisation permissions correctly. 

The user list page gave users a good overview of their colleagues’ permissions. Participants were able to invite users and change their permissions. 

The user details page helped users understand how organisation permissions affected user permissions. This was because it listed out the organisations to which each permission applied next to the permission itself.

But there were some problematic areas.

### Understanding how organisation permissions and user permissions relate to each other

It was not clear to users how organisation permissions and user permissions relate to each other. For example, participants did not realise that they may need to change both organisation and user permissions to allow a user to view criminal convictions.

Even when some participants realised that they needed to make changes to both organisational and user permissions, they were often unable to navigate the service to do it. 

Some participants couldn’t fully explain what they’d done after they had set up organisation permissions.

#### What this means

We could do more to explain to users what we’re asking them to do when it comes to setting up organisation permissions.

If we don’t, it may mean users ask for support when managing permissions and adding users.

### Understanding ‘criminal convictions’ and ‘diversity information’ permissions

Some participants found the ‘criminal convictions’ and ‘diversity information’ permission labels unclear. 

Some participants were not sure what information would be restricted after permitting certain organisations with these permissions.

#### What this means

This may mean some users are reluctant to set up permissions without contacting support.

During the course of the research we changed the wording of the ‘diversity’ permission to ‘XXX’ which worked well. 
The ‘criminal convictions’ label may benefit from further work.

### Understanding which users belong to which organisation

The scope of the users list wasn’t completely clear. Some participants:

- asked if the list of users included their partner organisations
- talked about working out who belonged to which organisation based on their email address

#### What this means

This may cause users to add partner org users to their organisation or to contact support.

During this round, we added the organisation name above the h1 heading as a caption.

We need to test understanding for a user who encounters the multi-organisation organisational settings page.

### Understanding who their partners are when user permissions apply to all or none of the relationships
Some participants didn’t know who their partners were when user permissions applied to all or none of their relationships.

#### What this means
Users may not be sure if they have added the correct permissions for a user.

During this round, we spelt out all the organisations even when it applied to all partners. This worked well.

### Little use of the details component

Participants rarely expanded the details component (the show/hide triangle control) that explained the impact of organisation permissions on user permissions. Most participants had to be directed to use the component as they would not have used it otherwise.

#### What this means

This information is important in building an understanding of how organisation permissions work in tandem with user permissions to determine what a user can and cannot do and for which organisations. So whilst participants were able to set permissions, they had not built a model of what they had actually done and the implications of this.

If users cannot access this information then they may create new users in the system without fully understanding what it is they’re allowing those users to be able to do.

